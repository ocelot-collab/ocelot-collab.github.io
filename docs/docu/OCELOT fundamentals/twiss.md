---
sidebar_position: 9
title: Twiss  
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

# [`twiss`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/optics.py#L195) function 

## Description:
The [`twiss`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/optics.py#L195) function calculates the Twiss parameters for a particle beam as it propagates through a magnetic lattice. The function returns a list of Twiss parameter objects corresponding to various positions along the lattice. The initial Twiss parameters can be provided, or if not specified, the function will attempt to find a periodic solution.

## Parameters:
- **lattice** [(`MagneticLattice`)](magnet-lattice.md): The magnetic lattice through which the particle beam is propagated.
- **tws0** ([`Twiss`](twiss.md), optional): Initial Twiss parameters. If not provided, the function will attempt to find a periodic solution for the lattice.
- **nPoints** (`int`, optional): Number of points per cell. If `None`, the function will calculate the Twiss parameters at the end of each element.
- **return_df** (`bool`, optional): If `True`, the output will be returned as a pandas DataFrame instead of a list of `Twiss` objects.
- **attach2elem** (`bool`, optional): If `True` and `nPoints` is `None`, the Twiss parameters will be attached to the `elem.tws` attribute of the lattice elements, representing the end of the element. This is not recommended for general use but can be useful for smaller scripts.

## Returns:
- **List of `Twiss` objects**: The function returns a list of Twiss parameters for each element or cell in the lattice. If `return_df` is `True`, the list will be converted to a pandas DataFrame.

## Function Logic:
1. **Initial Twiss Parameters**: If `tws0` is not provided, the function will attempt to find a periodic solution using the `periodic_twiss` method of the `lattice` object.
2. **Periodic Solution Check**: If the `beta_x` or `beta_y` values are 0 in the initial Twiss parameters, the function will recalculate the periodic Twiss solution for the lattice.
3. **Twiss Parameter Calculation**: The function uses the `trace_obj` method to calculate the Twiss parameters at the desired positions in the lattice. The parameters can be attached to the elements of the lattice if `attach2elem` is `True`.
4. **Return**: The function returns the calculated Twiss parameters. If `return_df` is `True`, the results will be returned as a pandas DataFrame.

## Example Usage:

```python
# Create a MagneticLattice object
lattice = MagneticLattice(sequence)

# Calculate Twiss parameters with periodic solution
twiss_parameters = twiss(lattice)

# Calculate Twiss parameters and return as a pandas DataFrame
twiss_df = twiss(lattice, return_df=True)

# Calculate Twiss parameters with custom initial Twiss object
tws0 = Twiss(beta_x=1.0, beta_y=1.0)
twiss_parameters_with_tws0 = twiss(lattice, tws0=tws0)

# Calculate Twiss parameters with custom number of points per cell
twiss_parameters_custom_points = twiss(lattice, nPoints=5)
```
## Notes:
- The function will automatically handle periodic solutions and can return the results in a pandas DataFrame format if needed.
- If the initial Twiss parameters are not provided or are incomplete, the function attempts to calculate them based on the lattice.
