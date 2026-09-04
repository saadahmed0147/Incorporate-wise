import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon, type IconName } from "@/components/Icons";
import { faqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "US Company Formation - Get Your LLC & EIN Fast",
  description: "Looking for USA company registration? Incorporate Wise simplifies LLC and C-Corp formation for non-US residents. Easily start a US business online.",
  alternates: { canonical: "/usa-company-registration" },
  openGraph: { title: "US Company Formation - Get Your LLC & EIN Fast", description: "Form your US LLC or C Corporation from anywhere in the world with Incorporate Wise.", type: "website" },
};

const features: Array<[IconName, string, string]> = [
  ["building", "Form Your Company and Get an EIN", "Establish your LLC or C Corporation and obtain the federal tax ID needed to operate your business."],
  ["bank", "Open a US Business Bank Account", "We complete the business bank account application on your behalf, so you can receive payments and manage company expenses."],
  ["document", "Set Up Your Ownership and Governance", "Put the right internal documents in place to define ownership, management, and decision-making."],
  ["shield", "Stay Compliant with State Requirements", "Appoint a registered agent to receive official legal and government correspondence on your behalf."],
  ["mail", "Receive Your US Business Mail", "Use a US business address and access your incoming mail securely through your dashboard."],
  ["receipt", "Create Professional Invoices", "Issue invoices, automate numbering, track records, and keep your business documents organized through your dashboard."],
  ["book", "Keep Your Finances Organized", "Use bookkeeping tools to record income and expenses, store supporting documents, and prepare for tax season."],
];

const flags = ["massachusetts", "michigan", "minnesota", "missouri", "montana", "nebraska", "nevada", "new-hampshire", "new-jersey", "new-mexico"];

const testimonials = [
  { name: "Talal Ahmed Raza", role: "Fashion Retailer", featured: true, copy: "I have always received an immediate response. The quick response time from Incorporate Wise has truly made a difference in my interactions with the company. From assistance with company formation to the seamless process of opening a bank account, my overall experience has been great. Incorporate Wise's dedication to efficient and responsive service has truly stood out to me." },
  { name: "Paul M.", role: "Small Business Owner", copy: "I had a tax penalty due to unfinished post incorporation process & income taxes. Incorporate Wise helped me to get my 83b form submitted and finish my post incorporation. Now with almost $400 I saved almost $10k in such a short time." },
  { name: "Amr Maged", role: "Amazon FBA", copy: "Incorporate Wise is excellent. All responses to my emails were quick, professional and to the point. When I needed an Arabic speaker to explain my query in depth, I immediately got a very good candidate.", rating: true },
  { name: "Fatih Kadir Akın", role: "Creator", copy: "Incorporate Wise was very supportive during the establishment process of the US company I set up for my e-books. They have organized every step so well that you're left with no question marks in your mind. They deserve every user and more!" },
  { name: "Sultan Al Suwaidi", role: "Ecommerce Founder", copy: "I recently used Incorporate Wise to set up my business in the United States, and I was very impressed with the service. The process was smooth and easy, and the customer support team was very helpful and responsive." },
];

function Pill({ children }: { children: React.ReactNode }) { return <span className="pill"><i/>{children}</span>; }

