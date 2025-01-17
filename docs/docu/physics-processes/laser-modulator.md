---
sidebar_position: 6
title: LaserModulator Class
---

# [LaserModulator](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L165) Class 

The [`LaserModulator`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L165) class is a subclass of `PhysProc` that simulates the energy modulation of a particle beam in an undulator. 
It provides methods to calculate laser wavelength, undulator transport matrix element $begin:math:text$ R_{56} $end:math:text$, and apply laser modulation to the beam.


## Class Definition

```python
class LaserModulator(PhysProc):
    def __init__(self, step=1):
        """
        Initialize the LaserModulator with default parameters or user-defined values.

        Parameters
        ----------
        step : int, optional
            Step size used by the PhysProc base class, default is 1.
        """
```

### Parameters
- **step** (`int`): The step size used by the `PhysProc` base class (default is 1).

---

## Attributes

- **dE** (`float`): Amplitude of the energy modulation on-axis in [GeV] (default is 12500e-9).
- **Ku** (`float`): The undulator parameter (default is 1.294).
- **Lu** (`float`): The undulator length in meters (default is 0.8).
- **lperiod** (`float`): The undulator period length in meters (default is 0.074).
- **sigma_l** (`float`): The laser pulse length (longitudinal Gaussian sigma) in meters (default is 300e-6).
- **sigma_x** (`float`): The transverse beam size in the x-direction in meters (default is equal to `sigma_l`).
- **sigma_y** (`float`): The transverse beam size in the y-direction in meters (default is equal to `sigma_l`).
- **x_mean** (`float`): The transverse beam offset in the x-direction in meters (default is 0).
- **y_mean** (`float`): The transverse beam offset in the y-direction in meters (default is 0).
- **z_waist** (`float` or `None`): The shift of the laser waist position in meters. If `None`, a simple Gaussian beam model is used.
- **include_r56** (`bool`): Flag to include the R56 effect in the modulation. Default is `False`.
- **laser_peak_pos** (`float`): The offset of the laser peak position relative to the mean of the particle array's `tau` values. Default is 0.

---

## Methods

### `lambda_ph(self, energy)`
Calculate the wavelength of the laser pulse.

#### Parameters
- **energy** (`float`): The beam energy in [GeV].

#### Returns
- **float**: The laser wavelength in [m].

#### Notes
This method computes the laser wavelength based on the undulator period (`lperiod`), the undulator parameter (`Ku`), and the beam's gamma factor (calculated from the given energy).

---

### `r56(self, energy)`
Calculate the $R_{56}$ for the undulator.

#### Parameters
- **energy** (`float`): The beam energy in [GeV].

#### Returns
- **float**: The value of $R_{56}$ in [m].

#### Notes
This method computes the dispersion-like term introduced by the undulator, dependent on the beam's Lorentz factor (`gamma`) and undulator parameter (`Ku`).

---

### `apply(self, p_array, dz)`
Apply the laser modulation to the particle array over a distance `dz`.

#### Parameters
- **p_array** (`ParticleArray`): The particle array object containing phase space variables.
- **dz** (`float`): The integration step length for applying the modulation.

#### Returns
- `None`

#### Notes
- Verifies the effective undulator length `L` and checks if it matches the undulator length `Lu`. If the lengths do not match, a warning is issued.
- Calculates the laser wavelength `lambda_ph` and wave number `k_ph`.
- Computes the energy modulation amplitude `A` and applies the modulation based on transverse offsets (`x`, `y`), longitudinal offset (`tau`), and a Gaussian profile.
- If `include_r56` is `True`, the $R_{56}$ effect is included.
- If a laser waist shift (`z_waist`) is provided, a more complex model with curvature is used for the modulation.


