import React from 'react';
import { Metadata } from 'next';
import { site } from '@/data/site';
import { profile, education, experience } from '@/data/profile';

export const metadata: Metadata = {
    title: "About",
    description: "Background, education and work experience of Kampanart Poonpanao, full-stack developer.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center py-10 px-5">
            <div className="max-w-[800px] w-full bg-card-bg rounded-[var(--radius-card)] p-8 shadow-sm">

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-32 h-32 rounded-full bg-gray-200 bg-cover bg-center flex-shrink-0" style={{ backgroundImage: "url('/about.jpg')" }}></div>

                    <div className="w-full">
                        <h1 className="text-3xl font-bold mb-1">About Me</h1>
                        <p className="text-accent font-medium mb-6">{site.name.th} · {site.role}</p>
                        {profile.about.map((paragraph) => (
                            <p key={paragraph} className="text-text-sub leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}

                        <h2 className="text-xl font-semibold mt-10 mb-6">Experience</h2>
                        <ol className="relative border-l border-border-color ml-1.5 space-y-10">
                            {experience.map((job) => (
                                <li key={`${job.company}-${job.period}`} className="pl-6 relative">
                                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-card-bg" />
                                    <p className="text-xs font-medium uppercase tracking-wider text-text-sub mb-1">{job.period}</p>
                                    <h3 className="text-lg font-semibold text-text-main leading-snug">{job.title}</h3>
                                    <p className="text-sm text-text-sub mb-3">{job.company}</p>
                                    <ul className="list-disc list-outside ml-4 text-text-sub space-y-1.5 leading-relaxed">
                                        {job.highlights.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>

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
