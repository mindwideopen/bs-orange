"use client";

import { useEffect, useRef, useState } from "react";
import { MapFrame, MapPlaceholder } from "./contacts-page.styles";

type LazyMapFrameProps = {
  src: string;
  title: string;
};

export function LazyMapFrame({ src, title }: LazyMapFrameProps) {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    if (shouldLoadMap) {
      return;
    }

    const placeholder = placeholderRef.current;

    if (!placeholder || !("IntersectionObserver" in window)) {
      setShouldLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px 0px" },
    );

    observer.observe(placeholder);

    return () => observer.disconnect();
  }, [shouldLoadMap]);

  if (shouldLoadMap) {
    return (
      <MapFrame
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src={src}
        title={title}
      />
    );
  }

  return <MapPlaceholder ref={placeholderRef}>Карта загрузится при приближении к блоку</MapPlaceholder>;
}
