// import "server-only";
// import { createClient } from "@supabase/supabase-js";

// const SUPABASE_URL =
//     process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;

// const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// /**
//  * Server/Admin client (SERVICE ROLE) - server only
//  */
// export const supabaseAdmin = (() => {
//     if (!SUPABASE_URL) throw new Error("Missing SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL)");
//     if (!SERVICE_ROLE_KEY) throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");

//     return createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
//         auth: { persistSession: false },
//     });
// })();

// /**
//  * Public client (ANON) - safe key, can be used for SSR/server
//  * (Do NOT use service role in client components)
//  */
// export const supabase = (() => {
//     if (!SUPABASE_URL) throw new Error("Missing SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL)");
//     if (!ANON_KEY) throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY");

//     return createClient(SUPABASE_URL, ANON_KEY, {
//         auth: { persistSession: false },
//     });
// })();



import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "";

const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

/**
 * Server/Admin client (SERVICE ROLE) - server only
 * IMPORTANT: does NOT throw during build. Returns null if env vars are missing.
 */
export const supabaseAdmin: SupabaseClient | null =
    SUPABASE_URL && SERVICE_ROLE_KEY
        ? createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
            auth: { persistSession: false },
        })
        : null;

/**
 * Public client (ANON)
 * Returns null if env vars are missing.
 */
export const supabase: SupabaseClient | null =
    SUPABASE_URL && ANON_KEY
        ? createClient(SUPABASE_URL, ANON_KEY, {
            auth: { persistSession: false },
        })
        : null;
