"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { newsItems } from "@/src/entities/news";
import { assetPath } from "@/src/shared/config/assets";
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

const autoplayDelay = 4200;

function getNewsImage(file: string) {
  return assetPath(`/figma/${file}`);
}

export function NewsPage() {
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
                  href={`/news/selected-news-item?news=${item.slug}`}
                  key={item.slug}
                  onClick={(event) => {
                    if (dragDistance.current > 6) {
                      event.preventDefault();
                    }

                    dragDistance.current = 0;
                  }}
                >
                  <Image src={getNewsImage(item.image)} alt={item.title} width={293} height={203} priority={index === 0} />
                  <h2>{item.title}</h2>
                  <time dateTime="2026-04-16">{item.date}</time>
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
