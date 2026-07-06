(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,13377,(e,t,i)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:i,blurHeight:a,blurDataURL:r,objectFit:s}){let l=i?40*i:e,o=a?40*a:t,d=l&&o?`viewBox='0 0 ${l} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},92904,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return r},imageConfigDefault:function(){return s}};for(var a in n)Object.defineProperty(i,a,{enumerable:!0,get:n[a]});let r=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},41159,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(22663);let n=e.r(43028),a=e.r(13377),r=e.r(92904),s=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:c=!1,preload:p=!1,loading:u,className:f,quality:m,width:g,height:h,fill:x=!1,style:y,overrideSrc:b,onLoad:w,onLoadingComplete:j,placeholder:_="empty",blurDataURL:v,fetchPriority:C,decoding:I="async",layout:P,objectFit:S,objectPosition:z,lazyBoundary:O,lazyRoot:E,...R},N){var k;let M,$,A,{imgConf:D,showAltText:T,blurComplete:q,defaultLoader:L}=N,U=D||r.imageConfigDefault;if("allSizes"in U)M=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),i=U.qualities?.sort((e,t)=>e-t);M={...U,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=R.loader||L;delete R.loader,delete R.srcSet;let B="__next_img_default"in F;if(B){if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:i,...n}=t;return e(n)}}if(P){"fill"===P&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(y={...y,...e});let i={responsive:"100vw",fill:"100vw"}[P];i&&!t&&(t=i)}let H="",W=o(g),G=o(h);if((k=e)&&"object"==typeof k&&(l(k)||void 0!==k.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if($=t.blurWidth,A=t.blurHeight,v=v||t.blurDataURL,H=t.src,!x)if(W||G){if(W&&!G){let e=W/t.width;G=Math.round(t.height*e)}else if(!W&&G){let e=G/t.height;W=Math.round(t.width*e)}}else W=t.width,G=t.height}let V=!c&&!p&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:H)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,V=!1),M.unoptimized&&(i=!0),B&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let X=o(m),J=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:z}:{},T?{}:{color:"transparent"},y),K=q||"empty"===_?null:"blur"===_?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:W,heightInt:G,blurWidth:$,blurHeight:A,blurDataURL:v||"",objectFit:J.objectFit})}")`:`url("${_}")`,Q=s.includes(J.objectFit)?"fill"===J.objectFit?"100% 100%":"cover":J.objectFit,Y=K?{backgroundSize:Q,backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},Z=function({config:e,src:t,unoptimized:i,width:a,quality:r,sizes:s,loader:l}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,n.getDeploymentId)();if(e){let i=t.indexOf("?");if(-1!==i){let n=new URLSearchParams(t.slice(i+1));n.get("dpl")||(n.append("dpl",e),t=t.slice(0,i)+"?"+n.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:d}=function({deviceSizes:e,allSizes:t},i,n){if(n){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=i.exec(n);)a.push(parseInt(e[2]));if(a.length){let i=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,s),c=o.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:o.map((i,n)=>`${l({config:e,src:t,quality:r,width:i})} ${"w"===d?i:n+1}${d}`).join(", "),src:l({config:e,src:t,quality:r,width:o[c]})}}({config:M,src:e,unoptimized:i,width:W,quality:X,sizes:t,loader:F}),ee=V?"lazy":u;return{props:{...R,loading:ee,fetchPriority:C,width:W,height:G,decoding:I,className:f,style:{...J,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:b||Z.src},meta:{unoptimized:i,preload:p||c,placeholder:_,fill:x}}}},27446,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let n=e.r(70160),a="u"<typeof window,r=a?()=>{}:n.useLayoutEffect,s=a?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:i}=e;function l(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return a&&(t?.mountedInstances?.add(e.children),l()),r(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),r(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},92011,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return g},defaultHead:function(){return p}};for(var a in n)Object.defineProperty(i,a,{enumerable:!0,get:n[a]});let r=e.r(81258),s=e.r(44066),l=e.r(57827),o=s._(e.r(70160)),d=r._(e.r(27446)),c=e.r(3621);function p(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(22663);let f=["name","httpEquiv","charSet","itemProp"];function m(e){let t,i,n,a;return e.reduce(u,[]).reverse().concat(p().reverse()).filter((t=new Set,i=new Set,n=new Set,a={},e=>{let r=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?r=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?r=!1:i.add(e.type);break;case"meta":for(let t=0,i=f.length;t<i;t++){let i=f[t];if(e.props.hasOwnProperty(i))if("charSet"===i)n.has(i)?r=!1:n.add(i);else{let t=e.props[i],n=a[i]||new Set;("name"!==i||!s)&&n.has(t)?r=!1:(n.add(t),a[i]=n)}}}return r})).reverse().map((e,t)=>{let i=e.key||t;return o.default.cloneElement(e,{key:i})})}let g=function({children:e}){let t=(0,o.useContext)(c.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},36439,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return r}});let n=e.r(81258)._(e.r(70160)),a=e.r(92904),r=n.default.createContext(a.imageConfigDefault)},1706,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(81258)._(e.r(70160)).default.createContext(null)},40795,(e,t,i)=>{"use strict";function n(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return n}})},7276,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let n=e.r(40795),a=e.r(43028);function r({config:e,src:t,width:i,quality:s}){let l=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),n=i.get("dpl");if(n){l=n,i.delete("dpl");let a=i.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,n.findClosestQuality)(s,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}r.__next_img_default=!0;let s=r},95079,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(70160);function a(e,t){let i=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=i.current;e&&(i.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(i.current=r(e,n)),t&&(a.current=r(t,n))},[e,t])}function r(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},9318,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return w}});let n=e.r(81258),a=e.r(44066),r=e.r(57827),s=a._(e.r(70160)),l=n._(e.r(41379)),o=n._(e.r(92011)),d=e.r(41159),c=e.r(92904),p=e.r(36439);e.r(22663);let u=e.r(1706),f=n._(e.r(7276)),m=e.r(95079),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,i,n,a,r,s){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function x(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,s.forwardRef)(({src:e,srcSet:t,sizes:i,height:n,width:a,decoding:l,className:o,style:d,fetchPriority:c,placeholder:p,loading:u,unoptimized:f,fill:g,onLoadRef:y,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:j,sizesInput:_,onLoad:v,onError:C,...I},P)=>{let S=(0,s.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&h(e,p,y,b,w,f,_))},[e,p,y,b,w,C,f,_]),z=(0,m.useMergedRef)(P,S);return(0,r.jsx)("img",{...I,...x(c),loading:u,width:a,height:n,decoding:l,"data-nimg":g?"fill":"1",className:o,style:d,sizes:i,srcSet:t,src:e,ref:z,onLoad:e=>{h(e.currentTarget,p,y,b,w,f,_)},onError:e=>{j(!0),"empty"!==p&&w(!0),C&&C(e)}})});function b({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,i),null):(0,r.jsx)(o.default,{children:(0,r.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(u.RouterContext),n=(0,s.useContext)(p.ImageConfigContext),a=(0,s.useMemo)(()=>{let e=g||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:a,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:l,onLoadingComplete:o}=e,m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let h=(0,s.useRef)(o);(0,s.useEffect)(()=>{h.current=o},[o]);let[x,w]=(0,s.useState)(!1),[j,_]=(0,s.useState)(!1),{props:v,meta:C}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:a,blurComplete:x,showAltText:j});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{...v,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),C.preload?(0,r.jsx)(b,{isAppRouter:!i,imgAttributes:v}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},82547,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return d}};for(var a in n)Object.defineProperty(i,a,{enumerable:!0,get:n[a]});let r=e.r(81258),s=e.r(41159),l=e.r(9318),o=r._(e.r(7276));function d(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let c=l.Image},88750,(e,t,i)=>{t.exports=e.r(82547)},47751,e=>{"use strict";var t=e.i(57827),i=e.i(88746);let n=i.default.h2.withConfig({displayName:"section-title.styles__Title",componentId:"sc-9399189a-0"})`
  margin: 0;
  color: var(--title);
  font-size: 25px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 20px;
  }
`;function a({children:e}){return(0,t.jsx)(n,{children:e})}let r=i.default.section.withConfig({displayName:"contact-request.styles__ContactSection",componentId:"sc-d8d02ff1-0"})`
  padding: 38px 72px 118px;

  > p {
    width: min(100%, 934px);
    margin: 33px auto 29px;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,s=i.default.form.withConfig({displayName:"contact-request.styles__Form",componentId:"sc-d8d02ff1-1"})`
  display: grid;
  grid-template-columns: 1.08fr 1.08fr 0.93fr 0.93fr;
  gap: 16px;
  width: min(100%, 934px);
  margin: 0 auto;

  input,
  textarea,
  button {
    min-width: 0;
    border: 0;
    border-radius: 15px;
    font: inherit;
    font-size: 18px;
  }

  input,
  textarea {
    background: var(--field);
    color: #6b6b6b;
    outline-color: var(--orange);
    padding: 18px 20px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #a1a1a1;
  }

  textarea {
    grid-column: 1 / 4;
    min-height: 59px;
    resize: vertical;
  }

  button {
    min-height: 59px;
    background: var(--orange);
    color: #ffffff;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    textarea {
      grid-column: auto;
    }
  }
