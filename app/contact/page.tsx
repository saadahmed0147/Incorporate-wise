import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = { title: "Contact Us", description: "Talk to Incorporate Wise about forming and running your US company." };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ meeting?: string }> }) {
  const params = await searchParams;
  return <><Header/><main className="contact-page page-frame">
    <section className="contact-hero">
      <div className="contact-prompt"><span className="contact-label">Contact Us</span><ul><li>Which is better for me - LLC or C-Corp?</li><li>Can I do this from outside the US?</li><li>What happens after my company is formed?</li><li>Which plan covers what I actually need?</li></ul></div>
      <div className="contact-choice"><h1>How would you like to continue?</h1><p>Choose the best way to connect with our team based on your request.</p>{params.meeting === "unavailable" && <div className="meeting-warning">Meeting booking is temporarily unavailable. Please send the form and we&apos;ll arrange a time with you.</div>}<div className="choice-list"><a href="#form"><Icon name="form"/><span><strong>Fill out a form</strong><small>Tell us what you need. We reply within one business day.</small></span><b>→</b></a><Link href="/meeting"><Icon name="calendar"/><span><strong>Book a meeting</strong><small>30 minutes with a formation specialist. Free, no obligation.</small></span><b>→</b></Link></div></div>
    </section>
    <ContactForm/>
  </main><Footer/></>;
}
