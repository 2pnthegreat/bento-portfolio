'use client';

import React, { useEffect } from 'react';
import { stagger, useAnimate, useReducedMotion } from 'motion/react';

interface BentoGridProps {
    children: React.ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
    const [scope, animate] = useAnimate<HTMLDivElement>();
    const reduceMotion = useReducedMotion();

    // Cards start hidden via the .bento-reveal CSS rule, then fade/rise in one after another.
    // The rise uses the CSS `translate` property, not `transform`, so it never fights with a
    // card's own transform (e.g. ProjectCard's mouse tilt). Reduced motion: fade only.
    useEffect(() => {
        const controls = animate(
            Array.from(scope.current.children),
            reduceMotion
                ? { opacity: [0, 1] }
                : {
                      opacity: [0, 1],
                      translate: ['0px 24px', '0px 0px'],
                      filter: ['blur(6px)', 'blur(0px)'],
                  },
            { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: stagger(0.06) }
        );
        return () => controls.complete();
    }, [animate, scope, reduceMotion]);

    return (
        <div
            ref={scope}
            className="bento-reveal max-w-[1000px] w-full mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 md:gap-[var(--gap)] p-2 md:p-5"
        >
            {children}
        </div>
    );
}
