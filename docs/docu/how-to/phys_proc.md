---
title: Create Your Own Physics Process
sidebar_position: 3
description: Learn how to implement custom physics processes in Ocelot.
---

# How to Create Your Own Physics Process

Ocelot provides a flexible interface to define and implement custom physics processes by extending the base class `PhysProc`. This allows you to simulate effects such as wakefields, CSR, space charge, or any other custom modification during beam tracking.

## Base Class: [`PhysProc`](../physics-processes/phys-proc.md)

All physics processes should inherit from the [`PhysProc`](../physics-processes/phys-proc.md) class. Here's an overview of its interface and behavior:

### Key Methods:
- `apply(self, p_array, dz)` — **required**. This method is called on every simulation step to apply your custom logic to the [`ParticleArray`](../OCELOT%20fundamentals/particle-array.md).
- `prepare(self, lat)` *(optional)* — called once when the process is added to the [`Navigator`](../OCELOT%20fundamentals/navigator.md). By default, it checks that `step` is an integer. Override it if you need to precompute data (e.g., [CSR](../physics-processes/csr.md) trajectory).
- `finalize(self, *args, **kwargs)` *(optional)* — called at the end of tracking. You can override it to save computed data or perform cleanup (e.g. in [Beam Analysis](../physics-processes/beam-analysis.md)).

### Key Attributes (set automatically by `Navigator.add_physics_proc()`):
- `step`: how often to apply the process (in units of `Navigator.unit_step`)
- `energy`: beam energy, can be set manually if needed
- `indx0`, `indx1`: indices of the start and stop elements in `lattice.sequence`
- `s_start`, `s_stop`: start and stop positions along the lattice
- `z0`: current longitudinal position during tracking (set just before `apply()` is called)

### Step Validation
The method `check_step()` ensures that `step` is an integer. This is called automatically in the default `prepare()` implementation:
```python
if not (self.step * 1.).is_integer():
    raise ValueError("step must be an integer number")
```

### Minimal Example:
```python
from ocelot import PhysProc

class MyProcess(PhysProc):
    def apply(self, p_array, dz):
        # Modify the particle array during tracking
        pass
```

### Extended Example with prepare and finalize:
```python
class MyProcess(PhysProc):
    def prepare(self, lat):
        super().prepare(lat)
        # Setup or trajectory pre-calculation

    def apply(self, p_array, dz):
        # Main tracking logic
        pass

    def finalize(self, *args, **kwargs):
        # Save data or diagnostics
        pass
```

To use your process:
```python
proc = MyProcess()
navi = Navigator(lattice)
navi.add_physics_proc(proc, start_element, stop_element)
```

## ✅ Quick Guidelines
- Inherit from `PhysProc`
- Implement `apply()` — it is mandatory
- Use `prepare()` if you need to initialize anything before tracking
  - Example: [CSR physics process](../physics-processes/csr.md) calculates the beam trajectory in `prepare()`
- Use `finalize()` to store or analyze data after tracking
  - Example: [Beam Analysis](../physics-processes/beam-analysis.md) stores statistics in `finalize()`
- Use attributes like `z0`, `energy`, `s_start` during tracking for reference

---

## 🔗 Full Tutorial
A complete working example is provided in the tutorial:

👉 [Laser Heater Physics Process Tutorial](../../tutorial/tutorial-beam-dynamics/8_laser_heater.md)

This tutorial demonstrates how to:
- Implement and register a custom process
- Modify the beam distribution
- Track effects over specific sections of a lattice

---

If you have questions or want to contribute your own physics models, feel free to open a pull request or start a discussion!

