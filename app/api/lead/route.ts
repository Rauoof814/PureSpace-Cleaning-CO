// app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendOwnerEmail } from "@/lib/email";
import { supabaseAdmin } from "@/server/supabase";

const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(7),
    message: z.string().optional(),
});

export async function POST(req: NextRequest) {
    const data = await req.json().catch(() => ({}));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
        return NextResponse.json(
            { error: parsed.error.flatten() },
            { status: 400 }
        );
    }

    // Always notify owner
    await sendOwnerEmail("New Lead", `<pre>${JSON.stringify(parsed.data, null, 2)}</pre>`);

    // Only touch Supabase when BOTH env vars exist (otherwise skip cleanly)
    const hasSupabase =
        !!process.env.SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (hasSupabase && supabaseAdmin) {
        try {
            const { data: cust, error: custErr } = await supabaseAdmin
                .from("customers")
                .insert({
                    email: parsed.data.email,
                    phone: parsed.data.phone,
                    name: parsed.data.name,
                })
                .select()
                .single();

            if (custErr) throw custErr;

            const { error: leadErr } = await supabaseAdmin.from("leads").insert({
                customer_id: cust?.id ?? null,
                source: "web",
                status: "new",
                payload: parsed.data,
            });

            if (leadErr) throw leadErr;
        } catch (e) {
            console.warn("Supabase insert skipped:", e);
        }
    }

    return NextResponse.json({ ok: true });
}
