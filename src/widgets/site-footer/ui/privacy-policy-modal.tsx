"use client";

import { type Ref, useEffect, useId, useState } from "react";
import { privacyPolicyText, privacyPolicyTitle } from "../model/privacy-policy-content";
import { CloseButton, ModalBody, ModalContent, ModalOverlay, PolicyButton } from "./site-footer.styles";

type PrivacyPolicyModalProps = {
  children?: string;
  className?: string;
  triggerRef?: Ref<HTMLButtonElement>;
};

export function PrivacyPolicyModal({ children = "Политика конфиденциальности", className, triggerRef }: PrivacyPolicyModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <PolicyButton ref={triggerRef} className={className} type="button" onClick={() => setIsOpen(true)}>
        {children}
      </PolicyButton>
      {isOpen ? (
        <ModalOverlay onClick={() => setIsOpen(false)}>
          <ModalContent
            aria-labelledby={titleId}
            aria-modal="true"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <CloseButton type="button" aria-label="Закрыть" onClick={() => setIsOpen(false)}>
              ×
            </CloseButton>
            <h2 id={titleId}>{privacyPolicyTitle}</h2>
            <ModalBody>{privacyPolicyText}</ModalBody>
            <CloseButton type="button" $variant="footer" onClick={() => setIsOpen(false)}>
              Закрыть
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      ) : null}
    </>
  );
}
