---
sidebar_position: 5
title: Runge-Kutta Maps
description: Runge-Kutta tracking through static magnetic fields
---

# [Runge-Kutta Transfer Maps](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/runge_kutta.py)

## Overview

OCELOT Runge-Kutta transfer maps track particles through a static magnetic field callback. They are useful when an analytic matrix or kick model is not enough, for example:

- tracking through an arbitrary 3D magnetic field map
- generating trajectories for synchrotron-radiation calculations
- generating trajectories used by CSR calculations
- comparing matrix tracking with direct field integration

The RK integrator uses the longitudinal coordinate of the field frame as the independent variable. It is not a time-based integrator.

:::note
The current RK transfer maps support static magnetic fields. They do not integrate electric fields or time-dependent RF fields. Cavities should still use the cavity transfer maps.
:::

## RK Transfer-Map Classes

| Class | Coordinate result | Main use |
| --- | --- | --- |
| `RungeKuttaGlobalTM` | fixed Cartesian positions and normalized mechanical momenta | trajectories, SR, CSR, legacy global-frame workflows |
| `RungeKuttaTM` | same as `RungeKuttaGlobalTM` | legacy name kept for compatibility |
| `RungeKuttaOcelotTM` | reference-relative positions and normalized mechanical momenta | beam tracking in a lattice, comparison with `TransferMap` or `SecondTM` |
| `RungeKuttaTrTM` | transverse-only fixed-frame RK variant | legacy transverse-only workflows |

`RungeKuttaTM` is intentionally still available. Existing examples and lattices using `RungeKuttaTM` keep the historical fixed-frame behavior.

## OCELOT Coordinates and RK Coordinates

OCELOT beam coordinates are relative to a reference trajectory:

$$
(x, p_x/p_0, y, p_y/p_0, \tau, \delta)
$$

Here `delta=(E-E0)/(p0*c)` and E0 is total reference energy. The low-level
`rk_track_in_field` interface instead uses Cartesian slopes `dX/dZ`, `dY/dZ`.
Slopes differ from normalized momenta even in a straight drift; the transfer-map
wrappers accept normalized mechanical momenta directly.

`tau=ct-s/beta0` for the reference-relative map and `tau=ct-Z/beta0` for the
fixed-frame map. Both preserve the entrance arrival offset. Finite-beta magnetic
rigidity and flight time are included. Inside a field, these mechanical momenta
are not generally canonical: element-specific vector-potential terms are not added.

This distinction matters most in bends:

- `RungeKuttaGlobalTM` tracks the zero particle in the fixed field frame, so the reference particle can have non-zero `x` and `px` at the exit.
- `RungeKuttaOcelotTM` internally tracks a zero reference particle, transports the transverse frame along that reference trajectory, and tracks each particle to its crossing of the exit normal plane.

For a bend, subtracting the reference-particle position is not fully sufficient. The particle directions must also be expressed in the transported exit frame. `RungeKuttaOcelotTM` performs this conversion, advancing momentum and time
through the field during the plane-crossing calculation. Every slice uses the
reference defined at the original element entrance; local slice coordinates are
transformed back to that fixed field frame before tracking.

Global beam tracking keeps only the current particle state and accumulated path,
so its working array memory does not grow with `npoints`. The low-level
`rk_track_in_field` still stores all trajectory and field samples for SR/CSR.
Both paths use the same RK4 stepping equations; no new user option is needed.

## Reference Choice for Offsets and Field Errors

A magnet offset changes the magnetic field seen by the design particle. For example, `Quadrupole(dx=...)` acts like a quadrupole plus a dipole kick when it is viewed relative to the original straight design axis.

The default RK field model does include `dx` and `dy`. Internally the hard-edge field is evaluated in local magnet coordinates, approximately `(x - dx, y - dy)`. Therefore RK tracking does not ignore offsets.

The field callback returns `Bx`, `By`, and `Bz`, the Cartesian magnetic-field components in Tesla. For example:

