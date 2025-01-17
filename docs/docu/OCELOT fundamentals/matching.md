---
sidebar_position: 10
title: Matching
---

#  [`match`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/match.py#L42) Function

## Overview
The [`match`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/match.py#L42) function in Ocelot is designed to match Twiss parameters in a magnetic lattice by optimizing a set of variables. 
It supports constraints for periodic solutions, beam optics matching, and specific goals like minimizing radiation integrals. The function allows customization of the optimization process using various methods, tolerances, and weights.

---

## Parameters

### Required Parameters
- **`lat`** [(`MagneticLattice`)](magnet-lattice.md): The magnetic lattice object to be optimized.
- **`constr`** (`dict`): A dictionary of constraints. Examples:
  - **Periodic solution**:
    ```python
    constr = {'periodic': True}
    ```
  - **"Hard" constraints at specific elements**:
    ```python
    constr = {elem1: {'beta_x': 15, 'beta_y': 2}, elem2: {'Dx': 0, 'Dyp': 0}}
    ```
  - **Combination of "soft" and "hard" constraints**:
    ```python
    constr = {elem1: {'alpha_x': ['>', 5], 'beta_y': 5}, elem2: {'Dx': 0, 'beta_x': ['<', 10]}}
    ```
  - **Absolute value constraints**:
    ```python
    constr = {elem1: {'alpha_x': ['a>', 5], 'alpha_y': ['a<', 1]}}
    ```
  - **Global constraints**:
    ```python
    constr = {'global': {'beta_x': ['>', 10]}}
    ```
  - **Experimental constraints**:
    ```python
    constr = {"delta": {ELEM1: ["muy", 0], ELEM2: ["muy", 0], "val": 3*np.pi/2, "weight": 100007}}
    ```

- **`vars`** (`list`): List of variables to optimize. Examples:
  - Beamline elements:
    ```python
    vars = [QF, QD]
    ```
  - Initial Twiss parameters:
    ```python
    vars = [[tws0, 'beta_x'], [tws0, 'beta_y']]
    ```

- **`tw`** [(`Twiss`)](twiss.md): Initial Twiss parameters.

---

### Optional Parameters
- **`verbose`** (`bool`): Enables verbose output during the optimization. Default is `True`.
- **`max_iter`** (`int`): Maximum number of iterations for the optimization process. Default is `1000`.
- **`method`** (`str`): Optimization method. Options:
  - `'simplex'` (default)
  - `'cg'` (Conjugate Gradient)
  - `'bfgs'` (Broyden–Fletcher–Goldfarb–Shanno)
- **`weights`** (`function`): Function to assign weights to constraints. Default is `weights_default`.
- **`vary_bend_angle`** (`bool`): Allows varying the bending angle of dipoles instead of their focusing strength `k1`. Default is `False`.
- **`min_i5`** (`bool`): Minimizes the radiation integral `I5`. Useful for storage ring optimization. Default is `False`.
- **`tol`** (`float`): Tolerance for the optimization process. Default is `1e-5`.

---

## Returns
- **`res`**: The optimization result, which includes the optimized values for the specified variables.

---

## Example Usage

### Basic Matching
```python
from ocelot.cpbd.matching import match

# Define magnetic lattice and initial Twiss parameters
lat = MagneticLattice(sequence)
tw = Twiss(beta_x=10, beta_y=5, alpha_x=0, alpha_y=0)

# Define constraints and variables
constr = {elem1: {'beta_x': 10, 'beta_y': 5}, 'periodic': True}
vars = [QF, QD]

# Run matching
result = match(lat, constr, vars, tw)
```

## Matching with Global and Soft Constraints
```python
constr = {
    elem1: {'alpha_x': ['>', 5], 'beta_y': 5},
    'global': {'beta_x': ['<', 20]}
}
result = match(lat, constr, vars, tw, method='bfgs', tol=1e-6)
```

## Notes
- **Constraints**:
  - Constraints can be “hard” (exact values) or “soft” (inequalities with weights).
  - Global constraints affect the entire lattice, while local constraints apply to specific elements.
- **Weights**:
  - The default weights prioritize periodicity and optical functions like beta and alpha. Users can define custom weight functions to adjust the optimization.
- **Methods**:
  - 'simplex' is robust and works well for general cases but may be slower.
  - 'cg' and 'bfgs' are gradient-based and faster but require smooth functions.

The match function provides a flexible and powerful framework for beam optics matching and 