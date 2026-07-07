import type { Metadata } from "next";
import { Suspense } from "react";
import { SelectedNewsItemPage as SelectedNewsItemView } from "@/src/views/news";

export const metadata: Metadata = {
  title: "Новость",
  description: "Подробная новость Балтик Стайл.",
  alternates: {
    canonical: "/news/selected-news-item",
  },
};

export default function SelectedNewsItemPage() {
  return (
    <Suspense fallback={null}>
      <SelectedNewsItemView />
    </Suspense>
  );
}
