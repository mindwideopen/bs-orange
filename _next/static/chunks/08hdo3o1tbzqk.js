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
`;e.s(["SectionTitle",0,function({children:e}){return(0,t.jsx)(a,{children:e})}],66274),e.s([],66669)},59704,e=>{"use strict";var t=e.i(57827);e.i(66669);var i=e.i(66274);e.i(67107);var a=e.i(54578),r=e.i(70160),n=e.i(88746);let o=n.default.section.withConfig({displayName:"contact-request.styles__ContactSection",componentId:"sc-d8d02ff1-0"})`
  padding: 38px 72px 118px;

  > p {
    width: min(100%, 934px);
    margin: 33px auto 29px;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,l=n.default.form.withConfig({displayName:"contact-request.styles__Form",componentId:"sc-d8d02ff1-1"})`
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
`,s=n.default.label.withConfig({displayName:"contact-request.styles__FileButton",componentId:"sc-d8d02ff1-2"})`
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
`,d=n.default.div.withConfig({displayName:"contact-request.styles__ConsentLabel",componentId:"sc-d8d02ff1-3"})`
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
`;e.s(["ContactRequest",0,function(){let e=(0,r.useId)(),n=(0,r.useRef)(null),[c,p]=(0,r.useState)(""),[u,f]=(0,r.useState)(""),[x,g]=(0,r.useState)(""),[h,m]=(0,r.useState)(!1),[b,v]=(0,r.useState)(!1),y=(0,r.useMemo)(()=>c.trim().length>0&&u.trim().length>0&&x.trim().length>0&&h,[h,u,x,c]),w=b&&0===c.trim().length,j=b&&0===u.trim().length,C=b&&0===x.trim().length,k=e=>{!y&&(e.preventDefault(),v(!0),h||n.current?.focus())};return(0,t.jsxs)(o,{id:"contacts",children:[(0,t.jsx)(i.SectionTitle,{children:"Свяжитесь с нами удобным способом"}),(0,t.jsx)("p",{children:"Заполните форму и мы перезвоним"}),(0,t.jsxs)(l,{noValidate:!0,onSubmit:e=>{!y&&(e.preventDefault(),v(!0),h||n.current?.focus())},children:[(0,t.jsx)("input",{"aria-label":"Имя","aria-invalid":w,placeholder:"Имя",required:!0,value:c,onChange:e=>p(e.target.value)}),(0,t.jsx)("input",{"aria-label":"Номер телефона",placeholder:"Номер телефона"}),(0,t.jsx)("input",{"aria-label":"E-mail","aria-invalid":j,placeholder:"E-mail",required:!0,type:"email",value:u,onChange:e=>f(e.target.value)}),(0,t.jsxs)(s,{$disabled:!y,"aria-disabled":!y,onClick:k,children:[(0,t.jsx)("input",{type:"file","aria-label":"Прикрепите файл",disabled:!y}),(0,t.jsx)("span",{children:"Прикрепите файл"})]}),(0,t.jsx)("textarea",{"aria-label":"Ваш текст","aria-invalid":C,placeholder:"Ваш текст",required:!0,value:x,onChange:e=>g(e.target.value)}),(0,t.jsx)("button",{type:"submit","aria-disabled":!y,onClick:k,children:"Отправить"}),(0,t.jsxs)(d,{children:[b?(0,t.jsx)("span",{children:"⚠️"}):"",(0,t.jsx)("input",{id:e,"aria-label":"Принять политику конфиденциальности и обработки персональных данных",type:"checkbox",checked:h,onChange:e=>m(e.target.checked)}),(0,t.jsx)("span",{children:"Я принимаю "}),(0,t.jsx)(a.PrivacyPolicyModal,{className:"privacy-policy-trigger",triggerRef:n,children:"Политику конфиденциальности и обработки персональных данных на сайте www.balticstyle.com"})]})]})]})}],59704)}]);