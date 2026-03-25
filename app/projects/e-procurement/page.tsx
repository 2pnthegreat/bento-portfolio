import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "E-Procurement",
    description: "GISTDA – E-Procurement (Joget Platform)",
}

export default async function EProcurementPage() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return (
        <main className="min-h-screen flex flex-col items-center py-10 px-5 bg-bg-color">
            <div className="max-w-[1000px] w-full bg-card-bg rounded-[var(--radius-card)] p-8 shadow-sm">

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">E-Procurement</h1>
                    <p className="text-xl text-gray-600 font-medium">GISTDA – E-Procurement (Joget Platform)</p>
                    <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                        ระบบจัดซื้อจัดจ้าง สำหรับ GISTDA บนแพลตฟอร์ม Joget ครอบคลุมการขอซื้อ อนุมัติ เปรียบเทียบราคา และออกใบสั่งซื้อ
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Grid Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Role</h3>
                            <p className="font-medium text-lg">Joget Developer /<br />Low-code Developer</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Team</h3>
                            <p className="font-medium text-lg">3 คน (ร่วมกับ BA, SA, Jasper Report Dev)</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-2">Timeline</h3>
                            <p className="font-medium text-lg">ม.ค. 2025 – พ.ค. 2026</p>
                        </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-600">Problem</h2>
                            <div className="bg-gray-50 p-6 rounded-2xl text-gray-600 h-full">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>ใช้เอกสาร/Excel และอีเมลในการขอซื้อ</li>
                                    <li>ตามสถานะยาก ไม่รู้คำขอค้างอยู่ที่ใคร</li>
                                    <li>การตรวจวงเงินไม่เกิน 500,000 บาททำด้วยการเช็คมือ</li>
                                    <li>ไม่มี dashboard กลางให้ผู้บริหารดูภาพรวม</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-600">Solution</h2>
                            <div className="bg-gray-50 p-6 rounded-2xl text-gray-600 h-full">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>รวมทุกขั้นตอนจัดซื้อวงเงินไม่เกิน 500,000 บาทไว้ในระบบเดียว</li>
                                    <li>มี workflow อนุมัติหลายระดับสอดคล้องกับโครงสร้าง GISTDA</li>
                                    <li>มีรายงาน + dashboard ให้ตรวจสอบย้อนหลังและดูภาพรวมได้</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Scope */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-blue-600">ขอบเขตงาน (Scope)</h2>
                        <div className="bg-gray-50 p-8 rounded-2xl overflow-x-auto">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center min-w-[600px]">
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">📝</span>
                                    <span className="font-medium text-gray-700">คำขอซื้อ</span>
                                </div>
                                <div className="text-gray-300 rotate-90 md:rotate-0 text-2xl">➜</div>
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">✅</span>
                                    <span className="font-medium text-gray-700">อนุมัติหลายระดับ</span>
                                </div>
                                <div className="text-gray-300 rotate-90 md:rotate-0 text-2xl">➜</div>
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">⚖️</span>
                                    <span className="font-medium text-gray-700">เปรียบเทียบราคา</span>
                                </div>
                                <div className="text-gray-300 rotate-90 md:rotate-0 text-2xl">➜</div>
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">📃</span>
                                    <span className="font-medium text-gray-700">ออกใบสั่งซื้อ</span>
                                </div>
                                <div className="text-gray-300 rotate-90 md:rotate-0 text-2xl">➜</div>
                                <div className="flex flex-col items-center gap-3">
                                    <span className="w-16 h-16 bg-white shadow-sm rounded-full flex items-center justify-center text-3xl">📊</span>
                                    <span className="font-medium text-gray-700">รายงาน/Dashboard</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="space-y-12">
                        {/* Contribution */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">สิ่งที่ผมทำ (My Contribution)</h2>
                            <div className="bg-gray-50 p-8 rounded-2xl text-gray-600">
                                <ul className="list-disc list-inside space-y-3 leading-relaxed">
                                    <li>ออกแบบ Workflow การทำงานของระบบ</li>
                                    <li>สร้างแบบฟอร์ม (Forms) สำหรับการกรอกข้อมูลต่างๆ</li>
                                    <li>จัดทำ User View สำหรับผู้ใช้งานแต่ละกลุ่ม</li>
                                    <li>กำหนดสิทธิ์การเข้าถึง (Permission) ในแต่ละขั้นตอน</li>
                                    <li>เขียน Custom Logic เพื่อรองรับเงื่อนไขทางธุรกิจที่ซับซ้อน</li>
                                    <li>สร้างรายงานสรุปผลการดำเนินงานบน Joget</li>
                                    <li>ดูแลระบบตั้งแต่เริ่มต้นจนถึงขั้นตอนการใช้งานจริง (Go Live)</li>
                                </ul>
                            </div>
                        </div>

                        {/* System Overview */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">ภาพรวมของระบบ (System Overview)</h2>
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 shadow-sm border border-gray-100">
                                    <Image
                                        src="/project-overview.png"
                                        alt="E-Procurement System Dashboard"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-gray-500 text-center text-sm leading-relaxed">
                                    หน้า Dashboard หลักของระบบ e-Procurement ที่แสดงรายการงานที่ต้องดำเนินการ (To-Do List)
                                    และสถานะปัจจุบันของแต่ละโครงการ ช่วยให้ผู้ใช้งานติดตามความคืบหน้าได้อย่างมีประสิทธิภาพ
                                </p>
                            </div>
                        </div>

                        {/* My Role & Responsibilities (Detailed) */}
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-blue-600">My Role & Responsibilities</h2>
                            <div className="bg-gray-50 p-8 rounded-2xl text-gray-600 space-y-10">

                                {/* 1. Workflow */}
                                <div>
                                    <span className="font-bold text-black text-lg block mb-2">Workflow Design บน Joget</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1 mb-6">
                                        <li>ออกแบบ Process Diagram</li>
                                        <li>กำหนดเงื่อนไข flow ตามวงเงินไม่เกิน 500,000 บาท และตามระดับผู้อนุมัติ</li>
                                    </ul>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <div className="w-full flex justify-center mb-2">
                                            <Image
                                                src="/epro-flow.png"
                                                alt="Workflow diagram"
                                                width={1627}
                                                height={1304}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                        <p className="text-center text-xs text-gray-400">ผัง Workflow การจัดซื้อจัดจ้าง</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200"></div>

                                {/* 2. Form & Userview */}
                                <div>
                                    <span className="font-bold text-black text-lg block mb-2">Form & Userview Design</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1 mb-6">
                                        <li>สร้างฟอร์มคำขอซื้อ, ฟอร์มใบสั่งซื้อ บน Joget</li>
                                        <li>ออกแบบ userview/menu แยกตามบทบาท: Requester, Approver, Purchasing, Admin</li>
                                    </ul>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="w-full flex justify-center mb-2">
                                                <Image
                                                    src="/create-form.png"
                                                    alt="Create Form"
                                                    width={800}
                                                    height={600}
                                                    className="w-full h-auto rounded-lg"
                                                />
                                            </div>
                                            <p className="text-center text-xs text-gray-400">การสร้างฟอร์มบน Joget</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="w-full flex justify-center mb-2">
                                                <Image
                                                    src="/example-form.png"
                                                    alt="Example Form"
                                                    width={800}
                                                    height={600}
                                                    className="w-full h-auto rounded-lg"
                                                />
                                            </div>
                                            <p className="text-center text-xs text-gray-400">ตัวอย่างหน้าฟอร์มคำขอซื้อ</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200"></div>

                                {/* 3. Permission */}
                                <div>
                                    <span className="font-bold text-black text-lg block mb-2">Permission & Role</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1 mb-6">
                                        <li>ตั้งค่าโครงสร้างองค์กรใน Joget ให้ตรงกับ GISTDA</li>
                                        <li>กำหนดสิทธิ์การเข้าถึงฟอร์ม/ลิสต์/เมนูตาม role และหน่วยงาน</li>
                                    </ul>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <Image
                                                src="/group-role.png"
                                                alt="Group & Role"
                                                width={800}
                                                height={600}
                                                className="w-full h-auto rounded-lg mb-2"
                                            />
                                            <p className="text-center text-xs text-gray-400">การตั้งค่า Group & Role</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <Image
                                                src="/permission.png"
                                                alt="Permission"
                                                width={800}
                                                height={600}
                                                className="w-full h-auto rounded-lg mb-2"
                                            />
                                            <p className="text-center text-xs text-gray-400">การตั้งค่า Permission</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200"></div>

                                {/* 4. Custom Logic */}
                                <div>
                                    <span className="font-bold text-black text-lg block mb-2">Custom Logic</span>
                                    <ul className="list-disc list-inside ml-4 space-y-1 mb-6">
                                        <li>ใช้ Beanshell/Java สำหรับ set ลำดับอนุมัติ</li>
                                        <li>ตั้งค่า email/notification</li>
                                    </ul>
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <Image
                                            src="/beanshell-config.png"
                                            alt="Beanshell Config"
                                            width={1627}
                                            height={1304}
                                            className="w-full h-auto rounded-lg mb-2"
                                        />
                                        <p className="text-center text-xs text-gray-400">ตัวอย่างการเขียน Logic ด้วย Beanshell</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Technical Details */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Technical Details</h2>
                            <div className="bg-gray-50 p-8 rounded-2xl text-gray-600 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="font-semibold text-black mb-1">Platform</p>
                                    <p>Joget DX 7</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-black mb-1">Database</p>
                                    <p>MySQL</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-black mb-1">Scripting</p>
                                    <p>Beanshell / Java (Custom Tool / Participant / Validator)</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-black mb-1">Key Features</p>
                                    <ul className="list-disc list-inside text-sm">
                                        <li>Form, List, Userview, Process</li>
                                        <li>Email Tool / Notification</li>
                                        <li>Environment Variables</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Impact & Learnings */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Impact & Learnings</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h3 className="font-bold text-lg mb-3 text-black">Impact</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>ลดเวลาการติดตามสถานะคำขอจัดซื้อ จากต้องโทร/ส่งอีเมล มาเป็นการตรวจสอบผ่านระบบ</li>
                                        <li>สร้างมาตรฐานให้กระบวนการจัดซื้อจัดจ้างวงเงินไม่เกิน 500,000 บาท</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl">
                                    <h3 className="font-bold text-lg mb-3 text-black">What I learned</h3>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>การออกแบบ workflow ที่ซับซ้อนตามระเบียบราชการ</li>
                                        <li>เข้าใจข้อจำกัดของระบบภาครัฐ และการ validate งบประมาณ/วงเงิน</li>
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