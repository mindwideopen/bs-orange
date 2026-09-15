"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { SectionTitle } from "@/src/shared/ui/section-title";
import { PrivacyPolicyModal } from "@/src/widgets/site-footer";

import {
  ContactSection,
  ConsentLabel,
  Field,
  FieldError,
  FileButton,
  Form,
  SubmissionMessage,
} from "./contact-request.styles";

import {
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
} from "./contact-request.validation";



type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  message: string;
  file: FileList;
  consent: boolean;
};

type SubmissionStatus = "success" | "error" | null;

export function ContactRequest() {
  const [submissionStatus, setSubmissionStatus] =
      useState<SubmissionStatus>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionStatus(null);

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

      reset();
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
      setSubmissionStatus("error");
    }
  };

  return (
      <ContactSection id="contacts">
        <SectionTitle>
          Свяжитесь с нами удобным способом
        </SectionTitle>

        <p>Заполните форму и мы перезвоним</p>

        <Form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            aria-busy={isSubmitting}
        >
          {/* Имя */}
          <Field>
            <input
                {...register("name", {
                  validate: validateName,
                })}
                type="text"
                placeholder="Имя"
                aria-label="Имя"
                aria-invalid={Boolean(errors.name)}
            />

            {errors.name && (
                <FieldError role="alert">
                  {errors.name.message}
                </FieldError>
            )}
          </Field>

          {/* Телефон */}
          <Field>
            <input
                {...register("phone", {
                  validate: validatePhone,
                })}
                type="tel"
                placeholder="Номер телефона"
                aria-label="Номер телефона"
                aria-invalid={Boolean(errors.phone)}
            />

            {errors.phone && (
                <FieldError role="alert">
                  {errors.phone.message}
                </FieldError>
            )}
          </Field>

          {/* Email */}
          <Field>
            <input
                {...register("email", {
                  validate: validateEmail,
                })}
                type="email"
                placeholder="E-mail"
                aria-label="E-mail"
                aria-invalid={Boolean(errors.email)}
            />

            {errors.email && (
                <FieldError role="alert">
                  {errors.email.message}
                </FieldError>
            )}
          </Field>

          {/* Файл */}
          <FileButton>
            <input
                {...register("file")}
                type="file"
                aria-label="Прикрепите файл"
            />

            <span>Прикрепите файл</span>
          </FileButton>

          {/* Сообщение */}
          <Field $wide>
          <textarea
              {...register("message", {
                validate: validateMessage,
              })}
              placeholder="Ваш текст"
              aria-label="Ваш текст"
              aria-invalid={Boolean(errors.message)}
          />

            {errors.message && (
                <FieldError role="alert">
                  {errors.message.message}
                </FieldError>
            )}
          </Field>

          {/* Отправка */}
          <button
              type="submit"
              disabled={isSubmitting}
          >
            {isSubmitting ? "Отправляем..." : "Отправить"}
          </button>

          {/* Согласие */}
          <ConsentLabel>
            <input
                {...register("consent", {
                  validate: (value) =>
                      value === true ||
                      "Примите политику конфиденциальности",
                })}
                type="checkbox"
                aria-label="Принять политику конфиденциальности и обработки персональных данных"
                aria-invalid={Boolean(errors.consent)}
            />

            <span>Я принимаю </span>

            <PrivacyPolicyModal className="privacy-policy-trigger">
              Политику конфиденциальности и обработки персональных данных
            </PrivacyPolicyModal>
          </ConsentLabel>

          {errors.consent && (
              <FieldError role="alert">
                {errors.consent.message}
              </FieldError>
          )}

          {/* Результат отправки */}
          {submissionStatus && (
              <SubmissionMessage
                  $error={submissionStatus === "error"}
                  role="status"
                  aria-live="polite"
              >
                {submissionStatus === "success"
                    ? "Заявка успешно отправлена"
                    : "Не удалось отправить заявку. Попробуйте ещё раз."}
              </SubmissionMessage>
          )}
        </Form>
      </ContactSection>
  );
}