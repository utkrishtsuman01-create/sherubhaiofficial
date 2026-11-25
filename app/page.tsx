import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clapperboard,
  Crown,
  Film,
  Heart,
  Instagram,
  LockKeyhole,
  Mountain,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Theater,
  Zap,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/sherubhai.officialo/";

const categories = [
  { name: "Adventure & Mystery", caption: "Big quests. Bigger twists.", icon: Mountain, tone: "adventure" },
  { name: "Comedy & Drama", caption: "A little chaos. A lot of story.", icon: Theater, tone: "comedy" },
  { name: "Suspense & Love", caption: "Plot twists with a heartbeat.", icon: Heart, tone: "romance" },
  { name: "School & College", caption: "Campus stories, Sheru style.", icon: Star, tone: "campus" },
];

const faqs = [
  {
    q: "What is the Sheru Bhai Mega Bundle?",
    a: "It is a planned digital collection of 5,000+ Sheru Bhai AI story videos for people who enjoy making and sharing short-form content.",
  },
  {
    q: "How much will the bundle cost?",
    a: "The planned launch price is ₹149 as a one-time purchase. The final checkout details will be shown before payment is enabled.",
  },
  {
    q: "How will I receive the collection?",
    a: "The website is being prepared for automatic digital delivery. Access will be unlocked only after the payment provider confirms the transaction to our server.",
  },
  {
    q: "Can I see the actual videos first?",
    a: "We will add real sample clips from the collection before checkout opens. The illustrated scenes on this page are promotional artwork, not downloadable video previews.",
  },
  {
    q: "Can I resell or redistribute the videos?",
    a: "This offer is not currently advertised with resale rights. Please read the final usage terms shown on the checkout page before purchasing.",
  },
];

