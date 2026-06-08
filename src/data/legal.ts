export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const COMPANY = "A & J Invest Group LLC";
const EMAIL = "ajinvestgroup2023@gmail.com";
const PHONE = "+1 (407) 967-6457";
const ADDRESS =
  "7579 Narcoossee Road, APT 4216, Orlando, FL 32822, United States";
const WEBSITE = "https://www.ajinvestgroupllc.com";
const EFFECTIVE_DATE = "June 7, 2026";

export const privacySections: LegalSection[] = [
  {
    title: "Privacy Policy",
    paragraphs: [
      `Effective Date: ${EFFECTIVE_DATE} | Last Updated: ${EFFECTIVE_DATE}`,
      `${COMPANY} ("we," "us," or "our") operates ${WEBSITE} and provides third-party logistics (3PL), warehousing, and fulfillment services (collectively, the "Services"). This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our website or Services.`,
      "This policy is intended for educational and operational transparency purposes. For legal advice specific to your situation, consult a qualified attorney familiar with applicable privacy laws in your jurisdiction.",
    ],
  },
  {
    title: "1. Our Role: Data Controller vs. Data Processor",
    paragraphs: [
      "Depending on your relationship with us, we act as either a Data Controller or a Data Processor:",
    ],
    bullets: [
      "Data Controller: When you visit our website, submit a contact form, request a quote, or sign a service agreement as a business client, we determine how your personal and business information is collected and used.",
      "Data Processor: When we fulfill orders on behalf of our e-commerce business clients, we process end-user consumer personal data strictly according to the client's instructions, our service agreements, and applicable law. We do not use consumer data for our own marketing purposes.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We collect different categories of information to operate our logistics network effectively:",
    ],
  },
  {
    title: "2A. Information Collected from Business Clients & Website Visitors",
    paragraphs: [
      "If you are a business client or website visitor, we may collect:",
    ],
    bullets: [
      "Contact Information: Name, business email address, phone number, and physical billing or corporate address.",
      "Account & Service Details: Company name, service tier selections, invoicing preferences, and communications related to your 3PL engagement.",
      "Payment Information: Payment details processed through PCI-compliant third-party processors such as Stripe. We do not store full credit card numbers on our servers.",
      "Technical Data: IP address, browser type, device information, and pages visited through cookies and similar technologies.",
    ],
  },
  {
    title: "2B. Information Processed on Behalf of E-Commerce Consumers",
    paragraphs: [
      "When we fulfill shipments for our business clients, we may access consumer delivery information synchronized from the client's sales channels. This may include:",
    ],
    bullets: [
      "Recipient name and physical delivery address",
      "Email address and phone number (when provided for delivery coordination)",
      "Order contents, SKU details, and quantity information necessary for pick-and-pack operations",
    ],
  },
  {
    title: "2C. Automated Technical Data",
    paragraphs: [
      "Like most websites, we automatically collect certain technical information to maintain security and improve performance, including log files, session data, and cookie identifiers.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    paragraphs: [
      "We use collected information strictly for logistics operations and legitimate business purposes:",
    ],
    bullets: [
      "Fulfilling, packing, sorting, and routing physical product shipments",
      "Generating shipping labels and coordinating carrier pickup and delivery",
      "Managing client accounts, invoicing, billing, and customer support",
      "Responding to contact form submissions and service inquiries",
      "Securing our digital systems and licensed warehouse operations against fraud or unauthorized access",
      "Complying with legal, tax, and regulatory obligations",
    ],
  },
  {
    title: "4. Data Sharing and Disclosure",
    paragraphs: [
      "We do not sell, rent, or trade personal data to third-party marketers. We do not use end-user consumer data for external advertising. We share information only with partners essential to completing logistics services:",
    ],
    bullets: [
      "Shipping Carriers: Recipient delivery details shared with carriers such as FedEx, UPS, DHL, USPS, and regional freight providers to execute physical delivery.",
      "Service Providers: Cloud hosting, warehouse management software, payment processors (including Stripe), and analytics tools that support our infrastructure under confidentiality obligations.",
      "Licensed Warehouse Partners: Operational data necessary to receive, store, and ship inventory at third-party fulfillment facilities.",
      "Legal Requirements: When required by law, court order, subpoena, or to protect the rights, safety, and property of our clients, staff, and partners.",
    ],
  },
  {
    title: "5. Data Security & Retention",
    paragraphs: [
      "We implement industry-standard physical, administrative, and technical safeguards—including SSL encryption for website communications and access controls at warehouse facilities—to protect data against unauthorized access, alteration, or disclosure.",
      "We retain personal and business data only as long as necessary to fulfill active service agreements, maintain transaction and fulfillment records, resolve disputes, and satisfy legal or audit obligations. Retention periods vary based on the type of data and contractual requirements.",
    ],
  },
  {
    title: "6. Cookies & Tracking Technologies",
    paragraphs: [
      "Our website may use essential cookies required for basic functionality and analytics cookies to understand how visitors interact with our pages. You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.",
    ],
  },
  {
    title: "7. Your Privacy Rights",
    paragraphs: [
      "Depending on your location (including California under the CCPA/CPRA, or the European Economic Area under GDPR), you or your end consumers may have the following rights:",
    ],
    bullets: [
      "Access & Portability: Request a copy of personal data we hold about you.",
      "Correction: Request correction of inaccurate or incomplete information.",
      "Deletion: Request deletion of personal information, subject to legal and contractual retention requirements.",
      "Opt-Out: Opt out of non-essential cookies or promotional communications where applicable.",
      "Restrict Processing: Request limitation of how we use your data in certain circumstances.",
    ],
  },
  {
    title: "8. California Privacy Rights (CCPA/CPRA)",
    paragraphs: [
      "California residents may have additional rights including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale or sharing of personal information. A & J Invest Group LLC does not sell personal information.",
      "To submit a verifiable consumer request, contact us using the information in Section 9 below.",
    ],
  },
  {
    title: "9. Contact Information",
    paragraphs: [
      `For questions regarding this Privacy Policy or our data handling practices:`,
      `Company Name: ${COMPANY}`,
      `Email: ${EMAIL}`,
      `Phone: ${PHONE}`,
      `Mailing Address: ${ADDRESS}`,
    ],
  },
  {
    title: "10. Changes to This Policy",
    paragraphs: [
      `We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated effective date. Continued use of our website or Services after changes constitutes acceptance of the updated policy.`,
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Third-Party Logistics (3PL) Terms of Service",
    paragraphs: [
      `Last Updated: ${EFFECTIVE_DATE}`,
      `These Third-Party Logistics Terms of Service (the "Terms") govern the provision of warehousing, inventory management, order fulfillment (pick & pack), and shipping coordination services (collectively, the "Services") provided by ${COMPANY} ("Company," "we," "us," or "our") to the business entity or individual acquiring these services ("Client," "you," or "your").`,
      `By delivering inventory to our facilities, engaging our Services through ${WEBSITE}, or integrating your e-commerce storefront with our software, you agree to be bound by these Terms.`,
    ],
  },
  {
    title: "1. Scope of Services",
    paragraphs: [
      `Company will receive, store, process, pack, and arrange transit for Client's products ("Goods") based on order data transmitted via approved system integrations, APIs, or manual dashboards.`,
      `Specific operational rates, fees, and guaranteed processing speeds are detailed in the separately executed Rate Sheet, Stripe invoice descriptions, or Service Level Agreement (SLA) agreed between the parties. Service tiers—including weekly warehousing, per-batch fulfillment, premium 3PL packages, monthly operations support, business consulting, and hourly advisory—are listed on our Services page at ${WEBSITE}/en/services.`,
    ],
  },
  {
    title: "2. Client Inventory Requirements & Restrictions",
    paragraphs: [
      "The following requirements apply to all inbound inventory and ongoing fulfillment operations:",
    ],
    bullets: [
      "Accurate Inbound Data: Client must provide accurate descriptions, weights, dimensions, and barcodes (SKUs) via an Advance Shipping Notice (ASN) prior to delivering any Goods to our warehouse.",
      "Prohibited Items: Client warrants that the Goods do not include hazardous materials, illegal substances, explosives, firearms, temperature-sensitive items requiring unauthorized cold chains, or materials that violate any federal, state, or local safety laws.",
      "Right of Refusal: We reserve the right to reject any inbound shipment that arrives damaged, mislabeled, or presents a safety or compliance hazard to our staff or facilities.",
    ],
  },
  {
    title: "3. Fees, Billing, and Warehouseman's Lien",
    paragraphs: [
      "The following fee and payment terms apply to all Services unless otherwise agreed in writing:",
    ],
    bullets: [
      "Fee Structure: Client agrees to pay all applicable fees outlined in the Rate Sheet or SLA, including but not limited to receiving fees, storage fees (per pallet or cubic foot), pick-and-pack fulfillment charges, packaging materials, and outbound shipping carrier fees.",
      "Payment Terms: Invoices will be generated on a weekly or monthly basis (as agreed per service tier) and are due within 7 days from the invoice date. Payments are processed through Stripe or other approved methods. All fees are denominated in USD unless otherwise stated in writing. Late payments are subject to a compounding interest fee of 1.5% per month.",
      "Warehouseman's Lien: In accordance with the Uniform Commercial Code (UCC) or applicable local commercial statutes, Company maintains a statutory Warehouseman's Lien over all Goods stored in our facility. If any invoice remains unpaid for more than 90 days, Company reserves the right to withhold shipments and sell or liquidate Client's inventory to recover the outstanding balance.",
    ],
  },
  {
    title: "4. Liability Limits & Inventory Shrinkage Allowance",
    paragraphs: [
      "The following liability limitations apply to all stored and handled Goods:",
    ],
    bullets: [
      "Inventory Shrinkage Allowance: A standard operational loss allowance of 1.5% of the total inventory volume per year is established. This covers standard operational handling errors, minor damages, or sorting discrepancies. Company is not liable for replacing or compensating Goods lost or damaged within this threshold.",
      "Cap on Liability: For verifiable losses exceeding the Shrinkage Allowance due to Company negligence, our liability is strictly limited to the actual manufacturing cost or wholesale acquisition cost of the item. Company will never be liable for retail market price, lost profits, reputational damages, or consequential commercial losses.",
      "Client Insurance Obligation: Title and ownership of the Goods remain with the Client at all times. The Client is strictly required to maintain a comprehensive commercial insurance policy covering their inventory against acts of God (force majeure), fires, floods, natural disasters, or major theft.",
    ],
  },
  {
    title: "5. Shipping Carriers and Outbound Transit",
    paragraphs: [
      "Company acts strictly as an intermediary when passing packed shipments to third-party shipping carriers (such as FedEx, UPS, DHL, USPS, or regional freight providers).",
      "Company is not responsible for transit delays, carrier tracking errors, packages lost in transit, shipping strikes, or damages that occur once the shipment has been physically signed out and collected by the carrier from our loading docks. All transit claims must be processed directly with the respective carrier under their specific insurance policies.",
    ],
  },
  {
    title: "6. Term and Termination",
    paragraphs: [
      "The following terms govern the duration and termination of Services:",
    ],
    bullets: [
      "Duration: This agreement shall remain in effect for an initial term of one (1) year and will automatically renew for successive equal periods unless terminated by either party.",
      "Termination for Convenience: Either party may terminate these Services by providing at least 30 days' written notice to the other party. Termination does not relieve the Client of obligation to pay fees for services already rendered during the current billing period.",
      "Outbound Removal (De-kitting) Fees: Upon termination, Client is responsible for paying all standard labor, palletizing, and administrative fees required to audit and load the remaining inventory onto the Client's outbound transport vehicles before the inventory is released.",
    ],
  },
  {
    title: "7. Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms and any disputes arising out of the Services shall be governed by and construed in accordance with the laws of the State of Florida, United States, without regard to conflict of law principles.",
      "Both parties expressly consent to the exclusive jurisdiction of the courts located in Orange County, Florida for any legal actions.",
    ],
  },
  {
    title: "8. Refund Policy",
    paragraphs: [
      "All service fees are non-refundable once the service has been rendered. Disputes regarding invoiced fees must be raised in writing within 7 days of the invoice date. Please refer to our Refund Policy page for complete details on billing inquiries and dispute resolution.",
    ],
  },
  {
    title: "9. Data Processing",
    paragraphs: [
      "When Client uses our fulfillment services, Client remains responsible for ensuring end consumers are informed about data processing for order fulfillment. We process consumer delivery data solely to execute logistics services on the Client's behalf, as described in our Privacy Policy.",
    ],
  },
  {
    title: "10. Contact",
    paragraphs: [
      `For questions regarding these Terms or our 3PL Services:`,
      `Company Name: ${COMPANY}`,
      `Email: ${EMAIL}`,
      `Phone: ${PHONE}`,
      `Mailing Address: ${ADDRESS}`,
    ],
  },
];

