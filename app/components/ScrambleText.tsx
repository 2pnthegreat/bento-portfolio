'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'motion/react';

const THAI_GLYPHS = 'กขคฆงจฉชซญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ';
const LATIN_GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const FRAME_MS = 45;

const randomGlyph = (grapheme: string) => {
    const pool = /[฀-๿]/.test(grapheme) ? THAI_GLYPHS : LATIN_GLYPHS;
    return pool[Math.floor(Math.random() * pool.length)];
};

// Split by grapheme so Thai vowels/tone marks stay attached to their consonant
const toGraphemes = (word: string) =>
    Array.from(new Intl.Segmenter('th', { granularity: 'grapheme' }).segment(word), (s) => s.segment);

interface ScrambleTextProps {
    text: string;
    /** Time to reveal every character, in ms */
    duration?: number;
}

/**
 * Text that "decodes" from random glyphs into the real text, left to right.
 * The real text always occupies the layout (and the accessibility tree); the
 * scrambled copy is overlaid on top, so nothing reflows while it runs.
 */
export default function ScrambleText({ text, duration = 900 }: ScrambleTextProps) {
    const reduceMotion = useReducedMotion();
    const words = useMemo(() => text.split(' ').map(toGraphemes), [text]);
    // null = show the real text
    const [scrambled, setScrambled] = useState<string[] | null>(null);

    useEffect(() => {
        if (reduceMotion) return;

        const total = words.reduce((sum, w) => sum + w.length, 0);
        const start = performance.now();
        let lastFrame = 0;
        let frame = requestAnimationFrame(function tick(now) {
            if (now - lastFrame >= FRAME_MS) {
                lastFrame = now;
                const revealed = Math.floor(((now - start) / duration) * total);
                if (revealed >= total) {
                    setScrambled(null);
                    return;
                }
                let i = 0;
                setScrambled(words.map((w) => w.map((g) => (i++ < revealed ? g : randomGlyph(g))).join('')));
            }
            frame = requestAnimationFrame(tick);
        });

        return () => cancelAnimationFrame(frame);
    }, [words, duration, reduceMotion]);

    return (
        <>
            {words.map((word, wi) => (
                <React.Fragment key={wi}>
                    {wi > 0 && ' '}
                    <span className="relative inline-block whitespace-nowrap">
                        <span className={scrambled ? 'opacity-0' : undefined}>{word.join('')}</span>
                        {scrambled && (
                            <span aria-hidden="true" className="absolute left-0 top-0">
                                {scrambled[wi]}
                            </span>
                        )}
                    </span>
                </React.Fragment>
            ))}
        </>
    );
}
