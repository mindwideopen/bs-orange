import Image from "next/image";
import { assetPath } from "@/src/shared/config/assets";
import { advantageItems } from "../model/advantages";
import { Advantage, AdvantageIcon, AdvantagesSection, IconMask } from "./advantages.styles";

export function Advantages() {
  return (
    <AdvantagesSection aria-label="Преимущества">
      {advantageItems.map((item) => (
        <Advantage key={item.title}>
          <AdvantageIcon>
            <Image src={assetPath(`/figma/${item.base}`)} alt="" width={44} height={44} />
            <IconMask file={item.icon} />
          </AdvantageIcon>
          <p>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </p>
        </Advantage>
      ))}
    </AdvantagesSection>
  );
}
