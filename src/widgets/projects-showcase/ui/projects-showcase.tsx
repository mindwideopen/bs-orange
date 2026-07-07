"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SectionTitle } from "@/src/shared/ui/section-title";
import { projectItems } from "../model/projects";
import {
  ProjectIcon,
  ProjectItem,
  ProjectList,
  ProjectSlider,
  ProjectsSection,
} from "./projects-showcase.styles";

export function ProjectsShowcase() {
  const listRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const scrollProjects = useCallback((direction: -1 | 1) => {
    const list = listRef.current;

    if (!list) {
      return;
    }

    const distance = Math.min(list.clientWidth * 0.8, 560);
    const maxScrollLeft = list.scrollWidth - list.clientWidth;
    const nextScrollLeft = list.scrollLeft + direction * distance;

    if (direction > 0 && nextScrollLeft >= maxScrollLeft - 4) {
      list.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && nextScrollLeft <= 4) {
      list.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      return;
    }

    list.scrollBy({ left: direction * distance, behavior: "smooth" });
  }, []);

  const stopDragging = (pointerId?: number) => {
    const list = listRef.current;

    if (list && pointerId !== undefined && list.hasPointerCapture(pointerId)) {
      list.releasePointerCapture(pointerId);
    }

    dragState.current.isDragging = false;
    setIsDragging(false);
  };

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldReduceMotion || isDragging || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => scrollProjects(1), 3200);

    return () => window.clearInterval(intervalId);
  }, [isDragging, isPaused, scrollProjects]);

  return (
    <ProjectsSection id="projects">
      <SectionTitle>Реализованные проекты</SectionTitle>
      <ProjectSlider
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <button aria-label="Предыдущие проекты" type="button" onClick={() => scrollProjects(-1)}>
          ‹
        </button>
        <ProjectList
          ref={listRef}
          $isDragging={isDragging}
          onPointerDown={(event) => {
            const list = listRef.current;

            if (!list) {
              return;
            }

            dragState.current = {
              isDragging: true,
              startX: event.clientX,
              scrollLeft: list.scrollLeft,
            };
            list.setPointerCapture(event.pointerId);
            setIsDragging(true);
          }}
          onPointerMove={(event) => {
            const list = listRef.current;
            const state = dragState.current;

            if (!list || !state.isDragging) {
              return;
            }

            event.preventDefault();
            list.scrollLeft = state.scrollLeft - (event.clientX - state.startX);
          }}
          onPointerUp={(event) => stopDragging(event.pointerId)}
          onPointerCancel={(event) => stopDragging(event.pointerId)}
          onPointerLeave={() => stopDragging()}
        >
          {projectItems.map((item) => (
            <ProjectItem key={item.label}>
              <ProjectIcon file={item.icon} />
              <p>{item.label}</p>
            </ProjectItem>
          ))}
        </ProjectList>
        <button aria-label="Следующие проекты" type="button" onClick={() => scrollProjects(1)}>
          ›
        </button>
      </ProjectSlider>
    </ProjectsSection>
  );
}