function LionMark() {
  return (
    <span className="lion-mark" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M32 5 42 14 55 15 51 28 58 39 45 45 40 58 28 52 15 57 14 43 5 35 13 24 12 12 25 14Z" />
        <path d="m21 25 6 3 5-4 5 4 6-3-2 13-9 8-9-8Z" />
        <path d="M26 34h.1M38 34h.1M29 40q3 3 6 0" />
      </svg>
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span />{children}</div>;
}

function LionHero() {
  return (
    <svg className="lion-hero-svg" viewBox="0 0 560 650" role="img" aria-label="Original illustrated lion character in a burgundy jacket">
      <defs>
        <linearGradient id="maneFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff0c5" />
          <stop offset=".28" stopColor="#e8b969" />
          <stop offset=".68" stopColor="#a85e2d" />
          <stop offset="1" stopColor="#54251c" />
        </linearGradient>
        <linearGradient id="maneShadow" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#9b4b24" />
          <stop offset="1" stopColor="#321718" />
        </linearGradient>
        <linearGradient id="faceFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff0c8" />
          <stop offset=".55" stopColor="#dca45b" />
          <stop offset="1" stopColor="#9b5d35" />
        </linearGradient>
        <linearGradient id="jacketFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b82e35" />
          <stop offset=".45" stopColor="#651a28" />
          <stop offset="1" stopColor="#260f1b" />
        </linearGradient>
        <linearGradient id="goldFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3b2" />
          <stop offset=".5" stopColor="#e9b647" />
          <stop offset="1" stopColor="#985b1d" />
        </linearGradient>
        <filter id="lionShadow" x="-40%" y="-30%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="11" />
          <feOffset dy="16" />
          <feComponentTransfer><feFuncA type="linear" slope=".42" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <ellipse cx="287" cy="607" rx="178" ry="21" fill="#070a19" opacity=".65" />
      <g filter="url(#lionShadow)">
        <path d="m275 29 36 35 50-23 17 54 58 1-1 58 51 25-23 54 39 42-42 41 17 57-56 13-13 59-57-15-42 42-40-42-58 16-14-60-57-14 18-57-43-42 40-42-23-54 52-25-1-57 58-2 17-53 50 24Z" fill="url(#maneFill)" stroke="#ffe6a6" strokeWidth="5" strokeLinejoin="round" />
        <path d="m275 62 30 37 47-15 13 49 47 11-10 47 34 35-32 38 18 45-45 20-4 47-48-3-28 41-43-28-43 28-28-41-48 3-4-47-45-20 18-45-32-38 34-35-10-47 47-11 13-49 47 15Z" fill="url(#maneShadow)" stroke="#8d4a2d" strokeWidth="4" />
        <path d="M170 204q-14-67 34-96 25-18 69-17 44-1 69 17 48 29 34 96l-17 119q-15 73-86 99-71-26-86-99Z" fill="url(#faceFill)" stroke="#8b4f2c" strokeWidth="5" />
        <path d="M174 180q38-63 103-60 65-3 103 60l-31 34-72-11-72 11Z" fill="#e6b96d" opacity=".9" />
        <path d="M197 215q34-36 76-9l-18 32-58-2ZM358 215q-34-36-76-9l18 32 58-2Z" fill="#2a1720" />
        <path d="m208 219 47 2-27 18ZM347 219l-47 2 27 18Z" fill="#f2d28c" />
        <path d="M193 201q34-25 72-7M286 194q38-18 72 7" fill="none" stroke="#6d3627" strokeWidth="12" strokeLinecap="round" />
        <path d="m246 279 41-17 41 17-15 39q-26 21-52 0Z" fill="#73402b" />
        <path d="m267 288 20-10 20 10-20 18Z" fill="#25121a" />
        <path d="M287 307v23m0 0q-32 25-56-4m56 4q32 25 56-4" fill="none" stroke="#5c2d26" strokeWidth="8" strokeLinecap="round" />
        <path d="m207 309-50 13m65 5-48 27m192-45 50 13m-65 5 48 27" stroke="#fff0c8" strokeWidth="4" strokeLinecap="round" opacity=".9" />

        <path d="M91 631q15-138 93-188l77-19 26 37 27-37 77 19q78 50 93 188Z" fill="url(#jacketFill)" stroke="#41131e" strokeWidth="6" />
        <path d="m207 443 54-31 26 51 27-51 54 31-35 188h-90Z" fill="#f2eadb" />
        <path d="m206 442 55-30-16 89-56-37Zm162 0-55-30 16 89 56-37Z" fill="#8b2630" stroke="#d65b50" strokeWidth="4" />
        <path d="m261 412 26 51 27-51" fill="none" stroke="#f7d78c" strokeWidth="5" />
        <path d="m285 471 17 14-17 15-17-15Z" fill="url(#goldFill)" />
        <path d="M287 500v55m0 0-15 17m15-17 15 17" stroke="url(#goldFill)" strokeWidth="5" strokeLinecap="round" />
        <path d="M177 466q-28 47-28 112m230-112q28 47 28 112" fill="none" stroke="#d65b50" strokeWidth="5" opacity=".7" />
        <path d="m128 512 43 12-18 28-45-13m324-27-43 12 18 28 45-13" fill="#d9a34e" opacity=".8" />
        <path d="m111 565 42-6m255 0 42 6" stroke="#f4d58f" strokeWidth="5" strokeLinecap="round" />

        <path d="M118 337q-54-12-62 25-8 41 45 52l74-28-18-49Z" fill="url(#faceFill)" stroke="#8b4f2c" strokeWidth="5" />
        <path d="M71 353q29-11 51 11l-20 20q-30-3-31-31Z" fill="#fff0c8" />
        <path d="M432 337q54-12 62 25 8 41-45 52l-74-28 18-49Z" fill="url(#faceFill)" stroke="#8b4f2c" strokeWidth="5" />
        <path d="M479 353q-29-11-51 11l20 20q30-3 31-31Z" fill="#fff0c8" />
        <path d="m196 388 16-18m179 18-16-18" stroke="#f7dda0" strokeWidth="6" strokeLinecap="round" />
        <path d="M178 389q-17 19-24 43m245-43q17 19 24 43" fill="none" stroke="#e8b866" strokeWidth="5" opacity=".8" />
        <path d="M192 434q-30 22-46 58m278-58q30 22 46 58" fill="none" stroke="#d54a4c" strokeWidth="8" strokeLinecap="round" />
      </g>
      <path d="M232 356q55 28 110 0" stroke="#fff0c8" strokeWidth="3" opacity=".35" fill="none" />
      <path d="M255 365q32 13 64 0" stroke="#fff0c8" strokeWidth="2" opacity=".3" fill="none" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="top-ribbon">
        <Sparkles size={13} />
        <span>THE SHERU BHAI UNIVERSE</span>
        <span className="ribbon-dot">✦</span>
        <span>5,000+ STORIES. ONE MEGA COLLECTION.</span>
        <Sparkles size={13} />
      </div>

      <header className="site-header">
        <Link href="/" className="brand" aria-label="Sheru Bhai Official home">
          <LionMark />
          <span className="brand-copy"><strong>SHERU BHAI</strong><small>OFFICIAL</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="#collection">The bundle</Link>
          <Link href="#categories">Story genres</Link>
          <Link href="#faq">FAQs</Link>
        </nav>
        <a className="header-cta" href="#bundle">Get the bundle <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero-poster" aria-labelledby="hero-title">
        <div className="hero-bg-grid" />
        <div className="hero-light hero-light-a" />
        <div className="hero-light hero-light-b" />

        <div className="hero-heading">
          <SectionLabel>BRINGING SHERU'S STORIES TO LIFE</SectionLabel>
          <h1 id="hero-title">THE KING<br /><em>OF THE FEED.</em></h1>
          <p>Big-screen imagination. Scroll-stopping Sheru energy. A whole universe of AI story videos made for your content era.</p>
          <div className="hero-buttons">
            <a href="#bundle" className="button button-yellow">Explore the mega bundle <ArrowRight size={17} /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="button button-glass"><Instagram size={16} /> Follow Sheru</a>
          </div>
          <div className="hero-social-proof">
            <span><strong>4.5K+</strong><small>Instagram community</small></span>
            <i />
            <span><strong>5,000+</strong><small>Videos in the bundle</small></span>
          </div>
        </div>

        <div className="hero-collage">
          <div className="collage-backdrop" />
          <div className="scene-card scene-garden">
            <span className="scene-tag">01 · THE ROYAL ENTRY</span>
            <div className="scene-silhouette">♛</div>
            <strong>MAKE AN<br />ENTRANCE.</strong>
          </div>
          <div className="scene-card scene-neon">
            <span className="scene-tag">02 · CITY NIGHTS</span>
            <div className="neon-circles"><i /><i /><i /></div>
            <strong>LIGHTS.<br />CAMERA.<br />SHERU.</strong>
          </div>
          <div className="scene-card scene-adventure">
            <span className="scene-tag">03 · ADVENTURE MODE</span>
            <div className="adventure-mountain"><Mountain size={62} /></div>
            <strong>THE NEXT<br />BIG STORY.</strong>
          </div>
          <div className="scene-card scene-arena">
            <span className="scene-tag">04 · BOSS LEVEL</span>
            <div className="arena-rings"><span>✦</span></div>
            <strong>MAIN<br />CHARACTER.</strong>
          </div>
          <div className="lion-stage">
            <div className="lion-stage-halo" />
            <div className="hero-crown"><Crown size={28} /></div>
            <LionHero />
            <div className="lion-stage-label">SHERU BHAI <span>✦</span> OFFICIAL</div>
          </div>
          <div className="floating-stamp stamp-top"><Zap size={13} /> MAIN CHARACTER ENERGY</div>
          <div className="floating-stamp stamp-bottom"><Sparkles size={13} /> READY FOR YOUR FEED</div>
        </div>

        <div className="poster-side-note"><span /> THE STORIES NEVER STOP <span /></div>
        <a href="#collection" className="scroll-prompt"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="bundle-strip" id="collection">
        <div className="strip-heading">
          <SectionLabel>ONE CHARACTER. ENDLESS STORIES.</SectionLabel>
          <h2>MEET THE <em>MEGA BUNDLE.</em></h2>
          <p>Everything Sheru, gathered into one digital collection.</p>
        </div>
        <div className="bundle-showcase">
          <div className="bundle-box-art">
            <div className="box-top"><span>SHERU BHAI OFFICIAL</span><Crown size={18} /></div>
            <div className="box-visual">
              <div className="box-glow" />
              <div className="box-lion"><LionHero /></div>
              <div className="box-copy">
                <span>THE ULTIMATE COLLECTION</span>
                <strong>5,000<sup>+</sup></strong>
                <b>AI SHERU</b>
                <i>STORY REELS BUNDLE</i>
              </div>
            </div>
            <div className="box-base">ONE MEGA BUNDLE <span>✦</span> DIGITAL ACCESS</div>
          </div>
          <div className="bundle-features">
            <div className="feature-heading"><Sparkles size={16} /> WHAT'S INSIDE THE BUNDLE?</div>
            <div className="feature-row"><span className="feature-icon feature-rocket">✦</span><div><strong>Made for short-form</strong><small>Built around the Reels & Shorts universe.</small></div><Check /></div>
            <div className="feature-row"><span className="feature-icon feature-film"><Film size={18} /></span><div><strong>5,000+ videos</strong><small>A huge collection in one bundle.</small></div><Check /></div>
            <div className="feature-row"><span className="feature-icon feature-world"><Clapperboard size={18} /></span><div><strong>Multiple story moods</strong><small>Adventure, comedy, drama and more.</small></div><Check /></div>
            <div className="feature-row"><span className="feature-icon feature-bolt"><Zap size={18} /></span><div><strong>One-time purchase</strong><small>No recurring subscription planned.</small></div><Check /></div>
            <div className="bundle-price">
              <div><small>PLANNED LAUNCH PRICE</small><strong>₹149</strong><span>ONE-TIME PAYMENT</span></div>
              <a href="#checkout" className="button button-yellow">See launch details <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-wrap">
          <div className="categories-heading">
            <SectionLabel>WHAT KIND OF SHERU STORY?</SectionLabel>
            <h2>FIND YOUR <em>STORY MODE.</em></h2>
            <p>Four moods. One legendary universe.</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <article className={"category-card " + category.tone} key={category.name}>
                  <div className="category-art"><Icon size={42} strokeWidth={1.4} /><span>0{index + 1}</span></div>
                  <div className="category-copy"><h3>{category.name}</h3><p>{category.caption}</p></div>
                  <ArrowUpRight className="category-arrow" size={17} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="creator-section">
        <div className="section-wrap creator-inner">
          <div className="creator-copy">
            <SectionLabel>FOR THE PEOPLE WHO MAKE THE FEED</SectionLabel>
            <h2>YOUR NEXT POST<br /><em>NEEDS A STORY.</em></h2>
            <p>For Reels creators, Shorts channels, meme pages and anyone who wants a little more Sheru in their scroll.</p>
            <div className="creator-points">
              <span><Check size={15} /> Story-first entertainment</span>
              <span><Check size={15} /> A single mega collection</span>
              <span><Check size={15} /> Digital access after verified payment</span>
            </div>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="button button-yellow"><Instagram size={16} /> Follow @sherubhai.officialo</a>
          </div>
          <div className="creator-poster">
            <div className="poster-orbit orbit-a" />
            <div className="poster-orbit orbit-b" />
            <div className="poster-lion"><LionHero /></div>
            <div className="poster-wordmark"><span>THE</span><strong>SHERU<br />UNIVERSE</strong><small>STAY LEGENDARY</small></div>
            <div className="poster-star star-a">✦</div><div className="poster-star star-b">✧</div>
          </div>
        </div>
      </section>

      <section className="faq-section section-wrap" id="faq">
        <div className="faq-heading">
          <SectionLabel>THE DETAILS</SectionLabel>
          <h2>GOOD QUESTIONS.<br /><em>STRAIGHT ANSWERS.</em></h2>
          <p>Want to know how the bundle works? Start here.</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details className="faq-item" key={item.q} open={index === 0}>
              <summary><span>0{index + 1}</span><strong>{item.q}</strong><ChevronDown size={18} /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="checkout-section" id="checkout">
        <div className="checkout-glow" />
        <div className="checkout-card">
          <div className="checkout-badge"><LockKeyhole size={14} /> SECURE CHECKOUT COMING SOON</div>
          <h2>THE NEXT DROP<br /><em>IS ALMOST HERE.</em></h2>
          <p>We're preparing secure online payment and automatic digital delivery. Follow Sheru Bhai Official for launch updates.</p>
          <div className="checkout-price"><span>MEGA BUNDLE</span><strong>₹149</strong><small>PLANNED ONE-TIME PRICE</small></div>
          <div className="checkout-actions">
            <button className="button button-disabled" disabled><LockKeyhole size={15} /> Checkout opening soon</button>
            <a className="button button-glass" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> Follow for launch</a>
          </div>
          <small className="checkout-footnote"><ShieldCheck size={13} /> No payment is collected on this page yet.</small>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <Link href="/" className="brand footer-brand"><LionMark /><span className="brand-copy"><strong>SHERU BHAI</strong><small>OFFICIAL</small></span></Link>
          <p>Bringing Sheru's stories to life.<br />One character. A whole universe.</p>
          <div className="footer-links"><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} SHERU BHAI OFFICIAL</span><span>@SHERUBHAI.OFFICIALO <b>✦</b></span></div>
      </footer>
    </main>
  );
}