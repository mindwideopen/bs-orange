import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsItem, newsItems } from "@/src/entities/news";
import { NewsArticlePage as NewsArticleView } from "@/src/views/news";

export const dynamicParams = false;

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);

  if (!item) {
    return {
      title: "Новость",
      description: "Подробная новость Балтик Стайл.",
    };
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: {
      canonical: `/news/${item.slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.summary,
      type: "article",
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsItem(slug);

  if (!item) {
    notFound();
  }

  return <NewsArticleView item={item} />;
}