`,l=i.default.label.withConfig({displayName:"contact-request.styles__FileButton",componentId:"sc-d8d02ff1-2"})`
  display: flex;
  align-items: center;
  min-width: 0;
  border: 0;
  border-radius: 15px;
  background: var(--field);
  color: #a1a1a1;
  cursor: pointer;
  font: inherit;
  font-size: 18px;
  outline-color: var(--orange);
  padding: 18px 20px;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;function o(){return(0,t.jsxs)(r,{id:"contacts",children:[(0,t.jsx)(a,{children:"Свяжитесь с нами удобным способом"}),(0,t.jsx)("p",{children:"Заполните форму и мы перезвоним"}),(0,t.jsxs)(s,{children:[(0,t.jsx)("input",{"aria-label":"Имя",placeholder:"Имя"}),(0,t.jsx)("input",{"aria-label":"Номер телефона",placeholder:"Номер телефона"}),(0,t.jsx)("input",{"aria-label":"E-mail",placeholder:"E-mail",type:"email"}),(0,t.jsxs)(l,{children:[(0,t.jsx)("input",{type:"file","aria-label":"Прикрепите файл"}),(0,t.jsx)("span",{children:"Прикрепите файл"})]}),(0,t.jsx)("textarea",{"aria-label":"Ваш текст",placeholder:"Ваш текст"}),(0,t.jsx)("button",{type:"submit",children:"Отправить"})]})]})}let d=i.default.section.withConfig({displayName:"about-company.styles__AboutSection",componentId:"sc-cde1077e-0"})`
  padding: 27px 72px 58px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,c=i.default.div.withConfig({displayName:"about-company.styles__AboutText",componentId:"sc-cde1077e-1"})`
  width: min(100%, 954px);
  margin: 31px auto 0;
  font-size: 19px;
  font-weight: 300;
  line-height: 1.45;

  p {
    margin: 0;
  }

  @media (max-width: 520px) {
    font-size: 17px;
  }
