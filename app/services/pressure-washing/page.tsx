'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function PressureWashing() {
    const [activeSurface, setActiveSurface] = useState('building');

    const surfaces = {
        building: {
            title: "Building Exteriors",
            description: "Complete exterior cleaning for commercial buildings",
            features: ["Mold & mildew removal", "Dirt & grime elimination", "Surface restoration", "Preventative treatment"],
            equipment: ["High-pressure systems", "Eco-friendly detergents", "Surface-safe nozzles", "Water reclamation"],
            icon: "🏢"
        },
        concrete: {
            title: "Concrete & Pavement",
            description: "Parking lots, sidewalks, and concrete surface cleaning",
            features: ["Oil stain removal", "Gum removal", "Surface brightening", "Slip resistance restoration"],
            equipment: ["Surface cleaners", "Hot water systems", "Chemical injectors", "Safety barriers"],
            icon: "🛣️"
        },
        industrial: {
            title: "Industrial Equipment",
            description: "Heavy equipment and industrial surface cleaning",
            features: ["Grease removal", "Rust treatment", "Equipment preparation", "Corrosion prevention"],
            equipment: ["Industrial-grade pumps", "Chemical resistant hoses", "Protective coatings", "Waste management"],
            icon: "🏭"
        }
    };

    const benefits = [
        {
            icon: "🛡️",
            title: "Property Protection",
            description: "Prevent surface degradation and extend lifespan"
        },
        {
            icon: "💼",
            title: "Professional Image",
            description: "Maintain pristine appearance for clients and visitors"
        },
        {
            icon: "🌿",
            title: "Environmental Safety",
            description: "Eco-friendly cleaning solutions and water management"
        },
        {
            icon: "💰",
            title: "Cost Effective",
            description: "Prevent expensive repairs with regular maintenance"
        }
    ];

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-luxury-card to-luxury-darker" />
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
                            Professional <span className="gradient-text">Pressure Washing</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-luxury-silver max-w-4xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            High-performance exterior cleaning that restores surfaces and enhances property value
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
                            Specialized <span className="text-luxury-gold">Surface Cleaning</span>
                        </h2>
                    </motion.div>

                    {/* Surface Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="glass-dark rounded-2xl p-2 flex gap-2 flex-wrap justify-center">
                            {Object.keys(surfaces).map((surface) => (
                                <motion.button
                                    key={surface}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeSurface === surface
                                            ? 'bg-luxury-gold text-luxury-dark'
                                            : 'text-luxury-silver hover:text-luxury-gold'
                                        }`}
                                    onClick={() => setActiveSurface(surface)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {surfaces[surface as keyof typeof surfaces].title}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Surface Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            key={activeSurface}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-bold text-luxury-silver mb-4">
                                {surfaces[activeSurface as keyof typeof surfaces].title}
                            </h3>
                            <p className="text-lg text-luxury-silver/80 mb-6">
                                {surfaces[activeSurface as keyof typeof surfaces].description}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-luxury-silver mb-4">Service Features</h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {surfaces[activeSurface as keyof typeof surfaces].features.map((feature, index) => (
                                        <motion.div
                                            key={feature}
                                            className="flex items-center gap-3 p-3 bg-luxury-card rounded-xl"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="text-luxury-gold text-xl">✓</span>
                                            <span className="text-luxury-silver">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-luxury-silver mb-4">Professional Equipment</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {surfaces[activeSurface as keyof typeof surfaces].equipment.map((item, index) => (
                                        <motion.div
                                            key={item}
                                            className="flex items-center gap-3 p-3 bg-luxury-dark rounded-xl"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <span className="text-luxury-emerald">🔧</span>
                                            <span className="text-luxury-silver text-sm">{item}</span>
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
                                    {surfaces[activeSurface as keyof typeof surfaces].icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                    {surfaces[activeSurface as keyof typeof surfaces].title}
                                </h3>
                                <p className="text-luxury-silver/70 mb-6">
                                    Professional pressure washing service
                                </p>
                                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-luxury-gold/20 rounded-2xl flex items-center justify-center">
                                    <span className="text-luxury-silver/50">Surface Visualization</span>
                                </div>
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
                            Benefits of <span className="gradient-text">Pressure Washing</span>
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
                            Restore Your <span className="gradient-text">Property's Beauty</span>
                        </h2>
                        <p className="text-xl text-luxury-silver/80 mb-8 max-w-2xl mx-auto">
                            Professional pressure washing that removes years of buildup and enhances curb appeal
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/booking" className="btn btn-primary px-8 py-4">
                                    Schedule Pressure Washing
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/contact" className="btn btn-outline px-8 py-4">
                                    Get Exterior Quote
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}