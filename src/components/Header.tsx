// 'use client';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState, useEffect, useRef } from 'react';
// import { SITE } from '@/lib/config';

// export function Header() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const dropdownTimeoutRef = useRef<NodeJS.Timeout>();
//     const dropdownRef = useRef<HTMLDivElement>(null);
//     const mobileMenuRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 50);
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Enhanced click outside handler
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//                 setActiveDropdown(null);
//             }
//             if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
//                 !(event.target as Element).closest('.mobile-menu-button')) {
//                 setIsMobileMenuOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const servicesItems = [
//         { name: 'Commercial Janitorial', href: '/services/commercial-janitorial', icon: '🏢' },
//         { name: 'Medical Facility Cleaning', href: '/services/medical-facility-cleaning', icon: '🏥' },
//         { name: 'Construction Cleanup', href: '/services/construction-cleanup', icon: '🏗️' },
//         { name: 'Carpet & Upholstery', href: '/services/carpet-upholstery', icon: '🧹' },
//         { name: 'Floor Stripping & Waxing', href: '/services/floor-stripping-waxing', icon: '✨' },
//         { name: 'Window Cleaning', href: '/services/window-cleaning', icon: '🪟' },
//         { name: 'Pressure Washing', href: '/services/pressure-washing', icon: '💦' },
//         { name: 'Junk Removal', href: '/services/junk-removal', icon: '🚛' }
//     ];

//     const industriesItems = [
//         { name: 'Corporate Offices', href: '/industries/corporate-offices', icon: '💼' },
//         { name: 'Healthcare Facilities', href: '/industries/healthcare-facilities', icon: '👨‍⚕️' },
//         { name: 'Educational Institutions', href: '/industries/educational-institutions', icon: '🎓' },
//         { name: 'Retail Centers', href: '/industries/retail-centers', icon: '🛍️' },
//         { name: 'Hospitality & Hotels', href: '/industries/hospitality-hotels', icon: '🏨' },
//         { name: 'Industrial Complexes', href: '/industries/industrial-complexes', icon: '🏭' }
//     ];

//     const companyItems = [
//         { name: 'About Us', href: '/about', icon: '👥' },
//         { name: 'Case Studies', href: '/case-studies', icon: '📊' },
//         { name: 'Testimonials', href: '/testimonials', icon: '⭐' },
//         { name: 'Certifications', href: '/certifications', icon: '🏆' },
//         { name: 'Careers', href: '/careers', icon: '💼' },
//         { name: 'Blog', href: '/blog', icon: '📝' },
//         { name: 'Contact', href: '/contact', icon: '📞' }
//     ];

//     // Enhanced dropdown handler with better timing
//     const handleDropdownEnter = (title: string) => {
//         if (dropdownTimeoutRef.current) {
//             clearTimeout(dropdownTimeoutRef.current);
//         }
//         setActiveDropdown(title);
//     };

//     const handleDropdownLeave = () => {
//         dropdownTimeoutRef.current = setTimeout(() => {
//             setActiveDropdown(null);
//         }, 200);
//     };

//     const Dropdown = ({ items, title }: { items: any[], title: string }) => (
//         <AnimatePresence>
//             {activeDropdown === title && (
//                 <motion.div
//                     initial={{ opacity: 0, y: 15, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: 15, scale: 0.95 }}
//                     className="absolute top-full left-0 mt-3 w-80 glass-dark rounded-2xl shadow-2xl border border-luxury-accent/20 p-6 preserve-3d z-50 overflow-hidden"
//                     style={{
//                         transformOrigin: 'top center',
//                         background: 'linear-gradient(135deg, rgba(26, 34, 56, 0.95), rgba(10, 15, 28, 0.98))'
//                     }}
//                     ref={dropdownRef}
//                     onMouseEnter={() => handleDropdownEnter(title)}
//                     onMouseLeave={handleDropdownLeave}
//                 >
//                     {/* Animated background gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-luxury-accent/5 to-luxury-gold/5 rounded-2xl"></div>

//                     {/* Shimmer effect */}
//                     <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-luxury-accent to-transparent shimmer-3d"></div>