`;function p(){return(0,t.jsxs)(d,{id:"about",children:[(0,t.jsx)(a,{children:"Системная интеграция и инфраструктурные ИТ-решения"}),(0,t.jsxs)(c,{children:[(0,t.jsx)("p",{children:"Компания «Балтик Стайл» реализует проекты по созданию, модернизации и сопровождению технологической инфраструктуры предприятий."}),(0,t.jsx)("p",{children:"Наши компетенции включают проектирование систем, интеграцию оборудования и программных решений, аудит ИТ-среды, а также поставку и профессиональное обслуживание инфраструктуры."}),(0,t.jsx)("p",{children:"Надёжный технологический партнёр бизнеса более 30 лет."})]})]})}var u=e.i(88750);let f=[{base:"years-base.svg",icon:"years.png",title:"30 лет",text:"в отрасли"},{base:"staff-base.svg",icon:"staff.png",title:"Опытный",text:"ИТ персонал"},{base:"solutions-base.svg",icon:"solutions.svg",title:"Оптимальные",text:"ИТ решения"}],m=i.default.span.withConfig({displayName:"mask-icon.styles__StyledMaskIcon",componentId:"sc-4d619f0b-0"})`
  display: inline-block;
  flex: none;
  background: var(--orange);
  mask-image: url("/figma/${({$file:e})=>e}");
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("/figma/${({$file:e})=>e}");
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
`;function g({file:e,className:i}){return(0,t.jsx)(m,{$file:e,className:i,"aria-hidden":"true"})}let h=i.default.section.withConfig({displayName:"advantages.styles__AdvantagesSection",componentId:"sc-89848f60-0"})`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: center;
  gap: 132px;
  padding: 18px 72px 31px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-inline: 24px;
  }
