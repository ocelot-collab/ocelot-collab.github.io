---
sidebar_position: 3
title: First Order Map
description: TransferMap class
---

# [TransferMap](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/transfer_map.py) Class

## Overview

`TransferMap` is the standard first-order linear transformation in CPBD. It consumes a [`FirstOrderParams`](./tm-params.md) object produced by an element atom and applies the corresponding linear map to particle coordinates.

For `OpticElement` wrappers, this is also the always-available linear optics path stored in `first_order_tms`.

## Atom Contract

For a no-edge element, the atom must provide:

- `create_first_order_main_params(energy, delta_length)`

For an edge-aware element with `has_edge=True`, the atom must additionally provide:

- `create_first_order_entrance_params(energy, delta_length)`
- `create_first_order_exit_params(energy, delta_length)`

`TransferMap.from_element(...)` binds to those hooks.

## Parameter Object

`TransferMap` expects a [`FirstOrderParams`](./tm-params.md) object with:

- `R`: first-order transfer matrix
- `B`: additive offset vector
- `tilt`: roll angle

At runtime it uses `params.get_rotated_R()` together with `params.B`.

## Mathematical Action

For the current beam energy, the transformation acts as:

$$
X_f = R_{\mathrm{rot}} X_i + B
$$

where:

- $X_i$, $X_f$ are the initial and final 6D phase-space vectors
- $R_{\mathrm{rot}}$ is the rotated first-order matrix returned by `get_rotated_R()`
- $B$ is the additive offset vector

## Runtime Flow

```text
TransferMap.from_element(element)
    -> element.create_first_order_*_params(...)
    -> FirstOrderParams
    -> params.get_rotated_R()
    -> X_f = R X_i + B
```

## Important Methods

### `from_element(cls, element, tm_type=TMTypes.MAIN, delta_l=None, **params)`

Builds a `TransferMap` from an element atom by connecting the correct first-order hook family.

### `map_function(X, energy)`

Applies the first-order map by delegating to `mul_p_array(...)`.

### `mul_p_array(rparticles, energy=0.0)`

Gets the current `FirstOrderParams`, rotates `R` if needed, and overwrites the particle coordinates with the transformed values.

## Edge and Slice Behavior

`TransferMap` follows the wrapper-level edge contract:

- no-edge element: one `MAIN` map
- edge element: `ENTRANCE -> MAIN -> EXIT`

For sliced elements, the wrapper chooses which of those maps are present in the returned sequence.

## Why It Matters Beyond Tracking

Even when active tracking uses another transformation family, `TransferMap` often remains available as the linear optics representation. This is why routines such as Twiss calculations can still access first-order matrices even for element families with custom active tracking methods.
