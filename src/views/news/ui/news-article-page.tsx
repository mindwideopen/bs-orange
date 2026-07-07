import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/src/entities/news";
import { assetPath } from "@/src/shared/config/assets";
import {
  ArticleBody,
  ArticleHeader,
  ArticleKicker,
  ArticleMeta,
  ArticleSection,
  BackLink,
  PageContent,
} from "./news-page.styles";

function getNewsImage(file: string) {
  return assetPath(`/figma/${file}`);
}

function renderParagraph(text: string, links?: NewsItem["links"]) {
  if (!links?.length) {
    return text;
  }

  const matchedLink = links.find((link) => text.includes(link.label));

  if (!matchedLink) {
    return text;
  }

  const parts = text.split(matchedLink.label);

  return (
    <>
      {parts[0]}
      <a href={matchedLink.href} target="_blank" rel="noopener noreferrer">
        {matchedLink.label}
      </a>
      {parts.slice(1).join(matchedLink.label)}
    </>
  );
}

export function NewsArticlePage({ item }: { item: NewsItem }) {
  return (
    <ArticleSection>
      <PageContent>
        <ArticleHeader>
          <div>
            <ArticleKicker>Наши новости</ArticleKicker>
            <h1>{item.title}</h1>
            <ArticleMeta dateTime="2026-04-16">{item.date}</ArticleMeta>
          </div>
          <Image src={getNewsImage(item.image)} alt={item.title} width={418} height={290} priority />
        </ArticleHeader>

        <ArticleBody>
          {item.body.map((paragraph) => (
            <p key={paragraph}>{renderParagraph(paragraph, item.links)}</p>
          ))}
        </ArticleBody>

        <BackLink as={Link} href="/news">
          Вернуться к новостям
        </BackLink>
      </PageContent>
    </ArticleSection>
  );
}
