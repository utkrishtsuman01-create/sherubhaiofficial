import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Crown,
  Film,
  Instagram,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Zap,
  Clapperboard,
  Layers3,
  Heart,
  Compass,
  GraduationCap,
  Download,
  BadgeCheck,
} from "lucide-react";

const instagramUrl = "https://www.instagram.com/sherubhai.officialo/";

const faqs = [
  {
    q: "What is the Sheru Bhai Mega Video Bundle?",
    a: "It is a digital collection of 5,000+ Sheru Bhai AI videos, presented as a single bundle for short-form entertainment and creator inspiration.",
  },
  {
    q: "How much does it cost?",
    a: "The planned introductory price is ₹149 as a one-time purchase. Checkout will open only after secure payment and delivery systems are ready.",
  },
  {
    q: "How will I receive the videos?",
    a: "Once checkout is launched, successful payments will be verified by the payment provider on our server. The website will then show the digital delivery instructions.",
  },
  {
    q: "Can I see sample videos first?",
    a: "Sample previews will be added here before checkout opens. Follow our Instagram page for new Sheru Bhai videos and launch updates.",
  },
  {
    q: "Does the bundle include resale rights?",
    a: "The bundle is not advertised as a resale-rights product. Please read the final usage terms shown at checkout before purchasing.",
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>;
}

function LionCharacter() {
  return (
    <svg className="lion-character" viewBox="0 0 520 590" role="img" aria-label="Original Sheru Bhai lion character wearing a red jacket">
      <defs>
        <linearGradient id="maneGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff0bd" />
          <stop offset=".3" stopColor="#edc16b" />
          <stop offset=".7" stopColor="#b87832" />
          <stop offset="1" stopColor="#5b3519" />
        </linearGradient>
        <linearGradient id="faceGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe7ad" />
          <stop offset="1" stopColor="#bd7c36" />
        </linearGradient>
        <linearGradient id="jacketRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9e2f28" />
          <stop offset=".5" stopColor="#5a1718" />
          <stop offset="1" stopColor="#1c1111" />
        </linearGradient>
        <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="1" stopColor="#b9ad96" />
        </linearGradient>
        <filter id="lionShadow"><feGaussianBlur stdDeviation="15" /></filter>
      </defs>
      <ellipse cx="260" cy="548" rx="174" ry="22" fill="#d89b42" opacity=".22" filter="url(#lionShadow)" />
      <path d="M260 24 301 51 347 38 369 80 418 84 425 134 473 161 452 208 485 253 449 293 458 345 410 369 401 420 350 429 324 477 274 459 232 490 195 454 145 462 132 411 84 391 94 340 56 304 86 260 62 217 101 184 96 137 145 121 167 75 215 82Z" fill="url(#maneGold)" />
      <path d="m141 139 38-25-3 48-35 16Zm238 0-38-25 3 48 35 16ZM121 246l-44 8 39 35Zm278 0 44 8-39 35ZM151 366l-37 34 52 7Zm218 0 37 34-52 7Z" fill="#875021" opacity=".65" />
      <path d="M260 103c-73 0-123 57-123 137 0 69 34 118 75 145l48 29 48-29c41-27 75-76 75-145 0-80-50-137-123-137Z" fill="url(#faceGold)" stroke="#70441f" strokeWidth="5" />
      <path d="m151 225 101-17 8 27-88 26-23-36Zm218 0-101-17-8 27 88 26 23-36Z" fill="#141313" stroke="#d9ae61" strokeWidth="5" />
      <path d="m167 235 73-13-15 22-58 9Zm186 0-73-13 15 22 58 9Z" fill="#e0b967" />
      <path d="M247 273q13-9 26 0l-13 18Z" fill="#57321d" />
      <path d="M260 287v29m0 0q-31 23-55-1m55 1q31 23 55-1" fill="none" stroke="#63391f" strokeWidth="7" strokeLinecap="round" />
      <path d="M145 286q-30 7-46 28m276-28q30 7 46 28" stroke="#fff0c0" strokeWidth="4" strokeLinecap="round" opacity=".75" />
      <path d="M171 360q89 50 178 0l58 43q48 47 57 150H56q9-103 57-150Z" fill="url(#jacketRed)" stroke="#3a1715" strokeWidth="7" />
      <path d="m194 369 66 44 66-44 25 48-51 95h-80l-51-95Z" fill="url(#shirt)" />
      <path d="m171 364 89 49-37 57-83-61Zm178 0-89 49 37 57 83-61Z" fill="#7b211d" stroke="#d08c55" strokeWidth="5" />
      <path d="m170 425 37 22-18 55-42-33Zm180 0-37 22 18 55 42-33Z" fill="#171212" stroke="#c88d55" strokeWidth="4" />
      <path d="m260 412 18 37-18 20-18-20Z" fill="#d8a747" />
      <path d="M260 458v27" stroke="#d8a747" strokeWidth="5" strokeLinecap="round" />
      <circle cx="260" cy="496" r="9" fill="#f0cc7e" stroke="#86551f" strokeWidth="3" />
      <path d="m202 126 22-27 21 26m53 1 21-27 22 26" stroke="#fff0bc" strokeWidth="7" strokeLinecap="round" opacity=".7" />
      <path d="m183 168 19-10m135 10-19-10M128 193l17-5m230 5-17-5" stroke="#fff0bc" strokeWidth="4" strokeLinecap="round" opacity=".65" />
    </svg>
  );
}

function StoryTile({ number, title, kind }: { number: string; title: string; kind: string }) {
  return (
    <div className={"story-tile " + kind}>
      <span className="tile-number">{number}</span>
      <span className="tile-spark">✦</span>
      <strong>{title}</strong>
      <small>SHERU BHAI STORY WORLD</small>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <Sparkles size={13} />
        <span>THE SHERU BHAI UNIVERSE IS HERE · 5,000+ VIDEOS IN ONE MEGA DROP</span>
        <Sparkles size={13} />
      </div>

      <header className="site-header">
        <Link href="/" className="brand" aria-label="Sheru Bhai Official home">
          <LionMark />
          <span className="brand-copy"><strong>SHERU BHAI</strong><small>OFFICIAL UNIVERSE</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="#collection">The Collection</Link>
          <Link href="#features">What&apos;s Inside</Link>
          <Link href="#faq">FAQs</Link>
        </nav>
        <a className="header-cta" href="#bundle">Explore bundle <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-copy">
          <Eyebrow>BRINGING SHERU BHAI&apos;S STORIES TO LIFE</Eyebrow>
          <h1>ONE LION.<br /><span className="headline-gold">ENDLESS</span><br /><span className="headline-outline">STORIES.</span></h1>
          <p className="hero-description">
            Step into the Sheru Bhai universe — a massive collection of AI-powered story videos, unforgettable moments and scroll-stopping scenes.
          </p>
          <div className="hero-actions">
            <a href="#bundle" className="button button-primary">Explore the mega bundle <ArrowRight size={17} /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="button button-ghost"><Instagram size={17} /> Follow Sheru Bhai</a>
          </div>
          <div className="hero-proof">
            <span className="proof-stat"><strong>5,000+</strong><small>AI video collection</small></span>
            <i />
            <span className="proof-stat"><strong>ONE DROP</strong><small>one mega bundle</small></span>
            <i />
            <span className="proof-stat"><strong>₹149</strong><small>planned launch price</small></span>
          </div>
        </div>

        <div className="hero-collage" aria-label="Sheru Bhai cinematic story collage">
          <div className="collage-aura" />
          <div className="collage-orbit" />
          <StoryTile number="01" title="JUNGLE QUEST" kind="tile-jungle" />
          <StoryTile number="02" title="CITY CHAOS" kind="tile-city" />
          <StoryTile number="03" title="THE BIG MOMENT" kind="tile-action" />
          <StoryTile number="04" title="COMEDY CLUB" kind="tile-comedy" />
          <div className="lion-stage">
            <div className="stage-crown"><Crown size={27} /></div>
            <LionCharacter />
            <div className="stage-label"><span />THE MAIN CHARACTER<span /></div>
          </div>
          <div className="collage-sticker"><Zap size={14} fill="currentColor" /> MAIN CHARACTER ENERGY</div>
          <div className="collage-sticker sticker-bottom"><Sparkles size={13} /> THE STORY NEVER STOPS</div>
          <div className="collage-product">
            <div className="product-box-top"><LionMark small /><span>SHERU BHAI<br /><b>OFFICIAL</b></span></div>
            <div className="product-box-title">MEGA<br /><em>VIDEO</em><br />BUNDLE</div>
            <div className="product-box-count">5,000+ <small>AI VIDEOS</small></div>
            <div className="product-box-glow" />
          </div>
        </div>
        <a className="scroll-cue" href="#collection"><ArrowDown size={14} /> SCROLL TO ENTER</a>
      </section>

      <section className="ticker" aria-label="Collection highlights">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="ticker-set" key={i}>
              <span>SHERU BHAI OFFICIAL</span><b>✦</b><span>5,000+ AI VIDEOS</span><b>✦</b><span>STORY REELS</span><b>✦</b><span>THE MEGA VIDEO BUNDLE</span><b>✦</b>
            </div>
          ))}
        </div>
      </section>

      <section className="intro-section section-wrap" id="collection">
        <div className="intro-heading">
          <Eyebrow>WELCOME TO THE UNIVERSE</Eyebrow>
          <h2>BRINGING SHERU BHAI&apos;S STORIES <em>TO LIFE.</em></h2>
        </div>
        <div className="intro-copy">
          <p>Adventure, comedy, drama and unexpected moments. Discover the collection built around one iconic character and a whole lot of imagination.</p>
          <a href="#bundle" className="text-link">Explore the collection <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="showcase-section section-wrap">
        <div className="section-topline">
          <Eyebrow>EXPLORE THE STORY WORLDS</Eyebrow>
          <span className="section-index">01 / THE UNIVERSE</span>
        </div>
        <div className="showcase-grid">
          <article className="showcase-card showcase-card-large">
            <div className="showcase-visual visual-cinematic">
              <div className="visual-scene scene-jungle"><span>✦</span><i /><b /></div>
              <div className="visual-number">01</div>
              <div className="visual-word">ADVENTURE<br /><i>& MYSTERY.</i></div>
              <div className="visual-sub">ENTER A DIFFERENT WORLD</div>
            </div>
            <div className="showcase-card-copy"><span>01 — THE ADVENTURE</span><h3>New worlds.<br />Unpredictable stories.</h3></div>
          </article>
          <article className="showcase-card">
            <div className="showcase-visual visual-gold">
              <div className="visual-scene scene-comedy"><span>☻</span><i /><b /></div>
              <div className="visual-number">02</div>
              <div className="gold-word">COMEDY<br />& DRAMA</div>
            </div>
            <div className="showcase-card-copy"><span>02 — THE ENTERTAINMENT</span><h3>Big expressions.<br />Bigger moments.</h3></div>
          </article>
          <article className="showcase-card">
            <div className="showcase-visual visual-night">
              <div className="visual-scene scene-college"><span>✧</span><i /><b /></div>
              <div className="visual-number">03</div>
              <div className="night-word">SCHOOL<br /><i>& COLLEGE.</i></div>
            </div>
            <div className="showcase-card-copy"><span>03 — THE EVERYDAY</span><h3>Relatable scenes.<br />Sheru-sized energy.</h3></div>
          </article>
        </div>
        <p className="preview-note"><Sparkles size={14} /> These are visual story-world themes. Actual sample videos will be added before checkout opens.</p>
      </section>

      <section className="bundle-section" id="bundle">
        <div className="bundle-backdrop" />
        <div className="bundle-inner section-wrap">
          <div className="bundle-copy">
            <Eyebrow>THE ONE AND ONLY DROP</Eyebrow>
            <h2>SHERU BHAI<br /><span>MEGA VIDEO<br />BUNDLE.</span></h2>
            <p className="bundle-lede">5,000+ videos. One legendary collection.</p>
            <p className="bundle-description">A massive digital collection of Sheru Bhai AI videos for creators, meme pages and short-form entertainment fans.</p>
            <div className="bundle-checks">
              <span><Check size={15} /> 5,000+ video collection</span>
              <span><Check size={15} /> Short-form video format</span>
              <span><Check size={15} /> One-time purchase</span>
              <span><Check size={15} /> Digital access after verified payment</span>
            </div>
          </div>
          <div className="price-card">
            <div className="price-card-top"><span>SHERU BHAI OFFICIAL</span><Crown size={18} /></div>
            <div className="price-art">
              <div className="mini-box"><LionMark /><span>THE MEGA<br />COLLECTION</span><small>ONE LION · ENDLESS STORIES</small></div>
            </div>
            <div className="price-count"><strong>5,000<span>+</span></strong><small>AI VIDEO COLLECTION</small></div>
            <div className="price-divider"><span /><Sparkles size={13} /><span /></div>
            <div className="price-line"><small>PLANNED INTRODUCTORY PRICE</small><div><strong>₹149</strong><span>ONE TIME</span></div></div>
            <a className="button button-primary button-full button-disabled" href="#checkout" aria-label="Checkout will open soon">Checkout opening soon <LockKeyhole size={16} /></a>
            <p className="secure-note"><ShieldCheck size={13} /> Secure payment checkout is being set up</p>
          </div>
        </div>
      </section>

      <section className="why-section section-wrap" id="features">
        <div className="why-title">
          <Eyebrow>WHAT&apos;S INSIDE</Eyebrow>
          <h2>ONE BUNDLE.<br /><em>SO MANY STORIES.</em></h2>
          <p>A huge collection with the Sheru Bhai character at the centre of every scroll-stopping moment.</p>
        </div>
        <div className="benefit-list">
          <div className="benefit-item"><span className="benefit-icon"><Film /></span><div><small>01 / THE COLLECTION</small><h3>5,000+ AI videos</h3><p>A large digital library gathered into one mega bundle.</p></div><ArrowUpRight /></div>
          <div className="benefit-item"><span className="benefit-icon"><Play /></span><div><small>02 / THE FORMAT</small><h3>Made for the vertical feed</h3><p>Short-form content built around Reels and Shorts viewing.</p></div><ArrowUpRight /></div>
          <div className="benefit-item"><span className="benefit-icon"><Layers3 /></span><div><small>03 / THE STORY WORLDS</small><h3>More than one kind of moment</h3><p>Adventure, comedy, drama and more story-led themes.</p></div><ArrowUpRight /></div>
          <div className="benefit-item"><span className="benefit-icon"><Download /></span><div><small>04 / DIGITAL DELIVERY</small><h3>Access online after payment</h3><p>Delivery instructions will unlock after a payment is verified.</p></div><ArrowUpRight /></div>
        </div>
      </section>

      <section className="story-strip section-wrap">
        <div className="story-strip-heading"><Eyebrow>WHICH STORY WORLD ARE YOU IN?</Eyebrow><span>CHOOSE YOUR VIBE ✦</span></div>
        <div className="story-pills">
          <div className="story-pill pill-adventure"><Compass /><span>Adventure &<br />Mystery</span></div>
          <div className="story-pill pill-comedy"><Zap /><span>Comedy &<br />Drama</span></div>
          <div className="story-pill pill-love"><Heart /><span>Suspense &<br />Love</span></div>
          <div className="story-pill pill-school"><GraduationCap /><span>School &<br />College</span></div>
        </div>
      </section>

      <section className="social-section">
        <div className="social-inner section-wrap">
          <div className="social-orbit"><LionMark /></div>
          <div className="social-copy">
            <Eyebrow>THE STORY CONTINUES ON INSTAGRAM</Eyebrow>
            <h2>FOLLOW THE<br /><span>LEGEND.</span></h2>
            <p>New clips. New chaos. More Sheru Bhai. Join the community and catch the next drop.</p>
            <a className="button button-primary" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> @sherubhai.officialo <ArrowUpRight size={16} /></a>
          </div>
          <div className="social-handle"><span>OFFICIAL HANDLE</span><strong>@sherubhai.<br />officialo</strong><small>FOLLOW FOR THE NEXT DROP ↗</small></div>
        </div>
      </section>

      <section className="faq-section section-wrap" id="faq">
        <div className="faq-heading">
          <Eyebrow>GOOD QUESTION</Eyebrow>
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
          <Eyebrow>THE DROP IS GETTING READY</Eyebrow>
          <h2>YOUR NEXT STORY<br /><em>STARTS SOON.</em></h2>
          <p>We&apos;re setting up secure online payments and digital delivery. Follow Sheru Bhai Official so you don&apos;t miss the launch.</p>
          <a className="button button-primary" href={instagramUrl} target="_blank" rel="noreferrer">Follow for launch updates <ArrowUpRight size={16} /></a>
          <small>No payment is collected on this page yet.</small>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <Link href="/" className="brand footer-brand"><LionMark /><span className="brand-copy"><strong>SHERU BHAI</strong><small>OFFICIAL UNIVERSE</small></span></Link>
          <p>One lion. Endless stories.<br />Stay legendary.</p>
          <div className="footer-links"><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} SHERU BHAI OFFICIAL</span><span>MADE FOR THE FEED <b>✦</b></span></div>
      </footer>
    </main>
  );
}