import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const attempts = new Map<string, { count: number; resetAt: number }>();

function rateLimited(key: string) {
  const now = Date.now();
  const item = attempts.get(key);
  if (!item || item.resetAt < now) { attempts.set(key, { count: 1, resetAt: now + 10 * 60_000 }); return false; }
  item.count += 1;
  return item.count > 5;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ message: "Too many attempts. Please try again shortly." }, { status: 429 });

  try {
    const json = await request.json();
    const result = contactSchema.safeParse(json);
    if (!result.success) return NextResponse.json({ message: "Please check the highlighted information.", errors: result.error.flatten().fieldErrors }, { status: 400 });
    if (result.data.website) return NextResponse.json({ ok: true });
    await sendContactEmail(result.data);
    return NextResponse.json({ ok: true, message: "Thanks — your message has been sent." });
  } catch (error) {
    const code = error instanceof Error ? error.message : "UNKNOWN";
    const configurationError = code === "MAIL_CONFIG_MISSING" || code === "MAIL_CONFIG_INVALID";
    console.error("Contact submission failed", { code });
    return NextResponse.json({ message: configurationError ? "Email delivery is not configured yet. Please contact us directly." : "We couldn't send your message right now. Please wait a moment and try again." }, { status: 500 });
  }
}
