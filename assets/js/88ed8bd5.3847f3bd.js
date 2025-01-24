"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[6335],{7133:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"docu/elements/optical-element","title":"OpticElement","description":"Overview","source":"@site/docs/docu/elements/optical-element.md","sourceDirName":"docu/elements","slug":"/docu/elements/optical-element","permalink":"/docs/docu/elements/optical-element","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot-collab.github.io/tree/main/docs/docu/elements/optical-element.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"OpticElement"},"sidebar":"docsSidebar","previous":{"title":"Introduction to Elements","permalink":"/docs/docu/elements/intro"},"next":{"title":"Element","permalink":"/docs/docu/elements/element"}}');var t=s(4848),i=s(8453);const l={sidebar_position:1,title:"OpticElement"},d="OpticElement Class",c={},o=[{value:"Overview",id:"overview",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>__init__(element, tm, default_tm, **params)</code>",id:"__init__element-tm-default_tm-params",level:3},{value:"<code>__getattr__(name)</code>",id:"__getattr__name",level:3},{value:"<code>__setattr__(name, value)</code>",id:"__setattr__name-value",level:3},{value:"<code>tms</code>",id:"tms",level:3},{value:"<code>first_order_tms</code>",id:"first_order_tms",level:3},{value:"<code>B(energy)</code>",id:"benergy",level:3},{value:"<code>R(energy)</code>",id:"renergy",level:3},{value:"<code>T(energy)</code>",id:"tenergy",level:3},{value:"<code>apply(X, energy)</code>",id:"applyx-energy",level:3},{value:"<code>set_tm(tm, **params)</code>",id:"set_tmtm-params",level:3},{value:"<code>get_section_tms(delta_l, start_l=0.0, ignore_edges=False, first_order_only=False)</code>",id:"get_section_tmsdelta_l-start_l00-ignore_edgesfalse-first_order_onlyfalse",level:3},{value:"<code>get_tm(tm_type, first_order_only=False)</code>",id:"get_tmtm_type-first_order_onlyfalse",level:3},{value:"<code>_create_tms(element, tm, **params)</code>",id:"_create_tmselement-tm-params",level:3},{value:"<code>__str__()</code>",id:"__str__",level:3},{value:"<code>__repr__()</code>",id:"__repr__",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"opticelement-class",children:[(0,t.jsx)(n.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/optic_element.py",children:(0,t.jsx)(n.code,{children:"OpticElement"})})," Class"]})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/elements/optic_element.py",children:(0,t.jsx)(n.code,{children:"OpticElement"})})," class serves as a facade to bridge the old and new interfaces of beamline simulation in the OCELOT framework. It manages the underlying element's attributes, its transformations, and provides methods for accessing and manipulating these transformations. Each concrete optic element must implement its own initialization for specific parameters."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class OpticElement:\n    """[summary]\n    Facade between old interface and new interface.\n    """\n\n    __is_init = False  # needed to disable __getattr__ and __setattr__ until __init__ is executed\n\n    def __init__(self, element: Element, tm: Type[Transformation], default_tm: Type[Transformation], **params) -> None:\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"element"})})," ",(0,t.jsxs)(n.a,{href:"/docs/docu/elements/element",children:["(",(0,t.jsx)(n.code,{children:"Element"}),")"]}),": The specific beamline element managed by this class."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"default_tm"})})," ",(0,t.jsxs)(n.a,{href:"/docs/docu/trasfer-maps/transormation",children:["(",(0,t.jsx)(n.code,{children:"Type[Transformation]"}),")"]}),": The default transformation used if the specified transformation is unsupported."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_first_order_tms"})})," (",(0,t.jsx)(n.code,{children:"List[Transformation]"}),"): List of first-order transformations used for calculations like Twiss Parameters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_kwargs"})})," (",(0,t.jsx)(n.code,{children:"dict"}),"): Transformation-specific parameters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_tms"})})," (",(0,t.jsx)(n.code,{children:"List[Transformation]"}),"): List of transformations currently set for the element."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_tm_class_type"})})," (",(0,t.jsx)(n.code,{children:"Type[Transformation]"}),"): The transformation type currently applied to the element."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"__init__element-tm-default_tm-params",children:(0,t.jsx)(n.code,{children:"__init__(element, tm, default_tm, **params)"})}),"\n",(0,t.jsxs)(n.p,{children:["Initializes the ",(0,t.jsx)(n.code,{children:"OpticElement"})," with a specified element and transformation."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"element"})," (",(0,t.jsx)(n.code,{children:"Element"}),"): The beamline element to be managed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tm"})," (",(0,t.jsx)(n.code,{children:"Type[Transformation]"}),"): The transformation used by the element."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"default_tm"})," (",(0,t.jsx)(n.code,{children:"Type[Transformation]"}),"): The fallback transformation if ",(0,t.jsx)(n.code,{children:"tm"})," is unsupported."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**params"}),": Additional parameters for the transformation."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"__getattr__name",children:(0,t.jsx)(n.code,{children:"__getattr__(name)"})}),"\n",(0,t.jsx)(n.p,{children:"Accesses attributes of the underlying element."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," (",(0,t.jsx)(n.code,{children:"str"}),"): Name of the attribute to retrieve."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Raises:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"AttributeError"}),": If the attribute does not exist."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"__setattr__name-value",children:(0,t.jsx)(n.code,{children:"__setattr__(name, value)"})}),"\n",(0,t.jsx)(n.p,{children:"Sets attributes on the underlying element and resets cached transformations."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"})," (",(0,t.jsx)(n.code,{children:"str"}),"): Name of the attribute to set."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"value"}),": New value for the attribute."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tms",children:(0,t.jsx)(n.code,{children:"tms"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Property:"})," Retrieves the list of transformations currently set for the element."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List[Transformation]"}),": List of transformations."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"first_order_tms",children:(0,t.jsx)(n.code,{children:"first_order_tms"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Property:"})," Retrieves the list of first-order transformations."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List[Transformation]"}),": List of first-order transformations."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"benergy",children:(0,t.jsx)(n.code,{children:"B(energy)"})}),"\n",(0,t.jsxs)(n.p,{children:["Calculates the ",(0,t.jsx)(n.code,{children:"B"})," matrices for transformations."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"energy"})," (",(0,t.jsx)(n.code,{children:"float"}),"): Energy level for the calculation."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List[np.ndarray]"}),": List of ",(0,t.jsx)(n.code,{children:"B"})," matrices."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"renergy",children:(0,t.jsx)(n.code,{children:"R(energy)"})}),"\n",(0,t.jsxs)(n.p,{children:["Calculates the ",(0,t.jsx)(n.code,{children:"R"})," matrices for transformations."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"energy"})," (",(0,t.jsx)(n.code,{children:"float"}),"): Energy level for the calculation."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List[np.ndarray]"}),": List of ",(0,t.jsx)(n.code,{children:"R"})," matrices."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tenergy",children:(0,t.jsx)(n.code,{children:"T(energy)"})}),"\n",(0,t.jsxs)(n.p,{children:["Calculates the ",(0,t.jsx)(n.code,{children:"T"})," matrices for transformations or returns zero matrices if unavailable."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"energy"})," (",(0,t.jsx)(n.code,{children:"float"}),"): Energy level for the calculation."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List[np.ndarray]"}),": List of ",(0,t.jsx)(n.code,{children:"T"})," matrices or zero matrices."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"applyx-energy",children:(0,t.jsx)(n.code,{children:"apply(X, energy)"})}),"\n",(0,t.jsx)(n.p,{children:"Applies all transformations to a particle array."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"X"})," (",(0,t.jsx)(n.code,{children:"np.ndarray"}),"): Array of particles."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"energy"})," (",(0,t.jsx)(n.code,{children:"float"}),"): Energy level for the transformation."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"set_tmtm-params",children:(0,t.jsx)(n.code,{children:"set_tm(tm, **params)"})}),"\n",(0,t.jsx)(n.p,{children:"Sets a new transformation for the element."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tm"})," (",(0,t.jsx)(n.code,{children:"Transformation"}),"): Transformation to set."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**params"}),": Transformation-specific parameters."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get_section_tmsdelta_l-start_l00-ignore_edgesfalse-first_order_onlyfalse",children:(0,t.jsx)(n.code,{children:"get_section_tms(delta_l, start_l=0.0, ignore_edges=False, first_order_only=False)"})}),"\n",(0,t.jsx)(n.p,{children:"Calculates transformations for a section of the element."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delta_l"})," (",(0,t.jsx)(n.code,{children:"float"}),"): Length of the section."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"start_l"})," (",(0,t.jsx)(n.code,{children:"float"}),", optional): Start position in the element. Default is ",(0,t.jsx)(n.code,{children:"0.0"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ignore_edges"})," (",(0,t.jsx)(n.code,{children:"bool"}),", optional): Whether to ignore entrance and exit transformations. Default is ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"first_order_only"})," (",(0,t.jsx)(n.code,{children:"bool"}),", optional): Whether to use only first-order transformations. Default is ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List[Transformation]"}),": List of transformations for the section."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get_tmtm_type-first_order_onlyfalse",children:(0,t.jsx)(n.code,{children:"get_tm(tm_type, first_order_only=False)"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieves a specific transformation type."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tm_type"})," (",(0,t.jsx)(n.code,{children:"TMTypes"}),"): Type of transformation to retrieve."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"first_order_only"})," (",(0,t.jsx)(n.code,{children:"bool"}),", optional): Whether to retrieve first-order transformations. Default is ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Transformation"}),": The specified transformation."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"_create_tmselement-tm-params",children:(0,t.jsx)(n.code,{children:"_create_tms(element, tm, **params)"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Static Method:"})," Creates a list of transformations for an element."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"element"})," (",(0,t.jsx)(n.code,{children:"Element"}),"): The beamline element."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tm"})," (",(0,t.jsx)(n.code,{children:"Type[Transformation]"}),"): Transformation type."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**params"}),": Additional parameters."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"List[Transformation]"}),": List of transformations."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"__str__",children:(0,t.jsx)(n.code,{children:"__str__()"})}),"\n",(0,t.jsx)(n.p,{children:"Generates a string representation of the underlying element."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"}),": String representation."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"__repr__",children:(0,t.jsx)(n.code,{children:"__repr__()"})}),"\n",(0,t.jsxs)(n.p,{children:["Generates a detailed string representation of the ",(0,t.jsx)(n.code,{children:"OpticElement"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"}),": String representation with class name and memory address."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);