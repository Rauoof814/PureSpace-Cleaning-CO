'use client';
import { motion } from 'framer-motion';

const positions = [
    {
        title: "Commercial Cleaning Specialist",
        department: "Operations",
        type: "Full-Time",
        location: "Seattle, WA",
        description: "Join our elite team serving enterprise clients"
    },
    {
        title: "Account Manager",
        department: "Sales",
        type: "Full-Time",
        location: "Remote",
        description: "Manage relationships with Fortune 500 clients"
    },
    {
        title: "Quality Control Inspector",
        department: "Quality Assurance",
        type: "Full-Time",
        location: "Seattle, WA",
        description: "Ensure premium service delivery standards"
    }
];

export default function Careers() {
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
                        Join Our <span className="gradient-text">Team</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {positions.map((position, index) => (
                            <motion.div
                                key={position.title}
                                className="card preserve-3d cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, rotateY: 10 }}
                            >
                                <h3 className="text-xl font-bold text-luxury-silver mb-2">{position.title}</h3>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-luxury-accent text-sm">
                                        <span>🏢</span>
                                        {position.department}
                                    </div>
                                    <div className="flex items-center gap-2 text-luxury-silver/70 text-sm">
                                        <span>⏱️</span>
                                        {position.type}
                                    </div>
                                    <div className="flex items-center gap-2 text-luxury-silver/70 text-sm">
                                        <span>📍</span>
                                        {position.location}
                                    </div>
                                </div>
                                <p className="text-luxury-silver/70 text-sm mb-4">{position.description}</p>
                                <motion.button
                                    className="btn btn-primary w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Apply Now
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}