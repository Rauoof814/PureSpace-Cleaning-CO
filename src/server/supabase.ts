// src/server/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Admin client (server only)
export const supabaseAdmin = createClient(
    process.env.SUPABASE_URL!,
    (process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY)!,
    { auth: { persistSession: false } }
);

// Public anon client (SSR-safe)
export const supabaseAnon = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL!,
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY)!,
    { auth: { persistSession: false } }
);
