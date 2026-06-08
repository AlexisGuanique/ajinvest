import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/locales";
import { homeContent } from "@/data/site";

type WhyUsSectionProps = { locale: Locale };

export function WhyUsSection({ locale }: WhyUsSectionProps) {
  const { whyUs } = homeContent;

  return (
    <section className="aj-section">
      <div className="aj-container">
        <div className="aj-split">
          <div className="aj-split__image">
            <Image
              src={whyUs.image}
              alt={whyUs.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="aj-split__content">
            <p className="aj-eyebrow">{whyUs.eyebrow}</p>
            <h2 className="aj-section-title">{whyUs.title}</h2>
            <p className="aj-body-text">{whyUs.description}</p>
            <Link
              href={`/${locale}/contact`}
              className="aj-btn aj-btn--primary"
            >
              {whyUs.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
