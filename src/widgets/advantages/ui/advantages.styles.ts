import styled from "styled-components";
import { MaskIcon } from "@/src/shared/ui/mask-icon";

export const AdvantagesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: center;
  gap: 132px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-bottom: 100px;
  padding: 18px 72px 31px;
  background-color: rgb(246, 246, 246);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-inline: 24px;
  }
`;

export const Advantage = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    display: grid;
    margin: 0;
    color: var(--muted);
    font-size: 25px;
    font-weight: 700;
    line-height: 1.08;
  }

  @media (max-width: 520px) {
    p {
      font-size: 20px;
    }
  }
`;

export const AdvantageIcon = styled.span`
  position: relative;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
`;

export const IconMask = styled(MaskIcon)`
  position: absolute;
  width: 31px;
  height: 31px;
`;
