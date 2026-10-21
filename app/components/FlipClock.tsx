'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Bangkok',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
});

/** "HH:MM" in Bangkok time, or a placeholder before the first client render */
const useBangkokTime = () => {
    const [time, setTime] = useState('--:--');
    useEffect(() => {
        const update = () => setTime(formatter.format(new Date()));
        update();
        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, []);
    return time;
};

/** One character that flips over (top-to-bottom) whenever it changes */
function FlipChar({ char }: { char: string }) {
    return (
        <span className="relative inline-block w-[0.6em] h-[1.15em] overflow-hidden text-center">
            <AnimatePresence initial={false}>
                <motion.span
                    key={char}
                    className="absolute inset-0"
                    style={{ transformPerspective: 300, transformOrigin: '50% 50%' }}
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    {char}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

/** Bangkok clock whose digits flip as they change; the colon blinks once a second */
export default function FlipClock({ className = '' }: { className?: string }) {
    const time = useBangkokTime();
    const [hours, minutes] = time.split(':');

    return (
        <time className={`inline-flex tabular-nums ${className}`} aria-label={`${time} น.`}>
            {/* Centre-aligned: overflow-hidden digit boxes have their baseline at the bottom edge */}
            <span aria-hidden="true" className="inline-flex items-center">
                {[...hours].map((c, i) => <FlipChar key={`h${i}`} char={c} />)}
                <span className="motion-safe:animate-[colon-blink_1s_steps(1)_infinite] px-0.5 -translate-y-[0.06em]">:</span>
                {[...minutes].map((c, i) => <FlipChar key={`m${i}`} char={c} />)}
                <span className="ml-1 self-end mb-[0.2em] text-xs font-medium text-text-sub">น.</span>
            </span>
        </time>
    );
}
