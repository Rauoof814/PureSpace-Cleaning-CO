'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function JunkRemoval() {
    const [activeService, setActiveService] = useState('commercial');

    const services = {
        commercial: {
            title: "Commercial Cleanouts",
            description: "Complete office and business space clearing services",
            items: ["Office furniture", "Electronics waste", "Construction debris", "General business junk"],
            process: ["Assessment & quote", "Safe removal", "Proper disposal", "Area cleanup"],
            icon: "🏢"
        },
        construction: {
            title: "Construction Debris",
            description: "Post-construction waste removal and site clearing",
            items: ["Drywall & lumber", "Packaging materials", "Concrete rubble", "Metal scraps"],
            process: ["Debris sorting", "Recycling separation", "Hauling services", "Site verification"],
            icon: "🏗️"
        },
        industrial: {
            title: "Industrial Waste",
            description: "Heavy industrial material and equipment removal",
            items: ["Machinery parts", "Manufacturing waste", "Pallet removal", "Bulk materials"],
            process: ["Equipment assessment", "Safe dismantling", "Proper disposal", "Documentation"],
            icon: "🏭"
        }
    };

    const environmental = [
        {
            icon: "♻️",
            title: "Recycling Focus",
            description: "70%+ of materials recycled or repurposed"
        },
        {
            icon: "🌿",
            title: "Eco-Friendly",
            description: "Sustainable disposal methods and partners"
        },
        {
            icon: "📋",
            title: "Documentation",
            description: "Complete disposal records and certificates"
        },
        {
            icon: "🛡️",
            title: "Compliance",
            description: "All local and federal regulations followed"
        }
    ];

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-luxury-card to-luxury-darker" />
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
                            Professional <span className="gradient-text">Junk Removal</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-luxury-silver max-w-4xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Efficient, eco-friendly waste removal services for commercial, construction, and industrial clients
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Comprehensive <span className="text-luxury-gold">Removal Services</span>
                        </h2>
                    </motion.div>

                    {/* Service Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="glass-dark rounded-2xl p-2 flex gap-2 flex-wrap justify-center">
                            {Object.keys(services).map((service) => (
                                <motion.button
                                    key={service}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${activeService === service
                                            ? 'bg-luxury-gold text-luxury-dark'
                                            : 'text-luxury-silver hover:text-luxury-gold'
                                        }`}
                                    onClick={() => setActiveService(service)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {services[service as keyof typeof services].title}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Service Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-bold text-luxury-silver mb-4">
                                {services[activeService as keyof typeof services].title}
                            </h3>
                            <p className="text-lg text-luxury-silver/80 mb-6">
                                {services[activeService as keyof typeof services].description}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-luxury-silver mb-4">Common Items Removed</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {services[activeService as keyof typeof services].items.map((item, index) => (
                                        <motion.div
                                            key={item}
                                            className="flex items-center gap-3 p-3 bg-luxury-card rounded-xl"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="text-luxury-gold text-xl">🗑️</span>
                                            <span className="text-luxury-silver">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-luxury-silver mb-4">Our Process</h4>
                                <div className="space-y-3">
                                    {services[activeService as keyof typeof services].process.map((step, index) => (
                                        <motion.div
                                            key={step}
                                            className="flex items-center gap-3 p-3 bg-luxury-dark rounded-xl"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="text-luxury-emerald font-bold">{index + 1}.</span>
                                            <span className="text-luxury-silver">{step}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative preserve-3d"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="card p-8 text-center preserve-3d"
                                animate={{
                                    rotateY: [0, 5, 0, -5, 0],
                                    scale: [1, 1.02, 1]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <motion.div
                                    className="text-6xl mb-6"
                                    animate={{ rotateY: [0, 360] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                >
                                    {services[activeService as keyof typeof services].icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                    {services[activeService as keyof typeof services].title}
                                </h3>
                                <p className="text-luxury-silver/70 mb-6">
                                    Professional junk removal service
                                </p>
                                <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-luxury-gold/20 rounded-2xl flex items-center justify-center">
                                    <span className="text-luxury-silver/50">Service Visualization</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Environmental Section */}
            <section className="py-20 bg-luxury-card/30">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            <span className="gradient-text">Eco-Friendly</span> Disposal
                        </h2>
                        <p className="text-xl text-luxury-silver/80 max-w-2xl mx-auto">
                            We're committed to sustainable waste management and environmental responsibility
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {environmental.map((item, index) => (
                            <motion.div
                                key={item.title}
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
                                    {item.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-luxury-silver mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-luxury-silver/70">
                                    {item.description}
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
                            Clear Your Space with <span className="gradient-text">Professional Removal</span>
                        </h2>
                        <p className="text-xl text-luxury-silver/80 mb-8 max-w-2xl mx-auto">
                            Efficient, safe, and eco-friendly junk removal services for businesses of all sizes
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/booking" className="btn btn-primary px-8 py-4">
                                    Schedule Junk Removal
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/contact" className="btn btn-outline px-8 py-4">
                                    Get Emergency Quote
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}