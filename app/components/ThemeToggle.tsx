'use client';

import React, { useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

type Theme = 'light' | 'dark';

// The inline script in layout.tsx sets data-theme before paint; this just mirrors it.
const subscribe = (onChange: () => void) => {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
};
const getTheme = (): Theme => (document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
const getServerTheme = (): Theme => 'light';

const applyTheme = (theme: Theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('theme', theme);
    } catch {}
};

export default function ThemeToggle() {
    const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

    const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        const next: Theme = theme === 'light' ? 'dark' : 'light';
        const root = document.documentElement;

        if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
            applyTheme(next);
            return;
        }

        // Grow the new theme as a circle from the button (keyboard clicks have no pointer position)
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX || rect.left + rect.width / 2;
        const y = e.clientY || rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

        root.classList.add('theme-transition');
        const transition = document.startViewTransition(() => {
            flushSync(() => applyTheme(next));
        });
        transition.ready.then(() => {
            root.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' }
            );
        });
        transition.finished.finally(() => root.classList.remove('theme-transition'));
    };

    return (
        <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-bg-color text-text-sub hover:text-text-main transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
        >
            {theme === 'light' ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
        </button>
    );
}
