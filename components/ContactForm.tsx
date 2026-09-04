"use client";

import { FormEvent, useState } from "react";

type Errors = Record<string, string[]>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setErrors({}); setMessage("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const payload = { ...values, consent: values.consent === "on" };
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) { setErrors(result.errors || {}); throw new Error(result.message); }
      setStatus("success"); setMessage(result.message || "Thanks — your message has been sent."); form.reset();
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again."); }
  }

  const error = (name: string) => errors[name]?.[0] && <small className="field-error">{errors[name][0]}</small>;
  return <form className="contact-form" id="form" onSubmit={submit} noValidate>
    <div className="form-heading"><span>Contact form</span><h2>Tell us how we can help</h2><p>Share a few details and our formation team will get back to you within one business day.</p></div>
    <div className="form-grid">
      <label>Full name<input name="fullName" placeholder="Your full name" autoComplete="name" aria-invalid={!!errors.fullName}/>{error("fullName")}</label>
      <label>Email address<input name="email" type="email" placeholder="you@company.com" autoComplete="email" aria-invalid={!!errors.email}/>{error("email")}</label>
      <label>Phone / WhatsApp <em>Optional</em><input name="phone" placeholder="+1 555 000 0000" autoComplete="tel"/></label>
      <label>Country of residence<input name="country" placeholder="Your country" autoComplete="country-name" aria-invalid={!!errors.country}/>{error("country")}</label>
      <label>What do you need help with?<select name="service" defaultValue="" aria-invalid={!!errors.service}><option value="" disabled>Select a service</option><option>US Company Formation</option><option>EIN Assistance</option><option>Business Bank Account Assistance</option><option>Tax & Compliance</option><option>Other</option></select>{error("service")}</label>
      <label>Preferred entity<select name="entity" defaultValue="Not sure"><option>Not sure</option><option>LLC</option><option>C Corporation</option></select></label>
      <label>Preferred state<select name="state" defaultValue="Not sure"><option>Not sure</option><option>Wyoming</option><option>Delaware</option><option>Other</option></select></label>
      <label className="wide">Message<textarea name="message" rows={6} placeholder="Tell us about your business and what you need..." aria-invalid={!!errors.message}/>{error("message")}</label>
    </div>
    <label className="consent"><input type="checkbox" name="consent"/><span>I agree that Incorporate Wise may contact me about this enquiry and process my information according to the Privacy Policy.</span></label>{error("consent")}
    <div className="honey" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <button className="btn btn-dark submit-btn" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
    {message && <p className={`form-status ${status}`} role="status">{message}</p>}
  </form>;
}
