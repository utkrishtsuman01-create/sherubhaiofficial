"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const CART_KEY = "crazyreels-cart";
export default function StoreHeader() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const sync = () => {
      try {
        const items = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
        setCount(items.reduce((sum: number, item: { qty?: number }) => sum + Number(item.qty || 0), 0));
      } catch { setCount(0); }
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("crazyreels-cart-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("crazyreels-cart-updated", sync);
    };
  }, []);
  return <header className="store-header">
    <Link href="/" className="store-brand"><img src="/crazyreels-logo.svg" alt="CrazyReels logo"/><span><b>CrazyReels</b><small>Premium Reels for Your Growth</small></span></Link>
    <nav><Link href="/">Home</Link><Link href="/#shop">Shop</Link><Link href="/cart" className="cart-icon-link" aria-label={`Shopping cart, ${count} items`}><ShoppingCart size={21}/><span>Cart</span>{count > 0 && <b className="cart-count">{count > 99 ? "99+" : count}</b>}</Link></nav>
  </header>;
}
