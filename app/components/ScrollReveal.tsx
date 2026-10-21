'use client';

import React, { useEffect } from 'react';
import { stagger, useAnimate, useInView, useReducedMotion } from 'motion/react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    /** Reveal descendants marked `data-reveal-item` one after another instead of the whole block */
    sequence?: boolean;
}

/**
 * Fades/rises content in the first time it scrolls into view.
 * Starts hidden via CSS (.reveal-block / .reveal-sequence in globals.css) so there's no flash;
 * the CSS keeps it visible when scripting is off. Reduced motion: fade only.
 */
export default function ScrollReveal({ children, className = '', sequence = false }: ScrollRevealProps) {
    const [scope, animate] = useAnimate<HTMLDivElement>();
    const inView = useInView(scope, { once: true, amount: sequence ? 0.5 : 0.15 });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (!inView) return;
        const targets = sequence
            ? Array.from(scope.current.querySelectorAll<HTMLElement>('[data-reveal-item]'))
            : scope.current;
        const controls = animate(
            targets,
            reduceMotion ? { opacity: [0, 1] } : { opacity: [0, 1], translate: ['0px 20px', '0px 0px'] },
            { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: sequence ? stagger(0.1) : 0 }
        );
        return () => controls.complete();
    }, [inView, sequence, reduceMotion, animate, scope]);

    return (
        <div ref={scope} className={`${sequence ? 'reveal-sequence' : 'reveal-block'} ${className}`}>
            {children}
        </div>
    );
}
