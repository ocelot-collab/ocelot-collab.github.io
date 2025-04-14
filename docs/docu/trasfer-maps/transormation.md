---
sidebar_position: 1
title: Transformation Parent Class
description: Parent class
---

# [Transformation](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/transformation.py#L22) Class

## Description

The `Transformation` class is an abstract base class (ABC) that defines a common interface and base functionality 
for all transformations in a beamline simulation. Each transformation class calculates how particles 
(either in a list of `Particle` objects or a [`ParticleArray`](../OCELOT%20fundamentals/particle-array.md)) are transformed 
when passing through an element, typically by applying a transfer map.

---

## Constructor

#### `__init__(self, create_tm_param_func, delta_e_func, tm_type: TMTypes, length: float, delta_length: float = None)`

#### Parameters
- **create_tm_param_func**: A callback function that creates the parameters for the transformation (e.g., transfer matrix parameters).
- **delta_e_func** (`Callable`, optional): A callback function for calculating the energy change (\(\Delta E\)) of the beam if the transformation changes the energy. By default, this is only used for main transformations (e.g., not for entrances or exits).
- **tm_type** (`TMTypes`): The type of transformation (e.g., `MAIN`, `ENTRANCE`, `EXIT`), which controls whether length or energy changes apply.
- **length** (`float`): The total length of the element, in meters, to which the transformation is applied.
- **delta_length** (`float`, optional): A partial length of the element for calculations if only a portion of the element is used.

---

## Class Methods

#### `from_element(cls, element: Element, tm_type: TMTypes = TMTypes.MAIN, delta_l: float = None, **params)`
**Abstract Class Method**  
Creates a new transformation from a [`MagneticLattice`](../OCELOT%20fundamentals/magnet-lattice.md) element. Elements must implement specific hooks or callbacks for different transformation types (entrance, main, exit).

**Parameters:**
- **element**: The beamline element from which the transformation is derived.
- **tm_type** (`TMTypes`, optional): The type of transformation to create (`ENTRANCE`, `MAIN`, or `EXIT`).  
- **delta_l** (`float`, optional): The subset length of the element to which this transformation applies.  
- **params**: Additional parameters that may be required by specific transformations.

**Raises:**
- **NotImplementedError**: If the element does not implement the required callback functions.

---

#### `create(cls, main_tm_params_func, delta_e_func, length, delta_length=None, entrance_tm_params_func=None, exit_tm_params_func=None, tm_type: TMTypes = TMTypes.MAIN, **params)`
**Factory Method**  
Creates a concrete transformation using the provided parameter-generating functions and the transformation type.

**Parameters:**
- **main_tm_params_func**: A function to calculate the transformation parameters for the main section of an element.
- **delta_e_func**: A function to calculate the energy change \(\Delta E\) through the element (if applicable).
- **length** (`float`): The full length of the element.
- **delta_length** (`float`, optional): A partial length of the element. Defaults to `None`, in which case the full length is used.
- **entrance_tm_params_func** (`Callable`, optional): A function to calculate transformation parameters for the entrance section of an element.
- **exit_tm_params_func** (`Callable`, optional): A function to calculate transformation parameters for the exit section of an element.
- **tm_type** (`TMTypes`, optional): The type of the transformation (`MAIN`, `ENTRANCE`, `EXIT`). Defaults to `MAIN`.
- **params**: Additional arguments for the transformation.

**Returns:**
- An instance of a concrete transformation class (subclass of `Transformation`).

**Raises:**
- **NotImplementedError**: If the required entrance or exit function is not set.

---

## Instance Methods

#### `get_delta_e(self)`
Retrieves the energy change \(\Delta E\) for this transformation, using the provided `delta_e_func`, if applicable.

**Returns:**
- **float**: The energy change \(\Delta E\) in GeV (or 0.0 if `delta_e_func` is not defined or if this is an entrance/exit transformation).

---

#### `get_params(self, energy: float)`
Calculates or retrieves cached parameters for the transformation at the given beam energy.

**Parameters:**
- **energy** (`float`): The beam energy for which the transformation parameters are calculated.

**Returns:**
- The parameters (data structure depends on the implementation of `create_tm_param_func`).

---

#### `apply(self, prcl_series)`
Applies the transformation to a series of particles (list of `Particle`, a `ParticleArray`, or a single `Particle`). Updates each particle’s phase-space coordinates and energy accordingly.

**Parameters:**
- **prcl_series**: The particle data structure to transform. Supported types:
  - `ParticleArray`
  - `Particle`
  - `list` of `Particle`

**Raises:**
- **Exception**: If the particle data structure is unknown or unsupported.

---

#### `map_function(self, X: np.ndarray, energy: float) -> np.ndarray`
**Abstract Method**  
Calculates the transformation for a given array of particle coordinates `X` at the specified energy. Must be implemented by each concrete transformation subclass.

**Parameters:**
- **X** (`np.ndarray`): A 2D NumPy array representing phase-space coordinates (`6 x n`).
- **energy** (`float`): The beam energy in GeV.

**Returns:**
- An updated 2D NumPy array representing the transformed coordinates.

---

## Additional Internal Methods

#### `_clean_cashed_values(self)`
Clears cached values (current energy and parameters) to ensure a fresh calculation when necessary.

---

