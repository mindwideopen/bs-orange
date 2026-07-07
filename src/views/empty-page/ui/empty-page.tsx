"use client";

import { EmptyMessage, EmptySection } from "./empty-page.styles";

export function EmptyPage() {
  return (
    <EmptySection>
      <EmptyMessage>Здесь пока ничего нет</EmptyMessage>
    </EmptySection>
  );
}
