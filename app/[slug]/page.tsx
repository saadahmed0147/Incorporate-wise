import type { Metadata } from "next";
import { notFound } from "next/navigation";
import content from "@/lib/site-content.json";
import { GenericContentPage, type ContentPage } from "@/components/GenericContentPage";

const pages = content as Record<string, ContentPage>;

export function generateStaticParams() {
  return Object.keys(pages).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return { title: page.heroTitle, description: page.heroDescription };
}

export default async function ContentRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <GenericContentPage page={{ ...page, slug }}/>
}
