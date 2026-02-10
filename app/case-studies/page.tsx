import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Case Studies | PureSpace",
    description:
        "Select commercial cleaning results and project summaries. Details may be shared on request depending on confidentiality.",
};

const items = [
    {
        title: "Office Janitorial Program Reset",
        subtitle: "Multi-tenant office • Recurring schedule",
        outcome: "Cleaner first impressions, fewer complaints, consistent restrooms + lobby presentation.",
        bullets: [
            "Defined scope + high-touch plan for restrooms, lobby, glass, and touchpoints",
            "Inspection checklist + issue tracking workflow",
            "Supply reporting + access protocols to reduce interruptions",
        ],
    },
    {
        title: "Post-Construction Final Clean",
        subtitle: "Tenant improvement • Handoff-ready finish",
        outcome: "Handoff-ready finish for walkthrough, punch-list aligned to builder expectations.",
        bullets: [
            "HEPA dusting + detail finishing for trim, corners, vents, and ledges",
            "Sticker/glue removal + glass polish for a crisp final look",
            "Punch-list detail support for closeout walkthrough",
        ],
    },
    {
        title: "Retail & Showroom Presentation Care",
        subtitle: "High-visibility space • Floor + glass focus",
        outcome: "Better lighting clarity, cleaner entry experience, consistent shine without residue.",
        bullets: [
            "Merch-first cleaning routines (low disruption to displays)",
            "Entry + glass detail for lighting aesthetics and visibility",
            "Floor care plan aligned to traffic patterns and finish type",
        ],
    },
];

const proof = [
    { title: "Scope examples", body: "Sample scopes by facility type and frequency (daily/weekly).", icon: "📄" },
    { title: "Inspection checklist", body: "Audited checklist categories for high-visibility areas.", icon: "✅" },
    { title: "Vendor onboarding", body: "W-9, COI (if applicable), and basic compliance docs on request.", icon: "🧾" },
    { title: "References", body: "Shared when approved — many clients prefer confidentiality.", icon: "🔒" },
];

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <div className="container relative z-10 py-14 md:py-18">
                    <div className="max-w-4xl">
                        <div className="kicker w-fit">Case Studies</div>
                        <h1 className="mt-6 text-5xl md:text-7xl font-bold luxury-heading text-luxury-silver">
                            Results, <span className="gradient-text">summarized</span>
                        </h1>
                        <p className="mt-4 text-lg text-luxury-silver/70 max-w-3xl">
                            Many commercial clients prefer privacy. We share project details, references, and documentation when
                            appropriate and approved.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-2">
                            <Link href="/contact" className="btn btn-primary w-full sm:w-auto justify-center">
                                Request references →
                            </Link>
                            <Link href="/booking" className="btn btn-outline w-full sm:w-auto justify-center">
                                Book walkthrough
                            </Link>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2">
                            {["Confidentiality-first", "Inspection-led quality", "Custom scopes", "After-hours scheduling"].map((t) => (
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

                {/* Case cards */}
                <section className="mt-10 grid gap-6 lg:grid-cols-3">
                    {items.map((x) => (
                        <div key={x.title} className="card p-8">
                            <div className="text-lg font-semibold text-luxury-silver">{x.title}</div>
                            <div className="mt-1 text-sm text-luxury-silver/60">{x.subtitle}</div>

                            <div className="mt-5">
                                <div className="text-sm font-semibold text-luxury-silver">Outcome</div>
                                <p className="mt-2 text-sm text-luxury-silver/70 leading-relaxed">{x.outcome}</p>
                            </div>

                            <div className="mt-6 hr" />

                            <div className="mt-6 text-sm font-semibold text-luxury-silver">What we delivered</div>
                            <ul className="mt-3 space-y-2 text-sm text-luxury-silver/75">
                                {x.bullets.map((b) => (
                                    <li key={b} className="flex gap-2">
                                        <span className="text-luxury-accent">•</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-7">
                                <Link href="/contact" className="btn btn-outline w-full justify-center">
                                    Ask about a similar scope →
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Proof package */}
                <section className="mt-12 panel p-8 md:p-10">
                    <div className="max-w-3xl">
                        <div className="kicker w-fit">Proof package</div>
                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-luxury-silver">
                            Want documentation for onboarding?
                        </h2>
                        <p className="mt-3 text-luxury-silver/70">
                            We can provide scope examples, checklist outlines, and references where allowed.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {proof.map((p) => (
                            <div key={p.title} className="card p-7">
                                <div className="text-2xl">{p.icon}</div>
                                <div className="mt-4 text-lg font-semibold text-luxury-silver">{p.title}</div>
                                <p className="mt-2 text-sm text-luxury-silver/70 leading-relaxed">{p.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="text-lg font-semibold text-luxury-silver">Ready for a proposal?</div>
                            <div className="mt-1 text-sm text-luxury-silver/65">
                                Tell us your schedule, priorities, and facility type — we’ll build a scope.
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                            <Link href="/contact" className="btn btn-primary w-full sm:w-auto justify-center">
                                Request a proposal →
                            </Link>
                            <Link href="/services" className="btn btn-outline w-full sm:w-auto justify-center">
                                Explore services
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
