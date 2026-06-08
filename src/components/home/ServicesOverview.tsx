import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { homeContent, serviceTiers } from "@/data/site";
import { ButtonArrow } from "@/components/shared/ButtonArrow";

type ServicesOverviewProps = { locale: Locale };

export function ServicesOverview({ locale }: ServicesOverviewProps) {
  const { servicesOverview } = homeContent;
  const previewTiers = serviceTiers.filter(
    (t) => t.featured || t.number === 1 || t.number === 7
  );

  return (
    <section className="aj-section aj-section--light">
      <div className="aj-container">
        <div className="aj-section-header">
          <p className="aj-eyebrow">{servicesOverview.eyebrow}</p>
          <h2 className="aj-section-title">{servicesOverview.title}</h2>
          <p className="aj-catalog__intro aj-catalog__intro--center">
            {servicesOverview.intro}
          </p>
        </div>

        <div className="aj-catalog__grid aj-catalog__grid--preview">
          {previewTiers.map((tier) => {
            const paddedNum = String(tier.number).padStart(2, "0");
            return (
              <article
                key={tier.id}
                className={`aj-tier-card aj-tier-card--compact${tier.featured ? " aj-tier-card--featured" : ""}`}
              >
                <div className="aj-tier-card__top">
                  <span className="aj-tier-card__counter">{paddedNum} / 07</span>
                  {tier.badge && (
                    <span className="aj-tier-card__badge">{tier.badge}</span>
                  )}
                </div>
                <span className="aj-tier-card__cycle">{tier.billingCycle}</span>
                <h3 className="aj-tier-card__title">{tier.title}</h3>
                <p className="aj-tier-card__price">{tier.price}</p>
                <p className="aj-tier-card__desc">{tier.description}</p>
              </article>
            );
          })}
        </div>

        <div className="aj-section-cta">
          <Link href={`/${locale}/services`} className="aj-btn aj-btn--primary">
            View Full Service Catalog
            <ButtonArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
