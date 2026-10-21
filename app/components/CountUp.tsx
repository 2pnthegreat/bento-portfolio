'use client';

import React, { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

interface CountUpProps {
    value: number;
    /** Seconds */
    duration?: number;
    /** Seconds to wait after scrolling into view (lets the card fade in first) */
    delay?: number;
}

/**
 * Counts from 0 to `value` the first time it scrolls into view.
 * Server HTML and reduced-motion users get the final number.
 */
export default function CountUp({ value, duration = 1.4, delay = 0.35 }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    // Start as soon as it's on screen so a visible "0" never sits there waiting
    const inView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();

    // Reset to 0 before the card becomes visible so the number doesn't jump down later
    useEffect(() => {
        if (!reduceMotion && ref.current) ref.current.textContent = '0';
    }, [reduceMotion]);

    useEffect(() => {
        const el = ref.current;
        if (!inView || reduceMotion || !el) return;
        const controls = animate(0, value, {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => {
                el.textContent = Math.round(v).toLocaleString();
            },
        });
        return () => controls.stop();
    }, [inView, reduceMotion, value, duration, delay]);

    return <span ref={ref}>{value.toLocaleString()}</span>;
}
