import "server-only";
import nodemailer from "nodemailer";
import type { ContactInput } from "./contact-schema";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] ?? char);
}

export async function sendContactEmail(data: ContactInput) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, CONTACT_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !CONTACT_TO_EMAIL) throw new Error("MAIL_CONFIG_MISSING");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const fields = [
    ["Name", data.fullName], ["Email", data.email], ["Phone", data.phone || "Not provided"],
    ["Country", data.country], ["Service", data.service], ["Entity", data.entity || "Not sure"],
    ["State", data.state || "Not sure"], ["Message", data.message],
  ];
  const text = fields.map(([key, value]) => `${key}: ${value}`).join("\n\n");
  const html = `<div style="font-family:Arial,sans-serif;color:#111927;line-height:1.5"><h2>New Incorporate Wise enquiry</h2>${fields.map(([key,value]) => `<p><strong>${escapeHtml(key)}:</strong><br>${escapeHtml(value).replace(/\n/g,"<br>")}</p>`).join("")}</div>`;

  await transporter.sendMail({
    from: MAIL_FROM,
    to: CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `New ${data.service} enquiry from ${data.fullName}`,
    text,
    html,
  });
}