```python
import numpy as np
from ocelot.cpbd.elements import Quadrupole
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaGlobalTM

q = Quadrupole(l=0.4, k1=2.0, dx=1.0e-3)
q.set_tm(RungeKuttaGlobalTM)

bx, by, bz = q.tms[0].get_params(1.0).mag_field(
    np.array([0.0]), np.array([0.0]), np.array([0.0])
)
bx0, by0, bz0 = [np.asarray(component).reshape(-1)[0] for component in (bx, by, bz)]
print(
    "field on design axis: "
    f"Bx={bx0:.6e} T, By={by0:.6e} T, Bz={bz0:.6e} T"
)
```

This prints, for example:

```text
field on design axis: Bx=0.000000e+00 T, By=-6.671281e-03 T, Bz=0.000000e+00 T
```

In this example `By` is nonzero on the original design axis because the quadrupole center is shifted by `dx`. That nonzero `By` is the dipole-like field component responsible for the horizontal kick.

The two RK modes then answer two different questions:

- `RungeKuttaGlobalTM` keeps the fixed field frame. The offset appears as a physical orbit kick, like a quadrupole plus a dipole corrector. This is useful when `dx`/`dy` represent a misalignment, or when you want to check the dipole component created by the offset.
- `RungeKuttaOcelotTM` tracks an internal zero reference particle through the same actual field and returns coordinates relative to that transported reference. In this interpretation, the offset is part of the reference magnet itself. A quadrupole with offset is treated like a combined-function element whose reference trajectory follows the actual field.

This is not a bug. It is a choice of reference. For example, offset or combined-function quadrupoles can be modeled naturally with `RungeKuttaOcelotTM` when the offset is part of the reference trajectory definition. For orbit-error studies where the kick must remain visible relative to the original design orbit, use `RungeKuttaGlobalTM` as a diagnostic or use the existing matrix/kick tracking paths.

## Magnetic Field Contract

RK maps consume a `RungeKuttaParams` object containing a magnetic field function:

```python
def field(x, y, z):
    return Bx, By, Bz
```

The field components are in Tesla. The function must accept scalar and NumPy-array coordinates: the reference is
tracked individually and beam particles together. It must be defined throughout
the sampled region, including the small integrations to tilted observation planes.

Several magnetic families can use RK tracking:

- `Drift`
- `Bend`, `SBend`, `RBend`
- `Quadrupole`
- `Sextupole`
- `Octupole`
- `Solenoid`
- `Undulator`

If `element.mag_field` is set, RK uses that function. Otherwise OCELOT uses a simple built-in field model where available:

- drift: zero hard-edge field
- bend: uniform hard-edge dipole field, with optional multipole terms from element strengths
- quadrupole, sextupole, octupole: hard-edge normal multipole fields
- solenoid: uniform hard-edge longitudinal field
- undulator: user field map, loaded field map, or analytic undulator field

The custom field is not limited to drifts. A `mag_field` attached to a bend can describe a dipole with a gradient, a longitudinally varying field, or a measured field map converted to a callable. A `mag_field` attached to a quadrupole or sextupole can replace the hard-edge multipole model with a more detailed field.

For RK tracking, the particle motion is determined by the field callback. The element still supplies the integration length, lattice position, element family, and any non-RK optics representation used elsewhere.

## Selecting the RK Mode

The standard way to select transfer maps in a lattice is the `method` dictionary passed to `MagneticLattice`.

For beam tracking in OCELOT coordinates, use `RungeKuttaOcelotTM`:

```python
from ocelot.cpbd.elements import Bend
from ocelot.cpbd.elements import Quadrupole
from ocelot.cpbd.elements import Sextupole
from ocelot.cpbd.magnetic_lattice import MagneticLattice
from ocelot.cpbd.transformations.second_order import SecondTM
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaOcelotTM

method = {
    "global": SecondTM,
    Bend: RungeKuttaOcelotTM,
    Quadrupole: RungeKuttaOcelotTM,
    Sextupole: RungeKuttaOcelotTM,
}

lat = MagneticLattice(cell, method=method)
```

