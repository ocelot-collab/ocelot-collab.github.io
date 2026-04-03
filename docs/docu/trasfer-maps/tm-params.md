---
sidebar_position: 2
title: TMParams
description: Parameter containers passed from atoms to transformations
---

# `TMParams` in OCELOT

`TMParams` is the data boundary between the element atom and the transformation. The atom computes the element-specific quantities needed for tracking at a given energy, stores them in a parameter object, and the transformation consumes that object in `map_function(...)`.

## Why `TMParams` Exists

Without `TMParams`, every transformation would need to know the detailed internal state of every element family. Instead, OCELOT uses small typed containers:

- atoms compute the parameters
- transformations consume the parameters
- the wrapper can switch between transformation families without moving all algorithms into the atom

This is one of the key reasons the current CPBD architecture can support several tracking methods for the same element family.

## Runtime Flow

```text
OpticElement / lattice
    -> Transformation.from_element(...)
    -> atom.create_*_params(...)
    -> TMParams
    -> Transformation.get_params(energy)
    -> Transformation.map_function(...)
```

## Base Class

The base class [`TMParams`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/tm_params/tm_params.py) is intentionally small. It mainly serves as a common type for parameter objects returned by atom hooks.

Most practical work happens in subclasses.

## Main `TMParams` Classes

| Class | Main contents | Used by | Role |
| --- | --- | --- | --- |
| `TMParams` | base marker class | all transformations | common boundary type |
| `FirstOrderParams` | `R`, `B`, `tilt` | `TransferMap` | linear map plus additive offset and roll angle |
| `SecondOrderParams` | `R`, `B`, `T`, `tilt`, `dx`, `dy` | `SecondTM` | second-order tensor plus linear part and offsets |
| `CavityParams` | `R`, `B`, `tilt`, `v`, `freq`, `phi` | `CavityTM`, `TWCavityTM` | linear cavity map plus RF settings |
| `KickParams` | `dx`, `dy`, `tilt`, `angle`, `k1`, `k2`, `k3` | `KickTM` | strengths and offsets for algorithmic kick tracking |
| `RungeKuttaParams` | `mag_field` callable | `RungeKuttaTM`, `RungeKuttaTrTM` | field callback for numerical integration |
| `MultipoleParams` | `kn` | `MultipoleTM` | multipole strength list |
| `UndulatorTestParams` | `lperiod`, `Kx`, `ax` | `UndulatorTestTM` | metadata for the simplified undulator map |

## Two Typical Examples

### `FirstOrderParams`

[`FirstOrderParams`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/tm_params/first_order_params.py) stores:

- `R`: unrotated first-order transfer matrix
- `B`: additive offset term
- `tilt`: element roll angle

It also provides `get_rotated_R()`, which is what [`TransferMap`](./first-order.md) typically applies at runtime.

### `SecondOrderParams`

[`SecondOrderParams`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/tm_params/second_order_params.py) extends `FirstOrderParams` with:

- `T`: second-order tensor
- `dx`, `dy`: source offsets used in the nonlinear model

It also provides `get_rotated_T()`, used by [`SecondTM`](./second-order.md).

## Important Design Point

`TMParams` is not just documentation and it is not just a generic dictionary. It is the explicit contract between the physics layer and the tracking layer.

That means:

- the atom can stay focused on element physics
- the transformation can stay focused on the algorithm
- the same atom family can feed several transformation families

## Read Next

- [Transformation Parent Class](./transormation.md)
- [TransferMap](./first-order.md)
- [SecondTM](./second-order.md)
