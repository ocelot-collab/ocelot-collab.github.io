---
sidebar_position: 6
title: Drift
description: Free-space drift element
---

# [`Drift`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/drift.py) Class

The public `Drift` class is an [`OpticElement`](./optical-element.md) wrapper around `DriftAtom`, which inherits from [`Magnet`](./magnet.md). It represents free-space transport without external fields.

In this page we focus on the first-order matrix and on how it is implemented in OCELOT.

## `Drift` in the Element Architecture

`Drift` follows the standard no-edge wrapper/atom structure:

- public wrapper: `Drift`
- atom: `DriftAtom`
- default active transformation: `TransferMap`
- additionally supported active transformations: `SecondTM`, `KickTM`, `RungeKuttaTM`, `RungeKuttaTrTM`
- `has_edge = False`, so the element is represented by a single `MAIN` map without entrance or exit maps

The first-order matrix is built by the atom layer and then applied by [`TransferMap`](../trasfer-maps/first-order.md).

## Class Definition Snippet

```python
from ocelot.cpbd.elements import Drift

d = Drift(l=1.0)

# full parameter list:
# Drift(l=0.0, eid=None, tm=None)
```

## Parameters

- **`l`** (`float`): drift length [m]
- **`eid`** (`str`, optional): element identifier

## First-Order Transfer Matrix

For a drift, both the curvature and the quadrupole strength are zero. In the notation used by `uni_matrix(...)`, this means:

$$
h_x = 0, \qquad k_1 = 0
$$

and the first-order matrix becomes:

$$
R(z)=
\begin{bmatrix}
    1 & z & 0 & 0 & 0 & 0 \\
    0 & 1 & 0 & 0 & 0 & 0 \\
    0 & 0 & 1 & z & 0 & 0 \\
    0 & 0 & 0 & 1 & 0 & 0 \\
    0 & 0 & 0 & 0 & 1 & r_{56} \\
    0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

with

$$
r_{56} = -\frac{z}{\beta^2 \gamma^2}
$$

At relativistic beam energies this term is usually very small, so in many numerical printouts it appears as `0` or `-0`.

## How OCELOT Implements It

The implementation path is:

```text
Drift
    -> DriftAtom
    -> Magnet.create_first_order_main_params(...)
    -> uni_matrix(...)
    -> FirstOrderParams(R, B, tilt)
    -> TransferMap
```

### Wrapper and atom

[`Drift`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/drift.py) constructs a `DriftAtom`.

[`DriftAtom`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/drift_atom.py) stores only the element length and does **not** override `create_first_order_main_params(...)`.

### Inherited first-order hook

Because `DriftAtom` inherits from [`Magnet`](./magnet.md), it uses:

```python
create_first_order_main_params(energy, delta_length=None)
```

from `Magnet`.

That method calls:

```python
R = uni_matrix(length, k1=0.0, hx=0.0, sum_tilts=0, energy=energy)
```

which is exactly the linear drift map.

### Zero-field Runge-Kutta path

`DriftAtom` also implements a Runge-Kutta hook:

```python
create_runge_kutta_main_params(...)
```

which returns a zero magnetic field. This is why `Drift` can also be used with `RungeKuttaTM` and `RungeKuttaTrTM`.

## Example of Use

```python
import numpy as np
from ocelot.cpbd.elements import Drift

d = Drift(l=1.0)

np.set_printoptions(precision=4, suppress=True)
print(d.R(energy=1.0))  # [GeV]
```

```python
[array([[ 1.,  1.,  0.,  0.,  0.,  0.],
       [ 0.,  1.,  0.,  0.,  0.,  0.],
       [ 0.,  0.,  1.,  1.,  0.,  0.],
       [ 0.,  0.,  0.,  1.,  0.,  0.],
       [ 0.,  0.,  0.,  0.,  1., -0.],
       [ 0.,  0.,  0.,  0.,  0.,  1.]])]
```
