import type { Locale } from "@/lib/locales";
import { pageHeroes } from "@/data/site";

type PageHeroProps = {
  locale: Locale;
  content: {
    title: string;
    subtitle?: string;
    eyebrow?: string;
  };
};

export function PageHero({ content }: PageHeroProps) {
  return (
    <section className="aj-page-hero">
      <div className="aj-container aj-page-hero__inner">
        {content.eyebrow && (
          <p className="aj-eyebrow">{content.eyebrow}</p>
        )}
        <h1 className="aj-page-hero__title">{content.title}</h1>
        {content.subtitle && (
          <p className="aj-page-hero__subtitle">{content.subtitle}</p>
        )}
      </div>
    </section>
  );
}

export { pageHeroes };
