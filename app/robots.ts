import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://baltikstyle.ru";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
