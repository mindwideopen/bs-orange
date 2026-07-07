import type { Metadata } from "next";
import { ContactsPage as ContactsView } from "@/src/views/contacts";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Адрес, телефоны и карта проезда в офис Балтик Стайл в Калининграде.",
  alternates: {
    canonical: "/contacts",
  },
};

export default function ContactsPage() {
  return <ContactsView />;
}