//                     <div className="relative z-10">
//                         <h3 className="text-luxury-accent font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
//                             <span className="text-lg">{title === 'Services' ? '🛠️' : title === 'Industries' ? '🏭' : '🏢'}</span>
//                             {title}
//                         </h3>
//                         <div className="space-y-1">
//                             {items.map((item, index) => (
//                                 <motion.div
//                                     key={item.name}
//                                     initial={{ opacity: 0, x: -10 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: index * 0.05 }}
//                                 >
//                                     <Link
//                                         href={item.href}
//                                         className="group flex items-center gap-3 py-2 px-3 text-sm text-luxury-silver hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-luxury-accent/10 hover:to-luxury-gold/10 backdrop-blur-sm border border-transparent hover:border-luxury-accent/20"
//                                         onClick={() => setActiveDropdown(null)}
//                                     >
//                                         <span className="text-base">{item.icon}</span>
//                                         <span className="flex-1 font-medium">{item.name}</span>
//                                         <motion.span
//                                             className="opacity-0 group-hover:opacity-100 text-luxury-accent text-lg"
//                                             initial={{ x: -5 }}
//                                             whileHover={{ x: 0 }}
//                                             transition={{ type: "spring", stiffness: 400 }}
//                                         >
//                                             →
//                                         </motion.span>
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     );

//     const MobileDropdown = ({ items, title }: { items: any[], title: string }) => {
//         const [isOpen, setIsOpen] = useState(false);

//         return (
//             <div className="border-b border-luxury-card/30">
//                 <motion.button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="w-full text-left py-4 px-4 text-luxury-silver hover:text-luxury-accent font-semibold transition-all duration-300 flex items-center justify-between"
//                     whileTap={{ scale: 0.98 }}
//                 >
//                     <span className="flex items-center gap-3">
//                         <span className="text-lg">
//                             {title === 'Services' ? '🛠️' : title === 'Industries' ? '🏭' : '🏢'}
//                         </span>
//                         {title}
//                     </span>
//                     <motion.span
//                         animate={{ rotate: isOpen ? 180 : 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="text-luxury-accent"
//                     >
//                         ▼
//                     </motion.span>
//                 </motion.button>
//                 <AnimatePresence>
//                     {isOpen && (
//                         <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="overflow-hidden"
//                         >
//                             <div className="pb-2 px-2 space-y-1">
//                                 {items.map((item, index) => (
//                                     <motion.div
//                                         key={item.name}
//                                         initial={{ opacity: 0, x: -10 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ delay: index * 0.1 }}
//                                     >
//                                         <Link
//                                             href={item.href}
//                                             className="flex items-center gap-3 py-2 px-3 text-sm text-luxury-silver hover:text-white transition-all duration-300 rounded-lg hover:bg-luxury-card/50 border border-transparent hover:border-luxury-accent/20"
//                                             onClick={() => setIsMobileMenuOpen(false)}
//                                         >
//                                             <span className="text-base">{item.icon}</span>
//                                             <span>{item.name}</span>
//                                         </Link>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         );
//     };

//     return (
//         <motion.header
//             className={`fixed top-0 w-full z-50 transition-all duration-500 preserve-3d ${isScrolled
//                 ? 'glass-dark shadow-2xl py-2 backdrop-blur-xl'
//                 : 'bg-transparent py-3'
//                 }`}
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.6, type: "spring" }}
//         >
//             {/* Animated background effect */}
//             <motion.div
//                 className="absolute inset-0 bg-gradient-to-b from-luxury-dark/90 to-transparent"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: isScrolled ? 1 : 0 }}
//                 transition={{ duration: 0.3 }}
//             />

