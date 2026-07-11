import styled from "styled-components";

export const NotFoundSection = styled.section`
  width: 100vw;
  min-height: clamp(520px, 72vh, 760px);
  margin-left: calc(50% - 50vw);
  display: grid;
  place-items: center;
  padding: 96px 24px;
  background:
    radial-gradient(circle at 20% 18%, rgb(255 129 0 / 18%), transparent 30%),
    linear-gradient(135deg, #00163c 0%, #06285f 100%);
  color: #ffffff;
`;

export const Content = styled.div`
  width: min(100%, 760px);
  text-align: center;
`;

export const CodeLabel = styled.p`
  margin: 0 0 10px;
  color: var(--orange);
  font-size: clamp(72px, 16vw, 148px);
  font-weight: 700;
  line-height: 0.9;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.08;
`;

export const Description = styled.p`
  width: min(100%, 560px);
  margin: 24px auto 0;
  color: rgb(255 255 255 / 82%);
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.45;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 38px;
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  border-radius: 15px;
  background: var(--orange);
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  padding: 12px 28px;
  text-decoration: none;
`;

export const SecondaryLink = styled(PrimaryLink)`
  border: 1px solid rgb(255 255 255 / 58%);
  background: transparent;
`;
