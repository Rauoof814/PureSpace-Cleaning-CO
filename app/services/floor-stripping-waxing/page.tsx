'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function FloorStrippingWaxing() {
    const [activeStep, setActiveStep] = useState(0);

    const processSteps = [
        {
            step: 1,
            title: "Assessment & Preparation",
            description: "Comprehensive floor evaluation and area preparation",
            tasks: ["Floor condition assessment", "Furniture moving", "Area protection", "Chemical selection"],
            icon: "🔍"
        },
        {
            step: 2,
            title: "Stripping Old Finish",
            description: "Complete removal of existing wax and sealant layers",
            tasks: ["Chemical application", "Machine scrubbing", "Residue removal", "Surface neutralization"],
            icon: "🧹"
        },
        {
            step: 3,
            title: "Surface Repair",
            description: "Addressing any floor damage or imperfections",
            tasks: ["Scuff mark removal", "Minor repairs", "Deep cleaning", "Surface leveling"],
            icon: "🔧"
        },
        {
            step: 4,
            title: "Wax Application",
            description: "Multiple coat application for maximum protection",
            tasks: ["Base coat application", "Multiple wax layers", "Even distribution", "Drying time management"],
            icon: "✨"
        },
        {
            step: 5,
            title: "Buffing & Polishing",
            description: "Final finishing for brilliant shine and durability",
            tasks: ["High-speed buffing", "Final inspection", "Protective coating", "Quality assurance"],
            icon: "🌟"
        }
    ];

    const floorTypes = [
        {
            type: "Vinyl Composition Tile",
            description: "Most common commercial flooring",
            features: ["Durable finish", "Slip resistance", "Easy maintenance", "Cost-effective"],
            icon: "🧱"
        },
        {
            type: "Terrazzo",
            description: "Premium polished stone flooring",
            features: ["High-gloss finish", "Long-lasting", "Eco-friendly", "Luxury appearance"],
            icon: "💎"
        },
        {
            type: "Concrete",
            description: "Industrial and modern spaces",
            features: ["Sealant protection", "Stain resistance", "Durability", "Modern aesthetic"],
            icon: "🏭"
        }
    ];

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-luxury-card to-luxury-darker" />
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
                            Floor <span className="gradient-text">Stripping & Waxing</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-luxury-silver max-w-4xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Professional floor restoration services that protect your investment and maintain brilliant appearances
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Our <span className="text-luxury-gold">5-Step Process</span>
                        </h2>
                    </motion.div>

                    {/* Process Navigation */}
                    <div className="flex overflow-x-auto pb-4 mb-12 gap-2">
                        {processSteps.map((step, index) => (
                            <motion.button
                                key={step.step}
                                className={`flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeStep === index
                                        ? 'bg-luxury-gold text-luxury-dark'
                                        : 'bg-luxury-card text-luxury-silver hover:bg-luxury-card/80'
                                    }`}
                                onClick={() => setActiveStep(index)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Step {step.step}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Process Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <motion.div
                                    className="w-16 h-16 bg-luxury-gold rounded-2xl flex items-center justify-center text-2xl"
                                    animate={{ rotateY: [0, 360] }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                >
                                    {processSteps[activeStep].icon}
                                </motion.div>
                                <div>
                                    <h3 className="text-3xl font-bold text-luxury-silver">
                                        {processSteps[activeStep].title}
                                    </h3>
                                    <p className="text-luxury-silver/70">
                                        Step {processSteps[activeStep].step} of {processSteps.length}
                                    </p>
                                </div>
                            </div>

                            <p className="text-lg text-luxury-silver/80 mb-6">
                                {processSteps[activeStep].description}
                            </p>

                            <div className="space-y-3">
                                {processSteps[activeStep].tasks.map((task, index) => (
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
                                <div className="w-full h-64 bg-gradient-to-br from-amber-500/20 to-luxury-gold/20 rounded-2xl mb-6 flex items-center justify-center">
                                    <motion.span
                                        className="text-6xl"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {processSteps[activeStep].icon}
                                    </motion.span>
                                </div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                    {processSteps[activeStep].title}
                                </h3>
                                <p className="text-luxury-silver/70">
                                    Professional floor care process
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Floor Types */}
            <section className="py-20 bg-luxury-card/30">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Specialized <span className="gradient-text">Floor Treatments</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {floorTypes.map((floor, index) => (
                            <motion.div
                                key={floor.type}
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
                                    {floor.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                    {floor.type}
                                </h3>
                                <p className="text-luxury-silver/70 mb-4">
                                    {floor.description}
                                </p>
                                <div className="space-y-2">
                                    {floor.features.map((feature, i) => (
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
                            Transform Your <span className="gradient-text">Commercial Floors</span>
                        </h2>
                        <p className="text-xl text-luxury-silver/80 mb-8 max-w-2xl mx-auto">
                            Professional floor stripping and waxing that protects your investment and enhances appearance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/booking" className="btn btn-primary px-8 py-4">
                                    Schedule Floor Service
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/contact" className="btn btn-outline px-8 py-4">
                                    Get Maintenance Plan
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}