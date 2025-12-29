import React from 'react';

interface BentoGridProps {
    children: React.ReactNode;
}

export default function BentoGrid({ children }: BentoGridProps) {
    return (
        <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-[var(--gap)] p-5">
            {children}
        </div>
    );
}