//             <div className="container flex items-center justify-between relative z-10">
//                 {/* Logo - Made more compact */}
//                 <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                     className="preserve-3d flex-shrink-0"
//                 >
//                     <Link
//                         href="/"
//                         className="flex items-center gap-2 sm:gap-3 no-underline group preserve-3d"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                         <motion.div
//                             className="relative preserve-3d"
//                             whileHover={{ rotateY: 180, scale: 1.1 }}
//                             transition={{ duration: 0.6, type: "spring" }}
//                         >
//                             <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-luxury-gold via-luxury-emerald to-luxury-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 preserve-3d relative overflow-hidden">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
//                                 <span className="text-luxury-dark font-bold text-xs sm:text-sm md:text-lg relative z-10">PS</span>
//                             </div>
//                         </motion.div>
//                         <div className="flex flex-col translate-z-10">
//                             <span className="text-lg sm:text-xl md:text-2xl font-bold luxury-heading leading-tight">
//                                 PureSpace
//                             </span>
//                             <span className="text-luxury-accent text-xs font-semibold bg-gradient-to-r from-luxury-accent to-luxury-gold bg-clip-text text-transparent leading-tight">
//                                 COMMERCIAL
//                             </span>
//                         </div>
//                     </Link>
//                 </motion.div>

//                 {/* Desktop Navigation - Show on larger screens only */}
//                 <nav className="hidden lg:flex items-center gap-1 preserve-3d mx-4">
//                     {[
//                         { title: 'Services', items: servicesItems },
//                         { title: 'Industries', items: industriesItems },
//                         { title: 'Company', items: companyItems }
//                     ].map((section) => (
//                         <div
//                             key={section.title}
//                             className="relative preserve-3d"
//                             onMouseEnter={() => handleDropdownEnter(section.title)}
//                             onMouseLeave={handleDropdownLeave}
//                         >
//                             <motion.button
//                                 className="nav-item-3d text-sm text-luxury-silver hover:text-luxury-accent font-semibold transition-all duration-300 py-2 px-3 sm:py-3 sm:px-4 flex items-center gap-1 rounded-xl hover:bg-luxury-card/30 border border-transparent hover:border-luxury-accent/20"
//                                 whileHover={{ scale: 1.02, y: -1 }}
//                                 whileTap={{ scale: 0.98 }}
//                             >
//                                 {section.title}
//                                 <motion.span
//                                     className="inline-block text-luxury-accent text-xs"
//                                     animate={{ rotate: activeDropdown === section.title ? 180 : 0 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     ▼
//                                 </motion.span>
//                             </motion.button>
//                             <Dropdown items={section.items} title={section.title} />
//                         </div>
//                     ))}
//                 </nav>

//                 {/* CTA Buttons - Optimized for mobile */}
//                 <div className="flex items-center gap-2 preserve-3d">
//                     {/* Emergency Line - Hidden on mobile to save space */}
//                     <motion.a
//                         href={SITE.telHref}
//                         className="btn btn-outline hidden md:flex items-center gap-2 preserve-3d group relative overflow-hidden text-xs sm:text-sm px-3 sm:px-4 py-2"
//                         whileHover={{ scale: 1.02, y: -1 }}
//                         whileTap={{ scale: 0.98 }}
//                     >
//                         <span className="text-base relative z-10">📞</span>
//                         <span className="relative z-10 hidden sm:inline">Emergency</span>
//                     </motion.a>

//                     {/* Book Consultation - Compact on mobile */}
//                     <motion.div
//                         whileHover={{ scale: 1.02, y: -1 }}
//                         whileTap={{ scale: 0.98 }}
//                         className="hidden sm:block preserve-3d"
//                     >
//                         <Link href="/booking" className="btn btn-primary preserve-3d group relative overflow-hidden text-xs sm:text-sm px-3 sm:px-4 py-2">
//                             <span className="relative z-10 font-semibold">Book Now</span>
//                         </Link>
//                     </motion.div>

