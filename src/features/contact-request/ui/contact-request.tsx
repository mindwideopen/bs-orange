import { SectionTitle } from "@/src/shared/ui/section-title";
import { ContactSection, FileButton, Form } from "./contact-request.styles";

export function ContactRequest() {
  return (
    <ContactSection id="contacts">
      <SectionTitle>Свяжитесь с нами удобным способом</SectionTitle>
      <p>Заполните форму и мы перезвоним</p>
      <Form>
        <input aria-label="Имя" placeholder="Имя" />
        <input aria-label="Номер телефона" placeholder="Номер телефона" />
        <input aria-label="E-mail" placeholder="E-mail" type="email" />
        <FileButton>
          <input type="file" aria-label="Прикрепите файл" />
          <span>Прикрепите файл</span>
        </FileButton>
        <textarea aria-label="Ваш текст" placeholder="Ваш текст" />
        <button type="submit">Отправить</button>
      </Form>
    </ContactSection>
  );
}
