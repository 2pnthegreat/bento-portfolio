import React from 'react';
import { RiFileTextLine, RiDownload2Line } from 'react-icons/ri';

interface DocumentCardProps {
    title: string;
    description?: string;
    href: string;
    color?: string;
    className?: string;
}

export default function DocumentCard({ title, description, href, color = "bg-gray-800", className = "" }: DocumentCardProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} text-white rounded-[var(--radius-card)] p-6 md:px-8 flex items-center gap-5 shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md h-full min-h-[180px] group ${className}`}
        >
            <div className="text-4xl opacity-90">
                <RiFileTextLine />
            </div>
            <div className="flex-1">
                <span className="block font-semibold text-lg">{title}</span>
                {description && <span className="block text-sm opacity-70">{description}</span>}
            </div>
            <RiDownload2Line className="text-2xl opacity-60 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
        </a>
    );
}
