'use client';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        position: "Facility Manager, Amazon",
        content: "PureSpace transformed our corporate campus. Their attention to detail and 24/7 responsiveness is unmatched in the industry.",
        rating: 5,
        image: "/testimonials/amazon.jpg"
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        position: "Operations Director, Microsoft",
        content: "The green cleaning solutions implemented by PureSpace helped us achieve LEED certification while maintaining impeccable standards.",
        rating: 5,
        image: "/testimonials/microsoft.jpg"
    },
    {
        id: 3,
        name: "Dr. Emily Watson",
        position: "Chief Medical Officer, Swedish Medical",
        content: "Healthcare cleaning requires precision. PureSpace's infection control protocols exceed all regulatory requirements.",
        rating: 5,
        image: "/testimonials/medical.jpg"
    }
];

export default function Testimonials() {
    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <div className="container relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold luxury-heading mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Client <span className="gradient-text">Testimonials</span>
                    </motion.h1>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="card preserve-3d"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ rotateY: 10, scale: 1.02 }}
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            className="text-luxury-gold text-xl"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            ★
                                        </motion.span>
                                    ))}
                                </div>

                                <p className="text-luxury-silver text-lg italic mb-6">"{testimonial.content}"</p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-luxury-gold to-luxury-emerald rounded-full flex items-center justify-center">
                                        <span className="text-luxury-dark font-bold">{testimonial.name[0]}</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-luxury-silver">{testimonial.name}</div>
                                        <div className="text-luxury-accent text-sm">{testimonial.position}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}