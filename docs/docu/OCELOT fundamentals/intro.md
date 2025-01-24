---
sidebar_position: 1
title: Intro to OCELOT Structure
---

# Introduction to Ocelot Structure

Ocelot has a modular structure. Below is an overview of its structure and key modules:

---

## Charged Particle Beam Dynamics Module (CPBD)

The CPBD module contains the following main components:

- **[Elements](../elements/intro.md)**: Definitions of various beamline elements.
- **[TransferMaps](../trasfer-maps/transormation.md)**: Mathematical transformations for beamline elements.
- **[MagneticLattice](./magnet-lattice.md)**: Class represents a magnetic lattice, which is a sequence of elements forming a beamline
- **[Navigator](./navigator.md)**: Class for navigating through beamline lattices during tracking with ```PhysProc``` (Physics Processes)
- **[Tracking](./tracking.md)**: Particle tracking functions.
- **[Matching](matching.md)**: Matching beam optics to desired parameters.
- **[Physics Processes](../physics-processes/phys-proc.md)**: Includes key collective effects:
  - **[SpaceCharge](../physics-processes/sc.md)**: Features a 3D Laplace solver.
  - **[CSR (Coherent Synchrotron Radiation)](../physics-processes/csr.md)**: Implements a 1D model supporting an arbitrary number of dipoles.
  - **[Wake (Wakefields)](../physics-processes/wake.md)**: Models wakefields using a Taylor expansion up to second order for arbitrary geometries.
  - **[IBS (Intra Beam Scattering)](../physics-processes/ibs.md)**: Models intra-beam scattering effects.
  - Additional details on these effects can be found:
    - ["Ocelot as a Framework for Beam Dynamics Simulations of X-ray Sources", S. Tomin et al, *IPAC2017*](https://accelconf.web.cern.ch/ipac2017/papers/wepab031.pdf)
    - ["Accelerator beam dynamics at the European X-ray Free Electron Laser", I. Zagorodnov, M. Dohlus, S. Tomin, *2019*](https://journals.aps.org/prab/abstract/10.1103/PhysRevAccelBeams.22.024401).
- **MOGA (Multi-Objective Genetic Algorithm)**: Optimizes beamline designs. 
  - See [Short Bunch Operation Mode Development at the Synchrotron Radiation Source Siberia-2, Y. Fomin et al, *IPAC2016*](http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/thpmb034.pdf).

---

## Adaptors

- Includes various converters for translating lattice formats into Ocelot's format or converting beam distributions into [**`ParticleArray`**](particle-array.md).

---

## Native Module for Spontaneous Radiation Calculation

- This module provides tools for calculating spontaneous radiation. Additional details can be found in [Tutorial-Photons](../../tutorial/tutorial-photons/pfs_1_synchrotron_radiation.md) and in references:
  - ["Synchrotron Radiation Module in Ocelot Toolkit", S.Tomin, G. Geloni, *IPAC19*](https://accelconf.web.cern.ch/ipac2019/papers/wepts017.pdf) 
  - ["Dynamical effects on superradiant THz emission from an undulator", G.Geloni, T. Tanikawa, S. Tomin](http://scripts.iucr.org/cgi-bin/paper?S1600577519002509).

---

## FEL Calculations

- Interfaces with GENESIS for Free Electron Laser (FEL) simulations, including pre- and post-processing tools.

---

## Modules for Online Beam Control and Optimization (migrated to separate repository)

- Tools for online beam control and optimization of accelerator performance. Refer to the following resources for more details:
  - [“Online Beam Control with Ocelot at Siberia-2” – S. Tomin, A. Valentinov, *IPAC2014*](https://accelconf.web.cern.ch/IPAC2014/papers/mopro086.pdf)
  - [“Statistical Optimization of FEL Performance” – I. Agapov et al, *IPAC2015*](https://jacowfs.jlab.org/conf/y15/ipac15/prepress/TUPWA037.PDF)
  - [“Progress in Automatic Software-Based Optimization of Accelerator Performance” – S. Tomin et al, *IPAC2016*](https://accelconf.web.cern.ch/ipac2016/papers/wepoy036.pdf)
  - ["Automatic tuning of Free Electron Lasers" - I.Agapov et al, arXiv *2017*](https://arxiv.org/pdf/1704.02335.pdf)
- Developed in collaboration with SLAC and hosted in a separate [repository](https://github.com/ocelot-collab/optimizer) within the [ocelot-collab](https://github.com/ocelot-collab) organization for ease of collaborative development.

---

## Technical Foundations

Ocelot extensively utilizes Python libraries:
- **[NumPy](https://numpy.org)**: For efficient in-core numerical computations.
- **[SciPy](https://scipy.org)**: For advanced scientific computations, including optimization techniques and algorithms.
- **[Matplotlib](https://matplotlib.org)**: For producing high-quality figures and visualizations.

---

## Examples and Tutorials

While detailed documentation is not yet available, you can find numerous examples in the [`/demos/` folder](https://github.com/ocelot-collab/ocelot/tree/master/demos) 
and Jupyter [tutorials](../../tutorial/intro.md) to get started.