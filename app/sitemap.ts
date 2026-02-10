// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://purespacec.space'; // change to your real domain when ready
    const now = new Date();

    const routes = [
        '/',
        '/services',
        '/industries',
        '/company',
        '/case-studies',
        '/contact',
        '/privacy-policy',
        '/terms-of-service',
    ];

    return routes.map((path) => ({
        url: `${base}${path}`,
        lastModified: now,
    }));
}
