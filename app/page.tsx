'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const PHONE_DISPLAY = '360-523-0312';
const PHONE_TEL = 'tel:+13605230312';

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.08 * i } }),
};

export default function Home() {
    const services = [
        {
            title: 'Commercial Janitorial',
            desc: 'Daily and nightly cleaning programs built for offices, multi-tenant buildings, and corporate campuses.',
            bullets: ['Day porter / night janitorial', 'Restroom + breakroom detail', 'Quality checklists & reporting'],
            href: '/services/commercial-janitorial',
        },
        {
            title: 'Medical Facility Cleaning',
            desc: 'High-standard sanitation for clinics and medical spaces with consistent protocols.',
            bullets: ['High-touch disinfection', 'Restroom compliance focus', 'After-hours workflows'],
            href: '/services/medical-facility-cleaning',
        },
        {
            title: 'Construction Cleanup',
            desc: 'Post-construction cleaning that makes the space move-in ready and presentable for handoff.',
            bullets: ['Dust + debris removal', 'Final detail clean', 'Glass + trim finishing'],
            href: '/services/construction-cleanup',
        },
    ];

    const process = [
        { title: 'Walkthrough', desc: 'We visit your site, understand traffic patterns, and identify high-touch areas.' },
        { title: 'Proposal', desc: 'You receive a clear scope, schedule, and pricing—no confusion, no fluff.' },
        { title: 'Launch', desc: 'We deploy a trained team with checklists and quality inspections.' },
        { title: 'Quality', desc: 'Ongoing audits and updates to keep your facility consistently sharp.' },
    ];

    return (
        <div className="min-h-screen">
            {/* HERO */}
            <section className="section relative overflow-hidden">
                {/* subtle background accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-luxury-accent/10 blur-3xl" />
                    <div className="absolute -top-24 -right-48 h-[520px] w-[520px] rounded-full bg-luxury-gold/10 blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
                </div>

                <div className="container relative">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7">
                            <motion.div
                                className="kicker w-fit"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={0}
                            >
                                Premium Commercial Cleaning
                                <span className="badge">Seattle Area</span>
                            </motion.div>

                            <motion.h1
                                className="mt-6 text-5xl md:text-6xl lg:text-7xl h-display text-premium"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={1}
                            >
                                A cleaner facility
                                <br />
                                that looks executive.
                            </motion.h1>

                            <motion.p
                                className="mt-6 text-base md:text-lg p-lead max-w-2xl"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={2}
                            >
                                PureSpace delivers consistent, professional cleaning for offices and commercial environments.
                                Clear scope. Reliable schedules. Quality you can feel when clients walk in.
                            </motion.p>

                            <motion.div
                                className="mt-8 flex flex-col sm:flex-row gap-3"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={3}
                            >
                                <Link href="/booking" className="btn btn-primary">
                                    Book a Walkthrough
                                    <span aria-hidden>→</span>
                                </Link>
                                <a href={PHONE_TEL} className="btn btn-outline">
                                    Call {PHONE_DISPLAY}
                                </a>
                                <Link href="/contact" className="btn btn-ghost">
                                    Request a Proposal
                                </Link>
                            </motion.div>

                            {/* Trust row */}
                            <motion.div
                                className="mt-10 panel p-6"
                                initial="hidden"
                                animate="show"
                                variants={fadeUp}
                                custom={4}
                            >
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div>
                                        <div className="text-sm text-luxury-silver/70">Response</div>
                                        <div className="mt-1 text-xl font-semibold text-luxury-silver">Fast scheduling</div>
                                        <div className="mt-1 text-sm text-luxury-silver/60">Walkthroughs and quotes without delays.</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-luxury-silver/70">Quality</div>
                                        <div className="mt-1 text-xl font-semibold text-luxury-silver">Checklists + inspections</div>
                                        <div className="mt-1 text-sm text-luxury-silver/60">Clear standards so results stay consistent.</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-luxury-silver/70">Coverage</div>
                                        <div className="mt-1 text-xl font-semibold text-luxury-silver">Office + commercial</div>
                                        <div className="mt-1 text-sm text-luxury-silver/60">Programs built around your facility.</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right premium panel */}
                        <div className="lg:col-span-5">
                            <motion.div
                                className="panel p-8"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55 }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="text-sm text-luxury-silver/70">Next available</div>
                                        <div className="mt-1 text-2xl font-semibold text-luxury-silver">
                                            This week
                                        </div>
                                        <div className="mt-2 text-sm text-luxury-silver/60">
                                            Book a walkthrough and we’ll build a scope that fits your facility.
                                        </div>
                                    </div>
                                    <div className="badge">B2B</div>
                                </div>

                                <div className="mt-6 hr" />

                                <div className="mt-6 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-luxury-silver/70">Office suites</span>
                                        <span className="text-sm text-luxury-silver/90">Daily / Weekly</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-luxury-silver/70">Buildings</span>
                                        <span className="text-sm text-luxury-silver/90">Night janitorial</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-luxury-silver/70">Medical spaces</span>
                                        <span className="text-sm text-luxury-silver/90">Protocol-based</span>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-3">
                                    <Link href="/booking" className="btn btn-primary w-full">
                                        Book Now
                                        <span aria-hidden>→</span>
                                    </Link>
                                </div>

                                <div className="mt-4 text-xs text-luxury-silver/55">
                                    Tip: if you don’t have “500+ clients”, don’t claim it. Luxury buyers notice fast.
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* “Client logos” placeholder row (premium look) */}
                    <div className="mt-14">
                        <div className="text-xs tracking-widest uppercase text-luxury-silver/55">
                            Trusted by facilities that care about presentation
                        </div>
                        <div className="mt-4 grid-logos">
                            {['Corporate Offices', 'Medical Clinics', 'Property Managers', 'Commercial Buildings'].map((x) => (
                                <div key={x} className="card px-4 py-3 text-center text-sm text-luxury-silver/70">
                                    {x}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="section">
                <div className="container">
                    <div className="max-w-2xl">
                        <div className="kicker w-fit">Solutions</div>
                        <h2 className="mt-5 text-3xl md:text-4xl h-title text-luxury-silver">
                            Commercial services built for consistency.
                        </h2>
                        <p className="mt-4 p-lead">
                            Clean design. Clean scope. Clean execution. Your facility should feel premium every day—not just after a deep clean.
                        </p>
                    </div>

                    <div className="mt-10 grid md:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                className="card p-7"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-80px' }}
                                variants={fadeUp}
                                custom={i}
                            >
                                <div className="text-lg font-semibold text-luxury-silver">{s.title}</div>
                                <p className="mt-3 text-sm text-luxury-silver/65 leading-relaxed">{s.desc}</p>

                                <ul className="mt-5 space-y-2 text-sm text-luxury-silver/75">
                                    {s.bullets.map((b) => (
                                        <li key={b} className="flex gap-2">
                                            <span className="text-luxury-accent">•</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6">
                                    <Link href={s.href} className="btn btn-outline w-full">
                                        View details
                                        <span aria-hidden>→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 hr" />
                </div>
            </section>

            {/* PROCESS */}
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-5">
                            <div className="kicker w-fit">How it works</div>
                            <h2 className="mt-5 text-3xl md:text-4xl h-title text-luxury-silver">
                                Simple process. Executive results.
                            </h2>
                            <p className="mt-4 p-lead">
                                Luxury isn’t loud. It’s consistent. Here’s how we keep your space looking sharp.
                            </p>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="grid md:grid-cols-2 gap-6">
                                {process.map((p, i) => (
                                    <motion.div
                                        key={p.title}
                                        className="card p-7"
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true, margin: '-80px' }}
                                        variants={fadeUp}
                                        custom={i}
                                    >
                                        <div className="badge w-fit">0{i + 1}</div>
                                        <div className="mt-3 text-lg font-semibold text-luxury-silver">{p.title}</div>
                                        <div className="mt-2 text-sm text-luxury-silver/65 leading-relaxed">{p.desc}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 panel p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="text-lg font-semibold text-luxury-silver">Want a walkthrough this week?</div>
                            <div className="mt-1 text-sm text-luxury-silver/65">
                                Book now or call and we’ll schedule a site visit.
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <Link href="/booking" className="btn btn-primary w-full sm:w-auto">Book Walkthrough</Link>
                            <a href={PHONE_TEL} className="btn btn-outline w-full sm:w-auto">Call {PHONE_DISPLAY}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
