import styled from "styled-components";

export const AboutIntro = styled.section`
  padding: 52px 72px 88px;

  @media (max-width: 900px) {
    padding: 48px 24px 64px;
  }
`;

export const AboutContent = styled.div`
  width: min(100%, 924px);
  margin: 0 auto;
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;

  &:not(:first-child) {
    margin-top: 82px;
  }

  > span {
    display: grid;
    width: 45px;
    height: 45px;
    place-items: center;
    border-radius: 50%;
    background: var(--orange);
  }

  > span > span {
    width: 28px;
    height: 28px;
    background: #525252;
  }

  h1,
  h2 {
    margin: 0;
    font-size: 25px;
    line-height: 1.2;
    text-align: center;
  }

  @media (max-width: 640px) {
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 28px;

    &:not(:first-child) {
      margin-top: 56px;
    }

    h1,
    h2 {
      text-align: left;
    }
  }
`;

export const TextBlock = styled.div`
  font-size: 19px;
  font-weight: 300;
  line-height: 1.22;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 23px;
  }

  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.42;
  }
`;

export const CareerSection = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 48px 72px 55px;
  background: rgb(246, 246, 246);

  h2 {
    margin: 0 0 44px;
    font-size: 25px;
    line-height: 0.9;
    text-align: center;
  }

  @media (max-width: 900px) {
    padding: 40px 24px 48px;

    h2 {
      margin-bottom: 32px;
      line-height: 1.2;
    }
  }
`;

export const CareerForm = styled.form`
  display: grid;
  grid-template-columns: 1.08fr 1.08fr 0.93fr 0.9fr;
  gap: 14px 8px;
  width: min(100%, 924px);
  margin: 0 auto;

  > p {
    grid-column: 1 / -1;
    margin: 0 0 15px 20px;
    font-size: 18px;
  }

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
    outline-color: var(--orange);
    padding: 17px 20px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #a1a1a1;
  }

  textarea {
    grid-column: 1 / 4;
    min-height: 55px;
    resize: vertical;
  }

  button {
    min-height: 55px;
    background: var(--orange);
    color: #ffffff;
    cursor: pointer;
    transition: filter 160ms ease;
  }

  button:hover,
  button:focus-visible {
    filter: brightness(0.95);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 12px;

    > p {
      margin-left: 0;
    }

    textarea {
      grid-column: auto;
    }
  }
`;

export const FileButton = styled.label`
  display: flex;
  align-items: center;
  min-width: 0;
  border-radius: 15px;
  background: var(--field);
  color: #a1a1a1;
  cursor: pointer;
  font: inherit;
  font-size: 18px;
  outline-color: var(--orange);
  padding: 17px 20px;

  &::after {
    margin-left: auto;
    color: #a1a1a1;
    content: "v";
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;
