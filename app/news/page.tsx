import type { Metadata } from "next";
import { NewsPage as NewsView } from "@/src/views/news";
import { getNews } from "@/src/entities/news/api/getNews";

export const metadata: Metadata = {
  title: "Новости",
  description: "Новости проектов, партнерств и инфраструктурных решений Балтик Стайл.",
  alternates: {
    canonical: "/news",
  },
};

export default async function NewsPage() {
  const newsItems = await getNews();

  return <NewsView newsItems={newsItems} />;
}