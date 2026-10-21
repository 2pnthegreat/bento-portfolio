import React from 'react';
import { RiFileTextLine, RiDownload2Line } from 'react-icons/ri';

interface DocumentCardProps {
    title: string;
    description?: string;
    href: string;
    className?: string;
}

export default function DocumentCard({ title, description, href, className = "" }: DocumentCardProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`bento-card bg-card-bg p-6 flex flex-col justify-between h-full min-h-[180px] group ${className}`}
        >
            <div className="w-12 h-12 rounded-full bg-accent-soft text-accent-ink flex items-center justify-center text-2xl">
                <RiFileTextLine />
            </div>
            <div className="flex items-end justify-between gap-3 mt-4">
                <div>
                    <span className="block font-semibold text-lg text-text-main">{title}</span>
                    {description && <span className="block text-xs text-text-sub">{description}</span>}
                </div>
                <RiDownload2Line className="text-xl text-text-sub group-hover:text-accent-ink group-hover:translate-y-0.5 transition-all flex-shrink-0" />
            </div>
        </a>
    );
}
