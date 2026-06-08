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
      <article className="aj-section">
        <div className="aj-container" style={{ maxWidth: "48rem" }}>
          <h2 className="sr-only">{title}</h2>
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="aj-section-title" style={{ fontSize: "1.125rem" }}>
                  {section.title}
                </h3>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 30)} className="aj-body-text">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
