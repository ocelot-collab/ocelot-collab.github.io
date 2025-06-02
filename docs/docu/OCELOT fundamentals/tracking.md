---
sidebar_position: 7
title: Tracking
description: Particle tracking through a magnetic lattice with optional envelope calculation.
---

# [`track`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/track.py#L428) function


The `track` function is a core component in Ocelot for simulating particle beam dynamics through a [`MagneticLattice`](magnet-lattice.md). 
It applies transformations from lattice elements and physics processes (like [Space Charge](../physics-processes/sc.md),  [Wakefields](../physics-processes/wake.md) and etc.) to a [`ParticleArray`](particle-array.md). 
Optionally, it calculates beam envelope (Twiss) parameters at specified intervals using the [`get_envelope`](../functions/get_envelope.md) function.

## Function Signature

```python 
def track(
        lattice: MagneticLattice,
        p_array: ParticleArray,
        navi: Navigator = None,
        print_progress: bool = True,
        calc_tws: bool = True,
        bounds: list = None,
        return_df: bool = False,
        overwrite_progress: bool = True,
        slice: str = None, # Python 'slice' keyword is different
        twiss_disp_correction: bool = False
        ) -> Tuple[Union[List[Twiss], pd.DataFrame], ParticleArray]:
    # ... function body ...
    # Simplified conceptual flow:
    # tws_initial = get_envelope(p_array, ...) if calc_tws else Twiss()
    # tws_track = [tws_initial]
    # for each step in navigator:
    #     apply_transfer_maps(p_array, step_maps)
    #     apply_physics_processes(p_array, step_processes)
    #     if p_array is empty: break
    #     if calc_tws:
    #         current_tws = get_envelope(p_array, ...)
    #         tws_track.append(current_tws)
    #     print_progress_if_enabled()
    # finalize_physics_processes()
    # return tws_track, p_array
    pass
```

## Description

The `track` function simulates the passage of a [`ParticleArray`](particle-array.md) through a given [`MagneticLattice`](magnet-lattice.md). It utilizes a [`Navigator`](navigator.md) to determine the sequence of optical element transformations (transfer maps) and physics processes to apply.

-   At each step dictated by the navigator, the corresponding transfer maps are applied to the `p_array`.
-   Subsequently, any physics processes scheduled for that step are applied.
-   If `calc_tws` is true, beam statistics (Twiss parameters, moments, etc.) are calculated from the `p_array` using the [`get_envelope`](../functions/get_envelope.md) function after each step. These intermediate Twiss parameters are accumulated and returned.
-   The tracking continues until the end of the lattice is reached or the particle array becomes empty.

## Parameters

-   **`lattice`** ([`MagneticLattice`](magnet-lattice.md))
    The magnetic lattice structure through which the particles will be tracked.

-   **`p_array`** ([`ParticleArray`](particle-array.md))
    The input array of particles to be tracked. This array is modified in place.

-   **`navi`** ([`Navigator`](navigator.md), optional)
    The navigator object that orchestrates the tracking steps, including the application of physics processes. If `None` (default), a basic `Navigator` is instantiated for the given `lattice` without any physics processes.
    *Note: If providing a custom navigator, ensure its associated lattice is the same as the `lattice` argument.*

-   **`print_progress`** (`bool`, optional, default: `True`)
    If `True`, prints the tracking progress to the console, indicating the current longitudinal position (`z`) and the physics processes being applied.

-   **`calc_tws`** (`bool`, optional, default: `True`)
    If `True`, Twiss parameters and other beam envelope characteristics are calculated from the `p_array` using [`get_envelope`](../functions/get_envelope.md) at the beginning and after each significant step in the lattice. The results are collected and returned. If `False`, this calculation is skipped, and a list of empty `Twiss` objects (or an empty DataFrame) is returned for the Twiss part of the output.

-   **`bounds`** (`list`, optional, default: `None`)
    Passed directly to the [`get_envelope`](../functions/get_envelope.md) function when `calc_tws` is `True`. Defines longitudinal bounds `[left_bound, right_bound]` in units of $\sigma_\tau$ (standard deviation of `p_array.tau()`) for slicing the particle distribution before calculating Twiss parameters. If `None`, the full bunch is used.

-   **`return_df`** (`bool`, optional, default: `False`)
    If `True` and `calc_tws` is `True`, the list of calculated `Twiss` objects is converted into a pandas `DataFrame` before being returned. This can be convenient for analysis and plotting.

-   **`overwrite_progress`** (`bool`, optional, default: `True`)
    If `True` and `print_progress` is `True`, the progress message will overwrite the previous message on the same line in the console, creating a dynamic progress bar effect. If `False`, each progress message is printed on a new line.

-   **`slice`** (`str`, optional, default: `None`)
    Passed directly to the [`get_envelope`](../functions/get_envelope.md) function when `calc_tws` is `True` and `bounds` are specified. Determines the reference point for longitudinal slicing:
    -   `None`: Uses the mean of `p_array.tau()` ($\langle \tau \rangle$).
    -   `"Imax"`: Uses the longitudinal position of maximum current.

