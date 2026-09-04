import { NextResponse } from "next/server";

export function GET(request: Request) {
  const raw = process.env.MEETING_URL;
  try {
    const url = new URL(raw || "");
    if (url.protocol !== "https:") throw new Error("Invalid protocol");
    return NextResponse.redirect(url, 307);
  } catch {
    return NextResponse.redirect(new URL("/contact?meeting=unavailable", request.url), 307);
  }
}