`,x=i.default.article.withConfig({displayName:"advantages.styles__Advantage",componentId:"sc-89848f60-1"})`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    display: grid;
    margin: 0;
    color: var(--muted);
    font-size: 25px;
    font-weight: 700;
    line-height: 1.08;
  }

  @media (max-width: 520px) {
    p {
      font-size: 20px;
    }
  }
`,y=i.default.span.withConfig({displayName:"advantages.styles__AdvantageIcon",componentId:"sc-89848f60-2"})`
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
`,b=(0,i.default)(g).withConfig({displayName:"advantages.styles__IconMask",componentId:"sc-89848f60-3"})`
  position: absolute;
  width: 31px;
  height: 31px;
`;function w(){return(0,t.jsx)(h,{"aria-label":"Преимущества",children:f.map(e=>(0,t.jsxs)(x,{children:[(0,t.jsxs)(y,{children:[(0,t.jsx)(u.default,{src:`/figma/${e.base}`,alt:"",width:44,height:44}),(0,t.jsx)(b,{file:e.icon})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:e.title}),(0,t.jsx)("span",{children:e.text})]})]},e.title))})}let j=i.default.section.withConfig({displayName:"hero.styles__HeroSection",componentId:"sc-3a65a411-0"})`
  display: grid;
  grid-template-columns: minmax(0, 803px) minmax(360px, 477px);
  min-height: 324px;
  background: var(--blue);
  overflow: hidden;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,_=i.default.div.withConfig({displayName:"hero.styles__HeroContent",componentId:"sc-3a65a411-1"})`
  padding: 22px 48px 40px 126px;
  color: #ffffff;

  h1 {
    margin: 0 0 15px;
    font-size: 83px;
    font-weight: 300;
    line-height: 1;
  }

  h1 span {
    display: block;
  }

  p {
    margin: 0;
    font-size: 25px;
    font-weight: 300;
  }

  @media (max-width: 900px) {
    padding: 34px 24px;

    h1 {
      font-size: 56px;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 42px;
    }

    p {
      font-size: 20px;
    }
  }
`,v=i.default.div.withConfig({displayName:"hero.styles__HeroImage",componentId:"sc-3a65a411-2"})`
  position: relative;
  min-height: 324px;

  img {
    object-fit: cover;
  }

  @media (max-width: 900px) {
    min-height: 220px;
  }
`;function C(){return(0,t.jsxs)(j,{id:"top",children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)("h1",{children:["Оптимальные",(0,t.jsx)("span",{children:"IT-решения"})]}),(0,t.jsx)("p",{children:"От разработки стратегии до реализации"})]}),(0,t.jsx)(v,{children:(0,t.jsx)(u.default,{src:"/figma/hero-cables.png",alt:"",fill:!0,sizes:"(max-width: 900px) 100vw, 477px",priority:!0})})]})}let I=[{icon:"communication.png",label:"Связь"},{icon:"industry.png",label:"Промышленность"},{icon:"transport.png",label:"Транспорт"},{icon:"building.png",label:"Строительство"},{icon:"education.png",label:"Образование"}],P=i.default.section.withConfig({displayName:"projects-showcase.styles__ProjectsSection",componentId:"sc-cdb8af19-0"})`
  padding: 0 72px 34px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,S=i.default.div.withConfig({displayName:"projects-showcase.styles__ProjectSlider",componentId:"sc-cdb8af19-1"})`
  display: grid;
  grid-template-columns: 28px minmax(0, 900px) 28px;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 50px;

  button {
    border: 0;
    background: transparent;
    color: #969494;
    cursor: pointer;
    font-size: 28px;
    font-weight: 300;
    line-height: 1;
  }

  @media (max-width: 900px) {
    grid-template-columns: 24px minmax(0, 1fr) 24px;
  }
