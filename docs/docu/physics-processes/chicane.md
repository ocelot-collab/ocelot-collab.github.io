---
sidebar_position: 11
title: Chicane
---

# [Chicane](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L607)

This section provides documentation for the [`Chicane`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L607) class, which simulates the longitudinal dynamics of a particle beam in a chicane.

---

## Chicane Class

The `Chicane` class models the effects of a chicane, which is a device used in accelerators to introduce longitudinal dynamics such as energy-chirp or compression. This class calculates the change in the longitudinal position of the beam's particles, influenced by the dispersion and higher-order effects.

### Parameters:
- **r56** (`float`): The first-order longitudinal dispersion parameter. This parameter defines the linear relationship between the particle's energy deviation and its longitudinal position in the chicane.
- **t566** (`float`): The second-order term, which accounts for the nonlinear effects of the chicane. Default is `0.0`.

### Methods:

#### `__init__(self, r56, t566=0.)`
Constructor to initialize the `Chicane` class with the given `r56` and optional `t566` values. The constructor also calls the parent class [`PhysProc`](./phys-proc.md) initializer.

#### `apply(self, p_array, dz)`
Applies the chicane's longitudinal dynamics to the particle array (`p_array`) over a step size (`dz`). This method modifies the longitudinal position (`rparticles[4]`) of the particles based on the dispersion (`r56`) and the nonlinear term (`t566`). The change in the longitudinal position is calculated by the formula:

$$
\Delta s = r56 \cdot \Delta p + t566 \cdot (\Delta p)^2
$$

where $ \Delta p $ represents the energy deviation of the particle.

---

## Summary

The `Chicane` class simulates the longitudinal dynamics of a particle beam passing through a chicane. It models the effect of the chicane's first-order and second-order dispersion on the longitudinal position of the particles. This class is useful for simulating the beam's behavior in accelerators where chicanes are used to introduce longitudinal compression or energy chirp.

---

