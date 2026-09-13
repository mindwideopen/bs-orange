(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66669,66274,e=>{"use strict";var t=e.i(57827),i=e.i(88746);let n=i.default.h2.withConfig({displayName:"section-title.styles__Title",componentId:"sc-9399189a-0"})`
  margin: 0;
  color: var(--title);
  font-size: 25px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 20px;
  }
`;e.s(["SectionTitle",0,function({children:e}){return(0,t.jsx)(n,{children:e})}],66274),e.s([],66669)},59704,e=>{"use strict";var t=e.i(57827);e.i(66669);var i=e.i(66274);e.i(67107);var n=e.i(54578),o=e.i(70160),a=e.i(88746);let r=a.default.section.withConfig({displayName:"contact-request.styles__ContactSection",componentId:"sc-d8d02ff1-0"})`
  padding: 38px 72px 118px;

  > p {
    width: min(100%, 934px);
    margin: 33px auto 29px;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,l=a.default.form.withConfig({displayName:"contact-request.styles__Form",componentId:"sc-d8d02ff1-1"})`
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
    outline: 2px solid transparent;
    outline-offset: 2px;
    padding: 18px 20px;
  }

  input:focus,
  textarea:focus {
    outline-color: var(--orange);
  }

  input[aria-invalid="true"],
  textarea[aria-invalid="true"] {
    outline-color: #d72f2f;
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
    transition:
      background-color 160ms ease,
      color 160ms ease,
      opacity 160ms ease;
  }

  button[aria-disabled="true"] {
    cursor: not-allowed;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    textarea {
      grid-column: auto;
    }
  }
`,s=a.default.label.withConfig({displayName:"contact-request.styles__FileButton",componentId:"sc-d8d02ff1-2"})`
  display: flex;
  align-items: center;
  min-width: 0;
  border: 0;
  border-radius: 15px;
  background: var(--orange);
  color: #ffffff;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  font: inherit;
  font-size: 18px;
  outline-color: var(--orange);
  padding: 18px 20px;
  transition:
    background-color 160ms ease,
    color 160ms ease,
    opacity 160ms ease;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`,c=a.default.div.withConfig({displayName:"contact-request.styles__ConsentLabel",componentId:"sc-d8d02ff1-3"})`
  grid-column: 1 / -1;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #5f5f5f;
  font-size: 14px;
  line-height: 1.35;

  input {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    margin-top: 1px;
    accent-color: var(--orange);
  }

  .privacy-policy-trigger {
    min-height: auto;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    outline: 2px solid transparent;
    outline-offset: 3px;
    padding: 0;
    text-align: left;
    text-decoration: underline;
    text-decoration-color: rgb(95 95 95 / 55%);
    text-underline-offset: 3px;
  }

  .privacy-policy-trigger:focus-visible {
    outline-color: var(--orange);
  }
`,d=a.default.div.withConfig({displayName:"contact-request.styles__HelperTooltip",componentId:"sc-d8d02ff1-4"})`
  position: fixed;
  z-index: 900;
  top: ${({$y:e})=>e}px;
  left: ${({$x:e})=>e}px;
  max-width: min(320px, calc(100vw - 32px));
  border-radius: 12px;
  background: #1b1b1b;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.35;
  padding: 10px 12px;
  pointer-events: none;
  box-shadow: 0 12px 30px rgb(0 0 0 / 18%);
`,p=a.default.div.withConfig({displayName:"contact-request.styles__HelperModalOverlay",componentId:"sc-d8d02ff1-5"})`
  position: fixed;
  z-index: 950;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgb(0 0 0 / 34%);
`,u=a.default.div.withConfig({displayName:"contact-request.styles__HelperModal",componentId:"sc-d8d02ff1-6"})`
  width: min(100%, 360px);
  border-radius: 15px;
  background: #ffffff;
  color: #1b1b1b;
  padding: 22px;
  box-shadow: 0 18px 50px rgb(0 0 0 / 20%);

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.45;
  }

  button {
    width: 100%;
    min-height: 44px;
    margin-top: 18px;
    border: 0;
    border-radius: 12px;
    background: var(--orange);
    color: #ffffff;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
  }
