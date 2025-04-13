---
sidebar_position: 15
title: 15. OCELOT for students
description: Build intuition
---
<small>
*This notebook was created by Sergey Tomin (sergey.tomin@desy.de). April 2025.*
</small>

# [Ocelot for Students](https://github.com/ocelot-collab/ocelot/blob/dev/demos/ipython_tutorials/interactive_beamline.ipynb)

This [tutorial](https://github.com/ocelot-collab/ocelot/blob/dev/demos/ipython_tutorials/interactive_beamline.ipynb) is aimed at students and beginners in accelerator physics.  
The idea is to keep it simple and interactive, helping you build intuition about how magnetic elements work.

---

## Duplet

We’ll start with a basic beamline: a Drift and two Quadrupoles (focusing and defocusing).

First, import the necessary modules:
```python
from ocelot import *
from ocelot.gui import *
from ipywidgets import interact, FloatSlider
import copy
```
💡 **Tip:** If you don’t have `ipywidgets`, run:
```bash
pip install ipywidgets
```
---

## Create a Simple Lattice
```python
d = Drift(l=1.)
qf = Quadrupole(l=0.2, k1=1)
qd = Quadrupole(l=0.2, k1=-1)
cell = [d, qf, d, qd, d]

lat = MagneticLattice(cell)
```
---

## Plot Beta Functions

Here we define a function to calculate and display the beta functions.  
You can interactively change the quadrupole strengths to see how the optics evolve.
```python
def plot_betas(qf_k1=1.0, qd_k1=-1.0):
    qf.k1 = qf_k1
    qd.k1 = qd_k1

    tws0 = Twiss(beta_x=10, beta_y=10, alpha_x=0, alpha_y=0)
    tws = twiss(lat, tws0, nPoints=20)

    sb = [tw.s for tw in tws]
    bx = [tw.beta_x for tw in tws]
    by = [tw.beta_y for tw in tws]

    fig, ax_xy = plot_API(lat, fig_name="Beta-functions", legend=False)
    ax_xy.plot(sb, bx, "C1", label=r"$\beta_x$")
    ax_xy.plot(sb, by, "C2", label=r"$\beta_y$")
    ax_xy.set_ylabel(r"$\beta_{x,y}$ [m]")
    ax_xy.set_xlabel("S [m]")
    ax_xy.legend()
    plt.show()
```
Interactive widget:
```python
# Create interactive sliders for the parameters
interact(
    plot_betas,
    qf_k1=FloatSlider(min=-20, max=20, step=0.1, value=1.0),
    qd_k1=FloatSlider(min=-20, max=20, step=0.1, value=-1.0),
)
```
![png](/img/for_students/betas.png)
---

## Visualize Transverse Beam Dynamics

Let’s now visualize how particles with small transverse offsets propagate through the lattice.
```python
def plot_beam(qf_k1=1.0, qd_k1=-1.0):
    qf.k1 = qf_k1
    qd.k1 = qd_k1

    x_coors = np.linspace(-0.01, 0.01, num=10)
    y_coors = np.linspace(-0.01, 0.01, num=10)

    p_list = [Particle(x=x, y=y) for x, y in zip(x_coors, y_coors)]
    P = [copy.deepcopy(p_list)]
    navi = Navigator(lat)
    dz = 0.01

    for _ in range(int(lat.totalLen / dz)):
        tracking_step(lat, p_list, dz=dz, navi=navi)
        P.append(copy.deepcopy(p_list))

    fig, (ax_x, ax_y) = plt.subplots(2, 1, figsize=(10, 6), sharex=True)
    fig.suptitle("Particle Trajectories with Transverse Offsets")

    for i in range(len(p_list)):
        s = [p[i].s for p in P]
        x = [p[i].x for p in P]
        y = [p[i].y for p in P]
        ax_x.plot(s, x, "C0")
        ax_y.plot(s, y, "C1")

    ax_x.set_ylabel("X [m]")
    ax_y.set_ylabel("Y [m]")
    ax_y.set_xlabel("S [m]")
    ax_x.grid(True)
    ax_y.grid(True)
    plt.tight_layout(rect=[0, 0.03, 1, 0.95])
    plt.show()
```
Add the interactive widget:
```python
# Create interactive sliders for the parameters
interact(
    plot_beam,
    qf_k1=FloatSlider(min=-20, max=20, step=0.1, value=1.0),
    qd_k1=FloatSlider(min=-20, max=20, step=0.1, value=-1.0),
)
```
![png](/img/for_students/traj.png)
---

## Bending Magnet: Dispersion Example

A quick look at how horizontal position depends on momentum deviation — the concept of dispersion.

### Lattice with a Dipole
```python
d = Drift(l=1)
b = Bend(l=0.5, angle=5/180*np.pi)
cell = [d, b, d]
lat2 = MagneticLattice(cell)
```
### Dispersion Visualization
```python
def plot_beam_dipole(angle=0.01, dip_l=0.5):
    b.angle = angle * np.pi / 180
    b.l = dip_l
    print(f"Lattice length: {lat2.totalLen:.2f} m")

    p_coors = np.linspace(-0.01, 0.01, num=10)
    p_list = [Particle(x=0, y=0, p=p, E=1) for p in p_coors]
    P = [copy.deepcopy(p_list)]

    navi = Navigator(lat2)
    dz = 0.01

    for _ in range(int(lat2.totalLen / dz)):
        tracking_step(lat2, p_list, dz=dz, navi=navi)
        P.append(copy.deepcopy(p_list))

    fig, (ax_x, ax_p) = plt.subplots(2, 1, figsize=(10, 6), sharex=True)
    fig.suptitle("Effect of Dispersion in a Dipole Magnet")

    for i in range(len(p_list)):
        s = [p[i].s for p in P]
        x = [p[i].x for p in P]
        p_vals = [p[i].p for p in P]

        ax_x.plot(s, x)
        ax_p.plot(s, p_vals, "C0")

    ax_x.set_ylabel("X [m]")
    ax_p.set_ylabel("Relative Momentum p")
    ax_p.set_xlabel("S [m]")
    ax_x.set_ylim([-0.0025, 0.0025])
    ax_x.grid(True)
    ax_p.grid(True)
    plt.tight_layout(rect=[0, 0.03, 1, 0.95])
    plt.show()
```
Widget:
```python
# Create interactive sliders for the parameters
interact(
    plot_beam_dipole,
    angle=FloatSlider(min=-10, max=10, step=0.05, value=1.0),
    dip_l=FloatSlider(min=0, max=2, step=0.1, value=1),
)
```
![png](/img/for_students/p.png)