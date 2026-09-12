import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/src/entities/news";
import { NewsArticlePage as NewsArticleView } from "@/src/views/news";
import {getNews, getNewsBySlug} from "@/src/entities/news/api/getNews";
import type { DirectusNewsItem } from "@/src/entities/news/api/getNews";


export const dynamicParams = false;


export async function generateStaticParams() {

  const items = await getNews();

  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item  = await getNewsBySlug(slug);

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
      description: item.summary??undefined,
      type: "article",
    },
  };
}

export default async function NewsArticlePage({  params}: {params: Promise<{ slug: string }>;
}) {
  const {slug} = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return <NewsArticleView item={item}/>;
}
