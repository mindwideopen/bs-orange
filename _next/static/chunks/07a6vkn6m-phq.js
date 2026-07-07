(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22663,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},46240,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return w},NormalizeError:function(){return x},PageNotFoundError:function(){return b},SP:function(){return g},ST:function(){return h},WEB_VITALS:function(){return a},execOnce:function(){return o},getDisplayName:function(){return c},getLocationOrigin:function(){return d},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return _}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=d();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let g="u">typeof performance,h=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class x extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},7584,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,o(e));else t.set(r,o(n));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},13377,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:o}){let s=r?40*r:e,l=i?40*i:t,d=s&&l?`viewBox='0 0 ${s} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},92904,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return o}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},41159,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(22663);let n=e.r(43028),i=e.r(13377),a=e.r(92904),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:u=!1,preload:c=!1,loading:f,className:p,quality:m,width:g,height:h,fill:y=!1,style:x,overrideSrc:b,onLoad:w,onLoadingComplete:v,placeholder:_="empty",blurDataURL:j,fetchPriority:P,decoding:S="async",layout:C,objectFit:E,objectPosition:O,lazyBoundary:I,lazyRoot:R,...z},N){var $;let M,k,T,{imgConf:A,showAltText:D,blurComplete:F,defaultLoader:L}=N,U=A||a.imageConfigDefault;if("allSizes"in U)M=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t),r=U.qualities?.sort((e,t)=>e-t);M={...U,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===L)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=z.loader||L;delete z.loader,delete z.srcSet;let q="__next_img_default"in B;if(q){if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(C){"fill"===C&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(x={...x,...e});let r={responsive:"100vw",fill:"100vw"}[C];r&&!t&&(t=r)}let W="",G=l(g),X=l(h);if(($=e)&&"object"==typeof $&&(s($)||void 0!==$.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(k=t.blurWidth,T=t.blurHeight,j=j||t.blurDataURL,W=t.src,!y)if(G||X){if(G&&!X){let e=G/t.width;X=Math.round(t.height*e)}else if(!G&&X){let e=X/t.height;G=Math.round(t.width*e)}}else G=t.width,X=t.height}let H=!u&&!c&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,H=!1),M.unoptimized&&(r=!0),q&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let V=l(m),Q=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},D?{}:{color:"transparent"},x),Y=F||"empty"===_?null:"blur"===_?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:G,heightInt:X,blurWidth:k,blurHeight:T,blurDataURL:j||"",objectFit:Q.objectFit})}")`:`url("${_}")`,J=o.includes(Q.objectFit)?"fill"===Q.objectFit?"100% 100%":"cover":Q.objectFit,K=Y?{backgroundSize:J,backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},Z=function({config:e,src:t,unoptimized:r,width:i,quality:a,sizes:o,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,n.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let n=new URLSearchParams(t.slice(r+1));n.get("dpl")||(n.append("dpl",e),t=t.slice(0,r)+"?"+n.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:d}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(n);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,o),u=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((r,n)=>`${s({config:e,src:t,quality:a,width:r})} ${"w"===d?r:n+1}${d}`).join(", "),src:s({config:e,src:t,quality:a,width:l[u]})}}({config:M,src:e,unoptimized:r,width:G,quality:V,sizes:t,loader:B}),ee=H?"lazy":f;return{props:{...z,loading:ee,fetchPriority:P,width:G,height:X,decoding:S,className:p,style:{...Q,...K},sizes:Z.sizes,srcSet:Z.srcSet,src:b||Z.src},meta:{unoptimized:r,preload:c||u,placeholder:_,fill:y}}}},27446,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=e.r(70160),i="u"<typeof window,a=i?()=>{}:n.useLayoutEffect,o=i?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},92011,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},defaultHead:function(){return c}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(81258),o=e.r(44066),s=e.r(57827),l=o._(e.r(70160)),d=a._(e.r(27446)),u=e.r(3621);function c(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(22663);let p=["name","httpEquiv","charSet","itemProp"];function m(e){let t,r,n,i;return e.reduce(f,[]).reverse().concat(c().reverse()).filter((t=new Set,r=new Set,n=new Set,i={},e=>{let a=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?a=!1:n.add(r);else{let t=e.props[r],n=i[r]||new Set;("name"!==r||!o)&&n.has(t)?a=!1:(n.add(t),i[r]=n)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,l.useContext)(u.HeadManagerContext);return(0,s.jsx)(d.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},36439,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=e.r(81258)._(e.r(70160)),i=e.r(92904),a=n.default.createContext(i.imageConfigDefault)},1706,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(81258)._(e.r(70160)).default.createContext(null)},40795,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},7276,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let n=e.r(40795),i=e.r(43028);function a({config:e,src:t,width:r,quality:o}){let s=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),n=r.get("dpl");if(n){s=n,r.delete("dpl");let i=r.toString();t=t.slice(0,e)+(i?"?"+i:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,n.findClosestQuality)(o,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}a.__next_img_default=!0;let o=a},95079,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(70160);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=a(e,n)),t&&(i.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},9318,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return w}});let n=e.r(81258),i=e.r(44066),a=e.r(57827),o=i._(e.r(70160)),s=n._(e.r(41379)),l=n._(e.r(92011)),d=e.r(41159),u=e.r(92904),c=e.r(36439);e.r(22663);let f=e.r(1706),p=n._(e.r(7276)),m=e.r(95079),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/bs-orange/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,n,i,a,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function y(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,o.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:i,decoding:s,className:l,style:d,fetchPriority:u,placeholder:c,loading:f,unoptimized:p,fill:g,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:v,sizesInput:_,onLoad:j,onError:P,...S},C)=>{let E=(0,o.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&h(e,c,x,b,w,p,_))},[e,c,x,b,w,P,p,_]),O=(0,m.useMergedRef)(C,E);return(0,a.jsx)("img",{...S,...y(u),loading:f,width:i,height:n,decoding:s,"data-nimg":g?"fill":"1",className:l,style:d,sizes:r,srcSet:t,src:e,ref:O,onLoad:e=>{h(e.currentTarget,c,x,b,w,p,_)},onError:e=>{v(!0),"empty"!==c&&w(!0),P&&P(e)}})});function b({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,a.jsx)(l.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(f.RouterContext),n=(0,o.useContext)(c.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=g||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:s,onLoadingComplete:l}=e,m=(0,o.useRef)(s);(0,o.useEffect)(()=>{m.current=s},[s]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[y,w]=(0,o.useState)(!1),[v,_]=(0,o.useState)(!1),{props:j,meta:P}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:v});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x,{...j,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),P.preload?(0,a.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},60878,(e,t,r)=>{t.exports=e.r(49619)},6635,e=>{"use strict";let t=[{slug:"sostoyanie-modular-equipment",title:"«Балтик Стайл» оснастила ЖК «Состояние» в Ростове-на-Дону модульным оборудованием.",date:"16 апреля 2026",image:"news-state-equipment.png",summary:"Российская компания «Систэм Электрик» поставила модульное оборудование и электроустановочные изделия для оснащения жилого комплекса «Состояние».",links:[{label:"City9 Set",href:"https://systeme.ru/products/modulnoye-oborudovaniye-i-shchitki/modulnoye-oborudovaniye-city9-set"},{label:"Systeme9",href:"https://systeme9.systeme.ru/"}],body:["Российская компания «Систэм Электрик» (Systeme Electric), разработчик и производитель комплексных решений в области распределения электроэнергии и автоматизации, поставила модульное оборудование и электроустановочные изделия для оснащения жилого комплекса «Состояние» строительной компании «Девелопмент-Юг».","Строительно-инвестиционная корпорация «Девелопмент-Юг» - федеральный застройщик, работающий в 6 регионах. Жилой комплекс «Состояние» - это дома бизнес-класса в Советском районе Ростова-на-Дону. Архитектура дома сочетает в себе современные тенденции и исторический колорит города.","В ходе реализации проекта было применено модульное оборудование в этажные щиты: City9 Set и Systeme9.","Флагманская серия Systeme9, созданная на базе 10 кА промышленной платформы, объединяет в себе выдающиеся технические характеристики и единый современный дизайн. Линейка, разработанная для критически важных объектов, успешно применяется как в гражданском строительстве, так и на промышленных предприятиях. Устройства проходят двойную сертификацию по промышленным и бытовым стандартам, что гарантирует их соответствие требованиям безопасности.","Автоматы City9 Set предназначены для жилых и коммерческих объектов. В числе ключевых преимуществ - единство конструкции, безопасность, долговечность. Эта линейка стала первой в портфеле бренда Systeme Electric и была разработана в соответствии с требованиями российского рынка.","В проекте были также использованы розетки и выключатели серии Glossa, которые выпускаются в Республике Марий Эл на заводе «Потенциал», одном из крупнейших предприятий по производству электроустановочных изделий в России и СНГ. Розетки и выключатели серии сочетают высокое качество и французский дизайн. Важные особенности - телескопический механизм, жесткий суппорт, контактная группа из технического серебра (Ag+Ni), которая обеспечивает пожаробезопасность и надежность."]},{slug:"systeme-electric-equipment",title:"Systeme Electric расширяет линейку модульного оборудования для инфраструктурных проектов.",date:"15 апреля 2026",image:"news-middle.png",summary:"Новые решения помогают проектировать надежные системы распределения электроэнергии для жилых, коммерческих и промышленных объектов.",body:["Модульное оборудование остается одной из ключевых частей инженерной инфраструктуры современных объектов. Такие решения помогают повысить безопасность, упростить обслуживание и обеспечить стабильную работу критичных систем.","«Балтик Стайл» применяет оборудование проверенных производителей в проектах системной интеграции, подбирая конфигурации под требования конкретного объекта.","В фокусе проектов - надежность, ремонтопригодность и соответствие требованиям эксплуатации."]},{slug:"mining-university-events",title:"«Балтик Стайл» запускает серию мероприятий к юбилею партнерства с Санкт-Петербургским Горным университетом.",date:"14 апреля 2026",image:"news-mining-university.png",summary:"Серия мероприятий посвящена развитию сотрудничества в области образовательной, инженерной и технологической инфраструктуры.",body:["«Балтик Стайл» запускает серию мероприятий, посвященных юбилею партнерства с Санкт-Петербургским Горным университетом.","Программа объединит встречи, демонстрации технологических решений и обсуждение новых направлений развития инфраструктурных проектов.","Компания продолжит поддерживать образовательные инициативы и проекты, связанные с внедрением современных инженерных и ИТ-решений."]}];e.s(["getNewsItem",0,function(e){return t.find(t=>t.slug===e)},"newsItems",0,t])},96659,e=>{"use strict";var t=e.i(57827),r=e.i(70160),n=e.i(60878),i=e.i(88746);e.s(["StyledComponentsRegistry",0,function({children:e}){let[a]=(0,r.useState)(()=>new i.ServerStyleSheet);return(0,n.useServerInsertedHTML)(()=>{let e=a.getStyleElement();return a.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}])},58483,e=>{"use strict";var t=e.i(57827),r=e.i(60878),n=e.i(70160);function i({routes:e}){let t=(0,r.useRouter)();return(0,n.useEffect)(()=>{let r=Array.from(new Set(e)),n=[],i=!1,a=r.map((e,r)=>{let a=()=>{i||t.prefetch(e,{kind:"full",onInvalidate:a})};var o=()=>{let e=window.setTimeout(a,120*r);n.push(e)};if("requestIdleCallback"in window){let e=window.requestIdleCallback(o,{timeout:2500});return()=>window.cancelIdleCallback(e)}let s=globalThis.setTimeout(o,450);return()=>globalThis.clearTimeout(s)});return()=>{i=!0,a.forEach(e=>e()),n.forEach(e=>window.clearTimeout(e))}},[t,e]),null}var a=e.i(6635),o=e.i(88746);let s=o.default.footer.withConfig({displayName:"site-footer.styles__Footer",componentId:"sc-1b168edd-0"})`
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
`,l=o.default.p.withConfig({displayName:"site-footer.styles__Copyright",componentId:"sc-1b168edd-1"})`
  grid-column: 1 / -1;
  margin: 0 0 14px;
  text-align: center;
`;function d(){return(0,t.jsxs)(s,{id:"news",children:[(0,t.jsx)(l,{children:"© 2026 Балтик Стайл — системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей."}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Юридический адрес"}),(0,t.jsx)("span",{children:"236029, Калининградская обл, г Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Телефоны"}),(0,t.jsx)("span",{children:"+74012 99-11-99"}),(0,t.jsx)("span",{children:"+74012 99-11-98"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Реквизиты"}),(0,t.jsx)("span",{children:"ИНН 3905017052, КПП 390601001"}),(0,t.jsx)("span",{children:"ОГРН 1023900773555"}),(0,t.jsx)("span",{children:"Еmail: info@balticstyle.ru"})]})]})}var u=e.i(88750),c=e.i(14031);let f=[{href:"/about",label:"О компании"},{href:"/services",label:"Продукты, технологии, услуги"},{href:"/partners",label:"Партнёры"},{href:"/news",label:"Новости"},{href:"/contacts",label:"Контакты"}],p=o.default.header.withConfig({displayName:"site-header.styles__Header",componentId:"sc-713b4a26-0"})`
  position: relative;
  z-index: 20;
  padding-top: 51px;

  @media (max-width: 900px) {
    padding-top: 24px;
  }
`,m=o.default.div.withConfig({displayName:"site-header.styles__HeaderInner",componentId:"sc-713b4a26-1"})`
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
`,g=o.default.a.withConfig({displayName:"site-header.styles__Brand",componentId:"sc-713b4a26-2"})`
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
`,h=o.default.a.withConfig({displayName:"site-header.styles__Phone",componentId:"sc-713b4a26-3"})`
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
`,y=o.default.button.withConfig({displayName:"site-header.styles__BurgerButton",componentId:"sc-713b4a26-4"})`
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
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,x=o.default.nav.withConfig({displayName:"site-header.styles__Nav",componentId:"sc-713b4a26-5"})`
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
`,b=o.default.nav.withConfig({displayName:"site-header.styles__MobileMenu",componentId:"sc-713b4a26-6"})`
  display: none;

  @media (max-width: 900px) {
    display: grid;
    width: 100vw;
    max-height: ${({$isOpen:e})=>e?"420px":"0"};
    margin-left: calc(50% - 50vw);
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
`;function w(e){return e.replace(/^\/bs-orange(?=\/|$)/,"").replace(/\/$/,"")||"/"}function v(e,t){let r=w(t);return e===r||e.startsWith(`${r}/`)}function _(e){let t=e.endsWith("/")?e:`${e}/`;return(0,c.assetPath)(t)}function j(){let e=w((0,r.usePathname)()),[i,a]=(0,n.useState)(!1),o=(0,c.assetPath)("/");return(0,t.jsxs)(p,{children:[(0,t.jsxs)(m,{children:[(0,t.jsxs)(g,{href:o,"aria-label":"Балтик Стайл",children:[(0,t.jsx)(u.default,{src:(0,c.assetPath)("/figma/logo.svg"),alt:"",width:62,height:75,priority:!0}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:"Балтик Стайл"}),(0,t.jsx)("small",{children:"сетевые решения"})]})]}),(0,t.jsxs)(h,{href:"tel:+74012991199",children:[(0,t.jsx)(u.default,{src:(0,c.assetPath)("/figma/phone.svg"),alt:"",width:18,height:18}),"+7(4012) 99-11-99"]}),(0,t.jsxs)(y,{type:"button","aria-label":i?"Закрыть меню":"Открыть меню","aria-expanded":i,"aria-controls":"mobile-navigation",onClick:()=>a(e=>!e),children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]}),(0,t.jsx)(x,{"aria-label":"Основная навигация",children:f.map(r=>(0,t.jsx)("a",{"data-active":v(e,r.href),href:_(r.href),children:r.label},r.href))}),(0,t.jsxs)(b,{id:"mobile-navigation","aria-label":"Мобильная навигация",$isOpen:i,children:[(0,t.jsx)("a",{"data-active":"/"===e,href:o,onClick:()=>a(!1),children:"Главная"}),f.map(r=>(0,t.jsx)("a",{"data-active":v(e,r.href),href:_(r.href),onClick:()=>a(!1),children:r.label},r.href))]})]})}let P=o.default.main.withConfig({displayName:"app-shell.styles__Page",componentId:"sc-231fc36-0"})`
  --blue: #00163c;
  --title: #0a1a44;
  --orange: #ff8100;
  --muted: #575757;
  --field: #e9e9e9;
  width: min(100%, 1280px);
  margin: 0 auto;
  background: #ffffff;
  color: #000000;
`,S=["/",...f.map(e=>e.href),...a.newsItems.map(e=>`/news/${e.slug}`),...a.newsItems.map(e=>`/news/selected-news-item?news=${e.slug}`)];e.s(["AppShell",0,function({children:e}){return(0,t.jsxs)(P,{children:[(0,t.jsx)(i,{routes:S}),(0,t.jsx)(j,{}),e,(0,t.jsx)(d,{})]})}],58483)}]);