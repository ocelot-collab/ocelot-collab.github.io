---
sidebar_position: 9
title: Twiss  
description: Twiss class
---

# [Twiss](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/beam.py#L46) Class

## Description:
The [`Twiss`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/beam.py#L46) class serves as a container for Twiss parameters, which are used to describe the phase space properties of a beam in a storage ring or accelerator. The class supports the calculation of the Twiss parameters, tracking them through a lattice, and updating them as the beam passes through various optical elements.

### Attributes:
- **emit_x** (`float`): Horizontal beam emittance.
- **emit_y** (`float`): Vertical beam emittance.
- **emit_xn** (`float`): Normalized horizontal beam emittance.
- **emit_yn** (`float`): Normalized vertical beam emittance.
- **eigemit_1** (`float`): First eigen-emittance value.
- **eigemit_2** (`float`): Second eigen-emittance value.
- **beta_x** (`float`): Horizontal beta function.
- **beta_y** (`float`): Vertical beta function.
- **alpha_x** (`float`): Horizontal alpha function.
- **alpha_y** (`float`): Vertical alpha function.
- **gamma_x** (`float`): Horizontal gamma function.
- **gamma_y** (`float`): Vertical gamma function.
- **Dx** (`float`): Horizontal dispersion function.
- **Dy** (`float`): Vertical dispersion function.
- **Dxp** (`float`): Horizontal dispersion derivative.
- **Dyp** (`float`): Vertical dispersion derivative.
- **mux** (`float`): Horizontal phase advance.
- **muy** (`float`): Vertical phase advance.
- **E** (`float`): Energy of the beam (in GeV).
- **s** (`float`): Longitudinal position along the reference trajectory.
- **q** (`float`): Charge of the whole beam (in C).
- **x** (`float`): Mean horizontal position of the beam.
- **y** (`float`): Mean vertical position of the beam.
- **p** (`float`): Longitudinal momentum of the beam.
- **tau** (`float`): Longitudinal position.
- **xp** (`float`): Horizontal momentum.
- **yp** (`float`): Vertical momentum.
- **xx** (`float`): Moment of horizontal position squared.
- **xpx** (`float`): Cross-term of horizontal position and momentum.
- **pxpx** (`float`): Moment of horizontal momentum squared.
- **yy** (`float`): Moment of vertical position squared.
- **ypy** (`float`): Cross-term of vertical position and momentum.
- **pypy** (`float`): Moment of vertical momentum squared.
- **tautau** (`float`): Longitudinal position squared.
- **xy** (`float`): Cross-term between horizontal and vertical positions.
- **pxpy** (`float`): Cross-term between horizontal and vertical momenta.
- **xpy** (`float`): Cross-term between horizontal position and vertical momentum.
- **ypx** (`float`): Cross-term between vertical position and horizontal momentum.
- **pp** (`float`): Longitudinal momentum squared.
- **id** (`str`): Identifier for the Twiss instance.

### Methods:

#### `__init__(self, beam=None, **kwargs)`
- Initializes the Twiss parameters, either from a given `beam` (either a `Twiss` or `Beam` object) or through the keyword arguments provided.

#### `multiply_with_tm(self, tm: 'TransferMap', length)`
- Multiplies the current Twiss parameters with the transfer map (`tm`) and the length of the segment. Returns the updated Twiss parameters.

#### `track(R, tws0)`
- Tracks the Twiss parameters through a transfer matrix `R` using the initial Twiss parameters `tws0`. Returns the updated Twiss parameters.

#### `map_x_twiss(self, tm)`
- Maps the Twiss parameters using the transfer map `tm` and updates them based on the beam's energy.

#### `__str__(self)`
- Returns a string representation of the Twiss parameters.

#### `to_series(self) -> pd.Series`
- Converts the `Twiss` instance into a `pandas.Series` object for easy manipulation and analysis.

#### `from_series(cls, series: pd.Series)`
- Class method to create a `Twiss` instance from a `pandas.Series`.

---

# `twiss` and `periodic_twiss` functions

The two optics modes are explicit:

- [`twiss`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/optics.py)
  propagates known initial Twiss parameters through a magnetic lattice.
- [`periodic_twiss`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/optics.py)
  calculates a periodic initial solution and propagates it through the lattice.

Both return one `Twiss` object per requested longitudinal position, or a pandas
DataFrame when `return_df=True`.

## Parameters

- **lattice** ([`MagneticLattice`](magnet-lattice.md)): The lattice through
  which the optics are propagated.
- **tws0** ([`Twiss`](twiss.md)): Required by `twiss`. For
  `periodic_twiss`, it is optional and supplies values such as beam energy and
  emittance; its transverse Twiss parameters are replaced by the periodic
  solution.
- **nPoints** (`int`, optional): Number of longitudinal sample points. If
  `None`, values are calculated at element exits.
- **return_df** (`bool`, optional): Return a pandas DataFrame instead of a list.
- **attach2elem** (`bool` or iterable, optional): With `nPoints=None`, attach
  exit optics as `element.tws`. Every selected element instance must occur
  exactly once in the lattice. Reused instances are rejected because one
  attribute cannot describe several positions.

## Examples

```python
from ocelot.cpbd.beam import Twiss
from ocelot.cpbd.optics import periodic_twiss, twiss

lattice = MagneticLattice(sequence)

# Calculate and propagate periodic optics.
periodic = periodic_twiss(lattice)

# Supply the energy needed by a lattice containing cavities.
periodic_at_energy = periodic_twiss(lattice, Twiss(E=0.5), nPoints=100)

# Propagate known initial optics without solving a periodic problem.
tws0 = Twiss(beta_x=10.0, beta_y=7.0, alpha_x=-1.0, alpha_y=0.5)
propagated = twiss(lattice, tws0)
```

`twiss` requires positive `beta_x` and `beta_y`; a blank `Twiss()` is not an
implicit request for periodic optics.

## Unstable lattices

If either transverse plane has no strictly stable periodic solution,
`periodic_twiss` raises `UnstableLatticeError`. It does not print or log a
warning and does not return `None`.

```python
from ocelot.cpbd.optics import UnstableLatticeError, periodic_twiss

try:
    periodic = periodic_twiss(lattice)
except UnstableLatticeError as exc:
    print(f"Periodic optics are unavailable: {exc}")
```

Optimization code that deliberately explores unstable candidates can catch the
exception and convert it to a penalty. Use
`lattice.periodic_twiss(tws=seed)` when only the periodic initial `Twiss`
object, rather than its propagation through the lattice, is required.
