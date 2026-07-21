import styled from "styled-components";

type DisabledProps = {
  $disabled?: boolean;
};

export const ContactSection = styled.section`
  padding: 38px 72px 118px;

  > p {
    width: min(100%, 934px);
    margin: 33px auto 29px;
    font-size: 18px;
  }

  @media (max-width: 900px) {
    padding-inline: 24px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1.08fr 1.08fr 0.93fr 0.93fr;
  gap: 16px;
  width: min(100%, 934px);
  margin: 0 auto;

  input,
  textarea,
  button {
    min-width: 0;
    border: 0;
    border-radius: 15px;
    font: inherit;
    font-size: 18px;
  }

  input,
  textarea {
    background: var(--field);
    color: #6b6b6b;
    outline: 2px solid transparent;
    outline-offset: 2px;
    padding: 18px 20px;
  }

  input:focus,
  textarea:focus {
    outline-color: var(--orange);
  }

  input[aria-invalid="true"],
  textarea[aria-invalid="true"] {
    outline-color: #d72f2f;
  }

  input::placeholder,
  textarea::placeholder {
    color: #a1a1a1;
  }

  textarea {
    grid-column: 1 / 4;
    min-height: 59px;
    resize: vertical;
  }

  button {
    min-height: 59px;
    background: var(--orange);
    color: #ffffff;
    cursor: pointer;
    transition:
      background-color 160ms ease,
      color 160ms ease,
      opacity 160ms ease;
  }

  button[aria-disabled="true"] {
    cursor: not-allowed;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    textarea {
      grid-column: auto;
    }
  }
`;

export const FileButton = styled.label<DisabledProps>`
  display: flex;
  align-items: center;
  min-width: 0;
  border: 0;
  border-radius: 15px;
  background: var(--orange);
  color: #ffffff;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  font: inherit;
  font-size: 18px;
  outline-color: var(--orange);
  padding: 18px 20px;
  transition:
    background-color 160ms ease,
    color 160ms ease,
    opacity 160ms ease;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;

export const ConsentLabel = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #5f5f5f;
  font-size: 14px;
  line-height: 1.35;

  input {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    margin-top: 1px;
    accent-color: var(--orange);
  }

  .privacy-policy-trigger {
    min-height: auto;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;
    outline: 2px solid transparent;
    outline-offset: 3px;
    padding: 0;
    text-align: left;
    text-decoration: underline;
    text-decoration-color: rgb(95 95 95 / 55%);
    text-underline-offset: 3px;
  }

  .privacy-policy-trigger:focus-visible {
    outline-color: var(--orange);
  }
`;

export const HelperTooltip = styled.div<{ $x: number; $y: number }>`
  position: fixed;
  z-index: 900;
  top: ${({ $y }) => $y}px;
  left: ${({ $x }) => $x}px;
  max-width: min(320px, calc(100vw - 32px));
  border-radius: 12px;
  background: #1b1b1b;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.35;
  padding: 10px 12px;
  pointer-events: none;
  box-shadow: 0 12px 30px rgb(0 0 0 / 18%);
`;

export const HelperModalOverlay = styled.div`
  position: fixed;
  z-index: 950;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgb(0 0 0 / 34%);
`;

export const HelperModal = styled.div`
  width: min(100%, 360px);
  border-radius: 15px;
  background: #ffffff;
  color: #1b1b1b;
  padding: 22px;
  box-shadow: 0 18px 50px rgb(0 0 0 / 20%);

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.45;
  }

  button {
    width: 100%;
    min-height: 44px;
    margin-top: 18px;
    border: 0;
    border-radius: 12px;
    background: var(--orange);
    color: #ffffff;
    cursor: pointer;
    font: inherit;
    font-weight: 700;
  }
`;
