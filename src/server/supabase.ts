// src/server/supabase.ts
import 'server-only';
import { createClient } from '@supabase/supabase-js';

// Admin client (server only – requires SERVICE_ROLE or falls back to ANON for local)
export const supabaseAdmin = createClient(
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '',
    { auth: { persistSession: false } }
);

// Public anon client (safe for SSR)
export const supabaseAnon = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '',
    { auth: { persistSession: false } }
);
