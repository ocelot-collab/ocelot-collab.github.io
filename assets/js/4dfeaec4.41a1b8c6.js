"use strict";(self.webpackChunkocelot_website=self.webpackChunkocelot_website||[]).push([[9867],{5469:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docu/OCELOT fundamentals/tracking","title":"Tracking","description":"Tracking function","source":"@site/docs/docu/OCELOT fundamentals/tracking.md","sourceDirName":"docu/OCELOT fundamentals","slug":"/docu/OCELOT fundamentals/tracking","permalink":"/docs/docu/OCELOT fundamentals/tracking","draft":false,"unlisted":false,"editUrl":"https://github.com/ocelot-collab/ocelot-collab.github.io/tree/main/docs/docu/OCELOT fundamentals/tracking.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Tracking","description":"Tracking function"},"sidebar":"docsSidebar","previous":{"title":"Navigator","permalink":"/docs/docu/OCELOT fundamentals/navigator"},"next":{"title":"ParticleArray","permalink":"/docs/docu/OCELOT fundamentals/particle-array"}}');var s=r(4848),i=r(8453);const a={sidebar_position:7,title:"Tracking",description:"Tracking function"},c="track function",o={},l=[{value:"Description:",id:"description",level:3},{value:"Arguments:",id:"arguments",level:3},{value:"Returns:",id:"returns",level:3},{value:"Notes:",id:"notes",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsxs)(n.h1,{id:"track-function",children:[(0,s.jsx)(n.a,{href:"https://github.com/ocelot-collab/ocelot/blob/master/ocelot/cpbd/track.py#L428",children:(0,s.jsx)(n.code,{children:"track"})})," function"]})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description:"}),"\n",(0,s.jsx)(n.p,{children:"Tracks particles through a lattice and optionally calculates Twiss parameters during the tracking. The method applies the relevant physical processes at each step and returns the updated particle array along with calculated Twiss parameters."}),"\n",(0,s.jsx)(n.p,{children:"Code of the function is presented here."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def track(lattice, p_array, navi=None, print_progress=True, calc_tws=True, \n          bounds=None, return_df=False,\n          overwrite_progress=True) -> Tuple[Union[List[Twiss], pd.DataFrame], ParticleArray]:\n    ...\n    for t_maps, dz, proc_list, phys_steps in navi.get_next_step():\n        for tm in t_maps:\n            tm.apply(p_array)\n            ...\n        ...\n        for p, z_step in zip(proc_list, phys_steps):\n            ...\n            p.apply(p_array, z_step)\n            ...\n    ...\n    # finalize PhysProcesses\n    for p in navi.get_phys_procs():\n        p.finalize()\n    ...\n    return tws_track, p_array\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arguments",children:"Arguments:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"lattice"})," ",(0,s.jsx)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/magnet-lattice",children:(0,s.jsx)(n.code,{children:"MagneticLattice"})}),": The magnetic lattice through which the particles will be tracked."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"p_array"})," ",(0,s.jsxs)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/particle-array",children:["(",(0,s.jsx)(n.code,{children:"ParticleArray"}),")"]}),": The array of particles to be tracked."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"navi"})," (",(0,s.jsx)(n.a,{href:"/docs/docu/OCELOT%20fundamentals/navigator",children:(0,s.jsx)(n.code,{children:"Navigator"})}),", optional): The navigator for tracking. If ",(0,s.jsx)(n.code,{children:"None"}),", a default navigator is used with no physical processes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"print_progress"})," (",(0,s.jsx)(n.code,{children:"bool"}),", optional): If ",(0,s.jsx)(n.code,{children:"True"}),", the progress of the tracking is printed. Default is ",(0,s.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"calc_tws"})," (",(0,s.jsx)(n.code,{children:"bool"}),", optional): If ",(0,s.jsx)(n.code,{children:"True"}),", Twiss parameters are calculated during the tracking. Default is ",(0,s.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bounds"})," (",(0,s.jsx)(n.code,{children:"list"}),", optional): Optional bounds for the tracking based on the standard deviation of ",(0,s.jsx)(n.code,{children:"p_array.tau()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"return_df"})," (",(0,s.jsx)(n.code,{children:"bool"}),", optional): If ",(0,s.jsx)(n.code,{children:"True"}),", the output is returned as a pandas DataFrame. Default is ",(0,s.jsx)(n.code,{children:"False"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"overwrite_progress"})," (",(0,s.jsx)(n.code,{children:"bool"}),", optional): If ",(0,s.jsx)(n.code,{children:"True"}),", the progress message will overwrite the previous message in the console. Default is ",(0,s.jsx)(n.code,{children:"True"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Twiss list or pandas DataFrame"}),": If ",(0,s.jsx)(n.code,{children:"calc_tws"})," is ",(0,s.jsx)(n.code,{children:"True"}),", a list of Twiss parameters is returned. If ",(0,s.jsx)(n.code,{children:"return_df"})," is ",(0,s.jsx)(n.code,{children:"True"}),", the result is returned as a pandas DataFrame."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ParticleArray"}),": The updated array of particles after the tracking."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"notes",children:"Notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Applies all physics processes at each step."}),"\n",(0,s.jsx)(n.li,{children:"Optionally prints tracking progress, including the current position in the lattice and the applied processes."}),"\n",(0,s.jsx)(n.li,{children:"The method ends when the particle list is empty or the lattice length is exceeded."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);