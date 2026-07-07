import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 27px 72px 58px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`;

export const AboutText = styled.div`
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
`;
