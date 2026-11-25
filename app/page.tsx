import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Crown,
  Download,
  Film,
  Instagram,
  LockKeyhole,
  Play,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/sherubhai.officialo/";

const faqs = [
  {
    q: "What is the Sheru Bhai Mega Bundle?",
    a: "It is a digital collection of 5,000+ Sheru Bhai-style AI videos, intended for short-form entertainment and creator inspiration.",
  },
  {
    q: "How much does it cost?",
    a: "The planned launch price is ₹149 as a one-time payment. The checkout will open after payment-gateway onboarding is complete.",
  },
  {
    q: "How will I receive the videos?",
    a: "After checkout is enabled, successful payments will be verified by the payment provider on our server. The website will then show the digital delivery instructions.",
  },
  {
    q: "Can I watch samples first?",
    a: "Yes. Sample clips will be added here before the store opens. Follow our Instagram page for new Sheru Bhai videos in the meantime.",
  },
  {
    q: "Can I resell or redistribute the videos?",
    a: "The bundle is not advertised as a resale-rights product. Please check the final usage terms shown at checkout before purchasing.",
  },
];

function LionMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "lion-mark lion-mark-small" : "lion-mark"} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 5 42 14 55 15 51 28 58 39 45 45 40 58 28 52 15 57 14 43 5 35 13 24 12 12 25 14Z" />
        <path d="m21 25 6 3 5-4 5 4 6-3-2 13-9 8-9-8Z" />
        <path d="M26 34h.1M38 34h.1M29 40q3 3 6 0" />
      </svg>
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <Sparkles size={13} />
        <span>THE SHERU BHAI UNIVERSE IS GETTING BIGGER</span>
        <Sparkles size={13} />
      </div>

      <header className="site-header">
        <Link href="/" className="brand" aria-label="Sheru Bhai Official home">
          <LionMark />
          <span className="brand-copy">
            <strong>SHERU BHAI</strong>
            <small>OFFICIAL UNIVERSE</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="#collection">The Collection</Link>
          <Link href="#why-us">Why Sheru</Link>
          <Link href="#faq">FAQs</Link>
        </nav>

        <a className="header-cta" href="#bundle">
          Explore bundle <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-copy">
          <SectionEyebrow>THE INTERNET HAS A NEW KING</SectionEyebrow>
          <h1>
            NOT JUST A
            <span className="headline-outline">CHARACTER.</span>
            <span className="headline-gold">A WHOLE</span>
            <span className="headline-gold">UNIVERSE.</span>
          </h1>
          <p className="hero-description">
            The attitude. The chaos. The legendary moments.
            Step inside the Sheru Bhai universe and bring the energy to your next Reel.
          </p>
          <div className="hero-actions">
            <a href="#bundle" className="button button-primary">
              Discover the mega bundle <ArrowRight size={17} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="button button-ghost">
              <Instagram size={17} /> Follow on Instagram
            </a>
          </div>
          <div className="hero-proof">
            <span className="proof-icon"><Film size={15} /></span>
            <span><strong>5,000+</strong><small>videos in the collection</small></span>
            <i />
            <span><strong>ONE</strong><small>mega bundle</small></span>
            <i />
            <span><strong>₹149</strong><small>planned launch price</small></span>
          </div>
        </div>

        <div className="hero-art" aria-label="Original Sheru Bhai lion-inspired artwork">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-halo" />
          <div className="art-sun" />
          <div className="art-crown"><Crown size={25} strokeWidth={1.2} /></div>
          <div className="lion-emblem">
            <svg viewBox="0 0 440 500" role="img" aria-label="Stylized golden lion emblem">
              <defs>
                <linearGradient id="mane" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fff0b9" />
                  <stop offset=".38" stopColor="#dca94f" />
                  <stop offset="1" stopColor="#6f421b" />
                </linearGradient>
                <linearGradient id="face" x1="0" y1="0" x2="0.9" y2="1">
                  <stop offset="0" stopColor="#f9e3a2" />
                  <stop offset="1" stopColor="#a76a2b" />
                </linearGradient>
                <filter id="shadow"><feGaussianBlur stdDeviation="12" /></filter>
              </defs>
              <ellipse cx="220" cy="442" rx="118" ry="18" fill="#d69b42" opacity=".22" filter="url(#shadow)" />
              <path d="M220 30 263 72 319 51 326 112 382 139 357 194 398 244 352 287 361 350 299 365 272 426 220 397 168 426 141 365 79 350 88 287 42 244 83 194 58 139 114 112 121 51 177 72Z" fill="url(#mane)" opacity=".96" />
              <path d="M220 82 255 112 302 103 296 150 333 181 306 222 320 269 276 289 263 338 220 321 177 338 164 289 120 269 134 222 107 181 144 150 138 103 185 112Z" fill="#17120d" stroke="#f3d58e" strokeWidth="5" />
              <path d="M151 172 190 145 220 160 250 145 289 172 281 246 250 294 220 314 190 294 159 246Z" fill="url(#face)" />
              <path d="m158 192 44-13 18 19-19 20-43-5ZM282 192l-44-13-18 19 19 20 43-5Z" fill="#17120d" />
              <path d="m174 203 31 3-15 9ZM266 203l-31 3 15 9Z" fill="#f8d77f" />
              <path d="m205 253 15-9 15 9-15 13Z" fill="#2a1710" />
              <path d="M220 266v19m0 0q-22 18-39-1m39 1q22 18 39-1" stroke="#2a1710" strokeWidth="6" strokeLinecap="round" />
              <path d="m156 253-35 15m43-2-31 28m151-41 35 15m-43-2 31 28" stroke="#f8df9e" strokeWidth="4" strokeLinecap="round" opacity=".8" />
              <path d="m183 315 37 22 37-22-14 58-23 17-23-17Z" fill="#17120d" stroke="#d7a64f" strokeWidth="4" />
              <path d="m195 341 25 14 25-14-9 25-16 11-16-11Z" fill="#b77b35" />
            </svg>
          </div>
          <div className="art-caption">
            <span className="caption-line" />
            <span>THE LEGEND LIVES HERE</span>
            <span className="caption-line" />
          </div>
          <div className="floating-tag tag-top"><Zap size={13} /> MAIN CHARACTER ENERGY</div>
          <div className="floating-tag tag-bottom"><Sparkles size={13} /> BUILT FOR THE FEED</div>
        </div>
        <a className="scroll-cue" href="#collection"><ArrowDown size={14} /> SCROLL TO ENTER</a>
      </section>

      <section className="ticker" aria-label="Collection highlights">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="ticker-set" key={i}>
              <span>SHERU BHAI</span><b>✦</b><span>5,000+ VIDEOS</span><b>✦</b><span>REELS READY</span><b>✦</b><span>THE MEGA BUNDLE</span><b>✦</b>
            </div>
          ))}
        </div>
      </section>

      <section className="intro-section section-wrap" id="collection">
        <div className="intro-heading">
          <SectionEyebrow>WELCOME TO THE UNIVERSE</SectionEyebrow>
          <h2>THE FEED IS YOURS.<br /><em>MAKE IT LEGENDARY.</em></h2>
        </div>
        <div className="intro-copy">
          <p>One character. Endless moments. A collection made for creators who want their content to stand out in the scroll.</p>
          <a href="#bundle" className="text-link">Meet the mega bundle <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="showcase-section section-wrap">
        <div className="section-topline">
          <SectionEyebrow>THE SHERU BHAI EXPERIENCE</SectionEyebrow>
          <span className="section-index">01 / THE VIBE</span>
        </div>
        <div className="showcase-grid">
          <article className="showcase-card showcase-card-large">
            <div className="showcase-visual visual-cinematic">
              <div className="visual-noise" />
              <div className="visual-ring" />
              <div className="visual-number">01</div>
              <div className="visual-word">ICONIC<br /><i>ENERGY.</i></div>
              <div className="visual-sub">EVERY FRAME HAS A STORY</div>
            </div>
            <div className="showcase-card-copy"><span>01 — THE AURA</span><h3>Big-screen energy.<br />Pocket-size format.</h3></div>
          </article>
          <article className="showcase-card">
            <div className="showcase-visual visual-gold">
              <div className="gold-rays" />
              <Crown className="showcase-crown" size={62} strokeWidth={1} />
              <div className="gold-word">BOSS<br />MODE</div>
              <div className="visual-number">02</div>
            </div>
            <div className="showcase-card-copy"><span>02 — THE ATTITUDE</span><h3>Made to stop<br />the scroll.</h3></div>
          </article>
          <article className="showcase-card">
            <div className="showcase-visual visual-night">
              <div className="night-orb" />
              <div className="night-word">OWN<br /><i>THE FEED.</i></div>
              <div className="visual-number">03</div>
              <div className="night-stars">✦　·　✧　·　✦</div>
            </div>
            <div className="showcase-card-copy"><span>03 — THE MOMENT</span><h3>Your next Reel's<br />new main character.</h3></div>
          </article>
        </div>
        <p className="preview-note"><Sparkles size={14} /> These are original brand visuals. Actual video previews will be added before checkout opens.</p>
      </section>

      <section className="bundle-section" id="bundle">
        <div className="bundle-backdrop" />
        <div className="bundle-inner section-wrap">
          <div className="bundle-copy">
            <SectionEyebrow>THE ONE AND ONLY DROP</SectionEyebrow>
            <h2>THE MEGA<br /><span>VIDEO BUNDLE.</span></h2>
            <p className="bundle-lede">Everything Sheru. All in one place.</p>
            <p className="bundle-description">A massive digital collection of 5,000+ AI videos for creators, meme pages and short-form entertainment fans.</p>
            <div className="bundle-checks">
              <span><Check size={15} /> 5,000+ video collection</span>
              <span><Check size={15} /> Made for Reels & Shorts</span>
              <span><Check size={15} /> One-time purchase</span>
              <span><Check size={15} /> Digital access after verified payment</span>
            </div>
          </div>
          <div className="price-card">
            <div className="price-card-top"><span>SHERU BHAI OFFICIAL</span><Crown size={18} /></div>
            <div className="price-art"><LionMark /><span>THE MEGA<br />COLLECTION</span><small>LIMITLESS SCROLL ENERGY</small></div>
            <div className="price-count"><strong>5,000<span>+</span></strong><small>AI VIDEO COLLECTION</small></div>
            <div className="price-divider"><span /><Sparkles size={13} /><span /></div>
            <div className="price-line"><small>PLANNED LAUNCH PRICE</small><div><strong>₹149</strong><span>ONE TIME</span></div></div>
            <a className="button button-primary button-full button-disabled" href="#checkout" aria-label="Checkout will open soon">
              Checkout opening soon <LockKeyhole size={16} />
            </a>
            <p className="secure-note"><ShieldCheck size={13} /> Secure payment checkout is being set up</p>
          </div>
        </div>
      </section>

      <section className="why-section section-wrap" id="why-us">
        <div className="why-title">
          <SectionEyebrow>WHY THE MEGA BUNDLE</SectionEyebrow>
          <h2>LESS SEARCHING.<br /><em>MORE CREATING.</em></h2>
          <p>Spend less time hunting for clips and more time creating your next post.</p>
        </div>
        <div className="benefit-list">
          <div className="benefit-item"><span className="benefit-icon"><Film /></span><div><small>01 / A BIG COLLECTION</small><h3>5,000+ videos in one bundle</h3><p>A huge library gathered into one digital collection.</p></div><ArrowUpRight /></div>
          <div className="benefit-item"><span className="benefit-icon"><Play /></span><div><small>02 / SHORT-FORM READY</small><h3>Made for the vertical feed</h3><p>Content designed around the pace of Reels and Shorts.</p></div><ArrowUpRight /></div>
          <div className="benefit-item"><span className="benefit-icon"><Download /></span><div><small>03 / DIGITAL ACCESS</small><h3>No physical delivery</h3><p>Access instructions appear online after payment is verified.</p></div><ArrowUpRight /></div>
        </div>
      </section>

      <section className="social-section">
        <div className="social-inner section-wrap">
          <div className="social-orbit" aria-hidden="true"><LionMark /></div>
          <div className="social-copy">
            <SectionEyebrow>THE STORY CONTINUES ON INSTAGRAM</SectionEyebrow>
            <h2>FOLLOW THE<br /><span>LEGEND.</span></h2>
            <p>New clips. New chaos. More Sheru Bhai. Join the community and catch the next drop.</p>
            <a className="button button-primary" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> @sherubhai.officialo <ArrowUpRight size={16} /></a>
          </div>
          <div className="social-handle"><span>OFFICIAL HANDLE</span><strong>@sherubhai.<br />officialo</strong><small>FOLLOW FOR THE NEXT DROP ↗</small></div>
        </div>
      </section>

      <section className="faq-section section-wrap" id="faq">
        <div className="faq-heading">
          <SectionEyebrow>GOOD QUESTION</SectionEyebrow>
          <h2>THE DETAILS.<br /><em>NO MYSTERY.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details className="faq-item" key={item.q} open={index === 0}>
              <summary><span className="faq-number">0{index + 1}</span><strong>{item.q}</strong><ChevronDown size={18} /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="checkout-section section-wrap" id="checkout">
        <div className="checkout-card">
          <div className="checkout-symbol"><LockKeyhole size={24} /></div>
          <SectionEyebrow>WE'RE GETTING CHECKOUT READY</SectionEyebrow>
          <h2>THE DROP IS<br /><em>ALMOST HERE.</em></h2>
          <p>We're setting up secure online payments and instant digital delivery. Follow Sheru Bhai Official on Instagram so you don't miss the launch.</p>
          <a className="button button-primary" href={instagramUrl} target="_blank" rel="noreferrer">Follow for launch updates <ArrowUpRight size={16} /></a>
          <small>No payment is collected on this page yet.</small>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <Link href="/" className="brand footer-brand"><LionMark /><span className="brand-copy"><strong>SHERU BHAI</strong><small>OFFICIAL UNIVERSE</small></span></Link>
          <p>One character. A whole universe.<br />Stay legendary.</p>
          <div className="footer-links"><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} SHERU BHAI OFFICIAL</span><span>MADE FOR THE FEED <b>✦</b></span></div>
      </footer>
    </main>
  );
}