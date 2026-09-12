"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { newsItems } from "@/src/entities/news";
import { assetPath } from "@/src/shared/config/assets";
import type { DirectusNewsItem } from "@/src/entities/news/api/getNews";
import {
  NewsCard,
  NewsSection,
  PageContent,
  SectionTitle,
  SliderButton,
  SliderControls,
  SliderShell,
  SliderTrack,
  SliderViewport,
} from "./news-page.styles";
import {Container} from "@/src/shared/ui/container/Container";


const autoplayDelay = 4200;

function getNewsImage(fileId: string) {
  return `http://localhost:8055/assets/${fileId}`;
}

type NewsPageProps = {
  newsItems: DirectusNewsItem[];
};

export function NewsPage({newsItems}: NewsPageProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const dragDistance = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToIndex(index: number) {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const normalizedIndex = (index + newsItems.length) % newsItems.length;
    const card = viewport.querySelector<HTMLElement>("[data-news-card]");
    const gap = 22;
    const cardWidth = card ? card.offsetWidth + gap : 315;

    viewport.scrollTo({ left: normalizedIndex * cardWidth, behavior: "smooth" });
    setActiveIndex(normalizedIndex);
  }

  useEffect(() => {
    if (isDragging) {
      return;
    }

    const timer = window.setInterval(() => {
      scrollToIndex(activeIndex + 1);
    }, autoplayDelay);

    return () => window.clearInterval(timer);
  }, [activeIndex, isDragging]);

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
    <NewsSection>
      <PageContent>
        <SectionTitle>Наши новости</SectionTitle>

        <SliderShell>
          <SliderViewport
            data-dragging={isDragging}
            ref={viewportRef}
            onPointerDown={(event) => {
              const viewport = viewportRef.current;

              if (!viewport) {
                return;
              }

              dragStartX.current = event.clientX;
              dragStartScroll.current = viewport.scrollLeft;
              dragDistance.current = 0;
              setIsDragging(true);
            }}
            onPointerMove={(event) => {
              const viewport = viewportRef.current;

              if (!viewport || !isDragging) {
                return;
              }

              const distance = event.clientX - dragStartX.current;
              dragDistance.current = Math.max(dragDistance.current, Math.abs(distance));
              viewport.scrollLeft = dragStartScroll.current - distance;
            }}
            onPointerUp={() => {
              const viewport = viewportRef.current;

              if (!viewport) {
                return;
              }

              setIsDragging(false);
              const card = viewport.querySelector<HTMLElement>("[data-news-card]");
              const gap = 22;
              const cardWidth = card ? card.offsetWidth + gap : 315;
              const nextIndex = Math.round(viewport.scrollLeft / cardWidth);
              scrollToIndex(nextIndex);
            }}
            onPointerCancel={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)}
          >
            <SliderTrack>
              {newsItems.map((item, index) => (

                    <NewsCard
                        as={Link}
                        data-featured={index === 0}
                        data-news-card
                        href={`/news/${item.slug}`}
                        key={item.slug}
                        onClick={(event) => {
                          if (dragDistance.current > 6) {
                            event.preventDefault();
                          }

                          dragDistance.current = 0;
                        }}
                    >
                      <Container direction={'column'} align={"flex-start"} gap={0}>


                        {item.cover && (

                            <Image
                                src={getNewsImage(item.cover)}
                                alt={item.cover_alt ?? item.title}
                                width={293}
                                height={203}
                                priority={index === 0}
                            />
                        )}
                        <h2>{item.title}</h2>
                        <time dateTime={item.published_at ?? ""} >
                          {formatNewsDate(item.published_at)}
                        </time>
                      </Container>

                    </NewsCard>



              ))}
            </SliderTrack>
          </SliderViewport>

          <SliderControls aria-label="Управление слайдером новостей">
            <SliderButton type="button" aria-label="Предыдущая новость" onClick={() => scrollToIndex(activeIndex - 1)}>
              ‹
            </SliderButton>
            <SliderButton type="button" aria-label="Следующая новость" onClick={() => scrollToIndex(activeIndex + 1)}>
              ›
            </SliderButton>
          </SliderControls>
        </SliderShell>
      </PageContent>
    </NewsSection>
  );
}
