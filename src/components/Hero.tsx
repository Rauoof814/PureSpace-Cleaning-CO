'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Particle background component
    const Particles = () => {
        const particles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            size: Math.random() * 4 + 1,
            left: Math.random() * 100,
            delay: Math.random() * 8,
            duration: Math.random() * 6 + 4
        }));

        return (
            <div className="particles-container">
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="particle"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.left}%`
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.6, 0]
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900/20 dark:to-slate-800">
            {/* Animated Background Elements */}
            <Particles />

            {/* Floating Shapes */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.2, 0.4]
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container relative z-10 text-center">
                {/* Main Heading with Staggered Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <motion.h1
                        className="luxury-heading text-6xl md:text-8xl lg:text-9xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <span className="gradient-text">PureSpace</span>
                    </motion.h1>

                    <motion.h2
                        className="text-3xl md:text-5xl lg:text-6xl luxury-heading text-slate-800 dark:text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Luxury Commercial Cleaning
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <span className="font-semibold text-gold-600">Enterprise-Grade</span> Cleaning Solutions for{" "}
                        <span className="font-semibold">Fortune 500 Companies</span>, Healthcare Facilities, and Premium Commercial Spaces
                    </motion.p>
                </motion.div>

                {/* Animated Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    {[
                        { number: "500+", label: "Enterprise Clients" },
                        { number: "99.7%", label: "Satisfaction Rate" },
                        { number: "24/7", label: "Service Coverage" },
                        { number: "15+", label: "Years Experience" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-2xl md:text-3xl font-bold text-gold-600">{stat.number}</div>
                            <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Buttons with Magnetic Effect */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/booking" className="btn btn-primary text-lg px-12 py-6">
                            <span className="flex items-center gap-3">
                                Schedule Enterprise Consultation
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </span>
                        </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/contact" className="btn btn-outline text-lg px-12 py-6">
                            Request Custom Proposal
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
                        <motion.div
                            className="w-1 h-3 bg-gold-500 rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,transparent)]" />
        </section>
    );
}