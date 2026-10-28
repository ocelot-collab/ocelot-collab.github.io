---
sidebar_position: 9
title: Cavity
description: Standing-wave accelerating cavity
---

# [`Cavity`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/cavity.py) Class

The public `Cavity` class is an [`OpticElement`](./optical-element.md) wrapper around `CavityAtom`, which inherits from [`Element`](./element.md). It represents a standing-wave RF cavity with accelerating voltage, RF phase, and optional upstream and downstream coupler kicks.

In this page we focus on the first-order matrix and on how the cavity-specific tracking path is implemented in OCELOT.

## `Cavity` in the Element Architecture

`Cavity` is an edge-aware RF family:

- public wrapper: `Cavity`
- atom: `CavityAtom`
- always-available optics path: first-order `TransferMap`
- default active tracking transformation: `CavityTM`
- `supported_tms = {CavityTM}`
- `has_edge = True`, so the element is represented by
  `ENTRANCE -> MAIN -> EXIT`

For `Cavity`, the entrance and exit maps are not geometric pole-face edges as in a bend. They are used for optional coupler-kick matrices and offsets. If coupler coefficients are zero, these edge maps reduce to identity maps.

## Class Definition Snippet

```python
from ocelot.cpbd.elements import Cavity

cav = Cavity(l=1.0, v=0.02, phi=0.0, freq=1.3e9)

# full parameter list:
# Cavity(l=0.0, v=0.0, phi=0.0, freq=0.0,
#        vx_up=0, vy_up=0, vxx_up=0, vxy_up=0,
#        vx_down=0, vy_down=0, vxx_down=0, vxy_down=0,
#        eid=None, tm=None)
```

The wrapper also provides:

```python
cav.remove_coupler_kick()
```

which resets all upstream and downstream coupler coefficients to zero.

## Parameters

- **`l`** (`float`): cavity length [m]
- **`v`** (`float`): total RF voltage [GV]
- **`phi`** (`float`): RF phase [deg]
- **`freq`** (`float`): RF frequency [Hz]
- **`vx_up`**, **`vy_up`** (`complex` or `float`): zero-order upstream coupler-kick coefficients
- **`vxx_up`**, **`vxy_up`** (`complex` or `float`): first-order upstream coupler coefficients
- **`vx_down`**, **`vy_down`** (`complex` or `float`): zero-order downstream coupler-kick coefficients
- **`vxx_down`**, **`vxy_down`** (`complex` or `float`): first-order downstream coupler coefficients
- **`eid`** (`str`, optional): element identifier

With the current OCELOT convention,

- `phi = 0` gives maximum accelerating voltage
- `phi = 90^\circ` is the zero-crossing case

because the reference energy gain is computed as

$$
\Delta E = V \cos \phi
$$

## First-Order Main Matrix

The cavity body matrix is computed in `CavityAtom._R_main_matrix(...)`. For a slice of length `z`, OCELOT uses the slice voltage

$$
V_{\mathrm{seg}} = v \frac{z}{l}
$$

and then builds a first-order matrix of the form

$$
R_{\mathrm{main}}(z)=
\begin{bmatrix}
    r_{11} & r_{12} & 0 & 0 & 0 & 0 \\
    r_{21} & r_{22} & 0 & 0 & 0 & 0 \\
    0 & 0 & r_{11} & r_{12} & 0 & 0 \\
    0 & 0 & r_{21} & r_{22} & 0 & 0 \\
    0 & 0 & 0 & 0 & r_{55} & r_{56} \\
    0 & 0 & 0 & 0 & r_{65} & r_{66}
\end{bmatrix}
$$

The transverse blocks are identical in `x` and `y`, which reflects the symmetric RF focusing model used here.

OCELOT defines

$$
\gamma_i = \frac{E}{m_e c^2}, \qquad
\gamma_f = \frac{E + \Delta E}{m_e c^2}, \qquad
\gamma' = \frac{\gamma_f - \gamma_i}{z}
$$

with

$$
\Delta E = V_{\mathrm{seg}} \cos \phi
$$

and

