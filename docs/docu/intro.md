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


## Ocelot installation
<a id='installation'></a>

### Requirements
-  Python 3.9+
- [`numpy`](https://numpy.org/) version 1.8 or higher
- [`scipy`](https://scipy.org/) version 0.15 or higher
- [`matplotlib`](https://matplotlib.org/) version 1.5 or higher
- [`h5py`](https://www.h5py.org/) version 3.10 or higher

**Optional**, but highly recommended for speeding up calculations

- [`numexpr`](https://numexpr.readthedocs.io/en/latest/user_guide.html) (version 2.6.1 or higher)
- [`pyfftw`](https://pyfftw.readthedocs.io/en/latest/) (version 0.10 or higher)
- [`numba`](https://numba.pydata.org/)

**Orbit Correction module is required**
- [`pandas`](https://pandas.pydata.org/)

### Installation
#### GitHub (for advanced python users)
Clone OCELOT from GitHub:
```
$ git clone https://github.com/ocelot-collab/ocelot.git
```
or download last release [zip file](https://github.com/ocelot-collab/ocelot/archive/refs/heads/master.zip).
Now you can install OCELOT from the source:
```
$ python setup.py install
```

#### Anaconda Cloud
The easiest way to install OCELOT is to use Anaconda cloud. In that case use command:
 ```
 $ conda install -c ocelot-collab ocelot
 ``` 

#### PythonPath
Another way is download ocelot from [GitHub](https://github.com/ocelot-collab/ocelot)
1. you have to download from GitHub [zip file](https://github.com/ocelot-collab/ocelot/archive/master.zip).
2. Unzip ocelot-master.zip to your working folder **/your_working_dir/**.
3. Add **../your_working_dir/ocelot-master** to PYTHONPATH
    - **Windows 7:** go to Control Panel -> System and Security -> System -> Advance System Settings -> Environment Variables.
    and in User variables add **/your_working_dir/ocelot-master/** to PYTHONPATH. If variable PYTHONPATH does not exist, create it

    Variable name: PYTHONPATH

    Variable value: ../your_working_dir/ocelot-master/
    - Linux:
    ```
    $ export PYTHONPATH=/your_working_dir/ocelot-master:$PYTHONPATH
    ```

## Disclaimer: 
The OCELOT code comes with absolutely NO warranty. The authors of the OCELOT do not take any responsibility for any damage to equipments or personnel injury that may result from the use of the code.

