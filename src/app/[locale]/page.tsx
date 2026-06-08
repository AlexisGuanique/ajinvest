import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { HomeHero } from "@/components/home/HomeHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Home",
  description:
    "Third-party logistics and fulfillment services for e-commerce businesses across the U.S. Warehouse management, order fulfillment, and logistics consulting.",
};

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <HomeHero locale={locale as Locale} />
      <ServicesOverview locale={locale as Locale} />
      <WhyUsSection locale={locale as Locale} />
      <TestimonialsSection />
      <CTASection locale={locale as Locale} />
    </>
  );
}
