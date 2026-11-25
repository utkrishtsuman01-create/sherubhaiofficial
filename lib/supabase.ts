import { createClient } from "@supabase/supabase-js";

// The publishable key is designed for browser use. Database access is protected by RLS.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://vwzqhdtpvubkswqexdrr.supabase.co";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_FNRz12_a2pi4kT46BCCWdA_iPRPyPp0";

export const supabase = createClient(url, key, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});
