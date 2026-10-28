---
sidebar_position: 18
title: 18. Runge-Kutta Tracking
description: Cartesian and reference-relative RK tracking, slicing and synchrotron radiation
---

# Runge-Kutta Tracking

Ocelot uses Runge–Kutta integration both for particle tracking in magnetic fields
and for Cartesian trajectories used in synchrotron-radiation (SR) calculations.
CSR also uses RK trajectories when `CSR.rk_traj=True`.

Choose the output coordinates to suit the calculation:

| Interface | Input and output | Length convention |
| --- | --- | --- |
| `RungeKuttaGlobalTM` (also `RungeKuttaTM`) | Fixed field-frame positions and normalized **mechanical momenta** | Cartesian Z interval |
| `RungeKuttaOcelotTM` | Positions and normalized mechanical momenta relative to the bent reference, in transported Bishop axes | Reference arc length, between normal planes |
| `rk_track_in_field` | Cartesian **slopes**, with trajectory and field samples | Cartesian Z interval |

`ParticleArray` uses `(x, px, y, py, tau, delta)`, where transverse momenta are
normalized by the fixed reference momentum and `delta=(E-E0)/(p0*c)`.
Slopes `dX/dZ` are different from normalized momenta, including in a drift.
Both transfer-map wrappers accept normalized mechanical momenta directly. The RK force
uses the particle's magnetic rigidity and arrival time includes its velocity.

For the relative map, `tau=ct-s/beta0`; for the fixed-frame map, `tau=ct-Z/beta0`,
with the entrance offset retained. In either case positive tau means later arrival.

These are static magnetic-field calculations with forward motion in Cartesian Z.
The maps do not add vector-potential terms for canonical coordinates inside fields,
or physical fringe/edge kicks absent from the supplied field. A custom callback
must accept scalar and NumPy-array coordinates and return `(Bx,By,Bz)` in tesla.

Global beam tracking keeps only the current particle state and accumulated path,
so its working array memory does not grow with `npoints`. The low-level
`rk_track_in_field` still stores all trajectory and field samples for SR/CSR.
Both paths use the same RK4 stepping equations; no new user option is needed.

## Imports


```
%matplotlib inline
from copy import deepcopy
import numpy as np
import matplotlib.pyplot as plt

from ocelot.common.globals import m_e_GeV, speed_of_light
from ocelot.cpbd.beam import Beam, ParticleArray
from ocelot.cpbd.elements import Bend, Drift, Quadrupole, Undulator
from ocelot.cpbd.magnetic_lattice import MagneticLattice
from ocelot.cpbd.navi import Navigator
from ocelot.cpbd.track import tracking_step
from ocelot.cpbd.high_order import rk_track_in_field
from ocelot.cpbd.transformations.exact_drift import ExactDriftTM
from ocelot.cpbd.transformations.second_order import SecondTM
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaGlobalTM, RungeKuttaOcelotTM

plt.rcParams.update({"figure.figsize": (8, 4), "axes.grid": True})
energy = 1.0  # total reference energy [GeV]
beta0 = np.sqrt(1 - (m_e_GeV / energy)**2)
brho = energy * 1e9 * beta0 / speed_of_light

def apply_element(element, initial):
    result = deepcopy(initial)
    for tm in element.tms:
        tm.apply(result)
    return result
```

## 1. A bend in fixed and reference-relative coordinates

Track the zero reference and a nearby particle through one bend. The zero particle
moves in the fixed field frame and remains zero in reference-relative coordinates.
`SecondTM` is the usual approximate analytical comparison. RK body tracking does
not reproduce additional pole-face maps; here both pole-face angles are zero.

The global map's exit is a fixed-Z plane, while the relative map's exit is a
reference-normal plane at the specified arc length. These are different surfaces.
We use a single element here: global output must not simply be passed to ordinary
local maps and interpreted as a surveyed laboratory trajectory.


