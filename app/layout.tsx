import type { Metadata } from "next";
import { inter, poiretOne } from "./fonts";
import { StyledComponentsRegistry } from "./registry";
import { AppShell } from "@/src/widgets/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Балтик Стайл",
  description: "Системная интеграция и инфраструктурные ИТ-решения",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${poiretOne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <StyledComponentsRegistry>
          <AppShell>{children}</AppShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
