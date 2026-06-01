'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
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
            const target = e.target as Node;

            if (panelRef.current && !panelRef.current.contains(target)) {
                setOpen(false);
            }
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
        const hit = NAV.find((item) => pathname === item.href || pathname.startsWith(item.href + '/'));
        return hit?.href ?? '';
    }, [pathname]);

    const siteName = SITE?.name ?? 'PureSpace Cleaning Co.';

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div
                className={cx(
                    'transition-all duration-300',
                    scrolled
                        ? 'bg-[#060913]/95 backdrop-blur-2xl border-b border-white/10 shadow-xl'
                        : 'bg-[#060913]/90 backdrop-blur-xl border-b border-white/5'
                )}
            >
                <div className="container">
                    <div className="flex h-16 md:h-20 items-center justify-between gap-2">
                        {/* Brand */}
                        <Link href="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                            <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0">
                                <Image
                                    src="/logo_1.png"
                                    alt="PureSpace Cleaning Co."
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="min-w-0 leading-tight">
                                <div className="text-luxury-silver font-semibold tracking-wide text-sm min-[360px]:text-base sm:text-lg truncate">
                                    {siteName}
                                </div>

                                <div className="text-[9px] min-[360px]:text-[10px] sm:text-[11px] text-luxury-silver/60 tracking-[0.18em] sm:tracking-[0.22em] truncate">
                                    COMMERCIAL CLEANING
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
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

                        {/* Right Actions */}
                        <div className="flex shrink-0 items-center gap-2">
                            {/* Modern mobile call button */}
                            <a
                                href={SITE.telHref}
                                aria-label={`Call ${SITE.phone}`}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-luxury-accent shadow-lg shadow-black/20 transition hover:bg-white/[0.1] md:w-auto md:px-4 md:gap-2"
                            >
                                <Phone size={18} strokeWidth={2.4} />
                                <span className="hidden md:inline text-sm font-semibold text-luxury-silver/85">
                                    {SITE.phone}
                                </span>
                            </a>

                            <Link
                                href="/booking"
                                className="btn btn-primary shrink-0 px-4 py-2 text-sm max-[380px]:px-3 max-[380px]:text-[13px]"
                            >
                                Book Now <span aria-hidden>→</span>
                            </Link>

                            <button
                                type="button"
                                className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-luxury-silver shadow-lg shadow-black/20 transition hover:bg-white/[0.1]"
                                aria-label={open ? 'Close menu' : 'Open menu'}
                                onClick={() => setOpen((value) => !value)}
                            >
                                {open ? <X size={24} /> : <Menu size={25} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-[55] bg-black/70 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        <motion.aside
                            ref={panelRef}
                            className="fixed right-0 top-0 bottom-0 z-[60] w-[88%] max-w-sm border-l border-white/10 bg-[#060913] shadow-2xl"
                            initial={{ x: 420 }}
                            animate={{ x: 0 }}
                            exit={{ x: 420 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                        >
                            <div className="p-5 flex items-center justify-between gap-4 border-b border-white/10 bg-[#060913]">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="relative h-10 w-10 shrink-0">
                                        <Image
                                            src="/logo_1.png"
                                            alt="PureSpace Cleaning Co."
                                            fill
                                            className="object-contain"
                                        />
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
                                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-luxury-silver transition hover:bg-white/[0.1]"
                                    aria-label="Close menu"
                                    onClick={() => setOpen(false)}
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-5 space-y-3">
                                <a
                                    href={SITE.telHref}
                                    onClick={() => setOpen(false)}
                                    className="btn btn-outline w-full justify-center gap-2"
                                >
                                    <Phone size={18} />
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
                                                'block rounded-2xl px-5 py-4 border border-white/10 bg-white/[0.06] hover:bg-white/[0.1] transition-colors text-base font-medium',
                                                isActive ? 'text-luxury-silver' : 'text-luxury-silver/85'
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}

                                <Link
                                    href="/booking"
                                    onClick={() => setOpen(false)}
                                    className="btn btn-primary w-full justify-center mt-5"
                                >
                                    Book Now <span aria-hidden>→</span>
                                </Link>

                                <Link
                                    href="/contact"
                                    onClick={() => setOpen(false)}
                                    className="btn btn-ghost w-full justify-center"
                                >
                                    Request a Proposal
                                </Link>

                                <p className="pt-4 text-xs leading-relaxed text-luxury-silver/55">
                                    Premium commercial cleaning for offices and facilities.
                                </p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}