This means: use `SecondTM` for all element families by default, but use RK tracking for the listed families.

For fixed-frame trajectories, use `RungeKuttaGlobalTM` or the legacy `RungeKuttaTM` name:

```python
from ocelot.cpbd.elements import Bend
from ocelot.cpbd.elements import Drift
from ocelot.cpbd.elements import Quadrupole
from ocelot.cpbd.elements import Sextupole
from ocelot.cpbd.elements import Octupole
from ocelot.cpbd.elements import Undulator
from ocelot.cpbd.magnetic_lattice import MagneticLattice
from ocelot.cpbd.transformations.second_order import SecondTM
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaTM

method = {
    "global": SecondTM,
    Drift: RungeKuttaTM,
    Bend: RungeKuttaTM,
    Quadrupole: RungeKuttaTM,
    Sextupole: RungeKuttaTM,
    Octupole: RungeKuttaTM,
    Undulator: RungeKuttaTM,
}

lat = MagneticLattice(cell, method=method)
```

Constructor RK parameters such as `npoints` are stored on the element and used when an RK map is selected later through `MagneticLattice(..., method={...})`:

```python
q = Quadrupole(l=0.5, k1=0.7, npoints=1000)

lat = MagneticLattice((q,), method={Quadrupole: RungeKuttaOcelotTM})
```

For a single element, or when you need to override the constructor value locally, use `set_tm(...)` directly:

```python
q.set_tm(RungeKuttaOcelotTM, npoints=500)
```

`RungeKuttaTM` is the old name for `RungeKuttaGlobalTM`. It remains useful for old examples and for workflows that intentionally need fixed-frame trajectories.

## Integration Step

The RK step is controlled by `npoints`. The default is `200`.

The low-level/global interfaces use `npoints` samples over the requested
Cartesian Z interval, including both endpoints. The relative map uses
`l/(npoints-1)` as its maximum step for the full element and its slices; shorter
slices use fewer steps. The reference is recomputed from the same entrance for
each call. `start_l` is reference arc length for this map, not field-frame Z.

The solver requires forward motion in Cartesian Z and positive particle momentum.
Check convergence by increasing `npoints`; RK4 is not exactly symplectic.

Set it in the element constructor when the RK class will be selected by a lattice method dictionary:

```python
q = Quadrupole(l=0.5, k1=0.7, npoints=1000)
lat = MagneticLattice((q,), method={Quadrupole: RungeKuttaOcelotTM})
```

If you want a target step length `ds`:

```python
ds = 1.0e-3
q = Quadrupole(l=0.5, k1=0.7, npoints=int(np.ceil(0.5 / ds)) + 1)
```

You can still override the constructor value directly:

```python
q.set_tm(RungeKuttaOcelotTM, npoints=500)
```

## Custom Field Example

A `Drift` can be used as a generic field region:

```python
from ocelot.cpbd.elements import Drift
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaOcelotTM


def constant_vertical_field(x, y, z):
    return 0.0 * x, 0.02 + 0.0 * x, 0.0 * x


field_region = Drift(l=0.3)
field_region.mag_field = constant_vertical_field
field_region.set_tm(RungeKuttaOcelotTM, npoints=1000)
```

The `0.0 * x` terms keep the return values array-shaped when `x` is an array.

The same pattern works on a bend. For example, a dipole with a horizontal gradient and a longitudinal variation can be written as:

```python
from ocelot.cpbd.elements import Bend
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaOcelotTM

b = Bend(l=0.3, angle=0.0, e1=0.0, e2=0.0)


def bend_with_gradient_and_z_dependence(x, y, z):
    by0 = 0.02
    gradient = 0.3
    modulation = 1.0 + 0.05 * np.sin(2.0 * np.pi * z / b.l)
    return 0.0 * x, modulation * (by0 + gradient * x), 0.0 * x


b.mag_field = bend_with_gradient_and_z_dependence
b.set_tm(RungeKuttaOcelotTM, npoints=1000)
```