```
initial = ParticleArray(n=2)
initial.E = energy
initial.rparticles[:, 1] = [150e-6, 20e-6, 0, 0, 0, 0]
for method in (SecondTM, RungeKuttaGlobalTM, RungeKuttaOcelotTM):
    bend = Bend(l=0.5, angle=0.01, e1=0, e2=0, npoints=301, tm=method)
    result = apply_element(bend, initial)
    print(f"{method.__name__:20s}: reference x={result.x()[0]: .6e} m, "
          f"probe x={result.x()[1]: .6e} m")
```

    SecondTM            : reference x= 0.000000e+00 m, probe x= 1.599924e-04 m
    RungeKuttaGlobalTM  : reference x=-2.500063e-03 m, probe x=-2.340062e-03 m
    RungeKuttaOcelotTM  : reference x=-8.239525e-18 m, probe x= 1.599924e-04 m


## 2. A prescribed longitudinal field profile and consistent slices

A `Drift` can act as an arbitrary field region. Here a smooth, prescribed vertical
field illustrates coordinate handling; it is not a complete Maxwell-consistent
three-dimensional fringe-field model.

`RungeKuttaOcelotTM` defines one reference from the original element entrance.
Every slice uses that reference's position and axes at its own entrance and exit.
It converts incoming local coordinates back into the fixed field frame before
tracking. `start_l` is reference arc length, not the callback's Cartesian Z.

Particle crossings of the exit plane are found by advancing through the field,
including momentum and time, rather than extrapolating a straight tangent.


```
length = 0.7

def profile(z):
    return 0.5 * (np.tanh((z - 0.12) / 0.045) - np.tanh((z - 0.58) / 0.045))

def prescribed_field(x, y, z):
    return 0*x, 0*x + brho * 0.04 * profile(z), 0*x

region = Drift(l=length, mag_field=prescribed_field, npoints=301)
lattice = MagneticLattice([region], method={Drift: RungeKuttaOcelotTM})
initial = ParticleArray(n=2)
initial.E = energy
initial.rparticles[:, 1] = [0.00025, 0.00015, 0, 0, 0.0001, 0.02]
whole = apply_element(region, initial)
sliced = deepcopy(initial)
navigator = Navigator(lattice)
positions = np.linspace(0, length, 31)
history = [sliced.rparticles.copy()]
for ds in np.diff(positions):
    tracking_step(lattice, sliced, dz=ds, navi=navigator)
    history.append(sliced.rparticles.copy())
history = np.asarray(history)
np.testing.assert_allclose(sliced.rparticles, whole.rparticles, atol=2e-10, rtol=0)
print("Largest full-versus-sliced difference:", np.max(abs(sliced.rparticles-whole.rparticles)))
fig, axes = plt.subplots(1, 2, figsize=(10, 3.6))
axes[0].plot(positions, history[:, 0, 1]*1e3)
axes[0].set(xlabel="reference s [m]", ylabel="relative x [mm]")
axes[1].plot(positions, history[:, 4, 1]*1e3)
axes[1].set(xlabel="reference s [m]", ylabel="tau [mm]")
plt.tight_layout()
plt.show()
```



![png](/img/18_runge_kutta_tracking_files/18_runge_kutta_tracking_6_0.png)



    Largest full-versus-sliced difference: 9.192893841991623e-13


## 3. An offset quadrupole

The default quadrupole field includes `dx`, `dy` and `tilt`. In the global map an
offset produces a visible orbit kick. In the relative map the reference follows
the actual field, so this kick is absorbed into the reference definition.

The following element is a `Quadrupole` tracked with RK. `XYQuadrupole` remains a
separate analytical first-order model. Its approximate survey and the exact
Lorentz reference need not coincide. CSR now samples the analytical XY reference
when `rk_traj=False`, and its actual quadrupole field when `rk_traj=True`.


```
probe = ParticleArray(n=2)
probe.E = energy
probe.rparticles[:, 1] = [1e-4, 2e-4, -1e-4, -2e-4, 0, 0.02]
quad = Quadrupole(l=1.0, k1=1.0, dx=-0.02, dy=-0.03, npoints=301)
for method in (RungeKuttaGlobalTM, RungeKuttaOcelotTM):
    quad.set_tm(method)
    result = apply_element(quad, probe)
    print(method.__name__, "reference (x,y) [m]:", result.rparticles[[0,2], 0])

# Constructor settings survive later method selection; explicit settings override them.
quad.set_tm(RungeKuttaOcelotTM, npoints=501)
print("npoints:", quad.tms[0].npoints)
```

    RungeKuttaGlobalTM reference (x,y) [m]: [-0.00919706  0.01629864]
    RungeKuttaOcelotTM reference (x,y) [m]: [-2.77362310e-17  6.24016233e-17]
    npoints: 501


