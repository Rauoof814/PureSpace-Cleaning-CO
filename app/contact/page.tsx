"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SITE } from "@/lib/config";

const BUSINESS_EMAIL = "purespacecowa@gmail.com";
const BUSINESS_LOCATION = "Des Moines, WA"; // update anytime

const SERVICES = [
    { value: "", label: "Select a service" },
    { value: "office-janitorial", label: "Office Janitorial (Daily/Weekly)" },
    { value: "day-porter", label: "Day Porter" },
    { value: "medical-dental", label: "Medical & Dental (Non-Clinical)" },
    { value: "post-construction", label: "Post-Construction / TI" },
    { value: "windows", label: "Windows (Interior/Exterior)" },
    { value: "floor-care", label: "Floor Care (VCT/LVT/Concrete)" },
    { value: "carpet-extraction", label: "Carpet Extraction" },
    { value: "pressure-washing", label: "Pressure Washing" },
    { value: "disinfection", label: "High-Touch Disinfection" },
    { value: "airbnb-str", label: "Airbnb / STR Turnovers" },
    { value: "residential", label: "Residential Programs" },
    { value: "other", label: "Other" },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        website: "", // honeypot (hidden)
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<
        { type: "success" | "error"; message: string } | null
    >(null);

    const inputBase = useMemo(
        () =>
            [
                "w-full rounded-2xl px-4 py-3",
                "bg-white/5 text-luxury-silver placeholder:text-luxury-silver/35",
                "border border-white/10",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
                "outline-none transition",
                "focus:border-luxury-accent/50 focus:ring-2 focus:ring-luxury-accent/20",
                "hover:border-white/15",
            ].join(" "),
        []
    );

    const selectBase = useMemo(
        () =>
            [
                inputBase,
                "appearance-none pr-12",
                "cursor-pointer",
            ].join(" "),
        [inputBase]
    );

    const labelBase = "block text-sm font-medium text-luxury-silver/85 mb-2";
    const helperBase = "mt-2 text-xs text-luxury-silver/55 leading-relaxed";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(null);
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setStatus({
                    type: "error",
                    message:
                        data?.error ||
                        "Something went wrong. Please try again or email us directly.",
                });
                return;
            }

            setStatus({
                type: "success",
                message: "Message sent! We received it and will reply as soon as possible.",
            });

            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: "",
                website: "",
            });
        } catch {
            setStatus({
                type: "error",
                message: "Network error. Please try again or email us directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-darker via-luxury-dark to-luxury-dark" />
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-luxury-accent/10 blur-3xl" />
                    <div className="absolute -bottom-56 -right-40 h-[620px] w-[620px] rounded-full bg-luxury-gold/10 blur-3xl" />
                </div>

                <div className="container relative z-10 py-16 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="max-w-3xl"
                    >
                        <div className="kicker w-fit">Contact</div>
                        <h1 className="mt-6 text-4xl md:text-6xl h-title text-luxury-silver">
                            Request a proposal or schedule a walkthrough
                        </h1>
                        <p className="mt-4 p-lead text-luxury-silver/70">
                            Send details about your space and preferred schedule. We’ll respond quickly with next steps.
                            No public pricing — scopes vary by site.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {["Licensed", "Insured", "Bonded", "Commercial-grade"].map((x) => (
                                <span key={x} className="badge">
                                    {x}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="py-14 md:py-16">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                        {/* FORM */}
                        <motion.div
                            className="lg:col-span-7 card p-7 md:p-9"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-luxury-silver">
                                        Send a message
                                    </h2>
                                    <p className="mt-2 text-sm text-luxury-silver/65">
                                        Share details and we’ll build a proposal.
                                    </p>
                                </div>

                                <div className="hidden md:flex flex-wrap gap-2 justify-end">
                                    {["Fast response", "Custom scope", "After-hours available"].map((x) => (
                                        <span key={x} className="badge">
                                            {x}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Status */}
                            {status && (
                                <div
                                    className={[
                                        "mt-6 p-4 rounded-2xl border",
                                        status.type === "success"
                                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                                            : "bg-red-500/10 border-red-500/30 text-red-300",
                                    ].join(" ")}
                                >
                                    {status.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                {/* Honeypot */}
                                <input
                                    type="text"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelBase}>Name *</label>
                                        <input
                                            type="text"
                                            className={inputBase}
                                            placeholder="Full name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className={labelBase}>Email *</label>
                                        <input
                                            type="email"
                                            className={inputBase}
                                            placeholder="name@company.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelBase}>Company</label>
                                        <input
                                            type="text"
                                            className={inputBase}
                                            placeholder="Company (optional)"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className={labelBase}>Phone *</label>
                                        <input
                                            type="tel"
                                            className={inputBase}
                                            placeholder="(360) 523-0312"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                        />
                                        <div className={helperBase}>
                                            We use this to confirm walkthrough details quickly.
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className={labelBase}>Service needed</label>
                                    <select
                                        className={selectBase}
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        {SERVICES.map((s) => (
                                            <option key={s.value} value={s.value} className="bg-slate-950 text-white">
                                                {s.label}
                                            </option>
                                        ))}
                                    </select>

                                    {/* custom dropdown arrow */}
                                    <div className="pointer-events-none absolute right-4 top-[42px] text-luxury-silver/55">
                                        ▼
                                    </div>
                                </div>

                                <div>
                                    <label className={labelBase}>Message *</label>
                                    <textarea
                                        rows={6}
                                        className={inputBase}
                                        placeholder="Facility type, approximate sq ft, frequency, and priorities (restrooms, floors, glass, after-hours access, etc.)"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary w-full justify-center py-4"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send message"}
                                </motion.button>

                                <p className="text-sm text-luxury-silver/60">
                                    Prefer email? Send directly to{" "}
                                    <a className="text-luxury-accent hover:underline" href={`mailto:${BUSINESS_EMAIL}`}>
                                        {BUSINESS_EMAIL}
                                    </a>
                                    .
                                </p>
                            </form>
                        </motion.div>

                        {/* INFO */}
                        <motion.aside
                            className="lg:col-span-5 space-y-6"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                        >
                            <div className="panel p-7 md:p-8">
                                <h3 className="text-xl font-semibold text-luxury-silver">
                                    Contact information
                                </h3>

                                <div className="mt-6 space-y-4">
                                    <a
                                        href={SITE.telHref}
                                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10 transition"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-luxury-accent/10 border border-luxury-accent/15 flex items-center justify-center">
                                            <span className="text-luxury-accent text-lg">📞</span>
                                        </div>
                                        <div>
                                            <div className="text-sm text-luxury-silver/70">Phone</div>
                                            <div className="text-luxury-accent font-semibold">{SITE.phone}</div>
                                        </div>
                                    </a>

                                    <a
                                        href={`mailto:${BUSINESS_EMAIL}`}
                                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 hover:bg-white/10 transition"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-luxury-gold/10 border border-luxury-gold/15 flex items-center justify-center">
                                            <span className="text-luxury-gold text-lg">✉️</span>
                                        </div>
                                        <div>
                                            <div className="text-sm text-luxury-silver/70">Email</div>
                                            <div className="text-luxury-silver font-semibold">{BUSINESS_EMAIL}</div>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                                        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <span className="text-luxury-silver text-lg">📍</span>
                                        </div>
                                        <div>
                                            <div className="text-sm text-luxury-silver/70">Location</div>
                                            <div className="text-luxury-silver font-semibold">{BUSINESS_LOCATION}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-7 hr" />

                                <div className="mt-7">
                                    <div className="text-sm font-semibold text-luxury-silver">
                                        Response time
                                    </div>
                                    <p className="mt-2 text-sm text-luxury-silver/65 leading-relaxed">
                                        We typically respond same-day or next business day.
                                    </p>
                                </div>
                            </div>

                            <div className="panel p-7 md:p-8">
                                <h3 className="text-xl font-semibold text-luxury-silver">
                                    Business hours
                                </h3>

                                <div className="mt-5 space-y-3 text-sm">
                                    {[
                                        { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                                        { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                                        { day: "Sunday", hours: "9:00 AM – 4:00 PM" },
                                    ].map((row) => (
                                        <div key={row.day} className="flex items-center justify-between">
                                            <span className="text-luxury-silver/80">{row.day}</span>
                                            <span className="text-luxury-accent font-semibold">{row.hours}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 text-xs text-luxury-silver/55 leading-relaxed">
                                    After-hours cleaning is available for commercial clients (evenings/overnights).
                                </div>

                                <div className="mt-7">
                                    <a href="/booking" className="btn btn-primary w-full justify-center">
                                        Book walkthrough →
                                    </a>
                                </div>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
