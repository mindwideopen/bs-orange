import styled from "styled-components";

export const StyledMaskIcon = styled.span<{ $src: string }>`
  display: inline-block;
  flex: none;
  background: var(--orange);
  mask-image: url("${({ $src }) => $src}");
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
  -webkit-mask-image: url("${({ $src }) => $src}");
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
`;
