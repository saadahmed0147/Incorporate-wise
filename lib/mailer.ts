import "server-only";
import nodemailer from "nodemailer";
import type { ContactInput } from "./contact-schema";

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char] ?? char);
}

export async function sendContactEmail(data: ContactInput) {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, CONTACT_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !CONTACT_TO_EMAIL) throw new Error("MAIL_CONFIG_MISSING");

  const port = Number(SMTP_PORT || 587);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("MAIL_CONFIG_INVALID");

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER.trim(),
      // Google displays app passwords in four groups. SMTP expects the same
      // password without presentation whitespace.
      pass: SMTP_PASS.replace(/\s+/g, ""),
    },
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    tls: { minVersion: "TLSv1.2" },
  });

  const fields = [
    ["Name", data.fullName], ["Email", data.email], ["Phone", data.phone || "Not provided"],
    ["Country", data.country], ["Service", data.service], ["Entity", data.entity || "Not sure"],
    ["State", data.state || "Not sure"], ["Message", data.message],
  ];
  const text = fields.map(([key, value]) => `${key}: ${value}`).join("\n\n");
  const html = `<!doctype html><html><body style="margin:0;background:#f4f6f8;padding:28px;font-family:Arial,sans-serif;color:#111927"><table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td align="center"><table role="presentation" width="620" style="max-width:620px;width:100%;background:#fff;border:1px solid #e2e5e9;border-radius:14px;overflow:hidden"><tr><td style="background:#111927;padding:24px 28px;color:#fff"><div style="font-size:20px;font-weight:700">Incorporate Wise</div><div style="margin-top:6px;color:#b9c7dc;font-size:14px">New website enquiry</div></td></tr><tr><td style="padding:26px 28px"><p style="margin:0 0 22px;color:#596373">A visitor submitted the contact form. Replying to this email will reply directly to the visitor.</p>${fields.map(([key,value]) => `<div style="border-top:1px solid #edf0f3;padding:13px 0"><div style="font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#7b8491">${escapeHtml(key)}</div><div style="margin-top:5px;font-size:15px;line-height:1.5">${escapeHtml(value).replace(/\n/g,"<br>")}</div></div>`).join("")}</td></tr></table></td></tr></table></body></html>`;

  const info = await transporter.sendMail({
    from: MAIL_FROM,
    to: CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `New ${data.service} enquiry from ${data.fullName}`,
    text,
    html,
  });

  if (!info.accepted.length) throw new Error("MAIL_NOT_ACCEPTED");
}
