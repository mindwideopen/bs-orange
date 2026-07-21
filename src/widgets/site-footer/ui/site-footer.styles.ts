import styled from "styled-components";

type CloseButtonProps = {
  $variant?: "icon" | "footer";
};

export const Footer = styled.footer`
    width: 100vw;
    margin-left: calc(50% - 50vw); 
  display: grid;
  grid-template-columns: 1.65fr 0.6fr 1.22fr;
  gap: 48px;
  margin-top: auto;
  padding: 14px 68px 10px 180px;
  font-size: 12px;
    background-color: rgb(246, 246, 246);

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

export const PolicyButton = styled.button`
  grid-column: 1 / -1;
  justify-self: center;
  border: 0;
  background: transparent;
  color: var(--orange);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding: 4px 0;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgb(0 0 0 / 48%);
`;

export const ModalContent = styled.div`
  position: relative;
  width: min(100%, 760px);
  max-height: min(80vh, 720px);
  overflow: auto;
  border-radius: 15px;
  background: #ffffff;
  color: #1b1b1b;
  padding: 36px;
  box-shadow: 0 24px 70px rgb(0 0 0 / 22%);

  h2 {
    margin: 0 36px 20px 0;
    font-size: 24px;
    line-height: 1.2;
  }

  @media (max-width: 600px) {
    padding: 28px 20px;
  }
`;

export const ModalBody = styled.div`
  white-space: pre-line;
  font-size: 16px;
  line-height: 1.55;
`;

export const CloseButton = styled.button<CloseButtonProps>`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 50%;
  background: var(--field);
  color: #1b1b1b;
  cursor: pointer;
  font-size: 24px;
  line-height: 1;

  ${({ $variant }) =>
    $variant === "footer"
      ? `
        position: static;
        width: auto;
        height: auto;
        min-height: 46px;
        margin-top: 28px;
        border-radius: 15px;
        background: var(--orange);
        color: #ffffff;
        padding: 12px 28px;
        font: inherit;
        font-size: 16px;
      `
      : ""}
`;
