import React from 'react';

interface QuoteCardProps {
    className?: string;
}

export default function QuoteCard({ className = "" }: QuoteCardProps) {
    return (
        <div className={`bg-[#1db954] text-white rounded-[var(--radius-card)] p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 h-full min-h-[180px] ${className}`}>
            <h2 className="text-lg font-semibold mb-2">Motto</h2>
            <p className="text-[#e5ffe5] text-lg font-medium italic">
                "If it works, don't touch it."
            </p>
            <div className="mt-auto text-2xl self-end">💡</div>
        </div>
    );
}
