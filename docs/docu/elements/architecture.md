---
sidebar_position: 2
title: Element Architecture
description: How wrappers, atoms, TMParams, and transformations interact
---

# Element Architecture in OCELOT

The CPBD element system is layered. A logical beamline element is usually split into a public wrapper, an internal atom, a `TMParams` container, and a transformation. This separation keeps the public API stable while allowing each element family to choose the most suitable tracking algorithm.

## Four Layers

| Layer | Typical files | Responsibility |
| --- | --- | --- |
| Public wrapper | `elements/quadrupole.py`, `elements/cavity.py` | User-facing API, cached maps, active TM selection, section slicing |
| Atom | `elements/quadrupole_atom.py`, `elements/cavity_atom.py` | Physics state and `create_*_params(...)` hook methods |
| [`TMParams`](../trasfer-maps/tm-params.md) | `tm_params/first_order_params.py`, `tm_params/cavity_params.py` | Typed data contract between atom and transformation |
| Transformation | `transformations/transfer_map.py`, `transformations/cavity.py` | Runtime algorithm that applies the map to particles |

The public element object that a lattice usually stores is the wrapper, most often an [`OpticElement`](./optical-element.md) subclass.

## Runtime Flow

When a lattice updates or rebuilds maps, the call chain is usually:

```text
MagneticLattice.update_transfer_maps()
    -> element.set_tm(...)
    -> OpticElement._create_tms(...)
    -> Transformation.from_element(...)
    -> atom.create_*_params(...)
    -> TMParams
    -> Transformation.map_function(...)
```

The wrapper decides which transformation family should be active. The atom computes the parameter object for the requested energy. The transformation uses that parameter object to update particle coordinates.

## Two Transformation Roles

One of the most important ideas in the current architecture is that OCELOT keeps two map paths separate.

### First-order optics path

`first_order_tms` is the always-available first-order path. It is built with [`TransferMap`](../trasfer-maps/first-order.md) and is used by linear optics routines such as Twiss calculations.

This means that even an element family with a custom active tracking method still keeps a linear optics representation.

### Active tracking path

`tms` is the active tracking path. It may use a different transformation family, for example:

- `Quadrupole`: `TransferMap`, `SecondTM`, or `KickTM`
- `Cavity`: `CavityTM`
- `Multipole`: `MultipoleTM`

So a family can keep a first-order optics path for `R()` and Twiss calculations while using another transformation for actual particle tracking.

## Edge-aware Elements

The atom attribute `has_edge` controls how a wrapper builds its map sequence.

- `has_edge = False`: only one `MAIN` map is created.
- `has_edge = True`: the wrapper builds `ENTRANCE -> MAIN -> EXIT`.

This rule applies both to the always-available first-order optics path and to the active tracking path.

For slices created with `get_section_tms(...)`, the current behavior is:

- if `start_l == 0`, the entrance map is included
- if `start_l + delta_l == l`, the exit map is included
- a middle slice rebuilds only the main map for the requested length
- `ignore_edges=True` suppresses entrance and exit maps explicitly

## Representative Examples

### Quadrupole

- public wrapper: `Quadrupole`
- atom: `QuadrupoleAtom`, derived from [`Magnet`](./magnet.md)
- optics path: first-order `TransferMap`
- active tracking: `TransferMap`, `SecondTM`, or `KickTM`

This is a good reference family for the standard no-edge wrapper/atom contract.

### Cavity

- public wrapper: `Cavity`
- atom: `CavityAtom`
- optics path: first-order `TransferMap`
- active tracking: `CavityTM`
- edge behavior: `ENTRANCE -> MAIN -> EXIT`

`Cavity` is a good example of a family where the optics path and the active tracking method are intentionally different.

## Why the Split Is Useful

- Physics formulas live on atoms, while tracking algorithms live in transformations.
- The same element family can support several active tracking methods.
- First-order optics remain available even when active tracking uses another transformation.
- The wrapper keeps the historical user-facing API stable across lattices and tracking code.

## Read Next

- [`OpticElement`](./optical-element.md): the public wrapper
- [`TMParams`](../trasfer-maps/tm-params.md): parameter containers between atoms and transformations
- [`Element`](./element.md): minimal atom-layer base class
- [`Magnet`](./magnet.md): atom-layer base class for magnetic families
