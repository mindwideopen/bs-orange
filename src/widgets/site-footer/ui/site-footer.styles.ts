import styled from "styled-components";

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1.65fr 0.6fr 1.22fr;
  gap: 48px;
  padding: 14px 68px 10px 180px;
  font-size: 12px;

  div {
    display: grid;
    align-content: start;
    gap: 5px;
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-inline: 24px;
  }
`;

export const Copyright = styled.p`
  grid-column: 1 / -1;
  margin: 0 0 14px;
  text-align: center;
`;
