import styled from "styled-components";

export const Header = styled.header`
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
    flex-wrap: wrap;
    gap: 24px;
    min-height: auto;
    padding-inline: 24px;
  }
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 13px;
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
        transition: opacity 180ms ease,
        transform 180ms ease;
    }

    a:hover::after,
    a:focus-visible::after {
        opacity: 1;
        transform: scaleX(1);
    }

    @media (max-width: 900px) {
        justify-content: flex-start;
        gap: 24px;
        overflow-x: auto;
        padding-inline: 24px;
        white-space: nowrap;
    }
`;
