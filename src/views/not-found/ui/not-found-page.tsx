import Link from "next/link";
import {
  Actions,
  CodeLabel,
  Content,
  Description,
  NotFoundSection,
  PrimaryLink,
  SecondaryLink,
  Title,
} from "./not-found-page.styles";

export function NotFoundPage() {
  return (
    <NotFoundSection>
      <Content>
        <CodeLabel>404</CodeLabel>
        <Title>Страница не найдена</Title>
        <Description>
          Возможно, адрес был изменен, страница удалена или в ссылке появилась ошибка.
        </Description>
        <Actions>
          <PrimaryLink as={Link} href="/">
            На главную
          </PrimaryLink>
          <SecondaryLink as={Link} href="/services">
            Продукты и услуги
          </SecondaryLink>
        </Actions>
      </Content>
    </NotFoundSection>
  );
}
