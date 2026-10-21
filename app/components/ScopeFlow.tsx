import React from 'react';
import type { IconType } from 'react-icons';
import { RiArrowRightLine } from 'react-icons/ri';

export interface ScopeStep {
    icon: IconType;
    label: string;
}

interface ScopeFlowProps {
    steps: ScopeStep[];
    /** Tailwind text color class for the step icons */
    accentClass?: string;
}

// Horizontal process diagram on desktop, vertical on mobile
export default function ScopeFlow({ steps, accentClass = "text-accent" }: ScopeFlowProps) {
    return (
        <div className="bg-bg-color p-8 rounded-2xl overflow-x-auto">
            <ol className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:min-w-[600px]">
                {steps.map((step, i) => (
                    <React.Fragment key={step.label}>
                        {i > 0 && (
                            <li aria-hidden="true" className="text-text-sub/50 rotate-90 md:rotate-0 text-2xl">
                                <RiArrowRightLine />
                            </li>
                        )}
                        <li className="flex flex-col items-center gap-3">
                            <span className={`w-16 h-16 bg-card-bg shadow-sm rounded-full flex items-center justify-center text-2xl ${accentClass}`}>
                                <step.icon />
                            </span>
                            <span className="font-medium text-text-main">{step.label}</span>
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </div>
    );
}
