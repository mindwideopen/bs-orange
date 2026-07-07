import styled from "styled-components";

export const ContactsSection = styled.section`
  padding: 43px 72px 86px;

  @media (max-width: 900px) {
    padding: 40px 24px 64px;
  }
`;

export const PageContent = styled.div`
  width: min(100%, 997px);
  margin: 0 auto;
`;

export const SectionTitle = styled.h1`
  margin: 0 0 61px;
  font-size: 25px;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 640px) {
    margin-bottom: 28px;
    text-align: left;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 345px) minmax(360px, 476px);
  gap: 48px 104px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const ContactDetails = styled.div`
  display: grid;
  gap: 38px;
  padding-top: 26px;
`;

export const ContactCard = styled.article`
  display: grid;
  gap: 9px;
  background: #ffffff;
`;

export const AddressBlock = styled.address`
  margin: 0;
  font-size: 19px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.28;

  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.42;
  }
`;

export const ContactActions = styled.div`
  display: grid;
  gap: 8px;
`;

export const ContactLink = styled.a`
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
`;

export const LandmarkCard = styled.aside`
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
`;

export const MapPanel = styled.article`
  display: grid;
  gap: 18px;
`;

export const MapLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 11px;
  line-height: 1.2;
`;

const mapActionStyles = `
  display: inline-flex;
  align-items: center;
  min-height: 18px;
  color: #357bd8;
  font-size: 11px;
  line-height: 1.2;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
`;

export const MapLink = styled.a`
  ${mapActionStyles}
`;

export const MapChip = styled.span`
  ${mapActionStyles}
`;

export const MapVisual = styled.div`
  position: relative;
  min-height: 365px;
  overflow: hidden;
  background: #edf1ef;

  @media (max-width: 640px) {
    min-height: 300px;
  }
`;

export const MapFrame = styled.iframe`
  display: block;
  width: 100%;
  height: clamp(344px, 38vw, 430px);
  border: 0;
`;

export const OfficeVisual = styled.div`
  position: relative;
  min-height: 220px;
  overflow: hidden;
  border-radius: 22px;
  img {
    object-fit: cover;
  }
`;