Here `Bend` supplies the element length and lattice placement. The actual magnetic field used by RK comes from `bend_with_gradient_and_z_dependence(...)`.

## Comparing with Matrix Tracking

For a straight quadrupole:

```python
from copy import deepcopy
from ocelot.cpbd.elements import Quadrupole
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaOcelotTM

q_matrix = Quadrupole(l=0.5, k1=0.7)
q_rk = deepcopy(q_matrix)
q_rk.set_tm(RungeKuttaOcelotTM, npoints=1000)
```

For a bend, use `RungeKuttaOcelotTM` if the result should be compared with OCELOT matrix tracking. Use `RungeKuttaGlobalTM` only when the fixed-frame trajectory itself is the desired output.

For an offset quadrupole, the RK modes intentionally differ:

```python
from copy import deepcopy
from ocelot.cpbd.elements import Quadrupole
from ocelot.cpbd.beam import ParticleArray
from ocelot.cpbd.transformations.runge_kutta import RungeKuttaGlobalTM, RungeKuttaOcelotTM

zero_particle = ParticleArray(n=1)
zero_particle.E = 1.0
zero_particle.rparticles[:] = 0.0

q = Quadrupole(l=0.4, k1=2.0, dx=1.0e-3, dy=0.0)

# RungeKuttaGlobalTM: offset appears as a kick in the fixed field frame.
# RungeKuttaOcelotTM: offset is included in the transported reference.
```

An equivalent uniform bend is only an approximation to an offset quadrupole,
whose reference curvature varies along the magnet. A global zero-particle result
contains normalized momenta, not slopes. For delta=0, reconstruct
`pz = sqrt(1-px**2-py**2)` before forming the horizontal angle
`-atan2(px,pz)`. Match the observation planes when comparing trajectories.

The detailed numerical demonstration is included in the [Runge-Kutta tracking tutorial](../../tutorial/tutorial-beam-dynamics/18_runge_kutta_tracking.md).

## Radiation, optics and layout

SR uses the same Cartesian integrator directly. `rk_track_in_field` returns the
nine-row blocks `(X,Xprime,Y,Yprime,Z,delta,Bx,By,Bz)` used by radiation routines.
Optional `return_path=True` also returns RK4-integrated path lengths. Undulator
`npoints` settings apply to SR tracking, too. Returned particles now retain their
arrival offsets and use normalized mechanical momenta; coherent radiation no
longer reconstructs timing from the bunch's mean path.

The current mixed-element SR assembly assumes a straight layout. General
placement of curved local-map samples into a common laboratory frame remains
separate work. Likewise, a global RK map does not automatically survey or rotate
successive magnetic fields; do not mix its output with ordinary local maps
without the appropriate coordinate transformation.

Selecting RK does not replace nominal analytical `first_order_tms`, `twiss()` or
survey with arbitrary-field results. The tutorial shows an explicit numerical
matrix check using perturbed particles and a fixed reference. The installed
layout and the field-dependent reference trajectory are separate quantities.

CSR's XYQuadrupole branch now samples the analytical varying-curvature reference
without RK, or the actual quadrupole Lorentz reference with `rk_traj=True`.
Both include entrance offsets and the new entrance tangent components
`x_angle`, `y_angle`. The RK field is rotated into the incoming reference
frame, including its longitudinal component when the magnet axis is tilted.
This does not change the XYQuadrupole wrapper's analytical-only tracking contract.
Physical fringe fields and canonical vector-potential conversions remain outside
these coordinate corrections.

## Read Next

- [TMParams](./tm-params.md)
- [First Order Map](./first-order.md)
- [Second Order Map](./second-order.md)
- [Runge-Kutta tracking tutorial](../../tutorial/tutorial-beam-dynamics/18_runge_kutta_tracking.md)
