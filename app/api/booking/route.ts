// app/api/booking/route.ts (and app/api/lead/route.ts similarly)
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/server/supabase';
import { bookingSchema } from '@/lib/validation';
import { sendOwnerEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
    const data = await req.json().catch(() => ({}));
    const parsed = bookingSchema.safeParse(data);
    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
    }

    // … prepare payload …

    // Only touch Supabase if we actually have required envs
    if (process.env.SUPABASE_URL) {
        try {
            const { data: cust } = await supabaseAdmin
                .from('customers')
                .insert({
                    email: parsed.data.email,
                    phone: parsed.data.phone,
                    name: `${parsed.data.firstName} ${parsed.data.lastName}`,
                })
                .select()
                .single();

            const { data: lead } = await supabaseAdmin
                .from('leads')
                .insert({
                    customer_id: cust!.id,
                    source: 'web',
                    status: 'qualified',
                    payload: parsed.data,
                })
                .select()
                .single();

            await supabaseAdmin.from('bookings').insert({
                lead_id: lead!.id,
                start_time: new Date(parsed.data.date + 'T' + parsed.data.time + ':00').toISOString(),
                status: 'hold',
                notes: parsed.data.notes ?? null,
            });
        } catch (e) {
            console.warn('Supabase insert skipped because of error:', e);
        }
    }

    await sendOwnerEmail('New Booking Request (Hold Placed)');
    return NextResponse.json({ ok: true });
}
