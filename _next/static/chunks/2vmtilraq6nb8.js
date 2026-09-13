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
`;e.s(["SectionTitle",0,function({children:e}){return(0,t.jsx)(n,{children:e})}],66274),e.s([],66669)},59704,e=>{"use strict";var t=e.i(57827);e.i(66669);var i=e.i(66274);e.i(67107);var n=e.i(54578),a=e.i(70160),o=e.i(88746);let r=o.default.section.withConfig({displayName:"contact-request.styles__ContactSection",componentId:"sc-d8d02ff1-0"})`
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
`,d=o.default.label.withConfig({displayName:"contact-request.styles__FileButton",componentId:"sc-d8d02ff1-2"})`
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
`,s=o.default.div.withConfig({displayName:"contact-request.styles__ConsentLabel",componentId:"sc-d8d02ff1-3"})`
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
`,c=o.default.div.withConfig({displayName:"contact-request.styles__HelperTooltip",componentId:"sc-d8d02ff1-4"})`
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
`,p=o.default.div.withConfig({displayName:"contact-request.styles__HelperModalOverlay",componentId:"sc-d8d02ff1-5"})`
  position: fixed;
  z-index: 950;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgb(0 0 0 / 34%);
`,u=o.default.div.withConfig({displayName:"contact-request.styles__HelperModal",componentId:"sc-d8d02ff1-6"})`
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
`,f="Заполните поля и примите политику конфиденциальности под формой обратной связи для прикрепления файла и отправки Вашего обращения";e.s(["ContactRequest",0,function(){let e=(0,a.useId)(),o=(0,a.useRef)(null),[x,h]=(0,a.useState)(""),[g,m]=(0,a.useState)(""),[b,v]=(0,a.useState)(""),[y,w]=(0,a.useState)(!1),[j,C]=(0,a.useState)(!1),[k,M]=(0,a.useState)(null),[_,S]=(0,a.useState)(!1),q=(0,a.useMemo)(()=>x.trim().length>0&&g.trim().length>0&&b.trim().length>0&&y,[y,g,b,x]),z=j&&0===x.trim().length,I=j&&0===g.trim().length,N=j&&0===b.trim().length,T=e=>{!q&&(e.preventDefault(),C(!0),M(null),window.matchMedia("(hover: none), (pointer: coarse)").matches&&S(!0),y||o.current?.focus())},$=e=>{q||M({x:Math.max(16,Math.min(e.clientX+14,window.innerWidth-336)),y:Math.max(16,Math.min(e.clientY+14,window.innerHeight-120))})},P=()=>M(null);return(0,t.jsxs)(r,{id:"contacts",children:[(0,t.jsx)(i.SectionTitle,{children:"Свяжитесь с нами удобным способом"}),(0,t.jsx)("p",{children:"Заполните форму и мы перезвоним"}),(0,t.jsxs)(l,{noValidate:!0,onSubmit:e=>{!q&&(e.preventDefault(),C(!0),y||o.current?.focus())},children:[(0,t.jsx)("input",{"aria-label":"Имя","aria-invalid":z,placeholder:"Имя",required:!0,value:x,onChange:e=>h(e.target.value)}),(0,t.jsx)("input",{"aria-label":"Номер телефона",placeholder:"Номер телефона"}),(0,t.jsx)("input",{"aria-label":"E-mail","aria-invalid":I,placeholder:"E-mail",required:!0,type:"email",value:g,onChange:e=>m(e.target.value)}),(0,t.jsxs)(d,{$disabled:!q,"aria-disabled":!q,onClick:T,onMouseEnter:$,onMouseMove:$,onMouseLeave:P,children:[(0,t.jsx)("input",{type:"file","aria-label":"Прикрепите файл",disabled:!q}),(0,t.jsx)("span",{children:"Прикрепите файл"})]}),(0,t.jsx)("textarea",{"aria-label":"Ваш текст","aria-invalid":N,placeholder:"Ваш текст",required:!0,value:b,onChange:e=>v(e.target.value)}),(0,t.jsx)("button",{type:"submit","aria-disabled":!q,onClick:T,onMouseEnter:$,onMouseMove:$,onMouseLeave:P,children:"Отправить"}),(0,t.jsxs)(s,{children:[j?(0,t.jsx)("span",{children:"⚠️"}):"",(0,t.jsx)("input",{id:e,"aria-label":"Принять политику конфиденциальности и обработки персональных данных",type:"checkbox",checked:y,onChange:e=>w(e.target.checked)}),(0,t.jsx)("span",{children:"Я принимаю "}),(0,t.jsx)(n.PrivacyPolicyModal,{className:"privacy-policy-trigger",triggerRef:o,children:"Политику конфиденциальности и обработки персональных данных на сайте www.balticstyle.com"})]}),k?(0,t.jsx)(c,{$x:k.x,$y:k.y,children:f}):null,_?(0,t.jsx)(p,{onClick:()=>S(!1),children:(0,t.jsxs)(u,{role:"dialog","aria-modal":"true",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("p",{children:f}),(0,t.jsx)("button",{type:"button",onClick:()=>S(!1),children:"Понятно"})]})}):null]})]})}],59704)}]);