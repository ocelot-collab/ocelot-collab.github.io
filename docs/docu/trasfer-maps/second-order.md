---
sidebar_position: 3
title: Second Order Map
description: Second Order Map
---

# [SecondTM](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/second_order.py) Class 

## Description
The `SecondTM` class extends the [`Transformation`](transormation.md) base class to implement a **second-order** transformation. 
It handles both main and edge transformations for elements, assuming the element has implemented the corresponding 
methods to generate second-order parameters. This transformation can apply second-order terms to the particle coordinates, 
beyond the linear behavior modeled by a first-order transformation.

---

## Inheritance

- **Inherits**: `Transformation`

---

## Constructor

#### `__init__(self, create_tm_param_func, delta_e_func, tm_type: TMTypes, length: float, delta_length: float = 0.0)`

#### Parameters
- **create_tm_param_func**: A callback function that generates the second-order transformation parameters (including rotation matrix `R`, second-order tensor `T`, translation vector `B`, etc.).
- **delta_e_func**: A callback function for calculating the energy change ($\Delta E$), if applicable.
- **tm_type** (`TMTypes`): The type of transformation (`MAIN`, `ENTRANCE`, `EXIT`, etc.).
- **length** (`float`): The full length of the element (for main transformations).
- **delta_length** (`float`, optional): Defines a subset length of the element if only a portion is considered. Defaults to `0.0`.

**Behavior**:
- Initializes a second-order multiplication method (`SecondOrderMult().tmat_multip`) for matrix operations.
- Calls the parent constructor (`Transformation`) to set up the transformation.

---

## Class Methods

#### `from_element(cls, element: Element, tm_type: TMTypes = TMTypes.MAIN, delta_l=None, **params)`

Creates a `SecondTM` transformation from a `MagneticLattice` element. This method calls `cls.create` with:
- Functions for entrance, main, and exit second-order parameter generation (if the element supports edges).
- A function for calculating $\Delta E$.
- The element's length (`element.l`) and an optional partial length `delta_l`.

**Parameters**:
- **element** (`Element`): The beamline element for which to create the second-order transformation.
- **tm_type** (`TMTypes`): The transformation type (`ENTRANCE`, `MAIN`, or `EXIT`).
- **delta_l** (`float`, optional): A partial length of the element, if needed.
- **params**: Additional keyword arguments.

**Returns**:
- A `SecondTM` instance configured with the element's parameter-generating functions.

---

## Instance Methods

#### `t_apply(self, energy, X, U5666=0.0) -> np.ndarray`

Applies the second-order transformation to the phase-space coordinates in `X`.

**Parameters**:
- **energy** (`float`): The beam energy in GeV.
- **X** (`np.ndarray`): A $6 \times N$ array representing the particle coordinates (`x`, `px`, `y`, `py`, `tau`, `p`).
- **U5666** (`float`, optional): An additional parameter (if needed) for higher-order corrections; defaults to 0.0.

**Returns**:
- Updated coordinates in `X`.

**Process**:
1. Retrieves the transformation parameters (`R`, `T`, `B`, optional tilt).
2. Applies the second-order multiplication function `self.multiplication(X, R, T)`.
3. Adds the translation vector `B`.
4. Returns the updated `X`.

---

#### `map_function(self, X, energy: float) -> np.ndarray`

Implements the transformation by calling `t_apply` on the given coordinates `X` at the specified `energy`.

**Parameters**:
- **X** (`np.ndarray`): The particle coordinates.
- **energy** (`float`): The beam energy.

**Returns**:
- The transformed particle coordinates.

---

#### `calculate_Tb(self, energy) -> np.ndarray`

A placeholder method indicating the calculation of a “Tb” matrix, which could be necessary for certain advanced second-order calculations.

**Returns**:
- A NumPy array representing the `Tb` matrix.

**Note**:
- Raises `NotImplementedError` by default, indicating this function is not yet fully implemented.

---
