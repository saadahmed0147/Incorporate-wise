import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = { title: "Start & Grow Your Business in the United States", description: "Start and grow your US business with Incorporate Wise. Formation, banking, taxes, bookkeeping, and compliance in one platform." };

const platform = [
  ["Formation", "Form your LLC or C-Corp online.", "platform_formation.webp"], ["EIN & ITIN Support", "Get expert help for your tax IDs.", "platform_ein-itin.webp"],
  ["Business Banking", "Easy account setup with a debit card.", "platform_banking.webp"], ["Bookkeeping and Invoicing", "Keep your finances in check.", "platform_bookkeeping.webp"],
  ["Accounting", "Integrate your stack with accounting features.", "platform_accounting.webp"], ["Tax Filing", "Simplify your tax filings with automated flows.", "platform_tax-filing.webp"],
];
const dashboard = [
  ["Send invoices to your customers", "Create, send, and track professional invoices with just a few clicks.", "dashboard_invoices.webp"],
  ["Keep your tax obligations in check", "Stay compliant and simplify tax preparation with automated calculation and filing tools.", "dashboard_payments.webp"],
  ["Never miss a transaction", "Keep your finances in order with advanced bookkeeping and financial reports.", "dashboard_reports.webp"],
  ["Stay compliant", "Track important deadlines, receive reminders, and remain compliant at all times.", "dashboard_compliance.webp"],
  ["Seamless document management", "Find, review, and manage your files with ease on desktop and mobile.", "dashboard_uploads.webp"],
  ["Easy access to your client base", "Organize and manage client information with a friendly interface.", "dashboard_customers.webp"],
];

export default function HomePage() {
  return <><Header/><main className="home-page page-frame">
    <section className="home-hero section-border"><div className="home-hero-copy"><span className="trust-line">★★★★★ Excellent · Trusted worldwide</span><h1>Start &amp; Grow Your Business in the United States</h1><p>We seamlessly handle your U.S. Formation, Business Banking and Compliance, providing every solution you need to grow.</p><Link className="btn btn-dark" href="/contact#form">Get Started <Icon name="arrow"/></Link></div><div className="home-dashboard"><Image src="/assets/hero_dashboard.svg" alt="Incorporate Wise business management dashboard" fill priority sizes="(max-width: 768px) 100vw, 70vw"/></div></section>

    <section className="platform-section section-border"><div className="section-intro"><span className="generic-eyebrow">No Hidden Charges</span><h2>One platform to rule them all</h2><p>With Incorporate Wise, embark on a seamless business journey.</p><div className="home-toggle"><Link href="/contact#form">Start a new company</Link><Link href="/contact">Already Incorporated?</Link></div></div><div className="platform-grid">{platform.map(([title,copy,image]) => <article key={title}><div><h3>{title}</h3><p>{copy}</p></div><Image src={`/assets/${image}`} alt={title} width={360} height={260}/></article>)}</div></section>

    <section className="dashboard-section section-border"><div className="section-intro"><span className="generic-eyebrow">Your Business Command Center</span><h2>Comprehensive Business Management Dashboard</h2><p>Once your business is up and running, our powerful dashboard will help you manage every aspect of your business.</p></div><div className="dashboard-grid">{dashboard.map(([title,copy,image],index)=><article key={title} className={index%2 ? "reverse" : ""}><div><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p></div><Image src={`/assets/${image}`} alt={title} width={520} height={340}/></article>)}</div></section>

    <section className="perks-section section-border"><div><span className="generic-eyebrow">Special Offers</span><h2>Access to Exclusive Networks &amp; Perks</h2><p>By joining our family, you unlock exclusive perks from leading software and service providers.</p><Link className="btn btn-light" href="/perks">Explore perks <Icon name="arrow"/></Link></div><div className="perk-orbits"><Image src="/assets/perks_outer.webp" alt="Partner perks" fill sizes="40vw"/></div></section>

    <section className="home-services section-border"><div className="section-intro"><span className="generic-eyebrow">Beyond Formation</span><h2>Your Company Is Formed. Now Keep It Running.</h2><p>Already incorporated? Boost your business with our additional services.</p></div><div className="home-service-grid">{["US Company Formation","EIN Assistance","Bookkeeping","Federal Tax Support","State Tax Support","ITIN Assistance","Business Bank Account","Post-Incorporation","Trademark","Global"].map((title,index)=><Link key={title} href={index===0?"/usa-company-registration":"/contact"}><Icon name={index%2?"document":"building"}/><h3>{title}</h3><p>Professional support to keep your US business moving forward.</p><b>→</b></Link>)}</div></section>

    <section className="ai-section section-border"><div className="ai-copy"><span className="generic-eyebrow">Meet Incorporate Wise Intelligence</span><h2>Your Business, Now Powered by AI</h2><p>Incorporate Wise Intelligence makes running a US business simpler, smarter, and more accessible for founders everywhere.</p><div><h3>Business answers, instantly</h3><p>Clear answers from your finances and compliance status.</p><h3>From prompt to task</h3><p>Invoices, documents, and workflows with a single prompt.</p><h3>Your accountant, on call</h3><p>Categorize transactions, reconcile accounts, and check tax readiness just by asking.</p></div></div><div className="ai-visual"><Image src="/assets/hero_ai-chat.webp" alt="Incorporate Wise Intelligence interface" fill sizes="(max-width: 768px) 100vw, 50vw"/></div></section>

    <section className="journey home-journey"><h2>Start Your Journey With Us</h2><p>Take your business to the next level with our team of experts. Focus on your passion while we handle the complicated paperwork.</p><div className="button-row"><Link className="btn btn-glass" href="/contact#form">Get Started</Link><Link className="btn btn-outline" href="/contact">Contact Us</Link></div></section>
  </main><Footer/></>;
}
