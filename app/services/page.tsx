// import { ServiceGrid } from '@/components/ServiceGrid'; export default function ServicesPage(){return <div className='container'><h1 className='text-3xl font-semibold my-6'>Services</h1><ServiceGrid/></div>}


'use client';
import { ServiceGrid } from '@/components/ServiceGrid';
import { motion } from 'framer-motion';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />

                <div className="container relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold luxury-heading text-white mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our <span className="gradient-text">Services</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Comprehensive commercial cleaning solutions tailored for enterprise clients,
                        healthcare facilities, and premium commercial spaces across Washington State.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container">
                    <ServiceGrid />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-accent-gold to-accent-teal">
                <div className="container text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Transform Your Space?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Get a custom quote tailored to your specific commercial cleaning needs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.a
                            href="/booking"
                            className="btn bg-white text-slate-900 hover:bg-slate-100 px-12 py-4 text-lg font-semibold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Custom Quote
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}