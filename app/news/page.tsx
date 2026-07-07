import type { Metadata } from "next";
import { NewsPage as NewsView } from "@/src/views/news";

export const metadata: Metadata = {
  title: "Новости",
  description: "Новости проектов, партнерств и инфраструктурных решений Балтик Стайл.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  return <NewsView />;
}
