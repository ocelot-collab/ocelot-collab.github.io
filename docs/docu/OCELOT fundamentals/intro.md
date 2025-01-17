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
- **TransferMaps**: Mathematical transformations for beamline elements.
- **[MagneticLattice](./magnet-lattice.md)**: Class represents a magnetic lattice, which is a sequence of elements forming a beamline
- **[Navigator](./navigator.md)**: Class for navigating through beamline lattices during tracking with ```PhysProc``` (Physics Processes)
- **[Tracking](./tracking.md)**: Particle tracking functions.
- **Matching**: Matching beam optics to desired parameters.
- **[Physics Processes](../physics-processes/phys-proc.md)**: Includes key collective effects:
  - **[Space Charge](../physics-processes/sc.md)**: Features a 3D Laplace solver.
  - **[CSR (Coherent Synchrotron Radiation)](../physics-processes/csr.md)**: Implements a 1D model supporting an arbitrary number of dipoles.
  - **[Wakefields](../physics-processes/wake.md)**: Models wakefields using a Taylor expansion up to second order for arbitrary geometries.
  - **[IBS (Intra Beam Scattering)](../physics-processes/ibs.md)**: Models intra-beam scattering effects.
  - Additional details on these processes can be found [here](http://vrws.de/ipac2017/papers/wepab031.pdf) and [here](https://journals.aps.org/prab/abstract/10.1103/PhysRevAccelBeams.22.024401).
- **MOGA (Multi-Objective Genetic Algorithm)**: Optimizes beamline designs. See [reference](http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/thpmb034.pdf).

---

## Adaptors

- Includes various converters for translating lattice formats into Ocelot's format or converting beam distributions into [**`ParticleArray`**](particle-array.md).

---

## Native Module for Spontaneous Radiation Calculation

- This module provides tools for calculating spontaneous radiation. Additional details can be found [here](http://accelconf.web.cern.ch/AccelConf/ipac2019/papers/wepts017.pdf) and [here](http://scripts.iucr.org/cgi-bin/paper?S1600577519002509).

---

## FEL Calculations

- Interfaces with GENESIS for Free Electron Laser (FEL) simulations, including pre- and post-processing tools.

---

## Modules for Online Beam Control and Optimization (migrated to separate repository)

- Tools for online beam control and optimization of accelerator performance. Refer to the following resources for more details:
  - [Reference 1](http://accelconf.web.cern.ch/accelconf/IPAC2014/papers/mopro086.pdf)
  - [Reference 2](https://jacowfs.jlab.org/conf/y15/ipac15/prepress/TUPWA037.PDF)
  - [Reference 3](http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/wepoy036.pdf)
  - [Reference 4](https://arxiv.org/pdf/1704.02335.pdf)
- Developed in collaboration with SLAC and hosted in a separate [repository](https://github.com/ocelot-collab/optimizer) within the [ocelot-collab](https://github.com/ocelot-collab) organization for ease of collaborative development.

---

## Technical Foundations

Ocelot extensively utilizes Python libraries:
- **[NumPy](http://numpy.org)**: For efficient in-core numerical computations.
- **[SciPy](http://scipy.org)**: For advanced scientific computations, including optimization techniques and algorithms.
- **[Matplotlib](http://matplotlib.org/index.html)**: For producing high-quality figures and visualizations.

---

## Development and Contributions

Ocelot is an open-source project developed by physicists from:
- [The European XFEL](http://www.xfel.eu/)
- [DESY](http://www.desy.de/) (Germany)
- [NRC Kurchatov Institute](http://www.nrcki.ru/) (Russia)

---

## Examples and Tutorials

While detailed documentation is not yet available, you can find numerous examples in the `/demos/` folder and Jupyter [tutorials](#tutorials) to get started.