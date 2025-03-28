---
sidebar_position: 7
title: Spontaneous Radiation Effect
description: SR class 
---

# [Spontaneous Radiation Effect](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L478)

This section provides documentation for the [`SpontanRadEffects`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L478) class, which simulates the effects of spontaneous radiation on particles, including energy loss and quantum diffusion.

---

## SpontanRadEffects Class

The `SpontanRadEffects` class models the effects of spontaneous radiation, including energy loss and quantum diffusion, on a particle beam. The class allows for setting parameters related to undulator deflection, undulator period, and type of undulator (planar, helical, or dipole). It calculates the energy loss and applies quantum diffusion to the particles.

### Parameters:
- **K** (`float`): The undulator deflection parameter (dimensionless). Default is `0.0`.
- **lperiod** (`float`): The undulator period in meters. Default is `0.0`.
- **type** (`str`): The type of undulator ("planar", "helical", or "dipole"). Default is `"planar"`.
- **radius** (`float` or `np.inf`): The radius of the dipole if the type is "dipole". Default is `np.inf`.

### Methods:

#### `__init__(self, K=0.0, lperiod=0.0, type="planar")`
Constructor to initialize the `SpontanRadEffects` class with default or user-specified values for the undulator deflection parameter, undulator period, and type of undulator.

#### `apply(self, p_array, dz)`
Applies the effects of spontaneous radiation to the particle array (`p_array`) over a step size (`dz`). It computes the mean momentum of the particles, calculates the energy loss and quantum diffusion, and updates the particle's momentum.

#### `energy_loss_und(self, energy, dz)`
Calculates the energy loss due to spontaneous radiation in the undulator. The energy loss is based on the undulator parameters and the energy of the particle beam.

#### `sigma_gamma_quant(energy, dz, K, lperiod, type="planar")`
Calculates the rate of energy diffusion (quantum diffusion) for the particles based on the undulator parameters and the beam energy. This method computes the quantum diffusion coefficient and returns the standard deviation of the energy diffusion.

---

## Summary

The `SpontanRadEffects` class simulates the effects of spontaneous radiation on a particle beam. It accounts for both energy loss and quantum diffusion, with the option to configure the undulator properties such as deflection parameter and period. The class allows for detailed modeling of spontaneous radiation effects in accelerators or light sources.

---

## Example Usage

```python
# Create a SpontanRadEffects instance with specified undulator parameters
spontan_rad = SpontanRadEffects(K=1.0, lperiod=0.05, type="planar")

# Apply the spontaneous radiation effects to the particle array
spontan_rad.apply(p_array, dz=0.01)
```