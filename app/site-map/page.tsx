// app/site-map/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Site Map | PureSpace Cleaning Co.',
    description: 'Quick links to pages on PureSpace Cleaning Co.',
};

const main = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/company', label: 'Company' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
];

const legal = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
];

export default function SiteMapPage() {
    return (
        <div className="container py-14">
            <div className="max-w-4xl">
                <div className="kicker w-fit">Site Map</div>
                <h1 className="mt-6 text-4xl md:text-5xl h-title text-luxury-silver">
                    Quick links
                </h1>
                <p className="mt-4 p-lead">
                    Browse the main pages or view the XML sitemap for search engines.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="card p-8">
                        <div className="text-sm text-luxury-silver/60 tracking-[0.18em] uppercase">
                            Main
                        </div>
                        <ul className="mt-4 space-y-3">
                            {main.map((x) => (
                                <li key={x.href}>
                                    <Link className="text-luxury-silver hover:text-luxury-accent transition" href={x.href}>
                                        {x.label} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="card p-8">
                        <div className="text-sm text-luxury-silver/60 tracking-[0.18em] uppercase">
                            Legal
                        </div>
                        <ul className="mt-4 space-y-3">
                            {legal.map((x) => (
                                <li key={x.href}>
                                    <Link className="text-luxury-silver hover:text-luxury-accent transition" href={x.href}>
                                        {x.label} →
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-3 mt-3 border-t border-white/10">
                                <a
                                    className="text-luxury-silver/80 hover:text-luxury-accent transition"
                                    href="/sitemap.xml"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Sitemap.xml (for Google) ↗
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
