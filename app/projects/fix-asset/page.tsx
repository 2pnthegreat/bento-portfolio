import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function FixAssetPage() {
    return (
        <main className="min-h-screen flex flex-col items-center py-10 px-5 bg-[#f0f2f5]">
            <div className="max-w-[1000px] w-full bg-white rounded-[var(--radius-card)] p-8 shadow-sm">
                <Link href="/" className="inline-block mb-6 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                    ← Back to Home
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Fixed Asset</h1>
                    <p className="text-xl text-emerald-600 font-medium">GISTDA – Fixed Asset Management</p>
                    <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                        ระบบจัดการทรัพย์สินถาวรบนแพลตฟอร์ม Joget สำหรับ GISTDA ครอบคลุมการลงทะเบียนครุภัณฑ์ ติดตามสถานะ โอนย้าย ตรวจนับประจำปี และตัดจำหน่ายในระบบเดียว
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Grid Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Role</h3>
                            <p className="font-medium text-lg">Joget Developer / Low-code Developer</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Goal</h3>
                            <p className="font-medium text-lg">ทำให้การจัดการครุภัณฑ์ครบวงจรและตรวจสอบได้</p>
                        </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2 text-emerald-600">Problem</h2>
                            <div className="bg-gray-50 p-6 rounded-2xl text-gray-600 h-full">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>ข้อมูลครุภัณฑ์กระจายหลายไฟล์ / หลายระบบ</li>
                                    <li>ตามให้ชัดว่า “ของชิ้นนี้อยู่ที่ไหน / ใครถือครอง” ทำได้ยาก</li>
                                    <li>การตรวจนับครุภัณฑ์ประจำปีใช้ Excel + เอกสารกระดาษ ทำให้ล่าช้าและผิดพลาดง่าย</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2 text-emerald-600">Solution</h2>
                            <div className="bg-gray-50 p-6 rounded-2xl text-gray-600 h-full">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Workflow อนุมัติหลายระดับตามโครงสร้าง GISTDA เชื่อมกับ process พัสดุ-จัดซื้อ</li>
                                    <li>Dashboard + รายงานสถานะทรัพย์สินที่ดูภาพรวมและประวัติการโอนย้ายได้แบบ Real-time</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Scope */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-emerald-600">ขอบเขตงาน (Scope)</h2>
                        <div className="bg-gray-50 p-8 rounded-2xl overflow-x-auto">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center min-w-[600px]">
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">🧾</span>
                                    <span className="font-medium text-gray-700">ลงทะเบียน</span>
                                </div>
                                <div className="text-gray-300 rotate-90 md:rotate-0 text-2xl">➜</div>
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">🔁</span>
                                    <span className="font-medium text-gray-700">โอนย้าย/ยืมคืน</span>
                                </div>
                                <div className="text-gray-300 rotate-90 md:rotate-0 text-2xl">➜</div>
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">📋</span>
                                    <span className="font-medium text-gray-700">ตรวจนับ</span>
                                </div>
                                <div className="text-gray-300 rotate-90 md:rotate-0 text-2xl">➜</div>
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">🗑️</span>
                                    <span className="font-medium text-gray-700">ตัดจำหน่าย</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="space-y-12">

                        {/* System Overview */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-emerald-600">ภาพรวมของระบบ (System Overview)</h2>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 shadow-sm border border-gray-100">
                                    <Image
                                        src="/fix-asset-dashboard.png"
                                        alt="Fixed Asset dashboard"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-gray-500 text-center text-sm leading-relaxed">
                                    Dashboard แสดงสถานะครุภัณฑ์คงเหลือ, อยู่ระหว่างซ่อม, หรือจำหน่ายออก พร้อมกราฟสรุปภาพรวม
                                </p>
                            </div>
                        </div>

                        {/* My Role & Responsibilities */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-emerald-600">My Role & Responsibilities</h2>
                            <div className="bg-gray-50 p-8 rounded-2xl text-gray-600 space-y-10">

                                {/* 1. Workflow Design */}
                                <div>
                                    <span className="font-bold text-black text-lg block mb-2">Workflow Design บน Joget</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1 mb-6">
                                        <li>ออกแบบ Process Diagram ครอบคลุมลงทะเบียน → โอนย้าย → ตรวจนับ → ตัดจำหน่าย</li>
                                        <li>ตั้ง auto assignment ตามหน่วยงานและประเภทครุภัณฑ์ พร้อม Environment Variable ส่งต่อข้อมูล</li>
                                    </ul>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-2">
                                                <Image
                                                    src="/fix-asset-flow.png"
                                                    alt="Fixed asset workflow"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <p className="text-center text-xs text-gray-400">ตัวอย่าง Process Flow การจัดการทรัพย์สิน</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-2">
                                                <Image
                                                    src="/fix-asset-details.png"
                                                    alt="Asset timeline detail"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <p className="text-center text-xs text-gray-400">หน้ารายละเอียดสถานะของทรัพย์สิน</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200"></div>

                                {/* 2. Form & Userview */}
                                <div>
                                    <span className="font-bold text-black text-lg block mb-2">Form & Userview Design</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1 mb-6">
                                        <li>ออกแบบฟอร์มลงทะเบียนที่บังคับข้อมูลสำคัญ (หมายเลขครุภัณฑ์, Serial, สถานที่ตั้ง)</li>
                                        <li>สร้าง userview/menu แยกตามบทบาท: Asset Admin, เจ้าหน้าที่พัสดุ, เจ้าของทรัพย์สิน</li>
                                    </ul>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-full flex justify-center mb-2">
                                            <Image
                                                src="/fix-asset-form.png"
                                                alt="Asset form"
                                                width={1627}
                                                height={1304}
                                                className="w-full max-w-3xl h-auto rounded-lg"
                                            />
                                        </div>
                                        <p className="text-center text-xs text-gray-400">ตัวอย่างฟอร์มบันทึกข้อมูลและยืมคืนครุภัณฑ์</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200"></div>

                                {/* 3. Permission & Role */}
                                <div>
                                    <span className="font-bold text-black text-lg block mb-2">Permission & Role</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1 mb-6">
                                        <li>ตั้งค่า Organization/Department/Grade ให้ตรงกับโครงสร้างจริงของ GISTDA</li>
                                        <li>กำหนด Role Permission ให้รัดกุม เช่น ใครมีสิทธิ์อนุมัติการแทงจำหน่าย</li>
                                    </ul>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-2">
                                                <Image src="/group-role.png" alt="Role setup" fill className="object-cover" />
                                            </div>
                                            <p className="text-center text-xs text-gray-400">การตั้งค่า Group & Role</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-2">
                                                <Image src="/permission.png" alt="Permission matrix" fill className="object-cover" />
                                            </div>
                                            <p className="text-center text-xs text-gray-400">การกำหนด Permission ในแต่ละ App</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Impact & Learnings */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-emerald-600">Impact & Learnings</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h3 className="font-bold text-lg mb-3 text-black">Impact</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>ลดเวลาการค้นหาและติดตามสถานะทรัพย์สินจากหลายวันเหลือเพียงไม่กี่คลิก</li>
                                        <li>กระบวนการจัดการครุภัณฑ์มีมาตรฐานเดียวกันทั้งองค์กร และตรวจสอบย้อนหลังได้ (Audit Trail)</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h3 className="font-bold text-lg mb-3 text-black">What I learned</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>การ Map Workflow ที่มีความซับซ้อนให้สอดคล้องกับระเบียบราชการจริง</li>
                                        <li>ความสำคัญของ Data Validation เพื่อป้องกันข้อมูลขยะในระบบฐานข้อมูลทรัพย์สิน</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}