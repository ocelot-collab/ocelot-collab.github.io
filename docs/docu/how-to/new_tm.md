---
sidebar_position: 5
title: Create New TM
description: How to add a new transformation for an existing element family
---

# How to Create a New TM

In current CPBD architecture, a "transfer map" usually means a transformation class derived from [`Transformation`](../trasfer-maps/transormation.md). This can be the standard linear [`TransferMap`](../trasfer-maps/first-order.md), but it can also be a family-specific transformation such as `CavityTM`, `KickTM`, or `MultipoleTM`.

This page explains how to add a new transformation to an existing element family.

## 1. Decide Whether the New TM Is Public or Internal

Ask first:

- should users be able to select this TM through `tm=` or `set_tm(...)`
- or is it only an internal/helper path

If it should be user-selectable, add it to the wrapper contract:

```python
supported_tms = {..., MyNewTM}
```

If it is only an internal path, do **not** add it to `supported_tms`.

This distinction matters because `supported_tms` describes the public wrapper contract, not every possible hook the atom can build.

## 2. Decide Whether You Need a New `TMParams` Class

You do **not** need a new [`TMParams`](../trasfer-maps/tm-params.md) type if the new transformation can consume an existing one such as:

- `FirstOrderParams`
- `SecondOrderParams`
- `KickParams`

You **do** need a new `TMParams` subclass if the transformation needs extra runtime data not already carried by an existing container.

That is exactly what `CavityParams` and `MultipoleParams` do.

### Minimal custom parameter container

```python
from ocelot.cpbd.tm_params.tm_params import TMParams


class MyTMParams(TMParams):
    def __init__(self, foo, bar):
        super().__init__()
        self.foo = foo
        self.bar = bar
```

## 3. Implement the Transformation Class

Every transformation must implement:

- `from_element(...)`
- `map_function(...)`

In `from_element(...)`, bind the transformation to the atom hook family it needs.

### Minimal custom transformation skeleton

```python
from ocelot.cpbd.transformations.transformation import Transformation, TMTypes


class MyTM(Transformation):
    @classmethod
    def from_element(cls, element, tm_type=TMTypes.MAIN, delta_l=None, **params):
        return cls.create(
            entrance_tm_params_func=element.create_my_tm_entrance_params if element.has_edge else None,
            main_tm_params_func=element.create_my_tm_main_params,
            exit_tm_params_func=element.create_my_tm_exit_params if element.has_edge else None,
            delta_e_func=element.create_delta_e,
            tm_type=tm_type,
            length=element.l,
            delta_length=delta_l,
            **params,
        )

    def map_function(self, X, energy):
        params = self.get_params(energy)
        ...
        return X
```

If the transformation does not use energy-dependent parameter creation, you may override `get_params(...)`, as `KickTM` and `MultipoleTM` do.

## 4. Add the Matching Atom Hooks

The atom must provide the hook family expected by the new transformation.

For the skeleton above, that means:

- `create_my_tm_main_params(...)`
- plus entrance and exit hooks if the family has `has_edge=True`

### Minimal atom-side custom hook

```python
def create_my_tm_main_params(self, energy, delta_length=None):
    return MyTMParams(foo=self.foo, bar=self.bar)
```

Important contract rule:

- if the wrapper declares support for `MyTM` and the family has `has_edge=True`, the atom must implement entrance, main, and exit hooks for `MyTM`

Otherwise the wrapper contract is wrong and `OpticElement` will fail when it tries to build the TM sequence.

## 5. Expose the New Transformation on the Wrapper

If the transformation should be selectable by users, update the wrapper:

```python
class ExistingFamily(OpticElement):
    default_tm = TransferMap
    supported_tms = {TransferMap, SecondTM, MyTM}
```

If the new transformation should become the family default, also update:

```python
default_tm = MyTM
```

If you expose only a family-specific active TM, the usual pattern is:

```python
default_tm = MyTM
supported_tms = {MyTM}
```

This is how `Cavity`, `TWCavity`, and `Multipole` work today.

## Two Useful Patterns

### Pattern A: Existing element, existing `TMParams`

This is the simpler case.

You implement:

- a new transformation class
- a new `from_element(...)` binding
- atom hooks returning an existing parameter container

This is appropriate when the runtime algorithm is new, but the data it needs already exists.

### Pattern B: Existing element, new custom `TMParams`

This is the right pattern when the tracking algorithm itself is new and needs additional element-specific data.

You implement:

- a new transformation class
- a new `TMParams` subclass
- new atom hooks
- wrapper declaration updates

Examples already in CPBD:

- `Cavity` + `CavityTM`
- `Multipole` + `MultipoleTM`
- `Undulator` + `UndulatorTestTM`

## Common Mistakes

- declaring a TM in `supported_tms` but not implementing the required hook family on the atom
- forgetting that `has_edge=True` means `ENTRANCE -> MAIN -> EXIT`
- forgetting that `first_order_tms` is separate from `supported_tms`
- adding a new active TM but not updating the wrapper contract
- introducing extra runtime data without creating a matching `TMParams` container

## Read Next

- [How to Create a New Element](./new_element.md)
- [Element Architecture](../elements/architecture.md)
- [`Transformation`](../trasfer-maps/transormation.md)
- [`TMParams`](../trasfer-maps/tm-params.md)
