(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30770,e=>{"use strict";var t=e.i(57827),n=e.i(70160),i=e.i(88746);let o=i.default.h2.withConfig({displayName:"section-title.styles__Title",componentId:"sc-9399189a-0"})`
  margin: 0;
  color: var(--title);
  font-size: 25px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 20px;
  }
`;function a({children:e}){return(0,t.jsx)(o,{children:e})}let r=[{icon:"communication.png",label:"Связь"},{icon:"industry.png",label:"Промышленность"},{icon:"transport.png",label:"Транспорт"},{icon:"building.png",label:"Строительство"},{icon:"education.png",label:"Образование"},{icon:"financial-institutions.png",label:"Финансовые учреждения"},{icon:"healthcare.png",label:"Здравоохранение"},{icon:"government-authorities.png",label:"Органы государственной власти"},{icon:"state-institutions.png",label:"Государственные учреждения"},{icon:"trade-enterprises.png",label:"Предприятия торговли"},{icon:"hotels.png",label:"Гостиницы"}];var s=e.i(14031);let l=i.default.span.withConfig({displayName:"mask-icon.styles__StyledMaskIcon",componentId:"sc-4d619f0b-0"})`
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
`,c=i.default.section.withConfig({displayName:"projects-showcase.styles__ProjectsSection",componentId:"sc-cdb8af19-0"})`
  padding: 0 72px 34px;
  margin-bottom: 100px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`,p=i.default.div.withConfig({displayName:"projects-showcase.styles__ProjectSlider",componentId:"sc-cdb8af19-1"})`
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
`,d=i.default.div.withConfig({displayName:"projects-showcase.styles__ProjectList",componentId:"sc-cdb8af19-2"})`
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
`,u=i.default.article.withConfig({displayName:"projects-showcase.styles__ProjectItem",componentId:"sc-cdb8af19-3"})`
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
`,m=(0,i.default)(function({file:e,className:n}){return(0,t.jsx)(l,{$src:(0,s.assetPath)(`/figma/${e}`),className:n,"aria-hidden":"true"})}).withConfig({displayName:"projects-showcase.styles__ProjectIcon",componentId:"sc-cdb8af19-4"})`
  width: 66px;
  height: 56px;
`;e.s(["ProjectsShowcase",0,function(){let e=(0,n.useRef)(null),i=(0,n.useRef)({isDragging:!1,startX:0,scrollLeft:0}),[o,s]=(0,n.useState)(!1),[l,g]=(0,n.useState)(!1),h=(0,n.useCallback)(t=>{let n=e.current;if(!n)return;let i=Math.min(.8*n.clientWidth,560),o=n.scrollWidth-n.clientWidth,a=n.scrollLeft+t*i;t>0&&a>=o-4?n.scrollTo({left:0,behavior:"smooth"}):t<0&&a<=4?n.scrollTo({left:o,behavior:"smooth"}):n.scrollBy({left:t*i,behavior:"smooth"})},[]),f=t=>{let n=e.current;n&&void 0!==t&&n.hasPointerCapture(t)&&n.releasePointerCapture(t),i.current.isDragging=!1,s(!1)};return(0,n.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||o||l)return;let e=window.setInterval(()=>h(1),3200);return()=>window.clearInterval(e)},[o,l,h]),(0,t.jsxs)(c,{id:"projects",children:[(0,t.jsx)(a,{children:"Реализованные проекты"}),(0,t.jsxs)(p,{onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),onFocus:()=>g(!0),onBlur:()=>g(!1),children:[(0,t.jsx)("button",{"aria-label":"Предыдущие проекты",type:"button",onClick:()=>h(-1),children:"‹"}),(0,t.jsx)(d,{ref:e,$isDragging:o,onPointerDown:t=>{let n=e.current;n&&(i.current={isDragging:!0,startX:t.clientX,scrollLeft:n.scrollLeft},n.setPointerCapture(t.pointerId),s(!0))},onPointerMove:t=>{let n=e.current,o=i.current;n&&o.isDragging&&(t.preventDefault(),n.scrollLeft=o.scrollLeft-(t.clientX-o.startX))},onPointerUp:e=>f(e.pointerId),onPointerCancel:e=>f(e.pointerId),onPointerLeave:()=>f(),children:r.map(e=>(0,t.jsxs)(u,{children:[(0,t.jsx)(m,{file:e.icon}),(0,t.jsx)("p",{children:e.label})]},e.label))}),(0,t.jsx)("button",{"aria-label":"Следующие проекты",type:"button",onClick:()=>h(1),children:"›"})]})]})}],30770)}]);