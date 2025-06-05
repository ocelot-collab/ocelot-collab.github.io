---
sidebar_position: 2
title: Ocelot Coordinate System
description: Introduction to Ocelot basics
---

# Ocelot Coordinate System

The coordinate system in Ocelot follows these conventions:

$$ 
\left (x, \quad x' = \frac{p_x}{p_0} \right), \qquad \left (y, \quad y' = \frac{p_y}{p_0} \right), \qquad \left (\tau = c\Delta t, \quad p = \frac{\Delta E}{p_0 c} \right)
$$

### Definitions
- $\tau = c t - \frac{s}{\beta_0}$: Longitudinal coordinate of the particle. 
- $\beta_0=\frac{v_0}{c}$: normalized velocity.
- $s$: Independent variable representing the distance along the beamline (i.e., the path length of the reference particle).
- $v_0$ and $p_0$: Velocity and momentum of the reference particle, respectively.
- $t$: Time at which a particle reaches position $s$ along the beamline.

#### For the reference particle:
- $\tau = 0$ for all $s$.

#### For other particles:
- $\tau < 0$: The particle arrives earlier than the reference particle.
- $\tau > 0$: The particle arrives later than the reference particle.

#### Energy relation:
- $\Delta E = E - E_0$, where $E = \gamma m_0 c^2$ is the total energy of the particle.

:::info
The Ocelot coordinate system is not canonical. For a canonical system, the sign of the $\tau$ coordinate must be reversed. 
In that case, the system becomes identical to the [MAD coordinate system](https://mad8.web.cern.ch/doc/phys_guide.pdf).
:::