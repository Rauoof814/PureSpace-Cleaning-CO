// 'use client';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { SITE } from '@/lib/config';

// export function Footer() {
//     const services = [
//         'Commercial Janitorial', 'Medical Facility Cleaning', 'Construction Cleanup',
//         'Carpet & Upholstery', 'Floor Stripping & Waxing', 'Window Cleaning',
//         'Pressure Washing', 'Junk Removal', 'Deep Cleaning', 'Post-Event Cleaning',
//         'HVAC Cleaning', 'Sanitization Services', 'Emergency Response', 'Green Cleaning'
//     ];

//     const industries = [
//         'Corporate Offices', 'Healthcare Facilities', 'Educational Institutions',
//         'Retail Centers', 'Industrial Complexes', 'Hospitality & Hotels',
//         'Government Buildings', 'Financial Institutions', 'Technology Parks',
//         'Sports Facilities', 'Religious Institutions', 'Restaurants'
//     ];

//     return (
//         <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
//             {/* Animated Background */}
//             <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
//             <motion.div
//                 className="absolute top-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"
//                 animate={{
//                     x: [0, 100, 0],
//                     y: [0, -50, 0],
//                 }}
//                 transition={{ duration: 20, repeat: Infinity }}
//             />

//             <div className="container relative z-10">
//                 {/* Main Footer Content */}
//                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 py-20">
//                     {/* Brand Column */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="lg:col-span-1"
//                     >
//                         <motion.div
//                             className="flex items-center gap-3 mb-6"
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <div className="w-12 h-12 bg-gradient-to-r from-accent-gold to-accent-teal rounded-2xl flex items-center justify-center shadow-lg">
//                                 <span className="text-white font-bold text-lg">PS</span>
//                             </div>
//                             <div className="flex flex-col">
//                                 <span className="text-2xl font-bold luxury-heading">PureSpace</span>
//                                 <span className="text-accent-gold text-sm font-semibold">COMMERCIAL SOLUTIONS</span>
//                             </div>
//                         </motion.div>
//                         <p className="text-slate-300 mb-6 leading-relaxed">
//                             Enterprise-grade cleaning solutions for Fortune 500 companies,
//                             healthcare facilities, and premium commercial spaces.
//                             24/7 professional services across Washington State.
//                         </p>

//                         {/* Trust Badges */}
//                         <div className="flex flex-wrap gap-4">
//                             {['Certified', 'Insured', 'Bonded', 'Eco-Friendly'].map((badge) => (
//                                 <motion.div
//                                     key={badge}
//                                     className="px-3 py-1 bg-white/10 rounded-full text-xs backdrop-blur"
//                                     whileHover={{ scale: 1.05 }}
//                                 >
//                                     {badge}
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* Services Column */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                     >
//                         <h3 className="text-lg font-semibold mb-6 text-accent-teal">Our Services</h3>
//                         <div className="grid grid-cols-2 gap-2">
//                             {services.map((service, index) => (
//                                 <motion.div
//                                     key={service}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     transition={{ duration: 0.4, delay: index * 0.05 }}
//                                 >
//                                     <Link
//                                         href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
//                                         className="text-slate-300 hover:text-accent-gold text-sm transition-colors duration-300 block py-1"
//                                     >
//                                         {service}
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* Industries Column */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                     >
//                         <h3 className="text-lg font-semibold mb-6 text-accent-teal">Industries</h3>
//                         <div className="grid grid-cols-2 gap-2">
//                             {industries.map((industry, index) => (
//                                 <motion.div
//                                     key={industry}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     transition={{ duration: 0.4, delay: index * 0.05 }}
//                                 >
//                                     <Link
//                                         href={`/industries/${industry.toLowerCase().replace(/\s+/g, '-')}`}
//                                         className="text-slate-300 hover:text-accent-gold text-sm transition-colors duration-300 block py-1"
//                                     >
//                                         {industry}
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* Contact Column */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                     >
//                         <h3 className="text-lg font-semibold mb-6 text-accent-teal">Get In Touch</h3>
//                         <div className="space-y-4">
//                             <motion.a
//                                 href={SITE.telHref}
//                                 className="flex items-center gap-3 text-slate-300 hover:text-accent-gold transition-colors duration-300 group"
//                                 whileHover={{ x: 5 }}
//                             >
//                                 <div className="w-10 h-10 bg-accent-gold/20 rounded-full flex items-center justify-center group-hover:bg-accent-gold/30 transition-colors">
//                                     📞
//                                 </div>
//                                 <div>
//                                     <div className="font-semibold">Emergency Line</div>
//                                     <div className="text-sm">{SITE.phone}</div>
//                                 </div>
//                             </motion.a>

//                             <motion.div
//                                 className="flex items-center gap-3 text-slate-300 group"
//                                 whileHover={{ x: 5 }}
//                             >
//                                 <div className="w-10 h-10 bg-accent-teal/20 rounded-full flex items-center justify-center group-hover:bg-accent-teal/30 transition-colors">
//                                     ✉️
//                                 </div>
//                                 <div>
//                                     <div className="font-semibold">Email Us</div>
//                                     <div className="text-sm">contact@purespace.com</div>
//                                 </div>
//                             </motion.div>

