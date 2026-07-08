(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3991,e=>{"use strict";var t=e.i(57827),a=e.i(70160),i=e.i(88746);i.default.section.withConfig({displayName:"contacts-page.styles__ContactsSection",componentId:"sc-8afbc2a5-0"})`
  padding: 43px 72px 86px;

  @media (max-width: 900px) {
    padding: 40px 24px 64px;
  }
`,i.default.div.withConfig({displayName:"contacts-page.styles__PageContent",componentId:"sc-8afbc2a5-1"})`
  width: min(100%, 997px);
  margin: 0 auto;
`,i.default.h1.withConfig({displayName:"contacts-page.styles__SectionTitle",componentId:"sc-8afbc2a5-2"})`
  margin: 0 0 61px;
  font-size: 25px;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 640px) {
    margin-bottom: 28px;
    text-align: left;
  }
`,i.default.div.withConfig({displayName:"contacts-page.styles__ContactGrid",componentId:"sc-8afbc2a5-3"})`
  display: grid;
  grid-template-columns: minmax(260px, 345px) minmax(360px, 476px);
  gap: 48px 104px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`,i.default.div.withConfig({displayName:"contacts-page.styles__ContactDetails",componentId:"sc-8afbc2a5-4"})`
  display: grid;
  gap: 38px;
  padding-top: 26px;
`,i.default.article.withConfig({displayName:"contacts-page.styles__ContactCard",componentId:"sc-8afbc2a5-5"})`
  display: grid;
  gap: 9px;
  background: #ffffff;
`,i.default.address.withConfig({displayName:"contacts-page.styles__AddressBlock",componentId:"sc-8afbc2a5-6"})`
  margin: 0;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.28;

  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.42;
  }
`,i.default.div.withConfig({displayName:"contacts-page.styles__ContactActions",componentId:"sc-8afbc2a5-7"})`
  display: grid;
  gap: 8px;
`,i.default.a.withConfig({displayName:"contacts-page.styles__ContactLink",componentId:"sc-8afbc2a5-8"})`
  width: fit-content;
  color: #000000;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.25;
  text-decoration: none;
  transition: color 160ms ease;

  &:hover,
  &:focus-visible {
    color: var(--orange, #ff8100);
  }

  @media (max-width: 640px) {
    font-size: 17px;
  }
`,i.default.aside.withConfig({displayName:"contacts-page.styles__LandmarkCard",componentId:"sc-8afbc2a5-9"})`
  min-height: 185px;
  margin-top: 5px;
  padding: 18px;
  border-radius: 2px;
  background:
    linear-gradient(180deg, rgb(255 255 255 / 5%), rgb(0 0 0 / 12%)),
    linear-gradient(90deg, rgb(197 211 214) 0 26%, rgb(240 226 205) 26% 52%, rgb(197 211 214) 52% 100%);
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 8%);
  color: #ffffff;
  text-shadow: 0 1px 2px rgb(0 0 0 / 45%);

  strong {
    display: block;
    margin-bottom: 12px;
    font-size: 18px;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: #ffffff;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.38;
  }
`,i.default.article.withConfig({displayName:"contacts-page.styles__MapPanel",componentId:"sc-8afbc2a5-10"})`
  display: grid;
  gap: 18px;
`,i.default.div.withConfig({displayName:"contacts-page.styles__MapLinks",componentId:"sc-8afbc2a5-11"})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 11px;
  line-height: 1.2;
`;let n=`
  display: inline-flex;
  align-items: center;
  min-height: 18px;
  color: #357bd8;
  font-size: 11px;
  line-height: 1.2;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
`;i.default.a.withConfig({displayName:"contacts-page.styles__MapLink",componentId:"sc-8afbc2a5-12"})`
  ${n}
`,i.default.span.withConfig({displayName:"contacts-page.styles__MapChip",componentId:"sc-8afbc2a5-13"})`
  ${n}
`,i.default.div.withConfig({displayName:"contacts-page.styles__MapVisual",componentId:"sc-8afbc2a5-14"})`
  position: relative;
  min-height: 365px;
  overflow: hidden;
  background: #edf1ef;

  @media (max-width: 640px) {
    min-height: 300px;
  }
`;let o=i.default.iframe.withConfig({displayName:"contacts-page.styles__MapFrame",componentId:"sc-8afbc2a5-15"})`
  display: block;
  width: 100%;
  height: clamp(344px, 38vw, 430px);
  border: 0;
`,s=i.default.div.withConfig({displayName:"contacts-page.styles__MapPlaceholder",componentId:"sc-8afbc2a5-16"})`
  display: grid;
  width: 100%;
  height: clamp(344px, 38vw, 430px);
  place-items: center;
  padding: 24px;
  color: #5d6661;
  font-size: 16px;
  line-height: 1.35;
  text-align: center;
`;i.default.div.withConfig({displayName:"contacts-page.styles__OfficeVisual",componentId:"sc-8afbc2a5-17"})`
  position: relative;
  min-height: 220px;
  overflow: hidden;
  border-radius: 22px;
  img {
    object-fit: cover;
  }
`,e.s(["LazyMapFrame",0,function({src:e,title:i}){let n=(0,a.useRef)(null),[p,c]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{if(p)return;let e=n.current;if(!e||!("IntersectionObserver"in window))return void c(!0);let t=new IntersectionObserver(([e])=>{e?.isIntersecting&&(c(!0),t.disconnect())},{rootMargin:"220px 0px"});return t.observe(e),()=>t.disconnect()},[p]),p)?(0,t.jsx)(o,{allowFullScreen:!0,loading:"lazy",referrerPolicy:"strict-origin-when-cross-origin",src:e,title:i}):(0,t.jsx)(s,{ref:n,children:"Карта загрузится при приближении к блоку"})}],3991)}]);