import { Title } from "./section-title.styles";

type SectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return <Title>{children}</Title>;
}
