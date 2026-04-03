---
sidebar_position: 5
title: Magnet
description: Atom-layer base class for magnetic elements
---

# [`Magnet`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/magnet.py) Class

## Overview

The [`Magnet`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/magnet.py) class extends [`Element`](./element.md) and is the standard atom-layer base class for many magnetic element families. It adds magnetic strengths and provides generic hooks for linear, second-order, and kick-based tracking.

In the public API, users usually work with wrappers such as `Quadrupole`, `Sextupole`, or `Bend`. Those wrappers hold atoms that derive from `Magnet`.

## Added Physics State

- **`angle`** (`float`): bending angle in radians
- **`k1`** (`float`): quadrupole gradient in `1/m^2`
- **`k2`** (`float`): sextupole strength in `1/m^3`

These are added on top of the generic geometry and offset attributes inherited from [`Element`](./element.md).

## Main Responsibilities

- build first-order magnetic parameters for [`TransferMap`](../trasfer-maps/first-order.md)
- build second-order parameters for `SecondTM`
- provide kick parameters for `KickTM`
- provide transfer geometry for both straight and bending magnets

## Hook Methods

### `create_first_order_main_params(energy, delta_length=None)`

Returns `FirstOrderParams` for the main body of the magnet. The generic implementation includes the bending curvature `angle / l` and the quadrupole term `k1`.

### `create_second_order_main_params(energy, delta_length=0.0)`

Returns `SecondOrderParams` for magnets that use the generic magnetic second-order model. This includes `k1`, `k2`, offsets, and the corresponding `R`, `B`, and `T`.

### `create_kick_entrance_params()`, `create_kick_main_params()`, `create_kick_exit_params()`

Return `KickParams` objects for kick-based tracking. These hooks provide the strengths and offsets needed by `KickTM`.

## Geometry and Tilt

`Magnet.get_transfer_geometry()` distinguishes between straight and bending cases:

- if `angle == 0`, the magnet uses the straight reference geometry inherited from [`Element`](./element.md)
- if `angle != 0`, the reference trajectory is an arc in the bending plane
- for dipoles, `tilt` rotates the bending plane
- for straight magnets such as quadrupoles and sextupoles, `tilt` does not change the reference trajectory

## Typical Families Built on `Magnet`

- `Quadrupole`
- `Sextupole`
- `Octupole`
- `Bend`, `SBend`, `RBend`
- `UnknownElement`

Not every magnetic-looking element derives from `Magnet`. For example, `Hcor` and `Vcor` use their own atom class and therefore do not inherit the generic kick hooks from `Magnet`.

## Summary

`Magnet` is the main atom-layer base class for magnetic element families. It extends the generic `Element` contract with magnetic strengths, nonlinear hooks, kick hooks, and geometry for bending trajectories.
