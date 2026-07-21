"use client";

import { SectionTitle } from "@/src/shared/ui/section-title";
import { PrivacyPolicyModal } from "@/src/widgets/site-footer";
import { type FormEvent, type MouseEvent, useId, useMemo, useRef, useState } from "react";
import {
  ContactSection,
  ConsentLabel,
  FileButton,
  Form,
  HelperModal,
  HelperModalOverlay,
  HelperTooltip,
} from "./contact-request.styles";

const inactiveActionHint =
  "Заполните поля и примите политику конфиденциальности под формой обратной связи для прикрепления файла и отправки Вашего обращения";

export function ContactRequest() {
  const consentId = useId();
  const consentLinkRef = useRef<HTMLButtonElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [validationAttempted, setValidationAttempted] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHelperModalOpen, setIsHelperModalOpen] = useState(false);

  const isActionsEnabled = useMemo(
    () => name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0 && consentAccepted,
    [consentAccepted, email, message, name],
  );
  const showNameError = validationAttempted && name.trim().length === 0;
  const showEmailError = validationAttempted && email.trim().length === 0;
  const showMessageError = validationAttempted && message.trim().length === 0;
  const warning = "⚠️";

  const handleInactiveAction = (event: MouseEvent<HTMLElement>) => {
    if (isActionsEnabled) {
      return;
    }

    event.preventDefault();
    setValidationAttempted(true);
    setTooltipPosition(null);

    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      setIsHelperModalOpen(true);
    }

    if (!consentAccepted) {
      consentLinkRef.current?.focus();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!isActionsEnabled) {
      event.preventDefault();
      setValidationAttempted(true);
      if (!consentAccepted) {
        consentLinkRef.current?.focus();
      }
    }
  };

  const showInactiveHint = (event: MouseEvent<HTMLElement>) => {
    if (isActionsEnabled) {
      return;
    }

    setTooltipPosition({
      x: Math.max(16, Math.min(event.clientX + 14, window.innerWidth - 336)),
      y: Math.max(16, Math.min(event.clientY + 14, window.innerHeight - 120)),
    });
  };

  const hideInactiveHint = () => setTooltipPosition(null);

  return (
    <ContactSection id="contacts">
      <SectionTitle>Свяжитесь с нами удобным способом</SectionTitle>
      <p>Заполните форму и мы перезвоним</p>
      <Form noValidate onSubmit={handleSubmit}>
        <input
          aria-label="Имя"
          aria-invalid={showNameError}
          placeholder="Имя"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input aria-label="Номер телефона" placeholder="Номер телефона" />
        <input
          aria-label="E-mail"
          aria-invalid={showEmailError}
          placeholder="E-mail"
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <FileButton
          $disabled={!isActionsEnabled}
          aria-disabled={!isActionsEnabled}
          onClick={handleInactiveAction}
          onMouseEnter={showInactiveHint}
          onMouseMove={showInactiveHint}
          onMouseLeave={hideInactiveHint}
        >
          <input type="file" aria-label="Прикрепите файл" disabled={!isActionsEnabled} />
          <span>Прикрепите файл</span>
        </FileButton>
        <textarea
          aria-label="Ваш текст"
          aria-invalid={showMessageError}
          placeholder="Ваш текст"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          type="submit"
          aria-disabled={!isActionsEnabled}
          onClick={handleInactiveAction}
          onMouseEnter={showInactiveHint}
          onMouseMove={showInactiveHint}
          onMouseLeave={hideInactiveHint}
        >
          Отправить
        </button>
        <ConsentLabel>
          {validationAttempted ? <span>{warning}</span>:""}
          <input
            id={consentId}
            aria-label="Принять политику конфиденциальности и обработки персональных данных"
            type="checkbox"
            checked={consentAccepted}
            onChange={(event) => setConsentAccepted(event.target.checked)}

          />
          <span>
            {"Я принимаю "}
          </span>
          <PrivacyPolicyModal className="privacy-policy-trigger" triggerRef={consentLinkRef}>
            Политику конфиденциальности и обработки персональных данных на сайте www.balticstyle.com
          </PrivacyPolicyModal>
        </ConsentLabel>
        {tooltipPosition ? (
          <HelperTooltip $x={tooltipPosition.x} $y={tooltipPosition.y}>
            {inactiveActionHint}
          </HelperTooltip>
        ) : null}
        {isHelperModalOpen ? (
          <HelperModalOverlay onClick={() => setIsHelperModalOpen(false)}>
            <HelperModal role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <p>{inactiveActionHint}</p>
              <button type="button" onClick={() => setIsHelperModalOpen(false)}>
                Понятно
              </button>
            </HelperModal>
          </HelperModalOverlay>
        ) : null}
      </Form>
    </ContactSection>
  );
}
