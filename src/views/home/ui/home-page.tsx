import { ContactRequest } from "@/src/features/contact-request";
import { AboutCompany } from "@/src/widgets/about-company";
import { Advantages } from "@/src/widgets/advantages";
import { Hero } from "@/src/widgets/hero";
import { ProjectsShowcase } from "@/src/widgets/projects-showcase";
import { ServicesList } from "@/src/widgets/services-list";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <ProjectsShowcase />
      <Advantages />
      <ServicesList />
      <ContactRequest />
    </>
  );
}
