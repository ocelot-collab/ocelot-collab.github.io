---
sidebar_position: 1
title: PhysProc Parent Class
---
# [PhysProc](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L14) Class 

## Overview

The [PhysProc](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L14) class serves as 
the parent class for all physics processes within a simulation. It provides a standard interface for handling processes that interact with the navigator and lattice during particle tracking.

---

## Attributes

### Instance Attributes
- **`step`** *(int)*:  
  Number of steps in `Navigator.unit_step`. Each physics process applies over a distance of `self.step * Navigator.unit_step` (measured in meters). Default is `1`.

- **`energy`** *(float, optional)*:  
  Beam energy associated with the process. Default is `None`.

- **`indx0`** *(int, optional)*:  
  Index of the starting element in the lattice sequence. Assigned during `navigator.add_physics_proc()`.

- **`indx1`** *(int, optional)*:  
  Index of the stopping element in the lattice sequence. Assigned during `navigator.add_physics_proc()`.

- **`s_start`** *(float, optional)*:  
  Position of the starting element in the lattice. Assigned during `navigator.add_physics_proc()`.

- **`s_stop`** *(float, optional)*:  
  Position of the stopping element in the lattice. Assigned during `navigator.add_physics_proc()`.

- **`z0`** *(float, optional)*:  
  Current position of the navigator. Assigned during `track.track()` before `apply()` is called.

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


### `prepare(lat)`

Called when the physics process is added to the Navigator class.

**Parameters:**
- `lat` *(MagneticLattice)*: The magnetic lattice associated with the simulation.


### `apply(p_array, dz)`

Called on every step of the simulation to apply the physics process to the particle array.

**Parameters:**
- `p_array` *(ParticleArray)*: The particle array representing the beam.
- `dz` *(float)*: Step size in meters.



### `finalize(*args, **kwargs)`

Called at the end of the simulation to perform any final operations or cleanup.

**Parameters:**
- `*args`: Additional positional arguments.
- `**kwargs`: Additional keyword arguments.


### Notes
	1.	*Customization:*
This class is designed to be extended for specific physics processes. Override the apply() method in subclasses to implement custom behavior.
	2.	*Validation:*
The check_step() method ensures that step values are integers, preventing numerical issues during simulation.
	3.	*Integration with Navigator:*
Attributes like indx0, indx1, s_start, s_stop, and z0 are automatically assigned when integrating with the Navigator.

### Related Classes:
- `Navigator`: Manages physics processes and particle tracking.
- `MagneticLattice`: Represents the magnetic elements in the beamline.
- `ParticleArray`: Models the particle beam in simulations.

