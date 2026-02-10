// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';

// type ServiceItem = {
//     slug: string;
//     title: string;
//     intro?: string;
//     industries?: string[];
// };

// export function ServicesGridMotion({ services }: { services: ServiceItem[] }) {
//     return (
//         <motion.div
//             className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
//             initial="hidden"
//             animate="show"
//             variants={{
//                 hidden: {},
//                 show: { transition: { staggerChildren: 0.06 } },
//             }}
//         >
//             {services.map((s) => (
//                 <motion.div
//                     key={s.slug}
//                     variants={{
//                         hidden: { opacity: 0, y: 14 },
//                         show: { opacity: 1, y: 0 },
//                     }}
//                     whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
//                     transition={{ type: 'spring', stiffness: 260, damping: 18 }}
//                     style={{ transformStyle: 'preserve-3d' }}
//                 >
//                     <Link
//                         href={`/services/${s.slug}`}
//                         prefetch={true}
//                         className="card p-8 block group"
//                     >
//                         <div className="flex items-start justify-between gap-4">
//                             <div className="text-lg font-semibold text-luxury-silver">
//                                 {s.title}
//                             </div>

//                             <span className="badge group-hover:border-white/25 transition-colors">
//                                 View →
//                             </span>
//                         </div>

//                         <p className="mt-3 text-sm text-luxury-silver/70 leading-relaxed">
//                             {s.intro ?? 'View scope, inclusions, and optional add-ons.'}
//                         </p>

//                         {(s.industries?.length ?? 0) > 0 ? (
//                             <div className="mt-5 flex flex-wrap gap-2">
//                                 {s.industries!.slice(0, 3).map((x) => (
//                                     <span key={x} className="badge">
//                                         {x}
//                                     </span>
//                                 ))}
//                             </div>
//                         ) : (
//                             <div className="mt-5 flex flex-wrap gap-2">
//                                 <span className="badge">Custom scope</span>
//                                 <span className="badge">Inspected quality</span>
//                             </div>
//                         )}

//                         {/* Premium CTA */}
//                         <div className="mt-7">
//                             <div className="btn btn-outline w-full justify-center">
//                                 View details →
//                             </div>
//                         </div>
//                     </Link>
//                 </motion.div>
//             ))}
//         </motion.div>
//     );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ServiceItem = {
    slug: string;
    title: string;
    intro?: string;
    industries?: string[];
};

export function ServicesGridMotion({ services }: { services: ServiceItem[] }) {
    return (
        <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
            }}
        >
            {services.map((s) => (
                <motion.div
                    key={s.slug}
                    variants={{
                        hidden: { opacity: 0, y: 14 },
                        show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="preserve-3d"
                >
                    <Link
                        href={`/services/${s.slug}`}
                        prefetch={true}
                        className="card p-8 block group preserve-3d"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="text-lg font-semibold text-luxury-silver">
                                {s.title}
                            </div>

                            <motion.span
                                className="badge border-white/10"
                                initial={{ opacity: 0.75 }}
                                whileHover={{ opacity: 1 }}
                            >
                                View →
                            </motion.span>
                        </div>

                        <p className="mt-3 text-sm text-luxury-silver/70 leading-relaxed">
                            {s.intro ?? "View scope, inclusions, and optional add-ons."}
                        </p>

                        {(s.industries?.length ?? 0) > 0 ? (
                            <div className="mt-5 flex flex-wrap gap-2">
                                {s.industries!.slice(0, 3).map((x) => (
                                    <span key={x} className="badge">
                                        {x}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="badge">Custom scope</span>
                                <span className="badge">Quality checks</span>
                            </div>
                        )}

                        <motion.div
                            className="mt-7 btn btn-outline w-full justify-center"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            View details →
                        </motion.div>

                        {/* subtle glow */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background:
                                    "radial-gradient(600px circle at 30% 20%, rgba(212,175,55,0.10), transparent 40%), radial-gradient(600px circle at 70% 80%, rgba(16,185,129,0.10), transparent 45%)",
                            }}
                        />
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}
