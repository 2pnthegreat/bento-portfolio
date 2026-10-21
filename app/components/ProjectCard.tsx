'use client';

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, useSpring } from "motion/react";
import { RiArrowRightUpLine } from "react-icons/ri";
import type { Project } from "@/data/projects";
import { PROJECT_COVER_TRANSITION_NAME, VIEW_TRANSITION_NAV_ATTR } from "@/lib/view-transition";

const MotionLink = motion.create(Link);

/** Max tilt in degrees at the card's edge */
const MAX_TILT = 6;
const tiltSpring = { stiffness: 220, damping: 22, mass: 0.6 };
/** Give up waiting for the project page after this long so the screen never stays frozen */
const MAX_TRANSITION_WAIT_MS = 2000;

/** Resolves once the project page's hero is in the DOM (or after the time limit) */
const waitForProjectHero = (href: string) =>
    new Promise<void>((resolve) => {
        const start = performance.now();
        const check = () => {
            const ready = location.pathname === href && document.querySelector("[data-project-hero]");
            if (ready || performance.now() - start > MAX_TRANSITION_WAIT_MS) resolve();
            else setTimeout(check, 16);
        };
        check();
    });

interface ProjectCardProps {
    project: Project;
    className?: string;
    htmlId?: string;
}

export default function ProjectCard({
    project,
    className = "",
    htmlId,
}: ProjectCardProps) {
    const { title, category, cover, href, external } = project;
    const router = useRouter();
    const reduceMotion = useReducedMotion();
    const rotateX = useSpring(0, tiltSpring);
    const rotateY = useSpring(0, tiltSpring);

    // Mouse only: touch scrolling shouldn't tilt cards
    const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
        if (reduceMotion || e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(x * MAX_TILT * 2);
        rotateX.set(-y * MAX_TILT * 2);
    };

    const resetTilt = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    // Internal case studies: morph this card's cover into the project page hero.
    // Falls back to a normal Link navigation when the browser lacks view transitions.
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const plainClick = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
        if (external || reduceMotion || !plainClick || !document.startViewTransition) return;

        e.preventDefault();
        const coverEl = e.currentTarget.querySelector<HTMLElement>("[data-card-cover]");
        const root = document.documentElement;
        resetTilt();
        if (coverEl) coverEl.style.viewTransitionName = PROJECT_COVER_TRANSITION_NAME;
        root.setAttribute(VIEW_TRANSITION_NAV_ATTR, "");

        const transition = document.startViewTransition(() => {
            router.push(href);
            return waitForProjectHero(href);
        });
        transition.finished.finally(() => {
            root.removeAttribute(VIEW_TRANSITION_NAV_ATTR);
            if (coverEl) coverEl.style.viewTransitionName = "";
        });
    };

    return (
        <MotionLink
            href={href}
            id={htmlId}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            onClick={handleClick}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className={`bento-card bg-card-bg overflow-hidden relative group min-h-[220px] ${className}`}
        >
            <div data-card-cover className="absolute inset-0 rounded-[var(--radius)] overflow-hidden">
                <Image
                    src={cover}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 p-6 text-white w-full flex items-end justify-between gap-4">
                <div>
                    <span className="inline-block bg-accent text-on-accent text-xs font-semibold px-3 py-1 rounded-full mb-2">{category}</span>
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <span className="w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    <RiArrowRightUpLine />
                </span>
            </div>
        </MotionLink>
    );
}
