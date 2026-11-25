import Link from "next/link";
import { Check, Instagram, LockKeyhole, Play, Sparkles, Video, Zap } from "lucide-react";

const instagram = "https://www.instagram.com/sherubhai.officialo/";

const benefits = [
  { icon: Video, title: "5000+ AI story videos", body: "A huge collection of short-form story videos in one bundle." },
  { icon: Zap, title: "No editing required", body: "Skip complicated editing. Choose a video and get it ready to share." },
  { icon: Play, title: "Made for content creators", body: "Use the videos as a starting point for your Reels, Shorts and social content." },
  { icon: Sparkles, title: "A range of story themes", body: "Explore different moods and story styles instead of starting from a blank screen." },
];

const faqs = [
  ["What am I getting?", "The Sheru Bhai AI Stories Bundle: a digital collection containing 5,000+ AI story videos."],
  ["Do I need editing skills?", "No. The collection is presented as ready-to-use videos, so you do not need editing skills to get started."],
  ["Where can I use the videos?", "They are intended for short-form social content such as Instagram Reels and YouTube Shorts. Always check each platform’s rules and the usage rights supplied with the bundle."],
  ["How much does it cost?", "The listed introductory price is ₹149 as a one-time payment. There is no active checkout yet."],
  ["How will I receive the bundle?", "After checkout is activated, the page will explain the delivery process. The download folder will only be shared after a successful payment is verified."],
  ["Is payment available right now?", "Not yet. PhonePe checkout is being arranged. Please do not send money to personal UPI IDs or anyone claiming to take payment on this page."],
];

export default function HomePage() {
  return (
    <main className="product-page">
      <div className="announcement"><span>✦</span> THE SHERU BHAI AI STORIES BUNDLE <span>✦</span> 5000+ VIDEOS</div>
      <header className="product-header">
        <Link href="/" className="brand-lockup" aria-label="Sheru Bhai home">
          <img src="/images/sheru-logo.webp" alt="Sheru Bhai lion logo" />
          <span><b>SHERU BHAI</b><small>OFFICIAL BUNDLE</small></span>
        </Link>
        <a className="instagram-link" href={instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> <span>Follow us</span></a>
      </header>

      <section className="product-hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> YOUR CONTENT CREATION SHORTCUT</div>
          <h1>5000+ STORIES.<br/><em>ZERO EDITING.</em></h1>
          <p className="hero-lede">Meet the Sheru Bhai AI Stories Bundle — a massive collection of ready-to-use AI story videos for creators who want to spend less time making content and more time sharing it.</p>
          <div className="hero-checks">
            <span><Check size={17}/> 5,000+ AI story videos</span>
            <span><Check size={17}/> Ready to use — no editing required</span>
            <span><Check size={17}/> One simple digital bundle</span>
          </div>
          <div className="purchase-panel">
            <div><small>INTRODUCTORY ONE-TIME PRICE</small><strong>₹149</strong><span>No subscription shown. Pay once when checkout opens.</span></div>
            <button className="buy-disabled" type="button" disabled><LockKeyhole size={18}/> PAYMENT COMING SOON</button>
          </div>
          <p className="payment-note">PhonePe checkout is being set up. No payment is being accepted on this page right now.</p>
        </div>
        <div className="hero-art">
          <div className="art-glow"/>
          <img src="/images/sheru-logo.webp" alt="Sheru Bhai crowned lion mascot" className="hero-mascot"/>
          <div className="floating-tag tag-top">THE CREATOR&apos;S BUNDLE</div>
          <div className="floating-tag tag-bottom"><b>5000+</b><span>AI STORY VIDEOS</span></div>
        </div>
      </section>

      <section className="banner-section" aria-label="Sheru Bhai product banner">
        <div className="section-kicker">THE BUNDLE AT A GLANCE</div>
        <img className="product-banner" src="/images/sheru-bundle-banner.svg" alt="Sheru Bhai AI Stories Bundle: 5000 plus ready-to-use videos, no editing required, introductory price 149 rupees. Payment coming soon."/>
      </section>

      <section className="benefits-section">
        <div className="section-heading"><div className="section-kicker">WHY CREATORS WILL LOVE IT</div><h2>LESS TIME EDITING.<br/><em>MORE TIME CREATING.</em></h2><p>Starting from scratch takes time. This bundle gives you a library of story videos to explore whenever you need content inspiration.</p></div>
        <div className="benefit-grid">{benefits.map(({icon: Icon,title,body})=><article className="benefit-card" key={title}><div className="benefit-icon"><Icon size={23}/></div><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>

      <section className="how-section">
        <div className="section-heading"><div className="section-kicker">SIMPLE BY DESIGN</div><h2>FROM BUNDLE TO<br/><em>YOUR NEXT POST.</em></h2></div>
        <div className="steps-grid"><article><b>01</b><h3>Get the bundle</h3><p>Complete the payment once checkout is available.</p></article><article><b>02</b><h3>Access your videos</h3><p>Follow the delivery instructions shown after a verified purchase.</p></article><article><b>03</b><h3>Choose & share</h3><p>Pick a video that fits your idea and publish it on your chosen platform.</p></article></div>
      </section>

      <section className="price-section" id="bundle">
        <div className="price-card">
          <div className="price-copy"><div className="section-kicker">ONE BUNDLE. ONE PAYMENT.</div><h2>MAKE YOUR<br/><em>CONTENT FLOW.</em></h2><p>Get access to a collection of 5,000+ AI story videos without needing to edit every clip yourself.</p><div className="price-includes"><span><Check size={17}/> 5,000+ AI story videos</span><span><Check size={17}/> Ready-to-use video format</span><span><Check size={17}/> No editing skills needed</span></div></div>
          <div className="price-box"><small>INTRODUCTORY PRICE</small><strong>₹149</strong><span>ONE-TIME PAYMENT</span><button type="button" disabled><LockKeyhole size={18}/> CHECKOUT COMING SOON</button><p>We will enable secure PhonePe checkout here once the merchant setup is ready.</p></div>
        </div>
      </section>

      <section className="faq-section"><div className="section-heading"><div className="section-kicker">GOOD TO KNOW</div><h2>YOUR QUESTIONS.<br/><em>ANSWERED.</em></h2></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="last-call"><img src="/images/sheru-logo.webp" alt="" /><div><div className="section-kicker">FOLLOW THE SHERU BHAI UNIVERSE</div><h2>MORE STORIES.<br/><em>MORE SHERU.</em></h2><p>Follow our Instagram page for updates about the bundle and its launch.</p><a href={instagram} target="_blank" rel="noreferrer" className="instagram-cta"><Instagram size={18}/> @sherubhai.officialo</a></div></section>

      <footer className="product-footer"><Link href="/" className="footer-brand">SHERU BHAI <span>OFFICIAL</span></Link><p>Digital product information. Checkout is not active yet.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div><small>© 2026 Sheru Bhai Official</small></footer>
    </main>
  );
}
