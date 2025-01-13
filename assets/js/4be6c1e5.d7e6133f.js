"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[894],{6858:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"tutorial/tutorial-beam-dynamics/slotted_foil","title":"11. Slotted Foil","description":"This notebook was created by Sergey Tomin (sergey.tomin@desy.de). June 2022","source":"@site/docs/tutorial/tutorial-beam-dynamics/slotted_foil.md","sourceDirName":"tutorial/tutorial-beam-dynamics","slug":"/tutorial/tutorial-beam-dynamics/slotted_foil","permalink":"/docs/tutorial/tutorial-beam-dynamics/slotted_foil","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot/docs/tutorial/tutorial-beam-dynamics/slotted_foil.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"11. Slotted Foil"},"sidebar":"tutorialSidebar","previous":{"title":"10. Corrugated Structure","permalink":"/docs/tutorial/tutorial-beam-dynamics/CorrugatedStructures"},"next":{"title":"12. Undulator Matching","permalink":"/docs/tutorial/tutorial-beam-dynamics/undulator_matching"}}');var l=a(4848),t=a(8453);const i={sidebar_position:11,title:"11. Slotted Foil"},r="11. Slotted Foil",m={},c=[{value:"Mutible scattering through small angles",id:"mutible-scattering-through-small-angles",level:3}];function h(s){const e={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msqrt:"msqrt",msub:"msub",p:"p",path:"path",pre:"pre",semantics:"semantics",span:"span",svg:"svg",ul:"ul",...(0,t.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("small",{children:(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.em,{children:["This notebook was created by Sergey Tomin (",(0,l.jsx)(e.a,{href:"mailto:sergey.tomin@desy.de",children:"sergey.tomin@desy.de"}),"). June 2022"]})})}),"\n",(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"11-slotted-foil",children:"11. Slotted Foil"})}),"\n",(0,l.jsx)(e.h3,{id:"mutible-scattering-through-small-angles",children:"Mutible scattering through small angles"}),"\n",(0,l.jsxs)(e.p,{children:['The Review of Particle Physics" ',(0,l.jsx)(e.a,{href:"https://pdg.lbl.gov",children:"https://pdg.lbl.gov"})]}),"\n",(0,l.jsx)(e.p,{children:'"... it is sufficient for many applications to use a Gaussian approximation for the central\n98% of the projected angular distribution, with an rms width given by:"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"\u03b8"}),(0,l.jsx)(e.mn,{children:"0"})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.mfrac,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mn,{children:"13.6"}),(0,l.jsx)(e.mi,{children:"M"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"V"})]}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mi,{children:"c"}),(0,l.jsx)(e.mi,{children:"p"})]})]}),(0,l.jsx)(e.mi,{children:"z"}),(0,l.jsx)(e.msqrt,{children:(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"X"}),(0,l.jsx)(e.mn,{children:"0"})]})]})}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"0.038"}),(0,l.jsx)(e.mi,{children:"ln"}),(0,l.jsx)(e.mo,{children:"\u2061"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"X"}),(0,l.jsx)(e.mn,{children:"0"})]})]}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\theta_0 = \\frac{13.6 MeV}{\\beta c p} z \\sqrt{x/X_0}(1 + 0.038 \\ln{x/X_0})"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0278em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"2.2408em",verticalAlign:"-0.8804em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(e.span,{className:"mfrac",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"1.3603em"},children:[(0,l.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"c"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"})]})]}),(0,l.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"13.6"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"M"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"})]})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8804em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,l.jsx)(e.span,{className:"mord sqrt",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsxs)(e.span,{className:"vlist",style:{height:"0.9839em"},children:[(0,l.jsxs)(e.span,{className:"svg-align",style:{top:"-3.2em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.2em"}}),(0,l.jsxs)(e.span,{className:"mord",style:{paddingLeft:"1em"},children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord",children:"/"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})]}),(0,l.jsxs)(e.span,{style:{top:"-2.9439em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"3.2em"}}),(0,l.jsx)(e.span,{className:"hide-tail",style:{minWidth:"1.02em",height:"1.28em"},children:(0,l.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.28em",viewBox:"0 0 400000 1296",preserveAspectRatio:"xMinYMin slice",children:(0,l.jsx)(e.path,{d:"M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z"})})})]})]}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.2561em"},children:(0,l.jsx)(e.span,{})})})]})}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0.038"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mop",children:"ln"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord",children:"/"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]}),(0,l.jsx)(e.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,l.jsxs)(e.p,{children:["Here ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"p"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"p"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"p"})]})})]}),", ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"\u03b2"}),(0,l.jsx)(e.mi,{children:"c"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"\u03b2c"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"c"})]})})]}),", and ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"z"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"z"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})})]})," are the momentum, velocity, and charge number of the incident particle, and ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"X"}),(0,l.jsx)(e.mn,{children:"0"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x/X_0"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord",children:"/"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0785em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," is the thickness of the scattering medium in radiation lengths."]}),"\n",(0,l.jsx)(e.p,{children:"Radiation length:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Beryllium (Be): 35.28 cm ",(0,l.jsx)(e.a,{href:"https://pdg.lbl.gov/2022/AtomicNuclearProperties/HTML/beryllium_Be.html",children:"https://pdg.lbl.gov/2022/AtomicNuclearProperties/HTML/beryllium_Be.html"})]}),"\n",(0,l.jsxs)(e.li,{children:["Aluminum (Al): 8.897 cm ",(0,l.jsx)(e.a,{href:"https://pdg.lbl.gov/2021/AtomicNuclearProperties/HTML/aluminum_Al.html",children:"https://pdg.lbl.gov/2021/AtomicNuclearProperties/HTML/aluminum_Al.html"})]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"import copy\nfrom ocelot import *\nfrom ocelot.gui import *\nfrom ocelot.cpbd.physics_proc import SlottedFoil, CopyBeam\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"    initializing ocelot...\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"p_array0 = generate_parray(sigma_x=0.0001,\n    sigma_px=2e-05,\n    sigma_y=None,\n    sigma_py=None,\n    sigma_tau=0.001,\n    sigma_p=0.0001,\n    chirp=0.01,\n    charge=5e-09,\n    nparticles=200000,\n    energy=1,\n    tau_trunc=None,\n    tws=None)\n\nd = Drift(5)\nbb_182_b1 = SBend(l=0.5, angle=0.0532325422, e2=0.0532325422, tilt=1.570796327, eid='BB.182.B1')\nbb_191_b1 = SBend(l=0.5, angle=-0.0532325422, e1=-0.0532325422, tilt=1.570796327, eid='BB.191.B1')\nbb_193_b1 = SBend(l=0.5, angle=-0.0532325422, e2=-0.0532325422, tilt=1.570796327, eid='BB.193.B1')\nbb_202_b1 = SBend(l=0.5, angle=0.0532325422, e1=0.0532325422, tilt=1.570796327, eid='BB.202.B1')\n\nm1 = Marker()\nm2 = Marker()\nm3 = Marker()\nm4 = Marker()\ncell = (d, bb_182_b1, d, d, bb_191_b1, d,m1, m2,m3, d, bb_193_b1, d,d, bb_202_b1, d, m4)\n\nlat = MagneticLattice(cell)\n\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"navi = Navigator(lat)\n\ncb1 = CopyBeam()\ncb2 = CopyBeam()\ncb3 = CopyBeam()\n\nsf = SlottedFoil(dx=10,     # um\n                X0=8.9,     # cm Al\n                ymin=-0.01, # m lower position of the foil slot\n                ymax=0.01   # m upper position of the foil slot\n                )\n\n\nnavi.add_physics_proc(cb1, m1, m1)\nnavi.add_physics_proc(sf, m2, m2)\nnavi.add_physics_proc(cb2, m3, m3)\nnavi.add_physics_proc(cb3, m4, m4)\n\np_array = copy.deepcopy(p_array0)\n\n_, _ = track(lat, p_array, navi)\n\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"    z = 42.0 / 42.0. Applied: CopyBeam, SlottedFoil, CopyBeam\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'show_e_beam(cb1.parray, figname="Init", \n            title="initial distribution in the position of the foil")\nshow_e_beam(cb3.parray, figname="End of chicane", \n            title="Beam distribution at the end of the chicane")\n\n\nplt.figure(100)\nplt.plot(cb2.parray.tau()*1000, cb2.parray.px()*1000, ".")\nplt.xlabel(r"$\\tau$ [mm]")\nplt.ylabel(r"$p_x$ [mrad]")\nplt.figure(200)\nplt.plot(cb2.parray.tau()*1000, cb2.parray.py()*1000, ".")\nplt.xlabel(r"$\\tau$ [mm]")\nplt.ylabel(r"$p_y$ [mrad]")\nplt.show()\n'})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"png",src:a(2012).A+"",width:"583",height:"483"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"png",src:a(1109).A+"",width:"584",height:"483"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"png",src:a(3758).A+"",width:"583",height:"436"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"png",src:a(2071).A+"",width:"584",height:"435"})})]})}function d(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},2012:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/slotted_foil_6_0-78c27f54ed3cce5377dfa42b1d61716c.png"},1109:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/slotted_foil_6_1-ab7fb4a10bf65935bf18233961cf42c7.png"},3758:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/slotted_foil_6_2-71618a7ad2c9b5c1ec64587d202378a8.png"},2071:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/slotted_foil_6_3-370a1939e09dbbd41ea955a65451c3a9.png"},8453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>r});var n=a(6540);const l={},t=n.createContext(l);function i(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);