(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,40845,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(44066)._(e.r(7584)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,i=e.protocol||"",n=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(o.urlQueryToSearchParams(s)));let d=e.search||s&&`?${s}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||a.test(i))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${c}${n}${d}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},99788,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let i=e.r(46240),n=e.r(66028);function o(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},46713,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},70467,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return y},useLinkStatus:function(){return b}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let o=e.r(44066),a=e.r(57827),l=o._(e.r(70160)),s=e.r(40845),c=e.r(75278),d=e.r(95079),u=e.r(46240),p=e.r(88338);e.r(22663);let f=e.r(26876),h=e.r(72313),m=e.r(99788),g=e.r(68760);function y(t){var r,i;let n,o,y,[b,w]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:S,as:_,children:C,prefetch:j=null,passHref:I,replace:P,shallow:k,scroll:N,onClick:T,onMouseEnter:A,onTouchStart:L,legacyBehavior:O=!1,onNavigate:R,transitionTypes:E,ref:B,unstable_dynamicOnHover:M,...U}=t;n=C,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let z=l.default.useContext(c.AppRouterContext),K=!1!==j,$=!1!==j?null===(i=j)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,D="string"==typeof(r=_||S)?r:(0,s.formatUrl)(r);if(O){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=l.default.Children.only(n)}let q=O?o&&"object"==typeof o&&o.ref:B,F=l.default.useCallback(e=>(null!==z&&(v.current=(0,h.mountLinkInstance)(e,D,z,$,K,w)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[K,D,z,$,w]),V={ref:(0,d.useMergedRef)(F,q),onClick(t){O||"function"!=typeof T||T(t),O&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!z||t.defaultPrevented||function(t,r,i,n,o,a,s){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(86248);l.default.startTransition(()=>{u(r,n?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,i.current,s)})}}(t,D,v,P,N,R,E)},onMouseEnter(e){O||"function"!=typeof A||A(e),O&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),z&&K&&(0,h.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){O||"function"!=typeof L||L(e),O&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),z&&K&&(0,h.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,u.isAbsoluteUrl)(D)?V.href=D:O&&!I&&("a"!==o.type||"href"in o.props)||(V.href=(0,p.addBasePath)(D)),y=O?l.default.cloneElement(o,V):(0,a.jsx)("a",{...U,...V,children:n}),(0,a.jsx)(x.Provider,{value:b,children:y})}e.r(46713);let x=(0,l.createContext)(h.IDLE_LINK_STATUS),b=()=>(0,l.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},6635,18572,e=>{"use strict";let t=[{slug:"sostoyanie-modular-equipment",title:"«Балтик Стайл» оснастила ЖК «Состояние» в Ростове-на-Дону модульным оборудованием.",date:"16 апреля 2026",image:"news-state-equipment.webp",summary:"Российская компания «Систэм Электрик» поставила модульное оборудование и электроустановочные изделия для оснащения жилого комплекса «Состояние».",links:[{label:"City9 Set",href:"https://systeme.ru/products/modulnoye-oborudovaniye-i-shchitki/modulnoye-oborudovaniye-city9-set"},{label:"Systeme9",href:"https://systeme9.systeme.ru/"}],body:["Российская компания «Систэм Электрик» (Systeme Electric), разработчик и производитель комплексных решений в области распределения электроэнергии и автоматизации, поставила модульное оборудование и электроустановочные изделия для оснащения жилого комплекса «Состояние» строительной компании «Девелопмент-Юг».","Строительно-инвестиционная корпорация «Девелопмент-Юг» - федеральный застройщик, работающий в 6 регионах. Жилой комплекс «Состояние» - это дома бизнес-класса в Советском районе Ростова-на-Дону. Архитектура дома сочетает в себе современные тенденции и исторический колорит города.","В ходе реализации проекта было применено модульное оборудование в этажные щиты: City9 Set и Systeme9.","Флагманская серия Systeme9, созданная на базе 10 кА промышленной платформы, объединяет в себе выдающиеся технические характеристики и единый современный дизайн. Линейка, разработанная для критически важных объектов, успешно применяется как в гражданском строительстве, так и на промышленных предприятиях. Устройства проходят двойную сертификацию по промышленным и бытовым стандартам, что гарантирует их соответствие требованиям безопасности.","Автоматы City9 Set предназначены для жилых и коммерческих объектов. В числе ключевых преимуществ - единство конструкции, безопасность, долговечность. Эта линейка стала первой в портфеле бренда Systeme Electric и была разработана в соответствии с требованиями российского рынка.","В проекте были также использованы розетки и выключатели серии Glossa, которые выпускаются в Республике Марий Эл на заводе «Потенциал», одном из крупнейших предприятий по производству электроустановочных изделий в России и СНГ. Розетки и выключатели серии сочетают высокое качество и французский дизайн. Важные особенности - телескопический механизм, жесткий суппорт, контактная группа из технического серебра (Ag+Ni), которая обеспечивает пожаробезопасность и надежность."]},{slug:"systeme-electric-equipment",title:"Systeme Electric расширяет линейку модульного оборудования для инфраструктурных проектов.",date:"15 апреля 2026",image:"news-middle.webp",summary:"Новые решения помогают проектировать надежные системы распределения электроэнергии для жилых, коммерческих и промышленных объектов.",body:["Модульное оборудование остается одной из ключевых частей инженерной инфраструктуры современных объектов. Такие решения помогают повысить безопасность, упростить обслуживание и обеспечить стабильную работу критичных систем.","«Балтик Стайл» применяет оборудование проверенных производителей в проектах системной интеграции, подбирая конфигурации под требования конкретного объекта.","В фокусе проектов - надежность, ремонтопригодность и соответствие требованиям эксплуатации."]},{slug:"mining-university-events",title:"«Балтик Стайл» запускает серию мероприятий к юбилею партнерства с Санкт-Петербургским Горным университетом.",date:"14 апреля 2026",image:"news-mining-university.webp",summary:"Серия мероприятий посвящена развитию сотрудничества в области образовательной, инженерной и технологической инфраструктуры.",body:["«Балтик Стайл» запускает серию мероприятий, посвященных юбилею партнерства с Санкт-Петербургским Горным университетом.","Программа объединит встречи, демонстрации технологических решений и обсуждение новых направлений развития инфраструктурных проектов.","Компания продолжит поддерживать образовательные инициативы и проекты, связанные с внедрением современных инженерных и ИТ-решений."]}];e.s(["getNewsItem",0,function(e){return t.find(t=>t.slug===e)},"newsItems",0,t],6635);var r=e.i(88746);let i=r.default.section.withConfig({displayName:"news-page.styles__NewsSection",componentId:"sc-85bd20cb-0"})`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 48px 72px 96px;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 24px 72px;
  }
