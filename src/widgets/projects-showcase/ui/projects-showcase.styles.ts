import styled from "styled-components";
import { MaskIcon } from "@/src/shared/ui/mask-icon";

export const ProjectsSection = styled.section`
  padding: 0 72px 34px;
  margin-bottom: 100px;

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`;

export const ProjectSlider = styled.div`
  display: grid;
  grid-template-columns: 28px minmax(0, 900px) 28px;
  align-items: center;
  justify-content: center;
  gap: 22px;
  margin-top: 50px;

  button {
    border: 0;
    background: transparent;
    color: #969494;
    cursor: pointer;
    font-size: 28px;
    font-weight: 300;
    line-height: 1;
    transition: color 160ms ease;
  }

  button:hover {
    color: var(--color-orange);
  }

  @media (max-width: 900px) {
    grid-template-columns: 24px minmax(0, 1fr) 24px;
    gap: 12px;
  }
`;

export const ProjectList = styled.div<{ $isDragging: boolean }>`
  display: grid;
  grid-auto-columns: minmax(124px, 150px);
  grid-auto-flow: column;
  gap: 34px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  user-select: none;
  touch-action: pan-y;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    grid-auto-columns: minmax(120px, 42%);
  }

  @media (max-width: 520px) {
    grid-auto-columns: minmax(120px, 72%);
  }
`;

export const ProjectItem = styled.article`
  display: grid;
  justify-items: center;
  gap: 14px;
  min-width: 0;
  text-align: center;
  scroll-snap-align: center;

  p {
    margin: 0;
    font-size: 18px;
  }
`;

export const ProjectIcon = styled(MaskIcon)`
  width: 66px;
  height: 56px;
`;
