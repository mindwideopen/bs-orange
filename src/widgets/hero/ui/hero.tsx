import Image from "next/image";
import { assetPath } from "@/src/shared/config/assets";
import { HeroContent, HeroImage, HeroSection } from "./hero.styles";

export function Hero() {
  return (
    <HeroSection id="top">
      <HeroContent>
        <h1>
          Оптимальные
          <span>IT-решения</span>
        </h1>
        <p>От разработки стратегии до реализации</p>
      </HeroContent>
      <HeroImage>
        <Image src={assetPath("/figma/hero-cables.png")} alt="" fill sizes="(max-width: 900px) 100vw, 477px" priority />
      </HeroImage>
    </HeroSection>
  );
}
