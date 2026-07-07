"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetPath } from "@/src/shared/config/assets";
import { navigationItems } from "../model/navigation";
import { Brand, Header, HeaderInner, Nav, Phone } from "./site-header.styles";

function normalizePath(path: string) {
  const withoutBasePath = path.replace(/^\/bs-orange(?=\/|$)/, "");
  const withoutTrailingSlash = withoutBasePath.replace(/\/$/, "");

  return withoutTrailingSlash || "/";
}

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = normalizePath(pathname);

  return (
    <Header>
      <HeaderInner>
        <Brand href="/" aria-label="Балтик Стайл">
          <Image src={assetPath("/figma/logo.svg")} alt="" width={62} height={75} priority />
          <span>
            <strong>Балтик Стайл</strong>
            <small>сетевые решения</small>
          </span>
        </Brand>

        <Phone href="tel:+74012991199">
          <Image src={assetPath("/figma/phone.svg")} alt="" width={18} height={18} />
          +7(4012) 99-11-99
        </Phone>
      </HeaderInner>

      <Nav aria-label="Основная навигация">
        {navigationItems.map((item) => (
          <Link data-active={currentPath === normalizePath(item.href)} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </Nav>
    </Header>
  );
}
