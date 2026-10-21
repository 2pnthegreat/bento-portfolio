import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';
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
            className={`bento-card bg-accent text-on-accent p-6 md:p-8 flex flex-col justify-between h-full min-h-[180px] group ${className}`}
        >
            <div className="flex items-start justify-between">
                <p className="text-sm font-semibold uppercase tracking-widest opacity-70">Contact</p>
                <span className="w-10 h-10 rounded-full bg-on-accent text-accent flex items-center justify-center text-xl group-hover:rotate-45 transition-transform duration-300">
                    <RiArrowRightUpLine />
                </span>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-1">ติดต่อร่วมงาน</h2>
                <p className="text-sm font-medium opacity-80 break-all">{site.email}</p>
            </div>
        </a>
    );
}
