'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SITE } from '@/lib/config';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const servicesItems = [
        { name: 'Commercial Janitorial', href: '/services/commercial-janitorial' },
        { name: 'Medical Facility Cleaning', href: '/services/medical-facility' },
        { name: 'Construction Cleanup', href: '/services/construction-cleanup' },
        { name: 'Carpet & Upholstery', href: '/services/carpet-upholstery' },
        { name: 'Floor Care', href: '/services/floor-care' },
        { name: 'Window Cleaning', href: '/services/window-cleaning' },
        { name: 'Emergency Services', href: '/emergency-services' },
        { name: 'Green Cleaning', href: '/green-cleaning' }
    ];

    const industriesItems = [
        { name: 'Corporate Offices', href: '/industries/corporate' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Education', href: '/industries/education' },
        { name: 'Retail', href: '/industries/retail' },
        { name: 'Hospitality', href: '/industries/hospitality' },
        { name: 'Industrial', href: '/industries/industrial' }
    ];

    const companyItems = [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ];

    const Dropdown = ({ items, title }: { items: any[], title: string }) => (
        <AnimatePresence>
            {activeDropdown === title && (
                <motion.div
                    initial={{ opacity: 0, y: 10, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: 10, rotateX: -15 }}
                    className="absolute top-full left-0 mt-4 w-64 glass-dark rounded-2xl shadow-2xl border border-luxury-accent/20 p-4 preserve-3d"
                    style={{ transformOrigin: 'top center' }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="block py-3 px-4 text-luxury-silver hover:text-luxury-accent transition-all duration-300 rounded-xl hover:bg-luxury-card/50"
                                onMouseEnter={() => setActiveDropdown(title)}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 transition-all duration-500 preserve-3d ${isScrolled
                    ? 'glass-dark shadow-2xl py-2'
                    : 'bg-transparent py-4'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="preserve-3d"
                >
                    <Link href="/" className="flex items-center gap-3 no-underline group preserve-3d">
                        <motion.div
                            className="relative preserve-3d"
                            whileHover={{ rotateY: 180 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-luxury-gold to-luxury-emerald rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 preserve-3d">
                                <span className="text-luxury-dark font-bold text-lg">PS</span>
                            </div>
                        </motion.div>
                        <div className="flex flex-col translate-z-10">
                            <span className="text-2xl font-bold luxury-heading">
                                PureSpace
                            </span>
                            <span className="text-luxury-accent text-sm font-semibold">COMMERCIAL SOLUTIONS</span>
                        </div>
                    </Link>
                </motion.div>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-8 preserve-3d">
                    {[
                        { title: 'Services', items: servicesItems },
                        { title: 'Industries', items: industriesItems },
                        { title: 'Company', items: companyItems }
                    ].map((section) => (
                        <div
                            key={section.title}
                            className="relative preserve-3d"
                            onMouseEnter={() => setActiveDropdown(section.title)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="nav-item-3d text-luxury-silver hover:text-luxury-accent font-medium transition-colors duration-300 py-2 px-4">
                                {section.title}
                                <motion.span
                                    className="ml-1 inline-block"
                                    animate={{ rotate: activeDropdown === section.title ? 180 : 0 }}
                                >
                                    ▼
                                </motion.span>
                            </button>
                            <Dropdown items={section.items} title={section.title} />
                        </div>
                    ))}
                </nav>

                {/* CTA Buttons */}
                <motion.div
                    className="flex items-center gap-4 preserve-3d"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.a
                        href={SITE.telHref}
                        className="btn btn-outline hidden sm:flex items-center gap-2 preserve-3d"
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>📞</span>
                        Emergency Line
                    </motion.a>
                    <motion.div
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="preserve-3d"
                    >
                        <Link href="/booking" className="btn btn-primary preserve-3d">
                            Book Consultation
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.header>
    );
}