export const refundSections: LegalSection[] = [
  {
    title: "Refund Policy & Service Level Agreement",
    paragraphs: [
      `Effective Date: ${EFFECTIVE_DATE} | Last Updated: ${EFFECTIVE_DATE}`,
      `This Refund Policy and Service Level Agreement ("SLA") applies to all services provided by ${COMPANY} ("we," "us," or "our") to business clients.`,
    ],
  },
  {
    title: "1. Non-Refundable Service Fees",
    paragraphs: [
      "All service fees charged by A & J Invest Group LLC are non-refundable once the service has been rendered. This includes, without limitation:",
    ],
    bullets: [
      "Weekly warehousing and storage fees",
      "Per-batch order filling and fulfillment fees",
      "Premium weekly and full monthly 3PL package fees",
      "Weekly business operations support fees",
      "Monthly business consulting retainers",
      "Hourly 3PL advisory and consulting fees",
    ],
  },
  {
    title: "2. Billing & Invoicing",
    paragraphs: [
      "Services are invoiced through Stripe or other approved payment methods at the frequency agreed with each client (weekly, monthly, per batch, or hourly). Invoice descriptions reflect the specific service tier delivered.",
      "Payment is due upon invoice issuance unless otherwise agreed in writing. Clients authorize charges for recurring retainer services on the agreed billing schedule.",
    ],
  },
  {
    title: "3. Dispute Resolution",
    paragraphs: [
      "Disputes regarding invoiced service fees must be raised in writing within 7 days of the invoice date. Late disputes may not be eligible for review.",
      `Send dispute notifications to ${EMAIL} with the invoice number, service period, amount in question, and a detailed description of the dispute. We will acknowledge receipt within 2 business days and respond within 7 business days.`,
    ],
  },
  {
    title: "4. Partial Services & Early Termination",
    paragraphs: [
      "If a service agreement is terminated before the completion of a billing period, fees for services already rendered during that period remain due and are non-refundable.",
      "No partial refunds are issued for unused portions of a billing cycle unless explicitly agreed in writing by both parties before service delivery.",
    ],
  },
  {
    title: "5. Service Level Expectations",
    paragraphs: [
      "We commit to professional, good-faith execution of agreed 3PL services including inbound receiving coordination, inventory reporting, pick-and-pack operations, carrier handoff, and client communication as defined in each service tier.",
      "Specific turnaround times, reporting schedules, and operational standards are outlined in individual service agreements. Performance issues should be reported promptly to allow corrective action.",
    ],
  },
  {
    title: "6. Chargebacks",
    paragraphs: [
      "Unauthorized chargebacks on valid service invoices may result in immediate suspension of services and collection efforts. Clients agree to contact us directly to resolve billing concerns before initiating a chargeback with their payment provider.",
    ],
  },
  {
    title: "7. Contact",
    paragraphs: [
      `For billing inquiries, refund questions, or dispute resolution:`,
      `Company Name: ${COMPANY}`,
      `Email: ${EMAIL}`,
      `Phone: ${PHONE}`,
      `Mailing Address: ${ADDRESS}`,
    ],
  },
];