//                             <motion.div
//                                 className="mt-6"
//                                 whileHover={{ scale: 1.02 }}
//                             >
//                                 <Link
//                                     href="/booking"
//                                     className="btn btn-primary w-full text-center"
//                                 >
//                                     Schedule Consultation
//                                 </Link>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                     className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center"
//                 >
//                     <div className="text-slate-400 text-sm">
//                         © {new Date().getFullYear()} {SITE.name}. All rights reserved.
//                     </div>
//                     <div className="flex gap-6 mt-4 md:mt-0">
//                         {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
//                             <Link
//                                 key={item}
//                                 href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                                 className="text-slate-400 hover:text-accent-gold text-sm transition-colors"
//                             >
//                                 {item}
//                             </Link>
//                         ))}
//                     </div>
//                 </motion.div>
//             </div>
//         </footer>
//     );
// }



'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SITE } from '@/lib/config';

const SERVICES = [
    'Office Janitorial (Daily/Weekly)',
    'Day Porter',
    'Medical & Dental (Non-Clinical)',
    'Post-Construction / TI',
    'Windows (Interior/Exterior)',
    'Floor Care (VCT / LVT / Concrete)',
    'Carpet Extraction',
    'Pressure Washing',
    'High-Touch Disinfection',
    'Airbnb / STR Turnovers',
];

const INDUSTRIES = [
    'Corporate Offices',
    'Healthcare (Non-Clinical)',
    'Retail & Showrooms',
    'Education',
    'Property Management',
    'Construction / Builders',
    'Industrial',
    'HOA / Multifamily',
];

function slugify(label: string) {
    return label
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative mt-16">
            <div className="container">
                <div className="hr" />
            </div>

            <div className="container py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <motion.div
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                        >
                            <div className="relative h-10 w-10">
                                <Image src="/logo_1.png" alt="PureSpace" fill className="object-contain" />
                            </div>
                            <div className="leading-tight">
                                <div className="text-luxury-silver font-semibold tracking-wide">
                                    {SITE?.name ?? 'PureSpace'}
                                </div>
                                <div className="text-[11px] text-luxury-silver/60 tracking-[0.22em]">
                                    COMMERCIAL CLEANING
                                </div>
                            </div>
                        </motion.div>

                        <p className="mt-4 text-sm text-luxury-silver/70 leading-relaxed max-w-md">
                            Premium commercial cleaning built around consistency: clear scope, reliable schedules,
                            and quality inspections. Designed for offices and facilities that care about presentation.
                        </p>

                        {/* Trust chips (no fake claims) */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {['Licensed', 'Insured', 'Checklists', 'Quality Inspections', 'Eco Options'].map((x) => (
                                <span key={x} className="badge">
                                    {x}
                                </span>
                            ))}
                        </div>

                        {/* Contact */}
                        <div className="mt-6 panel p-5">
                            <div className="text-sm text-luxury-silver/70">Contact</div>
                            <div className="mt-2 flex flex-col gap-2">
                                <a href={SITE.telHref} className="btn btn-outline justify-center md:justify-start">
                                    Call {SITE.phone}
                                </a>

                                {/* Email: use SITE.email if you have it; fallback placeholder */}
                                <a
                                    href={`mailto:${(SITE as any)?.email ?? 'contact@purespace.space'}`}
                                    className="btn btn-ghost justify-center md:justify-start"
                                >
                                    Email {(SITE as any)?.email ?? 'contact@purespace.space'}
                                </a>

                                <div className="mt-2 text-xs text-luxury-silver/55 leading-relaxed">
                                    Service area: Auburn • Seattle • Bellevue • Tacoma (and surrounding).
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-4">
                        <div className="text-sm font-semibold text-luxury-silver">Services</div>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {SERVICES.map((name) => (
                                <Link
                                    key={name}
                                    href={`/services/${slugify(name)}`}
                                    className="text-sm text-luxury-silver/70 hover:text-luxury-silver transition-colors"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-6">
                            <Link href="/services" className="btn btn-outline w-full justify-center">
                                View all services →
                            </Link>
                        </div>
                    </div>

                    {/* Industries */}
                    <div className="lg:col-span-4">
                        <div className="text-sm font-semibold text-luxury-silver">Industries</div>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                            {INDUSTRIES.map((name) => (
                                <Link
                                    key={name}
                                    href={`/industries#${slugify(name)}`}
                                    className="text-sm text-luxury-silver/70 hover:text-luxury-silver transition-colors"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-6 panel p-5">
                            <div className="text-sm text-luxury-silver/75">Hours</div>
                            <div className="mt-1 text-sm text-luxury-silver/65">
                                Mon–Sat: 7am–7pm • After-hours cleaning available by schedule
                            </div>
                            <div className="mt-4 flex gap-2">
                                <Link href="/booking" className="btn btn-primary w-full justify-center">
                                    Book walkthrough →
                                </Link>
                            </div>
                            <div className="mt-2 text-xs text-luxury-silver/55">
                                No public pricing — proposals are customized by facility.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 hr" />
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-luxury-silver/55">
                        © {year} {SITE?.name ?? 'PureSpace'}. All rights reserved.
                    </div>
                    <div className="flex items-center gap-5 text-xs">
                        <Link href="/privacy-policy" className="text-luxury-silver/55 hover:text-luxury-silver transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms-of-service" className="text-luxury-silver/55 hover:text-luxury-silver transition-colors">
                            Terms
                        </Link>
                        <Link href="/sitemap.xml" className="text-luxury-silver/55 hover:text-luxury-silver transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
