"use client";

import { ContactRequest } from "@/src/features/contact-request";
import { RoutePrefetcher } from "@/src/features/route-prefetch";
import { newsItems } from "@/src/entities/news";
import { AboutCompany } from "@/src/widgets/about-company";
import { Advantages } from "@/src/widgets/advantages";
import { Hero } from "@/src/widgets/hero";
import { ProjectsShowcase } from "@/src/widgets/projects-showcase";
import { ServicesList } from "@/src/widgets/services-list";
import { navigationItems } from "@/src/widgets/site-header/model/navigation";

const backgroundPrefetchRoutes = [
  ...navigationItems.map((item) => item.href),
  ...newsItems.map((item) => `/news/${item.slug}`),
  ...newsItems.map((item) => `/news/selected-news-item?news=${item.slug}`),
];

export function HomePage() {
  return (
    <>
      <RoutePrefetcher routes={backgroundPrefetchRoutes} />
      <Hero />
      <AboutCompany />
      <ProjectsShowcase />
      <Advantages />
      <ServicesList />
      <ContactRequest />
    </>
  );
}
