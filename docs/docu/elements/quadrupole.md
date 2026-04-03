---
sidebar_position: 8
title: Quadrupole
description: Linear quadrupole element
---

# [`Quadrupole`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/quadrupole.py) Class

The public `Quadrupole` class is an [`OpticElement`](./optical-element.md) wrapper around `QuadrupoleAtom`, which inherits from [`Magnet`](./magnet.md). In the simplest case, it represents a linear quadrupole lens with focusing in one transverse plane and defocusing in the other.

In this page we focus only on the first-order matrix and on how it is implemented in OCELOT.

## `Quadrupole` in the Element Architecture

`Quadrupole` follows the standard no-edge wrapper/atom structure:

- public wrapper: `Quadrupole`
- atom: `QuadrupoleAtom`
- default active transformation: `TransferMap`
- additionally supported active transformations: `SecondTM`, `KickTM`
- `has_edge = False`, so the element is represented by a single `MAIN` map without entrance or exit maps

The first-order matrix is built by the atom layer and then applied by [`TransferMap`](../trasfer-maps/first-order.md).

## Class Definition Snippet

```python
from ocelot.cpbd.elements import Quadrupole

q = Quadrupole(l=0.2, k1=1.2, tilt=0.0)

# full parameter list:
# Quadrupole(l=0.0, k1=0.0, k2=0.0, tilt=0.0, eid=None, tm=None)
```

## Parameters

- **`l`** (`float`): magnetic length [m]
- **`k1`** (`float`): quadrupole strength [1/m²]
- **`k2`** (`float`): sextupole component stored on the atom; it does not enter the first-order linear matrix
- **`tilt`** (`float`): roll angle around the beam axis [rad]
- **`eid`** (`str`, optional): element identifier

The wrapper also provides two convenience properties:

- **`k1l`**: integrated quadrupole strength `k1 * l`
- **`k2l`**: integrated sextupole strength `k2 * l`

## First-Order Transfer Matrix

For a straight quadrupole, the first-order map is block-diagonal in the transverse planes. In OCELOT the bending curvature is zero for a normal quadrupole, so the first-order matrix is built with `hx = 0`.

Following the implementation in `uni_matrix(...)`, OCELOT defines

$$
k_x = \sqrt{k_1 + 0j}, \qquad k_y = \sqrt{-k_1 + 0j}
$$

and builds the matrix as:

$$
R(z)=
\begin{bmatrix}
    \cos(k_x z) & \dfrac{\sin(k_x z)}{k_x} & 0 & 0 & 0 & 0 \\
    -k_1 \dfrac{\sin(k_x z)}{k_x} & \cos(k_x z) & 0 & 0 & 0 & 0 \\
    0 & 0 & \cos(k_y z) & \dfrac{\sin(k_y z)}{k_y} & 0 & 0 \\
    0 & 0 & k_1 \dfrac{\sin(k_y z)}{k_y} & \cos(k_y z) & 0 & 0 \\
    0 & 0 & 0 & 0 & 1 & r_{56} \\
    0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

with

$$
r_{56} = -\frac{z}{\beta^2 \gamma^2}
$$

This notation is compact and also matches the code closely. The square roots are taken for complex numbers with zero imaginary part. As a result:

- if `k1 > 0`, the `x` plane is focusing and the `y` plane becomes hyperbolic
- if `k1 < 0`, the roles of the two planes are exchanged

In other words, when the square root becomes imaginary, the corresponding trigonometric functions naturally turn into hyperbolic ones. OCELOT handles this by working with complex numbers internally and then taking the real part of the final matrix coefficients.

## How OCELOT Implements It

The implementation path is:

```text
Quadrupole
    -> QuadrupoleAtom
    -> Magnet.create_first_order_main_params(...)
    -> uni_matrix(...)
    -> FirstOrderParams(R, B, tilt)
    -> TransferMap
```

### Wrapper and atom

[`Quadrupole`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/quadrupole.py) constructs a `QuadrupoleAtom`.

[`QuadrupoleAtom`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/quadrupole_atom.py) stores `l`, `k1`, `k2`, and `tilt`, but it does **not** override `create_first_order_main_params(...)`.

### Inherited first-order hook

Because `QuadrupoleAtom` inherits from [`Magnet`](./magnet.md), it uses:

```python
create_first_order_main_params(energy, delta_length=None)
```

from `Magnet`.

That method calls:

```python
R = uni_matrix(length, k1, hx=0.0, sum_tilts=0, energy=energy)
```

for a straight quadrupole.

### `uni_matrix(...)`

Inside [`uni_matrix`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/r_matrix.py), OCELOT computes:

$$
k_x = \sqrt{k_1 + 0j}, \qquad k_y = \sqrt{-k_1 + 0j}
$$

and then evaluates the transverse matrix blocks with `cos(k_x z)`, `sin(k_x z) / k_x`, `cos(k_y z)`, and `sin(k_y z) / k_y`. In the code this is handled uniformly with complex square roots and then taking the real part of the result.

### Tilt handling

The raw matrix returned by `uni_matrix(...)` is the unrotated quadrupole matrix. The roll angle `tilt` is stored separately in [`FirstOrderParams`](../trasfer-maps/tm-params.md), and [`TransferMap`](../trasfer-maps/first-order.md) later applies the rotated matrix through:

```python
params.get_rotated_R()
```

This means the linear focusing matrix and the transverse roll are kept separate until the transformation is applied.

## Example of Use

```python
import numpy as np
from ocelot.cpbd.elements import Quadrupole

q = Quadrupole(l=0.2, k1=1.2)

np.set_printoptions(precision=4, suppress=True)
print(q.R(energy=1.0))  # [GeV]
```

```python
[array([[ 0.9761,  0.1984,  0.    ,  0.    ,  0.    ,  0.    ],
       [-0.2381,  0.9761,  0.    ,  0.    ,  0.    ,  0.    ],
       [ 0.    ,  0.    ,  1.0241,  0.2016,  0.    ,  0.    ],
       [ 0.    ,  0.    ,  0.2419,  1.0241,  0.    ,  0.    ],
       [ 0.    ,  0.    ,  0.    ,  0.    ,  1.    , -0.    ],
       [ 0.    ,  0.    ,  0.    ,  0.    ,  0.    ,  1.    ]])]
```
