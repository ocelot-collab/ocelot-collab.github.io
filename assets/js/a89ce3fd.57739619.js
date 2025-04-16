"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[806],{6460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"tutorial/tutorial-beam-dynamics/lattice_design","title":"7. Lattice Design","description":"This notebook was created by Sergey Tomin (sergey.tomin@desy.de) who was inspired by questions from E.R. June 2017.","source":"@site/docs/tutorial/tutorial-beam-dynamics/7_lattice_design.md","sourceDirName":"tutorial/tutorial-beam-dynamics","slug":"/tutorial/tutorial-beam-dynamics/lattice_design","permalink":"/docs/tutorial/tutorial-beam-dynamics/lattice_design","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot-collab.github.io/tree/main/docs/tutorial/tutorial-beam-dynamics/7_lattice_design.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"7. Lattice Design"},"sidebar":"tutorialSidebar","previous":{"title":"6. Coupler Kick","permalink":"/docs/tutorial/tutorial-beam-dynamics/coupler_kick"},"next":{"title":"8. Laser Heater","permalink":"/docs/tutorial/tutorial-beam-dynamics/laser_heater"}}');var s=t(4848),a=t(8453);const l={sidebar_position:7,title:"7. Lattice Design"},c="7. Lattice Design",o={},r=[{value:"Lattice design. Matching. Twiss back tracking.",id:"lattice-design-matching-twiss-back-tracking",level:2},{value:"Outline",id:"outline",level:3},{value:"Introduction",id:"introduction",level:3},{value:"Optics design and matching",id:"optics-design-and-matching",level:4},{value:"Step 1. FODO lattice matching",id:"step-1-fodo-lattice-matching",level:2},{value:"Design the simplest FODO lattice",id:"design-the-simplest-fodo-lattice",level:3},{value:"Periodic solution for FODO lattice",id:"periodic-solution-for-fodo-lattice",level:3},{value:"Matching",id:"matching",level:3},{value:"Step 2. Chicanes.",id:"step-2-chicanes",level:2},{value:"Chicane parameters",id:"chicane-parameters",level:4},{value:"Backtracking though chicanes.",id:"backtracking-though-chicanes",level:3},{value:"Step 3.  Matching section",id:"step-3--matching-section",level:2},{value:"Matching",id:"matching-1",level:4},{value:"FINAL Lattice",id:"final-lattice",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("small",{children:(0,s.jsxs)(n.p,{children:["This notebook was created by Sergey Tomin (",(0,s.jsx)(n.a,{href:"mailto:sergey.tomin@desy.de",children:"sergey.tomin@desy.de"}),") who was inspired by questions from E.R. June 2017."]})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"7-lattice-design",children:(0,s.jsx)(n.a,{href:"https://github.com/ocelot-collab/ocelot/blob/dev/demos/ipython_tutorials/7_lattice_design.ipynb",children:"7. Lattice Design"})})}),"\n",(0,s.jsx)(n.h2,{id:"lattice-design-matching-twiss-back-tracking",children:"Lattice design. Matching. Twiss back tracking."}),"\n",(0,s.jsx)(n.h3,{id:"outline",children:"Outline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FODO lattice (undulator section) with desiring max and min twiss parameters."}),"\n",(0,s.jsx)(n.li,{children:"Back tracking through chicanes"}),"\n",(0,s.jsx)(n.li,{children:"Matching of twiss parameters in matching sections"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial we are going to design the simplest FEL lattice for external seeding option.\nThe desire lattice is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"matching section - modulator - chicane - modulator - chicane - FODO."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"FODO in that case is undulator section:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"undulator - QF - undulator - QD - undulator - QF - ...."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"where QF, QD - focusing and defocusing quadrupoles."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"And suppose we know"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"max and min values for the betas in the undulator section."}),"\n",(0,s.jsx)(n.li,{children:"chicanes geometry and parameters are defined."}),"\n",(0,s.jsx)(n.li,{children:"twiss parameters on the entrance of the matching section."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We can solve this task in many ways (and even more simply), ",(0,s.jsx)(n.em,{children:"but to cover all topics we will do it in a few steps"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"the matching of twiss parameters in FODO lattice to find desired amplitudes of the beta functions."}),"\n",(0,s.jsxs)(n.li,{children:["back tracking of the beta through ",(0,s.jsx)(n.em,{children:"modulator - chicane - modulator - chicane"})]}),"\n",(0,s.jsx)(n.li,{children:"matching quadrupoles in the matching section"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"optics-design-and-matching",children:"Optics design and matching"}),"\n",(0,s.jsx)(n.p,{children:"Optics design is the art (still) and a few people in the world can do really good design (and author of this notebook is not one of them (so far :))."}),"\n",(0,s.jsx)(n.p,{children:"The matching techniques barely help you if your initial geometry or initial conditions are poor. In this example, we are not aiming to make a good design but just show an example of usage some matching functions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# the output of plotting commands is displayed inline within \n# frontends, directly below the code cell that produced it.\n%matplotlib inline\n\nfrom time import time \n\n# this python library provides generic shallow (copy) \n# and deep copy (deepcopy) operations \nfrom copy import deepcopy\n\n# import from Ocelot main modules and functions\nfrom ocelot import *\n\n# import from Ocelot graphical modules\nfrom ocelot.gui.accelerator import *\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"    initializing ocelot...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"step-1-fodo-lattice-matching",children:"Step 1. FODO lattice matching"}),"\n",(0,s.jsx)(n.h3,{id:"design-the-simplest-fodo-lattice",children:"Design the simplest FODO lattice"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# example of the FODO\nU = Undulator(nperiods=50, lperiod=0.04, Kx=1)\nD = Drift(l=0.5)\nQF = Quadrupole(l=0.25, k1=1)\nQD = Quadrupole(l=0.25, k1=-1)\n\nM1 = Marker()\ncell = (M1, QF, D, U, D, QD, QD, D, U, D, QF)\n\n# suppose we have 5 cells or 10 undulators\nfodo = cell*5\n"})}),"\n",(0,s.jsx)(n.h3,{id:"periodic-solution-for-fodo-lattice",children:"Periodic solution for FODO lattice"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In the most cases to find twiss periodical solution we do not need to put the initial conditions and we can use following command to calculate twiss parameters:\n",(0,s.jsx)(n.strong,{children:"tws = twiss(lat)"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"BUT"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To take into account undulator vertical focusing effect we have to define the energy of the electron beam. and in that case we have to define initial condition like that:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# create MagneticLattice object\nlat_fodo = MagneticLattice(fodo)\n\ntws0 = Twiss()\n# by default the all parameters are zero and \n# that what we need to force the twiss function \n# to calculate periodic solution\n\n# print(tws0)\n\n# And we need to define the beam energy\ntws0.E = 1 # GeV\n\ntws = twiss(lat_fodo, tws0=tws0)\n\nplot_opt_func(lat_fodo, tws, legend=False)\nplt.show()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:t(6729).A+"",width:"658",height:"487"})}),"\n",(0,s.jsx)(n.h3,{id:"matching",children:"Matching"}),"\n",(0,s.jsx)(n.p,{children:"In Ocelot there is function match() to perform some standard matching procedures."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def match(lat, constr, vars, tw):\n    ...\n    return res\n"})}),"\n",(0,s.jsx)(n.p,{children:"where"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lat"}),": MagneticLattice"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"constr"}),": dictionary, constrains. Example:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["'periodic'",":True",' - means the "match" function tries to find periodic solution at the ends of lattice:']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"constr = {elem1:{'beta_x':15, 'beta_y':2}, 'periodic':True}"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'"hard" constrains on the end of elements (elem1, elem2):'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"constr = {elem1:{'alpha_x':5, 'beta_y':5}, elem2:{'Dx':0 'Dyp':0, 'alpha_x':5, 'beta_y':5}}"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'or mixture of "soft" and hard constrains:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"constr = {elem1:{'alpha_x':[\">\", 5], 'beta_y':5}, elem2:{'Dx':0 'Dyp':0, 'alpha_x':5, 'beta_y':[\">\", 5]}}"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"in case one needs global control on beta function, the constrains can be written following way."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"constr = {elem1:{'alpha_x':5, 'beta_y':5}, 'global': {'beta_x': ['>', 10]}}"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vars"}),": list of elements which will be varied during optimization, e.g. vars = [QF, QD]"]}),"\n",(0,s.jsx)(n.p,{children:"can be"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Quadrupole (vary strength 'k1'),"}),"\n",(0,s.jsx)(n.li,{children:"SBend, RBend, Bend (by default vary 'k1' but can be \"angle\"),"}),"\n",(0,s.jsx)(n.li,{children:'Solenoid (vary strength "k"),'}),"\n",(0,s.jsx)(n.li,{children:'Drift (vary length "l")'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"tw"}),": Twiss(), initial Twiss"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Optional arguments:"})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verbose"}),": True, allow print output of minimization procedure"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max_iter"}),": 1000, number of iterations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"method"}),": string, available 'simplex', 'cg', 'bfgs'"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"weights"}),": function returns weights, for example","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python"})}),"\n"]}),"\n"]}),"\n","def weights_default(val):\nif val == 'periodic': return 10000001.0\nif val == 'total_len': return 10000001.0\nif val in ['Dx', 'Dy', 'Dxp', 'Dyp']: return 10000002.0\nif val in ['alpha_x', 'alpha_y']: return 100007.0\nif val in ['mux', 'muy']: return 10000006.0\nif val in ['beta_x', 'beta_y']: return 100007.0\nreturn 0.0001","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"vary_bend_angle"}),': False, allow to vary "angle" of the dipoles instead of the focusing strength "k1"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"min_i5"}),": False, minimization of the radiation integral I5. Can be useful for storage rings optimizations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"return"})," result"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# constrains\nconstr = {M1:{'beta_x':15, 'beta_y':2}, 'periodic':True}\n\n# variables\nvars = [QF, QD]\n\n# initial condition for twiss\ntw0=tws[-1]\n\nmatch(lat_fodo, constr, vars, tw0, verbose=False)\n\n# results \nprint(\"QF.k1 = \", QF.k1)\nprint(\"QD.k1 = \", QD.k1)\n\n\ntws0=Twiss()\ntws0.E = 1 # GeV\n\ntws = twiss(lat_fodo, tws0=tws0)\n\n# let's variable *tws_fodo* will be the twiss \n# parameters on the FODO entrance \ntws_fodo = tws[-1]\n\nplot_opt_func(lat_fodo, tws, legend=False)\nplt.show()\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"    initial value: x =  [1, -1]\n    Optimization terminated successfully.\n             Current function value: 0.000017\n             Iterations: 42\n             Function evaluations: 82\n    QF.k1 =  1.071039959675296\n    QD.k1 =  -0.8579474979724729\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:t(6309).A+"",width:"658",height:"487"})}),"\n",(0,s.jsx)(n.h2,{id:"step-2-chicanes",children:"Step 2. Chicanes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# undulator + chicane + undulator + chicane\nmodulator = Undulator(nperiods=10, lperiod=0.1, Kx = 2)\n\n# Chicane from CSR example with small modifications \n\nb1 = Bend(l = 0.5, angle=-0.0336, e1=0.0, e2=-0.0336, gap=0, tilt=0, eid='BB.393.B2')\nb2 = Bend(l = 0.5, angle=0.0336, e1=0.0336, e2=0.0, gap=0, tilt=0,  eid='BB.402.B2')\nb3 = Bend(l = 0.5, angle=0.0336, e1=0.0, e2=0.0336, gap=0, tilt=0, eid='BB.404.B2')\nb4 = Bend(l = 0.5, angle=-0.0336, e1=-0.0336, e2=0.0, gap=0, tilt=0, eid='BB.413.B2')\n\nd = Drift(l=1.5/np.cos(b2.angle))\n\nstart_csr = Marker()\nstop_csr = Marker()\n\n# define chicane frome the bends and drifts\nchicane = [start_csr, Drift(l=1), b1, d, b2, \n           Drift(l=1.5), b3, d, b4, Drift(l= 1.), stop_csr]\n\n\n# For sake of buity add randomly couple of the quadrupoles\n\nD1 = Drift(l=0.5)\necho = (D1, QF, D1, modulator, D1, QD, chicane,  QF, D1, modulator,D1, QD, chicane)\n\n"})}),"\n",(0,s.jsx)(n.h4,{id:"chicane-parameters",children:"Chicane parameters"}),"\n",(0,s.jsx)(n.p,{children:"For example, one wants to know R56 of the whole chicane. It can be easily calculated"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'lat_chic = MagneticLattice(chicane)\n# in that case energy is not important we do not have \n# energy dependant elements here\nR = lattice_transfer_map(lat_chic, energy=0)\nprint("R56 = ", R[4,5]*1000, "mm")\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"    R56 =  -4.1443249349333655 mm\n"})}),"\n",(0,s.jsx)(n.h3,{id:"backtracking-though-chicanes",children:"Backtracking though chicanes."}),"\n",(0,s.jsx)(n.p,{children:"We know twiss parameters on the entrance of the FODO\nbut for backtracking we need to"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"invert alphas"}),"\n",(0,s.jsx)(n.li,{children:"and invert the lattice (change the order of the element)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# inverting alphas\n\ntws2 = Twiss()\ntws2.alpha_x = -tws_fodo.alpha_x\ntws2.alpha_y = -tws_fodo.alpha_y\ntws2.beta_x = tws_fodo.beta_x\ntws2.beta_y = tws_fodo.beta_y\n\n# invert the lattice\necho_inv = echo[::-1]\nlat_echo_inv = MagneticLattice(echo_inv)\n\n# calculate twiss \ntws_echo = twiss(lat_echo_inv, tws0=tws2)\ntws_echo_inv_end = tws_echo[-1]\n\n# show the twiss parameters of INVERTED echo\nplot_opt_func(lat_echo_inv, tws_echo, legend=False)\nplt.show()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:t(4591).A+"",width:"658",height:"487"})}),"\n",(0,s.jsx)(n.p,{children:"So twiss parameters on the entrance of the echo lattice are:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# inverting alphas again is needed\ntws_e = Twiss()\ntws_e.beta_x = tws_echo_inv_end.beta_x\ntws_e.beta_y = tws_echo_inv_end.beta_y\ntws_e.alpha_x = -tws_echo_inv_end.alpha_x\ntws_e.alpha_y = -tws_echo_inv_end.alpha_y\n\nlat_echo_fodo = MagneticLattice((echo, fodo) )\n\ntws_all = twiss(lat_echo_fodo, tws_e)\n\nplot_opt_func(lat_echo_fodo, tws_all, legend=False)\nplt.show()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:t(417).A+"",width:"658",height:"487"})}),"\n",(0,s.jsx)(n.h2,{id:"step-3--matching-section",children:"Step 3.  Matching section"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Q1 = Quadrupole(l=0.3, k1=1)\nQ2 = Quadrupole(l=0.3, k1=1)\nQ3 = Quadrupole(l=0.3, k1=1)\nQ4 = Quadrupole(l=0.3, k1=1)\n\n\nm1 = Marker()\nm2 = Marker()\ndm = Drift(l=1.5)\nmatch_sec = (m1, dm, Q1, dm, Q2, dm, Q3, dm, Q4, dm, m2)\n\nlat_m = MagneticLattice(match_sec[::-1])\n"})}),"\n",(0,s.jsx)(n.h4,{id:"matching-1",children:"Matching"}),"\n",(0,s.jsx)(n.p,{children:"As it was mentioned above, matching will not give you desired values if your geometry of initial conditions are poor. Because our goal is not a good design but showing the concept of OCELOT usage, we choose very relax condition.\nTwiss parameters on the entrance of the matching section:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"beta_x = 5"}),"\n",(0,s.jsx)(n.li,{children:"beta_y = 5"}),"\n",(0,s.jsx)(n.li,{children:"alpha_x = not defined"}),"\n",(0,s.jsx)(n.li,{children:"alpha_y = not defined"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"the twiss parameters on the exit of matching section are defined by echo section"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# constrains\nconstr = {m1:{'beta_x':5, 'beta_y':5}, \n          m2:{'beta_x':tws_e.beta_x, 'beta_y':tws_e.beta_y, \n              'alpha_x': -tws_e.alpha_x, \"alpha_y\":-tws_e.alpha_y}}\n\n# variables\nvars = [Q1, Q2, Q3,Q4]\n\n# initial condition for twiss\n\nmatch(lat_m, constr, vars, tw0, verbose=False)\n\nfor i, q in enumerate(vars):\n    print(\"Q\"+str(i+1)+\".k1 = \", q.k1)\n\ntws0 = Twiss()\ntws0.beta_x = tws_e.beta_x\ntws0.beta_y = tws_e.beta_y\ntws0.alpha_x = -tws_e.alpha_x\ntws0.alpha_y = -tws_e.alpha_y\n\ntws = twiss(lat_m, tws0)\nplot_opt_func(lat_m, tws, legend=False)\nplt.show()\n\ntws0 = tws[-1]\ntws0.alpha_x = -tws[-1].alpha_x\ntws0.alpha_y = -tws[-1].alpha_y\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"    initial value: x =  [1, 1, 1, 1]\n    Optimization terminated successfully.\n             Current function value: 214917575.120251\n             Iterations: 106\n             Function evaluations: 197\n    Q1.k1 =  2.355853351631101\n    Q2.k1 =  -1.3155292135369026\n    Q3.k1 =  -0.9164603176527466\n    Q4.k1 =  1.332649679467849\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:t(4043).A+"",width:"647",height:"487"})}),"\n",(0,s.jsx)(n.h2,{id:"final-lattice",children:"FINAL Lattice"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"cell = (match_sec, echo, fodo)\n# fodo quadrupoles\n\nlat = MagneticLattice(cell)\n\ntws = twiss(lat, tws0)\nplot_opt_func(lat, tws, legend=False)\nplt.show()\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:t(5812).A+"",width:"658",height:"487"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4591:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/7_lattice_design_14_0-97d463fbbe4b2ba9ae5db00da1f0cbb2.png"},417:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/7_lattice_design_16_0-833311b9b84be6bf4a0202c4be50a4b8.png"},4043:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/7_lattice_design_20_1-9ec493fe3652a4e64211ca1a398246ed.png"},5812:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/7_lattice_design_22_0-eedc75f6e37fa1138efa3fbef0d45d5a.png"},6729:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/7_lattice_design_6_0-26e8cc651923a8512c807a1f69623f39.png"},6309:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/7_lattice_design_8_1-b05cebca62239dbff785f48d4fd438b5.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(6540);const s={},a=i.createContext(s);function l(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);