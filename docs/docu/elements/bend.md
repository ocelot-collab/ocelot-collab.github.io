---
sidebar_position: 7
title: Bend
description: Dipole bending element
---

# [`Bend`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/bend.py) Class

The public `Bend` class is an [`OpticElement`](./optical-element.md) wrapper around `BendAtom`, which inherits from [`Magnet`](./magnet.md). It represents a dipole magnet with a curved reference trajectory and optional entrance and exit edge focusing.

In this page we focus on the first-order matrix and on how it is implemented in OCELOT. We also explain the practical difference between `SBend` and `RBend`.

## `Bend` in the Element Architecture

`Bend` is an edge-aware family:

- public wrapper: `Bend`
- atom: `BendAtom`
- default active transformation: `TransferMap`
- additionally supported active transformations: `SecondTM`, `KickTM`, `RungeKuttaTM`, `RungeKuttaTrTM`
- `has_edge = True`, so the element is represented by three maps:
  `ENTRANCE -> MAIN -> EXIT`

The main-body matrix is built from the universal first-order map, while the entrance and exit maps are edge matrices computed by `BendAtom`.

## Class Definition Snippet

```python
from ocelot.cpbd.elements import Bend

b = Bend(l=1.0, angle=0.1, e1=0.05, e2=0.05)

# full parameter list:
# Bend(l=0.0, angle=0.0, k1=0.0, k2=0.0, e1=0.0, e2=0.0, tilt=0.0,
#      gap=0.0, h_pole1=0.0, h_pole2=0.0, fint=0.0, fintx=None, eid=None, tm=None)
```

## Parameters

- **`l`** (`float`): magnet length [m]
- **`angle`** (`float`): total bending angle [rad]
- **`k1`** (`float`): quadrupole component [1/m²]
- **`k2`** (`float`): sextupole component [1/m³]
- **`e1`**, **`e2`** (`float`): entrance and exit edge angles [rad]
- **`tilt`** (`float`): roll angle around the beam axis [rad]
- **`gap`** (`float`): magnet gap [m]
- **`fint`**, **`fintx`** (`float`): fringe-field integrals
- **`h_pole1`**, **`h_pole2`** (`float`): entrance and exit pole-face curvatures
- **`eid`** (`str`, optional): element identifier

## First-Order Main Matrix

For the main body, OCELOT uses the same `uni_matrix(...)` machinery as for other magnetic elements, but now with nonzero curvature

$$
h_x = \frac{\theta}{l}
$$

where $\theta$ is the bending angle.

Following the implementation in `uni_matrix(...)`, OCELOT defines

$$
k_x = \sqrt{k_1 + h_x^2 + 0j}, \qquad k_y = \sqrt{-k_1 + 0j}
$$

and builds the main first-order matrix as:

$$
R_{\mathrm{main}}(z)=
\begin{bmatrix}
    \cos(k_x z) & \dfrac{\sin(k_x z)}{k_x} & 0 & 0 & 0 & \dfrac{D_x}{\beta} \\
    -(k_1 + h_x^2)\dfrac{\sin(k_x z)}{k_x} & \cos(k_x z) & 0 & 0 & 0 & \dfrac{h_x}{\beta}\dfrac{\sin(k_x z)}{k_x} \\
    0 & 0 & \cos(k_y z) & \dfrac{\sin(k_y z)}{k_y} & 0 & 0 \\
    0 & 0 & k_1 \dfrac{\sin(k_y z)}{k_y} & \cos(k_y z) & 0 & 0 \\
    \dfrac{h_x}{\beta}\dfrac{\sin(k_x z)}{k_x} & \dfrac{D_x}{\beta} & 0 & 0 & 1 & r_{56} \\
    0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

with

$$
D_x = \frac{h_x}{k_1 + h_x^2}\left(1-\cos(k_x z)\right)
$$

and

$$
r_{56} =
\frac{h_x^2}{\beta^2}\frac{z-\dfrac{\sin(k_x z)}{k_x}}{k_1+h_x^2}
- \frac{z}{\beta^2 \gamma^2}
$$

As in the quadrupole case, OCELOT evaluates the square roots as complex numbers and then takes the real part of the resulting matrix elements.

In the special case `k1 + h_x^2 = 0`, the code uses the corresponding finite limit instead of the expressions above.

## Edge Matrices

Because `Bend` has `has_edge=True`, it also builds entrance and exit edge maps.

In `BendAtom`, the first-order edge matrix is:

$$
R_{\mathrm{edge}} =
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
h \tan(e) & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & -h \tan(e-\phi) & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

with

$$
h = \frac{\theta}{l}, \qquad
\phi = \mathrm{fint} \cdot h \cdot \mathrm{gap} \cdot \sec(e)\left(1+\sin^2 e\right)
$$

