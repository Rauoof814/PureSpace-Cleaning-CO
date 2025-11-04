'use client';
import { motion } from 'framer-motion';

export default function GreenCleaning() {
    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-luxury-darker" />
                <div className="container relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold luxury-heading mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-emerald-400">Green</span> <span className="gradient-text">Cleaning</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-luxury-silver mb-6">Sustainable Cleaning Solutions</h2>
                            <p className="text-luxury-silver/70 text-lg mb-6">
                                Our eco-friendly cleaning practices reduce environmental impact while delivering superior results for your commercial space.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "EPA Safer Choice Certified Products",
                                    "Water Conservation Techniques",
                                    "Energy Efficient Equipment",
                                    "Waste Reduction Programs",
                                    "LEED Compliance Support",
                                    "Carbon Footprint Monitoring"
                                ].map((feature, i) => (
                                    <motion.div
                                        key={feature}
                                        className="flex items-center gap-3 text-luxury-silver"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <span className="text-emerald-400 text-xl">🌱</span>
                                        {feature}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="card preserve-3d"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ rotateY: 10 }}
                        >
                            <h3 className="text-2xl font-bold text-luxury-silver mb-4">Environmental Impact</h3>
                            <div className="space-y-4">
                                {[
                                    { metric: "90%", description: "Reduced Chemical Usage" },
                                    { metric: "75%", description: "Water Savings" },
                                    { metric: "100%", description: "Recyclable Packaging" },
                                    { metric: "60%", description: "Carbon Emission Reduction" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.description}
                                        className="flex justify-between items-center p-4 bg-luxury-dark rounded-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <span className="text-luxury-silver">{item.description}</span>
                                        <span className="text-emerald-400 font-bold text-xl">{item.metric}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}