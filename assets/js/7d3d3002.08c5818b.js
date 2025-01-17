"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[4244],{7271:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"docu/physics-processes/phys-proc","title":"PhysProc Class","description":"L14) Class","source":"@site/docs/docu/physics-processes/phys-proc.md","sourceDirName":"docu/physics-processes","slug":"/docu/physics-processes/phys-proc","permalink":"/docs/docu/physics-processes/phys-proc","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot-collab.github.io/tree/main/docs/docu/physics-processes/phys-proc.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"PhysProc Class"},"sidebar":"docsSidebar","previous":{"title":"Physics Processes","permalink":"/docs/category/physics-processes"},"next":{"title":"Space Charge","permalink":"/docs/docu/physics-processes/sc"}}');var r=n(4848),t=n(8453);const c={sidebar_position:1,title:"PhysProc Class"},l="PhysProc Class",d={},o=[{value:"Overview",id:"overview",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Instance Attributes",id:"instance-attributes",level:3},{value:"Constructor",id:"constructor",level:2},{value:"<code>__init__(step=1)</code>",id:"__init__step1",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>check_step()</code>",id:"check_step",level:3},{value:"<code>prepare(lat)</code>",id:"preparelat",level:3},{value:"<code>apply(p_array, dz)</code>",id:"applyp_array-dz",level:3},{value:"<code>finalize(*args, **kwargs)</code>",id:"finalizeargs-kwargs",level:3},{value:"Notes",id:"notes",level:3},{value:"Related Classes:",id:"related-classes",level:3}];function a(e){const s={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsxs)(s.h1,{id:"physproc-class",children:[(0,r.jsx)(s.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L14",children:"PhysProc"})," Class"]})}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/physics_proc.py#L14",children:"PhysProc"})," class serves as\nthe parent class for all physics processes within a simulation. It provides a standard interface for handling processes that interact with the navigator and lattice during particle tracking."]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsx)(s.h3,{id:"instance-attributes",children:"Instance Attributes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"step"})})," ",(0,r.jsx)(s.em,{children:"(int)"}),":",(0,r.jsx)(s.br,{}),"\n","Number of steps in ",(0,r.jsx)(s.code,{children:"Navigator.unit_step"}),". Each physics process applies over a distance of ",(0,r.jsx)(s.code,{children:"self.step * Navigator.unit_step"})," (measured in meters). Default is ",(0,r.jsx)(s.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"energy"})})," ",(0,r.jsx)(s.em,{children:"(float, optional)"}),":",(0,r.jsx)(s.br,{}),"\n","Beam energy associated with the process. Default is ",(0,r.jsx)(s.code,{children:"None"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"indx0"})})," ",(0,r.jsx)(s.em,{children:"(int, optional)"}),":",(0,r.jsx)(s.br,{}),"\n","Index of the starting element in the lattice sequence. Assigned during ",(0,r.jsx)(s.code,{children:"navigator.add_physics_proc()"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"indx1"})})," ",(0,r.jsx)(s.em,{children:"(int, optional)"}),":",(0,r.jsx)(s.br,{}),"\n","Index of the stopping element in the lattice sequence. Assigned during ",(0,r.jsx)(s.code,{children:"navigator.add_physics_proc()"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"s_start"})})," ",(0,r.jsx)(s.em,{children:"(float, optional)"}),":",(0,r.jsx)(s.br,{}),"\n","Position of the starting element in the lattice. Assigned during ",(0,r.jsx)(s.code,{children:"navigator.add_physics_proc()"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"s_stop"})})," ",(0,r.jsx)(s.em,{children:"(float, optional)"}),":",(0,r.jsx)(s.br,{}),"\n","Position of the stopping element in the lattice. Assigned during ",(0,r.jsx)(s.code,{children:"navigator.add_physics_proc()"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"z0"})})," ",(0,r.jsx)(s.em,{children:"(float, optional)"}),":",(0,r.jsx)(s.br,{}),"\n","Current position of the navigator. Assigned during ",(0,r.jsx)(s.code,{children:"track.track()"})," before ",(0,r.jsx)(s.code,{children:"apply()"})," is called."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"constructor",children:"Constructor"}),"\n",(0,r.jsx)(s.h3,{id:"__init__step1",children:(0,r.jsx)(s.code,{children:"__init__(step=1)"})}),"\n",(0,r.jsxs)(s.p,{children:["Initializes a new instance of the ",(0,r.jsx)(s.code,{children:"PhysProc"})," class."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"step"})," ",(0,r.jsx)(s.em,{children:"(int, optional)"}),": The number of steps in ",(0,r.jsx)(s.code,{children:"Navigator.unit_step"}),". Default is ",(0,r.jsx)(s.code,{children:"1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"check_step",children:(0,r.jsx)(s.code,{children:"check_step()"})}),"\n",(0,r.jsxs)(s.p,{children:["Validates that the ",(0,r.jsx)(s.code,{children:"step"})," attribute is an integer."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Raises:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ValueError"}),": If ",(0,r.jsx)(s.code,{children:"self.step"})," is not an integer."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"preparelat",children:(0,r.jsx)(s.code,{children:"prepare(lat)"})}),"\n",(0,r.jsx)(s.p,{children:"Called when the physics process is added to the Navigator class."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"lat"})," ",(0,r.jsx)(s.em,{children:"(MagneticLattice)"}),": The magnetic lattice associated with the simulation."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"applyp_array-dz",children:(0,r.jsx)(s.code,{children:"apply(p_array, dz)"})}),"\n",(0,r.jsx)(s.p,{children:"Called on every step of the simulation to apply the physics process to the particle array."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"p_array"})," ",(0,r.jsx)(s.em,{children:"(ParticleArray)"}),": The particle array representing the beam."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"dz"})," ",(0,r.jsx)(s.em,{children:"(float)"}),": Step size in meters."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"finalizeargs-kwargs",children:(0,r.jsx)(s.code,{children:"finalize(*args, **kwargs)"})}),"\n",(0,r.jsx)(s.p,{children:"Called at the end of the simulation to perform any final operations or cleanup."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"*args"}),": Additional positional arguments."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"**kwargs"}),": Additional keyword arguments."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Customization:"}),"\nThis class is designed to be extended for specific physics processes. Override the apply() method in subclasses to implement custom behavior."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Validation:"}),"\nThe check_step() method ensures that step values are integers, preventing numerical issues during simulation."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.em,{children:"Integration with Navigator:"}),"\nAttributes like indx0, indx1, s_start, s_stop, and z0 are automatically assigned when integrating with the Navigator."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"related-classes",children:"Related Classes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Navigator"}),": Manages physics processes and particle tracking."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"MagneticLattice"}),": Represents the magnetic elements in the beamline."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ParticleArray"}),": Models the particle beam in simulations."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var i=n(6540);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);