---
sidebar_position: 5
title: MagneticLattice
---

# [MagneticLattice](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/magnetic_lattice.py#L163) Class 

## Description

The [`MagneticLattice`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/magnetic_lattice.py#L163) class 
represents a magnetic lattice, which is a sequence of elements forming a beamline. The lattice elements can include magnets, 
quadrupoles, undulators, and drifts, and they are used to model the trajectory and dynamics of a particle beam. 
This class allows for various operations like updating transfer maps, calculating lattice length, and finding specific 
elements within the lattice. It also provides functionality for calculating transfer maps and periodic Twiss parameters.

### Simplest Example of Use

```python
from ocelot import *
# Create elements of beamline
d = Drift(l=1)
q = Quadrupole(l=1, k1=1)

# Create your beamline - sequence of elements
cell = (d, q)

lat = MagneticLattice(cell)
```

---

## Constructor
```python
class MagneticLattice:
    def __init__(self, sequence, start: E = None, stop: E = None, method=None):
        ...
```
#### Arguments:
- **sequence** (`list`): A list of elements that form the lattice.
- **start** ([`Element`](../elements/element.md), optional): The first element of the lattice. If `None`, the lattice starts with the first element of the sequence.
- **stop** ([`Element`](../elements/element.md), optional): The last element of the lattice (included). If `None`, the lattice stops with the last element of the sequence.
- **method** (`dict`, optional): A dictionary specifying the tracking method for the lattice. If no method is provided,
[`TransferMap`](../trasfer-maps/first-order.md) is used as the global default for all elements. 
Specific methods for individual elements can also be set.
            
    Example:
                ```python
                method = {"global": TransferMap} # default first order transfer map
                lat = MagneticLattice(cell, method=method)
                # or
                method = {"global": SecondTM, Octupole: KickTM, Undulator: RungeKuttaTM}
                lat = MagneticLattice(cell, method=method)
                ```

    In this example:
            - Sets [`SecondTM`](../trasfer-maps/second-order.md) (second order transfer maps) as the global transfer map for all elements.
            - Assigns `KickTM` specifically for `Octupole` elements.
            - Assigns `RungeKuttaTM` specifically for `Undulator` elements.

:::info
In order to avoid mistakes, the **start** and **stop** element must be different objects. 
It is also recommended to use the Marker element as both the **start** and **stop** element.

Example:
```python
m1 = Marker()
m2 = Marker()
cell = [m1, d, q, ... , m2, d10, qf10, ...]
lat = MagneticLattice(cell, start=m1, stop=m2, method={"global": SecondTM})
```
:::

---

## Methods

#### `get_sequence_part(self, start: E, stop: E)`

This method gets a part of the lattice sequence starting from `start` to `stop`.

#### Arguments:
- **start** ([`Element`](../elements/element.md)): The element where the sequence starts.
- **stop** ([`Element`](../elements/element.md)): The element where the sequence ends (included **stop** element).

#### Returns:
- A sublist of elements from the sequence.

---

### `update_transfer_maps(self)`

The name of the method does not accurately reflect its functionality but is retained for legacy purposes. 
This method assigns specific transfer maps to each element in the sequence based on a `method` dictionary. 
Additionally, it calculates the total length `self.totalLen` of the lattice by summing the lengths of its elements.

```python
for i, element in enumerate(self.sequence):
    self.totalLen += element.l  # Accumulate the total length of the lattice
    tm_class_type = self.method.get(element.__class__)  # Get specific transfer map for element class
    if tm_class_type:
        element.set_tm(tm_class_type)  # Set the class-specific transfer map
    else:
        tm_class_type = self.method.get('global')  # Fallback to the global transfer map
        if tm_class_type:
            element.set_tm(tm_class_type)  # Set the global transfer map
```
#### Returns:
- The updated `MagneticLattice` object.

---

#### `__str__(self)`

Returns a string representation of the lattice, showing the total length and details of each element.

#### Returns:
- A string containing the total length and details of each element in the sequence.

---

#### `find_indices(self, element)`

Finds the indices of elements in the sequence by their class type.

#### Arguments:
- **element** ([`Element`](../elements/element.md)): The class type of the element to search for.

#### Returns:
- A list of indices where the specified element type is found in the sequence.

---

#### `find_drifts(self)`

Finds the drift elements in the sequence and returns them.

#### Returns:
- A list of drift elements.

---

#### `rem_drifts(self)`

Removes repeated drift elements from the lattice.

---

#### `save_as_py_file(self, file_name: str, tws0=None, remove_rep_drifts=True, power_supply=False)`

Saves the lattice to a Python file.

#### Arguments:
- **file_name** (`str`): The path and name of the Python file where the lattice will be stored.
- **tws0** ([`Twiss`](twiss.md), optional): A `Twiss` object. If provided, the Twiss parameters will be printed at the beginning of the lattice file.
- **remove_rep_drifts** (`bool`, optional): If `True`, removes repeated drift elements from the lattice.
- **power_supply** (`bool`, optional): If `True`, writes the power supply IDs into the file.

---

#### `transfer_maps(self, energy, output_at_each_step: bool = False, start: E = None, stop: E = None)`

Calculates the transfer maps (first and second orders) for the entire lattice.

#### Arguments:
- **energy** (`float`): The initial electron beam energy in GeV.
- **output_at_each_step** (`bool`, optional): If `True`, returns the transfer maps at each step in the lattice.
- **start** ([`Element`](../elements/element.md), optional): The element to start from in the sequence.
- **stop** ([`Element`](../elements/element.md), optional): The element to stop at in the sequence.

#### Returns:
- The transfer maps (`B`, `R`, `T`) for the entire lattice or at each step if `output_at_each_step` is `True`.

---

#### `survey(self, x0=0, y0=0, z0=0, ang_x=0.0, ang_y=0.0)`

Calculates coordinates in rectangular coordinates at the beginning of each element in the lattice.

#### Arguments:
- **x0** (`float`, optional): The initial offset in the x direction.
- **y0** (`float`, optional): The initial offset in the y direction.
- **z0** (`float`, optional): The initial offset in the z direction.
- **ang_x** (`float`, optional): The initial angle in the horizontal plane.
- **ang_y** (`float`, optional): The initial angle in the vertical plane.

#### Returns:
- Lists of coordinates: `x`, `y`, `z`, `a_x`, `a_y`.

---

#### `print_sequence(self, start: E = None, stop: E = None)`

Prints the sequence of elements in the lattice, including their lengths and start/end positions.

#### Arguments:
- **start** ([`Element`](../elements/element.md), optional): The element to start from in the sequence.
- **stop** ([`Element`](../elements/element.md), optional): The element to stop at in the sequence.

#### Returns:
- A list of strings representing the sequence of elements.

---

#### `periodic_twiss(self, tws=None)`

Calculates the periodic Twiss parameters for the lattice using transfer maps.

#### Arguments:
- **tws** ([`Twiss`](twiss.md), optional): A [`Twiss`](twiss.md) object. If provided, the initial Twiss parameters will be used.

#### Returns:
- The periodic Twiss parameters.