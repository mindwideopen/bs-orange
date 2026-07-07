import styled from "styled-components";

export const PartnersIntro = styled.section`
  padding: 48px 72px 54px;

  @media (max-width: 900px) {
    padding: 40px 24px 42px;
  }
`;

export const PartnersSection = styled.section<{ $muted?: boolean }>`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 54px 72px 64px;
  background: ${({ $muted }) => ($muted ? "rgb(246, 246, 246)" : "#ffffff")};

  @media (max-width: 900px) {
    padding: 42px 24px 52px;
  }
`;

export const PageContent = styled.div`
  width: min(100%, 926px);
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 34px;

  h1,
  h2 {
    margin: 0;
    font-size: 25px;
    line-height: 1.2;
    text-align: center;
  }

  @media (max-width: 640px) {
    justify-content: flex-start;

    h1,
    h2 {
      text-align: left;
    }
  }
`;

export const SectionLead = styled.p`
  width: min(100%, 780px);
  margin: 0 auto;
  font-size: 19px;
  font-weight: 300;
  line-height: 1.4;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 17px;
    text-align: left;
  }
`;

export const DistributorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 14px;
`;

export const LogoCard = styled.article`
  display: grid;
  align-content: center;
  justify-items: center;
  min-height: 132px;
  padding: 18px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 14px 28px rgb(0 0 0 / 4%);

  img {
    width: min(100%, 140px);
    height: 54px;
    object-fit: contain;
  }

  strong {
    margin-top: 12px;
    font-size: 18px;
    line-height: 1.2;
  }

  span {
    margin-top: 5px;
    color: #666666;
    font-size: 14px;
    line-height: 1.25;
  }
`;

export const CustomerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CustomerCard = styled.article`
  display: grid;
  align-content: start;
  min-height: 288px;
  padding: 22px;
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 14px 28px rgb(0 0 0 / 4%);

  img {
    width: 100%;
    height: 92px;
    object-fit: contain;
  }

  h3 {
    margin: 18px 0 0;
    font-size: 18px;
    line-height: 1.25;
  }

  p {
    margin: 14px 0 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.36;
  }
`;
