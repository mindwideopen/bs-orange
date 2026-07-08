import { RoutePrefetcher } from "@/src/features/route-prefetch";
import { newsItems } from "@/src/entities/news";
import { SiteFooter } from "@/src/widgets/site-footer";
import { SiteHeader } from "@/src/widgets/site-header";
import { navigationItems } from "@/src/widgets/site-header/model/navigation";
import { Page } from "./app-shell.styles";

type AppShellProps = {
  children: React.ReactNode;
};

const backgroundPrefetchRoutes = [
  "/",
  ...navigationItems.map((item) => item.href),
  ...newsItems.map((item) => `/news/${item.slug}`),
  ...newsItems.map((item) => `/news/selected-news-item?news=${item.slug}`),
];

export function AppShell({ children }: AppShellProps) {
  return (
    <Page>
      <RoutePrefetcher routes={backgroundPrefetchRoutes} />
      <SiteHeader />
      {children}
      <SiteFooter />
    </Page>
  );
}
