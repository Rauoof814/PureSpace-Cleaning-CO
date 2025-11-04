import './globals.css';
import type { Metadata } from 'next';
import { SITE } from '@/lib/config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: `${SITE.name} | Premium Commercial Cleaning Solutions`,
    description: 'Enterprise-grade cleaning services for Fortune 500 companies, healthcare facilities, and luxury commercial spaces. 24/7 professional janitorial services.',
    openGraph: {
        title: 'PureSpace | Luxury Commercial Cleaning',
        description: 'Premium cleaning solutions for corporate offices, healthcare, and commercial facilities',
        images: ['/og.jpg'],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PureSpace Commercial Solutions',
        description: 'Enterprise-grade cleaning services'
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="relative">
                <Header />
                <main className="relative">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}