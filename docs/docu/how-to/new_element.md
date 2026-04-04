---
sidebar_position: 4
title: Create New Element
description: How to add a new CPBD element family
---

# How to Create a New Element

This page explains how to add a new CPBD element family in the current wrapper/atom architecture.

It assumes that you already know the general structure described in [Element Architecture](../elements/architecture.md). Here we focus on the practical implementation steps.

## Two Rules To Keep In Mind

### `supported_tms` is a wrapper contract

`supported_tms` lists the active tracking methods that the public wrapper allows users or lattices to select.

It does **not** mean:

- every hook family the atom happens to implement
- every internal first-order path available for optics

For example, `Cavity` keeps a `TransferMap`-based first-order optics path in `first_order_tms`, but its active tracking contract is still only:

```python
supported_tms = {CavityTM}
```

### Edge-aware families must always support first-order optics hooks

For every [`OpticElement`](../elements/optical-element.md), `first_order_tms` is built with `TransferMap`.

That means:

- `has_edge = False` families must provide a first-order `MAIN` hook
- `has_edge = True` families must provide first-order `ENTRANCE`, `MAIN`, and `EXIT` hooks

This remains true even if active tracking uses a custom transformation such as `CavityTM`.

## 1. Decide the Public Wrapper Contract

Before writing code, decide:

- is this a normal [`OpticElement`](../elements/optical-element.md) family
- is it edge-aware (`has_edge=True`) or not
- what is the default active tracking method
- which active tracking methods should be user-selectable through the wrapper

In current CPBD terms:

- `default_tm` is the family fallback active tracking method
- `supported_tms` is the set of wrapper-selectable active tracking methods
- `first_order_tms` is separate and is always the `TransferMap` optics path

Typical choices:

- simple linear element: `default_tm = TransferMap`
- magnetic family with nonlinear tracking options: `supported_tms = {TransferMap, SecondTM, KickTM}`
- family-specific active tracking only: `supported_tms = {default_tm}`

## 2. Choose the Atom Base Class

The atom is where physics state and hook methods live.

Use [`Element`](../elements/element.md) when:

- the family is not naturally magnet-like
- you only need a custom first-order map or a fully custom hook family

Use [`Magnet`](../elements/magnet.md) when:

- the family is magnet-like
- you want inherited `k1`, `k2`, generic first-order, second-order, or kick hooks

That inheritance choice matters because it determines what hook surface already exists before you override anything.

## 3. Implement the Atom

At minimum, a new atom must store its physics state and implement the hook families required by the wrapper contract.

For a no-edge first-order family, the minimum useful hook is:

```python
create_first_order_main_params(self, energy, delta_length=None)
```

For an edge-aware family, the first-order minimum is:

- `create_first_order_entrance_params(...)`
- `create_first_order_main_params(...)`
- `create_first_order_exit_params(...)`

If the family changes reference energy, also implement:

```python
create_delta_e(self, total_length, delta_length=None)
```

### Minimal no-edge atom skeleton

```python
import numpy as np

from ocelot.cpbd.elements.element import Element
from ocelot.cpbd.tm_params.first_order_params import FirstOrderParams


class MyElementAtom(Element):
    def __init__(self, l=0.0, strength=0.0, eid=None, **kwargs):
        super().__init__(eid=eid, has_edge=False, **kwargs)
        self.l = l
        self.strength = strength

    def create_first_order_main_params(self, energy, delta_length=None):
        z = self.l if delta_length is None else delta_length

        R = np.eye(6)
        R[1, 0] = -self.strength * z

        B = self._default_B(R)
        return FirstOrderParams(R=R, B=B, tilt=self.tilt)
```

### Edge-aware atom skeleton

```python
class MyEdgeElementAtom(Element):
    def __init__(self, l=0.0, edge_strength=0.0, eid=None, **kwargs):
        super().__init__(eid=eid, has_edge=True, **kwargs)
        self.l = l
        self.edge_strength = edge_strength

    def create_first_order_entrance_params(self, energy, delta_length=None):
        ...

    def create_first_order_main_params(self, energy, delta_length=None):
        ...

    def create_first_order_exit_params(self, energy, delta_length=None):
        ...
```

## 4. Implement the Public Wrapper

The wrapper is usually very small, but it is still important because it declares the public tracking contract.

Typical wrapper structure:

```python
from ocelot.cpbd.elements.optic_element import OpticElement
from ocelot.cpbd.elements.my_element_atom import MyElementAtom
from ocelot.cpbd.transformations.transfer_map import TransferMap
from ocelot.cpbd.transformations.second_order import SecondTM


class MyElement(OpticElement):
    default_tm = TransferMap
    supported_tms = {TransferMap, SecondTM}

    def __init__(self, l=0.0, strength=0.0, eid=None, tm=None, **kwargs):
        super().__init__(MyElementAtom(l=l, strength=strength, eid=eid, **kwargs), tm=tm)
```

Important:

- public physics attributes should live on the atom, not be duplicated on the wrapper
- users should interact with `elem.k1`, `elem.v`, and similar wrapper-level attributes through forwarding
- do not bypass wrapper cache invalidation by writing directly into `elem.__dict__`

## 5. Verify the Family Contract

After implementation, check these behaviors:

- construction without `tm=` uses `default_tm`
- `R()` works and uses the first-order optics path
- `set_tm(...)` accepts declared active TMs
- explicit undeclared `set_tm(...)` requests raise
- global lattice requests may warn and fall back to `default_tm`
- `get_section_tms(...)` behaves correctly for slices
- edge-aware families produce `ENTRANCE -> MAIN -> EXIT`

For edge-aware custom-TM families, also verify that the first-order optics path still builds successfully.

## Practical Checklist

- choose `default_tm` and `supported_tms`
- decide whether the atom should inherit from [`Element`](../elements/element.md) or [`Magnet`](../elements/magnet.md)
- implement the first-order optics hooks
- implement `create_delta_e(...)` if the family changes reference energy
- verify edge behavior and slice behavior
- verify explicit versus global TM selection

## Read Next

- [How to Create a New TM](./new_tm.md)
- [Element Architecture](../elements/architecture.md)
- [`TMParams`](../trasfer-maps/tm-params.md)
