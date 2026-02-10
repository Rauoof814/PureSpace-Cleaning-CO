import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Industries Served | PureSpace Commercial Cleaning',
    description:
        'Commercial cleaning services for offices, healthcare (non-clinical), retail, education, property management, construction, and more in the Seattle area.',
};

const INDUSTRIES = [
    {
        name: 'Corporate Offices',
        desc: 'Quiet, consistent cleaning that protects finishes and keeps executive spaces presentation-ready.',
        bestFor: ['Daily/weekly janitorial', 'Conference rooms', 'Restrooms + breakrooms'],
        services: ['office-janitorial', 'day-porter', 'windows', 'disinfection'],
    },
    {
        name: 'Healthcare (Non-Clinical)',
        desc: 'High-touch and waiting-area sanitation with privacy-aware routines for non-clinical spaces.',
        bestFor: ['Front desk + waiting areas', 'Restrooms', 'Staff rooms'],
        services: ['medical-dental', 'disinfection', 'windows'],
    },
    {
        name: 'Retail & Showrooms',
        desc: 'Merch-first cleaning that keeps floors, glass, and displays sharp under lighting.',
        bestFor: ['Glass + mirrors', 'Entry presentation', 'Back-of-house resets'],
        services: ['retail-showroom', 'windows', 'floor-care'],
    },
    {
        name: 'Education',
        desc: 'Consistent cleaning for classrooms and common spaces with high-traffic attention.',
        bestFor: ['Common areas', 'Restrooms', 'Gyms/studios'],
        services: ['schools-gyms', 'disinfection'],
    },
    {
        name: 'Property Management',
        desc: 'Common-area cleaning for lobbies, hallways, gyms, and amenity spaces.',
        bestFor: ['Lobbies + elevators', 'Amenity rooms', 'Turn-ready presentation'],
        services: ['office-janitorial', 'windows', 'floor-care', 'carpet-extraction'],
    },
    {
        name: 'Construction / Builders',
        desc: 'Post-construction rough and final cleans with detail finishing and handoff readiness.',
        bestFor: ['HEPA dusting', 'Sticker/glue removal', 'Punch-list detail'],
        services: ['post-construction', 'pressure-washing', 'windows'],
    },
    {
        name: 'Industrial',
        desc: 'Focused cleaning for offices, break rooms, and non-production areas with durable floor attention.',
        bestFor: ['Non-production areas', 'Restrooms', 'Entryways'],
        services: ['office-janitorial', 'floor-care', 'pressure-washing'],
    },
    {
        name: 'HOA / Multifamily',
        desc: 'Reliable common-area cleaning that keeps tenant-facing spaces consistently clean.',
        bestFor: ['Hallways + lobbies', 'Stairwells', 'Amenity spaces'],
        services: ['office-janitorial', 'windows', 'floor-care'],
    },
];

function slugify(label: string) {
    return label.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
}

export default function IndustriesPage() {
    return (
        <div className="container py-14">
            <div className="max-w-3xl">
                <div className="kicker w-fit">Industries</div>
                <h1 className="mt-6 text-4xl md:text-5xl h-title text-luxury-silver">
                    Industries we serve
                </h1>
                <p className="mt-4 p-lead">
                    Commercial cleaning programs designed around your facility type, traffic patterns, and presentation standards.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {INDUSTRIES.map((x) => (
                        <a key={x.name} href={`#${slugify(x.name)}`} className="badge">
                            {x.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-10 hr" />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {INDUSTRIES.map((x) => (
                    <section key={x.name} id={slugify(x.name)} className="card p-8">
                        <h2 className="text-2xl font-semibold text-luxury-silver">{x.name}</h2>
                        <p className="mt-3 text-sm text-luxury-silver/70 leading-relaxed">{x.desc}</p>

                        <div className="mt-6">
                            <div className="text-xs tracking-widest uppercase text-luxury-silver/55">Typical focus</div>
                            <ul className="mt-3 space-y-2 text-sm text-luxury-silver/75">
                                {x.bestFor.map((b) => (
                                    <li key={b} className="flex gap-2">
                                        <span className="text-luxury-accent">•</span>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6">
                            <div className="text-xs tracking-widest uppercase text-luxury-silver/55">Recommended services</div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {x.services.map((s) => (
                                    <Link key={s} href={`/services/${s}`} className="badge">
                                        {s.replace(/-/g, ' ')}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="mt-7 flex flex-col sm:flex-row gap-2">
                            <Link href="/booking" className="btn btn-primary w-full justify-center">
                                Book walkthrough →
                            </Link>
                            <Link href="/services" className="btn btn-outline w-full justify-center">
                                View services
                            </Link>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
