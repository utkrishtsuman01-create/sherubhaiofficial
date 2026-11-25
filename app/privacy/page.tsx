import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <Link href="/" className="brand"><span className="lion-mark">✦</span><span className="brand-copy"><strong>SHERU BHAI</strong><small>OFFICIAL UNIVERSE</small></span></Link>
        <Link href="/" className="header-cta">Back to home <ArrowLeft size={14} /></Link>
      </header>
      <article className="legal-main">
        <div className="eyebrow"><span /> YOUR PRIVACY MATTERS</div>
        <h1>Privacy policy.</h1>
        <p><strong>Last updated: November 2026</strong></p>
        <p>This launch-stage website currently provides product information and links to our Instagram profile. Checkout and customer accounts are not active yet.</p>
        <h2>Information we may collect</h2>
        <p>When online checkout is enabled, we may collect information needed to process an order and deliver a digital product, such as a name, email address, order reference and payment status. Full card or UPI credentials are handled by the payment provider and are not stored by this website.</p>
        <h2>How information is used</h2>
        <p>Order information will be used to confirm purchases, provide digital delivery, respond to support requests, prevent fraud and meet applicable legal obligations.</p>
        <h2>Sharing and security</h2>
        <p>Information may be shared with service providers required to host the website, process payments and deliver the product. We will use reasonable technical safeguards and will not publish customer payment details.</p>
        <h2>Contact</h2>
        <p>For privacy questions, contact us through <a href="https://www.instagram.com/sherubhai.officialo/" target="_blank" rel="noreferrer">@sherubhai.officialo on Instagram</a>.</p>
        <p>This policy will be updated with the final payment, storage and delivery providers before checkout is activated.</p>
      </article>
    </main>
  );
}