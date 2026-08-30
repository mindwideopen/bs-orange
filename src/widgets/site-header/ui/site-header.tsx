"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/src/shared/config/assets";
import { navigationItems } from "../model/navigation";
import { BackToTopButton, Brand, BurgerButton, Header, HeaderInner, MobileMenu, Nav, Phone } from "./site-header.styles";
import {getCompanyName} from "@/src/features/api/headerTestApi/headerTestApi";

const mobileBreakpoint = 900;
const scrollThreshold = 300;
const scrollDirectionTolerance = 6;
const companyName = getCompanyName();

function normalizePath(path: string) {
const withoutBasePath = path;
  const withoutTrailingSlash = withoutBasePath.replace(/\/$/, "");

  return withoutTrailingSlash || "/";
}

function isNavItemActive(currentPath: string, itemHref: string) {
  const normalizedHref = normalizePath(itemHref);

  return currentPath === normalizedHref || currentPath.startsWith(`${normalizedHref}/`);
}

function pageHref(href: string) {
  const normalizedHref = href.endsWith("/") ? href : `${href}/`;

  return assetPath(normalizedHref);
}

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerHidden, setIsBurgerHidden] = useState(false);
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const lastScrollY = useRef(0);
  const homeHref = assetPath("/");

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);

    function syncScrollState() {
      const currentScrollY = window.scrollY;
      const isMobile = mediaQuery.matches;
      const isPastThreshold = currentScrollY > scrollThreshold;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (!isMobile) {
        setIsBurgerHidden(false);
        setIsBackToTopVisible(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      setIsBackToTopVisible(isPastThreshold);

      if (!isPastThreshold) {
        setIsBurgerHidden(false);
      } else if (scrollDelta > scrollDirectionTolerance) {
        setIsBurgerHidden(true);
        setIsMenuOpen(false);
      } else if (scrollDelta < -scrollDirectionTolerance) {
        setIsBurgerHidden(false);
      }

      lastScrollY.current = currentScrollY;
    }

    lastScrollY.current = window.scrollY;
    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });
    mediaQuery.addEventListener("change", syncScrollState);

    return () => {
      window.removeEventListener("scroll", syncScrollState);
      mediaQuery.removeEventListener("change", syncScrollState);
    };
  }, []);

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    window.location.assign(pageHref(href));
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Header>
      <HeaderInner>
        <Brand href={homeHref} aria-label="Балтик Стайл">
          <Image src={assetPath("/figma/logo.svg")} alt="" width={62} height={75} priority />
          <span>
            <strong>{'qweqweqw'}</strong>
            <small>сетевые решения</small>
          </span>
        </Brand>

        <Phone href="tel:+74012991199">
          <Image src={assetPath("/figma/phone.svg")} alt="" width={18} height={18} />
          +7(4012) 99-11-99
        </Phone>

        <BurgerButton
          type="button"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          $isHidden={isBurgerHidden}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </BurgerButton>
      </HeaderInner>

      <Nav aria-label="Основная навигация">
        {navigationItems.map((item) => (
          <a
            data-active={isNavItemActive(currentPath, item.href)}
            href={pageHref(item.href)}
            key={item.href}
            onClick={(event) => handleNavClick(event, item.href)}
          >
            {item.label}
          </a>
        ))}
      </Nav>

      <MobileMenu id="mobile-navigation" aria-label="Мобильная навигация" $isOpen={isMenuOpen}>
        <a data-active={currentPath === "/"} href={homeHref} onClick={() => setIsMenuOpen(false)}>
          Главная
        </a>
        {navigationItems.map((item) => (
          <a
            data-active={isNavItemActive(currentPath, item.href)}
            href={pageHref(item.href)}
            key={item.href}
            onClick={(event) => {
              setIsMenuOpen(false);
              handleNavClick(event, item.href);
            }}
          >
            {item.label}
          </a>
        ))}
      </MobileMenu>

      <BackToTopButton type="button" $isVisible={isBackToTopVisible} onClick={scrollToTop}>
        Вверх
      </BackToTopButton>
    </Header>
  );
}
