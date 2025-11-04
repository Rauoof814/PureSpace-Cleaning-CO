'use client';
import { motion } from 'framer-motion';

const certifications = [
    {
        title: "ISSA CIMS Certification",
        description: "Cleaning Industry Management Standard",
        icon: "🏆",
        details: ["GBAC STAR Facility", "Green Cleaning", "Quality Management"]
    },
    {
        title: "OSHA Compliance",
        description: "Occupational Safety and Health Administration",
        icon: "🛡️",
        details: ["Bloodborne Pathogens", "Hazard Communication", "Safety Training"]
    },
    {
        title: "LEED Green Associate",
        description: "Leadership in Energy and Environmental Design",
        icon: "🌿",
        details: ["Sustainable Practices", "Eco-Friendly Products", "Waste Reduction"]
    }
];

export default function Certifications() {
    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <div className="container relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold luxury-heading mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our <span className="gradient-text">Certifications</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                className="card text-center preserve-3d"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ rotateY: 15, scale: 1.05 }}
                            >
                                <motion.div
                                    className="text-6xl mb-4"
                                    animate={{ rotateY: [0, 360] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                >
                                    {cert.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-luxury-silver mb-2">{cert.title}</h3>
                                <p className="text-luxury-accent mb-4">{cert.description}</p>
                                <ul className="space-y-2">
                                    {cert.details.map((detail, i) => (
                                        <li key={i} className="text-luxury-silver/70 text-sm">• {detail}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}