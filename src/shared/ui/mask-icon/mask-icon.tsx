import { assetPath } from "@/src/shared/config/assets";
import { StyledMaskIcon } from "./mask-icon.styles";

type MaskIconProps = {
  file: string;
  className?: string;
};

export function MaskIcon({ file, className }: MaskIconProps) {
  return <StyledMaskIcon $src={assetPath(`/figma/${file}`)} className={className} aria-hidden="true" />;
}
