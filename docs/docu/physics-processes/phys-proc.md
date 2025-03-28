---
sidebar_position: 1
title: PhysProc Parent Class
description: Parent class
---

# [PhysProc](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L14) Class 

## Overview

The [`PhysProc`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L14) class serves as 
the parent class for all physics processes within a simulation. It provides a standard interface for handling processes that interact with the [`Navigator`](../OCELOT%20fundamentals/navigator.md), 
[`ParticleArray`](../OCELOT%20fundamentals/particle-array.md), and [`MagneticLattice`](../OCELOT%20fundamentals/magnet-lattice.md) during beam tracking.

This class is designed to be **extended** for defining custom physics effects such as [CSR](../physics-processes/csr.md), [space charge](../physics-processes/sc.md), 
[wakefields](../physics-processes/wake.md), [laser modulator](../physics-processes/laser-modulator.md), and more.

---

## Attributes

### Instance Attributes
- **`step`** *(int)*:  
  Number of steps in `Navigator.unit_step`. Each physics process applies over a distance of `self.step * Navigator.unit_step` (measured in meters). Default is `1`.

- **`energy`** *(float, optional)*:  
  Beam energy associated with the process. Default is `None`. Can be manually set or inferred during tracking.

- **`indx0`** *(int, optional)*:  
  Index of the starting element in the lattice sequence. Assigned during `navigator.add_physics_proc()`.

- **`indx1`** *(int, optional)*:  
  Index of the stopping element in the lattice sequence. Assigned during `navigator.add_physics_proc()`.

- **`s_start`** *(float, optional)*:  
  Position of the starting element in the lattice. Assigned during `navigator.add_physics_proc()`.

- **`s_stop`** *(float, optional)*:  
  Position of the stopping element in the lattice. Assigned during `navigator.add_physics_proc()`.

- **`z0`** *(float, optional)*:  
  Current longitudinal position in the beamline. Updated during tracking before each `apply()` call.

---

## Constructor

### `__init__(step=1)`
Initializes a new instance of the `PhysProc` class.

**Parameters:**
- `step` *(int, optional)*: The number of steps in `Navigator.unit_step`. Default is `1`.

---

## Methods

### `check_step()`
Validates that the `step` attribute is an integer.

**Raises:**
- `ValueError`: If `self.step` is not an integer.

This is called automatically by the default `prepare()` method.

---

### `prepare(lat)` *(optional)*
Called once when the physics process is added to the `Navigator`.

**Parameters:**
- `lat` *(MagneticLattice)*: The magnetic lattice used in the simulation.

**Purpose:**
- This method is optional, but can be overridden to perform setup operations such as trajectory calculation or initialization of diagnostic structures.
- In the default implementation, it calls `check_step()`.

**Example Uses:**
- In the [CSR process](../physics-processes/csr.md), `prepare()` is used to calculate the reference trajectory.

---

### `apply(p_array, dz)` **(Required)**
Called on every simulation step to apply the physics process to the particle array.

**Parameters:**
- `p_array` *(ParticleArray)*: The current particle distribution.
- `dz` *(float)*: Step size in meters.

**Note:**
This method **must** be implemented in all subclasses.

---

### `finalize(*args, **kwargs)` *(optional)*
Called at the end of the simulation to perform any final operations, data collection, or cleanup.

**Parameters:**
- `*args`: Additional positional arguments.
- `**kwargs`: Additional keyword arguments.

**Example Uses:**
- In [Beam Analysis](../physics-processes/beam-analysis.md), `finalize()` is used to store calculated beam diagnostics.

---

## Notes

1. **Customization:**  
   To implement a new physics process, subclass `PhysProc` and override at least the `apply()` method.

2. **Validation:**  
   The `check_step()` method ensures that step values are integers, preventing issues in lattice traversal.

3. **Integration with Navigator:**  
   Attributes like `indx0`, `indx1`, `s_start`, `s_stop`, and `z0` are automatically assigned when the process is added to a `Navigator`.

4. **Optional lifecycle methods:**  
   Both `prepare()` and `finalize()` can be used for pre-tracking setup and post-tracking diagnostics, respectively.

---

## Related Classes

- [**`Navigator`**](../OCELOT%20fundamentals/navigator.md): Manages beam propagation and physics process execution.
- [**`MagneticLattice`**](../OCELOT%20fundamentals/magnet-lattice.md): Defines the beamline and magnetic structure.
- [**`ParticleArray`**](../OCELOT%20fundamentals/particle-array.md): Represents the state of the particle beam during simulation.

---

For a practical example of using and customizing `PhysProc`, see:
- [How to Create Your Own Physics Process](../how-to/phys_proc.md)
