import Link from 'next/link';
import React from 'react';

export default function ProfileCard() {
    return (
        <div className="bg-card-bg rounded-[var(--radius-card)] p-6 flex flex-col justify-center items-start shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 md:col-span-2 relative overflow-hidden group">
            <div className="w-[60px] h-[60px] rounded-full bg-gray-200 mb-4 bg-cover bg-center" style={{ backgroundImage: "url('/portrait.png')" }}></div>
            <h1 className="text-2xl font-semibold mb-2">สวัสดีครับ, ผมชื่อ กัมปนาท พูนพะเนาว์ </h1>
            <p className="text-text-sub text-sm leading-relaxed mb-4">
                เคยพัฒนาระบบ e-Procurement และ Fixed Asset ให้หน่วยงานรัฐ (GISTDA)
                <br />
                สนใจสายงาน Low-code, Backend และ Fullstack พร้อมพื้นฐาน Web Development และ Database
            </p>
            <Link href="/about" className="mt-auto inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                ดูข้อมูลเพิ่มเติม
            </Link>
        </div>
    );
}
