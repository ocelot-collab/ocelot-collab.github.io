---
sidebar_position: 1
title: Introduction to Elements
description: Overview of OCELOT element architecture
---

# Introduction to OCELOT Elements

In OCELOT, one beamline element is usually not implemented as a single class. The object that users put into a [`MagneticLattice`](../OCELOT%20fundamentals/magnet-lattice.md) is typically a public wrapper such as `Drift`, `Quadrupole`, `Cavity`, or `TDCavity`. That wrapper holds an internal physics object and builds the transformations used for optics and tracking.

## The Basic Idea

Most CPBD element families are organized into four layers:

- [`OpticElement`](./optical-element.md): public wrapper with the user-facing API, cached maps, and tracking-method selection.
- [`Element`](./element.md) or [`Magnet`](./magnet.md): atom layer that stores physics parameters and computes map parameters.
- [`TMParams`](../trasfer-maps/tm-params.md): typed parameter containers passed from atoms to transformations.
- [`Transformation`](../trasfer-maps/transormation.md): map application layer such as [`TransferMap`](../trasfer-maps/first-order.md), [`SecondTM`](../trasfer-maps/second-order.md), or family-specific transformations.

```text
Quadrupole wrapper
    -> QuadrupoleAtom
    -> FirstOrderParams / SecondOrderParams
    -> TransferMap / SecondTM / KickTM
```

This split allows OCELOT to keep a stable public API while still supporting several tracking methods for the same element family.

## Why This Structure Matters

- The same element family can support several active tracking methods.
- First-order optics remain available even when active tracking uses another transformation.
- Edge-aware elements can build `ENTRANCE -> MAIN -> EXIT` map sequences.
- Public element attributes such as `quad.k1` remain convenient, while the actual physics state lives on the atom.

For a more detailed explanation, start with [Element Architecture](./architecture.md) and then read the class pages for [`OpticElement`](./optical-element.md), [`Element`](./element.md), and [`Magnet`](./magnet.md).

## File Layout

For most element families you will find at least two files in `ocelot/cpbd/elements/`:

- `xxx.py`: public wrapper class derived from [`OpticElement`](./optical-element.md).
- `xxx_atom.py`: atom class derived from [`Element`](./element.md) or [`Magnet`](./magnet.md).

Examples:

- `drift.py` and `drift_atom.py`
- `quadrupole.py` and `quadrupole_atom.py`
- `cavity.py` and `cavity_atom.py`

The full implementation is available in the [OCELOT GitHub repository](https://github.com/ocelot-collab/ocelot/tree/master/ocelot/cpbd/elements).

## Overview of Element Families

### Base classes

- [`OpticElement`](./optical-element.md): public wrapper used by most beamline elements.
- [`Element`](./element.md): minimal atom-layer base class.
- [`Magnet`](./magnet.md): atom-layer base class for many magnetic families.

### Passive and utility elements

- [`Drift`](./drift.md): straight beam transport without fields.
- `Marker`: zero-length reference point.
- `Monitor`: diagnostic element with monitor-specific state.
- `Aperture`: stores beam aperture limits.

### Magnetic elements

- [`Quadrupole`](./quadrupole.md): linear focusing or defocusing.
- `Sextupole`: chromatic correction.
- `Octupole`: higher-order nonlinear correction.
- `Multipole`: dedicated multipole family with its own active transformation.
- `Solenoid`: focusing with a solenoidal field.
- [`Bend`](./bend.md), `SBend`, `RBend`: dipole bending elements.
- `Hcor`, `Vcor`: horizontal and vertical correctors.

### RF elements

- [`Cavity`](./cavity.md): standing-wave accelerating cavity.
- [`TDCavity`](./tdcavity.md): transverse deflecting cavity.
- `TWCavity`: traveling-wave cavity.

### Specialized elements

- `Undulator`: periodic magnetic structure for radiation generation.
- `UnknownElement`: placeholder for imported or legacy elements.
- `Pulse`: helper object for time-dependent kicks; it is not part of the usual wrapper/atom stack.
