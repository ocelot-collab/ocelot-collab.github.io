---
sidebar_position: 1
title: Introduction
---
<small>
*Sergey Tomin (sergey.tomin@desy.de). January 2025.*
</small>


# An Introduction to Ocelot

Ocelot is a multiphysics simulation toolkit designed for studying Free Electron Lasers (FEL) and storage ring-based light sources. Implemented in Python, Ocelot caters to researchers seeking the flexibility provided by high-level languages like Matlab and Python. Its core principle revolves around scripting beam physics simulations in Python, utilizing Ocelot's modules and extensive collection of Python libraries.

Users developing high-level control applications can accelerate development by using physics models from Ocelot and Python graphics libraries such as [PyQt](http://pyqt.sourceforge.net/Docs/PyQt5/) and [PyQtGraph](http://www.pyqtgraph.org/) to create a GUI. 

Developing machine learning (ML) applications for accelerators can also benefit from using Ocelot, as many popular ML frameworks are written in Python. Ocelot provides a seamless connection between physics and ML methods, making it easier to integrate physical accelerator simulators with machine learning algorithms.

:::warning
Documentation was generated automatically with the help of ChatGPT and has **not** yet been thoroughly reviewed or fully completed. 
The **best** and most **reliable** way to understand **Ocelot** remains reading the source code and docstrings for its functions and classes. 
Over time, we will continue to improve this documentation.
:::


## Requirements
-  Python 3.9+
- [`numpy`](https://numpy.org/) version 1.8 or higher
- [`scipy`](https://scipy.org/) version 0.15 or higher
- [`matplotlib`](https://matplotlib.org/) version 1.5 or higher
- [`h5py`](https://www.h5py.org/) version 3.10 or higher

**Orbit Correction module is required**
- [`pandas`](https://pandas.pydata.org/)

**Optional**, but highly recommended for speeding up calculations
- [`numexpr`](https://numexpr.readthedocs.io/en/latest/user_guide.html) (version 2.6.1 or higher)
- [`pyfftw`](https://pyfftw.readthedocs.io/en/latest/) (version 0.10 or higher)
- [`numba`](https://numba.pydata.org/)


## Installation

### 1. Install via Anaconda Cloud

The easiest way to install OCELOT is through Anaconda Cloud. Use the following command:

```bash
$ conda install -c ocelot-collab ocelot
```

### 2. Install from GitHub (for advanced users)
If you’re comfortable with Git and Python, you can clone OCELOT from GitHub:
```
$ git clone https://github.com/ocelot-collab/ocelot.git
```
Alternatively, you can download the latest release as a [zip file](https://github.com/ocelot-collab/ocelot/archive/refs/heads/master.zip).

To install OCELOT from source:
```
$ python setup.py install
```

### 3. Install by Setting the Python Path

If you'd like to manually install OCELOT, follow these steps:

1. Download the [ZIP file](https://github.com/ocelot-collab/ocelot/archive/master.zip) from GitHub.
2. Unzip the file `ocelot-master.zip` to your working directory, e.g., `/your_working_dir/`.
3. Add the directory `../your_working_dir/ocelot-master` to your `PYTHONPATH`:

    - **Windows:**
        1. Go to **Control Panel** → **System and Security** → **System** → **Advanced System Settings** → **Environment Variables**.
        2. Under **User variables**, add `../your_working_dir/ocelot-master/` to `PYTHONPATH`. If `PYTHONPATH` does not exist, create it.

        **Variable name:** `PYTHONPATH`

        **Variable value:** `../your_working_dir/ocelot-master/`

    - **Linux/macOS:**

    ```bash
    $ export PYTHONPATH=/your_working_dir/ocelot-master:$PYTHONPATH
    ```

# Getting Started: Simplest Accelerator Structure

## Importing Ocelot Modules

The easiest way to import Ocelot is by using:

```python
from ocelot import *
```
```python
    initializing ocelot...
```

## Creating a Simple Lattice

Ocelot’s element syntax is similar to MAD8. Below, we create a simple lattice using quadrupoles, drift spaces, 
and a bending magnet (Bend). A beamline is simply a sequence of elements arranged in the correct order:

```python
d = Drift(l=1)
qf = Quadrupole(l=0.3, k1=1)
qd = Quadrupole(l=0.3, k1=-1)
b = Bend(l=0.5, angle=0.1)
m1 = Marker(eid="start")
m2 = Marker(eid="stop")

cell = (m1, d, qf, d, qd, d, b,  d, qd, d, qf, d, m2)
```

The element sequence is then inserted into a MagneticLattice object, which acts as an abstraction layer between 
the sequence and other Ocelot functions, adding useful functionalities:


```python
lat = MagneticLattice(cell)
print(f"total length {lat.totalLen}")
```
```python
    total length 7.699999999999999
```

## Calculating Twiss Parameters

Twiss parameters can be calculated using the twiss() function. If initial Twiss parameters are not provided, 
the function will attempt to find a periodic solution:


```python
tws = twiss(lat)
```

The twiss function returns a list of Twiss objects, each containing various beam parameters. 
To display key parameters of the first Twiss object:


```python
print(tws[0])
```
```python
    emit_x  = 0.0
    emit_y  = 0.0
    beta_x  = 9.449063560593697
    beta_y  = 3.6255987161054097
    alpha_x = -1.4029614496300944e-16
    alpha_y = -2.4207554851521635e-16
    gamma_x = 0.10583059300927898
    gamma_y = 0.27581651426504045
    Dx      = 0.4431890150023444
    Dy      = 0.0
    Dxp     = 4.152686605616285e-17
    Dyp     = 0.0
    mux     = 0.0
    muy     = 0.0
    nu_x    = 0.0
    nu_y    = 0.0
    E       = 0.0
    s        = 0.0
```


## Plotting Twiss Parameters

Twiss parameters can be plotted using matplotlib or Ocelot a built-in function. It requires to import the graphical module separately.

*This separation was implemented to decouple graphical libraries from calculations, which was necessary due to limitations in older computing clusters.*


```python
from ocelot.gui import *
plot_opt_func(lat, tws)
plt.show()
```

![png](/img/docu-intro/simplest-ocelot_12_0.png)
    

## Specifying Initial Twiss Parameters

If known, initial Twiss parameters can be passed as an argument tws0:


```python
tws0 = Twiss(beta_x = 10, beta_y=5, Dx=0.1)
tws = twiss(lat, tws0=tws0)

plot_opt_func(lat, tws)
plt.show()
```
    
![png](/img/docu-intro/simplest-ocelot_14_0.png)
    
More examples can be found in [Tutorials](../tutorial/intro.md)

## Disclaimer: 
The OCELOT code comes with absolutely NO warranty. The authors of the OCELOT do not take any responsibility 
for any damage to equipments or personnel injury that may result from the use of the code.

