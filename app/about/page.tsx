import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
    title: "About | PureSpace Cleaning Co.",
    description:
        "Learn how PureSpace delivers premium commercial cleaning across Washington with clear scopes, consistent schedules, and quality inspections.",
};

const pillars = [
    {
        kicker: "Scope",
        title: "Scope first, always",
        body:
            "We define exactly what gets cleaned, how often, and what “done” looks like — so expectations stay aligned and results stay consistent.",
    },
    {
        kicker: "Quality",
        title: "Inspection-driven standards",
        body:
            "Audited checklists, periodic inspections, and issue tracking keep high-visibility areas presentation-ready.",
    },
    {
        kicker: "Reliability",
        title: "Quiet, on-time crews",
        body:
            "Discreet operations, keyed-access protocols, and supply reporting — designed for professional environments.",
    },
];

const steps = [
    {
        n: "01",
        title: "Walkthrough & intake",
        body:
            "We review the facility, traffic patterns, floor types, restrooms, break areas, and access/security requirements.",
    },
    {
        n: "02",
        title: "Written scope & schedule",
        body:
            "You get a clear scope, checklist, and frequency plan aligned to your priorities and budget.",
    },
    {
        n: "03",
        title: "Start + quality checkpoints",
        body:
            "We launch the service, then verify consistency with inspections and continuous improvement.",
    },
];

const values = [
    { title: "Professional presentation", body: "First impressions: lobby, restrooms, glass, and touchpoints." },
    { title: "Safety & care", body: "Respect for your staff, customers, and facility surfaces." },
    { title: "Communication", body: "Simple reporting, fast response, and clear next steps." },
];

export default function About() {
    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <div className="container relative z-10 py-14 md:py-18">
                    <div className="max-w-4xl">
                        <div className="kicker w-fit">Company</div>
                        <h1 className="mt-6 text-5xl md:text-7xl font-bold luxury-heading text-luxury-silver">
                            Built for <span className="gradient-text">first impressions</span>
                        </h1>
                        <p className="mt-4 text-lg text-luxury-silver/70 max-w-3xl">
                            {SITE.name} delivers premium commercial cleaning with clear scopes, reliable schedules, and inspection-led
                            quality — built for offices and facilities that care about presentation.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-2">
                            <Link href="/booking" className="btn btn-primary w-full sm:w-auto justify-center">
                                Book walkthrough →
                            </Link>
                            <Link href="/services" className="btn btn-outline w-full sm:w-auto justify-center">
                                Explore services
                            </Link>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2">
                            {["Licensed", "Insured", "Bonded", "Checklist Inspections", "After-hours Options"].map((t) => (
                                <span key={t} className="badge">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container pb-20">
                <div className="mt-10 hr" />

                {/* Pillars */}
                <section className="mt-10 grid gap-6 lg:grid-cols-3">
                    {pillars.map((p) => (
                        <div key={p.title} className="card p-8">
                            <div className="text-sm text-luxury-silver/60 tracking-[0.18em] uppercase">{p.kicker}</div>
                            <div className="mt-3 text-xl font-semibold text-luxury-silver">{p.title}</div>
                            <p className="mt-2 text-sm text-luxury-silver/70 leading-relaxed">{p.body}</p>
                        </div>
                    ))}
                </section>

                {/* Verified licensing */}
                <section className="mt-10 panel p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                        <div className="max-w-2xl">
                            <div className="kicker w-fit">Verified</div>
                            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-luxury-silver">
                                Licensed business in Washington
                            </h2>
                            <p className="mt-3 text-luxury-silver/70">
                                We operate with proper registration and keep documentation available for vendor onboarding and site
                                requirements.
                            </p>
                            <div className="mt-6 flex flex-col sm:flex-row gap-2">
                                <Link href="/contact" className="btn btn-primary w-full sm:w-auto justify-center">
                                    Request proof package →
                                </Link>
                                <Link href="/case-studies" className="btn btn-outline w-full sm:w-auto justify-center">
                                    View case studies
                                </Link>
                            </div>
                        </div>

                        <div className="card p-7 w-full lg:w-[420px]">
                            <div className="text-sm text-luxury-silver/60 tracking-[0.18em] uppercase">Business license</div>
                            <div className="mt-4 space-y-2 text-sm text-luxury-silver/75">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-luxury-silver/70">UBI</span>
                                    <span className="text-luxury-silver font-semibold">605634964</span>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-luxury-silver/70">Issue date</span>
                                    <span className="text-luxury-silver font-semibold">Oct 31, 2025</span>
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-luxury-silver/70">Expires</span>
                                    <span className="text-luxury-silver font-semibold">Oct 31, 2026</span>
                                </div>
                                <div className="mt-4 hr" />
                                <div className="text-xs text-luxury-silver/60 leading-relaxed">
                                    City/County endorsement: Auburn Home Occupation Business #BUS-44947 (active).
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How we start */}
                <section className="mt-10">
                    <div className="max-w-3xl">
                        <div className="kicker w-fit">Process</div>
                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-luxury-silver">
                            How onboarding works
                        </h2>
                        <p className="mt-3 text-luxury-silver/70">
                            Clean transitions, clear scope, and consistent results — without disruption.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-3">
                        {steps.map((s) => (
                            <div key={s.n} className="card p-8">
                                <div className="text-luxury-accent font-semibold">{s.n}</div>
                                <div className="mt-3 text-xl font-semibold text-luxury-silver">{s.title}</div>
                                <p className="mt-2 text-sm text-luxury-silver/70 leading-relaxed">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values */}
                <section className="mt-10 grid gap-6 lg:grid-cols-3">
                    {values.map((v) => (
                        <div key={v.title} className="card p-8">
                            <div className="text-xl font-semibold text-luxury-silver">{v.title}</div>
                            <p className="mt-2 text-sm text-luxury-silver/70 leading-relaxed">{v.body}</p>
                        </div>
                    ))}
                </section>

                {/* CTA */}
                <section className="mt-12 panel p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <div className="text-lg font-semibold text-luxury-silver">Want a custom scope?</div>
                        <div className="mt-1 text-sm text-luxury-silver/65">
                            Book a walkthrough and we’ll build a scope tailored to your facility.
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                        <Link href="/booking" className="btn btn-primary w-full sm:w-auto justify-center">
                            Book walkthrough →
                        </Link>
                        <Link href="/contact" className="btn btn-outline w-full sm:w-auto justify-center">
                            Talk to us
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

