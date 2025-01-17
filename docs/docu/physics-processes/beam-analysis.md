---
sidebar_position: 10
title: Beam Analysis
---

# [Beam Analysis](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L551)

This section provides documentation for the [`BeamAnalysis`](https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L551) class, which is used to analyze the properties of a particle beam. The class performs beam diagnostics such as bunching, energy, and transverse beam sizes, and saves the analysis results to a file.

---

## BeamAnalysis Class

The `BeamAnalysis` class analyzes various properties of a particle beam during a simulation, including the bunching factor, transverse beam sizes (sigma_x, sigma_y), and energy. It uses a curve-fitting method to analyze the longitudinal profile of the beam and computes beam characteristics like bunching and transverse sigma values.

### Parameters:
- **filename** (`str`): The name of the file where the analysis data will be saved.

### Attributes:
- **lambda_mod** (`float`): The modulation wavelength for the analysis. Default is `1e-6`.
- **nlambdas** (`int`): The number of modulation wavelengths to include in the analysis (default is `4`).
- **p** (`list`): A list of particle momenta corresponding to each analysis step.
- **phi** (`list`): A list of phase values corresponding to each analysis step.
- **s** (`list`): A list of longitudinal positions (s) for each analysis step.
- **energy** (`list`): A list of particle energies for each analysis step.
- **bunching** (`list`): A list of bunching factors for each analysis step.
- **sigma_x** (`list`): A list of standard deviations of the transverse beam size in the x-direction for each analysis step.
- **sigma_y** (`list`): A list of standard deviations of the transverse beam size in the y-direction for each analysis step.

### Methods:

#### `__init__(self, filename)`
Constructor to initialize the `BeamAnalysis` class. This method accepts the filename where the analysis data will be saved.

#### `apply(self, p_array, dz)`
Applies the beam analysis to the particle array (`p_array`) over a step size (`dz`). The method:
1. Defines a test function to fit to the longitudinal profile of the beam.
2. Selects a portion of the beam that corresponds to the region defined by `lambda_mod` and `nlambdas`.
3. Performs curve fitting to determine parameters related to the beam's longitudinal profile.
4. Computes the bunching factor and transverse beam sizes (sigma_x, sigma_y).
5. Appends the computed values (momentum, phase, bunching, sigma_x, sigma_y, energy) to the corresponding lists.

#### `finalize(self)`
Finalizes the beam analysis by saving the computed data (e.g., momentum, phase, bunching factor, transverse sizes) to a text file (`filename`).

---

## Summary

The `BeamAnalysis` class is used for analyzing and saving data related to the longitudinal and transverse properties of a particle beam. It computes parameters such as bunching factor, transverse beam sizes, and energy, and stores the results in a file for later use. This class is useful for beam diagnostics and optimization in accelerator simulations.

---

## Example Usage

```python
# Create a BeamAnalysis instance with a specified filename
beam_analysis = BeamAnalysis(filename="beam_analysis_results.txt")

# Apply the beam analysis to a particle array `p_array` over a step size `dz`
beam_analysis.apply(p_array, dz=0.01)

# Finalize and save the analysis results to the file
beam_analysis.finalize()
```