## 4. Finite-beta timing and off-energy drift

At 1 MeV total energy the velocity difference is readily visible. A particle with
positive energy deviation arrives earlier, giving negative tau if the entrance
arrival offset is zero. The RK drift should agree with `ExactDriftTM` in all six
coordinates, including for nonzero transverse momentum.


```
low_energy = ParticleArray(n=2)
low_energy.E = 0.001
low_energy.rparticles[5] = 0.02
low_energy.rparticles[1, 1] = 0.01
exact = apply_element(Drift(l=1, tm=ExactDriftTM), low_energy)
rk = apply_element(Drift(l=1, tm=RungeKuttaOcelotTM, npoints=51), low_energy)
np.testing.assert_allclose(rk.rparticles, exact.rparticles, atol=2e-14, rtol=0)
print("tau after 1 m [mm]:", rk.tau()*1e3)
print("x after 1 m [mm]:", rk.x()*1e3)
```

    tau after 1 m [mm]: [-6.82920568 -6.7739677 ]
    x after 1 m [mm]: [0.         9.77374564]


## 5. Raw Cartesian trajectories, including the SR format

`rk_track_in_field` keeps its slope interface and nine-row blocks:
`(X, X', Y, Y', Z, delta, Bx, By, Bz)`. Do not pass nonzero `ParticleArray.px`
and `py` directly without converting momenta to slopes.

`N` samples include both endpoints, giving `N-1` RK4 steps. Optional
`return_path=True` also returns accumulated path length from the same RK4 stages.
For a static field, elapsed `ct` is `path/beta_particle`.

For a constant vertical field with curvature `h`, a parallel-entry circular
trajectory at fixed Cartesian Z satisfies
$$
X(Z)=-\frac{h Z^2}{1+\sqrt{1-h^2 Z^2}},\qquad
X'(Z)=-\frac{hZ}{\sqrt{1-h^2 Z^2}}.
$$
The familiar `cos(h*s)` expression instead uses arc length `s`.


```
h = 0.2  # curvature [1/m]
z_length = 0.3

def constant_field(x, y, z):
    return 0*x, brho*h + 0*x, 0*x

slope_input = np.zeros((6, 1))
trajectory, path = rk_track_in_field(slope_input, z_length, 101, energy,
                                    constant_field, return_path=True)
z = trajectory[4::9, 0]
x = trajectory[0::9, 0]
expected_x = -h*z*z / (1 + np.sqrt(1-(h*z)**2))
np.testing.assert_allclose(x, expected_x, atol=1e-12, rtol=0)
fig, axes = plt.subplots(1, 2, figsize=(10, 3.6))
axes[0].plot(z, x*1e3, label="RK4")
axes[0].plot(z, expected_x*1e3, "--", label="circle")
axes[0].set(xlabel="Cartesian Z [m]", ylabel="X [mm]")
axes[0].legend()
axes[1].plot(z, (x-expected_x)*1e12)
axes[1].set(xlabel="Cartesian Z [m]", ylabel="X error [pm]")
plt.tight_layout()
plt.show()
print("Path length [m]:", path[-1, 0])
print("Elapsed ct [m]:", path[-1, 0]/beta0)
```



![png](/img/18_runge_kutta_tracking_files/18_runge_kutta_tracking_12_0.png)



    Path length [m]: 0.3001802922263922
    Elapsed ct [m]: 0.30018033141791517


## 6. A numerical linear-map check without changing the optics API

Selecting RK does not replace `first_order_tms`, `twiss()` or the nominal survey
with results inferred from an arbitrary field. A short finite-difference check can
measure the linear response of the actual tracking. Keep the physical field,
reference energy and reference trajectory fixed while perturbing each particle.
Repeat with smaller perturbations and finer RK steps to check convergence.

This example uses the mechanical coordinates of the RK map. Canonical optics
inside a general field still requires element-specific vector-potential terms.
The nominal installed layout and a field-dependent beam reference are also
separate quantities; assigning a field should not silently move downstream magnets.


