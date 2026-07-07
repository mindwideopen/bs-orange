(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18572,e=>{"use strict";var t=e.i(88746);let i=t.default.section.withConfig({displayName:"news-page.styles__NewsSection",componentId:"sc-85bd20cb-0"})`
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
`,r=t.default.h1.withConfig({displayName:"news-page.styles__SectionTitle",componentId:"sc-85bd20cb-2"})`
  margin: 0 0 30px;
  color: #000000;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`,l=t.default.div.withConfig({displayName:"news-page.styles__SliderShell",componentId:"sc-85bd20cb-3"})`
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
`,s=t.default.div.withConfig({displayName:"news-page.styles__SliderTrack",componentId:"sc-85bd20cb-5"})`
  display: flex;
  gap: 22px;
  padding: 0 0 8px;
`,o=t.default.a.withConfig({displayName:"news-page.styles__NewsCard",componentId:"sc-85bd20cb-6"})`
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
`,d=t.default.div.withConfig({displayName:"news-page.styles__SliderControls",componentId:"sc-85bd20cb-7"})`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`,c=t.default.button.withConfig({displayName:"news-page.styles__SliderButton",componentId:"sc-85bd20cb-8"})`
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
`,p=t.default.section.withConfig({displayName:"news-page.styles__ArticleSection",componentId:"sc-85bd20cb-9"})`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 43px 72px 120px;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 24px 84px;
  }
`,f=t.default.header.withConfig({displayName:"news-page.styles__ArticleHeader",componentId:"sc-85bd20cb-10"})`
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
`,h=t.default.p.withConfig({displayName:"news-page.styles__ArticleKicker",componentId:"sc-85bd20cb-11"})`
  margin: 0 0 48px;
  color: #ff8100;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
`,g=t.default.time.withConfig({displayName:"news-page.styles__ArticleMeta",componentId:"sc-85bd20cb-12"})`
  display: block;
  margin-top: 28px;
  color: #969494;
  font-size: 12px;
  line-height: 1.25;
`,x=t.default.div.withConfig({displayName:"news-page.styles__ArticleBody",componentId:"sc-85bd20cb-13"})`
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
`;e.s(["ArticleBody",0,x,"ArticleHeader",0,f,"ArticleKicker",0,h,"ArticleMeta",0,g,"ArticleSection",0,p,"BackLink",0,m,"NewsCard",0,o,"NewsSection",0,i,"PageContent",0,n,"SectionTitle",0,r,"SliderButton",0,c,"SliderControls",0,d,"SliderShell",0,l,"SliderTrack",0,s,"SliderViewport",0,a])},31621,e=>{"use strict";var t=e.i(57827),i=e.i(88750),n=e.i(70467),r=e.i(70160),l=e.i(6635),a=e.i(14031),s=e.i(18572);e.s(["NewsPage",0,function(){let e=(0,r.useRef)(null),o=(0,r.useRef)(0),d=(0,r.useRef)(0),c=(0,r.useRef)(0),[p,f]=(0,r.useState)(!1),[h,g]=(0,r.useState)(0);function x(t){let i=e.current;if(!i)return;let n=(t+l.newsItems.length)%l.newsItems.length,r=i.querySelector("[data-news-card]"),a=r?r.offsetWidth+22:315;i.scrollTo({left:n*a,behavior:"smooth"}),g(n)}return(0,r.useEffect)(()=>{if(p)return;let e=window.setInterval(()=>{x(h+1)},4200);return()=>window.clearInterval(e)},[h,p]),(0,t.jsx)(s.NewsSection,{children:(0,t.jsxs)(s.PageContent,{children:[(0,t.jsx)(s.SectionTitle,{children:"Наши новости"}),(0,t.jsxs)(s.SliderShell,{children:[(0,t.jsx)(s.SliderViewport,{"data-dragging":p,ref:e,onPointerDown:t=>{let i=e.current;i&&(o.current=t.clientX,d.current=i.scrollLeft,c.current=0,f(!0))},onPointerMove:t=>{let i=e.current;if(!i||!p)return;let n=t.clientX-o.current;c.current=Math.max(c.current,Math.abs(n)),i.scrollLeft=d.current-n},onPointerUp:()=>{let t=e.current;if(!t)return;f(!1);let i=t.querySelector("[data-news-card]"),n=i?i.offsetWidth+22:315;x(Math.round(t.scrollLeft/n))},onPointerCancel:()=>f(!1),onPointerLeave:()=>f(!1),children:(0,t.jsx)(s.SliderTrack,{children:l.newsItems.map((e,r)=>{var l;return(0,t.jsxs)(s.NewsCard,{as:n.default,"data-featured":0===r,"data-news-card":!0,href:`/news/selected-news-item?news=${e.slug}`,onClick:e=>{c.current>6&&e.preventDefault(),c.current=0},children:[(0,t.jsx)(i.default,{src:(l=e.image,(0,a.assetPath)(`/figma/${l}`)),alt:e.title,width:293,height:203,priority:0===r}),(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("time",{dateTime:"2026-04-16",children:e.date})]},e.slug)})})}),(0,t.jsxs)(s.SliderControls,{"aria-label":"Управление слайдером новостей",children:[(0,t.jsx)(s.SliderButton,{type:"button","aria-label":"Предыдущая новость",onClick:()=>x(h-1),children:"‹"}),(0,t.jsx)(s.SliderButton,{type:"button","aria-label":"Следующая новость",onClick:()=>x(h+1),children:"›"})]})]})]})})}])},5992,e=>{"use strict";var t=e.i(57827),i=e.i(60878),n=e.i(6635),r=e.i(88750),l=e.i(70467),a=e.i(14031),s=e.i(18572);function o({item:e}){var i;return(0,t.jsx)(s.ArticleSection,{children:(0,t.jsxs)(s.PageContent,{children:[(0,t.jsxs)(s.ArticleHeader,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(s.ArticleKicker,{children:"Наши новости"}),(0,t.jsx)("h1",{children:e.title}),(0,t.jsx)(s.ArticleMeta,{dateTime:"2026-04-16",children:e.date})]}),(0,t.jsx)(r.default,{src:(i=e.image,(0,a.assetPath)(`/figma/${i}`)),alt:e.title,width:418,height:290,priority:!0})]}),(0,t.jsx)(s.ArticleBody,{children:e.body.map(i=>(0,t.jsx)("p",{children:function(e,i){if(!i?.length)return e;let n=i.find(t=>e.includes(t.label));if(!n)return e;let r=e.split(n.label);return(0,t.jsxs)(t.Fragment,{children:[r[0],(0,t.jsx)("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",children:n.label}),r.slice(1).join(n.label)]})}(i,e.links)},i))}),(0,t.jsx)(s.BackLink,{as:l.default,href:"/news",children:"Вернуться к новостям"})]})})}e.s(["SelectedNewsItemPage",0,function(){let e=(0,i.useSearchParams)().get("news")||n.newsItems[0]?.slug,r=(0,n.getNewsItem)(e)||n.newsItems[0];return(0,t.jsx)(o,{item:r})}],5992)}]);