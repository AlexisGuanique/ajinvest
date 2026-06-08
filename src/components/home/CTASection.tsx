import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { homeContent, siteConfig } from "@/data/site";
import { ButtonArrow } from "@/components/shared/ButtonArrow";

type CTASectionProps = { locale: Locale };

export function CTASection({ locale }: CTASectionProps) {
  const { cta } = homeContent;

  return (
    <section className="aj-cta">
      <div className="aj-container aj-cta__inner">
        <h2 className="aj-cta__title">{cta.heading}</h2>
        <Link
          href={siteConfig.contactHref(locale)}
          className="aj-btn aj-btn--white"
        >
          {cta.buttonLabel}
          <ButtonArrow />
        </Link>
      </div>
    </section>
  );
}
