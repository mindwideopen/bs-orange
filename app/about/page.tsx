import type { Metadata } from "next";
import { AboutPage as AboutView } from "@/src/views/about";

export const metadata: Metadata = {
  title: "О компании",
  description: "История, компетенции и карьерные возможности компании Балтик Стайл.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
