"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[7753],{1387:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"docu/physics-processes/laser-modulator","title":"LaserModulator Class","description":"L165) Class","source":"@site/docs/docu/physics-processes/laser-modulator.md","sourceDirName":"docu/physics-processes","slug":"/docu/physics-processes/laser-modulator","permalink":"/docs/docu/physics-processes/laser-modulator","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot/docs/docu/physics-processes/laser-modulator.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"LaserModulator Class"},"sidebar":"docsSidebar","previous":{"title":"Slotted Foil Class","permalink":"/docs/docu/physics-processes/slotted-foil"},"next":{"title":"Spontaneous Radiation Effect","permalink":"/docs/docu/physics-processes/sr-effect"}}');var l=a(4848),i=a(8453);const r={sidebar_position:6,title:"LaserModulator Class"},t="LaserModulator Class",c={},d=[{value:"Class Definition",id:"class-definition",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Attributes",id:"attributes",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>lambda_ph(self, energy)</code>",id:"lambda_phself-energy",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Notes",id:"notes",level:4},{value:"<code>r56(self, energy)</code>",id:"r56self-energy",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Notes",id:"notes-1",level:4},{value:"<code>apply(self, p_array, dz)</code>",id:"applyself-p_array-dz",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Notes",id:"notes-2",level:4}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsxs)(e.h1,{id:"lasermodulator-class",children:[(0,l.jsx)(e.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L165",children:"LaserModulator"})," Class"]})}),"\n",(0,l.jsxs)(e.p,{children:["The ",(0,l.jsx)(e.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L165",children:(0,l.jsx)(e.code,{children:"LaserModulator"})})," class is a subclass of ",(0,l.jsx)(e.code,{children:"PhysProc"})," that simulates the energy modulation of a particle beam in an undulator.\nIt provides methods to calculate laser wavelength, undulator transport matrix element ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"b"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"g"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:":"}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{children:":"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"t"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"begin:math:text"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"in"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:":"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"ma"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:":"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})," R_",56," ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mi,{children:"d"}),(0,l.jsx)(e.mo,{children:":"}),(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"h"}),(0,l.jsx)(e.mo,{children:":"}),(0,l.jsx)(e.mi,{children:"t"}),(0,l.jsx)(e.mi,{children:"e"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"t"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"end:math:text"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:":"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"ma"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:":"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]}),", and apply laser modulation to the beam."]}),"\n",(0,l.jsx)(e.h2,{id:"class-definition",children:"Class Definition"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'class LaserModulator(PhysProc):\n    def __init__(self, step=1):\n        """\n        Initialize the LaserModulator with default parameters or user-defined values.\n\n        Parameters\n        ----------\n        step : int, optional\n            Step size used by the PhysProc base class, default is 1.\n        """\n'})}),"\n",(0,l.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"step"})," (",(0,l.jsx)(e.code,{children:"int"}),"): The step size used by the ",(0,l.jsx)(e.code,{children:"PhysProc"})," base class (default is 1)."]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h2,{id:"attributes",children:"Attributes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"dE"})," (",(0,l.jsx)(e.code,{children:"float"}),"): Amplitude of the energy modulation on-axis in [GeV] (default is 12500e-9)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Ku"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The undulator parameter (default is 1.294)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Lu"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The undulator length in meters (default is 0.8)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"lperiod"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The undulator period length in meters (default is 0.074)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"sigma_l"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The laser pulse length (longitudinal Gaussian sigma) in meters (default is 300e-6)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"sigma_x"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The transverse beam size in the x-direction in meters (default is equal to ",(0,l.jsx)(e.code,{children:"sigma_l"}),")."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"sigma_y"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The transverse beam size in the y-direction in meters (default is equal to ",(0,l.jsx)(e.code,{children:"sigma_l"}),")."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"x_mean"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The transverse beam offset in the x-direction in meters (default is 0)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"y_mean"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The transverse beam offset in the y-direction in meters (default is 0)."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"z_waist"})," (",(0,l.jsx)(e.code,{children:"float"})," or ",(0,l.jsx)(e.code,{children:"None"}),"): The shift of the laser waist position in meters. If ",(0,l.jsx)(e.code,{children:"None"}),", a simple Gaussian beam model is used."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"include_r56"})," (",(0,l.jsx)(e.code,{children:"bool"}),"): Flag to include the R56 effect in the modulation. Default is ",(0,l.jsx)(e.code,{children:"False"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"laser_peak_pos"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The offset of the laser peak position relative to the mean of the particle array's ",(0,l.jsx)(e.code,{children:"tau"})," values. Default is 0."]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(e.h3,{id:"lambda_phself-energy",children:(0,l.jsx)(e.code,{children:"lambda_ph(self, energy)"})}),"\n",(0,l.jsx)(e.p,{children:"Calculate the wavelength of the laser pulse."}),"\n",(0,l.jsx)(e.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"energy"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The beam energy in [GeV]."]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"float"}),": The laser wavelength in [m]."]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(e.p,{children:["This method computes the laser wavelength based on the undulator period (",(0,l.jsx)(e.code,{children:"lperiod"}),"), the undulator parameter (",(0,l.jsx)(e.code,{children:"Ku"}),"), and the beam's gamma factor (calculated from the given energy)."]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"r56self-energy",children:(0,l.jsx)(e.code,{children:"r56(self, energy)"})}),"\n",(0,l.jsxs)(e.p,{children:["Calculate the ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"R"}),(0,l.jsx)(e.mn,{children:"56"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"R_{56}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"56"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," for the undulator."]}),"\n",(0,l.jsx)(e.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"energy"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The beam energy in [GeV]."]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"float"}),": The value of ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"R"}),(0,l.jsx)(e.mn,{children:"56"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"R_{56}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"56"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," in [m]."]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"notes-1",children:"Notes"}),"\n",(0,l.jsxs)(e.p,{children:["This method computes the dispersion-like term introduced by the undulator, dependent on the beam's Lorentz factor (",(0,l.jsx)(e.code,{children:"gamma"}),") and undulator parameter (",(0,l.jsx)(e.code,{children:"Ku"}),")."]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.h3,{id:"applyself-p_array-dz",children:(0,l.jsx)(e.code,{children:"apply(self, p_array, dz)"})}),"\n",(0,l.jsxs)(e.p,{children:["Apply the laser modulation to the particle array over a distance ",(0,l.jsx)(e.code,{children:"dz"}),"."]}),"\n",(0,l.jsx)(e.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"p_array"})," (",(0,l.jsx)(e.code,{children:"ParticleArray"}),"): The particle array object containing phase space variables."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"dz"})," (",(0,l.jsx)(e.code,{children:"float"}),"): The integration step length for applying the modulation."]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"None"})}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"notes-2",children:"Notes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Verifies the effective undulator length ",(0,l.jsx)(e.code,{children:"L"})," and checks if it matches the undulator length ",(0,l.jsx)(e.code,{children:"Lu"}),". If the lengths do not match, a warning is issued."]}),"\n",(0,l.jsxs)(e.li,{children:["Calculates the laser wavelength ",(0,l.jsx)(e.code,{children:"lambda_ph"})," and wave number ",(0,l.jsx)(e.code,{children:"k_ph"}),"."]}),"\n",(0,l.jsxs)(e.li,{children:["Computes the energy modulation amplitude ",(0,l.jsx)(e.code,{children:"A"})," and applies the modulation based on transverse offsets (",(0,l.jsx)(e.code,{children:"x"}),", ",(0,l.jsx)(e.code,{children:"y"}),"), longitudinal offset (",(0,l.jsx)(e.code,{children:"tau"}),"), and a Gaussian profile."]}),"\n",(0,l.jsxs)(e.li,{children:["If ",(0,l.jsx)(e.code,{children:"include_r56"})," is ",(0,l.jsx)(e.code,{children:"True"}),", the ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"R"}),(0,l.jsx)(e.mn,{children:"56"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"R_{56}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0077em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"56"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]})]})})]})," effect is included."]}),"\n",(0,l.jsxs)(e.li,{children:["If a laser waist shift (",(0,l.jsx)(e.code,{children:"z_waist"}),") is provided, a more complex model with curvature is used for the modulation."]}),"\n"]})]})}function m(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},8453:(s,e,a)=>{a.d(e,{R:()=>r,x:()=>t});var n=a(6540);const l={},i=n.createContext(l);function r(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function t(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);