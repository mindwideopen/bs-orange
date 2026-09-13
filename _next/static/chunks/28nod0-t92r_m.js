(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22663,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},46240,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return x},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return p},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return u},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return j}};for(var r in i)Object.defineProperty(n,r,{enumerable:!0,get:i[r]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...i)=>(n||(n=!0,t=e(...i)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let i=await e.getInitialProps(t);if(n&&u(n))return i;if(!i)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${i}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return i}let x="u">typeof performance,g=x&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},7584,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var r in i)Object.defineProperty(n,r,{enumerable:!0,get:i[r]});function o(e){let t={};for(let[n,i]of e.entries()){let e=t[n];void 0===e?t[n]=i:Array.isArray(e)?e.push(i):t[n]=[e,i]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[n,i]of Object.entries(e))if(Array.isArray(i))for(let e of i)t.append(n,a(e));else t.set(n,a(i));return t}function l(e,...t){for(let n of t){for(let t of n.keys())e.delete(t);for(let[t,i]of n.entries())e.append(t,i)}return e}},82547,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return c},getImageProps:function(){return d}};for(var r in i)Object.defineProperty(n,r,{enumerable:!0,get:i[r]});let o=e.r(81258),a=e.r(41159),s=e.r(9318),l=o._(e.r(7276));function d(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/bs-orange/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let c=s.Image},88750,(e,t,n)=>{t.exports=e.r(82547)},39867,e=>{"use strict";let t=`

Настоящая Политика конфиденциальности и обработки персональных данных (далее — \xabПолитика\xbb) определяет порядок обработки и защиты персональных данных пользователей сайта www.balticstyle.ru (далее — \xabСайт\xbb).

Используя Сайт и направляя обращение через форму обратной связи, Пользователь подтверждает ознакомление с настоящей Политикой и выражает согласие на обработку своих персональных данных в соответствии с ее условиями.

1. Общие положения

1.1. Оператором персональных данных является:

ООО \xabБалтик Стайл\xbb

ИНН: [3905017052
ОГРН: [1023900773555
Юридический адрес: 236029, Калининградская обл., г Калининград, ул. Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301
Электронная почта: info@balticstyle.ru
Телефон: +74012 99-11-98, +74012 99-11-99

1.2. Настоящая Политика разработана в соответствии с законодательством Российской Федерации, включая Федеральный закон № 152-ФЗ \xabО персональных данных\xbb.

1.3. Политика применяется ко всей информации, которую Оператор может получить о Пользователе посредством использования Сайта.

2. Персональные данные, обрабатываемые Оператором

При заполнении формы обратной связи на Сайте Пользователь по своему усмотрению предоставляет следующие персональные данные:

- имя;
- адрес электронной почты;
- номер телефона;
- текст обращения.

Оператор обрабатывает исключительно те персональные данные, которые необходимы для рассмотрения обращения Пользователя, предоставления ответа, подготовки коммерческого предложения или консультации, а также, при необходимости, для последующего заключения и исполнения договора.

Оператор не осуществляет сбор и обработку персональных данных, не связанных с указанными целями, в том числе паспортных данных, сведений о месте жительства, платежных реквизитов, специальных категорий персональных данных, биометрических персональных данных и иных сведений, обработка которых не требуется для рассмотрения обращения Пользователя.

3. Цели обработки персональных данных

Персональные данные Пользователя обрабатываются исключительно для следующих целей:

- рассмотрение обращения Пользователя;
- обратная связь с Пользователем по указанным контактным данным;
- подготовка и направление ответа, коммерческого предложения либо консультации;
- заключение и исполнение договора (при необходимости);
- обеспечение работы Сайта и повышение качества его функционирования.

Оператор не использует персональные данные для автоматизированного принятия решений, оказывающих юридическое влияние на Пользователя.

4. Правовые основания обработки

Обработка персональных данных осуществляется на основании:

- добровольного согласия Пользователя;
- необходимости обработки персональных данных для заключения и исполнения договора;
- требований законодательства Российской Федерации.

Согласие на обработку персональных данных предоставляется Пользователем путем отправки формы обратной связи на Сайте.

5. Порядок обработки персональных данных

Оператор вправе осуществлять следующие действия с персональными данными:

- сбор;
- запись;
- систематизацию;
- накопление;
- хранение;
- уточнение (обновление, изменение);
- использование;
- удаление;
- уничтожение.

Обработка осуществляется как с использованием средств автоматизации, так и без их использования.

6. Передача персональных данных третьим лицам

Оператор не продает, не распространяет и не предоставляет персональные данные Пользователей третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.

В процессе обработки персональных данных доступ к ним могут получать организации, обеспечивающие функционирование Сайта, в том числе:

- хостинг-провайдер;
- оператор электронной почты, используемый для обработки обращений Пользователей.

Указанные лица обязаны обеспечивать конфиденциальность персональных данных и использовать их исключительно для выполнения своих функций.

7. Срок хранения персональных данных

Персональные данные хранятся не дольше, чем этого требуют цели их обработки либо сроки, установленные законодательством Российской Федерации.

После достижения целей обработки либо получения отзыва согласия персональные данные подлежат удалению или уничтожению, если иное не предусмотрено законодательством Российской Федерации.

8. Защита персональных данных

Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, изменения, распространения, уничтожения и иных неправомерных действий.

В частности, Оператор:

- использует защищенное соединение HTTPS;
- ограничивает доступ к персональным данным;
- принимает меры по защите серверной инфраструктуры;
- предотвращает несанкционированный доступ к персональным данным.

9. Права Пользователя

Пользователь имеет право:

- получать информацию об обработке своих персональных данных;
- требовать уточнения персональных данных;
- требовать удаления персональных данных;
- отозвать согласие на обработку персональных данных;
- обратиться в уполномоченный государственный орган либо в суд для защиты своих прав.

Для реализации своих прав Пользователь может направить обращение на адрес электронной почты: **[email]**.

10. Отзыв согласия

Пользователь вправе в любое время отозвать согласие на обработку своих персональных данных, направив соответствующее обращение на адрес электронной почты Оператора.

После получения такого обращения Оператор прекращает обработку персональных данных и уничтожает их в сроки, предусмотренные законодательством Российской Федерации, если иное не требуется для исполнения обязанностей, установленных законом.


11. Изменение Политики

Оператор вправе вносить изменения в настоящую Политику.

Новая редакция вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией.

Актуальная версия Политики всегда доступна по адресу:

https://www.balticstyle.ru/privacy

12. Контактная информация

ООО \xabБалтик Стайл\xbb

Адрес: 236029, Калининградская обл., г Калининград, ул. Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301
Электронная почта: info@balticstyle.ru
Телефон: +74012 99-11-98, +74012 99-11-99
`;e.s(["privacyPolicyText",0,t,"privacyPolicyTitle",0,"Политика конфиденциальности и обработки персональных данных"])},67107,e=>{"use strict";var t=e.i(88746);t.default.footer.withConfig({displayName:"site-footer.styles__Footer",componentId:"sc-1b168edd-0"})`
    width: 100vw;
    margin-left: calc(50% - 50vw); 
  display: grid;
  grid-template-columns: 1.65fr 0.6fr 1.22fr;
  gap: 48px;
  margin-top: auto;
  padding: 14px 68px 10px 180px;
  font-size: 12px;
    background-color: rgb(246, 246, 246);

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
`,t.default.p.withConfig({displayName:"site-footer.styles__Copyright",componentId:"sc-1b168edd-1"})`
  grid-column: 1 / -1;
  margin: 0 0 14px;
  text-align: center;
`;let n=t.default.button.withConfig({displayName:"site-footer.styles__PolicyButton",componentId:"sc-1b168edd-2"})`
  grid-column: 1 / -1;
  justify-self: center;
  border: 0;
  background: transparent;
  color: var(--orange);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding: 4px 0;
  text-decoration: underline;
  text-underline-offset: 3px;
`,i=t.default.div.withConfig({displayName:"site-footer.styles__ModalOverlay",componentId:"sc-1b168edd-3"})`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgb(0 0 0 / 48%);
`,r=t.default.div.withConfig({displayName:"site-footer.styles__ModalContent",componentId:"sc-1b168edd-4"})`
  position: relative;
  width: min(100%, 760px);
  max-height: min(80vh, 720px);
  overflow: auto;
  border-radius: 15px;
  background: #ffffff;
  color: #1b1b1b;
  padding: 36px;
  box-shadow: 0 24px 70px rgb(0 0 0 / 22%);

  h2 {
    margin: 0 36px 20px 0;
    font-size: 24px;
    line-height: 1.2;
  }

  @media (max-width: 600px) {
    padding: 28px 20px;
  }
`,o=t.default.div.withConfig({displayName:"site-footer.styles__ModalBody",componentId:"sc-1b168edd-5"})`
  white-space: pre-line;
  font-size: 16px;
  line-height: 1.55;
`,a=t.default.button.withConfig({displayName:"site-footer.styles__CloseButton",componentId:"sc-1b168edd-6"})`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 50%;
  background: var(--field);
  color: #1b1b1b;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;

  ${({$variant:e})=>"footer"===e?`
        position: static;
        width: auto;
        height: auto;
        min-height: 46px;
        margin-top: 28px;
        border-radius: 15px;
        background: var(--orange);
        color: #ffffff;
        padding: 12px 28px;
        font: inherit;
        font-size: 16px;
      `:""}
`;e.s(["CloseButton",0,a,"ModalBody",0,o,"ModalContent",0,r,"ModalOverlay",0,i,"PolicyButton",0,n])},54578,e=>{"use strict";var t=e.i(57827),n=e.i(70160),i=e.i(39867),r=e.i(67107);e.s(["PrivacyPolicyModal",0,function({children:e="Политика конфиденциальности",className:o,triggerRef:a}){let[s,l]=(0,n.useState)(!1),d=(0,n.useId)();return(0,n.useEffect)(()=>{if(!s)return;let e=e=>{"Escape"===e.key&&l(!1)};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[s]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.PolicyButton,{ref:a,className:o,type:"button",onClick:()=>l(!0),children:e}),s?(0,t.jsx)(r.ModalOverlay,{onClick:()=>l(!1),children:(0,t.jsxs)(r.ModalContent,{"aria-labelledby":d,"aria-modal":"true",role:"dialog",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(r.CloseButton,{type:"button","aria-label":"Закрыть",onClick:()=>l(!1),children:"×"}),(0,t.jsx)("h2",{id:d,children:i.privacyPolicyTitle}),(0,t.jsx)(r.ModalBody,{children:i.privacyPolicyText}),(0,t.jsx)(r.CloseButton,{type:"button",$variant:"footer",onClick:()=>l(!1),children:"Закрыть"})]})}):null]})}])},14031,e=>{"use strict";e.s(["assetPath",0,function(e){let t=e.startsWith("/")?e:`/${e}`;return`/bs-orange${t}`}])},60878,(e,t,n)=>{t.exports=e.r(49619)},96659,e=>{"use strict";var t=e.i(57827),n=e.i(70160),i=e.i(60878),r=e.i(88746);e.s(["StyledComponentsRegistry",0,function({children:e}){let[o]=(0,n.useState)(()=>new r.ServerStyleSheet);return(0,i.useServerInsertedHTML)(()=>{let e=o.getStyleElement();return o.instance.clearTag(),(0,t.jsx)(t.Fragment,{children:e})}),(0,t.jsx)(t.Fragment,{children:e})}])},16776,e=>{"use strict";var t=e.i(60878),n=e.i(70160);e.s(["RoutePrefetcher",0,function({routes:e}){let i=(0,t.useRouter)();return(0,n.useEffect)(()=>{let t=navigator.connection,n=t?.saveData||t?.effectiveType==="slow-2g"||t?.effectiveType==="2g",r=window.matchMedia("(max-width: 900px)").matches;if(n||r)return;let o=Array.from(new Set(e)),a=[],s=!1,l=o.map((e,t)=>{let n=()=>{s||i.prefetch(e,{kind:"full"})};var r=()=>{let e=window.setTimeout(n,9e3+400*t);a.push(e)};if("requestIdleCallback"in window){let e=window.requestIdleCallback(r,{timeout:12e3});return()=>window.cancelIdleCallback(e)}let o=globalThis.setTimeout(r,9e3);return()=>globalThis.clearTimeout(o)});return()=>{s=!0,l.forEach(e=>e()),a.forEach(e=>window.clearTimeout(e))}},[i,e]),null}])},1072,e=>{"use strict";var t=e.i(57827),n=e.i(88750),i=e.i(60878),r=e.i(70160),o=e.i(14031);let a=[{href:"/about",label:"О компании"},{href:"/services",label:"Продукты, технологии, услуги"},{href:"/partners",label:"Партнёры"},{href:"/news",label:"Новости"},{href:"/contacts",label:"Контакты"}];var s=e.i(88746);let l=s.default.header.withConfig({displayName:"site-header.styles__Header",componentId:"sc-713b4a26-0"})`
  position: relative;
  z-index: 20;
  padding-top: 51px;

  @media (max-width: 900px) {
    padding-top: 24px;
  }
`,d=s.default.div.withConfig({displayName:"site-header.styles__HeaderInner",componentId:"sc-713b4a26-1"})`
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
`,c=s.default.a.withConfig({displayName:"site-header.styles__Brand",componentId:"sc-713b4a26-2"})`
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
`,p=s.default.a.withConfig({displayName:"site-header.styles__Phone",componentId:"sc-713b4a26-3"})`
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
`,u=s.default.button.withConfig({displayName:"site-header.styles__BurgerButton",componentId:"sc-713b4a26-4"})`
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
`,f=s.default.nav.withConfig({displayName:"site-header.styles__Nav",componentId:"sc-713b4a26-5"})`
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
`,x=s.default.button.withConfig({displayName:"site-header.styles__BackToTopButton",componentId:"sc-713b4a26-7"})`
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
`;function g(e){return e.replace(/^\/bs-orange(?=\/|$)/,"").replace(/\/$/,"")||"/"}function m(e,t){let n=g(t);return e===n||e.startsWith(`${n}/`)}function b(e){let t=e.endsWith("/")?e:`${e}/`;return(0,o.assetPath)(t)}e.s(["SiteHeader",0,function(){let e=g((0,i.usePathname)()),[s,y]=(0,r.useState)(!1),[w,v]=(0,r.useState)(!1),[j,C]=(0,r.useState)(!1),P=(0,r.useRef)(0),_=(0,o.assetPath)("/");function I(e,t){e.preventDefault(),window.location.assign(b(t))}return(0,r.useEffect)(()=>{let e=window.matchMedia("(max-width: 900px)");function t(){let t=window.scrollY,n=e.matches,i=t>300,r=t-P.current;if(!n){v(!1),C(!1),P.current=t;return}C(i),i?r>6?(v(!0),y(!1)):r<-6&&v(!1):v(!1),P.current=t}return P.current=window.scrollY,t(),window.addEventListener("scroll",t,{passive:!0}),e.addEventListener("change",t),()=>{window.removeEventListener("scroll",t),e.removeEventListener("change",t)}},[]),(0,t.jsxs)(l,{children:[(0,t.jsxs)(d,{children:[(0,t.jsxs)(c,{href:_,"aria-label":"Балтик Стайл",children:[(0,t.jsx)(n.default,{src:(0,o.assetPath)("/figma/logo.svg"),alt:"",width:62,height:75,priority:!0}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:"Балтик Стайл"}),(0,t.jsx)("small",{children:"сетевые решения"})]})]}),(0,t.jsxs)(p,{href:"tel:+74012991199",children:[(0,t.jsx)(n.default,{src:(0,o.assetPath)("/figma/phone.svg"),alt:"",width:18,height:18}),"+7(4012) 99-11-99"]}),(0,t.jsxs)(u,{type:"button","aria-label":s?"Закрыть меню":"Открыть меню","aria-expanded":s,"aria-controls":"mobile-navigation",$isHidden:w,onClick:()=>y(e=>!e),children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]}),(0,t.jsx)(f,{"aria-label":"Основная навигация",children:a.map(n=>(0,t.jsx)("a",{"data-active":m(e,n.href),href:b(n.href),onClick:e=>I(e,n.href),children:n.label},n.href))}),(0,t.jsxs)(h,{id:"mobile-navigation","aria-label":"Мобильная навигация",$isOpen:s,children:[(0,t.jsx)("a",{"data-active":"/"===e,href:_,onClick:()=>y(!1),children:"Главная"}),a.map(n=>(0,t.jsx)("a",{"data-active":m(e,n.href),href:b(n.href),onClick:e=>{y(!1),I(e,n.href)},children:n.label},n.href))]}),(0,t.jsx)(x,{type:"button",$isVisible:j,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"Вверх"})]})}],1072)}]);