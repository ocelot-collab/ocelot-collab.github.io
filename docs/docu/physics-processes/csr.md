---
sidebar_position: 4
title: CSR 
description: CSR class
---


# [CSR](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/csr.py#L702) Class

The [`CSR`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/csr.py#L702) class simulates the Coherent 
Synchrotron Radiation (CSR) effects in particle beams. It calculates the CSR wakefield and applies the CSR kick to the 
particle array based on the beam's trajectory and energy.

### Simplest Example Usage
```python
# initialize CSR effect
csr = CSR(step=1, n_bin=300, m_bin=5, sigma_min=.2e-6)
# create Navigator class with unit_step 0.05 m
navi = Navigator(lat, unit_step=0.05) 
# add csr process to navigator with start and stop elements (belongs to lat object)
navi.add_physics_proc(csr, start_csr, stop_csr)
# tracking particles (p_array - ParticleArray) with CSR effect 
tws_csr, p_array = track(lat, p_array, navi)
```
For more details, see the [Coherent Synchrotron Radiation](../../tutorial/tutorial-beam-dynamics/5_CSR.md) tutorial.

### Parameters:
- **step** (`int`): Step size used for applying the CSR kick to the beam. Default is `1` [in Navigator.unit_step].
- **sigma_min** (`float`): Minimal sigma used in Gaussian filtering. Default is `1.e-4`.
- **traj_step** (`float`): Trajectory step, or integration step, for CSR wake calculation. Default is `0.0002` [m].
- **apply_step** (`float`): Step size for calculating the CSR kick. Default is `0.0005` [m].

- **x_qbin** (`float`): Length or charge binning, with a range between 0 (length) and 1 (charge). Default is `0`.
- **n_bin** (`int`): Number of bins used for binning. Default is `100`.
- **m_bin** (`int`): Multiple binning factor with shifted bins. Default is `5`.

- **ip_method** (`int`): Method for smoothing (0: rectangular, 1: triangular, 2: Gaussian). Default is `2` (Gaussian).
- **sp** (`float`): Smoothing parameter for the Gaussian method. Default is `0.5`.
- **step_unit** (`int`): Step unit for the CSR kick. If positive, `step` is multiplied by `step_unit`. Default is `0`.

- **energy** (`float` or `None`): The beam energy in [GeV]. If `None`, assumes `beta = 1` and the trajectory is calculated without the Runge-Kutta method.

- **z_csr_start** (`float`): Position of the start element in the trajectory in [m]. Default is `0`.
- **z0** (`float`): Position in the navigator for the starting point in the track. Default is `0`.

- **end_poles** (`bool`): If `True`, magnetic field configuration will be applied (1/4, -3/4, 1, ...). Default is `False`.
- **rk_traj** (`bool`): If `True`, the trajectory of the reference particle is calculated using the Runge-Kutta method. Default is `False`.

- **debug** (`bool`): If `True`, enables debugging output. Default is `False`.
- **filter_order** (`int`): The order of the filter for CSR calculations. Default is `10`.
- **n_mesh** (`int`): Number of mesh points for the CSR wakefield calculations. Default is `345`.

- **pict_debug** (`bool`): If `True`, the trajectory of the reference particle and CSR wakes will be saved for each step in the working folder. Default is `False`.

- **sub_bin** (`SubBinning`): An instance of the SubBinning class for particle binning.
- **bin_smoth** (`Smoothing`): An instance of the Smoothing class for applying smoothing to the CSR wakefield.
- **k0_fin_anf** (`K0_fin_anf`): An instance of the K0_fin_anf class for further CSR-related calculations.

### Methods:

#### `__init__(self, **kw)`
Constructor to initialize the `CSR` class with the specified parameters, including binning, smoothing method, energy, and trajectory options.

#### `K0_inf_anf(self, i, traj, wmin)`
Calculates the convolution kernel for radiative interactions assuming an infinite straight line before the CSR region. The function returns the kernel and integrated kernel values.

#### `K0_fin_inf(self, i, traj, w_range, gamma)`
Calculates the radiative interaction from the infinite straight line before the CSR region and computes the interaction using an analytical formula.

#### `K0_inf_inf(self, i, traj, w_range)`
Similar to `K0_fin_inf`, but this method handles the CSR region as infinite, with radiative interaction calculated analytically.

#### `CSR_K1(self, i, traj, NdW, gamma=None)`
Calculates the CSR kernel for the given trajectory and mesh points. This method uses a combination of kernels to model the interaction.

#### `prepare(self, lat)`
Prepares the CSR calculations by calculating the trajectory in rectangular coordinates and determining the starting point for CSR calculations. The method handles the trajectory of the reference particle and sets up the necessary magnetic field configuration.

#### `apply(self, p_array, delta_s)`
Applies the CSR wake to the particle array (`p_array`) over a given path length (`delta_s`). The method computes the CSR kick and updates the particle momenta accordingly.

#### `finalize(self, *args, **kwargs)`
Finalizes the CSR calculations at the end of the tracking process.

#### `calcualte_csr_wakes(self)`
Calculates the CSR wakes for the entire trajectory. The method computes the kernels and stores them for later use during the CSR kick application.

#### `plot_wake(self, p_array, lam_K1, itr_ra, s1, st)`
Plots the CSR wakes at each step and saves the resulting plots in the working folder. This method generates visualizations of the CSR effects on the particle beam.

#### `__repr__(self) -> str`
Returns a string representation of the `CSR` class, including key parameters such as the smoothing method, trajectory step, and number of bins used in the calculations.

---

## Summary

The `CSR` class simulates the Coherent Synchrotron Radiation (CSR) effects on a particle beam. It calculates the CSR wakefield, models the radiative interactions, and applies the CSR kick to the particle array. This class is useful for simulating beam dynamics in accelerators where CSR effects are significant.

---

## Example Usage

```python
# Create a CSR instance with specified parameters
csr = CSR(step=1, sigma_min=1e-4, traj_step=0.0002, apply_step=0.0005)

# Prepare the CSR calculations
csr.prepare(lat)

# Apply the CSR kick to the particle array `p_array` over a step size `delta_s`
csr.apply(p_array, delta_s=0.01)
```