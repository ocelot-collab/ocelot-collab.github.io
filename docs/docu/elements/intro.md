---
sidebar_position: 1
title: Introduction to Elements
---

# Introduction to OCELOT Elements

OCELOT provides a framework for modeling accelerator components. Its modular design integrates a variety 
of beamline elements, each represented by a combination of **facade elements** and **element atoms**.

## Structure of OCELOT Elements

To enable advanced functionality, such as incorporating transfer maps within a single beamline component, OCELOT introduces the [**`OpticalElement`**](./optical-element.md). 
This class acts as a facade, bridging the old and new interfaces seamlessly. 

An [**`OpticalElement`**](./optical-element.md) contains:
- **Element Atom**: Inherited from the base [**`Element`**](./element.md) class, representing the physical and structural properties of the beamline component.
- **Transfer Maps**: Mathematical transformations describing the element's effect on the beam.

Each element in OCELOT, such as Drift, Quadrupole, Cavity and so on, is implemented through:
- A facade file (`xxx.py`) that inherits from [**`OpticalElement`**](./optical-element.md).
- An atom file (`xxx_atom.py`) that inherits from [**`Element`**](./element.md).

For example:
- `drift.py` (facade) and `drift_atom.py` (element atom).
- `quadrupole.py` (facade) and `quadrupole_atom.py` (element atom).

The full structure of the elements can be found in the [OCELOT GitHub repository](https://github.com/ocelot-collab/ocelot/tree/master/ocelot/cpbd/elements).

---

## Overview of OCELOT Elements

This section provides a categorized list of OCELOT elements, organized by their primary functions.

---

### Parent Elements
- **[Element](./element.md)**: The foundational base class for all accelerator components.
- **[Magnet](./magnet.md)**: The base class for all magnetic components, inheriting from [`Element`](./element.md).

---

### Core Elements
- **Drift**: Represents a drift space where the beam travels without external influences.
- **Marker**: A zero-length element used as a reference point within the lattice.
- **Monitor**: Acts as a beam position monitor. While it functions like a standard drift element, it can be used for orbit correction and beam diagnostics.

---

### Magnetic Elements (Inherited from [`Magnet`](./magnet.md))
- **Quadrupole**: Focuses or defocuses the beam in one plane.
- **Sextupole**: Corrects chromatic aberrations in the beam.
- **Octupole**: Provides higher-order corrections to the beam dynamics.
- **Multipole**: A general representation of magnetic elements with multiple poles.
- **Solenoid**: Provides focusing using a solenoidal magnetic field.
- **Bend**: A general class for bending magnets.
  - **SBend**: A sector bend with a constant bending radius.
  - **RBend**: A rectangular bend with a uniform magnetic field.

---

### Corrector Magnets
- **Hcor**: Horizontal corrector magnet, used to steer the beam in the horizontal plane.
- **Vcor**: Vertical corrector magnet, used to steer the beam in the vertical plane.

---

### RF Elements
- **Cavity**: An accelerating cavity used to increase the beam's energy.
- **TDCavity**: A transverse deflecting cavity used for beam manipulation.
- **TWCavity**: A traveling wave cavity designed for energy transfer to the beam (currently not functional).

---

### Specialized Elements
- **Undulator**: Produces periodic magnetic fields to generate synchrotron radiation.
- **Aperture**: Defines the physical boundaries of the beam, restricting its size.
- **Pulse**: Represents pulsed elements that temporarily affect the beam (currently not functional).
- **UnknownElement**: A placeholder for elements that are not explicitly defined within the framework.

---

### Notes
- Some elements, such as **TWCavity** and **Pulse**, are currently non-functional or in development. Refer to specific documentation or project updates for more information.