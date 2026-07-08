(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22663,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},46240,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return o},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return j}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&f(n))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},7584,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});function a(e){let t={};for(let[n,r]of e.entries()){let e=t[n];void 0===e?t[n]=r:Array.isArray(e)?e.push(r):t[n]=[e,r]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,o(e));else t.set(n,o(r));return t}function l(e,...t){for(let n of t){for(let t of n.keys())e.delete(t);for(let[t,r]of n.entries())e.append(t,r)}return e}},14031,e=>{"use strict";e.s(["assetPath",0,function(e){let t=e.startsWith("/")?e:`/${e}`;return`/bs-orange${t}`}])},60878,(e,t,n)=>{t.exports=e.r(49619)},82547,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return d},getImageProps:function(){return c}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let a=e.r(81258),o=e.r(41159),s=e.r(9318),l=a._(e.r(7276));function c(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/bs-orange/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let d=s.Image},88750,(e,t,n)=>{t.exports=e.r(82547)},96659,e=>{"use strict";var t=e.i(57827),n=e.i(70160),r=e.i(60878),i=e.i(88746);e.s(["StyledComponentsRegistry",0,function({children:e}){let[a]=(0,n.useState)(()=>new i.ServerStyleSheet);return(0,r.useServerInsertedHTML)(()=>{let e=a.getStyleElement();return a.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}])},16776,e=>{"use strict";var t=e.i(60878),n=e.i(70160);e.s(["RoutePrefetcher",0,function({routes:e}){let r=(0,t.useRouter)();return(0,n.useEffect)(()=>{let t=navigator.connection;if(t?.saveData||t?.effectiveType==="slow-2g"||t?.effectiveType==="2g")return;let n=Array.from(new Set(e)),i=[],a=!1,o=n.map((e,t)=>{let n=()=>{a||r.prefetch(e,{kind:"full"})};var o=()=>{let e=window.setTimeout(n,1800+220*t);i.push(e)};if("requestIdleCallback"in window){let e=window.requestIdleCallback(o,{timeout:6e3});return()=>window.cancelIdleCallback(e)}let s=globalThis.setTimeout(o,3500);return()=>globalThis.clearTimeout(s)});return()=>{a=!0,o.forEach(e=>e()),i.forEach(e=>window.clearTimeout(e))}},[r,e]),null}])},1072,e=>{"use strict";var t=e.i(57827),n=e.i(88750),r=e.i(60878),i=e.i(70160),a=e.i(14031);let o=[{href:"/about",label:"О компании"},{href:"/services",label:"Продукты, технологии, услуги"},{href:"/partners",label:"Партнёры"},{href:"/news",label:"Новости"},{href:"/contacts",label:"Контакты"}];var s=e.i(88746);let l=s.default.header.withConfig({displayName:"site-header.styles__Header",componentId:"sc-713b4a26-0"})`
  position: relative;
  z-index: 20;
  padding-top: 51px;

  @media (max-width: 900px) {
    padding-top: 24px;
  }
`,c=s.default.div.withConfig({displayName:"site-header.styles__HeaderInner",componentId:"sc-713b4a26-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 130px;
  padding: 0 76px 0 75px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    min-height: auto;
    padding-inline: 24px 72px;
  }
`,d=s.default.a.withConfig({displayName:"site-header.styles__Brand",componentId:"sc-713b4a26-2"})`
  display: inline-flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  color: inherit;
  text-decoration: none;

  span {
    display: grid;
    gap: 5px;
    line-height: 0.9;
  }

  strong,
  small {
    font-family: var(--font-poiret-one);
    font-weight: 400;
  }

  strong {
    font-size: 36px;
  }

  small {
    font-size: 29px;
  }

  @media (max-width: 900px) {
    strong {
      font-size: 30px;
    }

    small {
      font-size: 23px;
    }
  }
`,u=s.default.a.withConfig({displayName:"site-header.styles__Phone",componentId:"sc-713b4a26-3"})`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  font-size: 25px;
  line-height: 1;
  text-decoration: none;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`,f=s.default.button.withConfig({displayName:"site-header.styles__BurgerButton",componentId:"sc-713b4a26-4"})`
  display: none;
  width: 36px;
  height: 28px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    display: block;
    width: 36px;
    height: 3px;
    border-radius: 999px;
    background: #222222;
    transition:
      transform 180ms ease,
      opacity 180ms ease;
  }

  &[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(12px) rotate(45deg);
  }

  &[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }

  &[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-12px) rotate(-45deg);
  }

  @media (max-width: 900px) {
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${({$isHidden:e})=>+!e};
    pointer-events: ${({$isHidden:e})=>e?"none":"auto"};
    transform: translateY(${({$isHidden:e})=>e?"-10px":"0"});
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }
`,p=s.default.nav.withConfig({displayName:"site-header.styles__Nav",componentId:"sc-713b4a26-5"})`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background-color: rgb(246, 246, 246);
  gap: 72px;
  min-height: 75px;
  padding: 27px 40px 24px;
  font-size: 18px;

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: color 180ms ease;
  }

  a[data-active="true"] {
    color: #ff8100;
  }

  a::after {
    position: absolute;
    right: 0;
    bottom: -10px;
    left: 0;
    height: 2px;
    background: var(--orange);
    content: "";
    opacity: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }

  a:hover::after,
  a:focus-visible::after {
    opacity: 1;
    transform: scaleX(1);
  }

  @media (max-width: 900px) {
    display: none;
  }
`,h=s.default.nav.withConfig({displayName:"site-header.styles__MobileMenu",componentId:"sc-713b4a26-6"})`
  display: none;

  @media (max-width: 900px) {
    position: fixed;
    top: 72px;
    right: 0;
    left: 0;
    z-index: 25;
    display: grid;
    width: 100vw;
    max-height: ${({$isOpen:e})=>e?"420px":"0"};
    margin-left: 0;
    overflow: hidden;
    background-color: rgb(246, 246, 246);
    box-shadow: 0 18px 28px rgb(0 0 0 / 10%);
    opacity: ${({$isOpen:e})=>+!!e};
    pointer-events: ${({$isOpen:e})=>e?"auto":"none"};
    transition:
      max-height 220ms ease,
      opacity 180ms ease;

    a {
      padding: 17px 24px;
      border-top: 1px solid rgb(225, 225, 225);
      color: inherit;
      font-size: 18px;
      text-decoration: none;
    }

    a[data-active="true"] {
      color: #ff8100;
    }

    a:hover,
    a:focus-visible {
      color: #ff8100;
    }
  }
`,m=s.default.button.withConfig({displayName:"site-header.styles__BackToTopButton",componentId:"sc-713b4a26-7"})`
  display: none;

  @media (max-width: 900px) {
    position: fixed;
    right: 20px;
    bottom: 22px;
    z-index: 30;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 86px;
    min-height: 42px;
    padding: 0 18px;
    border: 0;
    border-radius: 999px;
    background: var(--orange);
    color: #ffffff;
    cursor: pointer;
    font: inherit;
    font-size: 16px;
    line-height: 1;
    box-shadow: 0 14px 28px rgb(0 0 0 / 18%);
    opacity: ${({$isVisible:e})=>+!!e};
    pointer-events: ${({$isVisible:e})=>e?"auto":"none"};
    transform: translateY(${({$isVisible:e})=>e?"0":"10px"});
    transition:
      opacity 180ms ease,
      transform 180ms ease,
      background-color 180ms ease;

    &:hover,
    &:focus-visible {
      background: #e87500;
    }
  }
`;function g(e){return e.replace(/^\/bs-orange(?=\/|$)/,"").replace(/\/$/,"")||"/"}function x(e,t){let n=g(t);return e===n||e.startsWith(`${n}/`)}function b(e){let t=e.endsWith("/")?e:`${e}/`;return(0,a.assetPath)(t)}e.s(["SiteHeader",0,function(){let e=g((0,r.usePathname)()),[s,y]=(0,i.useState)(!1),[w,v]=(0,i.useState)(!1),[j,P]=(0,i.useState)(!1),E=(0,i.useRef)(0),_=(0,a.assetPath)("/");function C(e,t){e.preventDefault(),window.location.assign(b(t))}return(0,i.useEffect)(()=>{let e=window.matchMedia("(max-width: 900px)");function t(){let t=window.scrollY,n=e.matches,r=t>300,i=t-E.current;if(!n){v(!1),P(!1),E.current=t;return}P(r),r?i>6?(v(!0),y(!1)):i<-6&&v(!1):v(!1),E.current=t}return E.current=window.scrollY,t(),window.addEventListener("scroll",t,{passive:!0}),e.addEventListener("change",t),()=>{window.removeEventListener("scroll",t),e.removeEventListener("change",t)}},[]),(0,t.jsxs)(l,{children:[(0,t.jsxs)(c,{children:[(0,t.jsxs)(d,{href:_,"aria-label":"Балтик Стайл",children:[(0,t.jsx)(n.default,{src:(0,a.assetPath)("/figma/logo.svg"),alt:"",width:62,height:75,priority:!0}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:"Балтик Стайл"}),(0,t.jsx)("small",{children:"сетевые решения"})]})]}),(0,t.jsxs)(u,{href:"tel:+74012991199",children:[(0,t.jsx)(n.default,{src:(0,a.assetPath)("/figma/phone.svg"),alt:"",width:18,height:18}),"+7(4012) 99-11-99"]}),(0,t.jsxs)(f,{type:"button","aria-label":s?"Закрыть меню":"Открыть меню","aria-expanded":s,"aria-controls":"mobile-navigation",$isHidden:w,onClick:()=>y(e=>!e),children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]}),(0,t.jsx)(p,{"aria-label":"Основная навигация",children:o.map(n=>(0,t.jsx)("a",{"data-active":x(e,n.href),href:b(n.href),onClick:e=>C(e,n.href),children:n.label},n.href))}),(0,t.jsxs)(h,{id:"mobile-navigation","aria-label":"Мобильная навигация",$isOpen:s,children:[(0,t.jsx)("a",{"data-active":"/"===e,href:_,onClick:()=>y(!1),children:"Главная"}),o.map(n=>(0,t.jsx)("a",{"data-active":x(e,n.href),href:b(n.href),onClick:e=>{y(!1),C(e,n.href)},children:n.label},n.href))]}),(0,t.jsx)(m,{type:"button",$isVisible:j,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"Вверх"})]})}],1072)}]);