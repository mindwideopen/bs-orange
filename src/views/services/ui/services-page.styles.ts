import styled from "styled-components";

export const FieldSection = styled.section`
  padding: 40px 72px 86px;

  @media (max-width: 900px) {
    padding: 40px 24px 64px;
  }
`;

export const SolutionsSection = styled.section`
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 54px 72px 100px;
  background: rgb(246, 246, 246);

  @media (max-width: 900px) {
    padding: 44px 24px 72px;
  }
`;

export const PageContent = styled.div`
  width: min(100%, 926px);
  margin: 0 auto;
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 44px;

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

    h1,
    h2 {
      text-align: left;
    }
  }
`;

export const IntroIcon = styled.span`
  display: grid;
  width: 44px;
  height: 44px;
  flex: none;
  place-items: center;
  border-radius: 50%;
  background: var(--orange);

  > span {
    width: 30px;
    height: 30px;
    background: #575757;
  }
`;

export const AccordionGrid = styled.div`
  display: grid;
  gap: 14px;
`;

export const StyledDetails = styled.details`
  border: 1px solid rgb(224, 224, 224);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 14px 28px rgb(0 0 0 / 4%);
  overflow: hidden;

  summary {
    display: flex;
    align-items: center;
    gap: 16px;
    min-height: 58px;
    padding: 17px 24px;
    cursor: pointer;
    font-size: 19px;
    font-weight: 700;
    line-height: 1.25;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    width: 14px;
    height: 14px;
    margin-left: auto;
    border-right: 2px solid var(--orange);
    border-bottom: 2px solid var(--orange);
    content: "";
    transform: rotate(45deg) translateY(-2px);
    transition: transform 180ms ease;
  }

  &[open] summary::after {
    transform: rotate(225deg) translateY(-2px);
  }

  ul {
    display: grid;
    gap: 9px;
    margin: 0;
    padding: 0 24px 24px 46px;
    color: #242424;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.28;
  }

  li {
    padding-left: 3px;
  }

  li::marker {
    color: var(--orange);
  }

  @media (max-width: 640px) {
    summary {
      padding: 16px 18px;
      font-size: 18px;
    }

    ul {
      padding: 0 18px 20px 34px;
      font-size: 16px;
      line-height: 1.42;
    }
  }
`;