$$
\alpha = \frac{1}{\sqrt{8}\cos \phi} \ln\!\left(\frac{\gamma_f}{\gamma_i}\right)
$$

Then the transverse coefficients are

$$
r_{11} = \cos\alpha - \sqrt{2}\cos\phi \sin\alpha
$$

$$
r_{12} =
\begin{cases}
\sqrt{8}\dfrac{\gamma_i}{\gamma'} \cos\phi \sin\alpha, & |\gamma'| > 10^{-10} \\
z, & |\gamma'| \le 10^{-10}
\end{cases}
$$

$$
r_{21} =
-\frac{\gamma'}{\gamma_f}
\left(
\frac{\cos\phi}{\sqrt{2}} + \frac{1}{\sqrt{8}\cos\phi}
\right)\sin\alpha
$$

$$
r_{22} = \frac{\gamma_i}{\gamma_f}
\left(
\cos\alpha + \sqrt{2}\cos\phi \sin\alpha
\right)
$$

For the longitudinal block, OCELOT computes

$$
r_{66} = \frac{\gamma_i}{\gamma_f}\frac{\beta_i}{\beta_f}
$$

$$
r_{65} = \frac{k \sin\phi \, V_{\mathrm{seg}}}{\gamma_f \beta_f m_e c^2}
$$

$$
r_{56} = -\frac{z}{\gamma_f^2 \gamma_i \beta_f}
\frac{\gamma_f + \gamma_i}{\beta_f + \beta_i}
$$

with

$$
k = \frac{2\pi f}{c}
$$

and

$$
r_{55} = 1 + r_{55}^{\mathrm{cor}}
$$

In the general RF case, the code uses

$$
r_{55}^{\mathrm{cor}} =
\frac{k z \beta_i V_{\mathrm{seg}}}{m_e c^2}\sin\phi \,
\frac{\gamma_i \gamma_f (\beta_i \beta_f - 1) + 1}
{\beta_f \gamma_f (\gamma_i - \gamma_f)^2}
$$

At zero crossing, where the code detects both vanishing energy gain and $|\cos\phi| \ll 1$, it switches to the analytic limit

$$
r_{55}^{\mathrm{cor}} =
-\frac{k z V_{\mathrm{seg}}}{2 m_e c^2 \gamma_i^3 \beta_i^2}
$$

The longitudinal coefficients are implemented in `ocelot.cpbd.rf_maps` and shared by `Cavity` and `TWCavity`.

If `v = 0`, the code falls back to the drift-like `uni_matrix(...)` result.

## Coupler Entrance and Exit Maps

If coupler coefficients are present, `CavityAtom` builds additional entrance and exit maps. The first-order coupler matrix is

$$
R_{\mathrm{edge}} =
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
m_{21} & 1 & m_{23} & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
m_{23} & 0 & -m_{21} & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

with

$$
m_{21} = \Re\!\left(\frac{vxx \, v \, e^{i\phi}}{E}\right), \qquad
m_{23} = \Re\!\left(\frac{vxy \, v \, e^{i\phi}}{E}\right)
$$

and the corresponding additive kick vector is

$$
B_{\mathrm{edge}} =
\begin{bmatrix}
0 \\
\Re\!\left(\dfrac{vx \, v \, e^{i\phi}}{E}\right) \\
0 \\
\Re\!\left(\dfrac{vy \, v \, e^{i\phi}}{E}\right) \\
0 \\
0
\end{bmatrix}
$$

The entrance map uses the upstream coefficients and the exit map uses the downstream coefficients.

## How OCELOT Implements It

The cavity has two related paths:

```text
Cavity
    -> CavityAtom
    -> create_first_order_*_params(...)
    -> FirstOrderParams
    -> TransferMap             # first_order_tms, R(), Twiss

Cavity
    -> CavityAtom
    -> create_cavity_tm_*_params(...)
    -> CavityParams
    -> CavityTM                # active tracking path
```

### First-order optics path

For `R()` and linear optics, `CavityAtom` provides:

- `create_first_order_main_params(...)`
- `create_first_order_entrance_params(...)`
- `create_first_order_exit_params(...)`

These return [`FirstOrderParams`](../trasfer-maps/tm-params.md), so the wrapper can keep the usual `TransferMap`-based optics path.

### Active cavity tracking path

For actual tracking, the wrapper uses `CavityTM`. The atom therefore also implements:

- `create_cavity_tm_main_params(...)`
- `create_cavity_tm_entrance_params(...)`
- `create_cavity_tm_exit_params(...)`

These methods package the same linear `R`, `B`, and `tilt` data together with `v`, `freq`, and `phi` into [`CavityParams`](../trasfer-maps/tm-params.md).

`CavityTM` then:

- uses the linear `R/B` map from `CavityParams`
- applies reference-energy change through `create_delta_e(...)`
- adds the cavity-specific longitudinal RF update in `map4cav(...)` for the `MAIN` map

For `ENTRANCE` and `EXIT`, `CavityTM` behaves like a linear first-order map, which is exactly what is needed for the coupler-kick pieces.

## Travelling-wave structures

Use `TWCavity` for a uniform travelling-wave accelerating structure:

```python
import ocelot as ocl

cavity = ocl.TWCavity(l=1.0, v=0.02, phi=25.0, freq=1.3e9)
lattice = ocl.MagneticLattice([cavity])
seed = ocl.Twiss(E=0.15, beta_x=1.2, beta_y=2.1)
optics = ocl.twiss(lattice, seed)
```

The voltage is the total structure voltage in GV; the example uses 20 MV.
Energy is total electron energy in GeV. The reference energy gain is
`v*cos(phi)`, with `phi` in degrees.

`TWCavity` uses entrance and exit focusing lenses and a body with adiabatic
momentum damping, without standing-wave body focusing or coupler kicks.
Its active tracking method is `TWCavityTM`; first-order maps remain available
for Twiss propagation. The transverse damping is the entrance-to-exit momentum
ratio. Twiss propagation removes the damping measured from the transverse map,
so its beta and alpha functions remain consistent with particle tracking even
when momentum and energy ratios differ appreciably.

The structure uses a uniform gradient and fixed reference phase, without
phase slippage or a transverse RF force in the body. The shared longitudinal
RF approximation retains the standing-wave model's limitations, including
finite-beta matrix/tracking differences and sensitivity to slicing at low
energy. The improved transverse momentum map does not remove those limits.
To slice a cavity during `track`, attach a physics process across it;
changing `Navigator.unit_step` alone does not subdivide elements.

## Example of Use

For an element with `has_edge=True`, `R()` returns the full sequence `[entrance, main, exit]`:

```python
import numpy as np
from ocelot.cpbd.elements import Cavity

cav = Cavity(l=1.0, v=0.02, phi=0.0, freq=1.3e9)

np.set_printoptions(precision=4, suppress=True)
print(cav.R(energy=0.15))  # [GeV]
```

```python
[array([[1., 0., 0., 0., 0., 0.],
       [0., 1., 0., 0., 0., 0.],
       [0., 0., 1., 0., 0., 0.],
       [0., 0., 0., 1., 0., 0.],
       [0., 0., 0., 0., 1., 0.],
       [0., 0., 0., 0., 0., 1.]]),
 array([[ 0.9365,  0.9384,  0.    ,  0.    ,  0.    ,  0.    ],
       [-0.0055,  0.9367,  0.    ,  0.    ,  0.    ,  0.    ],
       [ 0.    ,  0.    ,  0.9365,  0.9384,  0.    ,  0.    ],
       [ 0.    ,  0.    , -0.0055,  0.9367,  0.    ,  0.    ],
       [ 0.    ,  0.    ,  0.    ,  0.    ,  1.    , -0.    ],
       [ 0.    ,  0.    ,  0.    ,  0.    ,  0.    ,  0.8824]]),
 array([[1., 0., 0., 0., 0., 0.],
       [0., 1., 0., 0., 0., 0.],
       [0., 0., 1., 0., 0., 0.],
       [0., 0., 0., 1., 0., 0.],
       [0., 0., 0., 0., 1., 0.],
       [0., 0., 0., 0., 0., 1.]])]
```

In this example the entrance and exit maps are identity matrices because no coupler coefficients were provided.
