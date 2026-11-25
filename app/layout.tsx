import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sherubhai-official.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sheru Bhai Official — The Mega Video Bundle",
    template: "%s | Sheru Bhai Official",
  },
  description:
    "Enter the Sheru Bhai universe. Discover the 5,000+ AI video Mega Bundle for Reels, Shorts and creators.",
  applicationName: "Sheru Bhai Official",
  openGraph: {
    title: "Sheru Bhai Official — Mega Video Bundle",
    description: "5,000+ Sheru Bhai AI videos. One legendary collection.",
    siteName: "Sheru Bhai Official",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheru Bhai Official — Mega Video Bundle",
    description: "5,000+ Sheru Bhai AI videos. One legendary collection.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}