import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Icon } from "./Icons";

export type ContentPage = {
  slug: string;
  sourceTitle: string;
  heroTitle: string;
  heroDescription: string;
  eyebrow: string;
  sections: Array<{ title: string; paragraphs: string[]; cards: Array<{ title: string; content: string[] }> }>;
};

export function GenericContentPage({ page }: { page: ContentPage }) {
  const isLegal = ["privacy-policy", "terms-of-use", "refund-and-cancellation-policy", "cookie-policy"].includes(page.slug);
  return <><Header/><main className={`generic-page page-frame${isLegal ? " legal-page" : ""}`}>
    <section className="generic-hero section-border">
      <div><span className="generic-eyebrow">{page.eyebrow}</span><h1>{page.heroTitle}</h1><p>{page.heroDescription}</p>{!isLegal && <div className="button-row"><Link className="btn btn-dark" href="/contact#form">Get Started <Icon name="arrow"/></Link><Link className="btn btn-light" href="/contact">Contact Us</Link></div>}</div>
      {!isLegal && <div className="generic-visual" aria-hidden="true"><div className="visual-window"><span/><span/><span/><strong>Incorporate Wise</strong><div className="visual-chart"><i/><i/><i/><i/><i/></div><small>Business overview</small></div></div>}
    </section>
    <div className="generic-sections">{page.sections.map((section, index) => <section className="generic-section section-border" key={`${section.title}-${index}`}>
      <div className="generic-section-heading"><span>{String(index + 1).padStart(2,"0")}</span><h2>{section.title}</h2>{section.paragraphs.slice(0,4).map((text,i) => <p key={i}>{text}</p>)}</div>
      {section.cards.length > 0 && <div className="generic-card-grid">{section.cards.map((card, cardIndex) => <article key={`${card.title}-${cardIndex}`}><Icon name={(["document","bank","shield","building","book","receipt"] as const)[cardIndex % 6]}/><h3>{card.title}</h3>{card.content.slice(0,8).map((text,i) => <p key={i}>{text}</p>)}</article>)}</div>}
      {section.paragraphs.length > 4 && <div className="long-copy">{section.paragraphs.slice(4).map((text,i) => <p key={i}>{text}</p>)}</div>}
    </section>)}</div>
    {!isLegal && <section className="journey generic-cta"><h2>Start Your Journey With Us</h2><p>Take your business to the next level with our team of experts. You focus on your passion while we handle the complicated paperwork.</p><div className="button-row"><Link className="btn btn-glass" href="/contact#form">Get Started</Link><Link className="btn btn-outline" href="/contact">Contact Us</Link></div></section>}
  </main><Footer/></>;
}
