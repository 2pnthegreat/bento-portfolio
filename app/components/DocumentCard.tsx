import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

interface DocumentCardProps {
    title: string;
    href: string;
    color?: string;
}

export default function DocumentCard({ title, href, color = "bg-gray-800" }: DocumentCardProps) {
    return (
        <a
            href={href}
            // target="_blank"
            // rel="noopener noreferrer"
            className={`${color} text-white rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 h-full min-h-[180px]`}
        >
            <div className="text-4xl mb-3">
                <FaFileAlt />
            </div>
            <span className="font-medium text-lg capitalize">{title}</span>
        </a>
    );
}
