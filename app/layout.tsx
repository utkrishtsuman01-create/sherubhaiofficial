import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
export const metadata:Metadata={title:"CrazyReels — Premium Reels for Your Growth",description:"Discover ready-to-use digital reels bundles for creators, social media managers and brands.",applicationName:"CrazyReels",metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"https://crazyreels.vercel.app"),openGraph:{title:"CrazyReels — Premium Reels for Your Growth",description:"Find your next scroll-stopping idea with curated reels bundles.",images:["/crazyreels-logo.svg"],type:"website"},robots:{index:true,follow:true}};
export const viewport:Viewport={themeColor:"#7438f2",colorScheme:"light"};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
