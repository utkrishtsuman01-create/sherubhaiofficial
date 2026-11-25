# CrazyReels store setup

## Stack
- Next.js 15 App Router
- Supabase Postgres, Auth and Storage
- Storefront has no seeded/demo products. Products are created in `/admin`.
- PhonePe checkout is intentionally disabled until merchant onboarding is complete.

## Supabase project
Project: `crazyreels`
Region: `ap-south-1` (Mumbai)
Project URL: `https://vwzqhdtpvubkswqexdrr.supabase.co`
Storage bucket: `product-media` (public product image and preview playback; uploads restricted to admins).

## Vercel environment variables
The app already contains the public Supabase URL and publishable key as safe browser-side defaults. You can override them in Vercel for Production, Preview and Development if needed:

```env
NEXT_PUBLIC_SUPABASE_URL=https://vwzqhdtpvubkswqexdrr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY
NEXT_PUBLIC_SITE_URL=https://YOUR-CRAZYREELS-DOMAIN
```

Use the active publishable key from Supabase Project Settings → API Keys. The publishable key is intended for browser use; database security is enforced by RLS. Never put a Supabase service-role/secret key in a `NEXT_PUBLIC_` variable or in frontend code.

## Bootstrap the first store admin
1. In Supabase Dashboard → Authentication → Users, create an account for the store owner.
2. Copy that user's UUID.
3. In SQL Editor run:

```sql
insert into public.admin_users (user_id)
values ('PASTE_AUTH_USER_UUID_HERE')
on conflict (user_id) do nothing;
```

Only users listed in `public.admin_users` can enter the admin panel or upload product media. Admin access is checked by Supabase RLS policies through the non-exposed `private.is_store_admin()` function. The owner account must be created in Supabase Auth first; the admin UUID is then inserted into `public.admin_users`.

## Admin features
- Dashboard totals: paid revenue (paid orders only), total orders, active products, and orders needing attention.
- Product manager: create/edit/delete, draft/published status, pricing, category, specifications, description.
- Media limits in the editor: one product image and up to two preview videos.
- Order manager: payment state and fulfilment state.

## Payment state
No payment gateway is connected. Do not mark an order as paid unless the payment has actually been verified. The storefront does not accept payment at this stage.


## Deployment status and payment

- GitHub Actions runs `npm run build` on pushes to `main`.
- Import this repository as a Next.js project in Vercel. The Vercel integration currently returns HTTP 403 when creating a project automatically, so project creation must be completed by a team member with project-creation permission.
- Add `NEXT_PUBLIC_SITE_URL` in Vercel after choosing the final public domain. The Supabase URL and publishable key have safe public defaults in `lib/supabase.ts`.
- The cart is available, but checkout and order creation are intentionally disabled until PhonePe is connected and payment verification is implemented.
