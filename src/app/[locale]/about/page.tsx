import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutSections";
import { PageHero } from "@/components/shared/PageHero";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "About",
  description:
    "A & J Invest Group LLC is a Florida-registered third-party logistics (3PL) service provider serving e-commerce businesses with fulfillment and warehouse consulting.",
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <PageHero locale={locale as Locale} content={pageHeroes.about} />
      <AboutContent />
    </>
  );
}
