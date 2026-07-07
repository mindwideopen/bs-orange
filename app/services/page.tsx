import type { Metadata } from "next";
import { ServicesPage as ServicesView } from "@/src/views/services";

export const metadata: Metadata = {
  title: "Продукты, технологии, услуги",
  description: "Проектирование, аудит, IT-аутсорсинг, интеграция, поставка и обслуживание инфраструктурных решений.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
