---
sidebar_position: 3
title: OpticElement
description: Public wrapper class for CPBD elements
---

# [`OpticElement`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/optic_element.py) Class

## Overview

The [`OpticElement`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/optic_element.py) class is the public wrapper used by most CPBD beamline elements. Users usually place `OpticElement` subclasses such as `Quadrupole`, `Drift`, `Cavity`, or `TDCavity` into a lattice. The wrapper is not just syntactic sugar: it owns framework behavior such as transformation caches, tracking-method selection, attribute forwarding, and section slicing.

```python
from ocelot.cpbd.elements import Quadrupole
from ocelot.cpbd.transformations.second_order import SecondTM

quad = Quadrupole(l=0.3, k1=1.2, tm=SecondTM)

print(type(quad.element).__name__)  # QuadrupoleAtom
print(quad.k1)                      # forwarded to quad.element.k1
```

## What `OpticElement` Owns

- public user-facing API compatible with historical OCELOT scripts
- wrapped atom stored as `element`
- active transformation cache `tms`
- first-order optics cache `first_order_tms`
- tracking-method selection via `default_tm`, `supported_tms`, and `set_tm()`
- section construction via `get_section_tms()`

## Important Attributes

- **`element`** [(`Element`)](./element.md): internal atom containing physics state and `create_*_params(...)` hooks.
- **`default_tm`**: family fallback active transformation.
- **`supported_tms`**: set of active tracking methods that the wrapper explicitly allows.
- **`first_order_tms`**: always-available first-order [`TransferMap`](../trasfer-maps/first-order.md) path used by linear optics code.
- **`tms`**: currently active transformation sequence used for beam tracking.

## Two Transformation Paths

### `first_order_tms`

`first_order_tms` is the linear optics path. It is built with [`TransferMap`](../trasfer-maps/first-order.md) and remains available even if the active tracking method is different. Twiss calculations rely on this path.

### `tms`

`tms` is the active tracking sequence. Depending on the family, it may use `TransferMap`, `SecondTM`, `KickTM`, `CavityTM`, or another transformation class.

This distinction is important. For example:

- `Quadrupole` can use `TransferMap`, `SecondTM`, or `KickTM` as active tracking methods.
- `Cavity` keeps a first-order optics path for `R()` and Twiss calculations, but its active tracking method is `CavityTM`.
- `Multipole` keeps a first-order optics path, while active tracking uses `MultipoleTM`.

Current accessor behavior:

- `R()` and `B()` usually expose the first-order path.
- If the active method is `SecondTM`, `R()` and `B()` use the active second-order maps.
- `T()` returns meaningful tensors only for `SecondTM`; otherwise it returns zero tensors.

## Attribute Forwarding and Cache Invalidation

`OpticElement` forwards most public physics attributes to the wrapped atom. That is why code like `quad.k1` or `cavity.v` works even though the data actually lives on `quad.element` or `cavity.element`.

When such an attribute is changed, the wrapper invalidates both cached map sequences and rebuilds them lazily on the next access.

```python
quad.k1 = 1.5
R = quad.R(energy=1.0)  # maps are rebuilt with the new strength
```

For generic helper code, use `getattr()` and `setattr()` on the public wrapper instead of writing directly into `__dict__`.

## Selecting the Active Transformation

Each wrapper family declares a `default_tm` and may declare `supported_tms`.

- `default_tm`: fallback active transformation for that family.
- `supported_tms`: active tracking methods that may be selected explicitly.

There are three common ways to choose a transformation:

```python
from ocelot.cpbd.elements import Quadrupole
from ocelot.cpbd.magnetic_lattice import MagneticLattice
from ocelot.cpbd.transformations.second_order import SecondTM

quad = Quadrupole(l=0.3, k1=1.2, tm=SecondTM)
quad.set_tm(SecondTM)

lat = MagneticLattice(cell, method={"global": SecondTM})
```

Selection rules in the current architecture:

- explicit family-specific requests must be supported by the wrapper, otherwise an error is raised
- broad global lattice requests may warn and fall back to the family `default_tm`
- families that declare only one active TM, such as `Cavity`, keep that method active even when a global lattice request asks for another one

## Edge Elements and Section Maps

The atom attribute `has_edge` controls how map sequences are built.

- `has_edge = False`: one `MAIN` map is created
- `has_edge = True`: the sequence is `ENTRANCE -> MAIN -> EXIT`

This applies to both `first_order_tms` and the active `tms`.

The method `get_section_tms(delta_l, start_l=0.0, ignore_edges=False, first_order_only=False)` builds maps for a slice of the element:

- if `start_l == 0`, the entrance map is included
- if `start_l + delta_l == l`, the exit map is included
- a middle slice rebuilds only the main map for the requested length
- `ignore_edges=True` suppresses entrance and exit maps explicitly

## Representative Methods

- `R(energy)`: return the sequence of rotated `R` matrices
- `B(energy)`: return the corresponding `B` vectors
- `T(energy)`: return second-order `T` tensors when available
- `set_tm(tm, **params)`: change the active transformation family
- `get_section_tms(...)`: construct maps for a subsection of the element
