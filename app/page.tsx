'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // 3D Particle Background
    const Particles3D = () => {
        const particles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            size: Math.random() * 6 + 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: Math.random() * 8 + 4
        }));

        return (
            <div className="absolute inset-0 overflow-hidden preserve-3d">
                {particles.map(particle => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-gradient-to-r from-luxury-gold/30 to-luxury-emerald/30 preserve-3d"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, 20, 0],
                            opacity: [0, 0.8, 0],
                            rotateZ: [0, 180, 360],
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

    const stats = [
        { number: "500+", label: "Enterprise Clients", icon: "🏢" },
        { number: "99.7%", label: "Satisfaction Rate", icon: "⭐" },
        { number: "24/7", label: "Service Coverage", icon: "🌙" },
        { number: "15+", label: "Years Experience", icon: "🎯" }
    ];

    const services = [
        {
            title: "Commercial Janitorial",
            description: "Daily office cleaning for corporate environments with premium standards",
            icon: "🏢",
            features: ["Daily trash removal", "Surface disinfection", "Restroom sanitation"]
        },
        {
            title: "Medical Facility Cleaning",
            description: "HIPAA compliant healthcare environment cleaning and sanitization",
            icon: "🏥",
            features: ["Biohazard disposal", "Sterile surface cleaning", "Infection control"]
        },
        {
            title: "Construction Cleanup",
            description: "Post-construction deep cleaning and debris removal services",
            icon: "🏗️",
            features: ["Debris removal", "Final clean preparation", "Window cleaning"]
        }
    ];

    return (
        <div className="min-h-screen bg-luxury-dark overflow-hidden">
            {/* Hero Section with 3D Effects */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden preserve-3d">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <Particles3D />

                {/* Floating 3D Shapes */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl preserve-3d"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotateY: [0, 180, 360]
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-emerald/10 rounded-full blur-3xl preserve-3d"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                        rotateX: [0, 180, 360]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />

                <div className="container relative z-10 text-center preserve-3d">
                    {/* Main Heading with 3D Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.h1
                            className="luxury-heading text-7xl md:text-9xl lg:text-[10rem] font-bold mb-8 preserve-3d"
                            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                            animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <span className="gradient-text">PureSpace</span>
                        </motion.h1>

                        <motion.h2
                            className="text-4xl md:text-6xl lg:text-7xl luxury-heading text-luxury-silver mb-6 preserve-3d"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Luxury Commercial Cleaning
                        </motion.h2>

                        <motion.p
                            className="text-xl md:text-2xl lg:text-3xl text-luxury-silver/80 max-w-6xl mx-auto leading-relaxed preserve-3d"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <span className="font-semibold text-luxury-gold">Enterprise-Grade</span> Cleaning Solutions for{" "}
                            <span className="font-semibold text-luxury-emerald">Fortune 500 Companies</span>, Healthcare Facilities, and Premium Commercial Spaces Worldwide
                        </motion.p>
                    </motion.div>

                    {/* Animated Stats with 3D Cards */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto preserve-3d"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="card text-center preserve-3d group cursor-pointer"
                                initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                                animate={isVisible ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 10,
                                    y: -10
                                }}
                            >
                                <motion.div
                                    className="text-3xl mb-3 preserve-3d"
                                    animate={{ rotateY: [0, 360] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                >
                                    {stat.icon}
                                </motion.div>
                                <div className="text-2xl md:text-3xl font-bold text-luxury-gold mb-2 preserve-3d">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-luxury-silver/70 preserve-3d">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons with Magnetic 3D Effect */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 preserve-3d"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <motion.div
                            className="preserve-3d"
                            whileHover={{ scale: 1.05, rotateY: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/booking" className="btn btn-primary text-lg px-12 py-6 preserve-3d">
                                <span className="flex items-center gap-3 preserve-3d">
                                    Schedule Enterprise Consultation
                                    <motion.span
                                        animate={{ x: [0, 8, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="preserve-3d"
                                    >
                                        →
                                    </motion.span>
                                </span>
                            </Link>
                        </motion.div>

                        <motion.div
                            className="preserve-3d"
                            whileHover={{ scale: 1.05, rotateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/contact" className="btn btn-outline text-lg px-12 py-6 preserve-3d">
                                Request Custom Proposal
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* 3D Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 preserve-3d cursor-pointer"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <div className="w-8 h-12 border-2 border-luxury-gold rounded-full flex justify-center preserve-3d">
                            <motion.div
                                className="w-1 h-4 bg-luxury-gold rounded-full mt-2 preserve-3d"
                                animate={{ y: [0, 16, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Services Section */}
            <section className="relative py-20 overflow-hidden preserve-3d">
                <div className="absolute inset-0 bg-luxury-grid opacity-10" />
                <div className="container relative z-10">
                    <motion.div
                        className="text-center mb-16 preserve-3d"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl luxury-heading mb-6 preserve-3d">
                            Premium <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-xl text-luxury-silver/80 max-w-3xl mx-auto preserve-3d">
                            Comprehensive cleaning solutions tailored for enterprise clients across all industries
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="card group preserve-3d cursor-pointer"
                                initial={{ opacity: 0, y: 50, rotateY: -45 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 15,
                                    y: -10
                                }}
                            >
                                <motion.div
                                    className="text-5xl mb-4 preserve-3d"
                                    animate={{ rotateY: [0, 360] }}
                                    transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
                                >
                                    {service.icon}
                                </motion.div>

                                <h3 className="text-2xl font-bold text-luxury-silver mb-3 preserve-3d">
                                    {service.title}
                                </h3>

                                <p className="text-luxury-silver/70 mb-6 preserve-3d">
                                    {service.description}
                                </p>

                                <div className="space-y-2 preserve-3d">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={feature}
                                            className="flex items-center gap-2 text-luxury-accent text-sm preserve-3d"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: featureIndex * 0.1 }}
                                        >
                                            <motion.span
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                            >
                                                ✓
                                            </motion.span>
                                            {feature}
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    className="mt-6 preserve-3d"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="btn btn-primary w-full text-center preserve-3d"
                                    >
                                        Explore Service
                                    </Link>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* View All Services Button */}
                    <motion.div
                        className="text-center mt-12 preserve-3d"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link href="/services" className="btn btn-outline px-12 py-4 preserve-3d">
                            View All Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Emergency CTA Section */}
            <section className="relative py-20 overflow-hidden preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-luxury-darker" />
                <motion.div
                    className="absolute inset-0 bg-luxury-dots opacity-30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="container relative z-10 text-center preserve-3d">
                    <motion.div
                        className="max-w-4xl mx-auto preserve-3d"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl luxury-heading mb-6 preserve-3d">
                            <span className="text-red-400">24/7 Emergency</span> <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-xl text-luxury-silver/80 mb-8 max-w-2xl mx-auto preserve-3d">
                            Rapid response for critical cleaning situations. Available anytime, anywhere.
                        </p>

                        <motion.div
                            className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto mb-8 preserve-3d"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-3xl font-bold text-red-400 mb-4 preserve-3d">🚨 Call Now: (555) 123-EMER</h3>
                            <p className="text-luxury-silver preserve-3d">Immediate response for emergency situations</p>
                        </motion.div>

                        <motion.div
                            className="preserve-3d"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/emergency-services" className="btn btn-primary px-12 py-4 preserve-3d">
                                Learn About Emergency Services
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}