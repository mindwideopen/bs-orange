import { serviceItems } from "../model/services";
import { ServiceIcon, ServiceItem, ServicesSection } from "./services-list.styles";

export function ServicesList() {
  return (
    <ServicesSection id="services">
      {serviceItems.map((item) => (
        <ServiceItem key={item.title}>
          <ServiceIcon file={item.icon} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </ServiceItem>
      ))}
    </ServicesSection>
  );
}
