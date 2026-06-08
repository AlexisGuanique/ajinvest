import type { Metadata } from "next";
import { WhyChooseSection } from "@/components/services/ServicesSections";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { PageHero } from "@/components/shared/PageHero";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Services",
  description:
    "3PL service tiers for warehousing, fulfillment, and consulting. All services invoiced through Stripe with fixed pricing per tier.",
};

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <PageHero locale={locale as Locale} content={pageHeroes.services} />
      <ServicesCatalog locale={locale as Locale} />
      <WhyChooseSection />
      <TestimonialsSection />
    </>
  );
}
