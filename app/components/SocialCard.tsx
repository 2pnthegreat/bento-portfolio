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
            className={`rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 h-full min-h-[180px] ${isLinkedin ? 'bg-[#0077b5] text-white' : 'bg-[#24292e] text-white'
                }`}
        >
            <div className="text-5xl mb-2">
                {isLinkedin ? <FaLinkedin /> : <FaGithub />}
            </div>
            <span className="font-medium text-sm opacity-90 capitalize">{platform}</span>
        </a>
    );
}
