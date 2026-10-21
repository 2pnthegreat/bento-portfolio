import Link from 'next/link';
import React from 'react';
import { site } from '@/data/site';
import { profile } from '@/data/profile';

export default function ProfileCard() {
    return (
        <div className="bg-card-bg rounded-[var(--radius-card)] p-6 flex flex-col justify-center items-start shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 md:col-span-2 relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-[60px] h-[60px] rounded-full bg-gray-200 bg-cover bg-center border-2 border-border-color flex-shrink-0" style={{ backgroundImage: "url('/portrait.png')" }}></div>
                <div>
                    <h1 className="text-2xl font-semibold text-text-main leading-tight">{site.name.th}</h1>
                    <p className="text-sm font-medium text-accent">{site.currentPosition}</p>
                </div>
            </div>
            <div className="text-text-sub text-sm leading-relaxed mb-4 space-y-1">
                {profile.summary.map((line) => (
                    <p key={line}>{line}</p>
                ))}
            </div>
            <div className="mt-auto flex gap-3">
                <Link href="/about" className="inline-block bg-text-main text-bg-color px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all active:scale-95 shadow-sm">
                    ดูข้อมูลเพิ่มเติม
                </Link>
            </div>
        </div>
    );
}
