import type { Locale } from "@/lib/locales";

export type NavItem = { label: string; href: string };

export type FAQItem = { question: string; answer: string };

export type Office = {
  city: string;
  country: string;
  email: string;
  phone: string;
  address: string;
  mapEmbedUrl: string;
};

export type Feature = { title: string; description: string; icon: string };

export type ServiceTier = {
  id: string;
  number: number;
  title: string;
  billingCycle: string;
  stripeLabel: string;
  description: string;
  price: string;
  priceNote: string;
  includes: string[];
  ctaLabel: string;
  badge?: string;
  featured?: boolean;
};

export type ServiceCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

export type HeroContent = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: (locale: Locale) => string;
};

export function getNav(locale: Locale): NavItem[] {
  const base = `/${locale}`;
  return [
    { label: "Home", href: base },
    { label: "About", href: `${base}/about` },
    { label: "Blog", href: `${base}/blog` },
    { label: "Contact", href: `${base}/contact` },
    { label: "Services", href: `${base}/services` },
  ];
}

export const siteConfig = {
  brand: "A & J Invest Group LLC",
  email: "ajinvestgroup2023@gmail.com",
  supportEmail: "ajinvestgroup2023@gmail.com",
  phone: "+1 (407) 967-6457",
  address: {
    street: "7579 Narcoossee Road, APT 4216",
    city: "Orlando, FL 32822",
    country: "United States",
  },
  foundedYear: "2023",
  disclaimer:
    "A & J Invest Group LLC provides third-party logistics (3PL) and warehouse consulting services to e-commerce businesses. We do not sell consumer merchandise through this website.",
  copyright: "© 2026 A & J Invest Group LLC. All Rights Reserved.",
  credit: { label: "", href: "" },
  contactHref: (locale: Locale) => `/${locale}/contact`,
};

export const pageHeroes = {
  home: {
    eyebrow: "Professional Logistics Solutions",
    title:
      "Third-Party Logistics & Fulfillment Services | Serving E-Commerce Businesses Across the U.S.",
    subtitle:
      "Warehouse Management. Order Fulfillment. Logistics Consulting.",
    ctaLabel: "Get a Free Consultation",
    ctaHref: siteConfig.contactHref,
  },
  about: {
    title: "About Us",
    subtitle:
      "Florida-registered third-party logistics provider serving e-commerce businesses nationwide.",
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "Reach our team for fulfillment inquiries, consulting engagements, or service agreements.",
  },
  blog: {
    title: "Blog",
    subtitle:
      "Insights on 3PL operations, warehouse management, and e-commerce fulfillment.",
  },
  services: {
    title: "Services",
    subtitle:
      "Transparent 3PL service tiers invoiced through Stripe. Select the plan that fits your volume and operational needs.",
  },
  privacy: {
    title: "Privacy Policy",
  },
  terms: {
    title: "Terms of Service",
  },
  refund: {
    title: "Refund Policy",
  },
} satisfies Record<string, HeroContent>;

