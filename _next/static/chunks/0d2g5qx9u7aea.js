(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return u},formatWithValidation:function(){return l},urlObjectKeys:function(){return c}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:n}=e,r=e.protocol||"",i=e.pathname||"",u=e.hash||"",c=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:n&&(l=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(l+=":"+e.port)),c&&"object"==typeof c&&(c=String(o.urlQueryToSearchParams(c)));let s=e.search||c&&`?${c}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||a.test(r))&&!1!==l?(l="//"+(l||""),i&&"/"!==i[0]&&(i="/"+i)):l||(l=""),u&&"#"!==u[0]&&(u="#"+u),s&&"?"!==s[0]&&(s="?"+s),i=i.replace(/[?#]/g,encodeURIComponent),s=s.replace("#","%23"),`${r}${l}${i}${s}${u}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return u(e)}},38982,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),i=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},84508,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return x},useLinkStatus:function(){return b}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(90809),a=e.r(43476),u=o._(e.r(71645)),c=e.r(95057),l=e.r(8372),s=e.r(18581),d=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(88540),h=e.r(91949),m=e.r(38982),g=e.r(9396);function x(t){var n,r;let i,o,x,[b,v]=(0,u.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,u.useRef)(null),{href:S,as:_,children:j,prefetch:I=null,passHref:C,replace:O,shallow:k,scroll:E,onClick:T,onMouseEnter:N,onTouchStart:P,legacyBehavior:L=!1,onNavigate:A,transitionTypes:D,ref:M,unstable_dynamicOnHover:F,...R}=t;i=j,L&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let z=u.default.useContext(l.AppRouterContext),$=!1!==I,U=!1!==I?null===(r=I)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,B="string"==typeof(n=_||S)?n:(0,c.formatUrl)(n);if(L){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=u.default.Children.only(i)}let V=L?o&&"object"==typeof o&&o.ref:M,H=u.default.useCallback(e=>(null!==z&&(w.current=(0,h.mountLinkInstance)(e,B,z,U,$,v)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[$,B,z,U,v]),K={ref:(0,s.useMergedRef)(H,V),onClick(t){L||"function"!=typeof T||T(t),L&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!z||t.defaultPrevented||function(t,n,r,i,o,a,c){if("u">typeof window){let l,{nodeName:s}=t.currentTarget;if("A"===s.toUpperCase()&&((l=t.currentTarget.getAttribute("target"))&&"_self"!==l||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);u.default.startTransition(()=>{d(n,i?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,r.current,c)})}}(t,B,w,O,E,A,D)},onMouseEnter(e){L||"function"!=typeof N||N(e),L&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),z&&$&&(0,h.onNavigationIntent)(e.currentTarget,!0===F)},onTouchStart:function(e){L||"function"!=typeof P||P(e),L&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),z&&$&&(0,h.onNavigationIntent)(e.currentTarget,!0===F)}};return(0,d.isAbsoluteUrl)(B)?K.href=B:L&&!C&&("a"!==o.type||"href"in o.props)||(K.href=(0,f.addBasePath)(B)),x=L?u.default.cloneElement(o,K):(0,a.jsx)("a",{...R,...K,children:i}),(0,a.jsx)(y.Provider,{value:b,children:x})}e.r(84508);let y=(0,u.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,u.useContext)(y);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},31621,e=>{"use strict";var t=e.i(43476),n=e.i(71645);function r(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function i(e,t){let n=Object.keys(e),o=Object.keys(t);return n.length===o.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let o=e[n],a=t[n];return"function"==typeof o?`${o}`==`${a}`:r(o)&&r(a)?i(o,a):o===a})}function o(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function a(e){return"number"==typeof e}function u(e){return"string"==typeof e}function c(e){return"boolean"==typeof e}function l(e){return"[object Object]"===Object.prototype.toString.call(e)}function s(e){return Math.abs(e)}function d(e){return Math.sign(e)}function f(e){return g(e).map(Number)}function p(e){return e[h(e)]}function h(e){return Math.max(0,e.length-1)}function m(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function g(e){return Object.keys(e)}function x(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function y(){let e=[],t={add:function(n,r,i,o={passive:!0}){let a;return"addEventListener"in n?(n.addEventListener(r,i,o),a=()=>n.removeEventListener(r,i,o)):(n.addListener(i),a=()=>n.removeListener(i)),e.push(a),t},clear:function(){e=e.filter(e=>e())}};return t}function b(e=0,t=0){let n=s(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function v(e){let t=e;function n(e){return a(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function w(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,i=null,o=!1;return{clear:function(){!o&&(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){if(o)return;let a=Math.round(100*e.direction(t))/100;a!==i&&(r.transform=n(a),i=a)},toggleActive:function(e){o=!e}}}let S={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function _(e,t,n){let r,i,o,j,I,C,O,k,E=e.ownerDocument,T=E.defaultView,N=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(g(n).forEach(r=>{let i=t[r],o=n[r],a=l(i)&&l(o);t[r]=a?e(i,o):o}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},i=g(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,i)},optionsMediaQueries:function(t){return t.map(e=>g(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(T),P=(k=[],{init:function(e,t){return(k=t.filter(({options:e})=>!1!==N.optionsAtMedia(e).active)).forEach(t=>t.init(e,N)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){k=k.filter(e=>e.destroy())}}),L=y(),A=(i={},o={init:function(e){r=e},emit:function(e){return(i[e]||[]).forEach(t=>t(r,e)),o},off:function(e,t){return i[e]=(i[e]||[]).filter(e=>e!==t),o},on:function(e,t){return i[e]=(i[e]||[]).concat([t]),o},clear:function(){i={}}}),{mergeOptions:D,optionsAtMedia:M,optionsMediaQueries:F}=N,{on:R,off:z,emit:$}=A,U=!1,B=D(S,_.globalOptions),V=D(B),H=[];function K(t,n){U||(V=M(B=D(B,t)),H=n||H,function(){let{container:t,slides:n}=V;C=(u(t)?e.querySelector(t):t)||e.children[0];let r=u(n)?C.querySelectorAll(n):n;O=[].slice.call(r||C.children)}(),j=function t(n){let r=function(e,t,n,r,i,o,l){var S,_;let j,I,C,O,k,E,T,N,P,L,A,D,M,F,{align:R,axis:z,direction:$,startIndex:U,loop:B,duration:V,dragFree:H,dragThreshold:K,inViewThreshold:q,slidesToScroll:X,skipSnaps:J,containScroll:Y,watchResize:Q,watchSlides:W,watchDrag:G,watchFocus:Z}=o,ee={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}},et=ee.measure(t),en=n.map(ee.measure),er=(I="rtl"===$,O=(C="y"===z)||!I?1:-1,k=C?"top":I?"right":"left",E=C?"bottom":I?"left":"right",{scroll:C?"y":"x",cross:C?"x":"y",startEdge:k,endEdge:E,measureSize:function(e){let{height:t,width:n}=e;return C?t:n},direction:function(e){return e*O}}),ei=er.measureSize(et),eo={measure:function(e){return e/100*ei}},ea=(S=R,_=ei,j={start:function(){return 0},center:function(e){return(_-e)/2},end:function(e){return _-e}},{measure:function(e,t){return u(S)?j[S](e):S(_,e,t)}}),eu=!B&&!!Y,{slideSizes:ec,slideSizesWithGaps:el,startGap:es,endGap:ed}=function(e,t,n,r,i,o){let{measureSize:a,startEdge:u,endEdge:c}=e,l=n[0]&&i,d=function(){if(!l)return 0;let e=n[0];return s(t[u]-e[u])}(),f=l?parseFloat(o.getComputedStyle(p(r)).getPropertyValue(`margin-${c}`)):0,m=n.map(a),g=n.map((e,t,n)=>{let r=t===h(n);return t?r?m[t]+f:n[t+1][u]-e[u]:m[t]+d}).map(s);return{slideSizes:m,slideSizesWithGaps:g,startGap:d,endGap:f}}(er,et,en,n,B||!!Y,i),ef=function(e,t,n,r,i,o,u,c){let{startEdge:l,endEdge:d,direction:m}=e,g=a(n);return{groupSlides:function(e){return g?f(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?f(e).reduce((n,a,f)=>{let g=p(n)||0,x=a===h(e),y=i[l]-o[g][l],b=i[l]-o[a][d],v=r||0!==g?0:m(u),w=s(b-(!r&&x?m(c):0)-(y+v));return f&&w>t+2&&n.push(a),x&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}}}(er,ei,X,B,et,en,es,ed),{snaps:ep,snapsAligned:eh}=function(e,t,n,r,i){let{startEdge:o,endEdge:a}=e,{groupSlides:u}=i,c=u(r).map(e=>p(e)[a]-e[0][o]).map(s).map(t.measure),l=r.map(e=>n[o]-e[o]).map(e=>-s(e)),d=u(l).map(e=>e[0]).map((e,t)=>e+c[t]);return{snaps:l,snapsAligned:d}}(er,ea,et,en,ef),em=-p(ep)+p(el),{snapsContained:eg,scrollContainLimit:ex}=function(e,t,n,r){let i,o,a=b(-t+e,0),u=n.map((e,t)=>{let{min:r,max:i}=a,o=a.constrain(e),u=t===h(n);return t?u||function(e,t){return 1>=s(e-t)}(r,o)?r:function(e,t){return 1>=s(e-t)}(i,o)?i:o:i}).map(e=>parseFloat(e.toFixed(3))),c=(i=u[0],o=p(u),b(u.lastIndexOf(i),u.indexOf(o)+1));return{snapsContained:function(){if(t<=e+2)return[a.max];if("keepSnaps"===r)return u;let{min:n,max:i}=c;return u.slice(n,i)}(),scrollContainLimit:c}}(ei,em,eh,Y),ey=eu?eg:eh,{limit:eb}=(T=ey[0],{limit:b(B?T-em:p(ey),T)}),ev=function e(t,n,r){let{constrain:i}=b(0,t),o=t+1,a=u(n);function u(e){return r?s((o+e)%o):i(e)}function c(){return e(t,a,r)}let l={get:function(){return a},set:function(e){return a=u(e),l},add:function(e){return c().set(a+e)},clone:c};return l}(h(ey),U,B),ew=ev.clone(),eS=f(n),e_=function(e,t,n,r){let i=y(),o=1e3/60,a=null,u=0,c=0;function l(e){if(!c)return;a||(a=e,n(),n());let i=e-a;for(a=e,u+=i;u>=o;)n(),u-=o;r(u/o),c&&(c=t.requestAnimationFrame(l))}function s(){t.cancelAnimationFrame(c),a=null,u=0,c=0}return{init:function(){i.add(e,"visibilitychange",()=>{e.hidden&&(a=null,u=0)})},destroy:function(){s(),i.clear()},start:function(){c||(c=t.requestAnimationFrame(l))},stop:s,update:n,render:r}}(r,i,()=>(({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()})(eF),e=>(({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:o,slideLooper:a,dragHandler:u,animation:c,eventHandler:l,scrollBounds:s,options:{loop:d}},f)=>{let p=e.settled(),h=!s.shouldConstrain(),m=d?p:p&&h,g=m&&!u.pointerDown();g&&c.stop();let x=n.get()*f+i.get()*(1-f);r.set(x),d&&(o.loop(e.direction()),a.loop()),t.to(r.get()),g&&l.emit("settle"),m||l.emit("scroll")})(eF,e)),ej=ey[ev.get()],eI=v(ej),eC=v(ej),eO=v(ej),ek=v(ej),eE=function(e,t,n,r,i){let o=0,a=0,u=i,c=.68,l=e.get(),f=0;function p(e){return u=e,m}function h(e){return c=e,m}let m={direction:function(){return a},duration:function(){return u},velocity:function(){return o},seek:function(){let t=r.get()-e.get(),i=0;return u?(n.set(e),o+=t/u,o*=c,l+=o,e.add(o),i=l-f):(o=0,n.set(r),e.set(r),i=t),a=d(i),f=l,m},settled:function(){return .001>s(r.get()-t.get())},useBaseFriction:function(){return h(.68)},useBaseDuration:function(){return p(i)},useFriction:h,useDuration:p};return m}(eI,eO,eC,ek,V),eT=function(e,t,n,r,i){let{reachedAny:o,removeOffset:a,constrain:u}=r;function c(e){return e.concat().sort((e,t)=>s(e)-s(t))[0]}function l(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let o=i.filter(e=>d(e)===r);return o.length?c(o):p(i)-n}return{byDistance:function(n,r){let c=i.get()+n,{index:d,distance:f}=function(n){let r=e?a(n):u(n),{index:i}=t.map((e,t)=>({diff:l(e-r,0),index:t})).sort((e,t)=>s(e.diff)-s(t.diff))[0];return{index:i,distance:r}}(c),p=!e&&o(c);if(!r||p)return{index:d,distance:n};let h=n+l(t[d]-f,0);return{index:d,distance:h}},byIndex:function(e,n){let r=l(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:l}}(B,ey,em,eb,ek),eN=function(e,t,n,r,i,o,a){function u(i){let u=i.distance,c=i.index!==t.get();o.add(u),u&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),a.emit("select"))}return{distance:function(e,t){u(i.byDistance(e,t))},index:function(e,n){let r=t.clone().set(e);u(i.byIndex(r.get(),n))}}}(e_,ev,ew,eE,eT,ek,l),eP=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(eb),eL=y(),eA=(P={},L=null,A=null,D=!1,{init:function(){N=new IntersectionObserver(e=>{D||(e.forEach(e=>{P[n.indexOf(e.target)]=e}),L=null,A=null,l.emit("slidesInView"))},{root:t.parentElement,threshold:q}),n.forEach(e=>N.observe(e))},destroy:function(){N&&N.disconnect(),D=!0},get:function(e=!0){if(e&&L)return L;if(!e&&A)return A;let t=g(P).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=P[r];return(e&&i||!e&&!i)&&t.push(r),t},[]);return e&&(L=t),e||(A=t),t}}),{slideRegistry:eD}=function(e,t,n,r,i,o){let a,{groupSlides:u}=i,{min:c,max:l}=r;return{slideRegistry:(a=u(o),1===n.length?[o]:e&&"keepSnaps"!==t?a.slice(c,l).map((e,t,n)=>{let r=t===h(n);return t?r?m(h(o)-p(n)[0]+1,p(n)[0]):e:m(p(n[0])+1)}):a)}}(eu,Y,ey,ex,ef,eS),eM=function(e,t,n,r,i,o,u,l){let s={passive:!0,capture:!0},d=0;function f(e){"Tab"===e.code&&(d=new Date().getTime())}return{init:function(p){l&&(o.add(document,"keydown",f,!1),t.forEach((t,f)=>{o.add(t,"focus",t=>{(c(l)||l(p,t))&&function(t){if(new Date().getTime()-d>10)return;u.emit("slideFocusStart"),e.scrollLeft=0;let o=n.findIndex(e=>e.includes(t));a(o)&&(i.useDuration(0),r.index(o,0),u.emit("slideFocus"))}(f)},s)}))}}}(e,n,eD,eN,eE,eL,l,Z),eF={ownerDocument:r,ownerWindow:i,eventHandler:l,containerRect:et,slideRects:en,animation:e_,axis:er,dragHandler:function(e,t,n,r,i,o,a,u,l,f,p,h,m,g,v,w,S,_){let{cross:j,direction:I}=e,C=["INPUT","SELECT","TEXTAREA"],O={passive:!1},k=y(),E=y(),T=b(50,225).constrain(g.measure(20)),N={mouse:300,touch:400},P={mouse:500,touch:600},L=v?43:25,A=!1,D=0,M=0,F=!1,R=!1,z=!1,$=!1;function U(e){if(!x(e,r)&&e.touches.length>=2)return B(e);let t=o.readPoint(e),n=o.readPoint(e,j),a=s(t-D),c=s(n-M);if(!R&&!$&&(!e.cancelable||!(R=a>c)))return B(e);let l=o.pointerMove(e);a>w&&(z=!0),f.useFriction(.3).useDuration(.75),u.start(),i.add(I(l)),e.preventDefault()}function B(e){var t;let n,r,i=p.byDistance(0,!1).index!==h.get(),a=o.pointerUp(e)*(v?P:N)[$?"mouse":"touch"],u=(t=I(a),n=h.add(-1*d(t)),r=p.byDistance(t,!v).distance,v||s(t)<T?r:S&&i?.5*r:p.byIndex(n.get(),0).distance),c=function(e,t){var n,r;if(0===e||0===t||s(e)<=s(t))return 0;let i=(n=s(e),r=s(t),s(n-r));return s(i/e)}(a,u);R=!1,F=!1,E.clear(),f.useDuration(L-10*c).useFriction(.68+c/50),l.distance(u,!v),$=!1,m.emit("pointerUp")}function V(e){z&&(e.stopPropagation(),e.preventDefault(),z=!1)}return{init:function(e){_&&k.add(t,"dragstart",e=>e.preventDefault(),O).add(t,"touchmove",()=>void 0,O).add(t,"touchend",()=>void 0).add(t,"touchstart",u).add(t,"mousedown",u).add(t,"touchcancel",B).add(t,"contextmenu",B).add(t,"click",V,!0);function u(u){(c(_)||_(e,u))&&function(e){let u,c=x(e,r);if(($=c,z=v&&c&&!e.buttons&&A,A=s(i.get()-a.get())>=2,!c||0===e.button)&&(u=e.target.nodeName||"",!C.includes(u))){let r;F=!0,o.pointerDown(e),f.useFriction(0).useDuration(0),i.set(a),r=$?n:t,E.add(r,"touchmove",U,O).add(r,"touchend",B).add(r,"mousemove",U,O).add(r,"mouseup",B),D=o.readPoint(e),M=o.readPoint(e,j),m.emit("pointerDown")}}(u)}},destroy:function(){k.clear(),E.clear()},pointerDown:function(){return F}}}(er,e,r,i,ek,function(e,t){let n,r;function i(e){return e.timeStamp}function o(n,r){let i=r||e.scroll,o=`client${"x"===i?"X":"Y"}`;return(x(n,t)?n:n.touches[0])[o]}return{pointerDown:function(e){return n=e,r=e,o(e)},pointerMove:function(e){let t=o(e)-o(r),a=i(e)-i(n)>170;return r=e,a&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=o(r)-o(n),a=i(e)-i(n),u=i(e)-i(r)>170,c=t/a;return a&&!u&&s(c)>.1?c:0},readPoint:o}}(er,i),eI,e_,eN,eE,eT,ev,l,eo,H,K,J,G),eventStore:eL,percentOfView:eo,index:ev,indexPrevious:ew,limit:eb,location:eI,offsetLocation:eO,previousLocation:eC,options:o,resizeHandler:function(e,t,n,r,i,o,a){let u,l,d=[e].concat(r),f=[],p=!1;function h(e){return i.measureSize(a.measure(e))}return{init:function(i){o&&(l=h(e),f=r.map(h),u=new ResizeObserver(n=>{(c(o)||o(i,n))&&function(n){for(let o of n){if(p)return;let n=o.target===e,a=r.indexOf(o.target),u=n?l:f[a];if(s(h(n?e:r[a])-u)>=.5){i.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{d.forEach(e=>u.observe(e))}))},destroy:function(){p=!0,u&&u.disconnect()}}}(t,l,i,n,er,Q,ee),scrollBody:eE,scrollBounds:function(e,t,n,r,i){let o=i.measure(10),a=i.measure(50),u=b(.1,.99),c=!1;function l(){return!c&&!!e.reachedAny(n.get())&&!!e.reachedAny(t.get())}return{shouldConstrain:l,constrain:function(i){if(!l())return;let c=e.reachedMin(t.get())?"min":"max",d=s(e[c]-t.get()),f=n.get()-t.get(),p=u.constrain(d/a);n.subtract(f*p),!i&&s(f)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){c=!e}}}(eb,eO,ek,eE,eo),scrollLooper:function(e,t,n,r){let{reachedMin:i,reachedMax:o}=b(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?o(n.get()):-1===t&&i(n.get())))return;let a=-1*t*e;r.forEach(e=>e.add(a))}}}(em,eb,eO,[eI,eO,eC,ek]),scrollProgress:eP,scrollSnapList:ey.map(eP.get),scrollSnaps:ey,scrollTarget:eT,scrollTo:eN,slideLooper:function(e,t,n,r,i,o,a,u,c){let l=f(i),s=f(i).reverse(),d=m(h(s,a[0]),n,!1).concat(m(h(l,t-a[0]-1),-n,!0));function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function h(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function m(i,a,l){let s=o.map((e,n)=>({start:e-r[n]+.5+a,end:e+t-.5+a}));return i.map(t=>{let r=l?0:-n,i=l?n:0,o=s[t][l?"end":"start"];return{index:t,loopPoint:o,slideLocation:v(-1),translate:w(e,c[t]),target:()=>u.get()>o?r:i}})}return{canLoop:function(){return d.every(({index:e})=>.1>=p(l.filter(t=>t!==e),t))},clear:function(){d.forEach(e=>e.translate.clear())},loop:function(){d.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:d}}(er,ei,em,ec,el,ep,ey,eO,n),slideFocus:eM,slidesHandler:(F=!1,{init:function(e){W&&(M=new MutationObserver(t=>{!F&&(c(W)||W(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),l.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){M&&M.disconnect(),F=!0}}),slidesInView:eA,slideIndexes:eS,slideRegistry:eD,slidesToScroll:ef,target:ek,translate:w(er,t)};return eF}(e,C,O,E,T,n,A);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(V),F([B,...H.map(({options:e})=>e)]).forEach(e=>L.add(e,"change",q)),V.active&&(j.translate.to(j.location.get()),j.animation.init(),j.slidesInView.init(),j.slideFocus.init(Q),j.eventHandler.init(Q),j.resizeHandler.init(Q),j.slidesHandler.init(Q),j.options.loop&&j.slideLooper.loop(),C.offsetParent&&O.length&&j.dragHandler.init(Q),I=P.init(Q,H)))}function q(e,t){let n=Y();X(),K(D({startIndex:n},e),t),A.emit("reInit")}function X(){j.dragHandler.destroy(),j.eventStore.clear(),j.translate.clear(),j.slideLooper.clear(),j.resizeHandler.destroy(),j.slidesHandler.destroy(),j.slidesInView.destroy(),j.animation.destroy(),P.destroy(),L.clear()}function J(e,t,n){V.active&&!U&&(j.scrollBody.useBaseFriction().useDuration(!0===t?0:V.duration),j.scrollTo.index(e,n||0))}function Y(){return j.index.get()}let Q={canScrollNext:function(){return j.index.add(1).get()!==Y()},canScrollPrev:function(){return j.index.add(-1).get()!==Y()},containerNode:function(){return C},internalEngine:function(){return j},destroy:function(){U||(U=!0,L.clear(),X(),A.emit("destroy"),A.clear())},off:z,on:R,emit:$,plugins:function(){return I},previousScrollSnap:function(){return j.indexPrevious.get()},reInit:q,rootNode:function(){return e},scrollNext:function(e){J(j.index.add(1).get(),e,-1)},scrollPrev:function(e){J(j.index.add(-1).get(),e,1)},scrollProgress:function(){return j.scrollProgress.get(j.offsetLocation.get())},scrollSnapList:function(){return j.scrollSnapList},scrollTo:J,selectedScrollSnap:Y,slideNodes:function(){return O},slidesInView:function(){return j.slidesInView.get()},slidesNotInView:function(){return j.slidesInView.get(!1)}};return K(t,n),setTimeout(()=>A.emit("init"),0),Q}function j(e={},t=[]){let r=(0,n.useRef)(e),a=(0,n.useRef)(t),[u,c]=(0,n.useState)(),[l,s]=(0,n.useState)(),d=(0,n.useCallback)(()=>{u&&u.reInit(r.current,a.current)},[u]);return(0,n.useEffect)(()=>{i(r.current,e)||(r.current=e,d())},[e,d]),(0,n.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=o(e),r=o(t);return n.every((e,t)=>i(e,r[t]))}(a.current,t)&&(a.current=t,d())},[t,d]),(0,n.useEffect)(()=>{if("u">typeof window&&window.document&&window.document.createElement&&l){_.globalOptions=j.globalOptions;let e=_(l,r.current,a.current);return c(e),()=>e.destroy()}c(void 0)},[l,c]),[s,u]}_.globalOptions=void 0,j.globalOptions=void 0;var I=e.i(57688),C=e.i(22016),O=e.i(97053);let k=O.default.section.withConfig({displayName:"news-page.styles__NewsSection",componentId:"sc-85bd20cb-0"})`
    width: 100vw;
    margin-left: calc(50% - 50vw);
    padding: 48px 72px 96px;
    background: #ffffff;


    @media (max-width: 900px) {
        padding: 40px 24px 72px;
    }
`,E=O.default.div.withConfig({displayName:"news-page.styles__PageContent",componentId:"sc-85bd20cb-1"})`
    width: min(100%, 996px);
    margin: 0 auto;
`,T=O.default.h1.withConfig({displayName:"news-page.styles__SectionTitle",componentId:"sc-85bd20cb-2"})`
    margin: 0 0 30px;
    color: #000000;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
`,N=O.default.div.withConfig({displayName:"news-page.styles__SliderShell",componentId:"sc-85bd20cb-3"})`
    position: relative;


    @media (max-width: 900px) {
        padding-inline: 50px;
    }

    @media (max-width: 640px) {
        padding-inline: 44px;
    }
`,P=O.default.div.withConfig({displayName:"news-page.styles__SliderViewport",componentId:"sc-85bd20cb-4"})`
    padding: 12px 0 40px;
    margin-top: -12px;
    margin-bottom: -40px;
    overflow: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    cursor: grab;

    &::-webkit-scrollbar {
        display: none;
    }

    &[data-dragging="true"] {
        cursor: grabbing;
        scroll-behavior: auto;
    }

    @media (prefers-reduced-motion: reduce) {
        scroll-behavior: auto;
    }
`,L=O.default.div.withConfig({displayName:"news-page.styles__SliderTrack",componentId:"sc-85bd20cb-5"})`
    display: flex;
    gap: 30px;
    padding: 8px 0 8px;
`,A=O.default.a.withConfig({displayName:"news-page.styles__NewsCard",componentId:"sc-85bd20cb-6"})`
    flex: 0 0 293px;

    color: #000000;
    text-decoration: none;
    scroll-snap-align: start;
    border: 1px solid black;
    transition: transform 180ms ease,
    box-shadow 180ms ease;

    img {
        width: 300px;
        height: 203px;
        object-fit: cover;

    }

    h2 {
        margin: 28px 0 0;
        color: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.25;
    }

    time {
        display: block;
        margin-top: 20px;
        color: #969494;
        font-size: 12px;
        line-height: 1.25;


    }

    &:hover {
        box-shadow: 17px 23px 18px 0 rgba(34, 60, 80, 0.3);
        transform: translateY(-8px);
    }


    &:hover h2,
    &:focus-visible h2 {
        color: #ff8100;
    }

    

    &:focus-visible {
        outline: 2px solid #ff8100;
        outline-offset: 8px;
    }

    @media (max-width: 640px) {
        flex-basis: min(100%, 293px);
    }
`,D=O.default.div.withConfig({displayName:"news-page.styles__SliderControls",componentId:"sc-85bd20cb-7"})`
    position: absolute;
    inset: 0 -54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;

    @media (max-width: 900px) {
        inset-inline: 0;
    }
`,M=O.default.button.withConfig({displayName:"news-page.styles__SliderButton",componentId:"sc-85bd20cb-8"})`
    display: grid;
    flex-shrink: 0;
    width: 38px;
    height: 38px;
    place-items: center;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    background: #ffffff;
    color: #000000;
    cursor: pointer;
    pointer-events: auto;
    font-size: 24px;
    line-height: 1;
    transition: border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;

    &:hover,
    &:focus-visible {
        border-color: #ff8100;
        color: #ff8100;
        transform: translateY(-1px);
    }
`;O.default.section.withConfig({displayName:"news-page.styles__ArticleSection",componentId:"sc-85bd20cb-9"})`
    width: 100vw;
    margin-left: calc(50% - 50vw);
    padding: 43px 72px 120px;
    background: #ffffff;

    @media (max-width: 900px) {
        padding: 40px 24px 84px;
    }
`,O.default.header.withConfig({displayName:"news-page.styles__ArticleHeader",componentId:"sc-85bd20cb-10"})`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 418px);

    align-items: start;

    h1 {
        margin: 0;
        font-size: 25px;
        font-weight: 400;
        line-height: 1.22;
    }

    img {
        width: 300px;
        height: 290px;
        object-fit: cover;
    }

    @media (max-width: 780px) {
        grid-template-columns: 1fr;

        img {
            height: auto;
            aspect-ratio: 418 / 290;
        }
    }
`,O.default.p.withConfig({displayName:"news-page.styles__ArticleKicker",componentId:"sc-85bd20cb-11"})`
    margin: 0 0 48px;
    color: #ff8100;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
`,O.default.time.withConfig({displayName:"news-page.styles__ArticleMeta",componentId:"sc-85bd20cb-12"})`
    display: block;
    margin-top: 28px;
    color: #969494;
    font-size: 12px;
    line-height: 1.25;
`,O.default.div.withConfig({displayName:"news-page.styles__ArticleBody",componentId:"sc-85bd20cb-13"})`
    width: min(100%, 923px);
    margin-top: 30px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.22;

    p {
        margin: 0;
    }

    p + p {
        margin-top: 0;
    }

    a {
        color: inherit;
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    @media (max-width: 640px) {
        margin-top: 44px;
        font-size: 16px;
        line-height: 1.35;

        p + p {
            margin-top: 12px;
        }
    }
`,O.default.a.withConfig({displayName:"news-page.styles__BackLink",componentId:"sc-85bd20cb-14"})`
    display: inline-flex;
    margin-top: 42px;
    color: #ff8100;
    font-size: 16px;
    text-decoration: none;

    &:hover,
    &:focus-visible {
        text-decoration: underline;
        text-underline-offset: 4px;
    }
`;let F=O.default.div.withConfig({displayName:"Container",componentId:"sc-5e8920bf-0"})`
    display: flex;

    flex-direction: ${e=>e.direction??"row"};
    justify-content: ${e=>e.justify??"flex-start"};
    align-items: ${e=>e.align??"stretch"};
    gap: ${e=>e.gap??0}px;
`;e.s(["NewsPage",0,function({newsItems:e}){let[n,r]=j({align:"start",loop:!1,slidesToScroll:1});return(0,t.jsx)(k,{children:(0,t.jsxs)(E,{children:[(0,t.jsx)(T,{children:"Наши новости"}),(0,t.jsxs)(N,{children:[(0,t.jsx)(P,{ref:n,children:(0,t.jsx)(L,{children:e.map((e,n)=>{var r,i;return(0,t.jsx)(A,{as:C.default,href:`/news/${e.slug}`,children:(0,t.jsxs)(F,{direction:"column",align:"center",gap:0,children:[e.cover&&(0,t.jsx)(I.default,{src:(r=e.cover,`http://localhost:8055/assets/${r}`),alt:e.cover_alt??e.title,width:293,height:203,priority:0===n}),(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("p",{children:e.summary}),(0,t.jsx)("time",{dateTime:e.published_at??"",children:(i=e.published_at)?new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",year:"numeric"}).format(new Date(i)):""})]})},e.slug)})})}),(0,t.jsxs)(D,{children:[(0,t.jsx)(M,{onClick:()=>r?.scrollPrev(),children:"‹"}),(0,t.jsx)(M,{onClick:()=>r?.scrollNext(),children:"›"})]})]})]})})}],31621)}]);