---
sidebar_position: 8
title: ParticleArray
---

# [ParticleArray](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/beam.py#L726) Class 

## Description:
The [`ParticleArray`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/beam.py#L726) class represents 
an array of particles with optimized performance for large numbers of particles. 
It handles the particles' positions and momenta, along with additional functionalities like applying physics processes, 
sorting particles, and managing lost particles.

## Coordinates
The coordinate system in Ocelot follows these conventions:

$$ 
\left (x, \quad x' = \frac{p_x}{p_0} \right), \qquad \left (y, \quad y' = \frac{p_y}{p_0} \right), \qquad \left (\tau = c\Delta t, \quad p = \frac{\Delta E}{p_0 c} \right)
$$

### Definitions
- $\tau = c t - \frac{s}{\beta_0}$: Longitudinal coordinate of the particle.
- $s$: Independent variable representing the distance along the beam line (equivalent to the path length of the reference particle).
- $v_0$ and $p_0$: Velocity and momentum of the reference particle, respectively.
- $t$: Time at which a particle reaches position $s$ along the beam line.

#### For the reference particle:
- $\tau = 0$ for all $s$.

#### For other particles:
- $\tau < 0$: The particle arrives earlier than the reference particle.
- $\tau > 0$: The particle arrives later than the reference particle.

#### Energy relation:
- $\Delta E = E - E_0$, where $E = \gamma m_0 c^2$ is the total energy of the particle.

---

## Attributes
- **`rparticles`**: A 2D array of shape `(6, n)` representing the particle distribution in 6D phase space:
  - `rparticles[0,:]`: Array of horizontal coordinates $x$.
  - `rparticles[1,:]`: Array of horizontal momenta $x' = \frac{p_x}{p_0}$.
  - `rparticles[2,:]`: Array of vertical coordinates $y$.
  - `rparticles[3,:]`: Array of vertical momenta $y' = \frac{p_y}{p_0}$.
  - `rparticles[4,:]`: Array of longitudinal positions $\tau = c t - \frac{s}{\beta_0}$.
  - `rparticles[5,:]`: Array of longitudinal momenta $p = \frac{\Delta E}{p_0 c}$.

- **`q_array`**: A 1D array containing the charges of each particle.
- **`s`**: The distance along the beam line (equivalent to the path length of the reference particle).
- **`E`**: The energy of the reference particle, $E_0$.
- **lost_particle_recorder**: Records information about lost particles.

### Methods:

#### `__init__(self, n=0)`
- Initializes a `ParticleArray` with `n` particles. Sets up the `rparticles`, `q_array`, and `lost_particle_recorder`.
```python
def __init__(self, n=0):
    self.rparticles = np.zeros((6, n))
    self.q_array = np.zeros(n)  # charge
    self.s = 0.0
    self.E = 0.0
    self.lost_particle_recorder = self.LostParticleRecorder(n)
```
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
```python
def x(self):
    return self.rparticles[0]
```
- Returns the x positions of all particles 

#### `px(self)`
```python
def px(self):
    return self.rparticles[1] 
```
- Returns the x momenta of all particles ($x' = \frac{p_x}{p_0}$).

#### `y(self)`
```python
def y(self):
    return self.rparticles[2]
```
- Returns the y positions of all particles.

#### `py(self)`
```python
def py(self):
    return self.rparticles[3]
```
- Returns the y momenta of all particles ($y' = \frac{p_y}{p_0}$).

#### `tau(self)`
```python
def tau(self):
    return self.rparticles[4]
```
- Returns the longitudinal position of all particles ($\tau = c t - \frac{s}{\beta_0}$).

#### `p(self)`
```python
def p(self):
    return self.rparticles[5]
```
- Returns the longitudinal momentum of all particles ($p = \frac{\Delta E}{p_0 c}$).

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
