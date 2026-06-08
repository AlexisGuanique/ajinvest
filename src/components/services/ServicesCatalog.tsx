import Link from "next/link";
import type { Locale } from "@/lib/locales";
import type { ServiceTier } from "@/data/site";
import { servicesContent, siteConfig } from "@/data/site";
import { ButtonArrow } from "@/components/shared/ButtonArrow";

type ServicesCatalogProps = {
  locale: Locale;
  /** Show only featured tiers (for homepage preview) */
  featuredOnly?: boolean;
  showHeader?: boolean;
};

function TierCard({
  tier,
  total,
  locale,
}: {
  tier: ServiceTier;
  total: number;
  locale: Locale;
}) {
  const contactHref = siteConfig.contactHref(locale);
  const paddedNum = String(tier.number).padStart(2, "0");
  const paddedTotal = String(total).padStart(2, "0");

  return (
    <article
      className={`aj-tier-card${tier.featured ? " aj-tier-card--featured" : ""}`}
      id={tier.id}
    >
      <div className="aj-tier-card__top">
        <span className="aj-tier-card__counter">
          {paddedNum} / {paddedTotal}
        </span>
        {tier.badge && (
          <span className="aj-tier-card__badge">{tier.badge}</span>
        )}
      </div>

      <div className="aj-tier-card__header">
        <span className="aj-tier-card__cycle">{tier.billingCycle}</span>
        <h3 className="aj-tier-card__title">{tier.title}</h3>
        <p className="aj-tier-card__stripe">{tier.stripeLabel}</p>
      </div>

      <p className="aj-tier-card__desc">{tier.description}</p>

      <div className="aj-tier-card__pricing">
        <p className="aj-tier-card__price">{tier.price}</p>
        <p className="aj-tier-card__price-note">{tier.priceNote}</p>
      </div>

      <div className="aj-tier-card__includes">
        <p className="aj-tier-card__includes-label">Includes</p>
        <ul className="aj-tier-card__includes-list">
          {tier.includes.map((item) => (
            <li key={item}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Link href={contactHref} className="aj-btn aj-btn--primary aj-tier-card__cta">
        {tier.ctaLabel}
        <ButtonArrow />
      </Link>
    </article>
  );
}

export function ServicesCatalog({
  locale,
  featuredOnly = false,
  showHeader = true,
}: ServicesCatalogProps) {
  const { catalog } = servicesContent;
  const tiers = featuredOnly
    ? catalog.tiers.filter((t) => t.featured)
    : catalog.tiers;

  return (
    <section className="aj-section aj-catalog">
      <div className="aj-container">
        {showHeader && (
          <div className="aj-catalog__header">
            <p className="aj-eyebrow">{catalog.eyebrow}</p>
            <h2 className="aj-section-title">{catalog.title}</h2>
            <p className="aj-catalog__intro">{catalog.intro}</p>
          </div>
        )}

        <div className="aj-catalog__grid">
          {tiers.map((tier) => (
            <TierCard
              key={tier.id}
              tier={tier}
              total={catalog.totalTiers}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
