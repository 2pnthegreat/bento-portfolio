import React from 'react';
import Image from 'next/image';
import { toolGroups } from '@/data/tools';

interface ToolsCardProps {
    className?: string;
}

export default function ToolsCard({ className = "" }: ToolsCardProps) {
    return (
        <div className={`bento-card bg-card-bg p-6 md:p-7 flex flex-col h-full min-h-[180px] ${className}`}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-text-sub mb-5">
                Tech <span className="text-accent-ink">stack</span>
            </h2>

            <dl className="space-y-3">
                {toolGroups.map((group) => (
                    <div key={group.label} className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <dt className="w-20 flex-shrink-0 text-xs font-medium text-text-sub">{group.label}</dt>
                        <dd className="flex flex-wrap gap-2">
                            {group.tools.map(({ name, icon: Icon }) => (
                                <span
                                    key={name}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-border-color bg-bg-color px-3 py-1 text-xs font-medium text-text-main"
                                >
                                    {typeof Icon === 'string' ? (
                                        <Image src={Icon} alt="" width={14} height={14} className="grayscale" />
                                    ) : (
                                        <Icon className="text-sm text-text-sub" aria-hidden="true" />
                                    )}
                                    {name}
                                </span>
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
