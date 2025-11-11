'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function MedicalFacilityCleaning() {
    const [activeTab, setActiveTab] = useState('protocols');

    const protocols = [
        {
            title: "Infection Control",
            description: "Advanced pathogen elimination procedures",
            steps: ["EPA-approved disinfectants", "Electrostatic spraying", "UV-C light treatment", "HEPA filtration"]
        },
        {
            title: "Biohazard Management",
            description: "Safe handling and disposal procedures",
            steps: ["OSHA compliance", "Proper containment", "Medical waste disposal", "Documentation"]
        },
        {
            title: "Sterile Environment",
            description: "Maintaining clinical cleanliness standards",
            steps: ["Surface sanitization", "Air quality control", "Equipment cleaning", "Cross-contamination prevention"]
        }
    ];

    const areas = [
        { name: "Patient Rooms", icon: "🛏️", description: "Complete sanitization between patients" },
        { name: "Operating Rooms", icon: "🔪", description: "Sterile environment maintenance" },
        { name: "Waiting Areas", icon: "🪑", description: "High-traffic area disinfection" },
        { name: "Laboratories", icon: "🔬", description: "Specialized cleaning protocols" }
    ];

    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-luxury-card to-luxury-darker" />
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
                            Medical <span className="gradient-text">Facility Cleaning</span>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl text-luxury-silver max-w-4xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            HIPAA compliant healthcare environment cleaning with advanced infection control protocols
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Protocols Section */}
            <section className="py-20">
                <div className="container">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            Healthcare <span className="text-luxury-emerald">Cleaning Protocols</span>
                        </h2>
                    </motion.div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="glass-dark rounded-2xl p-2 flex gap-2">
                            {['protocols', 'areas', 'certifications'].map((tab) => (
                                <motion.button
                                    key={tab}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab
                                            ? 'bg-luxury-emerald text-luxury-dark'
                                            : 'text-luxury-silver hover:text-luxury-emerald'
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {activeTab === 'protocols' && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {protocols.map((protocol, index) => (
                                    <motion.div
                                        key={protocol.title}
                                        className="card preserve-3d"
                                        initial={{ opacity: 0, y: 50, rotateY: -45 }}
                                        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        whileHover={{ scale: 1.05, rotateY: 10 }}
                                    >
                                        <h3 className="text-2xl font-bold text-luxury-silver mb-3">
                                            {protocol.title}
                                        </h3>
                                        <p className="text-luxury-silver/70 mb-4">
                                            {protocol.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {protocol.steps.map((step, i) => (
                                                <motion.li
                                                    key={step}
                                                    className="text-luxury-emerald flex items-center gap-2"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <span>🛡️</span>
                                                    {step}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'areas' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {areas.map((area, index) => (
                                    <motion.div
                                        key={area.name}
                                        className="card text-center preserve-3d"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, rotateY: 15 }}
                                    >
                                        <motion.div
                                            className="text-4xl mb-4"
                                            animate={{ rotateY: [0, 360] }}
                                            transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                        >
                                            {area.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-luxury-silver mb-2">
                                            {area.name}
                                        </h3>
                                        <p className="text-luxury-silver/70 text-sm">
                                            {area.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'certifications' && (
                            <motion.div
                                className="card text-center max-w-4xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <h3 className="text-3xl font-bold text-luxury-silver mb-6">
                                    Healthcare Certifications
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "HIPAA Compliance",
                                        "OSHA Bloodborne Pathogens",
                                        "EPA Safer Choice",
                                        "GBAC STAR Facility"
                                    ].map((cert, i) => (
                                        <motion.div
                                            key={cert}
                                            className="flex items-center gap-3 p-4 bg-luxury-dark rounded-xl"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <span className="text-luxury-emerald text-xl">✅</span>
                                            <span className="text-luxury-silver font-semibold">{cert}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Emergency Section */}
            <section className="py-20 bg-red-900/10">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-luxury-silver mb-6">
                            <span className="text-red-400">24/7 Emergency</span> Medical Cleaning
                        </h2>
                        <p className="text-xl text-luxury-silver/80 mb-8 max-w-2xl mx-auto">
                            Immediate response for biohazard situations, infection outbreaks, and emergency sanitization needs
                        </p>
                        <motion.div
                            className="bg-red-500/20 border border-red-500/30 rounded-2xl p-6 max-w-2xl mx-auto mb-8"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-2xl font-bold text-red-400 mb-2">Emergency Hotline</h3>
                            <p className="text-luxury-silver">(555) 123-HELP</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/emergency-services" className="btn btn-primary px-8 py-4">
                                Emergency Services
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}