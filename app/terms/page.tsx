import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <Link href="/" className="brand"><span className="lion-mark">✦</span><span className="brand-copy"><strong>SHERU BHAI</strong><small>OFFICIAL UNIVERSE</small></span></Link>
        <Link href="/" className="header-cta">Back to home <ArrowLeft size={14} /></Link>
      </header>
      <article className="legal-main">
        <div className="eyebrow"><span /> THE FINE PRINT</div>
        <h1>Terms of use.</h1>
        <p><strong>Last updated: November 2026</strong></p>
        <p>This website is the online storefront for Sheru Bhai Official. The digital product is planned to be offered as a one-time purchase. Checkout is not active until the payment provider and delivery process are configured.</p>
        <h2>Digital content</h2>
        <p>Product descriptions, file counts, formats and access instructions will be confirmed on the checkout page before a purchase can be completed. Do not assume that a purchase includes resale, sublicensing or redistribution rights unless those rights are expressly stated in writing.</p>
        <h2>Payments and delivery</h2>
        <p>When checkout launches, payments will be processed by the payment provider displayed at checkout. Digital access will be enabled only after the payment is verified by our server. Never share payment credentials or OTPs with anyone claiming to represent this website.</p>
        <h2>Contact</h2>
        <p>For product questions, contact us through <a href="https://www.instagram.com/sherubhai.officialo/" target="_blank" rel="noreferrer">@sherubhai.officialo on Instagram</a>.</p>
        <p>These are launch-stage terms and will be reviewed and completed before paid checkout is enabled.</p>
      </article>
    </main>
  );
}