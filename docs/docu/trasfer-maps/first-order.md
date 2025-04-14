---
sidebar_position: 2
title: First Order Map
description: First Order Map
---

# [TransferMap](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/transfer_map.py) Class 

## Description

The `TransferMap` class inherits from the [`Transformation`](transormation.md) base class and implements a **first-order** (linear) 
transformation of particle coordinates. It is designed to handle both main sections of elements and optionally 
their entrance and exit edges, if the element supports them. The `TransferMap` calculates new particle coordinates using 
a first-order transfer matrix and translation vector.

---

## Inheritance

- **Inherits**: `Transformation`

---

## Constructor

#### `__init__(self, create_tm_param_func, delta_e_func, tm_type: TMTypes, length: float, delta_length: float = 0.0)`

#### Parameters

- **create_tm_param_func**: A callback function for creating first-order transformation parameters (e.g., rotated transfer matrix, translation vector, etc.).
- **delta_e_func** (`Callable`): A callback function for calculating the energy change $\Delta E$.  
- **tm_type** (`TMTypes`): Specifies the transformation type (`MAIN`, `ENTRANCE`, or `EXIT`).  
- **length** (`float`): The length of the element for the main transformation.  
- **delta_length** (`float`, optional): Defines a partial length of the element if only a portion of it is considered. Defaults to `0.0`.

---

## Class Methods

#### `from_element(cls, element: Element, tm_type: TMTypes = TMTypes.MAIN, delta_l=None, **params)`

Creates a `TransferMap` from a [`MagneticLattice`](../OCELOT%20fundamentals/magnet-lattice.md) element. 
It uses the element’s methods to generate transfer parameters for entrance, main, and exit transformations (where applicable).

#### Parameters

- **element** [(`Element`)](../elements/element.md): The beamline element for which the `TransferMap` is created.
- **tm_type** (`TMTypes`, optional): The transformation type (`MAIN`, `ENTRANCE`, or `EXIT`). Defaults to `MAIN`.
- **delta_l** (`float`, optional): A partial length for the transformation. If `None`, the entire element length is used.
- **params**: Additional keyword parameters.

#### Returns

- A new `TransferMap` instance with the first-order transformation parameters derived from the element.

---

## Instance Methods

#### `map_function(self, X, energy: float) -> np.ndarray`

Calculates the new particle coordinates by applying the first-order transformation.  

1. Retrieves the transformation parameters via `get_params(energy)`.  
2. Calls `mul_p_array(X, energy=energy)` to apply the transformation.  

#### Parameters

- **X** (`np.ndarray`): A $6 \times N$ array of phase-space coordinates $(x, px, y, py, tau, p)$.
- **energy** (`float`): The beam energy.

#### Returns

- A transformed $6 \times N$ array of updated coordinates.

---

#### `mul_p_array(self, rparticles, energy=0.) -> np.ndarray`

Applies the first-order transformation directly to the given coordinates.

1. Obtains parameters (rotated transfer matrix `R` and translation vector `B`).
2. Computes the updated coordinates $\mathbf{X'} = R \mathbf{X} + B$.
3. Overwrites `rparticles` with the updated coordinates.

#### Parameters

- **rparticles** (`np.ndarray`): The array of particle phase-space coordinates $(6 \times N)$.
- **energy** (`float`, optional): The beam energy. Defaults to `0.`.

#### Returns

- The updated array `rparticles`.

---

#### `multiply_with_tm(self, tm: 'TransferMap', length: float) -> 'TransferMap'`

Combines two `TransferMap` objects into a single new `TransferMap`, effectively performing $\mathbf{M} = \mathbf{M}_1 \times \mathbf{M}_2$.

1. Gets the combined transformation parameters from the product of the two transformations.
2. Creates and returns a new `TransferMap` with the combined length and energy-change function.

#### Parameters

- **tm** (`TransferMap`): Another `TransferMap` to be multiplied.
- **length** (`float`): The combined length for the new `TransferMap`.

#### Returns

- A new `TransferMap` instance that represents the product of `self` and `tm`.

---

### `__mul__(self, m)`

Implements the `*` operator for `TransferMap` objects. 

- **Parameters**:  
  - **m**: Another object, such as `TransferMap`, `Particle`, or `Twiss`.  
- **Returns**:  
  - The result of multiplying `m` with this `TransferMap`, which can be a transformed object or a new `TransferMap`.  
- **Raises**:  
  - **Exception**: If `m` is not a recognized type or does not implement a compatible `multiply_with_tm` method.

