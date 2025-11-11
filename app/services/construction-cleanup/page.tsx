'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function ConstructionCleanup() {
    const [phase, setPhase] = useState('rough');

    const phases = {
        rough: {
            title: "Rough Clean",
            description: "Initial debris removal and basic cleaning",
            tasks: ["Construction debris removal", "Dust and particle cleanup", "Window surface cleaning", "Floor sweeping"],
            image: "/construction/rough-clean.jpg"
        },
        final: {
            title: "Final Clean",
            description: "Detailed cleaning for occupancy readiness",
            tasks: ["Detailed dusting", "Surface sanitization", "Fixture cleaning", "Floor finishing"],
            image: "/construction/final-clean.jpg"
        },
        post: {
            title: "Post-Construction",
            description: "Ongoing maintenance after project completion",
            tasks: ["Touch-up cleaning", "Waste management", "Surface protection", "Quality inspection"],
            image: "/construction/post-clean.jpg"
        }
    };

    const services = [
        {
            title: "New Construction",
            description: "Complete cleanup for new building projects",
            features: ["Debris removal", "Final cleaning", "Waste management"],
            icon: "🏗️"
        },
        {
            title: "Renovation Cleanup",
            description: "Cleaning during and after renovation projects",
            features: ["Dust control", "Surface protection", "Detailed cleaning"],
            icon: "🔨"
        },
        {
            title: "Commercial Build-outs",
            description: "Office and commercial space preparation",
            features: ["Move-in ready cleaning", "HVAC cleaning", "Final inspection"],
            icon: "🏢"
        }
    ];

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-luxury-card to-luxury-darker" />
                <motion.div
                    className="absolute inset-0 bg-luxury-dots opacity-20"
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
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
                            Construction <span className="gradient-text">Cleanup</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-luxury-silver max-w-4xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Professional post-construction cleaning services to transform construction sites into pristine, move-in ready spaces
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Phase Selection */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Construction <span className="text-luxury-gold">Cleaning Phases</span>
                        </h2>
                    </motion.div>

                    {/* Phase Tabs */}
                    <div className="flex justify-center mb-12">
                        <div className="glass-dark rounded-2xl p-2 flex gap-2">
                            {Object.keys(phases).map((phaseKey) => (
                                <motion.button
                                    key={phaseKey}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${phase === phaseKey
                                            ? 'bg-luxury-gold text-luxury-dark'
                                            : 'text-luxury-silver hover:text-luxury-gold'
                                        }`}
                                    onClick={() => setPhase(phaseKey)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {phases[phaseKey as keyof typeof phases].title}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Phase Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            key={phase}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-3xl font-bold text-luxury-silver mb-4">
                                {phases[phase as keyof typeof phases].title}
                            </h3>
                            <p className="text-lg text-luxury-silver/80 mb-6">
                                {phases[phase as keyof typeof phases].description}
                            </p>
                            <div className="space-y-3">
                                {phases[phase as keyof typeof phases].tasks.map((task, index) => (
                                    <motion.div
                                        key={task}
                                        className="flex items-center gap-3 p-3 bg-luxury-card rounded-xl"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-luxury-gold text-xl">✓</span>
                                        <span className="text-luxury-silver">{task}</span>
                                    </motion.div>
                                ))}
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
                                <div className="w-full h-64 bg-gradient-to-br from-orange-500/20 to-luxury-gold/20 rounded-2xl mb-6 flex items-center justify-center">
                                    <span className="text-6xl">🏗️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                    {phases[phase as keyof typeof phases].title}
                                </h3>
                                <p className="text-luxury-silver/70">
                                    Professional construction cleaning services
                                </p>
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
                            Specialized <span className="gradient-text">Construction Services</span>
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
                            Ready for <span className="gradient-text">Move-In Ready</span> Cleanliness?
                        </h2>
                        <p className="text-xl text-luxury-silver/80 mb-8 max-w-2xl mx-auto">
                            Transform your construction site into a pristine, professional space
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/booking" className="btn btn-primary px-8 py-4">
                                    Get Construction Quote
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href="tel:5551234567" className="btn btn-outline px-8 py-4">
                                    Call for Emergency Cleanup
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}