import type { MetadataRoute } from "next";
import { newsItems } from "@/src/entities/news";

export const dynamic = "force-static";

const siteUrl = "https://baltikstyle.ru";
const staticRoutes = ["", "/about", "/services", "/partners", "/news", "/contacts"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-07");

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...newsItems.map((item) => ({
      url: `${siteUrl}/news/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
