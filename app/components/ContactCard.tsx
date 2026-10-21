import React from 'react';
import { RiMailLine } from 'react-icons/ri';
import { site } from '@/data/site';

interface ContactCardProps {
    className?: string;
    htmlId?: string;
}

export default function ContactCard({ className = "", htmlId }: ContactCardProps) {
    return (
        <a
            href={`mailto:${site.email}`}
            id={htmlId}
            className={`bg-accent text-white rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md h-full min-h-[180px] ${className}`}
        >
            <RiMailLine className="text-4xl mb-3" />
            <div className="text-center">
                <h2 className="text-lg font-semibold mb-1">ติดต่อร่วมงาน</h2>
                <p className="text-sm opacity-80 font-medium tracking-wide">{site.email}</p>
            </div>
        </a>
    );
}
