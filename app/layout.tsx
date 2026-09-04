import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://incorporatewise.com"),
  title: {
    default: "Incorporate Wise | US Business Formation",
    template: "%s | Incorporate Wise",
  },
  description:
    "Form and manage your US company from anywhere with Incorporate Wise.",
  applicationName: "Incorporate Wise",
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

export const viewport: Viewport = { themeColor: "#2563eb" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
