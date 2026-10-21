import React from 'react';
import { stats } from '@/data/profile';
import CountUp from './CountUp';

interface StatsCardProps {
    className?: string;
}

export default function StatsCard({ className = "" }: StatsCardProps) {
    return (
        <div className={`bento-card bg-card-bg p-6 md:p-8 flex flex-col justify-between h-full min-h-[180px] ${className}`}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-text-sub mb-4">
                At a <span className="text-accent-ink">glance</span>
            </h2>
            {/* Numbers top-aligned so a two-line label doesn't push its number up */}
            <dl className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse justify-end gap-1">
                        <dt className="text-xs text-text-sub leading-snug">{stat.label}</dt>
                        <dd className="text-3xl md:text-4xl font-semibold text-text-main tabular-nums">
                            <CountUp value={stat.value} /><span className="text-accent-ink">{stat.suffix}</span>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
