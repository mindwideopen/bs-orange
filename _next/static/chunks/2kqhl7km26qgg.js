(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,47751,e=>{"use strict";var t=e.i(57827),i=e.i(88746);let n=i.default.h2.withConfig({displayName:"section-title.styles__Title",componentId:"sc-9399189a-0"})`
  margin: 0;
  color: var(--title);
  font-size: 25px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 20px;
  }
`;function a({children:e}){return(0,t.jsx)(n,{children:e})}let o=i.default.section.withConfig({displayName:"contact-request.styles__ContactSection",componentId:"sc-d8d02ff1-0"})`
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
`;function r(){return(0,t.jsxs)(o,{id:"contacts",children:[(0,t.jsx)(a,{children:"Свяжитесь с нами удобным способом"}),(0,t.jsx)("p",{children:"Заполните форму и мы перезвоним"}),(0,t.jsxs)(s,{children:[(0,t.jsx)("input",{"aria-label":"Имя",placeholder:"Имя"}),(0,t.jsx)("input",{"aria-label":"Номер телефона",placeholder:"Номер телефона"}),(0,t.jsx)("input",{"aria-label":"E-mail",placeholder:"E-mail",type:"email"}),(0,t.jsxs)(l,{children:[(0,t.jsx)("input",{type:"file","aria-label":"Прикрепите файл"}),(0,t.jsx)("span",{children:"Прикрепите файл"})]}),(0,t.jsx)("textarea",{"aria-label":"Ваш текст",placeholder:"Ваш текст"}),(0,t.jsx)("button",{type:"submit",children:"Отправить"})]})]})}let p=i.default.section.withConfig({displayName:"about-company.styles__AboutSection",componentId:"sc-cde1077e-0"})`
  padding: 27px 72px 58px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,d=i.default.div.withConfig({displayName:"about-company.styles__AboutText",componentId:"sc-cde1077e-1"})`
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
`;function c(){return(0,t.jsxs)(p,{id:"about",children:[(0,t.jsx)(a,{children:"Системная интеграция и инфраструктурные ИТ-решения"}),(0,t.jsxs)(d,{children:[(0,t.jsx)("p",{children:"Компания «Балтик Стайл» реализует проекты по созданию, модернизации и сопровождению технологической инфраструктуры предприятий."}),(0,t.jsx)("p",{children:"Наши компетенции включают проектирование систем, интеграцию оборудования и программных решений, аудит ИТ-среды, а также поставку и профессиональное обслуживание инфраструктуры."}),(0,t.jsx)("p",{children:"Надёжный технологический партнёр бизнеса более 30 лет."})]})]})}var x=e.i(88750),m=e.i(14031);let h=[{base:"years-base.svg",icon:"years.png",title:"30 лет",text:"в отрасли"},{base:"staff-base.svg",icon:"staff.png",title:"Опытный",text:"ИТ персонал"},{base:"solutions-base.svg",icon:"solutions.svg",title:"Оптимальные",text:"ИТ решения"}],g=i.default.span.withConfig({displayName:"mask-icon.styles__StyledMaskIcon",componentId:"sc-4d619f0b-0"})`
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
`;function f({file:e,className:i}){return(0,t.jsx)(g,{$src:(0,m.assetPath)(`/figma/${e}`),className:i,"aria-hidden":"true"})}let u=i.default.section.withConfig({displayName:"advantages.styles__AdvantagesSection",componentId:"sc-89848f60-0"})`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: center;
  gap: 132px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-bottom: 100px;
  padding: 18px 72px 31px;
  background-color: rgb(246, 246, 246);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-inline: 24px;
  }
`,b=i.default.article.withConfig({displayName:"advantages.styles__Advantage",componentId:"sc-89848f60-1"})`
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
`,w=i.default.span.withConfig({displayName:"advantages.styles__AdvantageIcon",componentId:"sc-89848f60-2"})`
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
`,y=(0,i.default)(f).withConfig({displayName:"advantages.styles__IconMask",componentId:"sc-89848f60-3"})`
  position: absolute;
  width: 31px;
  height: 31px;
`;function j(){return(0,t.jsx)(u,{"aria-label":"Преимущества",children:h.map(e=>(0,t.jsxs)(b,{children:[(0,t.jsxs)(w,{children:[(0,t.jsx)(x.default,{src:(0,m.assetPath)(`/figma/${e.base}`),alt:"",width:44,height:44}),(0,t.jsx)(y,{file:e.icon})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:e.title}),(0,t.jsx)("span",{children:e.text})]})]},e.title))})}let v=i.default.section.withConfig({displayName:"hero.styles__HeroSection",componentId:"sc-3a65a411-0"})`
  display: grid;
  grid-template-columns: minmax(0, 803px) minmax(360px, 477px);
  justify-content: center;
  min-height: 324px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
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
`,I=i.default.div.withConfig({displayName:"hero.styles__HeroImage",componentId:"sc-3a65a411-2"})`
  position: relative;
  min-height: 324px;

  img {
    object-fit: cover;
  }

  @media (max-width: 900px) {
    min-height: 220px;
  }
`;function C(){return(0,t.jsxs)(v,{id:"top",children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)("h1",{children:["Оптимальные",(0,t.jsx)("span",{children:"IT-решения"})]}),(0,t.jsx)("p",{children:"От разработки стратегии до реализации"})]}),(0,t.jsx)(I,{children:(0,t.jsx)(x.default,{src:(0,m.assetPath)("/figma/hero-cables.webp"),alt:"",fill:!0,sizes:"(max-width: 900px) 100vw, 477px",priority:!0})})]})}var k=e.i(70160);let N=[{icon:"communication.png",label:"Связь"},{icon:"industry.png",label:"Промышленность"},{icon:"transport.png",label:"Транспорт"},{icon:"building.png",label:"Строительство"},{icon:"education.png",label:"Образование"},{icon:"financial-institutions.png",label:"Финансовые учреждения"},{icon:"healthcare.png",label:"Здравоохранение"},{icon:"government-authorities.png",label:"Органы государственной власти"},{icon:"state-institutions.png",label:"Государственные учреждения"},{icon:"trade-enterprises.png",label:"Предприятия торговли"},{icon:"hotels.png",label:"Гостиницы"}],z=i.default.section.withConfig({displayName:"projects-showcase.styles__ProjectsSection",componentId:"sc-cdb8af19-0"})`
  padding: 0 72px 34px;
  margin-bottom: 100px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,P=i.default.div.withConfig({displayName:"projects-showcase.styles__ProjectSlider",componentId:"sc-cdb8af19-1"})`
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
    color: var(--color-orange);
  }

  @media (max-width: 900px) {
    grid-template-columns: 24px minmax(0, 1fr) 24px;
    gap: 12px;
  }
`,S=i.default.div.withConfig({displayName:"projects-showcase.styles__ProjectList",componentId:"sc-cdb8af19-2"})`
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
`,L=i.default.article.withConfig({displayName:"projects-showcase.styles__ProjectItem",componentId:"sc-cdb8af19-3"})`
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
`,T=(0,i.default)(f).withConfig({displayName:"projects-showcase.styles__ProjectIcon",componentId:"sc-cdb8af19-4"})`
  width: 66px;
  height: 56px;
`;function A(){let e=(0,k.useRef)(null),i=(0,k.useRef)({isDragging:!1,startX:0,scrollLeft:0}),[n,o]=(0,k.useState)(!1),[s,l]=(0,k.useState)(!1),r=(0,k.useCallback)(t=>{let i=e.current;if(!i)return;let n=Math.min(.8*i.clientWidth,560),a=i.scrollWidth-i.clientWidth,o=i.scrollLeft+t*n;t>0&&o>=a-4?i.scrollTo({left:0,behavior:"smooth"}):t<0&&o<=4?i.scrollTo({left:a,behavior:"smooth"}):i.scrollBy({left:t*n,behavior:"smooth"})},[]),p=t=>{let n=e.current;n&&void 0!==t&&n.hasPointerCapture(t)&&n.releasePointerCapture(t),i.current.isDragging=!1,o(!1)};return(0,k.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||n||s)return;let e=window.setInterval(()=>r(1),3200);return()=>window.clearInterval(e)},[n,s,r]),(0,t.jsxs)(z,{id:"projects",children:[(0,t.jsx)(a,{children:"Реализованные проекты"}),(0,t.jsxs)(P,{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onFocus:()=>l(!0),onBlur:()=>l(!1),children:[(0,t.jsx)("button",{"aria-label":"Предыдущие проекты",type:"button",onClick:()=>r(-1),children:"‹"}),(0,t.jsx)(S,{ref:e,$isDragging:n,onPointerDown:t=>{let n=e.current;n&&(i.current={isDragging:!0,startX:t.clientX,scrollLeft:n.scrollLeft},n.setPointerCapture(t.pointerId),o(!0))},onPointerMove:t=>{let n=e.current,a=i.current;n&&a.isDragging&&(t.preventDefault(),n.scrollLeft=a.scrollLeft-(t.clientX-a.startX))},onPointerUp:e=>p(e.pointerId),onPointerCancel:e=>p(e.pointerId),onPointerLeave:()=>p(),children:N.map(e=>(0,t.jsxs)(L,{children:[(0,t.jsx)(T,{file:e.icon}),(0,t.jsx)("p",{children:e.label})]},e.label))}),(0,t.jsx)("button",{"aria-label":"Следующие проекты",type:"button",onClick:()=>r(1),children:"›"})]})]})}let D=[{icon:"design.png",title:"Проектирование",text:"Разработка технической документации и архитектуры инфраструктуры."},{icon:"integration.png",title:"Интеграция и строительство",text:"Монтаж, пусконаладка и ввод систем в эксплуатацию."},{icon:"audit.png",title:"ИТ-аудит",text:"Экспертная оценка инфраструктуры и информационной безопасности."},{icon:"supplies.png",title:"Поставки и сервис",text:"Оборудование, программное обеспечение и техническая поддержка."},{icon:"outsource.png",title:"ИТ-аутсорсинг",text:"Профессиональное сопровождение сложных ИТ-решений."}],M=i.default.section.withConfig({displayName:"services-list.styles__ServicesSection",componentId:"sc-4607bb9b-0"})`
  display: grid;
  gap: 47px;
  padding: 26px 72px 83px 114px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,$=i.default.article.withConfig({displayName:"services-list.styles__ServiceItem",componentId:"sc-4607bb9b-1"})`
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
`,B=(0,i.default)(f).withConfig({displayName:"services-list.styles__ServiceIcon",componentId:"sc-4607bb9b-2"})`
  width: 70px;
  height: 70px;

  @media (max-width: 900px) {
    width: 56px;
    height: 56px;
  }
`;function X(){return(0,t.jsx)(M,{id:"services",children:D.map(e=>(0,t.jsxs)($,{children:[(0,t.jsx)(B,{file:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("p",{children:e.text})]})]},e.title))})}e.s(["HomePage",0,function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{}),(0,t.jsx)(c,{}),(0,t.jsx)(A,{}),(0,t.jsx)(j,{}),(0,t.jsx)(X,{}),(0,t.jsx)(r,{})]})}],47751)}]);