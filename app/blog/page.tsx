'use client';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: "The Future of Commercial Cleaning: 2024 Trends",
        excerpt: "Discover how technology and sustainability are transforming enterprise cleaning.",
        date: "2024-01-15",
        readTime: "5 min read",
        category: "Industry Insights"
    },
    {
        title: "Green Cleaning: Beyond the Basics",
        excerpt: "Advanced eco-friendly practices for corporate sustainability goals.",
        date: "2024-01-10",
        readTime: "4 min read",
        category: "Sustainability"
    },
    {
        title: "Healthcare Facility Cleaning Protocols",
        excerpt: "Best practices for medical environment sanitization and infection control.",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Healthcare"
    }
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-luxury-dark pt-24">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-dark via-luxury-card to-luxury-darker" />
                <div className="container relative z-10 text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold luxury-heading mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        PureSpace <span className="gradient-text">Blog</span>
                    </motion.h1>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.title}
                                className="card preserve-3d cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, rotateY: 10 }}
                            >
                                <div className="text-luxury-accent text-sm font-semibold mb-2">{post.category}</div>
                                <h3 className="text-xl font-bold text-luxury-silver mb-3">{post.title}</h3>
                                <p className="text-luxury-silver/70 mb-4">{post.excerpt}</p>
                                <div className="flex justify-between items-center text-sm text-luxury-silver/50">
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}