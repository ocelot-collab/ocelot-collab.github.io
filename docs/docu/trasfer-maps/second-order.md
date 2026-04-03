---
sidebar_position: 4
title: Second Order Map
description: SecondTM class
---

# [SecondTM](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/second_order.py) Class

## Overview

`SecondTM` is the standard second-order transformation in CPBD. It consumes a [`SecondOrderParams`](./tm-params.md) object and applies both the linear and quadratic parts of the map.

This is not "a `TransferMap` plus a correction". `SecondTM` is its own transformation family with its own runtime algorithm.

## Atom Contract

For a no-edge element, the atom must provide:

- `create_second_order_main_params(energy, delta_length)`

For an edge-aware element with `has_edge=True`, the atom must additionally provide:

- `create_second_order_entrance_params(energy, delta_length)`
- `create_second_order_exit_params(energy, delta_length)`

`SecondTM.from_element(...)` binds to those hooks.

## Parameter Object

`SecondTM` expects a [`SecondOrderParams`](./tm-params.md) object with:

- `R`: first-order part of the map
- `B`: additive offset vector
- `T`: second-order tensor
- `tilt`: roll angle
- `dx`, `dy`: offsets used by the underlying nonlinear model

If `tilt != 0`, `SecondTM` uses `get_rotated_R()` and `get_rotated_T()`.

## Mathematical Action

In schematic form, `SecondTM` applies:

$$
X_f = R X_i + T(X_i, X_i) + B
$$

where the quadratic term is evaluated by the internal second-order multiplication routine.

## Runtime Flow

```text
SecondTM.from_element(element)
    -> element.create_second_order_*_params(...)
    -> SecondOrderParams
    -> use R, T, B
    -> apply second-order map
```

## Important Methods

### `from_element(cls, element, tm_type=TMTypes.MAIN, delta_l=None, **params)`

Builds a `SecondTM` by connecting the second-order hook family of the atom.

### `t_apply(energy, X, U5666=0.0)`

Gets the current `SecondOrderParams`, rotates the map if needed, applies the second-order multiplication, and adds `B`.

### `map_function(X, energy)`

Calls `t_apply(...)` and returns the updated coordinates.

## Use in OCELOT

Many element families expose `SecondTM` as an optional active tracking method. It is especially useful when the first-order map is not sufficient but a dedicated kick or field-integration algorithm is not required.
