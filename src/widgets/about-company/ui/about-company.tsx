import { SectionTitle } from "@/src/shared/ui/section-title";
import { AboutSection, AboutText } from "./about-company.styles";

export function AboutCompany() {
  return (
    <AboutSection id="about">
      <SectionTitle>Системная интеграция и инфраструктурные ИТ-решения</SectionTitle>
      <AboutText>
        <p>
          Компания «Балтик Стайл» реализует проекты по созданию, модернизации и сопровождению
          технологической инфраструктуры предприятий.
        </p>
        <p>
          Наши компетенции включают проектирование систем, интеграцию оборудования и программных
          решений, аудит ИТ-среды, а также поставку и профессиональное обслуживание инфраструктуры.
        </p>
        <p>Надёжный технологический партнёр бизнеса более 30 лет.</p>
      </AboutText>
    </AboutSection>
  );
}