//                     {/* Enhanced Mobile Menu Button - ALWAYS VISIBLE ON MOBILE */}
//                     <motion.button
//                         className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-60 mobile-menu-button bg-luxury-card/50 rounded-xl border border-luxury-accent/20 flex-shrink-0 ml-1"
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         whileHover={{ scale: 1.05, backgroundColor: 'rgba(26, 34, 56, 0.8)' }}
//                         whileTap={{ scale: 0.95 }}
//                         aria-label="Toggle mobile menu"
//                     >
//                         <motion.span
//                             animate={isMobileMenuOpen ? { rotate: 45, y: 6, backgroundColor: '#2dd4bf' } : { rotate: 0, y: 0, backgroundColor: '#e2e8f0' }}
//                             className="w-5 h-0.5 bg-luxury-silver mb-1.5 block rounded-full"
//                         />
//                         <motion.span
//                             animate={isMobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
//                             className="w-5 h-0.5 bg-luxury-silver mb-1.5 block rounded-full"
//                         />
//                         <motion.span
//                             animate={isMobileMenuOpen ? { rotate: -45, y: -6, backgroundColor: '#2dd4bf' } : { rotate: 0, y: 0, backgroundColor: '#e2e8f0' }}
//                             className="w-5 h-0.5 bg-luxury-silver block rounded-full"
//                         />
//                     </motion.button>
//                 </div>

//                 {/* Enhanced Mobile Menu */}
//                 <AnimatePresence>
//                     {isMobileMenuOpen && (
//                         <>
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 className="fixed inset-0 bg-luxury-dark/90 backdrop-blur-xl z-40 lg:hidden"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                             />

//                             <motion.div
//                                 initial={{ opacity: 0, x: '100%' }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: '100%' }}
//                                 transition={{
//                                     type: 'spring',
//                                     damping: 30,
//                                     stiffness: 300
//                                 }}
//                                 className="fixed top-0 right-0 w-full max-w-sm h-screen bg-gradient-to-br from-luxury-dark to-luxury-darker shadow-2xl border-l border-luxury-accent/20 z-50 lg:hidden overflow-y-auto"
//                                 ref={mobileMenuRef}
//                             >
//                                 <div className="relative h-full flex flex-col">
//                                     {/* Menu Header */}
//                                     <div className="glass-dark border-b border-luxury-card/50 p-4 flex-shrink-0">
//                                         <div className="flex items-center justify-between mb-4">
//                                             <div className="flex items-center gap-2">
//                                                 <div className="w-8 h-8 bg-gradient-to-r from-luxury-gold to-luxury-emerald rounded-xl flex items-center justify-center">
//                                                     <span className="text-luxury-dark font-bold text-xs">PS</span>
//                                                 </div>
//                                                 <div>
//                                                     <div className="luxury-heading text-base">PureSpace</div>
//                                                     <div className="text-luxury-accent text-xs">COMMERCIAL</div>
//                                                 </div>
//                                             </div>

//                                             <motion.button
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                                 className="w-8 h-8 flex items-center justify-center rounded-lg bg-luxury-card/50 border border-luxury-accent/20 text-luxury-silver hover:text-luxury-accent transition-colors"
//                                                 whileHover={{ scale: 1.1 }}
//                                                 whileTap={{ scale: 0.9 }}
//                                             >
//                                                 ✕
//                                             </motion.button>
//                                         </div>

//                                         {/* Mobile CTA Buttons in Header */}
//                                         <div className="flex gap-2">
//                                             <motion.a
//                                                 href={SITE.telHref}
//                                                 className="btn btn-outline flex-1 justify-center preserve-3d group text-xs py-2"
//                                                 whileHover={{ scale: 1.02 }}
//                                                 whileTap={{ scale: 0.98 }}
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 <span className="text-sm">📞</span>
//                                                 <span className="ml-1">Call</span>
//                                             </motion.a>
//                                             <motion.div
//                                                 whileHover={{ scale: 1.02 }}
//                                                 whileTap={{ scale: 0.98 }}
//                                                 className="flex-1"
//                                             >
//                                                 <Link
//                                                     href="/booking"
//                                                     className="btn btn-primary w-full justify-center preserve-3d text-xs py-2"
//                                                     onClick={() => setIsMobileMenuOpen(false)}
//                                                 >
//                                                     Book Now
//                                                 </Link>
//                                             </motion.div>
//                                         </div>
//                                     </div>

