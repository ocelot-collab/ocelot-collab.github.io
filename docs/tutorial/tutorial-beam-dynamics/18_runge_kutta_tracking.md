---
sidebar_position: 18
title: 18. Runge-Kutta Tracking
description: Runge-Kutta beam tracking and arbitrary magnetic fields
---
<small>
*This notebook was created by Sergey Tomin (sergey.tomin@desy.de). June 2026.*
</small>

# [18. Runge-Kutta Tracking](https://github.com/ocelot-collab/ocelot/blob/dev/demos/docs/18_runge_kutta_tracking.ipynb)

Most OCELOT beam tracking uses transfer matrices, second-order maps, or kick maps. Sometimes it is useful to track particles directly through a magnetic field with a Runge-Kutta integrator.

OCELOT already used RK integration for synchrotron-radiation and CSR workflows, where the important object is the trajectory in a real 3D magnetic structure. The same field integration can now also be used in beam tracking.

There are two RK transfer-map modes:

- `RungeKuttaGlobalTM` integrates in the fixed Cartesian field frame. The old name `RungeKuttaTM` is kept as an alias for this behavior. This is useful for trajectory-style calculations and diagnostics.
- `RungeKuttaOcelotTM` integrates in the same magnetic field, but returns OCELOT coordinates relative to the transported reference particle. This is usually the better choice for beam tracking in a lattice.

