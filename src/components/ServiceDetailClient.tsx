"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ServiceItem = {
    slug: string;
    title: string;
    intro?: string;
    inclusions?: string[];
    addons?: string[];
    industries?: string[];
};

export function ServiceDetailClient({
    svc,
    related,
}: {
    svc: ServiceItem;
    related: ServiceItem[];
}) {
    const inclusions = svc.inclusions ?? [];
    const addons = svc.addons ?? [];

    return (
        <section className="container pb-16">
            <div className="mt-8 hr" />

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
                {/* MAIN */}
                <motion.div
                    className="lg:col-span-8 card p-8 md:p-10"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-luxury-silver">
                            What’s included
                        </h2>
                        <span className="badge">Scope clarity</span>
                    </div>

                    <motion.ul
                        className="mt-5 grid gap-3 md:grid-cols-2"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.05 } },
                        }}
                    >
                        {inclusions.map((x, i) => (
                            <motion.li
                                key={`${x}-${i}`}
                                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    show: { opacity: 1, y: 0 },
                                }}
                            >
                                <span className="text-luxury-accent">✓</span>
                                <span className="text-sm text-luxury-silver/80 leading-relaxed">
                                    {x}
                                </span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {addons.length > 0 ? (
                        <>
                            <div className="mt-10 hr" />

                            <div className="flex items-center justify-between gap-4 mt-10">
                                <h2 className="text-xl md:text-2xl font-semibold text-luxury-silver">
                                    Optional add-ons
                                </h2>
                                <span className="badge">Upgrade options</span>
                            </div>

                            <motion.ul
                                className="mt-5 grid gap-3 md:grid-cols-2"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={{
                                    hidden: {},
                                    show: { transition: { staggerChildren: 0.05 } },
                                }}
                            >
                                {addons.map((x, i) => (
                                    <motion.li
                                        key={`${x}-${i}`}
                                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                                        variants={{
                                            hidden: { opacity: 0, y: 10 },
                                            show: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <span className="text-luxury-gold">＋</span>
                                        <span className="text-sm text-luxury-silver/80 leading-relaxed">
                                            {x}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </>
                    ) : null}

                    <div className="mt-10 panel p-7">
                        <div className="text-lg font-semibold text-luxury-silver">
                            Want a quote for <span className="gradient-text">{svc.title}</span>?
                        </div>
                        <div className="mt-2 text-sm text-luxury-silver/65 leading-relaxed">
                            Share your facility details and preferred schedule. We’ll build a scope and send a proposal—no public pricing.
                        </div>

                        <div className="mt-5 flex flex-col sm:flex-row gap-2">
                            <Link href="/booking" className="btn btn-primary w-full sm:w-auto justify-center">
                                Book walkthrough →
                            </Link>
                            <Link href="/contact" className="btn btn-outline w-full sm:w-auto justify-center">
                                Request proposal
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* STICKY ASIDE */}
                <motion.aside
                    className="lg:col-span-4"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                >
                    <div className="panel p-8 lg:sticky lg:top-28">
                        <div className="text-lg font-semibold text-luxury-silver">
                            Proposal checklist
                        </div>
                        <div className="mt-2 text-sm text-luxury-silver/65 leading-relaxed">
                            The fastest way to price accurately is to share:
                        </div>

                        <ul className="mt-5 space-y-3 text-sm text-luxury-silver/75">
                            {[
                                "Facility type and approximate size",
                                "Frequency (daily/weekly/monthly) and preferred hours",
                                "Priority areas: restrooms, glass, floors, high-touch",
                                "Any constraints: access, security, on-site contacts",
                            ].map((x) => (
                                <li key={x} className="flex gap-3">
                                    <span className="text-luxury-accent">•</span>
                                    <span>{x}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-col gap-2">
                            <Link href="/booking" className="btn btn-primary w-full justify-center">
                                Book walkthrough →
                            </Link>
                            <Link href="/contact" className="btn btn-outline w-full justify-center">
                                Request proposal
                            </Link>
                        </div>

                        <div className="mt-5 text-xs text-luxury-silver/55">
                            No public pricing — commercial scopes vary by site, finishes, and schedule.
                        </div>
                    </div>
                </motion.aside>
            </div>

            {/* RELATED */}
            <div className="mt-12 hr" />
            <div className="mt-10">
                <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold text-luxury-silver">
                        Related services
                    </div>
                    <Link href="/services" className="badge">
                        View all →
                    </Link>
                </div>

                <motion.div
                    className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.06 } },
                    }}
                >
                    {related.map((s) => (
                        <motion.div
                            key={s.slug}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                show: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 240, damping: 18 }}
                        >
                            <Link
                                href={`/services/${s.slug}`}
                                className="card p-7 block group"
                            >
                                <div className="text-base font-semibold text-luxury-silver">
                                    {s.title}
                                </div>
                                <div className="mt-2 text-sm text-luxury-silver/65 line-clamp-3">
                                    {s.intro ?? "View details, inclusions, and add-ons."}
                                </div>
                                <div className="mt-5">
                                    <span className="badge">View →</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
