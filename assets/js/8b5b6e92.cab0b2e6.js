"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[514],{5974:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>m});const n=JSON.parse('{"id":"docu/trasfer-maps/first-order","title":"First Order Map","description":"First Order Map","source":"@site/docs/docu/trasfer-maps/first-order.md","sourceDirName":"docu/trasfer-maps","slug":"/docu/trasfer-maps/first-order","permalink":"/docs/docu/trasfer-maps/first-order","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot-collab.github.io/tree/main/docs/docu/trasfer-maps/first-order.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"First Order Map","description":"First Order Map"},"sidebar":"docsSidebar","previous":{"title":"Transformation Parent Class","permalink":"/docs/docu/trasfer-maps/transormation"},"next":{"title":"Second Order Map","permalink":"/docs/docu/trasfer-maps/second-order"}}');var r=a(4848),l=a(8453);const t={sidebar_position:2,title:"First Order Map",description:"First Order Map"},i="TransferMap Class",c={},m=[{value:"Description",id:"description",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Constructor",id:"constructor",level:2},{value:"<code>__init__(self, create_tm_param_func, delta_e_func, tm_type: TMTypes, length: float, delta_length: float = 0.0)</code>",id:"__init__self-create_tm_param_func-delta_e_func-tm_type-tmtypes-length-float-delta_length-float--00",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Class Methods",id:"class-methods",level:2},{value:"<code>from_element(cls, element: Element, tm_type: TMTypes = TMTypes.MAIN, delta_l=None, **params)</code>",id:"from_elementcls-element-element-tm_type-tmtypes--tmtypesmain-delta_lnone-params",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Instance Methods",id:"instance-methods",level:2},{value:"<code>map_function(self, X, energy: float) -&gt; np.ndarray</code>",id:"map_functionself-x-energy-float---npndarray",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>mul_p_array(self, rparticles, energy=0.) -&gt; np.ndarray</code>",id:"mul_p_arrayself-rparticles-energy0---npndarray",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>multiply_with_tm(self, tm: &#39;TransferMap&#39;, length: float) -&gt; &#39;TransferMap&#39;</code>",id:"multiply_with_tmself-tm-transfermap-length-float---transfermap",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>__mul__(self, m)</code>",id:"__mul__self-m",level:3}];function d(e){const s={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsxs)(s.h1,{id:"transfermap-class",children:[(0,r.jsx)(s.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/transfer_map.py",children:"TransferMap"})," Class"]})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"TransferMap"})," class inherits from the ",(0,r.jsx)(s.a,{href:"/docs/docu/trasfer-maps/transormation",children:(0,r.jsx)(s.code,{children:"Transformation"})})," base class and implements a ",(0,r.jsx)(s.strong,{children:"first-order"})," (linear)\ntransformation of particle coordinates. It is designed to handle both main sections of elements and optionally\ntheir entrance and exit edges, if the element supports them. The ",(0,r.jsx)(s.code,{children:"TransferMap"})," calculates new particle coordinates using\na first-order transfer matrix and translation vector."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"inheritance",children:"Inheritance"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Inherits"}),": ",(0,r.jsx)(s.code,{children:"Transformation"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsx)(s.h4,{id:"__init__self-create_tm_param_func-delta_e_func-tm_type-tmtypes-length-float-delta_length-float--00",children:(0,r.jsx)(s.code,{children:"__init__(self, create_tm_param_func, delta_e_func, tm_type: TMTypes, length: float, delta_length: float = 0.0)"})}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"create_tm_param_func"}),": A callback function for creating first-order transformation parameters (e.g., rotated transfer matrix, translation vector, etc.)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"delta_e_func"})," (",(0,r.jsx)(s.code,{children:"Callable"}),"): A callback function for calculating the energy change ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{mathvariant:"normal",children:"\u0394"}),(0,r.jsx)(s.mi,{children:"E"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\Delta E"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(s.span,{className:"mord",children:"\u0394"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"})]})})]}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"tm_type"})," (",(0,r.jsx)(s.code,{children:"TMTypes"}),"): Specifies the transformation type (",(0,r.jsx)(s.code,{children:"MAIN"}),", ",(0,r.jsx)(s.code,{children:"ENTRANCE"}),", or ",(0,r.jsx)(s.code,{children:"EXIT"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"length"})," (",(0,r.jsx)(s.code,{children:"float"}),"): The length of the element for the main transformation."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"delta_length"})," (",(0,r.jsx)(s.code,{children:"float"}),", optional): Defines a partial length of the element if only a portion of it is considered. Defaults to ",(0,r.jsx)(s.code,{children:"0.0"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"class-methods",children:"Class Methods"}),"\n",(0,r.jsx)(s.h4,{id:"from_elementcls-element-element-tm_type-tmtypes--tmtypesmain-delta_lnone-params",children:(0,r.jsx)(s.code,{children:"from_element(cls, element: Element, tm_type: TMTypes = TMTypes.MAIN, delta_l=None, **params)"})}),"\n",(0,r.jsxs)(s.p,{children:["Creates a ",(0,r.jsx)(s.code,{children:"TransferMap"})," from a ",(0,r.jsx)(s.a,{href:"/docs/docu/OCELOT%20fundamentals/magnet-lattice",children:(0,r.jsx)(s.code,{children:"MagneticLattice"})})," element.\nIt uses the element\u2019s methods to generate transfer parameters for entrance, main, and exit transformations (where applicable)."]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"element"})," ",(0,r.jsxs)(s.a,{href:"/docs/docu/elements/element",children:["(",(0,r.jsx)(s.code,{children:"Element"}),")"]}),": The beamline element for which the ",(0,r.jsx)(s.code,{children:"TransferMap"})," is created."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"tm_type"})," (",(0,r.jsx)(s.code,{children:"TMTypes"}),", optional): The transformation type (",(0,r.jsx)(s.code,{children:"MAIN"}),", ",(0,r.jsx)(s.code,{children:"ENTRANCE"}),", or ",(0,r.jsx)(s.code,{children:"EXIT"}),"). Defaults to ",(0,r.jsx)(s.code,{children:"MAIN"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"delta_l"})," (",(0,r.jsx)(s.code,{children:"float"}),", optional): A partial length for the transformation. If ",(0,r.jsx)(s.code,{children:"None"}),", the entire element length is used."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"params"}),": Additional keyword parameters."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["A new ",(0,r.jsx)(s.code,{children:"TransferMap"})," instance with the first-order transformation parameters derived from the element."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"instance-methods",children:"Instance Methods"}),"\n",(0,r.jsx)(s.h4,{id:"map_functionself-x-energy-float---npndarray",children:(0,r.jsx)(s.code,{children:"map_function(self, X, energy: float) -> np.ndarray"})}),"\n",(0,r.jsx)(s.p,{children:"Calculates the new particle coordinates by applying the first-order transformation."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Retrieves the transformation parameters via ",(0,r.jsx)(s.code,{children:"get_params(energy)"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Calls ",(0,r.jsx)(s.code,{children:"mul_p_array(X, energy=energy)"})," to apply the transformation."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"X"})," (",(0,r.jsx)(s.code,{children:"np.ndarray"}),"): A ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mn,{children:"6"}),(0,r.jsx)(s.mo,{children:"\xd7"}),(0,r.jsx)(s.mi,{children:"N"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"6 \\times N"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,r.jsx)(s.span,{className:"mord",children:"6"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})]})]})," array of phase-space coordinates ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"p"}),(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"y"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"p"}),(0,r.jsx)(s.mi,{children:"y"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"t"}),(0,r.jsx)(s.mi,{children:"a"}),(0,r.jsx)(s.mi,{children:"u"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"p"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"(x, px, y, py, tau, p)"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,r.jsx)(s.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"energy"})," (",(0,r.jsx)(s.code,{children:"float"}),"): The beam energy."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["A transformed ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mn,{children:"6"}),(0,r.jsx)(s.mo,{children:"\xd7"}),(0,r.jsx)(s.mi,{children:"N"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"6 \\times N"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,r.jsx)(s.span,{className:"mord",children:"6"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"})]})]})]})," array of updated coordinates."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h4,{id:"mul_p_arrayself-rparticles-energy0---npndarray",children:(0,r.jsx)(s.code,{children:"mul_p_array(self, rparticles, energy=0.) -> np.ndarray"})}),"\n",(0,r.jsx)(s.p,{children:"Applies the first-order transformation directly to the given coordinates."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Obtains parameters (rotated transfer matrix ",(0,r.jsx)(s.code,{children:"R"})," and translation vector ",(0,r.jsx)(s.code,{children:"B"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:["Computes the updated coordinates ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsxs)(s.msup,{children:[(0,r.jsx)(s.mi,{mathvariant:"bold",children:"X"}),(0,r.jsx)(s.mo,{mathvariant:"bold",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mi,{children:"R"}),(0,r.jsx)(s.mi,{mathvariant:"bold",children:"X"}),(0,r.jsx)(s.mo,{children:"+"}),(0,r.jsx)(s.mi,{children:"B"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathbf{X'} = R \\mathbf{X} + B"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.7519em"}}),(0,r.jsxs)(s.span,{className:"mord",children:[(0,r.jsx)(s.span,{className:"mord mathbf",children:"X"}),(0,r.jsx)(s.span,{className:"msupsub",children:(0,r.jsx)(s.span,{className:"vlist-t",children:(0,r.jsx)(s.span,{className:"vlist-r",children:(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,r.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:(0,r.jsx)(s.span,{className:"mord mathbf mtight",children:"\u2032"})})})]})})})})})]}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.7694em",verticalAlign:"-0.0833em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,r.jsx)(s.span,{className:"mord mathbf",children:"X"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"+"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"})]})]})]}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Overwrites ",(0,r.jsx)(s.code,{children:"rparticles"})," with the updated coordinates."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"rparticles"})," (",(0,r.jsx)(s.code,{children:"np.ndarray"}),"): The array of particle phase-space coordinates ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mn,{children:"6"}),(0,r.jsx)(s.mo,{children:"\xd7"}),(0,r.jsx)(s.mi,{children:"N"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"(6 \\times N)"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord",children:"6"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,r.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"energy"})," (",(0,r.jsx)(s.code,{children:"float"}),", optional): The beam energy. Defaults to ",(0,r.jsx)(s.code,{children:"0."}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The updated array ",(0,r.jsx)(s.code,{children:"rparticles"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h4,{id:"multiply_with_tmself-tm-transfermap-length-float---transfermap",children:(0,r.jsx)(s.code,{children:"multiply_with_tm(self, tm: 'TransferMap', length: float) -> 'TransferMap'"})}),"\n",(0,r.jsxs)(s.p,{children:["Combines two ",(0,r.jsx)(s.code,{children:"TransferMap"})," objects into a single new ",(0,r.jsx)(s.code,{children:"TransferMap"}),", effectively performing ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{mathvariant:"bold",children:"M"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsxs)(s.msub,{children:[(0,r.jsx)(s.mi,{mathvariant:"bold",children:"M"}),(0,r.jsx)(s.mn,{children:"1"})]}),(0,r.jsx)(s.mo,{children:"\xd7"}),(0,r.jsxs)(s.msub,{children:[(0,r.jsx)(s.mi,{mathvariant:"bold",children:"M"}),(0,r.jsx)(s.mn,{children:"2"})]})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\mathbf{M} = \\mathbf{M}_1 \\times \\mathbf{M}_2"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.6861em"}}),(0,r.jsx)(s.span,{className:"mord mathbf",children:"M"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.8361em",verticalAlign:"-0.15em"}}),(0,r.jsxs)(s.span,{className:"mord",children:[(0,r.jsx)(s.span,{className:"mord mathbf",children:"M"}),(0,r.jsx)(s.span,{className:"msupsub",children:(0,r.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,r.jsxs)(s.span,{className:"vlist-r",children:[(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.3011em"},children:(0,r.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:"1"})})]})}),(0,r.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,r.jsx)(s.span,{className:"vlist-r",children:(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,r.jsx)(s.span,{})})})]})})]}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(s.span,{className:"mbin",children:"\xd7"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.8361em",verticalAlign:"-0.15em"}}),(0,r.jsxs)(s.span,{className:"mord",children:[(0,r.jsx)(s.span,{className:"mord mathbf",children:"M"}),(0,r.jsx)(s.span,{className:"msupsub",children:(0,r.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,r.jsxs)(s.span,{className:"vlist-r",children:[(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.3011em"},children:(0,r.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:"2"})})]})}),(0,r.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,r.jsx)(s.span,{className:"vlist-r",children:(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,r.jsx)(s.span,{})})})]})})]})]})]})]}),"."]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Gets the combined transformation parameters from the product of the two transformations."}),"\n",(0,r.jsxs)(s.li,{children:["Creates and returns a new ",(0,r.jsx)(s.code,{children:"TransferMap"})," with the combined length and energy-change function."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"tm"})," (",(0,r.jsx)(s.code,{children:"TransferMap"}),"): Another ",(0,r.jsx)(s.code,{children:"TransferMap"})," to be multiplied."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"length"})," (",(0,r.jsx)(s.code,{children:"float"}),"): The combined length for the new ",(0,r.jsx)(s.code,{children:"TransferMap"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["A new ",(0,r.jsx)(s.code,{children:"TransferMap"})," instance that represents the product of ",(0,r.jsx)(s.code,{children:"self"})," and ",(0,r.jsx)(s.code,{children:"tm"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"__mul__self-m",children:(0,r.jsx)(s.code,{children:"__mul__(self, m)"})}),"\n",(0,r.jsxs)(s.p,{children:["Implements the ",(0,r.jsx)(s.code,{children:"*"})," operator for ",(0,r.jsx)(s.code,{children:"TransferMap"})," objects."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Parameters"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"m"}),": Another object, such as ",(0,r.jsx)(s.code,{children:"TransferMap"}),", ",(0,r.jsx)(s.code,{children:"Particle"}),", or ",(0,r.jsx)(s.code,{children:"Twiss"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Returns"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The result of multiplying ",(0,r.jsx)(s.code,{children:"m"})," with this ",(0,r.jsx)(s.code,{children:"TransferMap"}),", which can be a transformed object or a new ",(0,r.jsx)(s.code,{children:"TransferMap"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Raises"}),":","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Exception"}),": If ",(0,r.jsx)(s.code,{children:"m"})," is not a recognized type or does not implement a compatible ",(0,r.jsx)(s.code,{children:"multiply_with_tm"})," method."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>t,x:()=>i});var n=a(6540);const r={},l=n.createContext(r);function t(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);