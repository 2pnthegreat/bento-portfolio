'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useSpring } from 'motion/react';

interface MagneticProps {
    children: React.ReactNode;
    /** How far the child follows the pointer, as a fraction of the pointer's offset from its centre */
    strength?: number;
    /** Extra distance (px) around the element where the pull already starts */
    range?: number;
    className?: string;
}

const spring = { stiffness: 260, damping: 18, mass: 0.4 };

/**
 * Pulls its child toward the mouse when the pointer comes near, and springs back when it leaves.
 * Mouse only; does nothing for touch or reduced-motion users.
 */
export default function Magnetic({ children, strength = 0.35, range = 32, className = '' }: MagneticProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const reduceMotion = useReducedMotion();
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);

    useEffect(() => {
        if (reduceMotion) return;
        const handleMove = (e: PointerEvent) => {
            const el = ref.current;
            if (!el || e.pointerType !== 'mouse') return;
            const rect = el.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            const near = Math.abs(dx) < rect.width / 2 + range && Math.abs(dy) < rect.height / 2 + range;
            x.set(near ? dx * strength : 0);
            y.set(near ? dy * strength : 0);
        };
        const handleLeaveWindow = () => {
            x.set(0);
            y.set(0);
        };
        window.addEventListener('pointermove', handleMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', handleLeaveWindow);
        return () => {
            window.removeEventListener('pointermove', handleMove);
            document.documentElement.removeEventListener('pointerleave', handleLeaveWindow);
        };
    }, [reduceMotion, strength, range, x, y]);

    return (
        <motion.span ref={ref} style={{ x, y }} className={`inline-block ${className}`}>
            {children}
        </motion.span>
    );
}
