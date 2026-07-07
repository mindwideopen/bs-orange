import styled from "styled-components";

export const NewsSection = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 48px 72px 96px;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 24px 72px;
  }
`;

export const PageContent = styled.div`
  width: min(100%, 996px);
  margin: 0 auto;
`;

export const SectionTitle = styled.h1`
  margin: 0 0 30px;
  color: #000000;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`;

export const SliderShell = styled.div`
  position: relative;
`;

export const SliderViewport = styled.div`
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
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 22px;
  padding: 0 0 8px;
`;

export const NewsCard = styled.a`
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
`;

export const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
`;

export const SliderButton = styled.button`
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
`;

export const ArticleSection = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 43px 72px 120px;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 24px 84px;
  }
`;

export const ArticleHeader = styled.header`
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
`;

export const ArticleKicker = styled.p`
  margin: 0 0 48px;
  color: #ff8100;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
`;

export const ArticleMeta = styled.time`
  display: block;
  margin-top: 28px;
  color: #969494;
  font-size: 12px;
  line-height: 1.25;
`;

export const ArticleBody = styled.div`
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
`;

export const BackLink = styled.a`
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
`;
