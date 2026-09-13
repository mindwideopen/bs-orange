import Image from "next/image";
import Link from "next/link";
import type {DirectusNewsItem} from "@/src/entities/news/api/getNews";
import {assetPath} from "@/src/shared/config/assets";
import {
    ArticleBody,
    ArticleHeader,
    ArticleKicker,
    ArticleMeta,
    ArticleSection,
    BackLink,
    PageContent,
} from "./news-page.styles";

function getNewsImage(cover: string | null) {
    return `https://admin.baltikstyle.ru/assets/${cover}`;
}
// function renderParagraph(text: string, links?: NewsItem["links"]) {
//   if (!links?.length) {
//     return text;
//   }

// const matchedLink = links.find((link) => text.includes(link.label));

//   if (!matchedLink) {
//     return text;
//   }
//
//   const parts = text.split(matchedLink.label);
//
//   return (
//     <>
//       {parts[0]}
//       <a href={matchedLink.href} target="_blank" rel="noopener noreferrer">
//         {matchedLink.label}
//       </a>
//       {parts.slice(1).join(matchedLink.label)}
//     </>
//   );
// }

export function NewsArticlePage({item}: { item: DirectusNewsItem }) {

    function formatNewsDate(date: string | null) {
        if (!date) {
            return "";
        }

        return new Intl.DateTimeFormat("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date));
    }

    return (
        <ArticleSection>
            <PageContent>
                <ArticleHeader>
                    <div>
                        <ArticleKicker>Наши новости</ArticleKicker>
                        <h1>{item.title}</h1>
                        <ArticleMeta dateTime="2026-04-16">{formatNewsDate(item.published_at)}</ArticleMeta>
                    </div>
                    <Image src={getNewsImage(item.cover)} alt={item.title} style={{borderRadius: "15px"}} width={418} height={290} priority/>
                </ArticleHeader>

                <ArticleBody
                    dangerouslySetInnerHTML={{
                        __html: item.content ?? "",
                    }}
                />

                <BackLink as={Link} href="/news">
                    Вернуться к новостям
                </BackLink>
            </PageContent>
        </ArticleSection>
    );
}