`,z=i.default.div.withConfig({displayName:"projects-showcase.styles__ProjectList",componentId:"sc-cdb8af19-2"})`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 34px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`,O=i.default.article.withConfig({displayName:"projects-showcase.styles__ProjectItem",componentId:"sc-cdb8af19-3"})`
  display: grid;
  justify-items: center;
  gap: 14px;
  min-width: 0;
  text-align: center;

  p {
    margin: 0;
    font-size: 18px;
  }
`,E=(0,i.default)(g).withConfig({displayName:"projects-showcase.styles__ProjectIcon",componentId:"sc-cdb8af19-4"})`
  width: 66px;
  height: 56px;
`;function R(){return(0,t.jsxs)(P,{id:"projects",children:[(0,t.jsx)(a,{children:"Реализованные проекты"}),(0,t.jsxs)(S,{children:[(0,t.jsx)("button",{"aria-label":"Предыдущие проекты",type:"button",children:"‹"}),(0,t.jsx)(z,{children:I.map(e=>(0,t.jsxs)(O,{children:[(0,t.jsx)(E,{file:e.icon}),(0,t.jsx)("p",{children:e.label})]},e.label))}),(0,t.jsx)("button",{"aria-label":"Следующие проекты",type:"button",children:"›"})]})]})}let N=[{icon:"design.png",title:"Проектирование",text:"Разработка технической документации и архитектуры инфраструктуры."},{icon:"integration.png",title:"Интеграция и строительство",text:"Монтаж, пусконаладка и ввод систем в эксплуатацию."},{icon:"audit.png",title:"ИТ-аудит",text:"Экспертная оценка инфраструктуры и информационной безопасности."},{icon:"supplies.png",title:"Поставки и сервис",text:"Оборудование, программное обеспечение и техническая поддержка."},{icon:"outsource.png",title:"ИТ-аутсорсинг",text:"Профессиональное сопровождение сложных ИТ-решений."}],k=i.default.section.withConfig({displayName:"services-list.styles__ServicesSection",componentId:"sc-4607bb9b-0"})`
  display: grid;
  gap: 47px;
  padding: 26px 72px 83px 114px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,M=i.default.article.withConfig({displayName:"services-list.styles__ServiceItem",componentId:"sc-4607bb9b-1"})`
  display: grid;
  grid-template-columns: 70px minmax(0, 1fr);
  align-items: center;
  gap: 57px;

  h3,
  p {
    margin: 0;
    font-size: 25px;
    line-height: 1.18;
  }

  h3 {
    font-weight: 700;
  }

  p {
    font-weight: 300;
  }

  @media (max-width: 900px) {
    grid-template-columns: 56px minmax(0, 1fr);
    gap: 24px;
  }

  @media (max-width: 520px) {
    h3,
    p {
      font-size: 20px;
    }
  }
`,$=(0,i.default)(g).withConfig({displayName:"services-list.styles__ServiceIcon",componentId:"sc-4607bb9b-2"})`
  width: 70px;
  height: 70px;

  @media (max-width: 900px) {
    width: 56px;
    height: 56px;
  }
`;function A(){return(0,t.jsx)(k,{id:"services",children:N.map(e=>(0,t.jsxs)(M,{children:[(0,t.jsx)($,{file:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("p",{children:e.text})]})]},e.title))})}let D=i.default.footer.withConfig({displayName:"site-footer.styles__Footer",componentId:"sc-1b168edd-0"})`
  display: grid;
  grid-template-columns: 1.65fr 0.6fr 1.22fr;
  gap: 48px;
  padding: 14px 68px 10px 180px;
  font-size: 12px;

  div {
    display: grid;
    align-content: start;
    gap: 5px;
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-inline: 24px;
  }
`,T=i.default.p.withConfig({displayName:"site-footer.styles__Copyright",componentId:"sc-1b168edd-1"})`
  grid-column: 1 / -1;
  margin: 0 0 14px;
  text-align: center;
`;function q(){return(0,t.jsxs)(D,{id:"news",children:[(0,t.jsx)(T,{children:"© 2026 Балтик Стайл — системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей."}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Юридический адрес"}),(0,t.jsx)("span",{children:"236029, Калининградская обл, г Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Телефоны"}),(0,t.jsx)("span",{children:"+74012 99-11-99"}),(0,t.jsx)("span",{children:"+74012 99-11-98"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Реквизиты"}),(0,t.jsx)("span",{children:"ИНН 3905017052, КПП 390601001"}),(0,t.jsx)("span",{children:"ОГРН 1023900773555"}),(0,t.jsx)("span",{children:"Еmail: info@balticstyle.ru"})]})]})}let L=[{href:"#about",label:"О компании"},{href:"#services",label:"Продукты, технологии, услуги"},{href:"#projects",label:"Партнёры"},{href:"#news",label:"Новости"},{href:"#contacts",label:"Контакты"}],U=i.default.header.withConfig({displayName:"site-header.styles__Header",componentId:"sc-713b4a26-0"})`
  padding-top: 51px;

  @media (max-width: 900px) {
    padding-top: 24px;
  }
`,F=i.default.div.withConfig({displayName:"site-header.styles__HeaderInner",componentId:"sc-713b4a26-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 130px;
  padding: 0 76px 0 75px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 24px;
    min-height: auto;
    padding-inline: 24px;
  }
`,B=i.default.a.withConfig({displayName:"site-header.styles__Brand",componentId:"sc-713b4a26-2"})`
  display: inline-flex;
  align-items: center;
  gap: 13px;
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
`,H=i.default.a.withConfig({displayName:"site-header.styles__Phone",componentId:"sc-713b4a26-3"})`
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
`,W=i.default.nav.withConfig({displayName:"site-header.styles__Nav",componentId:"sc-713b4a26-4"})`
  display: flex;
  justify-content: center;
  gap: 72px;
  min-height: 75px;
  padding: 27px 40px 24px;
  font-size: 18px;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    gap: 24px;
    overflow-x: auto;
    padding-inline: 24px;
    white-space: nowrap;
  }
