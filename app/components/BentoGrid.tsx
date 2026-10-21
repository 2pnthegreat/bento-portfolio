'use client';

import React, { useEffect } from 'react';
import { stagger, useAnimate } from 'motion/react';

interface BentoGridProps {
    children: React.ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
    const [scope, animate] = useAnimate<HTMLDivElement>();

    // Cards start hidden via the .bento-reveal CSS rule, then fade/rise in one after another.
    // Reduced-motion users get the fade without the movement (handled by MotionConfig).
    useEffect(() => {
        animate(
            Array.from(scope.current.children),
            {
                opacity: [0, 1],
                transform: ['translateY(24px)', 'translateY(0px)'],
                filter: ['blur(6px)', 'blur(0px)'],
            },
            { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: stagger(0.06) }
        );
    }, [animate, scope]);

    return (
        <div
            ref={scope}
            className="bento-reveal max-w-[1000px] w-full mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 md:gap-[var(--gap)] p-2 md:p-5"
        >
            {children}
        </div>
    );
}
