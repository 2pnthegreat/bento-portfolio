import React from 'react';
import { FaEye } from 'react-icons/fa';

export default function VisitorCounterCard() {
    return (
        <div className="bg-gray-900 text-white rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 h-full min-h-[180px]">
            <div className="text-3xl mb-2">
                <FaEye />
            </div>
            <span className="text-2xl font-bold mb-1">1,234</span>
            <span className="text-xs text-gray-400 text-center">จำนวนยอดเข้าชมเว็บไซต์</span>
        </div>
    );
}
