"use client";

import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  variant?: "hero" | "light" | "default";
  onClick?: () => void;
};

export function NavLink({
  href,
  label,
  isActive,
  variant = "default",
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`aj-nav-link aj-nav-link--${variant} ${isActive ? "aj-nav-link--active" : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
