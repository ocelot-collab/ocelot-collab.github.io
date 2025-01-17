---
sidebar_position: 4
title: IBS
---

# Intra Beam Scattering

This section provides documentation for the `IBS` (Intrabeam Scattering) class, which models the intrabeam scattering process in particle beams. It supports two methods based on different formulations for estimating the energy spread in the beam.

---

## IBS Class

The `IBS` class simulates the intrabeam scattering (IBS) process, which describes the diffusion of particle energies within a beam due to mutual Coulomb interactions. The class implements two methods for calculating the energy spread:
1. **Huang Method**: Based on Z. Huang's work in *Intrabeam Scattering in an X-ray FEL Driver* (2002).
2. **Nagaitsev Method**: Based on S. Nagaitsev's work in *Intrabeam Scattering Formulas for Fast Numerical Evaluation* (2005).

The method can be selected using the `method` attribute, which accepts "Huang" or "Nagaitsev".

### Parameters:
- **step** (`int`): Step size in the unit step. Default is `1`.
- **method** (`str`): The selected IBS calculation method. Options are `"Huang"` or `"Nagaitsev"`. Default is `"Huang"`.
- **Clog** (`float`): The Coulomb logarithm value. Default is `8`.
- **update_Clog** (`bool`): Whether to update the Coulomb logarithm on each step using Huang's formula. Default is `True`.
- **bounds** (`list`): The range of bounds for slice analysis in units of `sigma_tau`. Default is `[-0.5, 0.5]`.
- **slice** (`str`): The reference slice, where `"Imax"` represents the maximum current slice. Default is `"Imax"`.

### Attributes:
- **emit_n**: The normalized emittance of the beam.
- **sigma_xy**: The transverse beam size in the x and y directions (using the round beam approximation).
- **sigma_z**: The longitudinal beam size.
- **sigma_dgamma0**: The energy spread due to the longitudinal dynamics.

### Methods:

#### `__init__(self, step=1, **kwargs)`
Constructor to initialize the `IBS` class with the specified parameters. It accepts arguments for the IBS method, Coulomb logarithm, slice settings, and whether to update the Coulomb logarithm.

#### `get_beam_params(self, p_array)`
Computes beam parameters such as `sigma_xy`, `sigma_z`, and normalized emittance from the particle array (`p_array`). This method calculates the beam's transverse and longitudinal sizes, as well as its emittance.

#### `estimate_Clog(self)`
Estimates the Coulomb logarithm (`Clog`) using Huang's formula without cutoffs. This is only called if `update_Clog` is `True`.

#### `apply(self, p_array, dz)`
Applies the intrabeam scattering (IBS) process to the particle array (`p_array`) over a given path length (`dz`). This method updates the particle's momenta based on the selected IBS method, using the calculated Coulomb logarithm and beam parameters.

---

## Summary

The `IBS` class simulates intrabeam scattering in particle beams. It can calculate the energy diffusion (or energy spread) based on two methods, the Huang method and the Nagaitsev method. The class adjusts the particle energies and momenta by applying the appropriate formulas, considering beam parameters like emittance, beam size, and longitudinal spread. This class is useful for modeling IBS effects in beam dynamics simulations.

---

## Example Usage

```python
# Create an IBS instance with specified parameters
ibs = IBS(method="Nagaitsev", Clog=10, update_Clog=True)

# Apply the IBS process to a particle array `p_array` over a path length `dz`
ibs.apply(p_array, dz=0.01)