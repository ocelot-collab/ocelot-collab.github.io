---
sidebar_position: 1
title: Introduction to Tutorials
---
<small>
*This notebook was created by Sergey Tomin (sergey.tomin@desy.de). Update January 2025*
</small>

# Tutorials
<a id='tutorials'></a>

Current tutorials can be found in [`ocelot/demos/ipython_tutorial`](https://github.com/ocelot-collab/ocelot/tree/master/demos/ipython_tutorials) folder. 

#### Beam dynamics

* [Tutorial N1. Linear optics. Double Bend Achromat](./tutorial-beam-dynamics/1_dba.md)
    - Linear optics. Double Bend Achromat (DBA). Simple example of usage OCELOT functions to get periodic solution for a storage ring cell. 
* [Tutorial N2. Tracking.](./tutorial-beam-dynamics/2_tracking.mdx)
    - Linear optics of the European XFEL Injector. 
    - Tracking. First and second order. 
    - Artificial beam matching - BeamTransform
* [Tutorial N3. Space Charge.](./tutorial-beam-dynamics/3_space_charge.md)
    - Tracking through RF cavities with SC effects and RF focusing.
* [Tutorial N4. Wakefields.](./tutorial-beam-dynamics/4_wake.md)
    - Tracking through corrugated structure (energy chirper) with Wakefields
* [Tutorial N5. CSR.](./tutorial-beam-dynamics/5_CSR.md)
    - Tracking trough bunch compressor with CSR effect.
* [Tutorial N6. RF Coupler Kick.](./tutorial-beam-dynamics/6_coupler_kick.md)
    - Coupler Kick. Example of RF coupler kick influence on trajectory and optics.
* [Tutorial N7. Lattice design.](./tutorial-beam-dynamics/7_lattice_design.md)
    - Lattice design, twiss matching, twiss backtracking 
* [Tutorial N8. Physics process addition. Laser heater](./tutorial-beam-dynamics/8_laser_heater.md)
    - Theory of Laser Heater, implementation of new Physics Process, track particles w/o laser heater effect.   
* [Tutorial N9. Simple accelerator based THz source](./tutorial-beam-dynamics/9_thz_source.md)
    - A simple accelerator with the electron beam formation system and an undulator to generate THz radiation. 
* [Tutorial N10. Corrugated Structure](./tutorial-beam-dynamics/10_CorrugatedStructures.md)
    - In this tutorial, a few examples for tracking with parallel-plate corrugated structures are shown. The wakefields model are based on analytical wakefield formulas for flat corrugated structures.
* [Tutorial N11. Corrugated Structure](./tutorial-beam-dynamics/11_optics_design.md)
    - One more example of how to modify optics with Ocelot
      
#### Photon field simulation 

* [PFS tutorial N1. Synchrotron radiation module](./tutorial-photons/pfs_1_synchrotron_radiation.md)
    - Simple examples how to calculate synchrotron radiation with OCELOT Synchrotron Radiation Module.
* [PFS tutorial N2. Coherent radiation module and RadiationField object](./tutorial-photons/pfs_2_radiation_field.md)
* [PFS tutorial N3. Reflection from imperfect highly polished mirror](./tutorial-photons/pfs_3_imperfect_mirror.md)
* [PFS tutorial N4. Converting synchrotron radiation Screen object to RadiationField object for viewing and propagation](./tutorial-photons/pfs_4_synchrotron_radiation_visualization.md)
* [PFS tutorial N5: SASE estimation and imitation](./tutorial-photons/pfs_5_SASE_Estimator_and_Imitator.md)
* [PFS tutorial N6: Spectral Filtering](./tutorial-photons/pfs_6_spectral_filtering.md)
* 
### Appendixes
* [Undulator matching](./tutorial-beam-dynamics/undulator_matching.md)
    - brief theory and example in OCELOT
* [Some useful OCELOT functions](./tutorial-beam-dynamics/small_useful_features.md)
    - Aperture
    - Losses along accelerator lattice
    - RK tracking
    - Dump the beam distribution at a specific location of the lattice
    - Energy jitter. Or simulation of the jitter in the RF parameters.
    - Get Twiss paremeters from the beam slice
* [Example of an accelerator section optimization](./tutorial-beam-dynamics/accelerator_optim.md)
    - A simple demo of accelerator section optimization with a standard scipy numerical optimization method. 
* [Ocelot for Students](./tutorial-beam-dynamics/for_students.md)
    - This tutorial is aimed at students and beginners in accelerator physics. The idea is to keep it simple and interactive, helping you build intuition about how magnetic elements work.


### Checking your installation

You can run the following code to check the versions of the packages on your system:

(in IPython notebook, press `shift` and `return` together to execute the contents of a cell)


```python
import IPython
print('IPython:', IPython.__version__)

import numpy
print('numpy:', numpy.__version__)

import scipy
print('scipy:', scipy.__version__)

import matplotlib
print('matplotlib:', matplotlib.__version__)

import ocelot
print('ocelot:', ocelot.__version__)
```

```python
    IPython: 8.20.0
    numpy: 1.26.3
    scipy: 1.11.4
    matplotlib: 3.8.2
    initializing ocelot...
    ocelot: 24.03.0
```

## Disclaimer: 
The OCELOT code comes with absolutely NO warranty. The authors of the OCELOT do not take any responsibility for any damage to equipments or personnel injury that may result from the use of the code.