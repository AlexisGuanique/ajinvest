"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/locales";
import { getNav, siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { NavLink } from "@/components/layout/NavLink";

type HeaderProps = { locale: Locale };

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = getNav(locale);
  const contactHref = siteConfig.contactHref(locale);
  const homeHref = `/${locale}`;

  return (
    <header className="aj-header">
      <div className="aj-header__inner aj-container">
        <Link href={homeHref} className="aj-header__logo">
          <BrandLogo />
        </Link>

        <nav className="aj-header__nav" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={pathname === item.href}
              variant="default"
            />
          ))}
        </nav>

        <Link href={contactHref} className="aj-btn aj-btn--primary aj-header__cta">
          Contact Us
        </Link>

        <button
          type="button"
          className="aj-header__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="aj-header__mobile">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
                variant="default"
                onClick={() => setOpen(false)}
              />
            ))}
            <Link
              href={contactHref}
              className="aj-btn aj-btn--primary mt-3 w-full text-center"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
