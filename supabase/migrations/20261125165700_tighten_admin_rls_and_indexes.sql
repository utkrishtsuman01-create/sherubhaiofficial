create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated, anon;

create or replace function private.is_store_admin()
returns boolean language sql stable security definer
set search_path = public
as $$
  select exists (select 1 from public.admin_users where user_id = auth.uid());
$$;
revoke all on function private.is_store_admin() from public, anon;
grant execute on function private.is_store_admin() to authenticated, anon;

drop policy if exists "Admins can read admin users" on public.admin_users;
create policy "Admins can read admin users" on public.admin_users
for select to authenticated using (private.is_store_admin());

drop policy if exists "Admins manage products" on public.products;
drop policy if exists "Public can view published products" on public.products;
create policy "Public and admins can view products" on public.products
for select to anon, authenticated using (is_published or private.is_store_admin());
create policy "Admins insert products" on public.products
for insert to authenticated with check (private.is_store_admin());
create policy "Admins update products" on public.products
for update to authenticated using (private.is_store_admin()) with check (private.is_store_admin());
create policy "Admins delete products" on public.products
for delete to authenticated using (private.is_store_admin());

drop policy if exists "Admins manage orders" on public.orders;
create policy "Admins manage orders" on public.orders
for all to authenticated using (private.is_store_admin()) with check (private.is_store_admin());

drop policy if exists "Admins manage order items" on public.order_items;
create policy "Admins manage order items" on public.order_items
for all to authenticated using (private.is_store_admin()) with check (private.is_store_admin());

drop policy if exists "Admins upload product media" on storage.objects;
drop policy if exists "Admins update product media" on storage.objects;
drop policy if exists "Admins delete product media" on storage.objects;
create policy "Admins upload product media" on storage.objects
for insert to authenticated with check (bucket_id = 'product-media' and private.is_store_admin());
create policy "Admins update product media" on storage.objects
for update to authenticated using (bucket_id = 'product-media' and private.is_store_admin())
with check (bucket_id = 'product-media' and private.is_store_admin());
create policy "Admins delete product media" on storage.objects
for delete to authenticated using (bucket_id = 'product-media' and private.is_store_admin());

revoke all on function public.is_store_admin() from public, anon, authenticated;
drop function if exists public.is_store_admin();
create index if not exists order_items_product_id_idx on public.order_items(product_id);
