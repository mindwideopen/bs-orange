(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40845,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(44066)._(e.r(7584)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(o.urlQueryToSearchParams(s)));let d=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),i=i.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${i}${d}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},99788,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let n=e.r(46240),i=e.r(66028);function o(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},46713,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},70467,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return x},useLinkStatus:function(){return w}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let o=e.r(44066),a=e.r(57827),l=o._(e.r(70160)),s=e.r(40845),c=e.r(75278),d=e.r(95079),f=e.r(46240),p=e.r(88338);e.r(22663);let u=e.r(26876),h=e.r(72313),g=e.r(99788),m=e.r(68760);function x(t){var r,n;let i,o,x,[w,y]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:S,as:_,children:j,prefetch:C=null,passHref:P,replace:I,shallow:k,scroll:N,onClick:T,onMouseEnter:A,onTouchStart:L,legacyBehavior:O=!1,onNavigate:R,transitionTypes:B,ref:M,unstable_dynamicOnHover:E,...U}=t;i=j,O&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let z=l.default.useContext(c.AppRouterContext),K=!1!==C,$=!1!==C?null===(n=C)||"auto"===n?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,D="string"==typeof(r=_||S)?r:(0,s.formatUrl)(r);if(O){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=l.default.Children.only(i)}let F=O?o&&"object"==typeof o&&o.ref:M,q=l.default.useCallback(e=>(null!==z&&(v.current=(0,h.mountLinkInstance)(e,D,z,$,K,y)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[K,D,z,$,y]),V={ref:(0,d.useMergedRef)(q,F),onClick(t){O||"function"!=typeof T||T(t),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!z||t.defaultPrevented||function(t,r,n,i,o,a,s){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(86248);l.default.startTransition(()=>{f(r,i?"replace":"push",!1===o?u.ScrollBehavior.NoScroll:u.ScrollBehavior.Default,n.current,s)})}}(t,D,v,I,N,R,B)},onMouseEnter(e){O||"function"!=typeof A||A(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),z&&K&&(0,h.onNavigationIntent)(e.currentTarget,!0===E)},onTouchStart:function(e){O||"function"!=typeof L||L(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),z&&K&&(0,h.onNavigationIntent)(e.currentTarget,!0===E)}};return(0,f.isAbsoluteUrl)(D)?V.href=D:O&&!P&&("a"!==o.type||"href"in o.props)||(V.href=(0,p.addBasePath)(D)),x=O?l.default.cloneElement(o,V):(0,a.jsx)("a",{...U,...V,children:i}),(0,a.jsx)(b.Provider,{value:w,children:x})}e.r(46713);let b=(0,l.createContext)(h.IDLE_LINK_STATUS),w=()=>(0,l.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18572,e=>{"use strict";var t=e.i(88746);let r=t.default.section.withConfig({displayName:"news-page.styles__NewsSection",componentId:"sc-85bd20cb-0"})`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 48px 72px 96px;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 24px 72px;
  }
`,n=t.default.div.withConfig({displayName:"news-page.styles__PageContent",componentId:"sc-85bd20cb-1"})`
  width: min(100%, 996px);
  margin: 0 auto;
`,i=t.default.h1.withConfig({displayName:"news-page.styles__SectionTitle",componentId:"sc-85bd20cb-2"})`
  margin: 0 0 30px;
  color: #000000;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`,o=t.default.div.withConfig({displayName:"news-page.styles__SliderShell",componentId:"sc-85bd20cb-3"})`
  position: relative;
`,a=t.default.div.withConfig({displayName:"news-page.styles__SliderViewport",componentId:"sc-85bd20cb-4"})`
  overflow-x: auto;
  overflow-y: hidden;
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
`,l=t.default.div.withConfig({displayName:"news-page.styles__SliderTrack",componentId:"sc-85bd20cb-5"})`
  display: flex;
  gap: 22px;
  padding: 0 0 8px;
`,s=t.default.a.withConfig({displayName:"news-page.styles__NewsCard",componentId:"sc-85bd20cb-6"})`
  flex: 0 0 293px;
  color: #000000;
  text-decoration: none;
  scroll-snap-align: start;

  img {
    width: 100%;
    height: 203px;
    border: 0.3px solid #a5a0a0;
    object-fit: cover;
    transition:
      transform 180ms ease,
      box-shadow 180ms ease;
  }

  h2 {
    min-height: 45px;
    margin: 28px 0 0;
    color: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.25;
  }

  time {
    display: block;
    margin-top: 18px;
    color: #969494;
    font-size: 12px;
    line-height: 1.25;
  }

  &[data-featured="true"] h2,
  &:hover h2,
  &:focus-visible h2 {
    color: #ff8100;
  }

  &:hover img,
  &:focus-visible img {
    box-shadow: 0 16px 30px rgb(0 0 0 / 10%);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #ff8100;
    outline-offset: 8px;
  }

  @media (max-width: 640px) {
    flex-basis: min(82vw, 293px);
  }
`,c=t.default.div.withConfig({displayName:"news-page.styles__SliderControls",componentId:"sc-85bd20cb-7"})`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`,d=t.default.button.withConfig({displayName:"news-page.styles__SliderButton",componentId:"sc-85bd20cb-8"})`
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
  transition:
    border-color 160ms ease,
    color 160ms ease,
    transform 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: #ff8100;
    color: #ff8100;
    transform: translateY(-1px);
  }
`,f=t.default.section.withConfig({displayName:"news-page.styles__ArticleSection",componentId:"sc-85bd20cb-9"})`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 43px 72px 120px;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 24px 84px;
  }
`,p=t.default.header.withConfig({displayName:"news-page.styles__ArticleHeader",componentId:"sc-85bd20cb-10"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 418px);
  gap: 28px;
  align-items: start;

  h1 {
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    line-height: 1.22;
  }

  img {
    width: 100%;
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
`,u=t.default.p.withConfig({displayName:"news-page.styles__ArticleKicker",componentId:"sc-85bd20cb-11"})`
  margin: 0 0 48px;
  color: #ff8100;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
`,h=t.default.time.withConfig({displayName:"news-page.styles__ArticleMeta",componentId:"sc-85bd20cb-12"})`
  display: block;
  margin-top: 28px;
  color: #969494;
  font-size: 12px;
  line-height: 1.25;
`,g=t.default.div.withConfig({displayName:"news-page.styles__ArticleBody",componentId:"sc-85bd20cb-13"})`
  width: min(100%, 923px);
  margin-top: 68px;
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
`,m=t.default.a.withConfig({displayName:"news-page.styles__BackLink",componentId:"sc-85bd20cb-14"})`
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
`;e.s(["ArticleBody",0,g,"ArticleHeader",0,p,"ArticleKicker",0,u,"ArticleMeta",0,h,"ArticleSection",0,f,"BackLink",0,m,"NewsCard",0,s,"NewsSection",0,r,"PageContent",0,n,"SectionTitle",0,i,"SliderButton",0,d,"SliderControls",0,c,"SliderShell",0,o,"SliderTrack",0,l,"SliderViewport",0,a])},31621,e=>{"use strict";var t=e.i(57827),r=e.i(88750),n=e.i(70467),i=e.i(70160),o=e.i(6635),a=e.i(14031),l=e.i(18572);e.s(["NewsPage",0,function(){let e=(0,i.useRef)(null),s=(0,i.useRef)(0),c=(0,i.useRef)(0),d=(0,i.useRef)(0),[f,p]=(0,i.useState)(!1),[u,h]=(0,i.useState)(0);function g(t){let r=e.current;if(!r)return;let n=(t+o.newsItems.length)%o.newsItems.length,i=r.querySelector("[data-news-card]"),a=i?i.offsetWidth+22:315;r.scrollTo({left:n*a,behavior:"smooth"}),h(n)}return(0,i.useEffect)(()=>{if(f)return;let e=window.setInterval(()=>{g(u+1)},4200);return()=>window.clearInterval(e)},[u,f]),(0,t.jsx)(l.NewsSection,{children:(0,t.jsxs)(l.PageContent,{children:[(0,t.jsx)(l.SectionTitle,{children:"Наши новости"}),(0,t.jsxs)(l.SliderShell,{children:[(0,t.jsx)(l.SliderViewport,{"data-dragging":f,ref:e,onPointerDown:t=>{let r=e.current;r&&(s.current=t.clientX,c.current=r.scrollLeft,d.current=0,p(!0))},onPointerMove:t=>{let r=e.current;if(!r||!f)return;let n=t.clientX-s.current;d.current=Math.max(d.current,Math.abs(n)),r.scrollLeft=c.current-n},onPointerUp:()=>{let t=e.current;if(!t)return;p(!1);let r=t.querySelector("[data-news-card]"),n=r?r.offsetWidth+22:315;g(Math.round(t.scrollLeft/n))},onPointerCancel:()=>p(!1),onPointerLeave:()=>p(!1),children:(0,t.jsx)(l.SliderTrack,{children:o.newsItems.map((e,i)=>{var o;return(0,t.jsxs)(l.NewsCard,{as:n.default,"data-featured":0===i,"data-news-card":!0,href:`/news/selected-news-item?news=${e.slug}`,onClick:e=>{d.current>6&&e.preventDefault(),d.current=0},children:[(0,t.jsx)(r.default,{src:(o=e.image,(0,a.assetPath)(`/figma/${o}`)),alt:e.title,width:293,height:203,priority:0===i}),(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("time",{dateTime:"2026-04-16",children:e.date})]},e.slug)})})}),(0,t.jsxs)(l.SliderControls,{"aria-label":"Управление слайдером новостей",children:[(0,t.jsx)(l.SliderButton,{type:"button","aria-label":"Предыдущая новость",onClick:()=>g(u-1),children:"‹"}),(0,t.jsx)(l.SliderButton,{type:"button","aria-label":"Следующая новость",onClick:()=>g(u+1),children:"›"})]})]})]})})}])},5992,e=>{"use strict";var t=e.i(57827),r=e.i(60878),n=e.i(6635),i=e.i(88750),o=e.i(70467),a=e.i(14031),l=e.i(18572);function s({item:e}){var r;return(0,t.jsx)(l.ArticleSection,{children:(0,t.jsxs)(l.PageContent,{children:[(0,t.jsxs)(l.ArticleHeader,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(l.ArticleKicker,{children:"Наши новости"}),(0,t.jsx)("h1",{children:e.title}),(0,t.jsx)(l.ArticleMeta,{dateTime:"2026-04-16",children:e.date})]}),(0,t.jsx)(i.default,{src:(r=e.image,(0,a.assetPath)(`/figma/${r}`)),alt:e.title,width:418,height:290,priority:!0})]}),(0,t.jsx)(l.ArticleBody,{children:e.body.map(r=>(0,t.jsx)("p",{children:function(e,r){if(!r?.length)return e;let n=r.find(t=>e.includes(t.label));if(!n)return e;let i=e.split(n.label);return(0,t.jsxs)(t.Fragment,{children:[i[0],(0,t.jsx)("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",children:n.label}),i.slice(1).join(n.label)]})}(r,e.links)},r))}),(0,t.jsx)(l.BackLink,{as:o.default,href:"/news",children:"Вернуться к новостям"})]})})}e.s(["SelectedNewsItemPage",0,function(){let e=(0,r.useSearchParams)().get("news")||n.newsItems[0]?.slug,i=(0,n.getNewsItem)(e)||n.newsItems[0];return(0,t.jsx)(s,{item:i})}],5992)}]);