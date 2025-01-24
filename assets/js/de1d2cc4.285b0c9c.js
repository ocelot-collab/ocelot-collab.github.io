"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[8553],{8192:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"docu/trasfer-maps/transormation","title":"Transformation Parent Class","description":"L22) Class","source":"@site/docs/docu/trasfer-maps/transormation.md","sourceDirName":"docu/trasfer-maps","slug":"/docu/trasfer-maps/transormation","permalink":"/docs/docu/trasfer-maps/transormation","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot-collab.github.io/tree/main/docs/docu/trasfer-maps/transormation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Transformation Parent Class"},"sidebar":"docsSidebar","previous":{"title":"Transfer Maps","permalink":"/docs/category/transfer-maps"},"next":{"title":"First Order Map","permalink":"/docs/docu/trasfer-maps/first-order"}}');var s=t(4848),a=t(8453);const l={sidebar_position:1,title:"Transformation Parent Class"},i="Transformation Class",c={},o=[{value:"Description",id:"description",level:2},{value:"Constructor",id:"constructor",level:2},{value:"<code>__init__(self, create_tm_param_func, delta_e_func, tm_type: TMTypes, length: float, delta_length: float = None)</code>",id:"__init__self-create_tm_param_func-delta_e_func-tm_type-tmtypes-length-float-delta_length-float--none",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Class Methods",id:"class-methods",level:2},{value:"<code>from_element(cls, element: Element, tm_type: TMTypes = TMTypes.MAIN, delta_l: float = None, **params)</code>",id:"from_elementcls-element-element-tm_type-tmtypes--tmtypesmain-delta_l-float--none-params",level:4},{value:"<code>create(cls, main_tm_params_func, delta_e_func, length, delta_length=None, entrance_tm_params_func=None, exit_tm_params_func=None, tm_type: TMTypes = TMTypes.MAIN, **params)</code>",id:"createcls-main_tm_params_func-delta_e_func-length-delta_lengthnone-entrance_tm_params_funcnone-exit_tm_params_funcnone-tm_type-tmtypes--tmtypesmain-params",level:4},{value:"Instance Methods",id:"instance-methods",level:2},{value:"<code>get_delta_e(self)</code>",id:"get_delta_eself",level:4},{value:"<code>get_params(self, energy: float)</code>",id:"get_paramsself-energy-float",level:4},{value:"<code>apply(self, prcl_series)</code>",id:"applyself-prcl_series",level:4},{value:"<code>map_function(self, X: np.ndarray, energy: float) -&gt; np.ndarray</code>",id:"map_functionself-x-npndarray-energy-float---npndarray",level:4},{value:"Additional Internal Methods",id:"additional-internal-methods",level:2},{value:"<code>_clean_cashed_values(self)</code>",id:"_clean_cashed_valuesself",level:4}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"transformation-class",children:[(0,s.jsx)(n.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/transformations/transformation.py#L22",children:"Transformation"})," Class"]})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Transformation"})," class is an abstract base class (ABC) that defines a common interface and base functionality\nfor all transformations in a beamline simulation. Each transformation class calculates how particles\n(either in a list of ",(0,s.jsx)(n.code,{children:"Particle"})," objects or a ",(0,s.jsx)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/particle-array",children:(0,s.jsx)(n.code,{children:"ParticleArray"})}),") are transformed\nwhen passing through an element, typically by applying a transfer map."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(n.h4,{id:"__init__self-create_tm_param_func-delta_e_func-tm_type-tmtypes-length-float-delta_length-float--none",children:(0,s.jsx)(n.code,{children:"__init__(self, create_tm_param_func, delta_e_func, tm_type: TMTypes, length: float, delta_length: float = None)"})}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"create_tm_param_func"}),": A callback function that creates the parameters for the transformation (e.g., transfer matrix parameters)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"delta_e_func"})," (",(0,s.jsx)(n.code,{children:"Callable"}),", optional): A callback function for calculating the energy change ((\\Delta E)) of the beam if the transformation changes the energy. By default, this is only used for main transformations (e.g., not for entrances or exits)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tm_type"})," (",(0,s.jsx)(n.code,{children:"TMTypes"}),"): The type of transformation (e.g., ",(0,s.jsx)(n.code,{children:"MAIN"}),", ",(0,s.jsx)(n.code,{children:"ENTRANCE"}),", ",(0,s.jsx)(n.code,{children:"EXIT"}),"), which controls whether length or energy changes apply."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"length"})," (",(0,s.jsx)(n.code,{children:"float"}),"): The total length of the element, in meters, to which the transformation is applied."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"delta_length"})," (",(0,s.jsx)(n.code,{children:"float"}),", optional): A partial length of the element for calculations if only a portion of the element is used."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"class-methods",children:"Class Methods"}),"\n",(0,s.jsx)(n.h4,{id:"from_elementcls-element-element-tm_type-tmtypes--tmtypesmain-delta_l-float--none-params",children:(0,s.jsx)(n.code,{children:"from_element(cls, element: Element, tm_type: TMTypes = TMTypes.MAIN, delta_l: float = None, **params)"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Abstract Class Method"}),(0,s.jsx)(n.br,{}),"\n","Creates a new transformation from a ",(0,s.jsx)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/magnet-lattice",children:(0,s.jsx)(n.code,{children:"MagneticLattice"})})," element. Elements must implement specific hooks or callbacks for different transformation types (entrance, main, exit)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"element"}),": The beamline element from which the transformation is derived."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tm_type"})," (",(0,s.jsx)(n.code,{children:"TMTypes"}),", optional): The type of transformation to create (",(0,s.jsx)(n.code,{children:"ENTRANCE"}),", ",(0,s.jsx)(n.code,{children:"MAIN"}),", or ",(0,s.jsx)(n.code,{children:"EXIT"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"delta_l"})," (",(0,s.jsx)(n.code,{children:"float"}),", optional): The subset length of the element to which this transformation applies."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"params"}),": Additional parameters that may be required by specific transformations."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raises:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NotImplementedError"}),": If the element does not implement the required callback functions."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"createcls-main_tm_params_func-delta_e_func-length-delta_lengthnone-entrance_tm_params_funcnone-exit_tm_params_funcnone-tm_type-tmtypes--tmtypesmain-params",children:(0,s.jsx)(n.code,{children:"create(cls, main_tm_params_func, delta_e_func, length, delta_length=None, entrance_tm_params_func=None, exit_tm_params_func=None, tm_type: TMTypes = TMTypes.MAIN, **params)"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Factory Method"}),(0,s.jsx)(n.br,{}),"\n","Creates a concrete transformation using the provided parameter-generating functions and the transformation type."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"main_tm_params_func"}),": A function to calculate the transformation parameters for the main section of an element."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"delta_e_func"}),": A function to calculate the energy change (\\Delta E) through the element (if applicable)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"length"})," (",(0,s.jsx)(n.code,{children:"float"}),"): The full length of the element."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"delta_length"})," (",(0,s.jsx)(n.code,{children:"float"}),", optional): A partial length of the element. Defaults to ",(0,s.jsx)(n.code,{children:"None"}),", in which case the full length is used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"entrance_tm_params_func"})," (",(0,s.jsx)(n.code,{children:"Callable"}),", optional): A function to calculate transformation parameters for the entrance section of an element."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"exit_tm_params_func"})," (",(0,s.jsx)(n.code,{children:"Callable"}),", optional): A function to calculate transformation parameters for the exit section of an element."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tm_type"})," (",(0,s.jsx)(n.code,{children:"TMTypes"}),", optional): The type of the transformation (",(0,s.jsx)(n.code,{children:"MAIN"}),", ",(0,s.jsx)(n.code,{children:"ENTRANCE"}),", ",(0,s.jsx)(n.code,{children:"EXIT"}),"). Defaults to ",(0,s.jsx)(n.code,{children:"MAIN"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"params"}),": Additional arguments for the transformation."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An instance of a concrete transformation class (subclass of ",(0,s.jsx)(n.code,{children:"Transformation"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raises:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NotImplementedError"}),": If the required entrance or exit function is not set."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"instance-methods",children:"Instance Methods"}),"\n",(0,s.jsx)(n.h4,{id:"get_delta_eself",children:(0,s.jsx)(n.code,{children:"get_delta_e(self)"})}),"\n",(0,s.jsxs)(n.p,{children:["Retrieves the energy change (\\Delta E) for this transformation, using the provided ",(0,s.jsx)(n.code,{children:"delta_e_func"}),", if applicable."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"float"}),": The energy change (\\Delta E) in GeV (or 0.0 if ",(0,s.jsx)(n.code,{children:"delta_e_func"})," is not defined or if this is an entrance/exit transformation)."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"get_paramsself-energy-float",children:(0,s.jsx)(n.code,{children:"get_params(self, energy: float)"})}),"\n",(0,s.jsx)(n.p,{children:"Calculates or retrieves cached parameters for the transformation at the given beam energy."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"energy"})," (",(0,s.jsx)(n.code,{children:"float"}),"): The beam energy for which the transformation parameters are calculated."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The parameters (data structure depends on the implementation of ",(0,s.jsx)(n.code,{children:"create_tm_param_func"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"applyself-prcl_series",children:(0,s.jsx)(n.code,{children:"apply(self, prcl_series)"})}),"\n",(0,s.jsxs)(n.p,{children:["Applies the transformation to a series of particles (list of ",(0,s.jsx)(n.code,{children:"Particle"}),", a ",(0,s.jsx)(n.code,{children:"ParticleArray"}),", or a single ",(0,s.jsx)(n.code,{children:"Particle"}),"). Updates each particle\u2019s phase-space coordinates and energy accordingly."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"prcl_series"}),": The particle data structure to transform. Supported types:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ParticleArray"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Particle"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"list"})," of ",(0,s.jsx)(n.code,{children:"Particle"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Raises:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Exception"}),": If the particle data structure is unknown or unsupported."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h4,{id:"map_functionself-x-npndarray-energy-float---npndarray",children:(0,s.jsx)(n.code,{children:"map_function(self, X: np.ndarray, energy: float) -> np.ndarray"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Abstract Method"}),(0,s.jsx)(n.br,{}),"\n","Calculates the transformation for a given array of particle coordinates ",(0,s.jsx)(n.code,{children:"X"})," at the specified energy. Must be implemented by each concrete transformation subclass."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X"})," (",(0,s.jsx)(n.code,{children:"np.ndarray"}),"): A 2D NumPy array representing phase-space coordinates (",(0,s.jsx)(n.code,{children:"6 x n"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"energy"})," (",(0,s.jsx)(n.code,{children:"float"}),"): The beam energy in GeV."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An updated 2D NumPy array representing the transformed coordinates."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"additional-internal-methods",children:"Additional Internal Methods"}),"\n",(0,s.jsx)(n.h4,{id:"_clean_cashed_valuesself",children:(0,s.jsx)(n.code,{children:"_clean_cashed_values(self)"})}),"\n",(0,s.jsx)(n.p,{children:"Clears cached values (current energy and parameters) to ensure a fresh calculation when necessary."}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(6540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);