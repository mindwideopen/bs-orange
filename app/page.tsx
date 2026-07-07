import type { Metadata } from "next";
import { HomePage } from "@/src/views/home";

export const metadata: Metadata = {
  title: "Балтик Стайл - сетевые решения",
  description: "IT-интегратор для инфраструктурных решений, слаботочных сетей, поставки оборудования и сервисной поддержки.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomePage />;
}
