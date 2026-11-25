import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sheru Bhai Official — 5,000+ AI Story Reels",
    template: "%s | Sheru Bhai Official",
  },
  description:
    "Bringing Sheru's stories to life. Explore the Sheru Bhai Official 5,000+ AI story video Mega Bundle for Reels, Shorts and creators.",
  applicationName: "Sheru Bhai Official",
  openGraph: {
    title: "Sheru Bhai Official — The Mega Video Bundle",
    description: "5,000+ Sheru Bhai AI story videos. One legendary collection.",
    siteName: "Sheru Bhai Official",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheru Bhai Official — The Mega Video Bundle",
    description: "5,000+ Sheru Bhai AI story videos. One legendary collection.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#101b3b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}