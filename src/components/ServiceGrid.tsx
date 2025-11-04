'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const servicesData = [
    {
        slug: 'commercial-janitorial',
        title: 'Commercial Janitorial',
        intro: 'Daily office cleaning for corporate environments',
        icon: '🏢',
        features: ['Daily trash removal', 'Surface disinfection', 'Restroom sanitation', 'Floor care'],
        image: '/services/office-cleaning.jpg'
    },
    {
        slug: 'medical-facility-cleaning',
        title: 'Medical Facility Cleaning',
        intro: 'HIPAA compliant healthcare environment cleaning',
        icon: '🏥',
        features: ['Biohazard disposal', 'Sterile surface cleaning', 'Medical waste management', 'Infection control'],
        image: '/services/medical-cleaning.jpg'
    },
    {
        slug: 'construction-cleanup',
        title: 'Construction Cleanup',
        intro: 'Post-construction deep cleaning and debris removal',
        icon: '🏗️',
        features: ['Debris removal', 'Final clean preparation', 'Window and surface cleaning', 'Floor protection removal'],
        image: '/services/construction-cleanup.jpg'
    },
    {
        slug: 'carpet-upholstery',
        title: 'Carpet & Upholstery',
        intro: 'Professional carpet cleaning and fabric care',
        icon: '🧹',
        features: ['Steam extraction', 'Stain removal', 'Odor elimination', 'Fabric protection'],
        image: '/services/carpet-cleaning.jpg'
    },
    {
        slug: 'floor-stripping-waxing',
        title: 'Floor Stripping & Waxing',
        intro: 'Commercial floor maintenance and restoration',
        icon: '✨',
        features: ['Stripping old finish', 'Multiple wax coats', 'Buffing and polishing', 'Sealant application'],
        image: '/services/floor-waxing.jpg'
    },
    {
        slug: 'window-cleaning',
        title: 'Window Cleaning',
        intro: 'Crystal clear commercial window services',
        icon: '🪟',
        features: ['High-rise capable', 'Water-fed pole systems', 'Squeegee finishing', 'Screen cleaning'],
        image: '/services/window-cleaning.jpg'
    },
    {
        slug: 'pressure-washing',
        title: 'Pressure Washing',
        intro: 'Exterior building and surface cleaning',
        icon: '💦',
        features: ['Building exteriors', 'Parking garages', 'Sidewalk cleaning', 'Graffiti removal'],
        image: '/services/pressure-washing.jpg'
    },
    {
        slug: 'junk-removal',
        title: 'Junk Removal',
        intro: 'Commercial junk and waste management',
        icon: '🗑️',
        features: ['Office cleanouts', 'Construction debris', 'Electronic waste', 'Sustainable disposal'],
        image: '/services/junk-removal.jpg'
    },
    {
        slug: 'deep-cleaning',
        title: 'Deep Cleaning',
        intro: 'Comprehensive seasonal and move-in/out cleaning',
        icon: '🔍',
        features: ['Detailed surface cleaning', 'Hard-to-reach areas', 'Sanitization', 'Odor elimination'],
        image: '/services/deep-cleaning.jpg'
    },
    {
        slug: 'post-event-cleaning',
        title: 'Post-Event Cleaning',
        intro: 'Rapid cleanup after corporate events and gatherings',
        icon: '🎪',
        features: ['Trash removal', 'Floor cleaning', 'Restroom servicing', 'Emergency response'],
        image: '/services/event-cleaning.jpg'
    },
    {
        slug: 'hvac-cleaning',
        title: 'HVAC Cleaning',
        intro: 'Duct and ventilation system maintenance',
        icon: '❄️',
        features: ['Duct cleaning', 'Vent sanitization', 'Filter replacement', 'Air quality improvement'],
        image: '/services/hvac-cleaning.jpg'
    },
    {
        slug: 'sanitization-services',
        title: 'Sanitization Services',
        intro: 'Advanced disinfection for high-traffic areas',
        icon: '🦠',
        features: ['Electrostatic spraying', 'UV-C light treatment', 'EPA-approved disinfectants', 'Pathogen elimination'],
        image: '/services/sanitization.jpg'
    }
];

export function ServiceGrid() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
                <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group relative"
                >
                    {/* Animated Background */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl"
                        animate={{
                            background: hoveredCard === index
                                ? ['linear-gradient(135deg, #1a2238 0%, #2a3655 50%, #1a2238 100%)', 'linear-gradient(135deg, #1a2238 0%, #2a3655 100%)']
                                : 'linear-gradient(135deg, #0a0f1c 0%, #1a2238 100%)'
                        }}
                        transition={{ duration: 0.5 }}
                    />

                    {/* Glow Effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-accent-teal/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                            opacity: hoveredCard === index ? 0.3 : 0
                        }}
                    />

                    <div className="relative z-10 card border-0 bg-transparent text-white h-full flex flex-col">
                        {/* Service Icon */}
                        <motion.div
                            className="text-4xl mb-4"
                            animate={{
                                scale: hoveredCard === index ? 1.2 : 1,
                                rotate: hoveredCard === index ? [0, -5, 5, 0] : 0
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {service.icon}
                        </motion.div>

                        {/* Service Title */}
                        <h3 className="text-xl font-bold mb-3 luxury-heading">{service.title}</h3>

                        {/* Description */}
                        <p className="text-slate-300 mb-4 flex-grow">{service.intro}</p>

                        {/* Features */}
                        <motion.ul
                            className="space-y-1 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredCard === index ? 1 : 0.7 }}
                        >
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                                <motion.li
                                    key={feature}
                                    className="text-sm text-slate-400 flex items-center gap-2"
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: featureIndex * 0.1 }}
                                >
                                    <motion.span
                                        animate={{ scale: hoveredCard === index ? [1, 1.2, 1] : 1 }}
                                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                    >
                                        ✓
                                    </motion.span>
                                    {feature}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTA Button */}
                        <motion.div
                            className="mt-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="btn btn-primary w-full text-center bg-gradient-to-r from-accent-gold to-accent-teal hover:from-accent-teal hover:to-accent-gold transition-all duration-300"
                            >
                                Explore Service
                                <motion.span
                                    animate={{ x: hoveredCard === index ? [0, 5, 0] : 0 }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}