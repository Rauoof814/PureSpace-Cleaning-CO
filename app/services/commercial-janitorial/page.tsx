'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function CommercialJanitorial() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "Daily Office Cleaning",
            description: "Comprehensive daily cleaning for corporate environments",
            details: ["Trash removal & recycling", "Surface disinfection", "Floor care & vacuuming", "Restroom sanitation"],
            image: "/services/commercial-daily.jpg"
        },
        {
            title: "Deep Cleaning Services",
            description: "Periodic intensive cleaning for maintained appearance",
            details: ["Carpet deep cleaning", "Window washing", "High dusting", "Floor stripping & waxing"],
            image: "/services/commercial-deep.jpg"
        },
        {
            title: "Specialized Areas",
            description: "Targeted cleaning for specific office areas",
            details: ["Kitchen & break rooms", "Conference rooms", "Executive offices", "Common areas"],
            image: "/services/commercial-specialized.jpg"
        }
    ];

    const benefits = [
        { icon: "📈", title: "Increased Productivity", description: "Clean environments boost employee performance by 15%" },
        { icon: "🏥", title: "Healthier Workplace", description: "Reduce sick days with proper sanitization" },
        { icon: "💼", title: "Professional Image", description: "Impress clients with immaculate facilities" },
        { icon: "💰", title: "Cost Effective", description: "Custom plans to fit your budget" }
    ];

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-luxury-card to-luxury-darker" />
                <motion.div
                    className="absolute inset-0 bg-luxury-grid opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />

                <div className="container relative z-10">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold luxury-heading mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Commercial <span className="gradient-text">Janitorial</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-luxury-silver max-w-4xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Premium daily cleaning services for corporate offices, business centers, and professional environments
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Feature Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                                Comprehensive <span className="text-luxury-gold">Office Cleaning</span>
                            </h2>
                            <p className="text-lg text-luxury-silver/80 mb-8">
                                Our commercial janitorial services are designed to maintain pristine office environments that promote productivity, health, and professional excellence.
                            </p>

                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeFeature === index
                                                ? 'bg-luxury-card border-l-4 border-luxury-gold'
                                                : 'bg-luxury-dark hover:bg-luxury-card/50'
                                            }`}
                                        onClick={() => setActiveFeature(index)}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <h3 className="text-xl font-semibold text-luxury-silver mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-luxury-silver/70 mb-3">
                                            {feature.description}
                                        </p>
                                        {activeFeature === index && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="space-y-2"
                                            >
                                                {feature.details.map((detail, i) => (
                                                    <motion.li
                                                        key={detail}
                                                        className="text-luxury-accent flex items-center gap-2"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                    >
                                                        <span>✓</span>
                                                        {detail}
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Feature Visual */}
                        <motion.div
                            className="relative preserve-3d"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="card p-8 text-center preserve-3d"
                                animate={{
                                    rotateY: activeFeature * 15,
                                    scale: [1, 1.02, 1]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-luxury-gold/20 rounded-2xl mb-6 flex items-center justify-center">
                                    <span className="text-6xl">{features[activeFeature].icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                    {features[activeFeature].title}
                                </h3>
                                <p className="text-luxury-silver/70">
                                    {features[activeFeature].description}
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-luxury-card/30">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Why Choose Our <span className="gradient-text">Janitorial Services</span>?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                className="card text-center preserve-3d"
                                initial={{ opacity: 0, y: 50, rotateY: -45 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 10,
                                    y: -10
                                }}
                            >
                                <motion.div
                                    className="text-4xl mb-4"
                                    animate={{ rotateY: [0, 360] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                >
                                    {benefit.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-luxury-silver mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-luxury-silver/70">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Ready to Transform Your <span className="gradient-text">Office Space</span>?
                        </h2>
                        <p className="text-xl text-luxury-silver/80 mb-8 max-w-2xl mx-auto">
                            Get a custom quote tailored to your commercial janitorial needs
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/booking" className="btn btn-primary px-8 py-4">
                                    Get Free Quote
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/contact" className="btn btn-outline px-8 py-4">
                                    Schedule Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}