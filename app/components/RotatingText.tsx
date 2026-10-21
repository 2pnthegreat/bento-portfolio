'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface RotatingTextProps {
    items: string[];
    /** Time each item stays on screen, in ms */
    interval?: number;
}

/**
 * Cycles through `items` once with a slide-up swap, then settles back on the
 * first item so the page doesn't keep moving indefinitely.
 * Reduced-motion users only see the first item.
 */
export default function RotatingText({ items, interval = 2200 }: RotatingTextProps) {
    const reduceMotion = useReducedMotion();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (reduceMotion || step >= items.length) return;
        const id = setTimeout(() => setStep((s) => s + 1), interval);
        return () => clearTimeout(id);
    }, [step, items.length, interval, reduceMotion]);

    const current = items[step % items.length];

    return (
        <span className="relative inline-flex overflow-hidden align-bottom">
            <span className="sr-only">{items.join(' / ')}</span>
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                    key={current}
                    aria-hidden="true"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block whitespace-nowrap"
                >
                    {current}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
