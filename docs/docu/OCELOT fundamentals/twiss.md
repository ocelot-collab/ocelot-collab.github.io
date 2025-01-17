---
sidebar_position: 9
title: Twiss Class 
---

# Twiss Class 

## Description:
The `Twiss` class serves as a container for Twiss parameters, which are used to describe the phase space properties of a beam in a storage ring or accelerator. The class supports the calculation of the Twiss parameters, tracking them through a lattice, and updating them as the beam passes through various optical elements.

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

