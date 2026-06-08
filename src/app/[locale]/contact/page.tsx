import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { pageHeroes } from "@/data/site";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact A & J Invest Group LLC for 3PL fulfillment inquiries and logistics consulting. Orlando, FL.",
};

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <>
      <PageHero locale={locale as Locale} content={pageHeroes.contact} />
      <ContactForm locale={locale as Locale} />
    </>
  );
}
