import type { Metadata } from "next";
import { inter, poiretOne } from "./fonts";
import { StyledComponentsRegistry } from "./registry";
import { AppShell } from "@/src/widgets/app-shell";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://baltikstyle.ru";

const companyName = "Балтик Стайл";
const siteDescription =
  "Системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} - сетевые решения`,
    template: `%s | ${companyName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: companyName,
    title: `${companyName} - сетевые решения`,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: `${companyName} - сетевые решения`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: companyName,
  url: siteUrl,
  telephone: "+74012991199",
  email: "info@balticstyle.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301",
    addressLocality: "Калининград",
    postalCode: "236029",
    addressCountry: "RU",
  },
  areaServed: "RU",
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${poiretOne.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <StyledComponentsRegistry>
          <AppShell>{children}</AppShell>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
// import type { Metadata } from "next";
// import { inter, poiretOne } from "./fonts";
// import { StyledComponentsRegistry } from "./registry";
// import { AppShell } from "@/src/widgets/app-shell";
// import "./globals.css";
//
// const siteUrl = "https://mindwideopen.github.io/bs-orange";
//
// const siteDescription =
//     "Системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей.";
//
// async function getCompanyName(): Promise<string> {
//   const response = await fetch(
//       "https://admin.baltikstyle.ru/items/site_settings?fields=company_name"
//   );
//
//   if (!response.ok) {
//     return "Балтик Стайл";
//   }
//
//   const result = await response.json();
//
//   return result.data.company_name;
// }
//
// export async function generateMetadata(): Promise<Metadata> {
//   const companyName = await getCompanyName();
//
//   return {
//     metadataBase: new URL(siteUrl),
//
//     title: {
//       default: `${companyName} - сетевые решения`,
//       template: `%s | ${companyName}`,
//     },
//
//     description: siteDescription,
//
//     alternates: {
//       canonical: "/",
//     },
//
//     openGraph: {
//       type: "website",
//       locale: "ru_RU",
//       url: siteUrl,
//       siteName: companyName,
//       title: `${companyName} - сетевые решения`,
//       description: siteDescription,
//     },
//
//     twitter: {
//       card: "summary",
//       title: `${companyName} - сетевые решения`,
//       description: siteDescription,
//     },
//
//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }
