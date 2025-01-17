---
sidebar_position: 3
title: Magnet
---

# Documentation: `Magnet` Class

## Overview
The `Magnet` class extends the base `Element` class and represents magnetic beamline components in OCELOT. It provides functionalities to define magnetic properties, such as bending angles, quadrupole gradients, and sextupole strengths. The class supports computations of first-order and second-order parameters, as well as kick parameters for entrance, main body, and exit of the magnet.

---

## Attributes

- **`angle`** (`float`): The bending angle of the magnet (in radians). Used for components like bends or correctors.
- **`k1`** (`float`): Quadrupole gradient (1/m²).
- **`k2`** (`float`): Sextupole strength (1/m³).

---

## Methods

### `__init__(eid=None, has_edge=False)`
Initializes a `Magnet` instance.

**Parameters:**
- **`eid`** (`str`, optional): Element ID. If not provided, a unique ID is auto-generated.
- **`has_edge`** (`bool`, optional): Specifies if the magnet has edge effects. Default is `False`.

---

### `create_first_order_main_params(energy, delta_length=None)`
Computes the first-order parameters for the magnet based on its properties and beam energy.

**Parameters:**
- **`energy`** (`float`): Beam energy.
- **`delta_length`** (`float`, optional): Element length for the calculation. If not provided, the full length (`l`) is used.

**Returns:**
- **`FirstOrderParams`**: Object containing the first-order transformation matrix `R` and displacement vector `B`.

---

### `create_second_order_main_params(energy, delta_length=0.0)`
Computes the second-order parameters for the magnet, incorporating effects of non-linear fields.

**Parameters:**
- **`energy`** (`float`): Beam energy.
- **`delta_length`** (`float`, optional): Element length for the calculation. Default is `0.0`.

**Returns:**
- **`SecondOrderParams`**: Object containing second-order transformation matrices `R`, `B`, and `T`.

---

### `create_kick_entrance_params()`
Generates kick parameters for the entrance of the magnet.

**Returns:**
- **`KickParams`**: Object containing entrance kick parameters, including offsets (`dx`, `dy`), bending angle, tilt, and field strengths (`k1`, `k2`).

---

### `create_kick_main_params()`
Generates kick parameters for the main body of the magnet.

**Returns:**
- **`KickParams`**: Object containing main body kick parameters, including offsets (`dx`, `dy`), bending angle, tilt, and field strengths (`k1`, `k2`).

---

### `create_kick_exit_params()`
Generates kick parameters for the exit of the magnet.

**Returns:**
- **`KickParams`**: Object containing exit kick parameters, including offsets (`dx`, `dy`), bending angle, tilt, and field strengths (`k1`, `k2`).

---

## Summary

The `Magnet` class provides a comprehensive framework for modeling magnetic elements in accelerator beamlines. By defining bending angles, quadrupole gradients, and sextupole strengths, it supports the computation of both linear and non-linear effects on the beam. Its methods for generating kick parameters allow for precise modeling of entrance, body, and exit behaviors.