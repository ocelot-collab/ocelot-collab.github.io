---
sidebar_position: 6
title: Navigator
---

# [Navigator](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/navi.py#L51) Class 

## Description

The [`Navigator`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/navi.py#L51) class defines the step size 
(dz) for tracking and specifies which physical processes will be applied during each step. 
It interacts with a [`MagneticLattice`](magnet-lattice.md) and manages the tracking of particles through the lattice, updating the position 
and applying relevant physics processes as particles travel.

## Constructor

#### `__init__(self, lattice, unit_step=1)`

#### Arguments:
- **lattice** [(`MagneticLattice`)](magnet-lattice.md): The magnetic lattice to which the navigator is applied.
- **unit_step** (`float`, optional): The unit step size for all physics processes. Default is 1 meter.

:::info
When tracking a beam with multiple physics processes, each process may require a different step size. 
In such cases, `self.unit_step` must be set to the smallest step size (the step of the physics process that will 
be applied most frequently). The steps of other physics processes ([PhysProc](../physics-processes/phys-proc.md)) 
can then be adjusted using `PhysProc.step`.

Example:
```python
navi = Navigator(lat, unit_step=0.01)  # Set the unit step to 0.01 m

sc = SpaceCharge(step=1)  # Space charge will be applied every 0.01 m
wake = Wake(step=100)     # Wakefields will be applied every 1 m
```
:::

---

## Methods

#### `get_current_element(self)`

Returns the current element in the lattice at the position of the navigator.

#### Returns:
- The current element in the lattice.

---

#### `reset_position(self)`

Resets the position of the navigator, setting the current position (`z0`) to 0, the current index (`n_elem`) to 0, and the sum of lengths to 0.

---

#### `go_to_start(self)`

Resets the navigator to the starting position.

---

#### `get_phys_procs(self)`

Returns the list of all physics processes that have been added to the navigator.

#### Returns:
- A list of physical processes.

---

#### `add_physics_proc(self, physics_proc, elem1, elem2)`

Adds a physical process to be applied between two elements in the lattice.

#### Arguments:
- **physics_proc** [(`PhysProc`)](../physics-processes/phys-proc.md): The physical process to be applied, e.g., SpaceCharge, CSR, Wake, etc.
- **elem1** ([`Element`](../elements/element.md)): The element where the physical process begins.
- **elem2** ([`Element`](../elements/element.md)): The element where the physical process ends.

#### Returns:
- None

---

#### `add_physics_processes(self, processes, elem1s, elem2s)`

Adds multiple physical processes to be applied between corresponding pairs of elements in the lattice.

#### Arguments:
- **processes** (`list`): A list of physical processes to be applied.
- **elem1s** (`list`): A list of elements where each process starts.
- **elem2s** (`list`): A list of elements where each process ends.

#### Returns:
- None

---

#### `activate_apertures(self, start=None, stop=None)`

Activates apertures in the lattice between specified elements.

#### Arguments:
- **start** ([`Element`](../elements/element.md), optional): The element to start from.
- **stop** ([`Element`](../elements/element.md), optional): The element to stop at.

#### Returns:
- None

---

#### `check_overjump(self, dz, processes, phys_steps)`

Checks if the current step `dz` causes an overjump of the physical processes and adjusts the step accordingly.

#### Arguments:
- **dz** (`float`): The step size to be checked.
- **processes** (`list`): The list of processes to check.
- **phys_steps** (`list`): The list of physical steps taken.

#### Returns:
- The adjusted step size `dz`, the list of processes, and the list of physical steps.

---

#### `get_proc_list(self)`

Returns the list of all physical processes that are relevant to the current position of the navigator.

#### Returns:
- A list of relevant physical processes.

---

#### `hard_edge_step(self, dz)`

Checks if the current step `dz` exceeds the length of the current element and adjusts it accordingly.

#### Arguments:
- **dz** (`float`): The step size to be checked.

#### Returns:
- The adjusted step size `dz`.

---

#### `check_proc_bounds(self, dz, proc_list, phys_steps, active_process)`

Checks if the step size `dz` exceeds the bounds of the physical processes and adjusts the list of active processes.

#### Arguments:
- **dz** (`float`): The step size.
- **proc_list** (`list`): The list of all processes.
- **phys_steps** (`list`): The list of physical steps.
- **active_process** (`list`): The list of active processes.

#### Returns:
- The updated list of active processes and physical steps.

---

#### `remove_used_processes(self, processes)`

Removes processes that have been applied from the list of active processes and moves them to the inactive processes list.

#### Arguments:
- **processes** (`list`): The list of processes to be removed.

#### Returns:
- None

---

#### `jump_to(self, z: float)`

Sets the current position of the navigator to a new position `z`.

#### Arguments:
- **z** (`float`): The position to jump to.

#### Returns:
- None

---

#### `get_next_step(self)`

Yields the next step of the tracking, applying the relevant physical processes as needed.

#### Returns:
- A generator that yields the next step, including the map of the tracking, the step size `dz`, the processes to be applied, and the physical steps.

---

#### `get_next(self)`

Gets the next step of the tracking, checking for physical processes to apply and adjusting the step size accordingly.

#### Returns:
- The step size `dz`, the list of processes to apply, and the list of physical steps.

---

#### `__str__(self)`

Returns a string representation of the navigator, including details of all the added physical processes.

#### Returns:
- A string containing information about the added physical processes.

---

#### `get_map(self, dz)`

Gets the transfer map for a given step size `dz` based on the lattice sequence.

#### Arguments:
- **dz** (`float`): The step size.

#### Returns:
- A list of transfer maps for the given step size.

---

#### `_update_references(self)`

Updates the references of the process table and the processes to ensure consistency across all elements in the lattice.

#### Returns:
- None