`,n=r.default.div.withConfig({displayName:"news-page.styles__PageContent",componentId:"sc-85bd20cb-1"})`
  width: min(100%, 996px);
  margin: 0 auto;
`,o=r.default.h1.withConfig({displayName:"news-page.styles__SectionTitle",componentId:"sc-85bd20cb-2"})`
  margin: 0 0 30px;
  color: #000000;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`,a=r.default.div.withConfig({displayName:"news-page.styles__SliderShell",componentId:"sc-85bd20cb-3"})`
  position: relative;
`,l=r.default.div.withConfig({displayName:"news-page.styles__SliderViewport",componentId:"sc-85bd20cb-4"})`
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

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`,s=r.default.div.withConfig({displayName:"news-page.styles__SliderTrack",componentId:"sc-85bd20cb-5"})`
  display: flex;
  gap: 22px;
  padding: 0 0 8px;
`,c=r.default.a.withConfig({displayName:"news-page.styles__NewsCard",componentId:"sc-85bd20cb-6"})`
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
`,d=r.default.div.withConfig({displayName:"news-page.styles__SliderControls",componentId:"sc-85bd20cb-7"})`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`,u=r.default.button.withConfig({displayName:"news-page.styles__SliderButton",componentId:"sc-85bd20cb-8"})`
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
`,p=r.default.section.withConfig({displayName:"news-page.styles__ArticleSection",componentId:"sc-85bd20cb-9"})`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 43px 72px 120px;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 24px 84px;
  }
`,f=r.default.header.withConfig({displayName:"news-page.styles__ArticleHeader",componentId:"sc-85bd20cb-10"})`
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
`,h=r.default.p.withConfig({displayName:"news-page.styles__ArticleKicker",componentId:"sc-85bd20cb-11"})`
  margin: 0 0 48px;
  color: #ff8100;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
`,m=r.default.time.withConfig({displayName:"news-page.styles__ArticleMeta",componentId:"sc-85bd20cb-12"})`
  display: block;
  margin-top: 28px;
  color: #969494;
  font-size: 12px;
  line-height: 1.25;
