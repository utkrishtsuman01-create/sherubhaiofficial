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
Add these to the Vercel project for Production, Preview and Development:

```env
NEXT_PUBLIC_SUPABASE_URL=https://vwzqhdtpvubkswqexdrr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY
NEXT_PUBLIC_SITE_URL=https://YOUR-CRAZYREELS-DOMAIN
```

Use the active publishable key from Supabase Project Settings → API Keys. Never put a Supabase service-role/secret key in a `NEXT_PUBLIC_` variable or in frontend code.

## Bootstrap the first store admin
1. In Supabase Dashboard → Authentication → Users, create an account for the store owner.
2. Copy that user's UUID.
3. In SQL Editor run:

```sql
insert into public.admin_users (user_id)
values ('PASTE_AUTH_USER_UUID_HERE')
on conflict (user_id) do nothing;
```

Only users listed in `public.admin_users` can enter the admin panel or upload product media. Admin access is checked server-side by Supabase RLS policies, not just by hiding UI.

## Admin features
- Dashboard totals: paid revenue (paid orders only), total orders, active products, and orders needing attention.
- Product manager: create/edit/delete, draft/published status, pricing, category, specifications, description.
- Media limits in the editor: one product image and up to two preview videos.
- Order manager: payment state and fulfilment state.

## Payment state
No payment gateway is connected. Do not mark an order as paid unless the payment has actually been verified. The storefront does not accept payment at this stage.
