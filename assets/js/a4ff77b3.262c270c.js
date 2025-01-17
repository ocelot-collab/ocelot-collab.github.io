"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[9219],{456:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"docu/OCELOT fundamentals/intro","title":"Intro to OCELOT Structure","description":"Ocelot has a modular structure. Below is an overview of its structure and key modules:","source":"@site/docs/docu/OCELOT fundamentals/intro.md","sourceDirName":"docu/OCELOT fundamentals","slug":"/docu/OCELOT fundamentals/intro","permalink":"/docs/docu/OCELOT fundamentals/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot-collab.github.io/tree/main/docs/docu/OCELOT fundamentals/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Intro to OCELOT Structure"},"sidebar":"docsSidebar","previous":{"title":"OCELOT Fundamentals","permalink":"/docs/category/ocelot-fundamentals"},"next":{"title":"MagneticLattice","permalink":"/docs/docu/OCELOT fundamentals/magnet-lattice"}}');var r=i(4848),t=i(8453);const o={sidebar_position:1,title:"Intro to OCELOT Structure"},a="Introduction to Ocelot Structure",l={},c=[{value:"Charged Particle Beam Dynamics Module (CPBD)",id:"charged-particle-beam-dynamics-module-cpbd",level:2},{value:"Adaptors",id:"adaptors",level:2},{value:"Native Module for Spontaneous Radiation Calculation",id:"native-module-for-spontaneous-radiation-calculation",level:2},{value:"FEL Calculations",id:"fel-calculations",level:2},{value:"Modules for Online Beam Control and Optimization (migrated to separate repository)",id:"modules-for-online-beam-control-and-optimization-migrated-to-separate-repository",level:2},{value:"Technical Foundations",id:"technical-foundations",level:2},{value:"Examples and Tutorials",id:"examples-and-tutorials",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"introduction-to-ocelot-structure",children:"Introduction to Ocelot Structure"})}),"\n",(0,r.jsx)(n.p,{children:"Ocelot has a modular structure. Below is an overview of its structure and key modules:"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"charged-particle-beam-dynamics-module-cpbd",children:"Charged Particle Beam Dynamics Module (CPBD)"}),"\n",(0,r.jsx)(n.p,{children:"The CPBD module contains the following main components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/elements/intro",children:"Elements"})}),": Definitions of various beamline elements."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TransferMaps"}),": Mathematical transformations for beamline elements."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/magnet-lattice",children:"MagneticLattice"})}),": Class represents a magnetic lattice, which is a sequence of elements forming a beamline"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/navigator",children:"Navigator"})}),": Class for navigating through beamline lattices during tracking with ",(0,r.jsx)(n.code,{children:"PhysProc"})," (Physics Processes)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/tracking",children:"Tracking"})}),": Particle tracking functions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Matching"}),": Matching beam optics to desired parameters."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/physics-processes/phys-proc",children:"Physics Processes"})}),": Includes key collective effects:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/physics-processes/sc",children:"SpaceCharge"})}),": Features a 3D Laplace solver."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/physics-processes/csr",children:"CSR (Coherent Synchrotron Radiation)"})}),": Implements a 1D model supporting an arbitrary number of dipoles."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/physics-processes/wake",children:"Wake (Wakefields)"})}),": Models wakefields using a Taylor expansion up to second order for arbitrary geometries."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/docs/docu/physics-processes/ibs",children:"IBS (Intra Beam Scattering)"})}),": Models intra-beam scattering effects."]}),"\n",(0,r.jsxs)(n.li,{children:["Additional details on these effects can be found:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://accelconf.web.cern.ch/ipac2017/papers/wepab031.pdf",children:['"Ocelot as a Framework for Beam Dynamics Simulations of X-ray Sources", S. Tomin et al, ',(0,r.jsx)(n.em,{children:"IPAC2017"})]})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.a,{href:"https://journals.aps.org/prab/abstract/10.1103/PhysRevAccelBeams.22.024401",children:['"Accelerator beam dynamics at the European X-ray Free Electron Laser", I. Zagorodnov, M. Dohlus, S. Tomin, ',(0,r.jsx)(n.em,{children:"2019"})]}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"MOGA (Multi-Objective Genetic Algorithm)"}),": Optimizes beamline designs.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["See ",(0,r.jsxs)(n.a,{href:"http://accelconf.web.cern.ch/AccelConf/ipac2016/papers/thpmb034.pdf",children:["Short Bunch Operation Mode Development at the Synchrotron Radiation Source Siberia-2, Y. Fomin et al, ",(0,r.jsx)(n.em,{children:"IPAC2016"})]}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"adaptors",children:"Adaptors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Includes various converters for translating lattice formats into Ocelot's format or converting beam distributions into ",(0,r.jsx)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/particle-array",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ParticleArray"})})}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"native-module-for-spontaneous-radiation-calculation",children:"Native Module for Spontaneous Radiation Calculation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This module provides tools for calculating spontaneous radiation. Additional details can be found in ",(0,r.jsx)(n.a,{href:"/docs/tutorial/tutorial-photons/pfs_1_synchrotron_radiation",children:"Tutorial-Photons"})," and in references:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://accelconf.web.cern.ch/ipac2019/papers/wepts017.pdf",children:['"Synchrotron Radiation Module in Ocelot Toolkit", S.Tomin, G. Geloni, ',(0,r.jsx)(n.em,{children:"IPAC19"})]})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"http://scripts.iucr.org/cgi-bin/paper?S1600577519002509",children:'"Dynamical effects on superradiant THz emission from an undulator", G.Geloni, T. Tanikawa, S. Tomin'}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"fel-calculations",children:"FEL Calculations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Interfaces with GENESIS for Free Electron Laser (FEL) simulations, including pre- and post-processing tools."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"modules-for-online-beam-control-and-optimization-migrated-to-separate-repository",children:"Modules for Online Beam Control and Optimization (migrated to separate repository)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Tools for online beam control and optimization of accelerator performance. Refer to the following resources for more details:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://accelconf.web.cern.ch/IPAC2014/papers/mopro086.pdf",children:["\u201cOnline Beam Control with Ocelot at Siberia-2\u201d \u2013 S. Tomin, A. Valentinov, ",(0,r.jsx)(n.em,{children:"IPAC2014"})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://jacowfs.jlab.org/conf/y15/ipac15/prepress/TUPWA037.PDF",children:["\u201cStatistical Optimization of FEL Performance\u201d \u2013 I. Agapov et al, ",(0,r.jsx)(n.em,{children:"IPAC2015"})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://accelconf.web.cern.ch/ipac2016/papers/wepoy036.pdf",children:["\u201cProgress in Automatic Software-Based Optimization of Accelerator Performance\u201d \u2013 S. Tomin et al, ",(0,r.jsx)(n.em,{children:"IPAC2016"})]})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsxs)(n.a,{href:"https://arxiv.org/pdf/1704.02335.pdf",children:['"Automatic tuning of Free Electron Lasers" - I.Agapov et al, arXiv ',(0,r.jsx)(n.em,{children:"2017"})]})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Developed in collaboration with SLAC and hosted in a separate ",(0,r.jsx)(n.a,{href:"https://github.com/ocelot-collab/optimizer",children:"repository"})," within the ",(0,r.jsx)(n.a,{href:"https://github.com/ocelot-collab",children:"ocelot-collab"})," organization for ease of collaborative development."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"technical-foundations",children:"Technical Foundations"}),"\n",(0,r.jsx)(n.p,{children:"Ocelot extensively utilizes Python libraries:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"http://numpy.org",children:"NumPy"})}),": For efficient in-core numerical computations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"http://scipy.org",children:"SciPy"})}),": For advanced scientific computations, including optimization techniques and algorithms."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"http://matplotlib.org/index.html",children:"Matplotlib"})}),": For producing high-quality figures and visualizations."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples-and-tutorials",children:"Examples and Tutorials"}),"\n",(0,r.jsxs)(n.p,{children:["While detailed documentation is not yet available, you can find numerous examples in the ",(0,r.jsx)(n.code,{children:"/demos/"})," folder and Jupyter ",(0,r.jsx)(n.a,{href:"#tutorials",children:"tutorials"})," to get started."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);