import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { getNav, siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { FeaturesBar } from "@/components/home/FeaturesBar";
import { NewsletterSection } from "@/components/home/NewsletterSection";

type FooterProps = { locale: Locale };

export function Footer({ locale }: FooterProps) {
  const base = `/${locale}`;
  const nav = getNav(locale);

  return (
    <footer className="aj-footer">
      <FeaturesBar />
      <NewsletterSection />
      <div className="aj-footer__main">
        <div className="aj-container aj-footer__grid">
          <div className="aj-footer__brand">
            <Link href={base}>
              <BrandLogo />
            </Link>
            <p className="aj-footer__desc">{siteConfig.disclaimer}</p>
          </div>

          <div>
            <h3 className="aj-footer__heading">Useful Links</h3>
            <ul className="aj-footer__links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="aj-footer__heading">Legal</h3>
            <ul className="aj-footer__links">
              <li>
                <Link href={`${base}/privacy-policy`}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={`${base}/term-of-services`}>Terms of Service</Link>
              </li>
              <li>
                <Link href={`${base}/refund-policy`}>Refund Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="aj-footer__heading">Contact Info</h3>
            <address className="aj-footer__contact not-italic">
              <p>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}
                <br />
                {siteConfig.address.country}
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </p>
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  {siteConfig.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="aj-footer__bottom aj-container">
          <p>{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
