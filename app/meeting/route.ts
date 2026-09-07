import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const configured = process.env.MEETING_URL?.trim();
  try {
    const normalized = configured && !/^https?:\/\//i.test(configured)
      ? `https://${configured}`
      : configured;
    const url = new URL(normalized || "");
    if (url.protocol !== "https:") throw new Error("Invalid protocol");
    return NextResponse.redirect(url, 307);
  } catch {
    return NextResponse.redirect(new URL("/contact?meeting=unavailable", request.url), 307);
  }
}
