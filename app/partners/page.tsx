import type { Metadata } from "next";
import { PartnersPage as PartnersView } from "@/src/views/partners";

export const metadata: Metadata = {
  title: "Партнеры",
  description: "Поставщики, интеграторы, вендоры и заказчики Балтик Стайл.",
  alternates: {
    canonical: "/partners",
  },
};

export default function PartnersPage() {
  return <PartnersView />;
}
