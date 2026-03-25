import React from 'react';

interface ContactCardProps {
    className?: string;
    htmlId?: string;
}

export default function ContactCard({ className = "", htmlId }: ContactCardProps) {
    return (
        <a
            href="mailto:soccer_rsm@hotmail.com"
            id={htmlId}
            className={`bg-accent text-white rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md h-full min-h-[180px] ${className}`}
        >
            <div className="text-4xl mb-3">✉️</div>
            <div className="text-center">
                <h2 className="text-lg font-semibold mb-1">ติดต่อร่วมงาน</h2>
                <p className="text-xs opacity-80 font-medium tracking-wide">Get in touch</p>
            </div>
        </a>
    );
}
