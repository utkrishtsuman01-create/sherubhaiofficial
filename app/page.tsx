"use client";
import {useEffect,useMemo,useState} from "react";
import Link from "next/link";
import {ArrowRight,Boxes,CheckCircle2,LockKeyhole,Search,ShieldCheck,Sparkles,Video,Zap,ShoppingCart,Star} from "lucide-react";
import {supabase} from "@/lib/supabase";
import StoreHeader from "@/components/StoreHeader";
import {addProductToCart} from "@/lib/cart";

type Product={id:string;title:string;slug:string;short_description:string;category:string;price:number;compare_at_price:number|null;total_videos:number;image_url:string|null};
type Review={id:string;reviewer_name:string;rating:number;review_text:string;products?:{title:string}|null};
function ReviewTrack({items}:{items:Review[]}) {
  return <div className="review-track"><div className="review-track-inner">{[...items,...items].map((r,i)=><article className="review-brick" key={r.id+"-"+i}><div className="review-brick-top"><b>{r.reviewer_name}</b><span>{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</span></div><p>“{r.review_text}”</p><small>{r.products?.title || "CrazyReels bundle"}</small></article>)}</div></div>;
}
export default function HomePage(){
 const [products,setProducts]=useState<Product[]>([]),[search,setSearch]=useState(""),[category,setCategory]=useState("All"),[loading,setLoading]=useState(true),[reviews,setReviews]=useState<Review[]>([]),[added,setAdded]=useState<string|null>(null);
 useEffect(()=>{
  if(!supabase){setLoading(false);return;}
  Promise.all([
   supabase.from("products").select("id,title,slug,short_description,category,price,compare_at_price,total_videos,image_url").eq("is_published",true).order("created_at",{ascending:false}),
   supabase.from("product_reviews").select("id,reviewer_name,rating,review_text,product_id,products(title)").eq("is_published",true).eq("show_on_homepage",true).order("created_at",{ascending:false}).limit(30)
  ]).then(([p,r])=>{setProducts(p.data||[]);setReviews((r.data||[]) as unknown as Review[]);setLoading(false);});
 },[]);
 const categories=useMemo(()=>["All",...Array.from(new Set(products.map(p=>p.category)))],[products]);
 const visible=products.filter(p=>(category==="All"||p.category===category)&&[p.title,p.short_description,p.category].join(" ").toLowerCase().includes(search.toLowerCase()));
 function add(p:Product){addProductToCart({id:p.id,slug:p.slug,title:p.title,price:Number(p.price),image_url:p.image_url});setAdded(p.id);window.setTimeout(()=>setAdded(current=>current===p.id?null:current),1400);}
 const split=reviews.reduce((rows,r,i)=>{rows[i%2].push(r);return rows;},[[],[]] as Review[][]);
 return <main className="store-page">
  <StoreHeader/>
  <section className="store-hero"><div className="hero-inner"><div className="hero-copy"><div className="eyebrow"><Sparkles size={14}/> THE NEXT BIG THING IN SHORT-FORM CONTENT</div><h1>Viral Reels.<br/><em>Built to Go Crazy.</em></h1><p>Discover ready-to-use reels bundles for creators, social media managers and brands. Find your next scroll-stopping idea, preview the content and get your creative flow moving.</p><div className="hero-actions"><a className="primary-btn" href="#shop">Explore bundles <ArrowRight size={16}/></a></div><div className="trust-points"><span><CheckCircle2/> Curated collections</span><span><Zap/> Instant digital access</span><span><ShieldCheck/> Secure checkout soon</span></div></div><div className="hero-art"><img src="/crazyreels-logo.svg" alt="CrazyReels play-film logo"/><div className="hero-floater"><b>100%</b><br/>Digital bundles</div></div></div></section>
  <section className="store-container" id="shop">
   <div className="section-title"><div><small>FRESH FINDS, READY TO POST</small><h2>Explore Reels Bundles</h2></div><p>{products.length} bundles available</p></div>
   <div className="catalog-tools"><div className="category-row">{categories.map(c=><button key={c} className={category===c?"category-chip selected":"category-chip"} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="mobile-search"><Search/><input placeholder="Search bundles..." value={search} onChange={e=>setSearch(e.target.value)}/></div></div>
   {loading?<div className="empty-products"><div className="loader-dot"/>Loading the catalogue…</div>:visible.length?<div className="product-grid">{visible.map(p=><article className="product-card" key={p.id}><Link href={"/"+p.slug}><img src={p.image_url||"/crazyreels-logo.svg"} alt={p.title}/></Link><div className="product-card-body"><small>{p.category} · {p.total_videos.toLocaleString("en-IN")} VIDEOS</small><h3>{p.title}</h3><p>{p.short_description}</p><div className="product-card-foot"><b>₹{Number(p.price).toFixed(0)}</b><Link href={"/"+p.slug}>View bundle <ArrowRight size={13}/></Link></div><button className="add-cart-btn" onClick={()=>add(p)}>{added===p.id?<CheckCircle2 size={16}/>:<ShoppingCart size={16}/>} {added===p.id?"Added to cart":"Add to cart"}</button></div></article>)}</div>:<div className="empty-products"><img src="/crazyreels-logo.svg" alt="CrazyReels"/><div className="eyebrow">THE SHELF IS READY</div><h3>{search?"No bundles match that search.":"Your next favourite bundle is on its way."}</h3><p>{search?"Try a different title or category.":"We're getting the catalogue ready. New bundles will appear here as soon as the store admin publishes them."}</p></div>}
   {reviews.length>0&&<section className="homepage-reviews"><div className="section-title"><div><small>THE CRAZYREELS COMMUNITY</small><h2>Real words. Real love. 💜</h2></div><p>Reviews from our bundle customers</p></div><div className="review-marquee"><ReviewTrack items={split[0]}/><ReviewTrack items={split[1].length?split[1]:split[0]}/></div></section>}
   <section className="faq-section"><div className="section-title"><div><small>NEED A LITTLE CLARITY?</small><h2>Frequently asked questions</h2></div></div><details><summary>What do I receive when I buy a bundle?</summary><p>Each product page explains its video count, format, resolution and delivery method. Full access will be enabled after secure payment is connected.</p></details><details><summary>Can I preview a bundle before buying?</summary><p>When a product includes preview videos, they appear on its product page.</p></details><details><summary>Can I use these videos on social media?</summary><p>Check the usage and licence details shown on each product page before publishing or redistributing any content.</p></details><details><summary>Is online payment available right now?</summary><p>Checkout is temporarily paused while PhonePe is being configured. You can browse products and add bundles to your cart.</p></details></section>
   <div className="trust-row"><div><Video/> <span>Ready-to-use digital content</span></div><div><Boxes/> <span>Fresh bundles & categories</span></div><div><LockKeyhole/> <span>Secure checkout coming soon</span></div></div>
  </section>
  <section className="brand-strip"><img src="/crazyreels-logo.svg" alt="CrazyReels"/><div><small>YOUR CONTENT. YOUR MOMENT.</small><h2>Unbox your next reel idea.</h2><p>One platform for the bundles that keep your content moving.</p></div><a href="#shop" className="primary-btn">Browse the store <ArrowRight/></a></section>
  <footer className="store-footer"><div className="store-brand"><img src="/crazyreels-logo.svg" alt=""/><span><b>CrazyReels</b><small>Premium Reels for Your Growth</small></span></div><p>Curated digital bundles for creators, pages and businesses.</p><nav><Link href="/">Home</Link><a href="#shop">Shop</a><Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link></nav><small>© {new Date().getFullYear()} CrazyReels. All rights reserved.</small></footer>
 </main>;
}