`,g=r.default.div.withConfig({displayName:"news-page.styles__ArticleBody",componentId:"sc-85bd20cb-13"})`
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
`,y=r.default.a.withConfig({displayName:"news-page.styles__BackLink",componentId:"sc-85bd20cb-14"})`
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
`;e.s(["ArticleBody",0,g,"ArticleHeader",0,f,"ArticleKicker",0,h,"ArticleMeta",0,m,"ArticleSection",0,p,"BackLink",0,y,"NewsCard",0,c,"NewsSection",0,i,"PageContent",0,n,"SectionTitle",0,o,"SliderButton",0,u,"SliderControls",0,d,"SliderShell",0,a,"SliderTrack",0,s,"SliderViewport",0,l],18572)},31621,e=>{"use strict";var t=e.i(57827),r=e.i(88750),i=e.i(70467),n=e.i(70160),o=e.i(6635),a=e.i(14031),l=e.i(18572);e.s(["NewsPage",0,function(){let e=(0,n.useRef)(null),s=(0,n.useRef)(0),c=(0,n.useRef)(0),d=(0,n.useRef)(0),[u,p]=(0,n.useState)(!1),[f,h]=(0,n.useState)(0);function m(t){let r=e.current;if(!r)return;let i=(t+o.newsItems.length)%o.newsItems.length,n=r.querySelector("[data-news-card]"),a=n?n.offsetWidth+22:315;r.scrollTo({left:i*a,behavior:"smooth"}),h(i)}return(0,n.useEffect)(()=>{if(u)return;let e=window.setInterval(()=>{m(f+1)},4200);return()=>window.clearInterval(e)},[f,u]),(0,t.jsx)(l.NewsSection,{children:(0,t.jsxs)(l.PageContent,{children:[(0,t.jsx)(l.SectionTitle,{children:"Наши новости"}),(0,t.jsxs)(l.SliderShell,{children:[(0,t.jsx)(l.SliderViewport,{"data-dragging":u,ref:e,onPointerDown:t=>{let r=e.current;r&&(s.current=t.clientX,c.current=r.scrollLeft,d.current=0,p(!0))},onPointerMove:t=>{let r=e.current;if(!r||!u)return;let i=t.clientX-s.current;d.current=Math.max(d.current,Math.abs(i)),r.scrollLeft=c.current-i},onPointerUp:()=>{let t=e.current;if(!t)return;p(!1);let r=t.querySelector("[data-news-card]"),i=r?r.offsetWidth+22:315;m(Math.round(t.scrollLeft/i))},onPointerCancel:()=>p(!1),onPointerLeave:()=>p(!1),children:(0,t.jsx)(l.SliderTrack,{children:o.newsItems.map((e,n)=>{var o;return(0,t.jsxs)(l.NewsCard,{as:i.default,"data-featured":0===n,"data-news-card":!0,href:`/news/selected-news-item?news=${e.slug}`,onClick:e=>{d.current>6&&e.preventDefault(),d.current=0},children:[(0,t.jsx)(r.default,{src:(o=e.image,(0,a.assetPath)(`/figma/${o}`)),alt:e.title,width:293,height:203,priority:0===n}),(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("time",{dateTime:"2026-04-16",children:e.date})]},e.slug)})})}),(0,t.jsxs)(l.SliderControls,{"aria-label":"Управление слайдером новостей",children:[(0,t.jsx)(l.SliderButton,{type:"button","aria-label":"Предыдущая новость",onClick:()=>m(f-1),children:"‹"}),(0,t.jsx)(l.SliderButton,{type:"button","aria-label":"Следующая новость",onClick:()=>m(f+1),children:"›"})]})]})]})})}])},5992,e=>{"use strict";var t=e.i(57827),r=e.i(60878),i=e.i(6635),n=e.i(88750),o=e.i(70467),a=e.i(14031),l=e.i(18572);function s({item:e}){var r;return(0,t.jsx)(l.ArticleSection,{children:(0,t.jsxs)(l.PageContent,{children:[(0,t.jsxs)(l.ArticleHeader,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(l.ArticleKicker,{children:"Наши новости"}),(0,t.jsx)("h1",{children:e.title}),(0,t.jsx)(l.ArticleMeta,{dateTime:"2026-04-16",children:e.date})]}),(0,t.jsx)(n.default,{src:(r=e.image,(0,a.assetPath)(`/figma/${r}`)),alt:e.title,width:418,height:290,priority:!0})]}),(0,t.jsx)(l.ArticleBody,{children:e.body.map(r=>(0,t.jsx)("p",{children:function(e,r){if(!r?.length)return e;let i=r.find(t=>e.includes(t.label));if(!i)return e;let n=e.split(i.label);return(0,t.jsxs)(t.Fragment,{children:[n[0],(0,t.jsx)("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",children:i.label}),n.slice(1).join(i.label)]})}(r,e.links)},r))}),(0,t.jsx)(l.BackLink,{as:o.default,href:"/news",children:"Вернуться к новостям"})]})})}e.s(["SelectedNewsItemPage",0,function(){let e=(0,r.useSearchParams)().get("news")||i.newsItems[0]?.slug,n=(0,i.getNewsItem)(e)||i.newsItems[0];return(0,t.jsx)(s,{item:n})}],5992)}]);