import { redirect } from "next/navigation";
import type { Locale } from "@/lib/locales";

type PageProps = { params: Promise<{ locale: string }> };

export default async function ScheduleCallPage({ params }: PageProps) {
  const { locale } = await params;
  redirect(`/${locale as Locale}/contact`);
}
