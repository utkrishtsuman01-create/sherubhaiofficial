import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sherubhaiofficial.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sheru Bhai AI Stories Bundle — 5,000+ Videos for ₹149",
  description: "Explore the Sheru Bhai AI Stories Bundle: 5,000+ ready-to-use AI story videos. No editing required. Introductory one-time price ₹149. Secure checkout coming soon.",
  applicationName: "Sheru Bhai Official",
  openGraph: {
    title: "Sheru Bhai AI Stories Bundle — 5,000+ Videos",
    description: "A huge collection of ready-to-use AI story videos. No editing required. ₹149 introductory price.",
    siteName: "Sheru Bhai Official",
    type: "website",
    images: [{ url: "/images/sheru-bundle-banner.svg", width: 1600, height: 1050, alt: "Sheru Bhai 5000+ AI Stories Bundle" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheru Bhai AI Stories Bundle",
    description: "5,000+ ready-to-use AI story videos. No editing required. ₹149.",
    images: ["/images/sheru-bundle-banner.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08080d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
