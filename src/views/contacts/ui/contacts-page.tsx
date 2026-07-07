import {
  AddressBlock,
  ContactActions,
  ContactCard,
  ContactDetails,
  ContactGrid,
  ContactLink,
  ContactsSection,
  MapChip,
  MapFrame,
  MapLink,
  MapLinks,
  MapPanel,
  MapVisual, OfficeVisual,
  PageContent,
  SectionTitle,
} from "./contacts-page.styles";
import Image from "next/image";
import officeImage from "@/src/assets/how-to-find-us.webp";

const address = "г. Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301";
const phones = ["+7 (4012) 99 11 99", "+7 (4012) 99 11 98"];
const mapEmbedUrl = "https://yandex.ru/map-widget/v1/?ll=20.505439%2C54.724365&z=18&pt=20.505439%2C54.724365%2Cpm2rdm";
const mapLinks = [
  { label: "Общественный транспорт", url: "" },
  { label: "Карта парковок", url: "" },
  { label: "Проложить маршрут", url: "https://yandex.ru/maps/?mode=routes&rtext=~54.724365%2C20.505439&rtt=auto" },
];

function getPhoneHref(phone: string) {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export function ContactsPage() {
  return (
    <ContactsSection>
      <PageContent>
        <SectionTitle>Как нас найти</SectionTitle>

        <ContactGrid>
          <ContactDetails>
            <ContactCard>
              <AddressBlock>{address}</AddressBlock>
            </ContactCard>

            <ContactCard>
              <ContactActions>
                {phones.map((phone) => (
                  <ContactLink href={getPhoneHref(phone)} key={phone}>
                    {phone}
                  </ContactLink>
                ))}
              </ContactActions>
            </ContactCard>


              <OfficeVisual>

              <Image
                  src={officeImage}
                  alt="Фотография офиса Балтик Стайл"
                  fill
                  decoding="async"
                  loading="lazy"
                  sizes="(max-width: 860px) 100vw, 50vw"
              />
            </OfficeVisual>
          </ContactDetails>

          <MapPanel aria-label="Карта проезда">
            <MapLinks aria-label="Действия с картой">
              {mapLinks.map((link) =>
                link.url ? (
                  <MapLink href={link.url} key={link.label} rel="noopener noreferrer" target="_blank">
                    {link.label}
                  </MapLink>
                ) : (
                  <MapChip key={link.label}>{link.label}</MapChip>
                ),
              )}
            </MapLinks>
            <MapVisual id="yandex-map" data-map-provider="yandex" data-coordinates="54.724365, 20.505439">
              <MapFrame
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src={mapEmbedUrl}
                title="Карта расположения офиса Балтик Стайл"
              />
            </MapVisual>
          </MapPanel>
        </ContactGrid>
      </PageContent>
    </ContactsSection>
  );
}
