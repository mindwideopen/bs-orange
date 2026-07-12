(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66669,66274,e=>{"use strict";var t=e.i(57827),i=e.i(88746);let a=i.default.h2.withConfig({displayName:"section-title.styles__Title",componentId:"sc-9399189a-0"})`
  margin: 0;
  color: var(--title);
  font-size: 25px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 20px;
  }
`;e.s(["SectionTitle",0,function({children:e}){return(0,t.jsx)(a,{children:e})}],66274),e.s([],66669)},59704,e=>{"use strict";var t=e.i(57827);e.i(66669);var i=e.i(66274);e.i(67107);var a=e.i(54578),n=e.i(70160),o=e.i(88746);let r=o.default.section.withConfig({displayName:"contact-request.styles__ContactSection",componentId:"sc-d8d02ff1-0"})`
  padding: 38px 72px 118px;

  > p {
    width: min(100%, 934px);
    margin: 33px auto 29px;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,l=o.default.form.withConfig({displayName:"contact-request.styles__Form",componentId:"sc-d8d02ff1-1"})`
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
`,s=o.default.label.withConfig({displayName:"contact-request.styles__FileButton",componentId:"sc-d8d02ff1-2"})`
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
`,c=o.default.div.withConfig({displayName:"contact-request.styles__ConsentLabel",componentId:"sc-d8d02ff1-3"})`
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
`;e.s(["ContactRequest",0,function(){let e=(0,n.useId)(),o=(0,n.useRef)(null),[d,p]=(0,n.useState)(""),[u,g]=(0,n.useState)(""),[m,f]=(0,n.useState)(""),[x,h]=(0,n.useState)(!1),[b,v]=(0,n.useState)(!1),y=(0,n.useMemo)(()=>d.trim().length>0&&u.trim().length>0&&m.trim().length>0&&x,[x,u,m,d]),w=b&&0===d.trim().length,j=b&&0===u.trim().length,k=b&&0===m.trim().length,C=e=>{!y&&(e.preventDefault(),v(!0),x||o.current?.focus())};return(0,t.jsxs)(r,{id:"contacts",children:[(0,t.jsx)(i.SectionTitle,{children:"Свяжитесь с нами удобным способом"}),(0,t.jsx)("p",{children:"Заполните форму и мы перезвоним"}),(0,t.jsxs)(l,{noValidate:!0,onSubmit:e=>{!y&&(e.preventDefault(),v(!0),x||o.current?.focus())},children:[(0,t.jsx)("input",{"aria-label":"Имя","aria-invalid":w,placeholder:"Имя",required:!0,value:d,onChange:e=>p(e.target.value)}),(0,t.jsx)("input",{"aria-label":"Номер телефона",placeholder:"Номер телефона"}),(0,t.jsx)("input",{"aria-label":"E-mail","aria-invalid":j,placeholder:"E-mail",required:!0,type:"email",value:u,onChange:e=>g(e.target.value)}),(0,t.jsxs)(s,{$disabled:!y,"aria-disabled":!y,onClick:C,children:[(0,t.jsx)("input",{type:"file","aria-label":"Прикрепите файл",disabled:!y}),(0,t.jsx)("span",{children:"Прикрепите файл"})]}),(0,t.jsx)("textarea",{"aria-label":"Ваш текст","aria-invalid":k,placeholder:"Ваш текст",required:!0,value:m,onChange:e=>f(e.target.value)}),(0,t.jsx)("button",{type:"submit","aria-disabled":!y,onClick:C,children:"Отправить"}),(0,t.jsxs)(c,{children:[b?(0,t.jsx)("span",{children:"⚠️"}):"",(0,t.jsx)("input",{id:e,"aria-label":"Принять политику конфиденциальности и обработки персональных данных",type:"checkbox",checked:x,onChange:e=>h(e.target.checked)}),(0,t.jsx)("span",{children:"Я принимаю "}),(0,t.jsx)(a.PrivacyPolicyModal,{className:"privacy-policy-trigger",triggerRef:o,children:"Политику конфиденциальности и обработки персональных данных на сайте www.balticstyle.com"})]})]})]})}],59704)},30770,e=>{"use strict";var t=e.i(57827),i=e.i(70160);e.i(66669);var a=e.i(66274);let n=[{icon:"communication.png",label:"Связь"},{icon:"industry.png",label:"Промышленность"},{icon:"transport.png",label:"Транспорт"},{icon:"building.png",label:"Строительство"},{icon:"education.png",label:"Образование"},{icon:"financial-institutions.png",label:"Финансовые учреждения"},{icon:"healthcare.png",label:"Здравоохранение"},{icon:"government-authorities.png",label:"Органы государственной власти"},{icon:"state-institutions.png",label:"Государственные учреждения"},{icon:"trade-enterprises.png",label:"Предприятия торговли"},{icon:"hotels.png",label:"Гостиницы"}];var o=e.i(88746),r=e.i(14031);let l=o.default.span.withConfig({displayName:"mask-icon.styles__StyledMaskIcon",componentId:"sc-4d619f0b-0"})`
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
`,s=o.default.section.withConfig({displayName:"projects-showcase.styles__ProjectsSection",componentId:"sc-cdb8af19-0"})`
  padding: 0 72px 34px;
  margin-bottom: 100px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,c=o.default.div.withConfig({displayName:"projects-showcase.styles__ProjectSlider",componentId:"sc-cdb8af19-1"})`
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
`,d=o.default.div.withConfig({displayName:"projects-showcase.styles__ProjectList",componentId:"sc-cdb8af19-2"})`
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
`,p=o.default.article.withConfig({displayName:"projects-showcase.styles__ProjectItem",componentId:"sc-cdb8af19-3"})`
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
`,u=(0,o.default)(function({file:e,className:i}){return(0,t.jsx)(l,{$src:(0,r.assetPath)(`/figma/${e}`),className:i,"aria-hidden":"true"})}).withConfig({displayName:"projects-showcase.styles__ProjectIcon",componentId:"sc-cdb8af19-4"})`
  width: 66px;
  height: 56px;
`;e.s(["ProjectsShowcase",0,function(){let e=(0,i.useRef)(null),o=(0,i.useRef)({isDragging:!1,startX:0,scrollLeft:0}),[r,l]=(0,i.useState)(!1),[g,m]=(0,i.useState)(!1),f=(0,i.useCallback)(t=>{let i=e.current;if(!i)return;let a=Math.min(.8*i.clientWidth,560),n=i.scrollWidth-i.clientWidth,o=i.scrollLeft+t*a;t>0&&o>=n-4?i.scrollTo({left:0,behavior:"smooth"}):t<0&&o<=4?i.scrollTo({left:n,behavior:"smooth"}):i.scrollBy({left:t*a,behavior:"smooth"})},[]),x=t=>{let i=e.current;i&&void 0!==t&&i.hasPointerCapture(t)&&i.releasePointerCapture(t),o.current.isDragging=!1,l(!1)};return(0,i.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||r||g)return;let e=window.setInterval(()=>f(1),3200);return()=>window.clearInterval(e)},[r,g,f]),(0,t.jsxs)(s,{id:"projects",children:[(0,t.jsx)(a.SectionTitle,{children:"Реализованные проекты"}),(0,t.jsxs)(c,{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onFocus:()=>m(!0),onBlur:()=>m(!1),children:[(0,t.jsx)("button",{"aria-label":"Предыдущие проекты",type:"button",onClick:()=>f(-1),children:"‹"}),(0,t.jsx)(d,{ref:e,$isDragging:r,onPointerDown:t=>{let i=e.current;i&&(o.current={isDragging:!0,startX:t.clientX,scrollLeft:i.scrollLeft},i.setPointerCapture(t.pointerId),l(!0))},onPointerMove:t=>{let i=e.current,a=o.current;i&&a.isDragging&&(t.preventDefault(),i.scrollLeft=a.scrollLeft-(t.clientX-a.startX))},onPointerUp:e=>x(e.pointerId),onPointerCancel:e=>x(e.pointerId),onPointerLeave:()=>x(),children:n.map(e=>(0,t.jsxs)(p,{children:[(0,t.jsx)(u,{file:e.icon}),(0,t.jsx)("p",{children:e.label})]},e.label))}),(0,t.jsx)("button",{"aria-label":"Следующие проекты",type:"button",onClick:()=>f(1),children:"›"})]})]})}],30770)}]);