export default function FormationPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return <>
    <Header/>
    <main className="page-frame formation-page">
      <section className="hero section-border">
        <div className="hero-copy"><div className="eyebrow"><i/>Company Formation</div><h1>US Company Formation</h1><p>Form your US LLC or C Corporation from anywhere in the world. Incorporate Wise helps international founders manage company registration, EIN applications, post-formation documents, compliance, and business banking support, all through one platform.</p><div className="button-row"><Link className="btn btn-dark" href="/contact#form">Start Now <Icon name="arrow"/></Link><Link className="btn btn-light" href="/contact">Contact Us</Link></div></div>
        <div className="hero-art"><Image src="/assets/service-hero_us-company-formation.webp" alt="US company formation dashboard illustration" fill priority sizes="(max-width: 768px) 100vw, 50vw"/></div>
      </section>

      <section className="features section-border">
        <div className="section-intro dotted-intro"><Pill>Everything You Need</Pill><h2>Form Your US Company from Anywhere</h2><p>You don&apos;t need to be a US resident to start a US business. Form your LLC or C Corporation remotely and access the tools and support you need to operate confidently from anywhere.</p></div>
        <div className="feature-grid">{features.map(([icon, title, body]) => <article key={title}><Icon name={icon}/><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="entity section-border">
        <div className="section-intro"><h2>Deciding on Company Structure</h2><p>Choosing between an LLC and C-Corp affects your business&apos;s future. Each has unique benefits; understanding them helps align your choice with your goals. Determine which is right for your business.</p></div>
        <div className="entity-grid">
          <article><div className="ghost-label">LLC</div><div className="entity-icon"><Icon name="building"/></div><h3>Limited Liability Company</h3><ul><li>Flexible management and taxation</li><li>Straightforward with less bureaucracy</li><li>Great for small businesses, e-commerce sellers and freelancers</li></ul></article>
          <article><div className="ghost-label">C-Corp</div><div className="entity-icon"><Icon name="building"/></div><h3>C Corporation</h3><ul><li>Ready to access venture capital</li><li>Potential for an initial public offering</li><li>Great for fundraising startups and complex company structures</li></ul></article>
        </div>
        <div className="help-line">Can&apos;t decide? Let us help you! <Link href="/contact">Contact us</Link></div>
      </section>

      <section className="states section-border">
        <div className="section-intro state-intro"><Pill>Choose a State</Pill><h2>Wyoming vs. Delaware: Which to Choose?</h2><p>State selection can shape your business. With Wyoming&apos;s cost-effectiveness and Delaware&apos;s investor appeal, choose wisely to set your business on its path. Assess each state&apos;s benefits to find where your company fits best.</p></div>
        <div className="state-grid">
          <article><Image src="/assets/flag-wyoming.webp" alt="Wyoming flag" width={56} height={38}/><h3>Wyoming</h3><ul><li>Quick company setup</li><li>Flexible management with fewer formalities</li><li>Low maintenance costs</li><li>No franchise tax</li><li>No personal or corporate income tax</li></ul></article>
          <article><Image src="/assets/flag-delaware.webp" alt="Delaware flag" width={56} height={38}/><h3>Delaware</h3><ul><li>Investor confidence as a global startup hub</li><li>Flexible corporate structure</li><li>Established, entrepreneur-friendly legal landscape</li><li>Privacy protection</li><li>No sales tax</li></ul></article>
        </div>
        <div className="other-states"><div><h3>Other States That Fit Your Needs</h3><p>While Wyoming and Delaware offer notable business advantages, other states may also provide benefits.</p></div><div className="flag-rail">{flags.map(flag => <Image key={flag} src={`/assets/flag-${flag}.webp`} alt={`${flag.replace("-", " ")} flag`} width={50} height={32}/>)}</div></div>
      </section>

      <section className="process section-border">
        <div className="section-intro dotted-intro"><Pill>The Process</Pill><h2>The Process Explained</h2><p>With a team of committed experts, we ensure that your USA company registration will be a stress-free experience. We handle all the complicated paperwork, while you focus on your business.</p></div>
        <div className="process-grid">
          {[["building","Step 1","Choose a Company Type","LLC or C-Corp? Align your choice with your goals."],["pin","Step 2","Select your company state","Delaware or Wyoming? Find your company's best fit."],["checklist","Step 3","Easy Form, Easier Process","Just provide the details; Incorporate Wise manages the rest."],["attachment","Step 4","Documents Delivered Fast","Claim your formation docs; the journey begins."]].map(([icon,step,title,body]) => <article key={step}><div className="step-line"><Icon name={icon as IconName}/><span/></div><p className="step-label"><i/>{step}</p><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="faq-section section-border"><div className="faq-copy"><Pill>All Your Business Needs in One Place</Pill><h2>Got Questions?<br/>We got the answers</h2><p>Everything you need to know about the product and plans. Can&apos;t find the answer you&apos;re looking for? Please contact us.</p></div><Faq/></section>

      <section className="testimonial-section section-border">
        <div className="testimonial-heading"><div><Pill>All Your Business Needs in One Place</Pill><h2>Trusted Worldwide: Serving<br/>Across 170+ Countries</h2></div><p>Read success stories from small business owners to enterprises! Visit our clients&apos; experiences below and discover how Incorporate Wise can help you turn your dream business into reality.</p></div>
        <div className="testimonial-grid">{testimonials.map(item => <article key={item.name} className={item.featured ? "featured" : ""}><div><h3>{item.name}</h3><span>{item.role}</span></div><p>{item.copy}</p>{item.rating && <div className="rating">★★★★★ <span>Excellent</span></div>}</article>)}</div>
      </section>

      <section className="journey"><h2>Start Your Journey With Us</h2><p>Take your business to the next level with our team of experts, who will accompany you along the way. You can focus on your passion while we handle all the complicated paperwork.</p><div className="button-row"><Link className="btn btn-glass" href="/contact#form">Get Started</Link><Link className="btn btn-outline" href="/contact">Contact Us</Link></div></section>
    </main>
    <Footer/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
  </>;
}
