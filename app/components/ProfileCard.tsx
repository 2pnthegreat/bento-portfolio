import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { RiMailLine } from 'react-icons/ri';
import { site } from '@/data/site';
import { profile } from '@/data/profile';
import ScrambleText from './ScrambleText';
import RotatingText from './RotatingText';

const socialLinks = [
    { label: 'GitHub', href: site.socials.github, icon: FaGithub, external: true },
    { label: 'LinkedIn', href: site.socials.linkedin, icon: FaLinkedinIn, external: true },
    { label: 'Email', href: `mailto:${site.email}`, icon: RiMailLine, external: false },
];

export default function ProfileCard() {
    return (
        <div className="bento-card bg-card-bg p-6 md:p-7 flex flex-col justify-center items-start col-span-1 md:col-span-2 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-5">
                {/* Orange backdrop behind the portrait, after the Figma hero */}
                <div className="relative w-[72px] h-[72px] flex-shrink-0">
                    <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-full bg-accent" />
                    <div className="relative w-full h-full rounded-full bg-accent-soft bg-cover bg-center border-2 border-card-bg" style={{ backgroundImage: "url('/portrait.png')" }}></div>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-text-main leading-tight">
                        <ScrambleText text={site.name.th} />
                    </h1>
                    <p className="text-sm font-semibold text-accent-ink">
                        <RotatingText items={site.roles} />
                    </p>
                    <p className="text-xs text-text-sub">{site.currentPosition}</p>
                </div>
            </div>
            <div className="text-text-sub text-sm leading-relaxed mb-5 space-y-1">
                {profile.summary.map((line) => (
                    <p key={line}>{line}</p>
                ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-3">
                <Link href="/about" className="inline-block bg-accent text-on-accent px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-95 transition-all active:scale-95">
                    ดูข้อมูลเพิ่มเติม
                </Link>
                <div className="flex gap-2">
                    {socialLinks.map(({ label, href, icon: Icon, external }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noopener noreferrer' : undefined}
                            className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center text-text-sub hover:text-accent-ink hover:border-accent transition-colors"
                        >
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
