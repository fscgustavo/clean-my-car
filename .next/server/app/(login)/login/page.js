(()=>{var e={};e.id=395,e.ids=[395],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4822:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},8945:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c}),s(502),s(515),s(2815),s(3875);var r=s(2768),n=s(2190),a=s(4578),i=s.n(a),o=s(4698),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["(login)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,502)),"/Users/gustavofonseca/Documents/repositories/clean-my-car/clean-my-car/app/(login)/login/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,515)),"/Users/gustavofonseca/Documents/repositories/clean-my-car/clean-my-car/app/(login)/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,2815,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,9039))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3875)),"/Users/gustavofonseca/Documents/repositories/clean-my-car/clean-my-car/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,2815,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,9039))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/gustavofonseca/Documents/repositories/clean-my-car/clean-my-car/app/(login)/login/page.tsx"],m="/(login)/login/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(login)/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6552:(e,t,s)=>{Promise.resolve().then(s.bind(s,3614))},5963:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,8876,23)),Promise.resolve().then(s.t.bind(s,2775,23)),Promise.resolve().then(s.t.bind(s,6420,23)),Promise.resolve().then(s.t.bind(s,2623,23)),Promise.resolve().then(s.t.bind(s,6383,23)),Promise.resolve().then(s.t.bind(s,6545,23))},1221:(e,t,s)=>{Promise.resolve().then(s.bind(s,5464))},8422:()=>{},3614:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(5108),n=s(7300),a=s.n(n),i=s(5464);function o(){return(0,r.jsxs)("div",{className:"flex flex-col items-center py-4 px-6 h-screen",children:[r.jsx("div",{className:"flex items-end w-full",children:r.jsx(a(),{href:"/need-help",className:"ml-auto inline-block text-sm font-medium",children:"Need help?"})}),(0,r.jsxs)("form",{className:"m-auto grid sm:w-[350px] w-full gap-12 justify-self-center",noValidate:!0,action:function(e){let t=e.get("email"),s=e.get("password");("joe@email.com"!==t||"123"!==s)&&i.A.error("Invalid Credentials",{position:"top-right"})},children:[r.jsx("h1",{className:"text-lg font-bold text-center",children:"Log in"}),(0,r.jsxs)("div",{className:"grid gap-4",children:[(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx("label",{htmlFor:"email",className:"font-medium",children:"Email"}),r.jsx("input",{id:"email",type:"email",placeholder:"joe@email.com",className:"rounded border border-solid border-[#22242626] py-2 px-4 placeholder:text-[#22242626]",required:!0})]}),(0,r.jsxs)("div",{className:"grid gap-2",children:[r.jsx("label",{htmlFor:"password",className:"font-medium",children:"Password"}),r.jsx("input",{id:"password",type:"password",className:"rounded border border-solid border-[#22242626] py-2 px-4 placeholder:text-[#22242626]",placeholder:"Enter your Password",required:!0}),r.jsx("div",{className:"flex items-end",children:r.jsx(a(),{href:"/forgot-password",className:"ml-auto inline-block text-sm font-medium",children:"forgot password?"})})]})]}),r.jsx("button",{type:"submit",className:"w-full bg-[#19ebb6] py-3 px-6 rounded font-medium text-sm",children:"Login"})]})]})}},515:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(1018),n=s(2787);function a({children:e}){return(0,r.jsxs)("div",{className:"w-full lg:grid min-h-[100vh] lg:grid-cols-[1fr_2fr] max-lg:place-content-center",children:[(0,r.jsxs)("div",{className:"hidden bg-muted lg:flex lg:items-center lg:flex-col lg:justify-center lg:gap-8 bg-[#19ebb6] text-center",children:[(0,r.jsxs)("div",{className:"grid place-items-center",children:[r.jsx(n.Z,{width:100,height:100}),r.jsx("h1",{className:"font-bold text-2xl italic",children:"CleanMyCar"})]}),r.jsx("p",{className:"font-medium max-w-[190px]",children:"India's first waterless car cleaning company"})]}),e]})}},502:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});var r=s(3677);let n=(0,r.createProxy)(String.raw`/Users/gustavofonseca/Documents/repositories/clean-my-car/clean-my-car/app/(login)/login/page.tsx`),{__esModule:a,$$typeof:i}=n;n.default;let o=(0,r.createProxy)(String.raw`/Users/gustavofonseca/Documents/repositories/clean-my-car/clean-my-car/app/(login)/login/page.tsx#default`)},3875:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l,metadata:()=>o});var r=s(1018),n=s(8826),a=s.n(n);s(1549);var i=s(138);let o={title:"CleanMyCar",robots:"noindex, nofollow"};function l({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("body",{className:`${a().className} bg-white`,children:e}),r.jsx(i.x,{})]})}},9039:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(8722);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},1549:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[319,379,722,356],()=>s(8945));module.exports=r})();