import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/server/supabase";

export const runtime = "edge";

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyEtxRgCiwXoitW3Yiw1af-rkbwfNFjVRo66VSC6g3PFruAI5vc0ksaiVsVeTuabxTWbQ/exec";

const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(7),
    message: z.string().optional(),
});

async function notifyOwner(data: unknown) {
    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                type: "lead",
                submittedAt: new Date().toISOString(),
                payload: data,
                notify: {
                    emailTo: "purespacecowa@gmail.com",
                    smsTo: "3605230312@tmomail.net",
                },
            }),
        });
    } catch (e) {
        console.warn("Lead notification failed:", e);
    }
}

export async function POST(req: NextRequest) {
    const data = await req.json().catch(() => ({}));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    await notifyOwner(parsed.data);

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