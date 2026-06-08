import type { LegalSection } from "@/data/legal";
import type { Locale } from "@/lib/locales";
import type { HeroContent } from "@/data/site";
import { PageHero } from "@/components/shared/PageHero";

type LegalPageProps = {
  locale: Locale;
  hero: HeroContent;
  title: string;
  sections: LegalSection[];
};

export function LegalPage({ locale, hero, title, sections }: LegalPageProps) {
  return (
    <>
      <PageHero locale={locale} content={hero} />
      <article className="aj-section aj-legal-page">
        <div className="aj-container aj-legal-page__inner">
          <h2 className="sr-only">{title}</h2>
          <div className="aj-legal-page__sections">
            {sections.map((section) => (
              <section key={section.title} className="aj-legal-page__section">
                <h3 className="aj-legal-page__heading">{section.title}</h3>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="aj-legal-page__text">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="aj-legal-page__list">
                    {section.bullets.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
