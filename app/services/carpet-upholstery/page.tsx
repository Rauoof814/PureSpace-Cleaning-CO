'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function CarpetUpholstery() {
    const [activeMethod, setActiveMethod] = useState('steam');

    const cleaningMethods = {
        steam: {
            title: "Hot Water Extraction",
            description: "Deep steam cleaning for thorough soil removal",
            benefits: ["Removes deep-down dirt", "Eliminates allergens", "Restores carpet texture", "Dries quickly"],
            icon: "💨",
            process: ["Pre-treatment application", "Hot water injection", "Powerful extraction", "Rapid drying"]
        },
        dry: {
            title: "Dry Cleaning",
            description: "Low-moisture cleaning for minimal downtime",
            benefits: ["Quick drying time", "No shrinkage risk", "Ideal for delicate fibers", "Immediate use"],
            icon: "🌬️",
            process: ["Compound application", "Machine agitation", "Vacuum removal", "Instant access"]
        },
        encapsulation: {
            title: "Encapsulation",
            description: "Advanced crystallizing foam technology",
            benefits: ["Prevents resoiling", "Long-lasting results", "Environmentally friendly", "Cost-effective"],
            icon: "✨",
            process: ["Foam application", "Crystallization", "Vacuum removal", "Soil encapsulation"]
        }
    };

    const services = [
        {
            title: "Commercial Carpet Cleaning",
            description: "High-traffic area maintenance for offices and facilities",
            features: ["Stain removal", "Odor elimination", "Traffic pattern treatment", "Protective coating"],
            icon: "🏢"
        },
        {
            title: "Upholstery Cleaning",
            description: "Fabric and furniture cleaning for professional spaces",
            features: ["Fabric protection", "Spot treatment", "Deodorizing", "Color restoration"],
            icon: "🛋️"
        },
        {
            title: "Area Rug Cleaning",
            description: "Specialized cleaning for valuable rugs and carpets",
            features: ["Hand cleaning", "Fringe treatment", "Moth prevention", "Storage preparation"],
            icon: "🧶"
        }
    ];

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-luxury-card to-luxury-darker" />
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
                            Carpet & <span className="gradient-text">Upholstery</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-luxury-silver max-w-4xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Professional fabric care services that restore beauty and extend the life of your commercial furnishings
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Cleaning Methods */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Advanced <span className="text-luxury-gold">Cleaning Methods</span>
                        </h2>
                    </motion.div>

                    {/* Method Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="glass-dark rounded-2xl p-2 flex gap-2 flex-wrap justify-center">
                            {Object.keys(cleaningMethods).map((method) => (
                                <motion.button
                                    key={method}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeMethod === method
                                            ? 'bg-luxury-gold text-luxury-dark'
                                            : 'text-luxury-silver hover:text-luxury-gold'
                                        }`}
                                    onClick={() => setActiveMethod(method)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {cleaningMethods[method as keyof typeof cleaningMethods].title}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Method Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            key={activeMethod}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-bold text-luxury-silver mb-4">
                                {cleaningMethods[activeMethod as keyof typeof cleaningMethods].title}
                            </h3>
                            <p className="text-lg text-luxury-silver/80 mb-6">
                                {cleaningMethods[activeMethod as keyof typeof cleaningMethods].description}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-luxury-silver mb-4">Benefits</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {cleaningMethods[activeMethod as keyof typeof cleaningMethods].benefits.map((benefit, index) => (
                                        <motion.div
                                            key={benefit}
                                            className="flex items-center gap-3 p-3 bg-luxury-card rounded-xl"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="text-luxury-gold text-xl">✓</span>
                                            <span className="text-luxury-silver">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-luxury-silver mb-4">Process</h4>
                                <div className="space-y-3">
                                    {cleaningMethods[activeMethod as keyof typeof cleaningMethods].process.map((step, index) => (
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
                                    {cleaningMethods[activeMethod as keyof typeof cleaningMethods].icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                    {cleaningMethods[activeMethod as keyof typeof cleaningMethods].title}
                                </h3>
                                <p className="text-luxury-silver/70 mb-6">
                                    {cleaningMethods[activeMethod as keyof typeof cleaningMethods].description}
                                </p>
                                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-luxury-gold/20 rounded-2xl flex items-center justify-center">
                                    <span className="text-luxury-silver/50">Method Visualization</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-luxury-card/30">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Specialized <span className="gradient-text">Fabric Services</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="card text-center preserve-3d"
                                initial={{ opacity: 0, y: 50, rotateY: -45 }}
                                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 15,
                                    y: -10
                                }}
                            >
                                <motion.div
                                    className="text-5xl mb-4"
                                    animate={{ rotateY: [0, 360] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-luxury-silver/70 mb-4">
                                    {service.description}
                                </p>
                                <div className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <div key={feature} className="text-luxury-accent text-sm">
                                            • {feature}
                                        </div>
                                    ))}
                                </div>
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
                            Restore Your <span className="gradient-text">Commercial Fabrics</span>
                        </h2>
                        <p className="text-xl text-luxury-silver/80 mb-8 max-w-2xl mx-auto">
                            Professional carpet and upholstery cleaning that extends lifespan and maintains appearance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/booking" className="btn btn-primary px-8 py-4">
                                    Schedule Fabric Cleaning
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/contact" className="btn btn-outline px-8 py-4">
                                    Get Stain Removal Quote
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}