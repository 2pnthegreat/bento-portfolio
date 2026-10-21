import React from 'react';
import { Metadata } from 'next';
import { site } from '@/data/site';
import { profile, education, experience } from '@/data/profile';
import ExperienceTimeline from '../components/ExperienceTimeline';

export const metadata: Metadata = {
    title: "About",
    description: "Background, education and work experience of Kampanart Poonpanao, full-stack developer.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center py-10 px-5">
            <div className="max-w-[800px] w-full bg-card-bg rounded-[var(--radius-card)] border border-border-color p-8">

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative w-32 h-32 flex-shrink-0">
                        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-accent" />
                        <div className="relative w-full h-full rounded-full bg-accent-soft bg-cover bg-center border-4 border-card-bg" style={{ backgroundImage: "url('/about.jpg')" }}></div>
                    </div>

                    <div className="w-full">
                        <h1 className="text-3xl font-bold mb-1">About <span className="text-accent-ink">Me</span></h1>
                        <p className="text-accent-ink font-medium mb-6">{site.name.th} · {site.role}</p>
                        {profile.about.map((paragraph) => (
                            <p key={paragraph} className="text-text-sub leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}

                        <h2 className="text-xl font-semibold mt-10 mb-6">Experience</h2>
                        <ExperienceTimeline items={experience} />

                        <h2 className="text-xl font-semibold mt-12 mb-4">Education</h2>
                        <div className="bg-bg-color rounded-2xl p-6">
                            <h3 className="font-semibold text-text-main">{education.university}</h3>
                            <p className="text-text-sub">{education.faculty}</p>
                            <p className="text-text-sub">{education.major}</p>
                            <div className="mt-4 pt-4 border-t border-border-color text-sm text-text-sub space-y-1">
                                <p>สถานะ: {education.status}</p>
                                <p>คาดว่าจะจบการศึกษา: {education.expectedGraduation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
