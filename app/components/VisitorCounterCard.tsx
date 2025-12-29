import React from 'react';
import { FaEye } from 'react-icons/fa';
import { prisma } from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';

export default async function VisitorCounterCard() {
    noStore();

    let views = 0;

    try {

        const record = await prisma.analytics.upsert({


            where: { name: 'portfolio_visits' },


            update: { count: { increment: 1 } },


            create: { name: 'portfolio_visits', count: 1 },
        });


        views = record.count;

    } catch (error) {
        console.error("Database Error:", error);

        views = 0;
    }


    return (
        <div className="bg-gray-900 text-white rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 h-full min-h-[180px]">
            <div className="text-3xl mb-2 text-emerald-400">
                <FaEye />
            </div>


            <span className="text-2xl font-bold mb-1">
                {views > 0 ? views.toLocaleString() : "0"}
            </span>

            <span className="text-xs text-gray-400 text-center">จำนวนยอดเข้าชมเว็บไซต์</span>
        </div>
    );
}