export const homeContent = {
  hero: pageHeroes.home,
  servicesOverview: {
    eyebrow: "Our Services",
    title: "What We Offer",
    intro:
      "All services are invoiced through Stripe. Pricing is fixed per the service tier selected. Custom invoices are available for clients with specific volume or contract requirements.",
  },
  whyUs: {
    eyebrow: "Why Choose Us",
    title: "Trusted 3PL Partner for E-Commerce Sellers",
    description:
      "We operate fulfillment services at licensed third-party warehouse facilities, providing B2B logistics support to marketplace sellers across the United States.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    imageAlt: "Modern warehouse with shipping operations",
    ctaLabel: "Contact Us Today",
  },
  features: [
    {
      title: "Dedicated B2B Support",
      description:
        "Direct account management for contracted clients with weekly reporting and transparent invoicing.",
      icon: "support",
    },
    {
      title: "Licensed Facilities",
      description:
        "Fulfillment operations conducted at licensed third-party warehouse facilities nationwide.",
      icon: "warehouse",
    },
    {
      title: "Marketplace Expertise",
      description:
        "Specialized experience with Walmart Marketplace, eBay, and other e-commerce platforms.",
      icon: "marketplace",
    },
    {
      title: "Secure Invoicing",
      description:
        "Professional B2B invoicing with clear service descriptions and documented payment terms.",
      icon: "payment",
    },
  ] satisfies Feature[],
  testimonials: {
    title: "What Our Clients Say",
    items: [
      {
        quote:
          "A & J Invest Group streamlined our Walmart fulfillment operations. Their team handles receiving, pick-and-pack, and outbound shipping with full tracking documentation.",
        name: "Marketplace Seller",
        role: "Walmart Marketplace Client",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        imageAlt: "Client testimonial",
      },
      {
        quote:
          "Their inventory coordination service helped us optimize SKU placement and reduce stockouts. Professional, responsive, and reliable B2B partner.",
        name: "E-Commerce Operator",
        role: "eBay Seller",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        imageAlt: "Client testimonial",
      },
      {
        quote:
          "The logistics consulting engagement gave us a clear roadmap for carrier selection and cost-per-unit optimization. Highly recommended for growing sellers.",
        name: "Business Owner",
        role: "Consulting Client",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        imageAlt: "Client testimonial",
      },
    ] satisfies Testimonial[],
  },
  newsletter: {
    title: "Subscribe to Our Newsletter",
    description:
      "A & J Invest Group LLC offers comprehensive third-party logistics solutions to help e-commerce businesses optimize fulfillment operations and scale with confidence.",
    placeholder: "Enter email address",
    submitLabel: "Submit",
  },
  cta: {
    heading: "Ready to optimize your fulfillment operations?",
    buttonLabel: "Contact Us Today",
  },
};

