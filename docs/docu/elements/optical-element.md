---
sidebar_position: 1
title: OpticElement
---

# Documentation: `OpticElement` Class

## Overview
The `OpticElement` class serves as a facade to bridge the old and new interfaces of beamline simulation in the OCELOT framework. It manages the underlying element's attributes, its transformations, and provides methods for accessing and manipulating these transformations. Each concrete optic element must implement its own initialization for specific parameters.

---

## Attributes

- **`element`** (`Element`): The specific beamline element managed by this class.
- **`default_tm`** (`Type[Transformation]`): The default transformation used if the specified transformation is unsupported.
- **`_first_order_tms`** (`List[Transformation]`): List of first-order transformations used for calculations like Twiss Parameters.
- **`_kwargs`** (`dict`): Transformation-specific parameters.
- **`_tms`** (`List[Transformation]`): List of transformations currently set for the element.
- **`_tm_class_type`** (`Type[Transformation]`): The transformation type currently applied to the element.

---

## Methods

### `__init__(element, tm, default_tm, **params)`
Initializes the `OpticElement` with a specified element and transformation.

**Parameters:**
- `element` (`Element`): The beamline element to be managed.
- `tm` (`Type[Transformation]`): The transformation used by the element.
- `default_tm` (`Type[Transformation]`): The fallback transformation if `tm` is unsupported.
- `**params`: Additional parameters for the transformation.

---

### `__getattr__(name)`
Accesses attributes of the underlying element.

**Parameters:**
- `name` (`str`): Name of the attribute to retrieve.

**Raises:**
- `AttributeError`: If the attribute does not exist.

---

### `__setattr__(name, value)`
Sets attributes on the underlying element and resets cached transformations.

**Parameters:**
- `name` (`str`): Name of the attribute to set.
- `value`: New value for the attribute.

---

### `tms`
**Property:** Retrieves the list of transformations currently set for the element.

**Returns:**
- `List[Transformation]`: List of transformations.

---

### `first_order_tms`
**Property:** Retrieves the list of first-order transformations.

**Returns:**
- `List[Transformation]`: List of first-order transformations.

---

### `B(energy)`
Calculates the `B` matrices for transformations.

**Parameters:**
- `energy` (`float`): Energy level for the calculation.

**Returns:**
- `List[np.ndarray]`: List of `B` matrices.

---

### `R(energy)`
Calculates the `R` matrices for transformations.

**Parameters:**
- `energy` (`float`): Energy level for the calculation.

**Returns:**
- `List[np.ndarray]`: List of `R` matrices.

---

### `T(energy)`
Calculates the `T` matrices for transformations or returns zero matrices if unavailable.

**Parameters:**
- `energy` (`float`): Energy level for the calculation.

**Returns:**
- `List[np.ndarray]`: List of `T` matrices or zero matrices.

---

### `apply(X, energy)`
Applies all transformations to a particle array.

**Parameters:**
- `X` (`np.ndarray`): Array of particles.
- `energy` (`float`): Energy level for the transformation.

---

### `set_tm(tm, **params)`
Sets a new transformation for the element.

**Parameters:**
- `tm` (`Transformation`): Transformation to set.
- `**params`: Transformation-specific parameters.

---

### `get_section_tms(delta_l, start_l=0.0, ignore_edges=False, first_order_only=False)`
Calculates transformations for a section of the element.

**Parameters:**
- `delta_l` (`float`): Length of the section.
- `start_l` (`float`, optional): Start position in the element. Default is `0.0`.
- `ignore_edges` (`bool`, optional): Whether to ignore entrance and exit transformations. Default is `False`.
- `first_order_only` (`bool`, optional): Whether to use only first-order transformations. Default is `False`.

**Returns:**
- `List[Transformation]`: List of transformations for the section.

---

### `get_tm(tm_type, first_order_only=False)`
Retrieves a specific transformation type.

**Parameters:**
- `tm_type` (`TMTypes`): Type of transformation to retrieve.
- `first_order_only` (`bool`, optional): Whether to retrieve first-order transformations. Default is `False`.

**Returns:**
- `Transformation`: The specified transformation.

---

### `_create_tms(element, tm, **params)`
**Static Method:** Creates a list of transformations for an element.

**Parameters:**
- `element` (`Element`): The beamline element.
- `tm` (`Type[Transformation]`): Transformation type.
- `**params`: Additional parameters.

**Returns:**
- `List[Transformation]`: List of transformations.

---

### `__str__()`
Generates a string representation of the underlying element.

**Returns:**
- `str`: String representation.

---

### `__repr__()`
Generates a detailed string representation of the `OpticElement`.

**Returns:**
- `str`: String representation with class name and memory address.