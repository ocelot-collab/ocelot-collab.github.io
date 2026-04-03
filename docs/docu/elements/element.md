---
sidebar_position: 4
title: Element
description: Atom-layer base class
---

# [`Element`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/element.py) Class

## Overview

The [`Element`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/element.py) class is the minimal atom-layer base class in CPBD. It stores basic geometry and offsets and provides generic `create_*_params(...)` hooks that transformations can use.

In normal user code, `Element` is usually not the object placed directly into a lattice. Instead, it is wrapped by an [`OpticElement`](./optical-element.md) subclass such as `Quadrupole`, `Drift`, or `TDCavity`.

```python
from ocelot.cpbd.elements import Quadrupole

quad = Quadrupole(l=0.2, k1=1.0)

print(type(quad.element).__name__)  # QuadrupoleAtom
print(quad.k1 == quad.element.k1)   # True
```

## Role in the Architecture

- stores element physics state such as length, offsets, and tilt
- provides the hook surface used by transformations
- supplies generic fallbacks for simple element families
- serves as a base for more specialized atoms such as [`Magnet`](./magnet.md), `CavityAtom`, and `TDCavityAtom`

If an atom has `has_edge=True`, it must also provide the corresponding entrance and exit hooks required by the selected transformation family.

## Common Attributes

- **`id`** (`str`): element identifier
- **`has_edge`** (`bool`): whether the element uses entrance and exit maps
- **`l`** (`float`): length in meters
- **`angle`** (`float`): bending angle in radians
- **`tilt`** (`float`): roll angle around the beam axis
- **`dx`**, **`dy`** (`float`): transverse offsets
- **`width`**, **`height`**, **`color`**: plotting metadata
- **`params`** (`dict`): extra element-specific parameters

## Default Hook Methods

### `create_first_order_main_params(energy, delta_length=None)`

Builds generic first-order parameters for the main body of the element and returns a `FirstOrderParams` object. This is the default linear optics hook used by [`TransferMap`](../trasfer-maps/first-order.md) if a family does not override it.

### `create_second_order_main_params(energy, delta_length=0.0)`

Builds generic second-order parameters and returns a `SecondOrderParams` object. It is a fallback implementation for families without a dedicated nonlinear model.

### `create_delta_e(total_length, delta_length=0.0)`

Returns the reference-energy change across the element. The default implementation returns `0.0`, so active RF-like families override it when they need energy gain.

### `get_transfer_geometry()`

Returns the reference-trajectory geometry for the element. In the base class this is the straight-element case.

## Notes on Specialization

Concrete atoms usually override only the hooks that matter for their physics model. For example:

- `DriftAtom` provides a specialized first-order map
- [`Magnet`](./magnet.md) adds magnetic strengths and kick hooks
- `CavityAtom` adds RF-specific hooks and energy gain
- `BendAtom` adds entrance and exit edge hooks

This makes `Element` a small but important base class: transformations do not contain element-specific physics formulas themselves. Instead, they request the needed parameter objects from the atom.

## Summary

`Element` is the foundation of the atom layer. It stores the physical state of an element and exposes the hook methods from which transformations build their runtime maps.
