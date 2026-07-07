"use client";

import { SiteFooter } from "@/src/widgets/site-footer";
import { SiteHeader } from "@/src/widgets/site-header";
import { Page } from "./app-shell.styles";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <Page>
      <SiteHeader />
      {children}
      <SiteFooter />
    </Page>
  );
}
