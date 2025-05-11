---
sidebar_position: 9
title: BeamTransform 
description: Beam Transform class
---

# [BeamTransform](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L374)

This section provides documentation for the [`BeamTransform`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L374) class, which is used for beam matching using Twiss parameters. 
The class applies beam matching based on the specified parameters, and removes offsets from the beam if required.


---

## BeamTransform Class

The `BeamTransform` class performs beam matching by adjusting the beam's parameters (using the Twiss formalism) to meet the specified conditions. It includes an option to remove offsets from the beam and applies the matching transformation to the beam using the `beam_matching` method.

### Parameters:
- **tws** (`Twiss` or `None`): A `Twiss` object that contains the Twiss parameters for the beam. If `None`, the Twiss parameters are derived from the `x_opt` and `y_opt` attributes.
- **x_opt** (`list` or `None`): Obsolete list of Twiss parameters for the horizontal plane, `[alpha, beta, mu (phase advance)]`. If `None`, it uses `tws` to get the parameters.
- **y_opt** (`list` or `None`): Obsolete list of Twiss parameters for the vertical plane, `[alpha, beta, mu (phase advance)]`. If `None`, it uses `tws` to get the parameters.
- **remove_offsets** (`bool`): If `True`, offsets are removed from the beam before applying the matching. Default is `True`.
- **bounds** (`list`): Specifies the bounds in terms of sigmas (e.g., `[-5, 5]`). This defines the region of the beam to be matched. Default is `[-5, 5]`.
- **slice** (`str` or `None`): Specifies a beam slice to be matched. If `None`, the entire beam is considered. If set to "Imax" or "Emax", the beam is matched to that slice, and the `bounds` parameter is ignored.

### Methods:

#### `__init__(self, tws=None, x_opt=None, y_opt=None, **kw)`
Constructor to initialize the `BeamTransform` class. It sets the Twiss parameters, options for offset removal, bounds for beam matching, and slice type.

#### `twiss(self)`
This property returns the `Twiss` object used for the beam matching. If the `tws` parameter is not provided, it constructs a new `Twiss` object using the `x_opt` and `y_opt` values. A warning is logged if `x_opt` and `y_opt` are used (since they are obsolete).

#### `apply(self, p_array, dz)`
Applies the beam transformation to the particle array (`p_array`) using the specified bounds and Twiss parameters. It invokes the `beam_matching` method to perform the matching transformation.

---

## Summary

The `BeamTransform` class is designed for beam matching in particle accelerators using the Twiss formalism. It allows for adjusting the beam's parameters to achieve a desired beam profile, with options to remove offsets and specify the region of the

beam to be matched. This class is particularly useful when optimizing beam parameters in accelerators or light sources. The class provides flexibility in defining beam boundaries and slices for matching, and handles both horizontal and vertical matching based on Twiss parameters.

---
## Example of Usage

The typical way to use `BeamTransform` is to apply it as a standard physics process using the [`Navigator`](../OCELOT%20fundamentals/navigator.md) class during beam [tracking](../OCELOT%20fundamentals/tracking.md). 

However, it can also be used independently by directly calling its `apply()` method on a [`ParticleArray`](../OCELOT%20fundamentals/particle-array.md). 
This is somewhat unconventional but useful as a quick way to rematch the beam to desired [Twiss](../OCELOT%20fundamentals/twiss.md) parameters without requiring full tracking.
```python
from ocelot import *
# Generate a test particle array
parray = generate_parray(nparticles=10000)

# Compute and print initial Twiss parameters
tws = parray.get_twiss()
print("Twiss parameters of the initial beam:")
print(tws)

# Define new target Twiss parameters for matching
tws_new = Twiss(beta_x=10, alpha_x=-1, beta_y=20, alpha_y=1.3)

# Create a BeamTransform to match the beam to the new Twiss parameters
bt = BeamTransform(tws=tws_new)

# Apply the transformation to the particle array
bt.apply(parray, dz=0)

# Compute and print the Twiss parameters after transformation
tws_transf = parray.get_twiss()
print("Twiss parameters after BeamTransform:")
print(tws_transf)
```
```python
    Twiss parameters of the initial beam:
    emit_x  = 2.003184683249138e-09
    emit_y  = 2.007487422659732e-09
    beta_x  = 4.935702393228451
    beta_y  = 5.02886241117081
    alpha_x = -0.004596888719016395
    alpha_y = -0.0009031158579342556
    gamma_x = 0.20260968991118197
    gamma_y = 0.19885229180200115
    Dx      = 0.0
    Dy      = 0.0
    Dxp     = 0.0
    Dyp     = 0.0
    mux     = 0.0
    muy     = 0.0
    nu_x    = 0.0
    nu_y    = 0.0
    E       = 0.13
    s        = 0.0
    
    Twiss parameters after BeamTransform:
    emit_x  = 2.003184683454551e-09
    emit_y  = 2.0074874230687637e-09
    beta_x  = 10.000000007167706
    beta_y  = 20.00000001187334
    alpha_x = -0.9999999999849389
    alpha_y = 1.2999999999949206
    gamma_x = 0.19999999985363365
    gamma_y = 0.13449999991949144
    Dx      = 0.0
    Dy      = 0.0
    Dxp     = 0.0
    Dyp     = 0.0
    mux     = 0.0
    muy     = 0.0
    nu_x    = 0.0
    nu_y    = 0.0
    E       = 0.13
    s        = 0.0
```