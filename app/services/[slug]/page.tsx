import data from "@/content/services.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/lib/config";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";

type ServiceItem = {
    slug: string;
    title: string;
    intro?: string;
    inclusions?: string[];
    addons?: string[];
    industries?: string[];
};

function getAllServices(): ServiceItem[] {
    return Object.values(data as unknown as Record<string, ServiceItem>).filter((s) => s?.slug && s?.title);
}

export function generateStaticParams() {
    return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const svc = getAllServices().find((s) => s.slug === slug);

    if (!svc) return {};

    const title = `${svc.title} | ${SITE.name}`;
    const description =
        svc.intro ??
        `Explore ${svc.title}: scope, inclusions, optional add-ons, and how PureSpace delivers consistent commercial cleaning across Washington.`;

    const url = `${SITE.url}/services/${svc.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "website",
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const services = getAllServices();
    const svc = services.find((s) => s.slug === slug);
    if (!svc) return notFound();

    const related = services.filter((s) => s.slug !== svc.slug).slice(0, 6);

    const url = `${SITE.url}/services/${svc.slug}`;

    // JSON-LD: Service + BreadcrumbList (no pricing, no fake claims)
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
                { "@type": "ListItem", position: 3, name: svc.title, item: url },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            name: svc.title,
            description: svc.intro ?? "",
            url,
            areaServed: {
                "@type": "AdministrativeArea",
                name: "Washington",
            },
            provider: {
                "@type": "LocalBusiness",
                name: SITE.name,
                url: SITE.url,
                telephone: SITE.telHref.replace("tel:", ""),
            },
        },
    ];

    return (
        <div className="min-h-screen bg-luxury-dark">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Server-rendered HERO (SEO) */}
            <section className="relative pt-28 pb-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <div className="absolute inset-0 bg-luxury-grid opacity-15" />

                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <div className="kicker w-fit">Service</div>

                        <h1 className="mt-6 text-4xl md:text-6xl h-title text-luxury-silver">
                            {svc.title}
                        </h1>

                        {svc.intro ? <p className="mt-4 p-lead">{svc.intro}</p> : null}

                        <div className="mt-7 flex flex-col sm:flex-row gap-2">
                            <Link href="/services" className="btn btn-outline w-full sm:w-auto justify-center">
                                ← Back to services
                            </Link>
                            <Link href="/booking" className="btn btn-primary w-full sm:w-auto justify-center">
                                Book walkthrough →
                            </Link>
                        </div>

                        {(svc.industries?.length ?? 0) > 0 ? (
                            <div className="mt-8 flex flex-wrap gap-2">
                                {svc.industries!.map((x) => (
                                    <Link key={x} href="/industries" className="badge">
                                        {x}
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="mt-8 flex flex-wrap gap-2">
                                <span className="badge">Custom scope</span>
                                <span className="badge">Inspection-ready</span>
                                <span className="badge">Washington coverage</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Client-enhanced detail (motion + premium layout) */}
            <ServiceDetailClient svc={svc} related={related} />
        </div>
    );
}
