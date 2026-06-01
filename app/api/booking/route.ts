// // app/api/booking/route.ts (and app/api/lead/route.ts similarly)
// import { NextRequest, NextResponse } from 'next/server';
// import { supabaseAdmin } from '@/server/supabase';
// import { bookingSchema } from '@/lib/validators';
// import { sendOwnerEmail } from '@/lib/email';

// export async function POST(req: NextRequest) {
//     const data = await req.json().catch(() => ({}));
//     const parsed = bookingSchema.safeParse(data);
//     if (!parsed.success) {
//         return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
//     }

//     // … prepare payload …

//     // Only touch Supabase if we actually have required envs
//     if (process.env.SUPABASE_URL) {
//         try {
//             const { data: cust } = await supabaseAdmin
//                 .from('customers')
//                 .insert({
//                     email: parsed.data.email,
//                     phone: parsed.data.phone,
//                     name: `${parsed.data.firstName} ${parsed.data.lastName}`,
//                 })
//                 .select()
//                 .single();

//             const { data: lead } = await supabaseAdmin
//                 .from('leads')
//                 .insert({
//                     customer_id: cust!.id,
//                     source: 'web',
//                     status: 'qualified',
//                     payload: parsed.data,
//                 })
//                 .select()
//                 .single();

//             await supabaseAdmin.from('bookings').insert({
//                 lead_id: lead!.id,
//                 start_time: new Date(parsed.data.date + 'T' + parsed.data.time + ':00').toISOString(),
//                 status: 'hold',
//                 notes: parsed.data.notes ?? null,
//             });
//         } catch (e) {
//             console.warn('Supabase insert skipped because of error:', e);
//         }
//     }

//     await sendOwnerEmail('New Booking Request (Hold Placed)');
//     return NextResponse.json({ ok: true });
// }



// // app/api/booking/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { supabaseAdmin } from "@/server/supabase";
// import { bookingSchema } from "@/lib/validators";
// import { sendOwnerEmail } from "@/lib/email";

// export async function POST(req: NextRequest) {
//     // 1) Read body safely
//     const data = await req.json().catch(() => ({}));

//     // 2) Validate
//     const parsed = bookingSchema.safeParse(data);
//     if (!parsed.success) {
//         return NextResponse.json(
//             { error: parsed.error.flatten() },
//             { status: 400 }
//         );
//     }

//     // 3) If Supabase env is missing, skip DB inserts but still email owner
//     const hasSupabase =
//         !!process.env.SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;

//     if (hasSupabase) {
//         try {
//             const fullName = `${parsed.data.firstName} ${parsed.data.lastName}`.trim();

//             const { data: cust, error: custErr } = await supabaseAdmin
//                 .from("customers")
//                 .insert({
//                     email: parsed.data.email,
//                     phone: parsed.data.phone,
//                     name: fullName,
//                 })
//                 .select()
//                 .single();

//             if (custErr) throw custErr;

//             const { data: lead, error: leadErr } = await supabaseAdmin
//                 .from("leads")
//                 .insert({
//                     customer_id: cust!.id,
//                     source: "web",
//                     status: "qualified",
//                     payload: parsed.data,
//                 })
//                 .select()
//                 .single();

//             if (leadErr) throw leadErr;

//             const startISO = new Date(
//                 `${parsed.data.date}T${parsed.data.time}:00`
//             ).toISOString();

//             const { error: bookingErr } = await supabaseAdmin
//                 .from("bookings")
//                 .insert({
//                     lead_id: lead!.id,
//                     start_time: startISO,
//                     status: "hold",
//                     notes: parsed.data.notes ?? null,
//                 });

//             if (bookingErr) throw bookingErr;
//         } catch (e) {
//             console.warn("Supabase insert skipped because of error:", e);
//             // We still continue to email owner + return ok
//         }
//     }

//     // 4) Always email owner
//     await sendOwnerEmail(
//         "New Booking Request (Hold Placed)",
//         `<pre>${JSON.stringify(parsed.data, null, 2)}</pre>`
//     );

//     return NextResponse.json({ ok: true });
// }




import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/server/supabase";
import { bookingSchema } from "@/lib/validators";
import { sendOwnerEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
    // 1) Read body safely
    const data = await req.json().catch(() => ({}));

    // 2) Validate
    const parsed = bookingSchema.safeParse(data);
    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    // 3) Try Supabase if available (but DO NOT crash build if missing)
    if (supabaseAdmin) {
        try {
            const fullName = `${parsed.data.firstName} ${parsed.data.lastName}`.trim();

            const { data: cust, error: custErr } = await supabaseAdmin
                .from("customers")
                .insert({
                    email: parsed.data.email,
                    phone: parsed.data.phone,
                    name: fullName,
                })
                .select()
                .single();

            if (custErr) throw custErr;

            const { data: lead, error: leadErr } = await supabaseAdmin
                .from("leads")
                .insert({
                    customer_id: cust!.id,
                    source: "web",
                    status: "qualified",
                    payload: parsed.data,
                })
                .select()
                .single();

            if (leadErr) throw leadErr;

            const startISO = new Date(`${parsed.data.date}T${parsed.data.time}:00`).toISOString();

            const { error: bookingErr } = await supabaseAdmin
                .from("bookings")
                .insert({
                    lead_id: lead!.id,
                    start_time: startISO,
                    status: "hold",
                    notes: parsed.data.notes ?? null,
                });

            if (bookingErr) throw bookingErr;
        } catch (e) {
            console.warn("Supabase insert skipped because of error:", e);
        }
    } else {
        console.warn("Supabase skipped: missing SUPABASE env vars (supabaseAdmin is null).");
    }

    // 4) Always email owner (works even if Supabase is skipped)
    await sendOwnerEmail(
        "New Booking Request (Hold Placed)",
        `<pre>${JSON.stringify(parsed.data, null, 2)}</pre>`
    );

    return NextResponse.json({ ok: true });
}