`;function G(){return(0,t.jsxs)(U,{children:[(0,t.jsxs)(F,{children:[(0,t.jsxs)(B,{href:"#top","aria-label":"Балтик Стайл",children:[(0,t.jsx)(u.default,{src:"/figma/logo.svg",alt:"",width:62,height:75,priority:!0}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:"Балтик Стайл"}),(0,t.jsx)("small",{children:"сетевые решения"})]})]}),(0,t.jsxs)(H,{href:"tel:+74012991199",children:[(0,t.jsx)(u.default,{src:"/figma/phone.svg",alt:"",width:18,height:18}),"+7(4012) 99-11-99"]})]}),(0,t.jsx)(W,{"aria-label":"Основная навигация",children:L.map(e=>(0,t.jsx)("a",{href:e.href,children:e.label},e.href))})]})}let V=i.default.main.withConfig({displayName:"home-page.styles__Page",componentId:"sc-24a9dd8-0"})`
  --blue: #00163c;
  --title: #0a1a44;
  --orange: #ff8100;
  --muted: #575757;
  --field: #e9e9e9;
  width: min(100%, 1280px);
  margin: 0 auto;
  background: #ffffff;
  color: #000000;
`;e.s(["HomePage",0,function(){return(0,t.jsxs)(V,{children:[(0,t.jsx)(G,{}),(0,t.jsx)(C,{}),(0,t.jsx)(p,{}),(0,t.jsx)(R,{}),(0,t.jsx)(w,{}),(0,t.jsx)(A,{}),(0,t.jsx)(o,{}),(0,t.jsx)(q,{})]})}],47751)}]);