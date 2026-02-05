// app/services/[slug]/page.tsx
import data from '@/content/services.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ServiceItem = {
    slug: string;
    title: string;
    intro?: string;
    inclusions?: string[];
    addons?: string[];
};

export function generateStaticParams() {
    const services = Object.values(data as unknown as Record<string, ServiceItem>);
    return services
        .filter((s) => s?.slug)
        .map((s) => ({ slug: s.slug }));
}

// ✅ Next 15 typedRoutes may pass params as a Promise
export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const services = Object.values(data as unknown as Record<string, ServiceItem>);
    const svc = services.find((s) => s.slug === slug);

    if (!svc) return notFound();

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-semibold">{svc.title}</h1>

            {svc.intro ? <p className="opacity-80 mt-2">{svc.intro}</p> : null}

            <div className="grid gap-4 md:grid-cols-3 mt-6">
                <div className="card md:col-span-2">
                    <h2 className="text-xl font-semibold mb-2">Inclusions</h2>

                    <ul className="list-disc ml-6 space-y-1">
                        {(svc.inclusions ?? []).map((x, i) => (
                            <li key={i}>{x}</li>
                        ))}
                    </ul>

                    {(svc.addons ?? []).length > 0 ? (
                        <>
                            <h2 className="text-xl font-semibold mt-6 mb-2">Add-ons</h2>
                            <ul className="list-disc ml-6 space-y-1">
                                {(svc.addons ?? []).map((x, i) => (
                                    <li key={i}>{x}</li>
                                ))}
                            </ul>
                        </>
                    ) : null}
                </div>

                <aside className="card">
                    <h3 className="text-lg font-semibold">Start here</h3>
                    <p className="opacity-80 mt-2">
                        Submit details for a custom quote. No public pricing.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <Link href="/booking" className="btn btn-primary">
                            Request Time
                        </Link>
                        <Link href="/contact" className="btn btn-outline">
                            Get Quote
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}
