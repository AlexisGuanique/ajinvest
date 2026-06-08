import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <span className={`aj-brand-logo ${className}`}>
      {siteConfig.brand}
    </span>
  );
}