//                                     {/* Mobile Navigation */}
//                                     <div className="flex-1 overflow-y-auto p-4">
//                                         <div className="space-y-2">
//                                             {[
//                                                 { title: 'Services', items: servicesItems },
//                                                 { title: 'Industries', items: industriesItems },
//                                                 { title: 'Company', items: companyItems }
//                                             ].map((section) => (
//                                                 <MobileDropdown
//                                                     key={section.title}
//                                                     items={section.items}
//                                                     title={section.title}
//                                                 />
//                                             ))}
//                                         </div>

//                                         {/* Additional Mobile Links */}
//                                         <div className="mt-6 space-y-2">
//                                             <Link
//                                                 href="/contact"
//                                                 className="block py-3 px-4 text-luxury-silver hover:text-luxury-accent transition-all duration-300 rounded-xl border border-luxury-card/50 hover:border-luxury-accent/30 text-center font-semibold text-sm"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 📞 Contact Sales
//                                             </Link>
//                                             <Link
//                                                 href="/quote"
//                                                 className="block py-3 px-4 text-luxury-silver hover:text-luxury-accent transition-all duration-300 rounded-xl border border-luxury-card/50 hover:border-luxury-accent/30 text-center font-semibold text-sm"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 💰 Get Quote
//                                             </Link>
//                                         </div>
//                                     </div>

//                                     {/* Footer */}
//                                     <div className="flex-shrink-0 p-4 glass-dark border-t border-luxury-card/50">
//                                         <div className="text-center text-luxury-silver/70 text-xs">
//                                             <p>24/7 Professional Service</p>
//                                             <p className="text-xs mt-1">Serving Fortune 500 Companies</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </motion.header>
//     );
// }





//****************** Well working clean code */

// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect, useMemo, useRef, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { SITE } from '@/lib/config';

// const NAV = [
//     { label: 'Services', href: '/services' },
//     { label: 'Industries', href: '/industries' },
//     { label: 'Company', href: '/about' },
//     { label: 'Case Studies', href: '/case-studies' },
//     { label: 'Contact', href: '/contact' },
// ];

// function cx(...classes: Array<string | false | undefined | null>) {
//     return classes.filter(Boolean).join(' ');
// }

// function useLockBodyScroll(locked: boolean) {
//     useEffect(() => {
//         if (!locked) return;
//         const prev = document.body.style.overflow;
//         document.body.style.overflow = 'hidden';
//         return () => {
//             document.body.style.overflow = prev;
//         };
//     }, [locked]);
// }

// export function Header() {
//     const pathname = usePathname();
//     const [scrolled, setScrolled] = useState(false);
//     const [open, setOpen] = useState(false);
//     const panelRef = useRef<HTMLDivElement | null>(null);

//     useLockBodyScroll(open);

//     // Scroll refine (luxury feel)
//     useEffect(() => {
//         const onScroll = () => setScrolled(window.scrollY > 10);
//         onScroll();
//         window.addEventListener('scroll', onScroll, { passive: true });
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     // Close mobile menu on desktop
//     useEffect(() => {
//         const onResize = () => {
//             if (window.innerWidth >= 1024) setOpen(false);
//         };
//         window.addEventListener('resize', onResize);
//         return () => window.removeEventListener('resize', onResize);
//     }, []);

//     // ESC + outside click to close drawer
//     useEffect(() => {
//         function onKey(e: KeyboardEvent) {
//             if (e.key === 'Escape') setOpen(false);
//         }
//         function onMouseDown(e: MouseEvent) {
//             if (!open) return;
//             const t = e.target as Node;
//             if (panelRef.current && !panelRef.current.contains(t)) setOpen(false);
//         }
//         window.addEventListener('keydown', onKey);
//         window.addEventListener('mousedown', onMouseDown);
//         return () => {
//             window.removeEventListener('keydown', onKey);
//             window.removeEventListener('mousedown', onMouseDown);
//         };
//     }, [open]);

//     const activeHref = useMemo(() => {
//         // Active state handling: highlight parent routes cleanly
//         if (!pathname) return '';
//         const hit = NAV.find((n) => pathname === n.href || pathname.startsWith(n.href + '/'));
//         return hit?.href ?? '';
//     }, [pathname]);

