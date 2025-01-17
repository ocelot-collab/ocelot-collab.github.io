---
sidebar_position: 12
title: Lattice Energy Profile
---

# [Lattice Energy Profile](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L624)

This section provides documentation for the [`LatticeEnergyProfile`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L624) class, which shifts the canonical momentum of the particle array according to a new reference energy.

---

## LatticeEnergyProfile Class

The `LatticeEnergyProfile` class modifies the particle array's canonical momentum based on a new reference energy (`Eref`). This class is used to adjust the energy profile of a beam as it propagates through a lattice, ensuring that the particles' energies are adjusted accordingly.

### Parameters:
- **Eref** (`float`): The new reference energy in GeV that the particle array will be shifted to.

### Methods:

#### `__init__(self, Eref)`
Constructor to initialize the `LatticeEnergyProfile` class with the given reference energy (`Eref`). The constructor also calls the parent class (`PhysProc`) initializer.

#### `apply(self, p_array, dz=0)`
Applies the energy shift to the particle array (`p_array`). The method computes the old and new canonical momenta based on the reference energies (`Eref_old` and `Eref`) and updates the particles' energies and momenta. The particle array's energy (`E`) is set to `Eref`, and the momentum (`p`) is adjusted to match the new reference energy.

---

## Summary

The `LatticeEnergyProfile` class shifts the particle array's canonical momentum to adjust for a new reference energy. This operation is useful in lattice simulations where the reference energy needs to be modified, and the momenta of the particles must be updated accordingly.

---

## Example Usage

```python
# Create a LatticeEnergyProfile instance with a specified reference energy
lattice_energy_profile = LatticeEnergyProfile(Eref=5.0)

# Apply the energy shift to the particle array `p_array`
lattice_energy_profile.apply(p_array)