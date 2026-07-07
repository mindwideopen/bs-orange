import styled from "styled-components";
import { MaskIcon } from "@/src/shared/ui/mask-icon";

export const ServicesSection = styled.section`
  display: grid;
  gap: 47px;
  padding: 26px 72px 83px 114px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`;

export const ServiceItem = styled.article`
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
`;

export const ServiceIcon = styled(MaskIcon)`
  width: 70px;
  height: 70px;

  @media (max-width: 900px) {
    width: 56px;
    height: 56px;
  }
`;
