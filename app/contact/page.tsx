"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const BUSINESS_PHONE_DISPLAY = "(360) 523-0312";
const BUSINESS_EMAIL = "purespacecowa@gmail.com";
const BUSINESS_LOCATION = "Des Moines, WA"; // change if you want

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        website: "", // honeypot (hidden)
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<
        { type: "success" | "error"; message: string } | null
    >(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(null);
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || !data?.ok) {
                setStatus({
                    type: "error",
                    message:
                        data?.error ||
                        "Something went wrong. Please try again or email us directly.",
                });
                return;
            }

            setStatus({
                type: "success",
                message:
                    "Message sent! We received it and will reply as soon as possible.",
            });

            // reset form
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: "",
                website: "",
            });
        } catch (err) {
            setStatus({
                type: "error",
                message: "Network error. Please try again or email us directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
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

                    <p className="text-luxury-silver/70 text-lg max-w-2xl mx-auto">
                        Tell us what you need — we’ll respond quickly with next steps and a quote.
                    </p>
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
                            <h2 className="text-3xl font-bold text-luxury-silver mb-6">
                                Send us a Message
                            </h2>

                            {/* Status banner */}
                            {status && (
                                <div
                                    className={`mb-6 p-4 rounded-2xl border ${status.type === "success"
                                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                                            : "bg-red-500/10 border-red-500/30 text-red-300"
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Honeypot field (hidden) */}
                                <input
                                    type="text"
                                    value={formData.website}
                                    onChange={(e) =>
                                        setFormData({ ...formData, website: e.target.value })
                                    }
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-luxury-silver mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            className="input-3d w-full"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-luxury-silver mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            className="input-3d w-full"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-luxury-silver mb-2">
                                            Company (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            className="input-3d w-full"
                                            value={formData.company}
                                            onChange={(e) =>
                                                setFormData({ ...formData, company: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-luxury-silver mb-2">
                                            Phone (Optional)
                                        </label>
                                        <input
                                            type="tel"
                                            className="input-3d w-full"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-luxury-silver mb-2">
                                        Service Needed (Optional)
                                    </label>
                                    <select
                                        className="input-3d w-full"
                                        value={formData.service}
                                        onChange={(e) =>
                                            setFormData({ ...formData, service: e.target.value })
                                        }
                                    >
                                        <option value="">Select a service</option>
                                        <option value="commercial-janitorial">Commercial Janitorial</option>
                                        <option value="medical-facility">Medical Facility Cleaning</option>
                                        <option value="construction-cleanup">Construction Cleanup</option>
                                        <option value="floor-stripping-waxing">Floor Stripping & Waxing</option>
                                        <option value="carpet-upholstery">Carpet & Upholstery</option>
                                        <option value="window-cleaning">Window Cleaning</option>
                                        <option value="pressure-washing">Pressure Washing</option>
                                        <option value="junk-removal">Junk Removal</option>
                                        <option value="emergency-services">Emergency Services</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-luxury-silver mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="input-3d w-full"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-primary w-full"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </motion.button>

                                <p className="text-sm text-luxury-silver/60">
                                    Prefer email? Send directly to{" "}
                                    <span className="text-luxury-accent">{BUSINESS_EMAIL}</span>
                                </p>
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
                                <h3 className="text-2xl font-bold text-luxury-silver mb-4">
                                    Contact Information
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-luxury-card rounded-xl flex items-center justify-center">
                                            <span className="text-luxury-accent text-xl">📞</span>
                                        </div>
                                        <div>
                                            <div className="text-luxury-silver font-semibold">Phone</div>
                                            <div className="text-luxury-accent">{BUSINESS_PHONE_DISPLAY}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-luxury-card rounded-xl flex items-center justify-center">
                                            <span className="text-luxury-accent text-xl">✉️</span>
                                        </div>
                                        <div>
                                            <div className="text-luxury-silver font-semibold">Email</div>
                                            <div className="text-luxury-accent">{BUSINESS_EMAIL}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-luxury-card rounded-xl flex items-center justify-center">
                                            <span className="text-luxury-accent text-xl">📍</span>
                                        </div>
                                        <div>
                                            <div className="text-luxury-silver font-semibold">Location</div>
                                            <div className="text-luxury-accent">{BUSINESS_LOCATION}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card preserve-3d">
                                <h3 className="text-2xl font-bold text-luxury-silver mb-4">
                                    Business Hours
                                </h3>
                                <div className="space-y-2">
                                    {[
                                        { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                                        { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                                        { day: "Sunday", hours: "Emergency Services Only" },
                                    ].map((schedule) => (
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
