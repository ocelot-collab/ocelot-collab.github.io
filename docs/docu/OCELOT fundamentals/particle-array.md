---
sidebar_position: 8
title: ParticleArray
---

# [ParticleArray](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/beam.py#L726) Class 

## Description:
The [`ParticleArray`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/beam.py#L726) class represents an array of particles with optimized performance for large numbers of particles. It handles the particles' positions and momenta, along with additional functionalities like applying physics processes, sorting particles, and managing lost particles.

### Attributes:
- **rparticles**: 2D array of shape `(6, n)` representing the particle properties in 6D phase space: 
    - `x`: position in x
    - `px`: momentum in x
    - `y`: position in y
    - `py`: momentum in y
    - `tau`: longitudinal position
    - `p`: longitudinal momentum
- **q_array**: 1D array of charges for each particle.
- **s**: Longitudinal position of the particle.
- **E**: Energy of the particle.
- **lost_particle_recorder**: Records information about lost particles.

### Methods:

#### `__init__(self, n=0)`
- Initializes a `ParticleArray` with `n` particles. Sets up the `rparticles`, `q_array`, and `lost_particle_recorder`.

#### `random(cls, n, sigma_x=..., sigma_px=..., sigma_y=..., sigma_py=...)`
- Generates a random beam with `n` particles using given standard deviations for the particle properties. Returns a `ParticleArray` instance.

#### `rm_tails(self, xlim, ylim, px_lim, py_lim)`
- Removes particles outside the specified ranges in the phase space. Returns the indices of removed particles.

#### `__getitem__(self, idx)`
- Retrieves a specific particle by index. Supports slicing to extract a sub-array of particles.

#### `__setitem__(self, idx, p)`
- Sets the properties of a specific particle using a `Particle` object.

#### `list2array(self, p_list)`
- Converts a list of `Particle` objects into a `ParticleArray`.

#### `array2list(self)`
- Converts the `ParticleArray` into a list of `Particle` objects.

#### `size(self)`
- Returns the number of particles in the array.

#### `x(self)`
- Returns the x positions of all particles.

#### `px(self)`
- Returns the x momenta of all particles.

#### `y(self)`
- Returns the y positions of all particles.

#### `py(self)`
- Returns the y momenta of all particles.

#### `tau(self)`
- Returns the longitudinal position of all particles.

#### `p(self)`
- Returns the longitudinal momentum of all particles.

#### `t(self)` / `t.setter(self, value)`
- Getter and setter for the longitudinal position (`tau`).

#### `n(self)`
- Returns the number of particles in the array.

#### `pz(self)`
- Returns the z-component of the particle momentum, normalized with respect to the reference momentum.

#### `p0c(self)`
- Returns the reference momentum multiplied by the speed of light in GeV.

#### `energies(self)`
- Returns the energies of all particles in GeV.

#### `momenta(self)`
- Returns the momenta of all particles in GeV/c.

#### `gamma(self)`
- Returns the relativistic gamma factor for all particles.

#### `beta(self)`
- Returns the relativistic beta factor (v/c) for all particles.

#### `total_charge(self)`
- Returns the total charge of the `ParticleArray`.

#### `sort(self, variable, in_place=True)`
- Sorts the particles in the array by a specified property (`x`, `px`, `y`, `py`, `tau`, `p`, etc.).

#### `thin_out(self, nth=10, n0=0)`
- Thins out the particle array by selecting every `nth` particle starting from index `n0`.

#### `rm_particle(self, index)`
- Removes a "bad" particle with a specified index. (Deprecated, use `delete_particles` instead.)

#### `rescale2energy(self, energy)`
- Rescales the particle array's coordinates based on a new energy.

#### `__str__(self)`
- Returns a string representation of the `ParticleArray` with summary statistics like energy, standard deviations, and charge.

#### `__len__(self)`
- Returns the number of particles in the `ParticleArray`.

#### `delete_particles(self, inds, record=True)`
- Deletes particles by index. Optionally records the removed particles using the `LostParticleRecorder`.

#### `copy(self)`
- Returns a copy of the `ParticleArray`.

#### `get_twiss_from_slice(self, slice="Imax", nparts_in_slice=5000, smooth_param=0.05, filter_base=2, filter_iter=2)`
- Calculates the Twiss parameters for a slice of the beam distribution.

#### `I(self, num_bins=None)`
- Calculates the current profile from the beam distribution. Optionally, bins the distribution.

---

## LostParticleRecorder Class

### Description:
Tracks particles that are lost during the simulation. Stores their indices and the number of lost particles at each position.

#### `add(self, inds, position)`
- Adds lost particles to the recorder. Updates the histogram of lost particles by position.

#### `initial_idx_2_p_idx(self, idx)`
- Converts an initial index of a lost particle to its current position.

---

### Example Usage:

```python
# Create a ParticleArray with 1000 particles
particles = ParticleArray.random(1000)

# Get the x positions of the particles
x_positions = particles.x()

# Remove particles with large momenta
removed_particles = particles.rm_tails(xlim=1.0, ylim=1.0, px_lim=0.1, py_lim=0.1)

# Sort the particles by their x positions
particles.sort("x")

# Create a new particle list and convert to ParticleArray
new_particle_list = particles.array2list()
new_particles = ParticleArray()
new_particles.list2array(new_particle_list)