---
sidebar_position: 8
title: Aperture Classes 
description: Documentation about apertures 
---

# Aperture Classes 

This section documents three classes: `PhaseSpaceAperture`, `RectAperture`, and `EllipticalAperture`. These classes are used to cut or filter a beam of particles based on various geometrical apertures in the phase space.

---

## [PhaseSpaceAperture](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L254) Class

The `PhaseSpaceAperture` class cuts the beam in the longitudinal, horizontal, and vertical directions based on specified parameters.

### Parameters:
- **longitudinal** (`bool`): If `True`, cuts the beam in the longitudinal direction (default is `True`).
- **vertical** (`bool`): If `True`, cuts the beam in the vertical direction (default is `False`).
- **horizontal** (`bool`): If `True`, cuts the beam in the horizontal direction (default is `False`).
- **taumin** (`float`): Minimum longitudinal value in [rms] from the center of mass (default is -5).
- **taumax** (`float`): Maximum longitudinal value in [rms] from the center of mass (default is 5).
- **xmin** (`float`): Minimum horizontal value in [rms] from the center of mass (default is -5).
- **xmax** (`float`): Maximum horizontal value in [rms] from the center of mass (default is 5).
- **ymin** (`float`): Minimum vertical value in [rms] from the center of mass (default is -5).
- **ymax** (`float`): Maximum vertical value in [rms] from the center of mass (default is 5).

### Methods:

#### `__init__(self, step=1)`
Constructor to initialize the `PhaseSpaceAperture` class with default or user-specified values.

#### `apply(self, p_array, dz)`
Applies the aperture cut to the particles in the phase space. It deletes particles that fall outside the specified longitudinal, horizontal, and vertical apertures.

---

## [RectAperture](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L316) Class

The `RectAperture` class cuts the beam in the horizontal and/or vertical direction based on rectangular apertures.

### Parameters:
- **xmin** (`float`): Minimum horizontal plane in [m] (default is `-np.inf`).
- **xmax** (`float`): Maximum horizontal plane in [m] (default is `np.inf`).
- **ymin** (`float`): Minimum vertical plane in [m] (default is `-np.inf`).
- **ymax** (`float`): Maximum vertical plane in [m] (default is `np.inf`).

### Methods:

#### `__init__(self, xmin=-np.inf, xmax=np.inf, ymin=-np.inf, ymax=np.inf, step=1)`
Constructor to initialize the `RectAperture` class with default or user-specified values.

#### `apply(self, p_array, dz)`
Applies the rectangular aperture cut to the particles. It deletes particles that are outside the specified horizontal and vertical ranges.

---

## [EllipticalAperture](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L349) Class

The `EllipticalAperture` class cuts the beam based on an elliptical aperture with semi-axes `xmax` and `ymax`.

### Parameters:
- **xmax** (`float`): Horizontal semi-axis in [m] (default is `np.inf`).
- **ymax** (`float`): Vertical semi-axis in [m] (default is `None`, in which case `ymax` equals `xmax`, creating a circular aperture).
- **dx** (`float`): Offset in the horizontal direction in [m] (default is 0.0).
- **dy** (`float`): Offset in the vertical direction in [m] (default is 0.0).

### Methods:

#### `__init__(self, xmax=np.inf, ymax=None, dx=0.0, dy=0.0, step=1)`
Constructor to initialize the `EllipticalAperture` class with default or user-specified values.

#### `apply(self, p_array, dz)`
Applies the elliptical aperture cut to the particles. It deletes particles that are outside the specified elliptical region.

---

## Summary

- The `PhaseSpaceAperture` class is used for cutting the beam in the longitudinal, horizontal, or vertical directions based on the specified RMS values.
- The `RectAperture` class cuts the beam in horizontal and vertical directions using rectangular boundaries.
- The `EllipticalAperture` class cuts the beam based on an elliptical aperture, with optional offset in the horizontal and vertical directions.