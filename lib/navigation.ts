import type { IconName } from "@/components/Icons";

export type NavItem = { label: string; href: string; description: string; icon: IconName; badge?: string };
export type NavGroup = { label: string; description: string; items: NavItem[] };
const pitch = "Incorporate Wise helps founders start a US company from anywhere, then handles what comes next: banking, bookkeeping, taxes, and compliance.";

export const navGroups: NavGroup[] = [
  { label: "Product", description: pitch, items: [
    { label: "Accounting", href: "/accounting", description: "See your whole financial picture", icon: "receipt" },
    { label: "Invoicing", href: "/invoicing", description: "Send invoices and get paid", icon: "document" },
    { label: "Taxation", href: "/taxation", description: "Simplify filing and stay compliant", icon: "bank" },
    { label: "Documents", href: "/documents", description: "Keep your business records secure", icon: "document" },
    { label: "Incorporate Wise Intelligence", href: "/intelligence", description: "Your AI-powered business partner", icon: "shield" },
  ]},
  { label: "Services", description: pitch, items: [
    { label: "US Company Formation", href: "/usa-company-registration", description: "Form your company in the US", icon: "building" },
    { label: "EIN Assistance", href: "/ein-application", description: "Get your business tax ID", icon: "receipt" },
    { label: "Business Bank Account Assistance", href: "/open-us-bank-account", description: "Open a US bank account", icon: "bank" },
    { label: "ITIN Assistance", href: "/itin", description: "Get your personal US tax ID", icon: "pin" },
    { label: "Federal Tax Support", href: "/federal-tax-filing", description: "Expert federal tax guidance", icon: "document" },
    { label: "State Tax Support", href: "/state-tax-filing", description: "Manage your state tax obligations", icon: "document" },
    { label: "Post-Incorporation", href: "/post-incorporation", description: "Complete your ownership and governance setup", icon: "checklist" },
    { label: "Trademark", href: "/united-states-trademark", description: "Protect your brand", icon: "shield" },
    { label: "Amendment to Articles of Organization", href: "/amendment-to-articles-of-organization", description: "Update your company details", icon: "document" },
    { label: "Resale Certificate", href: "/resale-certificate", description: "Unlock resale tax benefits", icon: "shield" },
    { label: "Certificate of Good Standing", href: "/certificate-of-good-standing", description: "Verify your company's active status", icon: "receipt" },
    { label: "Dissolution", href: "/dissolution", description: "Close your US business properly", icon: "attachment" },
    { label: "Bookkeeping", href: "/bookkeeping", description: "Smarter, automated bookkeeping", icon: "book" },
    { label: "Global", href: "/offshore-business-registration", description: "Expand internationally", icon: "pin", badge: "New" },
  ]},
  { label: "Resources", description: pitch, items: [
    { label: "Blog", href: "/blog", description: "Deadlines, taxes, and how-tos", icon: "document" },
    { label: "Partners", href: "/partners", description: "Extensive partner network supporting you", icon: "checklist" },
    { label: "Glossary", href: "/glossary", description: "Business jargon in plain English", icon: "book" },
    { label: "Business Tools", href: "/tools", description: "Free calculators and generators", icon: "form" },
    { label: "Perks", href: "/perks", description: "Save thousands on tools you'll need", icon: "arrow" },
    { label: "Wall of Love", href: "/wall-of-love", description: "What founders say about Incorporate Wise", icon: "pin" },
    { label: "Affiliates", href: "/affiliates", description: "Earn commission for every founder you refer", icon: "bank" },
    { label: "Events", href: "/events", description: "Webinars, workshops, and meetups", icon: "calendar" },
  ]},
  { label: "Company", description: pitch, items: [
    { label: "About Incorporate Wise", href: "/about", description: "The team behind thousands of companies", icon: "shield" },
    { label: "Careers", href: "/career", description: "Join our team", icon: "bank" },
    { label: "Contact Us", href: "/contact", description: "Questions? We got the answers!", icon: "mail" },
  ]},
];

export const legalLinks = [
  ["Privacy Policy", "/privacy-policy"], ["Terms of Use", "/terms-of-use"],
  ["Refund and Cancellation Policy", "/refund-and-cancellation-policy"], ["Cookie Policy", "/cookie-policy"],
] as const;
