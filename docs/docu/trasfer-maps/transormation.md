---
sidebar_position: 1
title: Transformation Parent Class
description: Base class for CPBD transformations
---

# [Transformation](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/transformation.py#L22) Class

## Overview

`Transformation` is the abstract base class for all CPBD transfer-map and tracking transformations. A transformation does not usually derive element physics formulas by itself. Instead, it receives a callback from the element atom, asks that callback for a [`TMParams`](./tm-params.md) object at the current beam energy, and then applies the corresponding map to particles.

This is the key runtime contract:

```text
element atom
    -> create_*_params(...)
    -> TMParams
    -> Transformation.get_params(energy)
    -> Transformation.map_function(...)
```

For the broader architectural picture, see [Element Architecture](../elements/architecture.md).

## Main Responsibilities

- keep the callback that builds map parameters
- keep the callback that computes `delta_e`
- distinguish `MAIN`, `ENTRANCE`, and `EXIT` map roles
- cache parameter objects for the current energy
- apply the map to `Particle`, `ParticleArray`, or a list of `Particle`

## Constructor

### `__init__(create_tm_param_func, delta_e_func, tm_type, length, delta_length=None)`

Important arguments:

- **`create_tm_param_func`**: callback that returns a [`TMParams`](./tm-params.md) object
- **`delta_e_func`**: callback used to compute reference-energy change for the main map
- **`tm_type`**: one of `TMTypes.MAIN`, `TMTypes.ENTRANCE`, or `TMTypes.EXIT`
- **`length`**: full element length
- **`delta_length`**: optional slice length for partial maps

For entrance and exit maps, the effective transformation length is zero and `delta_e` is not applied.

## `TMTypes`

The base class uses the `TMTypes` enum to identify the position of a map in the element:

- **`MAIN`**: body of the element
- **`ENTRANCE`**: entrance edge or entrance kick
- **`EXIT`**: exit edge or exit kick

The enum also contains `ROT_ENTRANCE` and `ROT_EXIT`, which are internal variants used in some parts of CPBD.

## Core Methods

### `from_element(cls, element, tm_type=TMTypes.MAIN, delta_l=None, **params)`

Abstract class method implemented by each concrete transformation family. It binds the transformation to the appropriate atom hooks.

Examples:

- `TransferMap.from_element(...)` uses `create_first_order_*_params(...)`
- `SecondTM.from_element(...)` uses `create_second_order_*_params(...)`

### `create(...)`

Shared factory used by concrete transformations. It chooses the correct hook for `MAIN`, `ENTRANCE`, or `EXIT` and creates the transformation instance.

### `get_params(energy)`

Requests the [`TMParams`](./tm-params.md) object for the given beam energy and caches it. If the same energy is requested again, the cached object is reused.

### `get_delta_e()`

Returns the reference-energy change for the map. By current contract, only `MAIN` maps contribute `delta_e`.

### `apply(prcl_series)`

Applies the transformation to:

- a [`ParticleArray`](../OCELOT%20fundamentals/particle-array.md)
- a single `Particle`
- a list of `Particle`

It also advances the longitudinal position and updates the reference energy if `delta_e` is nonzero.

### `map_function(X, energy)`

Abstract method that implements the actual tracking algorithm for the specific transformation family.

## Why `Transformation` Is Separate From the Element

- atoms own the physics state and build parameter objects
- transformations own the runtime tracking algorithm
- one element family can support more than one transformation
- the same wrapper can keep a first-order optics path while using another active tracking method

## Read Next

- [TMParams](./tm-params.md): parameter containers exchanged between atoms and transformations
- [TransferMap](./first-order.md): first-order linear map
- [SecondTM](./second-order.md): second-order nonlinear map
