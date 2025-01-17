---
sidebar_position: 7
title: Tracking Functions
---

# Tracking Functions 

## `track`

### Description:
Tracks particles through a lattice and optionally calculates Twiss parameters during the tracking. The method applies the relevant physical processes at each step and returns the updated particle array along with calculated Twiss parameters.

Code of the function is presented here. 
```python 
def track(lattice, p_array, navi=None, print_progress=True, calc_tws=True, 
          bounds=None, return_df=False,
          overwrite_progress=True) -> Tuple[Union[List[Twiss], pd.DataFrame], ParticleArray]:
    ...
    for t_maps, dz, proc_list, phys_steps in navi.get_next_step():
        for tm in t_maps:
            tm.apply(p_array)
            ...
        ...
        for p, z_step in zip(proc_list, phys_steps):
            ...
            p.apply(p_array, z_step)
            ...
    ...
    # finalize PhysProcesses
    for p in navi.get_phys_procs():
        p.finalize()
    ...
    return tws_track, p_array
```
### Arguments:
- **lattice** [`MagneticLattice`](magnet-lattice.md): The magnetic lattice through which the particles will be tracked.
- **p_array** (`ParticleArray`): The array of particles to be tracked.
- **navi** (`Navigator`, optional): The navigator for tracking. If `None`, a default navigator is used with no physical processes.
- **print_progress** (`bool`, optional): If `True`, the progress of the tracking is printed. Default is `True`.
- **calc_tws** (`bool`, optional): If `True`, Twiss parameters are calculated during the tracking. Default is `True`.
- **bounds** (`list`, optional): Optional bounds for the tracking based on the standard deviation of `p_array.tau()`.
- **return_df** (`bool`, optional): If `True`, the output is returned as a pandas DataFrame. Default is `False`.
- **overwrite_progress** (`bool`, optional): If `True`, the progress message will overwrite the previous message in the console. Default is `True`.

### Returns:
- **Twiss list or pandas DataFrame**: If `calc_tws` is `True`, a list of Twiss parameters is returned. If `return_df` is `True`, the result is returned as a pandas DataFrame.
- **ParticleArray**: The updated array of particles after the tracking.

### Notes:
- Applies all physics processes at each step.
- Optionally prints tracking progress, including the current position in the lattice and the applied processes.
- The method ends when the particle list is empty or the lattice length is exceeded.

---

## `tracking_step`

### Description:
Tracks particles for a fixed step `dz` through a magnetic lattice and applies the relevant transfer maps to the particle list.

### Arguments:
- **lat** (`MagneticLattice`): The magnetic lattice through which the particles will be tracked.
- **particle_list** (`ParticleArray` or `Particle` list): The list of particles to be tracked.
- **dz** (`float`): The step size in meters.
- **navi** (`Navigator`): The navigator instance controlling the tracking.

### Returns:
- None

### Notes:
- Checks that the lattice in the `Navigator` matches the lattice passed in the `tracking_step` function.
- The transfer maps for the step are retrieved and applied to the particles.

---


## `lattice_track`

### Description:
Tracks a particle through the entire lattice and saves the particle's state after each element.

### Arguments:
- **lat** (`MagneticLattice`): The magnetic lattice through which the particle will be tracked.
- **p** (`Particle`): The particle to be tracked.

### Returns:
- A list of `Particle` instances, each representing the state of the particle after each element in the lattice.

### Notes:
- Creates a copy of the particle at each element in the lattice.