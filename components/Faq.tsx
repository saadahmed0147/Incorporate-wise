"use client";

import { useState } from "react";
import { Chevron } from "./Icons";
import { faqItems } from "@/lib/faq-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="faq-list">{faqItems.map(([question, answer], index) => <div className={`faq-item${open === index ? " active" : ""}`} key={question}>
    <button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} aria-controls={`faq-${index}`}><span>{question}</span><Chevron open={open === index}/></button>
    <div id={`faq-${index}`} className="faq-answer" aria-hidden={open !== index}><p>{answer}</p></div>
  </div>)}</div>;
}
