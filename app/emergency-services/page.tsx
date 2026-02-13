/**
 * Emergency Services Page
 */
'use client';
import { motion } from 'framer-motion';

export default function EmergencyServices() {
    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-luxury-darker" />
                <motion.div
                    className="absolute inset-0 bg-luxury-dots opacity-30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="container relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold luxury-heading mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-red-400">Emergency</span> <span className="gradient-text">Services</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-luxury-silver max-w-2xl mx-auto mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        24/7 Rapid Response for Critical Cleaning Situations
                    </motion.p>

                    <motion.div
                        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-3xl font-bold text-red-400 mb-4">🚨 Call Now: (555) 123-EMER</h2>
                        <p className="text-luxury-silver">Available 24/7 for emergency situations</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            className="card preserve-3d"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-luxury-silver mb-4">Emergency Scenarios</h3>
                            <ul className="space-y-3">
                                {['Biohazard Spills', 'Water Damage', 'Fire Damage', 'Vandalism', 'Post-Construction Emergencies', 'Healthcare Outbreaks'].map((scenario, i) => (
                                    <motion.li
                                        key={scenario}
                                        className="flex items-center gap-3 text-luxury-silver"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <span className="text-red-400">⚠️</span>
                                        {scenario}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="card preserve-3d"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-luxury-silver mb-4">Response Time</h3>
                            <div className="space-y-4">
                                {[
                                    { time: '15-30 mins', scenario: 'Critical Situations' },
                                    { time: '1-2 hours', scenario: 'Urgent Cleaning' },
                                    { time: '4-6 hours', scenario: 'Scheduled Emergency' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.scenario}
                                        className="flex justify-between items-center p-4 bg-luxury-dark rounded-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <span className="text-luxury-silver">{item.scenario}</span>
                                        <span className="text-luxury-accent font-bold">{item.time}</span>
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