import * as cheerio from "cheerio";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const routes = [
  "accounting", "invoicing", "taxation", "documents", "intelligence", "pricing",
  "ein-application", "open-us-bank-account", "itin", "federal-tax-filing", "state-tax-filing",
  "post-incorporation", "united-states-trademark", "amendment-to-articles-of-organization",
  "resale-certificate", "certificate-of-good-standing", "dissolution", "bookkeeping",
  "offshore-business-registration", "blog", "partners", "glossary", "tools", "perks", "wall-of-love",
  "affiliates", "events", "about-clemta", "career", "privacy-policy", "terms-of-use",
  "refund-and-cancellation-policy", "cookie-policy"
];

const clean = (value) => value.replace(/\s+/g, " ").trim()
  .replace(/https:\/\/app\.clemta\.com\/?/gi, "https://incorporatewise.com/contact")
  .replace(/https:\/\/\s*clemta\.com/gi, "https://incorporatewise.com")
  .replace(/Clemta Intelligence/gi, "Incorporate Wise Intelligence")
  .replace(/Clemta's/gi, "Incorporate Wise's")
  .replace(/Clemta/gi, "Incorporate Wise")
  .replace(/Startup Law Consultancy,? Inc\.?/gi, "Incorporate Wise");

async function scrape(slug) {
  const response = await fetch(`https://clemta.com/${slug}`);
  if (!response.ok) throw new Error(`${slug}: ${response.status}`);
  const html = await response.text();
  const $ = cheerio.load(html);
  const main = $("main").first().length ? $("main").first() : $("#__nuxt");
  main.find("script,style,svg,noscript,header,footer,nav").remove();
  const entries = [];
  main.find("h1,h2,h3,p,li").each((_, element) => {
    const tag = element.tagName.toLowerCase();
    if ($(element).find("h1,h2,h3,p,li").length) return;
    const text = clean($(element).text());
    if (!text || text.length < 2 || entries.at(-1)?.text === text) return;
    entries.push({ tag, text });
  });
  const h1Index = entries.findIndex((entry) => entry.tag === "h1");
  const heroTitle = h1Index >= 0 ? entries[h1Index].text : clean($("title").text().split("|")[0]);
  const heroDescription = entries.slice(h1Index + 1).find((entry) => entry.tag === "p")?.text || "Start and grow your US business with Incorporate Wise.";
  const sections = [];
  let section = null;
  let card = null;
  for (const entry of entries.slice(h1Index + 1)) {
    if (entry.tag === "h2") {
      section = { title: entry.text, paragraphs: [], cards: [] };
      sections.push(section); card = null;
    } else if (entry.tag === "h3") {
      if (!section) { section = { title: "Explore", paragraphs: [], cards: [] }; sections.push(section); }
      card = { title: entry.text, content: [] }; section.cards.push(card);
    } else if (entry.text !== heroDescription) {
      if (!section) { section = { title: "Details", paragraphs: [], cards: [] }; sections.push(section); }
      if (card) card.content.push(entry.text); else section.paragraphs.push(entry.text);
    }
  }
  return {
    slug,
    sourceTitle: clean($("title").text()),
    heroTitle,
    heroDescription,
    eyebrow: clean(entries.slice(0, h1Index).find((entry) => entry.tag === "p")?.text || slug.replaceAll("-", " ")),
    sections: sections.slice(0, 16),
  };
}

const pages = {};
for (const slug of routes) {
  try { const page = await scrape(slug); const outputSlug = slug === "about-clemta" ? "about" : slug; pages[outputSlug] = { ...page, slug: outputSlug }; console.log(`scraped ${slug}`); }
  catch (error) { console.error(error.message); }
}

await mkdir(path.join(process.cwd(), "lib"), { recursive: true });
await writeFile(path.join(process.cwd(), "lib", "site-content.json"), JSON.stringify(pages, null, 2));
