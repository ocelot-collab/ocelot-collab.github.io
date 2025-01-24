---
sidebar_position: 5
title: Slotted Foil 
---

# [Slotted Foil](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L415) Class

This section provides documentation for the [`SlottedFoil`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L415) class, which simulates the scattering of particles by a slotted foil. The class calculates the scattering angle and applies the effect to the particle array.

---

## SlottedFoil Class

The `SlottedFoil` class models a slotted foil that scatters particles. It calculates the scattering angle of particles passing through the foil and applies the effect to the particle array. The foil is defined by its thickness and material properties, as well as its slot positions in the horizontal and vertical planes.

### Parameters:
- **dx** (`float`): The thickness of the foil in micrometers (µm).
- **X0** (`float`): The radiation length of the foil material in centimeters (cm).
- **xmin** (`float`): The left position of the foil slot in meters (m). Default is `-np.inf`.
- **xmax** (`float`): The right position of the foil slot in meters (m). Default is `np.inf`.
- **ymin** (`float`): The lower position of the foil slot in meters (m). Default is `-np.inf`.
- **ymax** (`float`): The upper position of the foil slot in meters (m). Default is `np.inf`.
- **step** (`int`): The step size used in the `PhysProc` base class (default is `1`).

### Methods:

#### `__init__(self, dx, X0, xmin=-np.inf, xmax=np.inf, ymin=-np.inf, ymax=np.inf, step=1)`
Constructor to initialize the `SlottedFoil` class with default or user-specified values for the foil thickness, radiation length, slot positions, and step size.

#### `scattered_particles(self, p_array)`
Identifies the particles that are within the slot area of the foil. The particles outside the defined slot positions in the horizontal or vertical direction are considered to have interacted with the foil.

#### `get_scattering_angle(self, p_array)`
Calculates the root mean square (rms) scattering angle for the particles based on their energy. The formula used for the scattering angle comes from the Review of Particle Physics (https://pdg.lbl.gov).

#### `apply(self, p_array, dz)`
Applies the scattering effect to the particle array (`p_array`). It calculates the scattering angle using a Gaussian distribution for the particles within the slot, and updates their momentum components accordingly.

---

## Summary

The `SlottedFoil` class simulates the scattering of particles by a slotted foil. It defines the foil's properties (such as thickness and material radiation length) and calculates the scattering angle for the particles that interact with the foil. The class then applies the scattering effect to the particles in the beam.

---

## Example Usage

```python
# Create a SlottedFoil instance with specific parameters
slotted_foil = SlottedFoil(dx=10, X0=20, xmin=-0.1, xmax=0.1, ymin=-0.05, ymax=0.05)

# Apply the foil's scattering effect to the particle array
slotted_foil.apply(p_array, dz=0.01)
```