-   **`twiss_disp_correction`** (`bool`, optional, default: `False`)
    Passed directly to the `auto_disp` parameter of the [`get_envelope`](../functions/get_envelope.md) function when `calc_tws` is `True`. If `True`, [`get_envelope`](../functions/get_envelope.md) will attempt to estimate and subtract the linear dispersion effects from the particle statistics when calculating Twiss parameters. This is useful for obtaining betatron Twiss parameters in dispersive regions.

## Returns

A tuple: `(tws_results, p_array_final)`

1.  **`tws_track`** (`List[Twiss]` or `pd.DataFrame`)
    -   If `calc_tws` is `True`: A list of [`Twiss`](twiss.md) objects, each representing the beam envelope parameters at different points along the lattice (including the start). The `s` coordinate of each [`Twiss`](twiss.md) object indicates its longitudinal position. If `return_df` is `True`, this will be a pandas `DataFrame` derived from these [`Twiss`](twiss.md) objects.
    -   If `calc_tws` is `False`: A list containing initial and final empty [`Twiss`](twiss.md) objects, or an empty DataFrame if `return_df` is `True`. *(The actual behavior based on your code seems to be: an initial empty Twiss, and subsequent empty Twiss objects for each step)*. The provided code returns a list containing an initial [`Twiss`](twiss.md) object (either calculated or empty) and appends one more [`Twiss`](twiss.md) object per `navi.get_next_step()` iteration.

   2.  **`p_array_final`** ([`ParticleArray`](particle-array.md))
       The [`ParticleArray`](particle-array.md) after all tracking steps and physics processes have been applied. This is the same `p_array` object passed as input, modified in place.
:::warning Important: In-Place Modification of `p_array`

The input `p_array` object is modified **in-place** during the execution of the `track` function. Consequently, the returned `p_array_final` is the same object as the input `p_array`, now reflecting its state after tracking.

While returning `p_array_final` might seem redundant given the in-place modification, this behavior is maintained for consistency with existing scripts and a common functional programming pattern of returning outputs. Users should be aware that any references to the original `p_array` outside the function will also point to the modified particle data. If the original state of `p_array` needs to be preserved, create a copy before calling `track()` (e.g., `p_array_copy = p_array.copy()`).
:::

## Key Operations within `track` (Conceptual Flow)

1.  **Initialization:**
    -   A default `Navigator` is created if one isn't provided.
    -   If `calc_tws` is enabled, initial Twiss parameters are calculated using [`get_envelope`](../functions/get_envelope.md) with the specified `bounds`, `slice`, and `twiss_disp_correction` settings. This initial [`Twiss`](twiss.md) object is stored.

2.  **Tracking Loop (Iterating through `navi.get_next_step()`):**
    The navigator yields steps, each typically comprising:
    -   `t_maps`: A list of transfer map objects (e.g., from drift, quadrupole).
    -   `dz`: The length of this step.
    -   `proc_list`: A list of physics process objects to be applied during this step.
    -   `phys_steps`: The integration lengths for each process in `proc_list`.

    For each such step from the navigator:
    -   **Apply Transfer Maps:** Each transfer map in `t_maps` is applied to the `p_array`.
    -   **Apply Physics Processes:** Each physics process in `proc_list` is applied to the `p_array` over its corresponding `z_step`.
    -   **Check Particle Count:** If `p_array.n` (number of particles) becomes zero, tracking stops.
    -   **Calculate Twiss (if enabled):** `get_envelope` is called again on the (now updated) `p_array` with the same `bounds`, `slice`, and `twiss_disp_correction` settings. The `s` coordinate of the resulting `Twiss` object is updated to reflect the current total path length `L`. This new `Twiss` object is appended to `tws_track`.
    -   **Print Progress (if enabled):** Information about the current position `z` and applied processes is printed.

3.  **Finalization:**
    -   After the loop, any `finalize()` methods of the physics processes registered with the navigator are called.

4.  **Return Values:**
    -   The accumulated list of [`Twiss`](twiss.md) objects (or DataFrame) and the final state of the `p_array` are returned.

## Notes

-   The `p_array` is modified **in place** throughout the tracking. If you need to preserve the initial `p_array`, make a copy before calling `track` (e.g., `p_array_copy = p_array.copy()`).
-   The accuracy and types of physical effects included depend on the [`Navigator`](navigator.md) setup and the [`PhysProc`](../physics-processes/phys-proc.md) objects added to it.
-   Parameters `bounds`, `slice`, and `twiss_disp_correction` directly influence how the intermediate Twiss parameters are calculated by [`get_envelope`](../functions/get_envelope.md), allowing for flexible analysis (e.g., sliced analysis, dispersion-corrected betatron functions).

