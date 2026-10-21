'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { site } from '@/data/site';

// "KP" monogram drawn as strokes: K stem, K arms, P stem, P bowl
const MARK_PATHS = ['M5 4v16', 'M14 4 6.5 12 14 20', 'M17 20V4', 'M17 4h2a4 4 0 0 1 0 8h-2'];

interface LogoProps {
    /** Draw the monogram stroke by stroke on mount (used once, in the navbar) */
    animated?: boolean;
}

export default function Logo({ animated = false }: LogoProps) {
    const reduceMotion = useReducedMotion();
    const draw = animated && !reduceMotion;

    return (
        <span className="inline-flex items-center gap-2">
            <svg
                viewBox="0 0 26 24"
                className="h-6 w-auto text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                {MARK_PATHS.map((d, i) => (
                    <motion.path
                        key={d}
                        d={d}
                        initial={draw ? { pathLength: 0, opacity: 0 } : false}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                            pathLength: { duration: 0.6, delay: 0.2 + i * 0.18, ease: [0.65, 0, 0.35, 1] },
                            opacity: { duration: 0.01, delay: 0.2 + i * 0.18 },
                        }}
                    />
                ))}
            </svg>
            <span>
                {site.name.en.split(' ')[0]}
                <span className="text-accent">.</span>
            </span>
        </span>
    );
}
