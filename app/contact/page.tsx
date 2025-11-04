'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

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
                        Get In <span className="gradient-text">Touch</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            className="card preserve-3d"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-luxury-silver mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-luxury-silver mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="input-3d w-full"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-luxury-silver mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="input-3d w-full"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-luxury-silver mb-2">Company</label>
                                        <input
                                            type="text"
                                            className="input-3d w-full"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-luxury-silver mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            className="input-3d w-full"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-luxury-silver mb-2">Service Needed</label>
                                    <select
                                        className="input-3d w-full"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="commercial">Commercial Janitorial</option>
                                        <option value="medical">Medical Facility</option>
                                        <option value="construction">Construction Cleanup</option>
                                        <option value="emergency">Emergency Services</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-luxury-silver mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        className="input-3d w-full"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="card preserve-3d">
                                <h3 className="text-2xl font-bold text-luxury-silver mb-4">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-luxury-card rounded-xl flex items-center justify-center">
                                            <span className="text-luxury-accent text-xl">📞</span>
                                        </div>
                                        <div>
                                            <div className="text-luxury-silver font-semibold">Phone</div>
                                            <div className="text-luxury-accent">(555) 123-4567</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-luxury-card rounded-xl flex items-center justify-center">
                                            <span className="text-luxury-accent text-xl">✉️</span>
                                        </div>
                                        <div>
                                            <div className="text-luxury-silver font-semibold">Email</div>
                                            <div className="text-luxury-accent">contact@purespace.com</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-luxury-card rounded-xl flex items-center justify-center">
                                            <span className="text-luxury-accent text-xl">🏢</span>
                                        </div>
                                        <div>
                                            <div className="text-luxury-silver font-semibold">Address</div>
                                            <div className="text-luxury-accent">123 Business Ave, Seattle, WA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card preserve-3d">
                                <h3 className="text-2xl font-bold text-luxury-silver mb-4">Business Hours</h3>
                                <div className="space-y-2">
                                    {[
                                        { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                                        { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                                        { day: 'Sunday', hours: 'Emergency Services Only' }
                                    ].map((schedule, i) => (
                                        <div key={schedule.day} className="flex justify-between">
                                            <span className="text-luxury-silver">{schedule.day}</span>
                                            <span className="text-luxury-accent">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}