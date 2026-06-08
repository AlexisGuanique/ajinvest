import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { homeContent } from "@/data/site";
import { images } from "@/styles/theme";
import { ButtonArrow } from "@/components/shared/ButtonArrow";

type HomeHeroProps = { locale: Locale };

export function HomeHero({ locale }: HomeHeroProps) {
  const { hero } = homeContent;
  const ctaHref = hero.ctaHref?.(locale) ?? `/${locale}/contact`;

  return (
    <section className="aj-hero">
      <div
        className="aj-hero__bg"
        style={{ backgroundImage: `url(${images.heroBg})` }}
        aria-hidden
      />
      <div className="aj-hero__overlay" aria-hidden />
      <div className="aj-hero__content">
        {hero.eyebrow && (
          <p className="aj-hero__eyebrow">{hero.eyebrow}</p>
        )}
        <h1 className="aj-hero__title">{hero.title}</h1>
        {hero.subtitle && (
          <p className="aj-hero__subtitle">{hero.subtitle}</p>
        )}
        <Link href={ctaHref} className="aj-btn aj-btn--primary">
          {hero.ctaLabel ?? "Contact Us Today"}
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
}
