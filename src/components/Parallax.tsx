'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export function Parallax({ children, speed = 1 }: { children: React.ReactNode; speed?: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
    const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100 * speed]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]), springConfig);
    const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.1]), springConfig);

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                opacity,
                scale,
                background: 'linear-gradient(180deg, var(--navy-dark) 0%, var(--navy-medium) 50%, var(--navy-light) 100%)'
            }}
            className="relative overflow-hidden"
        >
            {children}
        </motion.div>
    );
}