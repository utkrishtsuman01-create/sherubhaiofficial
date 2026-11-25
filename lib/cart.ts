export type CartItem = { id:string; slug:string; title:string; price:number; image_url:string|null; qty:number };
const CART_KEY = "crazyreels-cart";
export function readCart(): CartItem[] {
  try { const value = JSON.parse(localStorage.getItem(CART_KEY) || "[]"); return Array.isArray(value) ? value : []; } catch { return []; }
}
export function writeCart(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("crazyreels-cart-updated"));
}
export function addProductToCart(product: Omit<CartItem,"qty">) {
  const items = readCart();
  const existing = items.find(item => item.id === product.id);
  if (existing) existing.qty += 1; else items.push({ ...product, qty: 1 });
  writeCart(items);
}