`,f="Заполните поля и примите политику конфиденциальности под формой обратной связи для прикрепления файла и отправки Вашего обращения";e.s(["ContactRequest",0,function(){let e=(0,o.useId)(),a=(0,o.useRef)(null),[g,x]=(0,o.useState)(""),[h,m]=(0,o.useState)(""),[b,v]=(0,o.useState)(""),[w,y]=(0,o.useState)(!1),[j,k]=(0,o.useState)(!1),[C,_]=(0,o.useState)(null),[I,M]=(0,o.useState)(!1),P=(0,o.useMemo)(()=>g.trim().length>0&&h.trim().length>0&&b.trim().length>0&&w,[w,h,b,g]),S=j&&0===g.trim().length,N=j&&0===h.trim().length,z=j&&0===b.trim().length,L=e=>{!P&&(e.preventDefault(),k(!0),_(null),window.matchMedia("(hover: none), (pointer: coarse)").matches&&M(!0),w||a.current?.focus())},$=e=>{P||_({x:Math.max(16,Math.min(e.clientX+14,window.innerWidth-336)),y:Math.max(16,Math.min(e.clientY+14,window.innerHeight-120))})},q=()=>_(null);return(0,t.jsxs)(r,{id:"contacts",children:[(0,t.jsx)(i.SectionTitle,{children:"Свяжитесь с нами удобным способом"}),(0,t.jsx)("p",{children:"Заполните форму и мы перезвоним"}),(0,t.jsxs)(l,{noValidate:!0,onSubmit:e=>{!P&&(e.preventDefault(),k(!0),w||a.current?.focus())},children:[(0,t.jsx)("input",{"aria-label":"Имя","aria-invalid":S,placeholder:"Имя",required:!0,value:g,onChange:e=>x(e.target.value)}),(0,t.jsx)("input",{"aria-label":"Номер телефона",placeholder:"Номер телефона"}),(0,t.jsx)("input",{"aria-label":"E-mail","aria-invalid":N,placeholder:"E-mail",required:!0,type:"email",value:h,onChange:e=>m(e.target.value)}),(0,t.jsxs)(s,{$disabled:!P,"aria-disabled":!P,onClick:L,onMouseEnter:$,onMouseMove:$,onMouseLeave:q,children:[(0,t.jsx)("input",{type:"file","aria-label":"Прикрепите файл",disabled:!P}),(0,t.jsx)("span",{children:"Прикрепите файл"})]}),(0,t.jsx)("textarea",{"aria-label":"Ваш текст","aria-invalid":z,placeholder:"Ваш текст",required:!0,value:b,onChange:e=>v(e.target.value)}),(0,t.jsx)("button",{type:"submit","aria-disabled":!P,onClick:L,onMouseEnter:$,onMouseMove:$,onMouseLeave:q,children:"Отправить"}),(0,t.jsxs)(c,{children:[j?(0,t.jsx)("span",{children:"⚠️"}):"",(0,t.jsx)("input",{id:e,"aria-label":"Принять политику конфиденциальности и обработки персональных данных",type:"checkbox",checked:w,onChange:e=>y(e.target.checked)}),(0,t.jsx)("span",{children:"Я принимаю "}),(0,t.jsx)(n.PrivacyPolicyModal,{className:"privacy-policy-trigger",triggerRef:a,children:"Политику конфиденциальности и обработки персональных данных на сайте www.balticstyle.com"})]}),C?(0,t.jsx)(d,{$x:C.x,$y:C.y,children:f}):null,I?(0,t.jsx)(p,{onClick:()=>M(!1),children:(0,t.jsxs)(u,{role:"dialog","aria-modal":"true",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("p",{children:f}),(0,t.jsx)("button",{type:"button",onClick:()=>M(!1),children:"Понятно"})]})}):null]})]})}],59704)},30770,e=>{"use strict";var t=e.i(57827),i=e.i(70160);e.i(66669);var n=e.i(66274);let o=[{icon:"communication.png",label:"Связь"},{icon:"industry.png",label:"Промышленность"},{icon:"transport.png",label:"Транспорт"},{icon:"building.png",label:"Строительство"},{icon:"education.png",label:"Образование"},{icon:"financial-institutions.png",label:"Финансовые учреждения"},{icon:"healthcare.png",label:"Здравоохранение"},{icon:"government-authorities.png",label:"Органы государственной власти"},{icon:"state-institutions.png",label:"Государственные учреждения"},{icon:"trade-enterprises.png",label:"Предприятия торговли"},{icon:"hotels.png",label:"Гостиницы"}];var a=e.i(88746),r=e.i(14031);let l=a.default.span.withConfig({displayName:"mask-icon.styles__StyledMaskIcon",componentId:"sc-4d619f0b-0"})`
  display: inline-block;
  flex: none;
  background: var(--orange);
  mask-image: url("${({$src:e})=>e}");
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("${({$src:e})=>e}");
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
`,s=a.default.section.withConfig({displayName:"projects-showcase.styles__ProjectsSection",componentId:"sc-cdb8af19-0"})`
  padding: 0 72px 34px;
  margin-bottom: 100px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,c=a.default.div.withConfig({displayName:"projects-showcase.styles__ProjectSlider",componentId:"sc-cdb8af19-1"})`
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
    transition: color 160ms ease;
  }

  button:hover {
    color: var(--orange);
  }

  @media (max-width: 900px) {
    grid-template-columns: 24px minmax(0, 1fr) 24px;
    gap: 12px;
  }
`,d=a.default.div.withConfig({displayName:"projects-showcase.styles__ProjectList",componentId:"sc-cdb8af19-2"})`
  display: grid;
  grid-auto-columns: minmax(124px, 150px);
  grid-auto-flow: column;
  gap: 34px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  cursor: ${({$isDragging:e})=>e?"grabbing":"grab"};
  user-select: none;
  touch-action: pan-y;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    grid-auto-columns: minmax(120px, 42%);
  }

  @media (max-width: 520px) {
    grid-auto-columns: minmax(120px, 72%);
  }

  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`,p=a.default.article.withConfig({displayName:"projects-showcase.styles__ProjectItem",componentId:"sc-cdb8af19-3"})`
  display: grid;
  justify-items: center;
  gap: 14px;
  min-width: 0;
  text-align: center;
  scroll-snap-align: center;

  p {
    margin: 0;
    font-size: 18px;
  }
`,u=(0,a.default)(function({file:e,className:i}){return(0,t.jsx)(l,{$src:(0,r.assetPath)(`/figma/${e}`),className:i,"aria-hidden":"true"})}).withConfig({displayName:"projects-showcase.styles__ProjectIcon",componentId:"sc-cdb8af19-4"})`
  width: 66px;
  height: 56px;
`;e.s(["ProjectsShowcase",0,function(){let e=(0,i.useRef)(null),a=(0,i.useRef)({isDragging:!1,startX:0,scrollLeft:0}),[r,l]=(0,i.useState)(!1),[f,g]=(0,i.useState)(!1),x=(0,i.useCallback)(t=>{let i=e.current;if(!i)return;let n=Math.min(.8*i.clientWidth,560),o=i.scrollWidth-i.clientWidth,a=i.scrollLeft+t*n;t>0&&a>=o-4?i.scrollTo({left:0,behavior:"smooth"}):t<0&&a<=4?i.scrollTo({left:o,behavior:"smooth"}):i.scrollBy({left:t*n,behavior:"smooth"})},[]),h=t=>{let i=e.current;i&&void 0!==t&&i.hasPointerCapture(t)&&i.releasePointerCapture(t),a.current.isDragging=!1,l(!1)};return(0,i.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||r||f)return;let e=window.setInterval(()=>x(1),3200);return()=>window.clearInterval(e)},[r,f,x]),(0,t.jsxs)(s,{id:"projects",children:[(0,t.jsx)(n.SectionTitle,{children:"Реализованные проекты"}),(0,t.jsxs)(c,{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),onFocus:()=>g(!0),onBlur:()=>g(!1),children:[(0,t.jsx)("button",{"aria-label":"Предыдущие проекты",type:"button",onClick:()=>x(-1),children:"‹"}),(0,t.jsx)(d,{ref:e,$isDragging:r,onPointerDown:t=>{let i=e.current;i&&(a.current={isDragging:!0,startX:t.clientX,scrollLeft:i.scrollLeft},i.setPointerCapture(t.pointerId),l(!0))},onPointerMove:t=>{let i=e.current,n=a.current;i&&n.isDragging&&(t.preventDefault(),i.scrollLeft=n.scrollLeft-(t.clientX-n.startX))},onPointerUp:e=>h(e.pointerId),onPointerCancel:e=>h(e.pointerId),onPointerLeave:()=>h(),children:o.map(e=>(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{file:e.icon}),(0,t.jsx)("p",{children:e.label})]},e.label))}),(0,t.jsx)("button",{"aria-label":"Следующие проекты",type:"button",onClick:()=>x(1),children:"›"})]})]})}],30770)}]);