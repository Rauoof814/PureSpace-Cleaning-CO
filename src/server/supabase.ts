// src/server/supabase.ts
'use server';
import { createClient } from '@supabase/supabase-js';

export async function getSupabaseServiceClient() {
    const url =
        process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const key =
        process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';
    // returning a value from an async action is fine
    return createClient(url, key);
}
