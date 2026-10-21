'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { animate, useReducedMotion } from 'motion/react';
import { VIEW_TRANSITION_NAV_ATTR } from '@/lib/view-transition';

// Path the template last mounted on; lets us tell a client-side navigation apart
// from the first page load (and from React StrictMode's double effect run in dev)
let lastPath: string | null = null;

/**
 * Re-mounts on every route change: fades the new page in.
 * Skipped on the first load (nothing to transition from) and when a view
 * transition is already animating the change.
 */
export default function Template({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();

    useLayoutEffect(() => {
        const path = location.pathname;
        const isNavigation = lastPath !== null && lastPath !== path;
        lastPath = path;

        const el = ref.current;
        if (!isNavigation || !el || document.documentElement.hasAttribute(VIEW_TRANSITION_NAV_ATTR)) return;

        // No cleanup on purpose: StrictMode's dev re-run must not cut the fade short,
        // and the animation only touches this element, so it's harmless if it unmounts
        animate(
            el,
            reduceMotion ? { opacity: [0, 1] } : { opacity: [0, 1], translate: ['0px 12px', '0px 0px'] },
            { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
        );
    }, [reduceMotion]);

    return <div ref={ref}>{children}</div>;
}
