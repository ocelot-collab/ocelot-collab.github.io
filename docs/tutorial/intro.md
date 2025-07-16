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

## Beam dynamics

Before starting with the tutorials, we recommend looking at [**Ocelot for Students**](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/for_students) — a beginner-friendly example aimed at students and newcomers to accelerator physics. This tutorial keeps things simple and interactive to help build intuition about how magnetic elements work.

---
* [Tutorial N1. Linear optics. Double Bend Achromat](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/dba)
    - Linear optics. Double Bend Achromat (DBA). Simple example of usage OCELOT functions to get periodic solution for a storage ring cell. 
* [Tutorial N2. Tracking.](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/tracking)
    - Linear optics of the European XFEL Injector. 
    - Tracking. First and second order. 
    - Artificial beam matching - BeamTransform
* [Tutorial N3. Space Charge.](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/space_charge)
    - Tracking through RF cavities with SC effects and RF focusing.
* [Tutorial N4. Wakefields.](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/wake)
    - Tracking through corrugated structure (energy chirper) with Wakefields
* [Tutorial N5. CSR.](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/CSR)
    - Tracking trough bunch compressor with CSR effect.
* [Tutorial N6. RF Coupler Kick.](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/coupler_kick)
    - Coupler Kick. Example of RF coupler kick influence on trajectory and optics.
* [Tutorial N7. Lattice design.](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/lattice_design)
    - Lattice design, twiss matching, twiss backtracking 
* [Tutorial N8. Physics process addition. Laser heater](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/laser_heater)
    - Theory of Laser Heater, implementation of new Physics Process, track particles w/o laser heater effect.   
* [Tutorial N9. Simple accelerator based THz source](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/thz_source)
    - A simple accelerator with the electron beam formation system and an undulator to generate THz radiation. 
* [Tutorial N10. Corrugated Structure](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/CorrugatedStructures)
    - In this tutorial, a few examples for tracking with parallel-plate corrugated structures are shown. The wakefields model are based on analytical wakefield formulas for flat corrugated structures.
* [Tutorial N11. Optics for High Time Resolution Measurements with TDS](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/slotted_foil)
    - An additional example demonstrating how to modify the beamline optics using Ocelot.
      
## Photon field simulation 

* [PFS tutorial N1. Synchrotron radiation module](https://www.ocelot-collab.com/docs/tutorial/tutorial-photons/pfs_1_synchrotron_radiation)
    - Simple examples how to calculate synchrotron radiation with OCELOT Synchrotron Radiation Module.
* [PFS tutorial N2. Coherent radiation module and RadiationField object](https://www.ocelot-collab.com/docs/tutorial/tutorial-photons/pfs_2_radiation_field)
* [PFS tutorial N3. Reflection from imperfect highly polished mirror](https://www.ocelot-collab.com/docs/tutorial/tutorial-photons/pfs_3_imperfect_mirror)
* [PFS tutorial N4. Converting synchrotron radiation Screen object to RadiationField object for viewing and propagation](./tutorial-photons/pfs_4_synchrotron_radiation_visualization.md)
* [PFS tutorial N5: SASE estimation and imitation](https://www.ocelot-collab.com/docs/tutorial/tutorial-photons/pfs_5_SASE_Estimator_and_Imitator)
* [PFS tutorial N6: Spectral Filtering](https://www.ocelot-collab.com/docs/tutorial/tutorial-photons/pfs_6_spectral_filtering)

## Appendixes
* [Undulator matching](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/undulator_matching)
    - brief theory and example in OCELOT
* [Some useful OCELOT functions](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/small_useful_features)
  
    A collection of small but handy features in Ocelot:
    - Aperture
    - Losses along accelerator lattice
    - RK tracking
    - Dump the beam distribution at a specific location of the lattice
    - Energy jitter. Or simulation of the jitter in the RF parameters.
    - Get Twiss parameters from the beam slice
    - Transfer Maps in Ocelot. Global assignment and for specific elements
* [Example of an accelerator section optimization](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/accelerator_optim)
    - A simple demo of accelerator section optimization with a standard scipy numerical optimization method. 
* [Optics Design for High Time Resolution with TDS](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/optics_design)  
  An example demonstrating how to perform optics matching in Ocelot to improve time resolution when using a Transverse Deflecting Structure (TDS).

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