//     return (
//         <header className="fixed top-0 left-0 right-0 z-50">
//             {/* Top bar shell */}
//             <div
//                 className={cx(
//                     'transition-all duration-300',
//                     scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
//                 )}
//             >
//                 <div className="container">
//                     <div className={cx('flex items-center justify-between', scrolled ? 'h-16' : 'h-16 md:h-20')}>
//                         {/* Brand */}
//                         <Link href="/" className="flex items-center gap-3">
//                             <div className={cx('relative', scrolled ? 'h-9 w-9' : 'h-10 w-10')}>
//                                 <Image
//                                     src="/logo_1.png"
//                                     alt="PureSpace"
//                                     fill
//                                     className="object-contain"
//                                     priority
//                                 />
//                             </div>

//                             <div className="leading-tight">
//                                 <div className="text-luxury-silver font-semibold tracking-wide">
//                                     {SITE?.name ?? 'PureSpace'}
//                                 </div>
//                                 <div className="text-[11px] text-luxury-silver/60 tracking-[0.22em]">
//                                     COMMERCIAL CLEANING
//                                 </div>
//                             </div>
//                         </Link>

//                         {/* Desktop nav */}
//                         <nav className="hidden lg:flex items-center">
//                             <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2">
//                                 {NAV.map((item) => {
//                                     const isActive = activeHref === item.href;
//                                     return (
//                                         <Link
//                                             key={item.href}
//                                             href={item.href}
//                                             className={cx(
//                                                 'navlink text-sm',
//                                                 isActive && 'navlink-active'
//                                             )}
//                                         >
//                                             {item.label}
//                                         </Link>
//                                     );
//                                 })}
//                             </div>
//                         </nav>

//                         {/* Actions */}
//                         <div className="flex items-center gap-2">
//                             {/* Phone (desktop) */}
//                             <a
//                                 href={SITE.telHref}
//                                 className="hidden md:inline-flex btn btn-outline px-4 py-2 text-sm"
//                                 aria-label={`Call ${SITE.phone}`}
//                             >
//                                 <span className="text-luxury-accent">Call</span>
//                                 <span className="text-luxury-silver/85">{SITE.phone}</span>
//                             </a>

//                             {/* Book Now (primary) */}
//                             <Link href="/booking" className="btn btn-primary px-4 py-2 text-sm">
//                                 Book Now <span aria-hidden>→</span>
//                             </Link>

//                             {/* Mobile hamburger */}
//                             <button
//                                 type="button"
//                                 className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
//                                 aria-label={open ? 'Close menu' : 'Open menu'}
//                                 onClick={() => setOpen((v) => !v)}
//                             >
//                                 <span className="text-luxury-silver text-xl">{open ? '✕' : '☰'}</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile drawer */}
//                 <AnimatePresence>
//                     {open && (
//                         <>
//                             {/* Backdrop */}
//                             <motion.div
//                                 className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                             />

//                             {/* Drawer */}
//                             <motion.aside
//                                 ref={panelRef}
//                                 className="fixed right-0 top-0 bottom-0 z-[60] w-[92%] max-w-md glass border-l border-white/10"
//                                 initial={{ x: 420 }}
//                                 animate={{ x: 0 }}
//                                 exit={{ x: 420 }}
//                                 transition={{ type: 'spring', stiffness: 260, damping: 26 }}
//                             >
//                                 <div className="p-5 flex items-center justify-between">
//                                     <div className="flex items-center gap-3">
//                                         <div className="relative h-10 w-10">
//                                             <Image src="/logo_1.png" alt="PureSpace" fill className="object-contain" />
//                                         </div>
//                                         <div>
//                                             <div className="text-luxury-silver font-semibold tracking-wide">
//                                                 {SITE?.name ?? 'PureSpace'}
//                                             </div>
//                                             <div className="text-[11px] text-luxury-silver/60 tracking-[0.22em]">
//                                                 COMMERCIAL CLEANING
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <button
//                                         type="button"
//                                         className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
//                                         aria-label="Close menu"
//                                         onClick={() => setOpen(false)}
//                                     >
//                                         <span className="text-luxury-silver text-xl">✕</span>
//                                     </button>
//                                 </div>

