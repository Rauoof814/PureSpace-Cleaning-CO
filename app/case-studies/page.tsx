'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const caseStudies = [
    {
        id: 1,
        title: "Amazon Corporate Campus",
        description: "Complete janitorial transformation for 500,000 sq ft campus",
        image: "/case-studies/amazon.jpg",
        results: ["98% client satisfaction", "40% cost reduction", "24/7 service coverage"],
        beforeAfter: ["/before/amazon1.jpg", "/after/amazon1.jpg"]
    },
    {
        id: 2,
        title: "Microsoft Headquarters",
        description: "Green cleaning implementation across 12 buildings",
        image: "/case-studies/microsoft.jpg",
        results: ["100% eco-friendly", "60% waste reduction", "LEED certification"],
        beforeAfter: ["/before/microsoft1.jpg", "/after/microsoft1.jpg"]
    },
    {
        id: 3,
        title: "Swedish Medical Center",
        description: "Healthcare facility sanitization and infection control",
        image: "/case-studies/medical.jpg",
        results: ["99.9% pathogen elimination", "HIPAA compliant", "24/7 emergency"],
        beforeAfter: ["/before/medical1.jpg", "/after/medical1.jpg"]
    }
];

export default function CaseStudies() {
    const [selectedStudy, setSelectedStudy] = useState(0);

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <motion.div
                    className="absolute inset-0 bg-luxury-grid opacity-20"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                />

                <div className="container relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold luxury-heading mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Case <span className="gradient-text">Studies</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-luxury-silver max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Real results for enterprise clients. See how we transform commercial spaces.
                    </motion.p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                className="card group cursor-pointer preserve-3d"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, rotateY: 10 }}
                                onClick={() => setSelectedStudy(index)}
                            >
                                {/* Image Placeholder */}
                                <div className="w-full h-48 bg-gradient-to-br from-luxury-gold to-luxury-emerald rounded-2xl mb-6 flex items-center justify-center">
                                    <span className="text-luxury-dark font-bold text-lg">Before/After Images</span>
                                </div>

                                <h3 className="text-2xl font-bold text-luxury-silver mb-3">{study.title}</h3>
                                <p className="text-luxury-silver/70 mb-4">{study.description}</p>

                                <div className="space-y-2">
                                    {study.results.map((result, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-center gap-2 text-luxury-accent"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <span>✓</span>
                                            <span className="text-sm">{result}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}