```
def numerical_matrix(element, reference_energy, steps):
    particles = ParticleArray(n=12)
    particles.E = reference_energy
    for j, step in enumerate(steps):
        particles.rparticles[j, 2*j] = step
        particles.rparticles[j, 2*j+1] = -step
    result = apply_element(element, particles).rparticles
    return (result[:, 0::2] - result[:, 1::2]) / (2*np.asarray(steps))

steps = np.array([1e-5]*5 + [1e-4])
r1 = numerical_matrix(quad, energy, steps)
r2 = numerical_matrix(quad, energy, steps/2)
print("Largest matrix change on halving perturbations:", np.max(abs(r1-r2)))
print("Numerical dispersion column:", r2[:4, 5])
```

    Largest matrix change on halving perturbations: 1.529660495491747e-10
    Numerical dispersion column: [ 0.0084151   0.01382251 -0.01762471 -0.04075732]


## 7. The same Cartesian integrator in synchrotron radiation

`track4rad_beam` calls `rk_track_in_field` directly for undulators. Its output is
already in the format consumed by the radiation integral; no curvilinear
conversion is needed to calculate the radiation. `npoints` on the undulator also
controls these trajectory samples.

The routine updates the supplied `ParticleArray` with normalized mechanical
momenta and timing. Radiation calculations retain that endpoint rather than
reconstructing tau from the bunch's mean path. Initial arrival offsets are
preserved, including in `coherent_radiation`.

The current SR beamline assembly uses a straight Cartesian layout. General
assembly of curved, independently positioned magnets and return to their moving
reference frames remains separate work. The radiation formulas themselves retain
their existing relativistic approximations.


```
from ocelot.rad.radiation_py import track4rad_beam, calculate_radiation
from ocelot.rad.screen import Screen

undulator = Undulator(lperiod=0.03, nperiods=10, Kx=1.0, npoints=601)
rad_lattice = MagneticLattice([undulator])
particles = ParticleArray(n=1)
particles.E = energy
particles.tau()[:] = 2e-6
segments, segment_energies = track4rad_beam(particles, rad_lattice)
u = segments[0]
print("Trajectory shape:", u.shape, "(9*N, number of particles)")
print("Final tau [m], including entrance offset:", particles.tau()[0])

beam = Beam()
beam.E, beam.I = energy, 0.1
screen = Screen()
screen.z = 20.
screen.start_energy, screen.end_energy, screen.num_energy = 150., 260., 101
screen.nx = screen.ny = 1
screen.size_x = screen.size_y = 0.
calculate_radiation(rad_lattice, screen, beam)
fig, axes = plt.subplots(1, 2, figsize=(10, 3.6))
axes[0].plot(u[4::9, 0], u[0::9, 0]*1e6)
axes[0].set(xlabel="Cartesian Z [m]", ylabel="X [micrometres]")
axes[1].plot(screen.Eph, screen.Total)
axes[1].set(xlabel="photon energy [eV]", ylabel="photon flux [photons/s/mm²/0.1% BW]")
plt.tight_layout()
plt.show()
```



![png](/img/18_runge_kutta_tracking_files/18_runge_kutta_tracking_16_0.png)



    Trajectory shape: (5409, 1) (9*N, number of particles)
    Final tau [m], including entrance offset: 2.019584032617814e-06


## Choosing an integration step

The default `npoints` is 200. In the low-level and global-frame interfaces it
specifies samples over the requested Cartesian interval. For the relative map,
`l/(npoints-1)` bounds the step for the full element and its slices; shorter slices
use fewer steps. Reference geometry is recomputed from the same element entrance,
so no mutable reference is shared between repeated element occurrences.

A field must be defined wherever the trajectories are evaluated, including the
small integrations needed to reach tilted entrance/exit observation planes.
Convergence should be checked against a finer grid; large fields or transverse
momenta can violate the forward-Z condition and raise `ValueError`.

For ordinary analytical optics, matrix and kick maps remain useful and faster.
Use RK when the field itself is the model, and choose explicitly whether results
belong in its Cartesian frame or relative to its bending reference.