//                                 <div className="px-5 pb-3">
//                                     <div className="hr" />
//                                 </div>

//                                 {/* Drawer items */}
//                                 <div className="px-5 pb-5 space-y-2">
//                                     {/* Phone (mobile first) */}
//                                     <a
//                                         href={SITE.telHref}
//                                         onClick={() => setOpen(false)}
//                                         className="btn btn-outline w-full justify-center"
//                                     >
//                                         Call {SITE.phone}
//                                     </a>

//                                     {/* Nav */}
//                                     {NAV.map((item) => {
//                                         const isActive = activeHref === item.href;
//                                         return (
//                                             <Link
//                                                 key={item.href}
//                                                 href={item.href}
//                                                 onClick={() => setOpen(false)}
//                                                 className={cx(
//                                                     'block rounded-2xl px-4 py-3 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors',
//                                                     isActive ? 'text-luxury-silver' : 'text-luxury-silver/85'
//                                                 )}
//                                             >
//                                                 {item.label}
//                                             </Link>
//                                         );
//                                     })}
//                                 </div>

//                                 <div className="px-5 pb-6 space-y-3">
//                                     <Link
//                                         href="/booking"
//                                         onClick={() => setOpen(false)}
//                                         className="btn btn-primary w-full justify-center"
//                                     >
//                                         Book Now <span aria-hidden>→</span>
//                                     </Link>

//                                     <Link
//                                         href="/quote"
//                                         onClick={() => setOpen(false)}
//                                         className="btn btn-ghost w-full justify-center"
//                                     >
//                                         Request a Proposal
//                                     </Link>

//                                     <div className="text-xs text-luxury-silver/55 leading-relaxed">
//                                         Premium commercial cleaning for offices and facilities.
//                                     </div>
//                                 </div>
//                             </motion.aside>
//                         </>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </header>
//     );
// }


//*** Well Working Header.tsx**//


'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/config';

const NAV = [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Company', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
];

function cx(...classes: Array<string | false | undefined | null>) {
    return classes.filter(Boolean).join(' ');
}