Older examples are still useful as references: see the [small useful features RK section](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/small_useful_features/#tracking-the-electron-beam-with-runge-kutta-integrator-in-magnetic-fields) and [`demos/ebeam/rk_track.py`](https://github.com/ocelot-collab/ocelot/blob/dev/demos/ebeam/rk_track.py).

## Imports


```python
%matplotlib inline

from copy import deepcopy

import numpy as np
import matplotlib.pyplot as plt

from ocelot import *
from ocelot.common.globals import m_e_GeV, speed_of_light
from ocelot.cpbd.beam import generate_parray
from ocelot.cpbd.high_order import rk_track_in_field
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaGlobalTM, RungeKuttaOcelotTM, RungeKuttaTM

np.random.seed(12)
```

```text
initializing ocelot...
```


## Example 1: standard lattice, three transfer-map choices

First use only standard OCELOT elements: drifts, two quadrupoles, and one small dipole. No custom field is attached. The RK maps use the built-in hard-edge magnetic fields of the elements.

The important point is the coordinate system. `SecondTM` and `RungeKuttaOcelotTM` report OCELOT coordinates relative to the reference trajectory. `RungeKuttaGlobalTM` reports fixed-frame coordinates. The difference appears at the dipole, because the dipole field bends even the zero particle in the fixed frame.


```python
probe = ParticleArray(n=3)
probe.E = 1.0
probe.rparticles[:] = 0.0
probe.rparticles[0, 1] = 150e-6  # particle with initial x offset
probe.rparticles[1, 2] = 40e-6   # particle with initial px offset

cell_second = (
    Drift(l=0.20, eid="D1"),
    Quadrupole(l=0.25, k1=1.2, eid="QF"),
    Drift(l=0.15, eid="D2"),
    Bend(l=0.40, angle=0.002, e1=0.0, e2=0.0, eid="B"),
    Drift(l=0.15, eid="D3"),
    Quadrupole(l=0.25, k1=-1.2, eid="QD"),
    Drift(l=0.20, eid="D4"),
)
cell_global = (
    Drift(l=0.20, eid="D1"),
    Quadrupole(l=0.25, k1=1.2, npoints=800, eid="QF"),
    Drift(l=0.15, eid="D2"),
    Bend(l=0.40, angle=0.002, e1=0.0, e2=0.0, npoints=1000, eid="B"),
    Drift(l=0.15, eid="D3"),
    Quadrupole(l=0.25, k1=-1.2, npoints=800, eid="QD"),
    Drift(l=0.20, eid="D4"),
)
cell_ocelot = (
    Drift(l=0.20, eid="D1"),
    Quadrupole(l=0.25, k1=1.2, npoints=800, eid="QF"),
    Drift(l=0.15, eid="D2"),
    Bend(l=0.40, angle=0.002, e1=0.0, e2=0.0, npoints=1000, eid="B"),
    Drift(l=0.15, eid="D3"),
    Quadrupole(l=0.25, k1=-1.2, npoints=800, eid="QD"),
    Drift(l=0.20, eid="D4"),
)

lat_second = MagneticLattice(cell_second, method={"global": SecondTM})
lat_global = MagneticLattice(
    cell_global,
    method={"global": SecondTM, Bend: RungeKuttaGlobalTM, Quadrupole: RungeKuttaGlobalTM},
)
lat_ocelot = MagneticLattice(
    cell_ocelot,
    method={"global": SecondTM, Bend: RungeKuttaOcelotTM, Quadrupole: RungeKuttaOcelotTM},
)

histories = {}
for name, lat in (("SecondTM", lat_second), ("RK global", lat_global), ("RK OCELOT", lat_ocelot)):
    p = deepcopy(probe)
    s_values = [0.0]
    x_values = [p.x().copy() * 1e3]
    px_values = [p.px().copy() * 1e3]
    for elem in lat.sequence:
        for tm in elem.tms:
            tm.apply(p)
        s_values.append(s_values[-1] + elem.l)
        x_values.append(p.x().copy() * 1e3)
        px_values.append(p.px().copy() * 1e3)
    histories[name] = (np.array(s_values), np.vstack(x_values), np.vstack(px_values))

fig, axes = plt.subplots(1, 2, figsize=(10.5, 4.0), sharex=True)
for name, (s_values, x_values, px_values) in histories.items():
    axes[0].plot(s_values, x_values[:, 0], marker="o", label=name)
    axes[1].plot(s_values, x_values[:, 1], marker="o", label=name)

for ax in axes:
    ax.axvspan(0.60, 1.00, color="tab:orange", alpha=0.12)
    ax.set_xlabel("s [m]")
    ax.set_ylabel("x [mm]")
    ax.grid(True)
axes[0].set_title("zero particle")
axes[1].set_title("particle with x0 = 150 um")
axes[1].legend()
fig.suptitle("The fixed-frame RK difference starts in the dipole")
plt.tight_layout()
plt.show()

for name, (s_values, x_values, px_values) in histories.items():
    print(f"{name:9s}: reference x = {x_values[-1, 0]: .6f} mm, px = {px_values[-1, 0]: .6f} mrad")
```


![png](/img/18_runge_kutta_tracking_files/18_runge_kutta_tracking_4_0.png)


```text
SecondTM : reference x =  0.000000 mm, px =  0.000000 mrad
RK global: reference x = -1.690312 mm, px = -2.288111 mrad
RK OCELOT: reference x =  0.000000 mm, px =  0.000000 mrad
```


## Example 2: user field with an analytical solution

A `Drift` can be used as a named field region when a magnetic-field callback is attached. To make the plot meaningful, use the simplest field with a known analytical solution: a constant vertical magnetic field.

For a particle entering with zero angle and a constant curvature `h = B / Brho`, the fixed-frame trajectory is a circular arc. With the sign convention used by the RK equations below,

$$
x(z) = \frac{\sqrt{1 - (h z)^2} - 1}{h}, \qquad x'(z) = \frac{-h z}{\sqrt{1 - (h z)^2}}.
$$

This example checks the RK trajectory against that analytical result.


```python
energy = 1.0
gamma = energy / m_e_GeV
beta = np.sqrt(1.0 - 1.0 / gamma**2)
brho = beta * energy * 1e9 / speed_of_light

field_length = 0.50
curvature = 0.012
by0 = brho * curvature

def constant_vertical_field(x, y, z):
    return 0.0 * x, by0 + 0.0 * x, 0.0 * x

zero = ParticleArray(n=1)
zero.E = energy
zero.rparticles[:] = 0.0

field_region = Drift(l=field_length, npoints=1200, eid="UNIFORM_FIELD")
field_region.mag_field = constant_vertical_field
field_region.set_tm(RungeKuttaGlobalTM)
tracked_zero = deepcopy(zero)
for tm in field_region.tms:
    tm.apply(tracked_zero)

trajectory = rk_track_in_field(zero.rparticles.copy(), field_length, 1200, energy, constant_vertical_field)
z = trajectory[4::9, 0]
x_rk = trajectory[0::9, 0]
px_rk = trajectory[1::9, 0]
x_analytic = (np.sqrt(1.0 - (curvature * z)**2) - 1.0) / curvature
px_analytic = -curvature * z / np.sqrt(1.0 - (curvature * z)**2)

fig, axes = plt.subplots(1, 2, figsize=(10.5, 4.0))
axes[0].plot(z, x_analytic * 1e3, label="analytical", lw=2)
axes[0].plot(z, x_rk * 1e3, "--", label="RK trajectory")
axes[0].set_xlabel("z [m]")
axes[0].set_ylabel("x [mm]")
axes[0].set_title("constant-field circular arc")
axes[0].grid(True)
axes[0].legend()

axes[1].plot(z, (x_rk - x_analytic) * 1e9, label="x error")
axes[1].plot(z, (px_rk - px_analytic) * 1e9, label="px error")
axes[1].set_xlabel("z [m]")
axes[1].set_ylabel("error [nm or nrad]")
axes[1].set_title("RK minus analytical solution")
axes[1].grid(True)
axes[1].legend()
plt.tight_layout()
plt.show()

print(f"field By = {by0:.6e} T")
print(f"final RK x  = {tracked_zero.x()[0] * 1e3:.9f} mm")
print(f"final ana x = {x_analytic[-1] * 1e3:.9f} mm")
print(f"final RK px  = {tracked_zero.px()[0] * 1e3:.9f} mrad")
print(f"final ana px = {px_analytic[-1] * 1e3:.9f} mrad")
```


![png](/img/18_runge_kutta_tracking_files/18_runge_kutta_tracking_6_0.png)


```text
field By = 4.002769e-02 T
final RK x  = -1.500013304 mm
final ana x = -1.500013500 mm
final RK px  = -6.000107220 mrad
final ana px = -6.000108003 mrad
```


## Example 3: soft-edge dipole field

A hard-edge `Bend` is a compact model. RK tracking can instead use a longitudinal field profile. A common simple soft-edge approximation is a smooth top-hat made from two hyperbolic tangents:

$$
f(z) = \frac{1}{2}\left[\tanh\left(\frac{z-z_1}{a}\right) - \tanh\left(\frac{z-z_2}{a}\right)\right].
$$

The hard-edge comparison below uses the same integrated bending angle,

$$
\theta = \int h(z)\,dz.
$$

So the comparison is not between identical fields; it shows what is lost when a soft field profile is replaced by a hard-edge second-order map with the same field integral.


```python
soft_length = 0.70
z1 = 0.10
z2 = 0.60
edge_width = 0.035
peak_curvature = 0.014
peak_by = brho * peak_curvature

z_grid = np.linspace(0.0, soft_length, 1000)
soft_profile = 0.5 * (np.tanh((z_grid - z1) / edge_width) - np.tanh((z_grid - z2) / edge_width))
soft_angle = np.trapezoid(peak_curvature * soft_profile, z_grid)
hard_edge_by = brho * soft_angle / soft_length

def soft_dipole_field(x, y, z):
    profile = 0.5 * (np.tanh((z - z1) / edge_width) - np.tanh((z - z2) / edge_width))
    return 0.0 * x, peak_by * profile + 0.0 * x, 0.0 * x

soft_region = Drift(l=soft_length, npoints=1600, eid="SOFT_BEND")
soft_region.mag_field = soft_dipole_field
soft_region.set_tm(RungeKuttaOcelotTM)

hard_bend = Bend(l=soft_length, angle=soft_angle, e1=0.0, e2=0.0, eid="HARD_BEND")
hard_bend.set_tm(SecondTM)

beam_soft0 = generate_parray(
    sigma_x=80e-6,
    sigma_px=12e-6,
    sigma_y=80e-6,
    sigma_py=12e-6,
    sigma_tau=1e-6,
    sigma_p=0.0,
    chirp=0.0,
    charge=100e-12,
    nparticles=4000,
    energy=energy,
)

beam_soft = deepcopy(beam_soft0)
beam_hard = deepcopy(beam_soft0)
for tm in soft_region.tms:
    tm.apply(beam_soft)
for tm in hard_bend.tms:
    tm.apply(beam_hard)

fig, axes = plt.subplots(1, 2, figsize=(10.5, 4.0))
axes[0].plot(z_grid, peak_by * soft_profile, label="soft-edge field")
axes[0].hlines(hard_edge_by, 0.0, soft_length, colors="tab:orange", linestyles="--", label="same-integral hard edge")
axes[0].set_xlabel("z [m]")
axes[0].set_ylabel("By [T]")
axes[0].set_title("soft-edge dipole field")
axes[0].grid(True)
axes[0].legend()

axes[1].scatter(beam_soft0.x() * 1e3, (beam_soft.x() - beam_hard.x()) * 1e6, s=5, alpha=0.35, label="x")
axes[1].scatter(beam_soft0.x() * 1e3, (beam_soft.px() - beam_hard.px()) * 1e6, s=5, alpha=0.35, label="px")
axes[1].set_xlabel("initial x [mm]")
axes[1].set_ylabel("RK soft edge - SecondTM hard edge [um or urad]")
axes[1].set_title("final coordinate residuals")
axes[1].grid(True)
axes[1].legend()
plt.tight_layout()
plt.show()

print(f"integrated soft-edge angle = {soft_angle:.9e} rad")
print(f"std(x_RK - x_Second)  = {np.std(beam_soft.x() - beam_hard.x()) * 1e6:.6f} um")
print(f"std(px_RK - px_Second) = {np.std(beam_soft.px() - beam_hard.px()) * 1e6:.6f} urad")
```


![png](/img/18_runge_kutta_tracking_files/18_runge_kutta_tracking_8_0.png)


```text
integrated soft-edge angle = 6.998386177e-03 rad
std(x_RK - x_Second)  = 0.000020 um
std(px_RK - px_Second) = 0.005580 urad
```


## Example 4: offset quadrupole as a combined-function bend

An offset quadrupole has a dipole component on the original design axis. With `RungeKuttaOcelotTM`, the zero particle is transported through that actual field and becomes the local reference. In that interpretation the element behaves like a combined-function magnet.

To compare it with a conventional `Bend`, first track the zero particle through the offset quadrupole with `RungeKuttaGlobalTM`. The equivalent bend angle should be taken from the exit angle of that reference particle. With OCELOT's bend sign convention for this field, the angle used below is `-atan(px_ref)`.

The comparison uses small basis particles to build the linear 4x4 transverse map, then propagates simple Twiss parameters through three models. The plot zooms on the horizontal Twiss parameters, where the dipole curvature changes the focusing:

- offset quadrupole with `RungeKuttaOcelotTM`
- equivalent `Bend(angle=-atan(px_ref), k1=q.k1)` with `SecondTM`
- centered quadrupole with `SecondTM`


```python
quad_length = 0.60
quad_k1 = 4.0
quad_dx = 0.020

reference = ParticleArray(n=1)
reference.E = energy
reference.rparticles[:] = 0.0
q_reference = Quadrupole(l=quad_length, k1=quad_k1, dx=quad_dx, npoints=3000, eid="Q_OFFSET_REF")
q_reference.set_tm(RungeKuttaGlobalTM)
for tm in q_reference.tms:
    tm.apply(reference)

px_ref = reference.px()[0]
equivalent_angle = -np.arctan(px_ref)

eps = 1.0e-7
basis = ParticleArray(n=5)
basis.E = energy
basis.rparticles[:] = 0.0
basis.rparticles[0, 1] = eps
basis.rparticles[1, 2] = eps
basis.rparticles[2, 3] = eps
basis.rparticles[3, 4] = eps

q_offset = Quadrupole(l=quad_length, k1=quad_k1, dx=quad_dx, npoints=3000, eid="Q_OFFSET")
equivalent_bend = Bend(l=quad_length, angle=equivalent_angle, k1=quad_k1, e1=0.0, e2=0.0, eid="B_EQ")
q_centered = Quadrupole(l=quad_length, k1=quad_k1, eid="Q_CENTERED")
q_offset.set_tm(RungeKuttaOcelotTM)
equivalent_bend.set_tm(SecondTM)
q_centered.set_tm(SecondTM)

maps = {}
for label, element in (("offset quad RK", q_offset), ("equiv. Bend", equivalent_bend), ("centered quad", q_centered)):
    p = deepcopy(basis)
    for tm in element.tms:
        tm.apply(p)
    maps[label] = (p.rparticles[:4, 1:] - p.rparticles[:4, [0]]) / eps

beta_x0 = 12.0
alpha_x0 = 1.0
gamma_x0 = (1.0 + alpha_x0**2) / beta_x0
sigma_x0 = np.array([[beta_x0, -alpha_x0], [-alpha_x0, gamma_x0]])

beta_y0 = 10.0
alpha_y0 = 0.0
gamma_y0 = (1.0 + alpha_y0**2) / beta_y0
sigma_y0 = np.array([[beta_y0, -alpha_y0], [-alpha_y0, gamma_y0]])

labels = []
beta_x = []
alpha_x = []
beta_y = []
alpha_y = []
for label, matrix in maps.items():
    sigma_x = matrix[:2, :2] @ sigma_x0 @ matrix[:2, :2].T
    sigma_y = matrix[2:4, 2:4] @ sigma_y0 @ matrix[2:4, 2:4].T
    labels.append(label)
    beta_x.append(sigma_x[0, 0])
    alpha_x.append(-sigma_x[0, 1])
    beta_y.append(sigma_y[0, 0])
    alpha_y.append(-sigma_y[0, 1])

x = np.arange(len(labels))
fig, axes = plt.subplots(1, 2, figsize=(10.5, 4.0))
axes[0].bar(x, beta_x, width=0.55)
axes[0].set_xticks(x)
axes[0].set_xticklabels(labels, rotation=15)
axes[0].set_ylim(min(beta_x) - 0.006, max(beta_x) + 0.006)
axes[0].set_ylabel("beta_x [m]")
axes[0].set_title("horizontal beta after one element")
axes[0].grid(True, axis="y")

axes[1].bar(x, alpha_x, width=0.55)
axes[1].set_xticks(x)
axes[1].set_xticklabels(labels, rotation=15)
axes[1].set_ylim(min(alpha_x) - 0.010, max(alpha_x) + 0.010)
axes[1].set_ylabel("alpha_x")
axes[1].set_title("horizontal alpha after one element")
axes[1].grid(True, axis="y")
plt.tight_layout()
plt.show()

print(f"offset dx = {quad_dx * 1e3:.1f} mm")
print(f"reference exit x  = {reference.x()[0] * 1e3:.6f} mm")
print(f"reference exit px = {px_ref * 1e3:.6f} mrad")
print(f"equivalent Bend angle = {equivalent_angle:.9e} rad")
for label, bx, ax, by, ay in zip(labels, beta_x, alpha_x, beta_y, alpha_y):
    print(f"{label:14s}: beta_x={bx:.6f} m, alpha_x={ax:.6f}, beta_y={by:.6f} m, alpha_y={ay:.6f}")
print("max |R(offset quad RK) - R(equivalent Bend)| =", np.max(np.abs(maps["offset quad RK"] - maps["equiv. Bend"])))
```


![png](/img/18_runge_kutta_tracking_files/18_runge_kutta_tracking_10_0.png)


```text
offset dx = 20.0 mm
reference exit x  = 12.757669 mm
reference exit px = 37.304761 mrad
equivalent Bend angle = -3.728747041e-02 rad
offset quad RK: beta_x=1.269088 m, alpha_x=7.327914, beta_y=32.836103 m, alpha_y=-54.774932
equiv. Bend   : beta_x=1.269982 m, alpha_x=7.332939, beta_y=32.841698 m, alpha_y=-54.798948
centered quad : beta_x=1.274102 m, alpha_x=7.340020, beta_y=32.841698 m, alpha_y=-54.798948
max |R(offset quad RK) - R(equivalent Bend)| = 0.001067201613210056
```


## Integration step inside an element

The RK integration uses `npoints` longitudinal integration points inside the element. The default is 200.

`npoints` can be set in the element constructor and then used later when the lattice selects an RK map through `MagneticLattice(..., method={...})`. This is the simplest way to give different elements different RK grids.

You can still override it with `set_tm(..., npoints=...)` on a single element.


```python
q_step = Quadrupole(l=0.5, k1=0.7, npoints=1200, eid="Q_STEP")
lat_step = MagneticLattice((q_step,), method={Quadrupole: RungeKuttaOcelotTM})
print("npoints from constructor:", lat_step.sequence[0].tms[0].npoints)

q_step.set_tm(RungeKuttaOcelotTM, npoints=600)
print("npoints after set_tm override:", q_step.tms[0].npoints)
```

```text
npoints from constructor: 1200
npoints after set_tm override: 600
```


## Summary

Use `RungeKuttaOcelotTM` when the result should remain in OCELOT coordinates. Use `RungeKuttaGlobalTM` or the legacy `RungeKuttaTM` name when the fixed-frame trajectory itself is the object of interest.

Custom magnetic fields can be attached to drifts or magnets with `element.mag_field = ...` or `mag_field=...`. The field callback returns `Bx`, `By`, and `Bz` in Tesla and should work with NumPy arrays.

Offsets such as `dx` and `dy` are included in the default hard-edge RK fields. `RungeKuttaGlobalTM` shows the fixed-frame kick. `RungeKuttaOcelotTM` can treat the same offset as part of the transported reference trajectory, which is useful for combined-function interpretations.
