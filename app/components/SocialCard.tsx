import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface SocialCardProps {
    platform: 'linkedin' | 'github';
    href: string;
}

export default function SocialCard({ platform, href }: SocialCardProps) {
    const isLinkedin = platform === 'linkedin';

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md h-full min-h-[180px] border border-transparent hover:border-border-color ${isLinkedin ? 'bg-[#0077b5] text-white' : 'bg-[#24292e] dark:bg-[#1a1f24] text-white'
                }`}
        >
            <div className="text-5xl mb-3 drop-shadow-sm">
                {isLinkedin ? <FaLinkedin /> : <FaGithub />}
            </div>
            <span className="font-semibold text-xs uppercase tracking-widest opacity-80">{platform}</span>
        </a>
    );
}
