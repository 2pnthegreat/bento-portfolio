import React from 'react';
import { stats } from '@/data/profile';

interface StatsCardProps {
    className?: string;
}

export default function StatsCard({ className = "" }: StatsCardProps) {
    return (
        <div className={`bg-card-bg rounded-[var(--radius-card)] p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md h-full min-h-[180px] ${className}`}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-text-sub mb-4">At a glance</h2>
            <dl className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-1">
                        <dt className="text-xs text-text-sub leading-snug">{stat.label}</dt>
                        <dd className="text-3xl md:text-4xl font-semibold text-text-main tabular-nums">
                            {stat.value}{stat.suffix}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
