import React from 'react';

interface QuoteCardProps {
    className?: string;
}

export default function QuoteCard({ className = "" }: QuoteCardProps) {
    return (
        <div className={`bg-[#059669] text-white rounded-[var(--radius-card)] p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md h-full min-h-[180px] ${className}`}>
            <h2 className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Motto</h2>
            <p className="text-xl font-medium italic leading-relaxed">
                "If it works, don't touch it."
            </p>
            <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-medium opacity-60 italic">Always keep it simple.</span>
                <div className="text-2xl">💡</div>
            </div>
        </div>
    );
}
