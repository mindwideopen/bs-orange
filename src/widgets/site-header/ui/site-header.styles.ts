import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  z-index: 20;
  padding-top: 51px;

  @media (max-width: 900px) {
    padding-top: 24px;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 130px;
  padding: 0 76px 0 75px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    min-height: auto;
    padding-inline: 24px 72px;
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  color: inherit;
  text-decoration: none;

  span {
    display: grid;
    gap: 5px;
    line-height: 0.9;
  }

  strong,
  small {
    font-family: var(--font-poiret-one);
    font-weight: 400;
  }

  strong {
    font-size: 36px;
  }

  small {
    font-size: 29px;
  }

  @media (max-width: 900px) {
    strong {
      font-size: 30px;
    }

    small {
      font-size: 23px;
    }
  }
`;

export const Phone = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  font-size: 25px;
  line-height: 1;
  text-decoration: none;

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const BurgerButton = styled.button<{ $isHidden?: boolean }>`
  display: none;
  width: 36px;
  height: 28px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    display: block;
    width: 36px;
    height: 3px;
    border-radius: 999px;
    background: #222222;
    transition:
      transform 180ms ease,
      opacity 180ms ease;
  }

  &[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(12px) rotate(45deg);
  }

  &[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }

  &[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-12px) rotate(-45deg);
  }

  @media (max-width: 900px) {
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${({ $isHidden }) => ($isHidden ? 0 : 1)};
    pointer-events: ${({ $isHidden }) => ($isHidden ? "none" : "auto")};
    transform: translateY(${({ $isHidden }) => ($isHidden ? "-10px" : "0")});
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background-color: rgb(246, 246, 246);
  gap: 72px;
  min-height: 75px;
  padding: 27px 40px 24px;
  font-size: 18px;

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
    transition: color 180ms ease;
  }

  a[data-active="true"] {
    color: #ff8100;
  }

  a::after {
    position: absolute;
    right: 0;
    bottom: -10px;
    left: 0;
    height: 2px;
    background: var(--orange);
    content: "";
    opacity: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }

  a:hover::after,
  a:focus-visible::after {
    opacity: 1;
    transform: scaleX(1);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 900px) {
    position: fixed;
    top: 72px;
    right: 0;
    left: 0;
    z-index: 25;
    display: grid;
    width: 100vw;
    max-height: ${({ $isOpen }) => ($isOpen ? "420px" : "0")};
    margin-left: 0;
    overflow: hidden;
    background-color: rgb(246, 246, 246);
    box-shadow: 0 18px 28px rgb(0 0 0 / 10%);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    transition:
      max-height 220ms ease,
      opacity 180ms ease;

    a {
      padding: 17px 24px;
      border-top: 1px solid rgb(225, 225, 225);
      color: inherit;
      font-size: 18px;
      text-decoration: none;
    }

    a[data-active="true"] {
      color: #ff8100;
    }

    a:hover,
    a:focus-visible {
      color: #ff8100;
    }
  }
`;

export const BackToTopButton = styled.button<{ $isVisible: boolean }>`
  display: none;

  @media (max-width: 900px) {
    position: fixed;
    right: 20px;
    bottom: 22px;
    z-index: 30;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 86px;
    min-height: 42px;
    padding: 0 18px;
    border: 0;
    border-radius: 999px;
    background: var(--orange);
    color: #ffffff;
    cursor: pointer;
    font: inherit;
    font-size: 16px;
    line-height: 1;
    box-shadow: 0 14px 28px rgb(0 0 0 / 18%);
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
    transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "10px")});
    transition:
      opacity 180ms ease,
      transform 180ms ease,
      background-color 180ms ease;

    &:hover,
    &:focus-visible {
      background: #e87500;
    }
  }
`;
