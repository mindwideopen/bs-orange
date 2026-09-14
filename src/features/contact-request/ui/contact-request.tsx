"use client";

import { type SubmitErrorHandler, useForm } from "react-hook-form";
import { SectionTitle } from "@/src/shared/ui/section-title";
import { PrivacyPolicyModal } from "@/src/widgets/site-footer";
import { type MouseEvent, useId, useRef, useState } from "react";
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

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
  file: FileList;
  consent: boolean;
};

export function ContactRequest() {
  const consentId = useId();
  const consentLinkRef = useRef<HTMLButtonElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHelperModalOpen, setIsHelperModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, submitCount },
  } = useForm<ContactFormValues>({
    shouldFocusError: false,
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      consent: false,
    },
  });
  const [name, email, message, consentAccepted] = watch([
    "name",
    "email",
    "message",
    "consent",
  ]);

  const isActionsEnabled =
    name.trim().length > 0 &&
    emailPattern.test(email.trim()) &&
    message.trim().length > 0 &&
    consentAccepted;
  const warning = "⚠️";

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          consent: data.consent,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки формы");
      }

      const result = await response.json();

      console.log("Форма отправлена:", result);
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
    }
  };

  const onInvalid: SubmitErrorHandler<ContactFormValues> = (formErrors) => {
    if (formErrors.consent) {
      consentLinkRef.current?.focus();
    }
  };

  const handleInactiveAction = (event: MouseEvent<HTMLElement>) => {
    if (isActionsEnabled) {
      return;
    }

    event.preventDefault();
    void handleSubmit(onSubmit, onInvalid)();
    setTooltipPosition(null);

    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      setIsHelperModalOpen(true);
    }

    if (!consentAccepted) {
      consentLinkRef.current?.focus();
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
      <Form noValidate onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <input
          {...register("name", {
            required: true,
            validate: (value) => value.trim().length > 0,
          })}
          aria-label="Имя"
          aria-invalid={Boolean(errors.name)}
          placeholder="Имя"
          required
        />
        <input
          {...register("phone")}
          aria-label="Номер телефона"
          placeholder="Номер телефона"
        />
        <input
          {...register("email", {
            required: true,
            validate: (value) => emailPattern.test(value.trim()),
          })}
          aria-label="E-mail"
          aria-invalid={Boolean(errors.email)}
          placeholder="E-mail"
          required
          type="email"
        />
        <FileButton
          $disabled={!isActionsEnabled}
          aria-disabled={!isActionsEnabled}
          onClick={handleInactiveAction}
          onMouseEnter={showInactiveHint}
          onMouseMove={showInactiveHint}
          onMouseLeave={hideInactiveHint}
        >
          <input
            {...register("file")}
            type="file"
            aria-label="Прикрепите файл"
            disabled={!isActionsEnabled}
          />
          <span>Прикрепите файл</span>
        </FileButton>
        <textarea
          {...register("message", {
            required: true,
            validate: (value) => value.trim().length > 0,
          })}
          aria-label="Ваш текст"
          aria-invalid={Boolean(errors.message)}
          placeholder="Ваш текст"
          required
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
          {submitCount > 0 && errors.consent ? <span>{warning}</span> : ""}
          <input
            {...register("consent", { required: true })}
            id={consentId}
            aria-label="Принять политику конфиденциальности и обработки персональных данных"
            type="checkbox"
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
