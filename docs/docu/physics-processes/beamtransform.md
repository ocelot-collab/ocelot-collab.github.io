---
sidebar_position: 9
title: BeamTransform Class
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

