---
sidebar_position: 3
title: 3. Space Charge
---
<small>
This notebook was created by Sergey Tomin (sergey.tomin@desy.de). January 2018.
</small>

# [3. Space Charge.](https://github.com/ocelot-collab/ocelot/blob/dev/demos/ipython_tutorials/3_space_charge.ipynb)

*Second-order tracking with space charge effects using 200,000 particles.*

In this example, we demonstrate how to simulate space charge effects using a converted lattice of the **European XFEL Injector** in Ocelot format.

The space charge forces are calculated by solving the Poisson equation in the bunch frame. 
Then the Lorentz transformed electromagnetic field is applied as a kick in the laboratory frame.
For the solution of the Poisson equation we use an integral representation of the electrostatic potential by convolution of the free-space Green's function with the charge distribution. The convolution equation is solved with the help of the Fast Fourier Transform (FFT). 
A similar algorithm is used in external codes like [ASTRA](http://www.desy.de/~mpyflo/).

---

### This tutorial covers:

- Initialization and placement of [`SpaceCharge`](https://www.ocelot-collab.com/docs/docu/physics-processes/sc/) physics processes in the lattice ([`MagneticLattice`](https://www.ocelot-collab.com/docs/docu/OCELOT%20fundamentals/magnet-lattice/))
- Second-order beam [`tracking`](https://www.ocelot-collab.com/docs/tutorial/tutorial-beam-dynamics/tracking/) with 3D space charge effect
- Usage of the [`Navigator`](https://www.ocelot-collab.com/docs/docu/OCELOT%20fundamentals/navigator/) class

---

### Requirements

- `injector_lattice.py`: Lattice file of the European XFEL Injector (converted to Ocelot format)
- `beam_6MeV.ast`: Initial beam distribution in ASTRA format (from an s2e simulation with ASTRA)
## Import of modules


```python
# the output of plotting commands is displayed inline within frontends, 
# directly below the code cell that produced it
%matplotlib inline

from time import time 

# this python library provides generic shallow (copy) 
# and deep copy (deepcopy) operations 
from copy import deepcopy

# import from Ocelot main modules and functions
from ocelot import *

# import from Ocelot graphical modules
from ocelot.gui.accelerator import *

# import injector lattice
from injector_lattice import *

# load beam distribution
# this function convert Astra beam distribution to Ocelot format 
# - ParticleArray. ParticleArray is designed for tracking.
# In order to work with converters we have to import specific 
# module from ocelot.adaptors.
from ocelot.adaptors.astra2ocelot import *
```
```python
    initializing ocelot...
```

### Change RF parameters for the comparison with ASTRA


```python
phi1=18.7268
V1=18.50662e-3/np.cos(phi1*pi/180)

C_A1_1_1_I1.v = V1; C_A1_1_1_I1.phi = phi1
C_A1_1_2_I1.v = V1; C_A1_1_2_I1.phi = phi1
C_A1_1_3_I1.v = V1; C_A1_1_3_I1.phi = phi1
C_A1_1_4_I1.v = V1; C_A1_1_4_I1.phi = phi1
C_A1_1_5_I1.v = V1; C_A1_1_5_I1.phi = phi1
C_A1_1_6_I1.v = V1; C_A1_1_6_I1.phi = phi1
C_A1_1_7_I1.v = V1; C_A1_1_7_I1.phi = phi1
C_A1_1_8_I1.v = V1; C_A1_1_8_I1.phi = phi1

phi13=180
V13=-20.2E-3/8/np.cos(phi13*pi/180)

C3_AH1_1_1_I1.v=V13; C3_AH1_1_1_I1.phi=phi13
C3_AH1_1_2_I1.v=V13; C3_AH1_1_2_I1.phi=phi13
C3_AH1_1_3_I1.v=V13; C3_AH1_1_3_I1.phi=phi13
C3_AH1_1_4_I1.v=V13; C3_AH1_1_4_I1.phi=phi13
C3_AH1_1_5_I1.v=V13; C3_AH1_1_5_I1.phi=phi13
C3_AH1_1_6_I1.v=V13; C3_AH1_1_6_I1.phi=phi13
C3_AH1_1_7_I1.v=V13; C3_AH1_1_7_I1.phi=phi13
C3_AH1_1_8_I1.v=V13; C3_AH1_1_8_I1.phi=phi13
```


```python
# load and convert ASTRA file to OCELOT beam distribution
# p_array_init = astraBeam2particleArray(filename='beam_6MeV.ast')

# save ParticleArray to compresssed numpy array 
# save_particle_array("sc_beam.npz", p_array_init)
p_array_init = load_particle_array("sc_beam.npz")


bins_start, hist_start = get_current(p_array_init, num_bins=200)

plt.title("current: end")
plt.plot(bins_start*1000, hist_start)
plt.xlabel("s, mm")
plt.ylabel("I, A")
plt.grid(True)
plt.show()
```


    
![png](/img/3_space_charge_files/3_space_charge_6_0.png)
    



```python
# initialization of tracking method, for second order tracking we have to choose SecondTM 
method = {"global": SecondTM}

# for first order tracking uncomment next line
# method = {"global": TransferMap}

# we will start simulation from point 3.2 from the gun. 
# For this purpose  marker was created (start_sim=Marker()) 
# and placed in 3.2 m after gun 
# Q_38_I1 is quadrupole between RF cavities 1.3 GHz and 3.9 GHz
# C3_AH1_1_8_I1 is the last section of the 3.9 GHz cavity
lat = MagneticLattice(cell, start=start_sim, stop=Q_38_I1, method=method)
```

## Initializing SpaceCharge

More information about the Space Charge physics process can be found here:  
👉 [**Space Charge in Ocelot**](https://www.ocelot-collab.com/docs/docu/physics-processes/sc)


```python
# Initialize SpaceCharge processes with different application steps
sc1 = SpaceCharge(ste=1) # Applied every 1 * Navigator.unit_step 
sc1.nmesh_xyz = [63, 63, 63] # SC mesh

# we can increase step with energy grow and this speed up our tracking
sc5 = SpaceCharge(step=5) # Applied every 5 * Navigator.unit_step 
sc5.nmesh_xyz = [63, 63, 63] 
```
To apply any physics process, it must be registered through a [`Navigator`](https://www.ocelot-collab.com/docs/docu/OCELOT%20fundamentals/navigator), which is then passed to the [`track`](https://www.ocelot-collab.com/docs/docu/OCELOT%20fundamentals/tracking) function.

```python
# Create Navigator to manage application of physics processes
navi = Navigator(lat)

# add physics processes from the first element to the last of the lattice
navi.add_physics_proc(sc1, lat.sequence[0], C_A1_1_2_I1)
navi.add_physics_proc(sc5, C_A1_1_2_I1, lat.sequence[-1])

# definiing of unit step in [m]
navi.unit_step = 0.02

# deep copy of the initial beam distribution 
p_array = deepcopy(p_array_init)
start = time()
tws_track, p_array = track(lat, p_array, navi)

print("time exec: ", time() - start, "sec")
```
```python
    z = 12.697400000000002 / 12.697400000000007. Applied: time exec:  18.347124099731445 sec
```


```python
# you can change top_plot argument, for example top_plot=["alpha_x", "alpha_y"]
plot_opt_func(lat, tws_track, top_plot=["E"], fig_name=0, legend=False)
plt.show()
```


    
![png](/img/3_space_charge_files/3_space_charge_11_0.png)
    


# Comparison with ASTRA
Beam tracking with ASTRA was performed by Igor Zagorodnov (DESY). 


```python
sa, bx_sc, by_sc, bx_wo_sc, by_wo_sc = np.loadtxt("astra_sim.txt", 
                                                  usecols=(0, 1, 2, 3, 4), 
                                                  unpack=True)

s = [tw.s for tw in tws_track]
bx = [tw.beta_x for tw in tws_track]
by = [tw.beta_y for tw in tws_track]
fig, ax = plot_API(lat, legend=False)
ax.plot(s, bx, "r", label="Ocelot, bx")
ax.plot(sa-3.2, bx_sc, "b-",label="ASTRA, bx")
ax.plot(s, by, "r", label="Ocelot, by")
ax.plot(sa-3.2, by_sc, "b-",label="ASTRA, by")
ax.legend()
plt.show()
```


    
![png](/img/3_space_charge_files/3_space_charge_13_0.png)
    



```python
plt.plot(p_array.tau(), p_array.p(), 'r.')
plt.show()
```


    
![png](/img/3_space_charge_files/3_space_charge_14_0.png)
