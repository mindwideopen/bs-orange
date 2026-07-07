"use client";

import { useSearchParams } from "next/navigation";
import { getNewsItem, newsItems } from "@/src/entities/news";
import { NewsArticlePage } from "./news-article-page";

export function SelectedNewsItemPage() {
  const searchParams = useSearchParams();
  const selectedSlug = searchParams.get("news") || newsItems[0]?.slug;
  const item = getNewsItem(selectedSlug) || newsItems[0];

  return <NewsArticlePage item={item} />;
}