function useLockBodyScroll(locked: boolean) {
    useEffect(() => {
        if (!locked) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [locked]);
}

export function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);

    useLockBodyScroll(open);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) setOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }
        function onMouseDown(e: MouseEvent) {
            if (!open) return;
            const t = e.target as Node;
            if (panelRef.current && !panelRef.current.contains(t)) setOpen(false);
        }
        window.addEventListener('keydown', onKey);
        window.addEventListener('mousedown', onMouseDown);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('mousedown', onMouseDown);
        };
    }, [open]);

    const activeHref = useMemo(() => {
        if (!pathname) return '';
        const hit = NAV.find((n) => pathname === n.href || pathname.startsWith(n.href + '/'));
        return hit?.href ?? '';
    }, [pathname]);

    const siteName = SITE?.name ?? 'PureSpace';

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div
                className={cx(
                    'transition-all duration-300',
                    scrolled ? 'glass border-b border-white/10' : 'bg-transparent'
                )}
            >
                <div className="container">
                    <div className={cx('flex items-center justify-between gap-2', scrolled ? 'h-16' : 'h-16 md:h-20')}>
                        {/* Brand */}
                        <Link href="/" className="brand flex min-w-0 items-center gap-3">
                            <div className={cx('relative shrink-0', scrolled ? 'h-9 w-9' : 'h-10 w-10')}>
                                <Image src="/logo_1.png" alt="PureSpace" fill className="object-contain" priority />
                            </div>

                            {/* Text block:
                 - hidden on ultra-small screens (prevents ugly clipping)
                 - shows short name on small widths
                 - shows full name + subtitle on larger mobile
              */}
                            <div className="min-w-0 leading-tight hidden min-[360px]:block">
                                {/* Name */}
                                <div className="text-luxury-silver font-semibold tracking-wide truncate">
                                    {/* 360–409: short */}
                                    <span className="hidden min-[360px]:inline min-[410px]:hidden">PureSpace</span>
                                    {/* 410+: full */}
                                    <span className="hidden min-[410px]:inline">{siteName}</span>
                                </div>

                                {/* Subtitle only when room exists */}
                                <div className="hidden min-[410px]:block text-[11px] text-luxury-silver/60 tracking-[0.22em] truncate">
                                    COMMERCIAL CLEANING
                                </div>
                            </div>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden lg:flex items-center">
                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2">
                                {NAV.map((item) => {
                                    const isActive = activeHref === item.href;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cx('navlink text-sm', isActive && 'navlink-active')}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        </nav>

                        {/* Actions */}
                        <div className="header-actions flex shrink-0 items-center gap-2">
                            {/* Phone: show only when there is enough width (prevents crowding) */}
                            <a
                                href={SITE.telHref}
                                className="hidden min-[410px]:inline-flex btn btn-outline px-4 py-2 text-sm shrink-0"
                                aria-label={`Call ${SITE.phone}`}
                            >
                                <span className="text-luxury-accent">Call</span>
                                <span className="text-luxury-silver/85">{SITE.phone}</span>
                            </a>

                            {/* Book Now (primary) */}
                            <Link
                                href="/booking"
                                className="btn btn-primary text-sm shrink-0 px-4 py-2 max-[380px]:px-3 max-[380px]:text-[13px]"
                            >
                                Book Now <span aria-hidden>→</span>
                            </Link>

                            {/* Mobile hamburger */}
                            <button
                                type="button"
                                className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                                aria-label={open ? 'Close menu' : 'Open menu'}
                                onClick={() => setOpen((v) => !v)}
                            >
                                <span className="text-luxury-silver text-xl">{open ? '✕' : '☰'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile drawer */}
                <AnimatePresence>
                    {open && (
                        <>
                            <motion.div
                                className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />

                            <motion.aside
                                ref={panelRef}
                                className="fixed right-0 top-0 bottom-0 z-[60] w-[92%] max-w-md glass border-l border-white/10"
                                initial={{ x: 420 }}
                                animate={{ x: 0 }}
                                exit={{ x: 420 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                            >
                                <div className="p-5 flex items-center justify-between">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="relative h-10 w-10 shrink-0">
                                            <Image src="/logo_1.png" alt="PureSpace" fill className="object-contain" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-luxury-silver font-semibold tracking-wide truncate">
                                                {siteName}
                                            </div>
                                            <div className="text-[11px] text-luxury-silver/60 tracking-[0.22em] truncate">
                                                COMMERCIAL CLEANING
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                                        aria-label="Close menu"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="text-luxury-silver text-xl">✕</span>
                                    </button>
                                </div>

                                <div className="px-5 pb-3">
                                    <div className="hr" />
                                </div>

                                <div className="px-5 pb-5 space-y-2">
                                    <a
                                        href={SITE.telHref}
                                        onClick={() => setOpen(false)}
                                        className="btn btn-outline w-full justify-center"
                                    >
                                        Call {SITE.phone}
                                    </a>

                                    {NAV.map((item) => {
                                        const isActive = activeHref === item.href;
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={cx(
                                                    'block rounded-2xl px-4 py-3 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors',
                                                    isActive ? 'text-luxury-silver' : 'text-luxury-silver/85'
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="px-5 pb-6 space-y-3">
                                    <Link
                                        href="/booking"
                                        onClick={() => setOpen(false)}
                                        className="btn btn-primary w-full justify-center"
                                    >
                                        Book Now <span aria-hidden>→</span>
                                    </Link>

                                    {/* you said request proposal is already fixed; leaving this as /contact is safe */}
                                    <Link
                                        href="/contact"
                                        onClick={() => setOpen(false)}
                                        className="btn btn-ghost w-full justify-center"
                                    >
                                        Request a Proposal
                                    </Link>

                                    <div className="text-xs text-luxury-silver/55 leading-relaxed">
                                        Premium commercial cleaning for offices and facilities.
                                    </div>
                                </div>
                            </motion.aside>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}