'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll } from 'motion/react';
import type { Experience } from '@/data/profile';
import ScrollReveal from './ScrollReveal';

/**
 * Vertical work timeline. The orange line fills in as you scroll through it,
 * each dot pops in when its entry comes into view, and entries fade up.
 */
export default function ExperienceTimeline({ items }: { items: Experience[] }) {
    const ref = useRef<HTMLOListElement>(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });

    return (
        <ol ref={ref} className="relative ml-1.5 space-y-10">
            {/* Track + progress fill */}
            <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-px bg-border-color" />
            <motion.span
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-px bg-accent origin-top"
                style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
            />

            {items.map((job) => (
                <li key={`${job.company}-${job.period}`} className="pl-6 relative">
                    <motion.span
                        aria-hidden="true"
                        className="absolute -left-[5.5px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-card-bg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    />
                    <ScrollReveal>
                        <p className="text-xs font-medium uppercase tracking-wider text-text-sub mb-1">{job.period}</p>
                        <h3 className="text-lg font-semibold text-text-main leading-snug">{job.title}</h3>
                        <p className="text-sm text-text-sub mb-3">{job.company}</p>
                        <ul className="list-disc list-outside ml-4 text-text-sub space-y-1.5 leading-relaxed">
                            {job.highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </li>
            ))}
        </ol>
    );
}
