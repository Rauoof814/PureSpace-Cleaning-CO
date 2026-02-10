import type { Metadata } from "next";
import Link from "next/link";
import data from "@/content/services.json";
import { SITE } from "@/lib/config";
import { ServicesGridMotion } from "@/components/ServicesGridMotion";

export const metadata: Metadata = {
    title: "Commercial Cleaning Services | PureSpace Cleaning Co.",
    description:
        "Explore PureSpace commercial cleaning services across Washington: janitorial, day porter, non-clinical medical cleaning, post-construction cleanup, windows, floor care, carpet extraction, and high-touch disinfection. Custom quotes only.",
    alternates: {
        canonical: `${SITE.url}/services`,
    },
    openGraph: {
        title: "Commercial Cleaning Services | PureSpace Cleaning Co.",
        description:
            "Premium janitorial & specialty cleaning for offices, retail, STR, and construction across Washington. Custom quotes only—no public pricing.",
        url: `${SITE.url}/services`,
        type: "website",
    },
};

type ServiceItem = {
    slug: string;
    title: string;
    intro?: string;
    industries?: string[];
};

function getServices(): ServiceItem[] {
    return Object.values(data as unknown as Record<string, ServiceItem>)
        .filter((s) => s?.slug && s?.title)
        .sort((a, b) => a.title.localeCompare(b.title));
}

export default function ServicesPage() {
    const services = getServices();

    // JSON-LD: CollectionPage + ItemList
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Commercial Cleaning Services",
        description: metadata.description,
        url: `${SITE.url}/services`,
        isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
        mainEntity: {
            "@type": "ItemList",
            itemListElement: services.map((s, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: s.title,
                url: `${SITE.url}/services/${s.slug}`,
            })),
        },
    };

    return (
        <div className="min-h-screen bg-luxury-dark">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO */}
            <section className="relative pt-28 pb-14 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <div className="absolute inset-0 bg-luxury-grid opacity-15" />

                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <div className="kicker w-fit">Services</div>

                        <h1 className="mt-6 text-4xl md:text-6xl h-title text-luxury-silver">
                            Premium commercial cleaning—built to stay consistent
                        </h1>

                        <p className="mt-4 p-lead">
                            Choose a service to see inclusions, optional add-ons, and best-fit environments.
                            Proposals are customized by facility size, schedule, and finish standards.
                        </p>

                        <div className="mt-7 flex flex-col sm:flex-row gap-2">
                            <Link
                                href="/booking"
                                className="btn btn-primary w-full sm:w-auto justify-center"
                            >
                                Book walkthrough →
                            </Link>
                            <Link
                                href="/contact"
                                className="btn btn-outline w-full sm:w-auto justify-center"
                            >
                                Request a proposal
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            <span className="badge">Custom scopes</span>
                            <span className="badge">After-hours options</span>
                            <span className="badge">Inspection-ready</span>
                            <span className="badge">Washington coverage</span>
                        </div>
                    </div>

                    <div className="mt-10 hr" />

                    {/* Animated Grid (Client component) */}
                    <ServicesGridMotion services={services} />
                </div>
            </section>

            {/* CONVERSION PANEL */}
            <section className="container pb-14">
                <div className="panel p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="text-lg font-semibold text-luxury-silver">
                            Not sure which service matches your facility?
                        </div>
                        <div className="mt-1 text-sm text-luxury-silver/65 leading-relaxed">
                            Tell us your building type, frequency, and high-priority areas (restrooms, glass,
                            floors, high-touch surfaces). We’ll design a scope and send a proposal.
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                        <Link
                            href="/booking"
                            className="btn btn-primary w-full sm:w-auto justify-center"
                        >
                            Book walkthrough →
                        </Link>
                        <Link
                            href="/contact"
                            className="btn btn-outline w-full sm:w-auto justify-center"
                        >
                            Talk to us
                        </Link>
                    </div>
                </div>

                <div className="mt-6 text-xs text-luxury-silver/55">
                    Note: We don’t publish one-size pricing because commercial scopes vary by site, schedule, and finishes.
                </div>
            </section>
        </div>
    );
}
