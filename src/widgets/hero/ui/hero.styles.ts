import styled from "styled-components";

export const HeroSection = styled.section`
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
`;

export const HeroContent = styled.div`
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
`;

export const HeroImage = styled.div`
  position: relative;
  min-height: 324px;

  img {
    object-fit: cover;
  }

  @media (max-width: 900px) {
    min-height: 220px;
  }
`;