export const serviceTiers: ServiceTier[] = [
  {
    id: "weekly-warehousing",
    number: 1,
    title: "Weekly Warehousing & Storage",
    billingCycle: "Weekly",
    stripeLabel: 'Stripe: "Weekly warehousing service"',
    description:
      "Secure, weekly warehousing and inventory storage coordination at licensed third-party facilities. Ideal for marketplace sellers needing flexible, no-contract storage management.",
    price: "$500/ week",
    priceNote: "Entry tier starts at $250/week based on volume",
    includes: [
      "Inbound inventory receiving and logging",
      "Secure storage at licensed 3PL facility",
      "Weekly inventory count reporting",
      "Coordination with your shipping carriers",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "order-filling",
    number: 2,
    title: "Order Filling & Fulfillment",
    billingCycle: "Per Batch",
    stripeLabel: 'Stripe: "Filling Service Fee"',
    description:
      "End-to-end order filling services covering pick-and-pack operations, labeling, and outbound shipment preparation. Billed per fulfillment run or batch.",
    price: "$200/ batch",
    priceNote: "Extended batch rate: $339.99 for larger volumes",
    includes: [
      "SKU picking from inventory",
      "Packing and labeling to carrier specs",
      "Outbound shipment handoff and tracking",
      "Digital confirmation per batch processed",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "premium-weekly",
    number: 3,
    title: "Premium Weekly 3PL Package",
    billingCycle: "Weekly",
    stripeLabel: 'Stripe: "Premium One week Package" / "Premium 3pl package"',
    description:
      "Our most in-demand weekly service tier. Combines warehousing, fulfillment, and priority handling into one fixed weekly fee. Suited for active marketplace sellers with consistent order volume.",
    price: "$318/ week",
    priceNote: "Premium monthly rate: $1,130/month",
    includes: [
      "Priority inbound receiving within 24 hrs",
      "Pick, pack, and label — unlimited orders",
      "Dedicated account coordination",
      "Walmart & eBay marketplace shipment compliance",
      "Weekly performance and inventory report",
    ],
    ctaLabel: "Get Started",
    badge: "Most Popular",
    featured: true,
  },
  {
    id: "full-monthly",
    number: 4,
    title: "Full Monthly 3PL Package",
    billingCycle: "Monthly",
    stripeLabel: 'Stripe: "3P Full monthly package" / "Warehouse monthly service"',
    description:
      "Comprehensive monthly 3PL management covering all warehousing, fulfillment, and inventory tracking needs. Fixed monthly fee with no per-order charges.",
    price: "$2,500/ month",
    priceNote: "Full-service tier: $2,845.98/month with extended coverage",
    includes: [
      "Unlimited inbound receiving and storage",
      "Full pick-and-pack operations all month",
      "Carrier coordination and shipment tracking",
      "Monthly inventory reconciliation report",
      "Client portal access for order visibility",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "weekly-operations",
    number: 5,
    title: "Weekly Business Operations Support",
    billingCycle: "Weekly",
    stripeLabel: 'Stripe: "Weekly Business operations support"',
    description:
      "Dedicated weekly operational management for e-commerce businesses. We handle order coordination, supplier communication, and logistics oversight on your behalf.",
    price: "$1,500/ week",
    priceNote: "Billed weekly via Stripe invoice",
    includes: [
      "Order flow management and coordination",
      "Supplier and carrier communications",
      "Exception handling and delay resolution",
      "Weekly operations summary report",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "monthly-consulting",
    number: 6,
    title: "Monthly Business Consulting",
    billingCycle: "Monthly",
    stripeLabel: 'Stripe: "Monthly Business Consulting Service Fee"',
    description:
      "Full-service monthly consulting engagement for e-commerce businesses seeking to scale their supply chain, optimize 3PL costs, and improve warehouse operational efficiency.",
    price: "$4,500/ month",
    priceNote: "Billed monthly via Stripe invoice on agreed date",
    includes: [
      "End-to-end supply chain audit and recommendations",
      "Carrier selection and cost optimization analysis",
      "Warehouse partner evaluation and advisory",
      "Monthly strategy sessions with written deliverables",
      "KPI tracking and operational reporting",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: "advisory-consulting",
    number: 7,
    title: "3PL Advisory & Consulting",
    billingCycle: "Flexible",
    stripeLabel: 'Stripe: "3PL Hourly Fee" / "Digital 3Pl Advisory"',
    description:
      "Flexible hourly consulting for businesses evaluating 3PL partners, setting up fulfillment operations, or requiring expert guidance on logistics and warehouse strategy.",
    price: "$25/ hour",
    priceNote: "Digital advisory packages available at custom rates",
    includes: [
      "3PL setup and onboarding consultation",
      "Fulfillment workflow design and review",
      "Carrier and platform compliance guidance",
      "No minimum hours — pay for what you need",
    ],
    ctaLabel: "Book a Session",
  },
];

export const servicesContent = {
  hero: pageHeroes.services,
  catalog: {
    eyebrow: "Our Services",
    title: "What We Offer",
    intro:
      "All services are invoiced through Stripe. Pricing is fixed per the service tier selected. Custom invoices are available for clients with specific volume or contract requirements.",
    tiers: serviceTiers,
    totalTiers: 7,
  },
  whyChoose: {
    title: "Why Choose Us?",
    items: [
      "169+ successful B2B transactions with zero disputes and zero chargebacks",
      "Licensed third-party warehouse facilities — asset-light, industry-standard model",
      "Specialized marketplace fulfillment for Walmart, eBay, and other platforms",
      "Transparent weekly and monthly retainer invoicing with clear service descriptions",
      "Florida-registered LLC with established operational history since 2023",
      "Dedicated account management and responsive client support",
      "Full tracking documentation on all inbound and outbound shipments",
    ],
  },
};

export const aboutContent = {
  intro: {
    title: "About A & J Invest Group LLC",
    paragraphs: [
      "A & J Invest Group LLC is a Florida-registered third-party logistics (3PL) service provider founded in 2023. We serve e-commerce businesses and marketplace sellers with fulfillment, inventory management, and warehouse consulting services.",
      "We operate fulfillment services at licensed third-party warehouse facilities. Our asset-light operating model is standard practice for 3PL operators of our scale, allowing us to provide flexible, cost-effective logistics solutions without the overhead of owned warehouse infrastructure.",
      "Our administrative office is located at our registered business address in Orlando, FL. We charge clients at the time of service delivery or on a recurring weekly/monthly retainer basis as agreed with each client.",
    ],
  },
  mission: {
    title: "Our Mission",
    description:
      "To empower e-commerce businesses with reliable, transparent, and scalable third-party logistics services that enable sellers to focus on growth while we handle the operational complexity of fulfillment and inventory management.",
  },
  values: [
    {
      title: "Transparency",
      description:
        "Clear invoicing, documented service terms, and regular reporting on all fulfillment activities.",
    },
    {
      title: "Reliability",
      description:
        "Consistent pick-and-pack operations with full tracking documentation on every shipment.",
    },
    {
      title: "Expertise",
      description:
        "Deep knowledge of Walmart Marketplace, eBay, and multi-channel fulfillment workflows.",
    },
    {
      title: "Partnership",
      description:
        "We work as an extension of your team, not just a vendor — your success is our success.",
    },
  ],
  contact: {
    address: "7579 Narcoossee Road, APT 4216, Orlando, FL 32822",
    phone: "+1 (407) 967-6457",
    email: "ajinvestgroup2023@gmail.com",
  },
};

export const offices: Office[] = [
  {
    city: "Orlando",
    country: "USA",
    email: "ajinvestgroup2023@gmail.com",
    phone: "+1 (407) 967-6457",
    address: "7579 Narcoossee Road, APT 4216, Orlando, FL 32822, United States",
    mapEmbedUrl:
      "https://www.google.com/maps?q=7579+Narcoossee+Road,+Orlando,+FL+32822&output=embed",
  },
];

export const contactContent = {
  info: {
    address: "7579 Narcoossee Road, APT 4216, Orlando, FL 32822",
    email: "ajinvestgroup2023@gmail.com",
    phone: "+1 (407) 967-6457",
  },
  form: {
    title: "Get in Touch",
    subtitle:
      "Contact A & J Invest Group LLC for fulfillment inquiries, consulting engagements, or to request a service agreement.",
    fields: {
      firstName: { label: "First Name", required: true },
      lastName: { label: "Last Name", required: false },
      phone: { label: "Phone", required: true },
      email: { label: "Email", required: true },
      message: { label: "Message", required: true },
    },
    submitLabel: "Send Message",
    legalLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      refund: "Refund Policy",
    },
    consentCheckboxLabel:
      "I have read and agree to the Privacy Policy and Terms of Service.",
    consentText:
      "By submitting this form, you consent to A & J Invest Group LLC contacting you regarding your inquiry. We will not share your information with third parties except as necessary to provide our services.",
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  description?: string;
  status: string;
  image: { src: string; alt: string };
};

export const blogContent = {
  sectionTitle: "3PL & Logistics Blog",
  posts: [
    {
      slug: "3pl-fulfillment-basics",
      title: "Understanding 3PL Fulfillment for Marketplace Sellers",
      status: "Coming Soon",
      image: {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        alt: "Warehouse fulfillment operations",
      },
    },
    {
      slug: "walmart-marketplace-logistics",
      title: "Walmart Marketplace Fulfillment Best Practices",
      status: "Coming Soon",
      image: {
        src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
        alt: "Inventory management",
      },
    },
    {
      slug: "inventory-coordination-tips",
      title: "SKU-Level Inventory Coordination Strategies",
      status: "Coming Soon",
      image: {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
        alt: "Logistics and shipping",
      },
    },
    {
      slug: "choosing-3pl-partner",
      title: "How to Choose the Right 3PL Partner",
      status: "Coming Soon",
      image: {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
        alt: "Warehouse operations",
      },
    },
  ] satisfies BlogPost[],
};

export const blogPosts = blogContent.posts;
