import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  title: "CrazyReels — Premium Reels for Your Growth",
  description: "Discover ready-to-use reels bundles for creators, social media managers and brands. Preview your bundle, explore the details and get ready to post.",
  applicationName: "CrazyReels",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  icons: { icon: "/crazyreels-logo.svg", shortcut: "/crazyreels-logo.svg", apple: "/crazyreels-logo.svg" },
  openGraph: {
    title: "CrazyReels — Premium Reels for Your Growth",
    description: "Discover ready-to-use reels bundles for creators, social media managers and brands.",
    siteName: "CrazyReels",
    type: "website",
    images: [{ url: "/crazyreels-logo.svg", alt: "CrazyReels logo" }],
  },
  twitter: {
    card: "summary",
    title: "CrazyReels — Premium Reels for Your Growth",
    description: "Ready-to-use digital reels bundles for creators and businesses.",
    images: ["/crazyreels-logo.svg"],
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#7438f2", colorScheme: "light" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
