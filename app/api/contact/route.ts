// app/api/contact/route.ts
import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyEtxRgCiwXoitW3Yiw1af-rkbwfNFjVRo66VSC6g3PFruAI5vc0ksaiVsVeTuabxTWbQ/exec";

// Your business notifications (free)
const NOTIFY_EMAIL = "purespacecowa@gmail.com";
const TMOBILE_SMS_EMAIL = "3605230312@tmomail.net"; // T-Mobile email-to-SMS

type ContactPayload = {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service?: string;
    message: string;

    // Optional anti-spam fields
    website?: string; // honeypot
};

function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as ContactPayload;

        // Honeypot: if bots fill this, we silently "succeed"
        if (body.website && body.website.trim().length > 0) {
            return NextResponse.json({ ok: true });
        }

        // Basic validation
        const name = (body.name ?? "").trim();
        const email = (body.email ?? "").trim();
        const message = (body.message ?? "").trim();

        if (!name || name.length < 2) {
            return NextResponse.json(
                { ok: false, error: "Name is required." },
                { status: 400 }
            );
        }
        if (!email || !isEmail(email)) {
            return NextResponse.json(
                { ok: false, error: "A valid email is required." },
                { status: 400 }
            );
        }
        if (!message || message.length < 5) {
            return NextResponse.json(
                { ok: false, error: "Message is required." },
                { status: 400 }
            );
        }

        // What we send to Google Apps Script
        // (Your Apps Script can store all fields in a Sheet and send email/SMS)
        const payloadToScript = {
            type: "contact",
            submittedAt: new Date().toISOString(),

            name,
            email,
            company: (body.company ?? "").trim(),
            phone: (body.phone ?? "").trim(),
            service: (body.service ?? "").trim(),
            message,

            notify: {
                emailTo: NOTIFY_EMAIL,
                smsTo: TMOBILE_SMS_EMAIL, // free SMS via T-Mobile gateway email
            },
            source: {
                userAgent: req.headers.get("user-agent") ?? "",
                ipHint:
                    req.headers.get("x-forwarded-for") ??
                    req.headers.get("x-real-ip") ??
                    "",
            },
        };

        // Server-to-server call (no browser CORS problems)
        const scriptRes = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Apps Script reads e.postData.contents
            body: JSON.stringify(payloadToScript),
            cache: "no-store",
        });

        const text = await scriptRes.text();

        if (!scriptRes.ok) {
            return NextResponse.json(
                {
                    ok: false,
                    error: "Google Script failed.",
                    details: text,
                },
                { status: 502 }
            );
        }

        // In case your Apps Script returns JSON, we try to parse it,
        // but we don't depend on it.
        let data: any = null;
        try {
            data = JSON.parse(text);
        } catch {
            data = { raw: text };
        }

        return NextResponse.json({ ok: true, data });
    } catch (err: any) {
        return NextResponse.json(
            { ok: false, error: "Server error", details: String(err?.message ?? err) },
            { status: 500 }
        );
    }
}
