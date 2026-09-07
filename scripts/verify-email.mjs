import nodemailer from "nodemailer";

const required = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "CONTACT_TO_EMAIL"];
const missing = required.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Missing email settings: ${missing.join(", ")}`);
  process.exit(1);
}

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER.trim(),
    pass: process.env.SMTP_PASS.replace(/\s+/g, ""),
  },
  connectionTimeout: 15_000,
  greetingTimeout: 10_000,
  socketTimeout: 20_000,
  tls: { minVersion: "TLSv1.2" },
});

try {
  await transport.verify();
  console.log("SMTP connection and authentication verified successfully.");
} catch (error) {
  console.error("SMTP verification failed:", error?.code || error?.message || "Unknown error");
  process.exitCode = 1;
} finally {
  transport.close();
}
