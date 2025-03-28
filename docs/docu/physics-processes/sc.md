---
sidebar_position: 2
title: Space Charge
description: Space Charge class
---


# [SpaceCharge](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/sc.py#L74) Class

The [`SpaceCharge`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/sc.py#L74)  class models the space charge forces in a particle beam by solving the Poisson equation in the bunch frame. 
Then the Lorentz transformed electromagnetic field is applied as a kick in the laboratory frame.
For the solution of the Poisson equation we use an integral representation of the electrostatic potential
by convolution of the free-space Green's function with the charge distribution.
The convolution equation is solved with the help of the Fast Fourier Transform (FFT). The same algorithm for
solution of the 3D Poisson equation is used, for example, in ASTRA.

### Parameters:
- **step** (`int`): Step size used in unit steps. Default is `1`.
- **nmesh_xyz** (`list`): Defines the number of mesh points in each dimension for the 3D mesh. Default is `[63, 63, 63]`.
- **low_order_kick** (`bool`): Whether to use a low-order approximation for the kick. Default is `True`.
- **random_mesh** (`bool`): If `True`, the mesh is shifted slightly at each step to reduce numerical noise. Default is `False`.
- **random_seed** (`int`): Seed for random number generation when `random_mesh` is `True`. Default is `10`.

### Methods:

#### `__init__(self, step=1, **kwargs)`
Constructor to initialize the `SpaceCharge` class with the specified parameters. It sets up the mesh, the randomization flag, and the random seed.

#### `prepare(self, lat)`
Prepares the simulation by checking the step size and setting the random seed if necessary.

#### `sym_kernel(self, ijk2, hxyz)`
Computes the symmetric kernel for the 3D Poisson equation solution using the convolution method. The kernel is used to calculate the electrostatic potential in the beam.

#### `potential(self, q, steps)`
Solves the Poisson equation for the electrostatic potential in the beam, given the charge distribution (`q`) and step sizes (`steps`). This method uses the Fast Fourier Transform (FFT) for efficient computation.

#### `el_field(self, X, Q, gamma, nxyz)`
Calculates the electric field in the rest frame of the bunch by using a 3D interpolation method. The result is Lorentz transformed to the laboratory frame.

#### `apply(self, p_array, zstep)`
Applies the space charge kick to the particle array (`p_array`) over a given path length (`zstep`). The method computes the electric field and updates the particle momenta according to the space charge forces.

#### `__repr__(self) -> str`
Returns a string representation of the `SpaceCharge` class, including key parameters like step size, mesh resolution, and randomization settings.

---

## Summary

The `SpaceCharge` class simulates the space charge forces acting on a particle beam by solving the Poisson equation for the beam's charge distribution. The class computes the electric field using a convolution method and applies the resulting forces as kicks to the particle array. This model is crucial for understanding beam dynamics, especially in high-intensity beams where space charge effects are significant.

---

## Example Usage

```python
# Create a SpaceCharge instance with specified parameters
space_charge = SpaceCharge(step=1, nmesh_xyz=[100, 100, 100], random_mesh=True)

# Prepare the simulation
space_charge.prepare(lat)

# Apply the space charge forces to the particle array `p_array` over a step size `zstep`
space_charge.apply(p_array, zstep=0.01)
```

# Class Documentation

This section provides documentation for the `LSC` (Longitudinal Space Charge) class, which models the longitudinal space charge effects in particle beams. The class calculates the wake field impact of the space charge and applies it as a series of kicks to the beam.

---

## LSC Class

The `LSC` class simulates the longitudinal space charge effects in particle beams. The space charge forces are calculated by solving the Poisson equation in the bunch frame and then applying the resulting electric field in the laboratory frame as a kick. The class uses Fast Fourier Transform (FFT) to efficiently solve the 3D Poisson equation.

### Parameters:
- **step** (`int`): Step size used in unit steps. Default is `1`.
- **smooth_param** (`float`): Smoothing parameter for the longitudinal space charge force. Default is `0.1`.
- **step_profile** (`bool`): If `True`, uses a stepped profile for the beam; otherwise, uses a continuous profile. Default is `False`.
- **napply** (`int`): Counter for the number of times the `apply` method is called.
  
### Methods:

#### `__init__(self, step=1)`
Constructor to initialize the `LSC` class with the specified parameters, including the smoothing parameter and step profile option.

#### `imp_lsc(self, gamma, sigma, w, dz)`
Calculates the longitudinal space charge impedance based on the beam's energy (`gamma`), transverse beam size (`sigma`), frequency (`w`), and step size (`dz`).

#### `imp_step_lsc(self, gamma, rb, w, dz)`
Calculates the longitudinal space charge impedance in the case of a stepped profile bunch. It considers the transverse beam radius (`rb`) and other parameters.

#### `wake2impedance(self, s, w)`
Performs a Fourier transform with `exp(iwt)` to convert the wake function to impedance. `s` is the position in the bunch, and `w` is the wake function in V/C.

#### `impedance2wake(self, f, y)`
Performs a Fourier transform with `exp(-iwt)` to convert the impedance to the wake function. `f` is the frequency in Hz, and `y` is the impedance in Ohms.

#### `wake_lsc(self, s, bunch, gamma, sigma, dz)`
Calculates the longitudinal space charge wake for the beam, given the bunch distribution, energy (`gamma`), beam size (`sigma`), and step size (`dz`).

#### `apply(self, p_array, dz)`
Applies the longitudinal space charge wake to the particle array (`p_array`) over a step size (`dz`). It computes the longitudinal space charge forces and updates the particle momenta.

#### `__repr__(self) -> str`
Returns a string representation of the `LSC` class, including key parameters like step size, smoothing parameter, and step profile option.

---

## Summary

The `LSC` class models the longitudinal space charge effects in particle beams, including the wake field and impedance. It calculates the space charge forces and applies them as kicks to the beam, updating the particle momenta. This class is useful for simulating beam dynamics where longitudinal space charge effects are significant, such as in high-intensity beams.


---

# LSC Class

### Description:

The `LSC` class applies the longitudinal space charge (LSC) effects to a particle beam by calculating the longitudinal space charge wake and applying it to the particle array. The method considers both stepped and smooth beam profiles and uses impedance models to calculate the wake for different beam conditions. The class uses Fourier transforms to convert between wakefields and impedances.

---

### Attributes:
- **smooth_param** (`float`): A smoothing parameter used to define the resolution. The resolution is calculated as `np.std(p_array.tau()) * smooth_param`. Default is `0.1`.
- **step_profile** (`bool`): A flag indicating whether the beam has a stepped profile. Default is `False`.
---

### Methods:

#### `__init__(self, step=1)`
Constructor that initializes the `LSC` class with the specified step size.

#### `imp_lsc(self, gamma, sigma, w, dz)`
Calculates the longitudinal space-charge impedance for a given set of parameters, including energy (`gamma`), transverse beam size (`sigma`), angular frequency (`w`), and step size (`dz`).

#### `imp_step_lsc(self, gamma, rb, w, dz)`
Calculates the longitudinal space-charge impedance in the case of a stepped profile bunch. This method is used when the beam has a transverse radius (`rb`) and frequency spectrum (`w`).

#### `wake2impedance(self, s, w)`
Converts wakefield data (`w`) into impedance using the Fourier transform with `exp(iwt)`.

#### `impedance2wake(self, f, y)`
Converts impedance data (`y`) into wakefield using the Fourier transform with `exp(-iwt)`.

#### `wake_lsc(self, s, bunch, gamma, sigma, dz)`
Calculates the longitudinal space charge wake using the impedance model. This method computes the wakefield for a bunch profile (`bunch`) with energy (`gamma`), transverse beam size (`sigma`), and step size (`dz`).

#### `apply(self, p_array, dz)`
Applies the longitudinal space charge wake to the particle array (`p_array`) over a step size (`dz`). This method updates the particle's momenta based on the calculated wake.

#### `finalize(self, *args, **kwargs)`
Called at the end of the tracking process. This method can be used for finalizing or saving results related to the LSC effects.

#### `calcualte_csr_wakes(self)`
Calculates the CSR wakes for the entire trajectory. This method uses kernels for CSR effects and stores them for later use in the `apply` method.

#### `plot_wake(self, p_array, lam_K1, itr_ra, s1, st)`
Plots the wake of the longitudinal space charge effect at each step. This method is useful for visualizing the wake and particle motion over time.

---
