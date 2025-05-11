---
sidebar_position: 13
title: SaveBeam & CopyBeam
description: A class to save the beam in arbitrary point of lattice
---
# SaveBeam and CopyBeam

These two utility classes provide basic mechanisms for handling particle arrays within a beamline: saving and copying. 
They are primarily used for diagnostics and debugging and are designed to be inserted into a beamline at specific positions (e.g., zero-length elements like `Marker` instances).

---

## [SaveBeam](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L85)

```python
class SaveBeam(PhysProc):
    def __init__(self, filename):
        PhysProc.__init__(self)
        self.energy = None
        self.filename = filename

    def apply(self, p_array, dz):
        _logger.debug(" SaveBeam applied, dz =" + str(dz))
        save_particle_array(filename=self.filename, p_array=p_array)
        
```
### Purpose


This physics process saves the state of the particle array to disk. It can be used for tracking diagnostics or to record beam parameters at a given location.

### Parameters

- `filename`: Name of the file (with `.npz` extension) to which the particle array will be saved.

### Usage

Typically attached to a `Marker` element to save the particle distribution at a specific longitudinal position.

---

## [CopyBeam](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L102)
```python
class CopyBeam(PhysProc):
    """Physics process that copies the ParticleArray instance when applied."""
    def __init__(self, name: str = ""):
        super().__init__()
        self.name = name
        self.parray = None

    def apply(self, parray: ParticleArray, dz: float) -> None:
        """Copy the given particle array to self"""
        self.parray = parray.copy()

    def __repr__(self) -> str:
        return f"<CopyBeam: {self.name}, at={hex(id(self))}>"
```

### Purpose

This class stores an internal copy of the [`ParticleArray`](../OCELOT%20fundamentals/particle-array.md) when applied. It is useful for inspection or later comparison with other particle distributions during the simulation.

In contrast to `SaveBeam`, it does not save the data to disk but keeps it in memory.

### Parameters

- `name`: Optional identifier for the copy (useful for debugging or visualization).

### Usage

Attach `CopyBeam` to a zero-length element (e.g., a `Marker`) to snapshot the beam at a given point. This is especially useful when developing or validating beamline physics processes.

---

## Example Usage

These processes will record the beam at positions 10 and 20 in the lattice, respectively:

```python
from ocelot import *

# Define basic lattice elements
d = Drift(l=1)        # 1-meter drift space
m1 = Marker()         # Marker where we will save the beam
m2 = Marker()         # Marker where we will copy the beam

# Construct a simple beamline: Drift -> Marker -> Drift -> Marker
lat = MagneticLattice([d, m1, d, m2])

# Create physics processes
sb = SaveBeam(filename="m1.npz")  # Will save the particle array at m1 to file
cb = CopyBeam()                   # Will copy the particle array at m2 into memory

# Create a Navigator to manage physics processes during tracking
navi = Navigator(lat)

# Attach the physics processes to specific elements
navi.add_physics_proc(sb, m1, m1)  # Apply SaveBeam at m1
navi.add_physics_proc(cb, m2, m2)  # Apply CopyBeam at m2

# Generate a test particle array
parray = generate_parray(nparticles=10000)

# Track the particle array through the lattice with the navigator
track(lat, parray, navi)

# Load and print the saved particle array from file
parray_m1 = load_particle_array("m1.npz")
print(parray_m1)

# Print the copied particle array from memory (after m2)
print(cb.parray)
```

```python
    z = 2.0 / 2.0. Applied: CopyBeamParticleArray: 
    Ref. energy : 0.13 GeV 
    Ave. energy : 0.13 GeV 
    std(x)      : 0.102 mm
    std(px)     : 0.02 mrad
    std(y)      : 0.102 mm
    std(py)     : 0.02 mrad
    std(p)      : 0.0099
    std(tau)    : 0.993 mm
    Charge      : 5.0 nC 
    s pos       : 1.0 m 
    n particles : 10000
    
    ParticleArray: 
    Ref. energy : 0.13 GeV 
    Ave. energy : 0.13 GeV 
    std(x)      : 0.108 mm
    std(px)     : 0.02 mrad
    std(y)      : 0.108 mm
    std(py)     : 0.02 mrad
    std(p)      : 0.0099
    std(tau)    : 0.993 mm
    Charge      : 5.0 nC 
    s pos       : 2.0 m 
    n particles : 10000
```