
'use client';

import React, { useState, useEffect } from 'react';

export default function LocationCard() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('th-TH', {
                timeZone: 'Asia/Bangkok',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            setTime(`${timeString} น.`);
        };

        updateTime();

        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <a
            href="https://www.google.com/maps/place/Thailand"
            target="_blank"
            rel="noopener noreferrer"
            className="
                bg-[#0b132b]
                rounded-[var(--radius-card)]
                flex flex-col justify-between
                shadow-sm
                transition-all
                duration-300
                hover:scale-[var(--hover-scale)]
                hover:shadow-md
                col-span-1
                relative
                overflow-hidden
                group
                h-full
                min-h-[180px]
            "
        >
            {/* subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                </div>

                <h2 className="text-white font-semibold text-sm mb-1">
                    กรุงเทพฯ, ไทย
                </h2>

                {/* 3. แสดงค่าเวลาจาก State */}
                <p className="text-white/60 text-xs font-variant-numeric tabular-nums">
                    {/* ใช้ tabular-nums เพื่อกันตัวเลขขยับไปมาเวลานาทีเปลี่ยน */}
                    {time || '...'}
                </p>
            </div>
        </a>
    );
}