The entrance map uses `e1` and `fint`, while the exit map uses `e2` and `fintx`.

## How OCELOT Implements It

The implementation path is:

```text
Bend
    -> BendAtom
    -> create_first_order_entrance_params(...)
    -> Magnet.create_first_order_main_params(...)
    -> create_first_order_exit_params(...)
    -> FirstOrderParams(...)
    -> TransferMap
```

### Main body

`BendAtom` does **not** override `create_first_order_main_params(...)`, so the main body uses the inherited implementation from [`Magnet`](./magnet.md):

```python
R = uni_matrix(length, k1, hx=angle / l, sum_tilts=0, energy=energy)
```

### Edges

`BendAtom` implements:

- `create_first_order_entrance_params(...)`
- `create_first_order_exit_params(...)`

Both use the helper:

```python
_R_edge(fint, edge)
```

to construct the edge focusing matrices.

### Tilt handling

As with other elements, the raw matrices are stored together with `tilt` in [`FirstOrderParams`](../trasfer-maps/tm-params.md), and [`TransferMap`](../trasfer-maps/first-order.md) later applies the rotated matrix through `params.get_rotated_R()`.

## `SBend` and `RBend`

`SBend` and `RBend` are both bend wrappers built on top of the same `BendAtom` physics model for the main body and edges. The practical difference is how their edge angles are interpreted.

### `SBend`

`SBend` is a sector bend. In the current code, `SBendAtom` is only a thin specialization of `BendAtom`. The supplied `e1` and `e2` are used directly.

For a symmetric sector magnet one often has:

$$
e_1 = e_2 = \frac{\theta}{2}
$$

but in OCELOT this is not imposed automatically for `SBend`; it is up to the user or the lattice import.

### `RBend`

`RBend` is a rectangular bend. In [`RBendAtom`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/rbend_atom.py), the user-facing edge inputs are shifted before the base `BendAtom` is initialized:

$$
e_1^{\mathrm{internal}} = e_1^{\mathrm{user}} + \frac{\theta}{2}, \qquad
e_2^{\mathrm{internal}} = e_2^{\mathrm{user}} + \frac{\theta}{2}
$$

and if `e1` or `e2` are omitted, they default to:

$$
e_1^{\mathrm{internal}} = e_2^{\mathrm{internal}} = \frac{\theta}{2}
$$

So the main distinction in OCELOT is not a different body map, but a different convention for how the edge angles are derived from the user input.

## Example of Use

For an edge-aware element, `R()` returns the full sequence `[entrance, main, exit]`:

```python
import numpy as np
from ocelot.cpbd.elements import Bend

b = Bend(l=1.0, angle=0.1, e1=0.05, e2=0.05)

np.set_printoptions(precision=4, suppress=True)
print(b.R(energy=1.0))  # [GeV]
```

```python
[array([[ 1.   ,  0.   ,  0.   ,  0.   ,  0.   ,  0.   ],
       [ 0.005,  1.   ,  0.   ,  0.   ,  0.   ,  0.   ],
       [ 0.   ,  0.   ,  1.   ,  0.   ,  0.   ,  0.   ],
       [ 0.   ,  0.   , -0.005,  1.   ,  0.   ,  0.   ],
       [ 0.   ,  0.   ,  0.   ,  0.   ,  1.   ,  0.   ],
       [ 0.   ,  0.   ,  0.   ,  0.   ,  0.   ,  1.   ]]),
 array([[ 0.995 ,  0.9983,  0.    ,  0.    ,  0.    ,  0.05  ],
       [-0.01  ,  0.995 ,  0.    ,  0.    ,  0.    ,  0.0998],
       [ 0.    ,  0.    ,  1.    ,  1.    ,  0.    ,  0.    ],
       [ 0.    ,  0.    ,  0.    ,  1.    ,  0.    ,  0.    ],
       [ 0.0998,  0.05  ,  0.    ,  0.    ,  1.    ,  0.0017],
       [ 0.    ,  0.    ,  0.    ,  0.    ,  0.    ,  1.    ]]),
 array([[ 1.   ,  0.   ,  0.   ,  0.   ,  0.   ,  0.   ],
       [ 0.005,  1.   ,  0.   ,  0.   ,  0.   ,  0.   ],
       [ 0.   ,  0.   ,  1.   ,  0.   ,  0.   ,  0.   ],
       [ 0.   ,  0.   , -0.005,  1.   ,  0.   ,  0.   ],
       [ 0.   ,  0.   ,  0.   ,  0.   ,  1.   ,  0.   ],
       [ 0.   ,  0.   ,  0.   ,  0.   ,  0.   ,  1.   ]])]
```
