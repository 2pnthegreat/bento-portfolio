import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About",
    description: "About 2pnthegreat",
}

export default async function AboutPage() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return (
        <main className="min-h-screen flex flex-col items-center py-10 px-5">
            <div className="max-w-[800px] w-full bg-card-bg rounded-[var(--radius-card)] p-8 shadow-sm">

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-32 h-32 rounded-full bg-gray-200 bg-cover bg-center flex-shrink-0" style={{ backgroundImage: "url('/about.jpg')" }}></div>

                    <div>
                        <h1 className="text-3xl font-bold mb-4">About Me</h1>
                        <p className="text-text-sub leading-relaxed mb-6">
                            สวัสดีครับ ผมเป็นนักพัฒนาระบบฝั่ง Backend ที่มีประสบการณ์ในการพัฒนาและออกแบบโครงสร้างระบบ
                            ทั้งในรูปแบบ High-code (Go-Fiber, Next.js) และ Low-code platform (Joget DX7)
                            โดยมุ่งเน้นการสร้างระบบที่มีประสิทธิภาพสูง รองรับผู้ใช้งานจำนวนมาก (Multi-tenancy) และมี Workflow ที่ซับซ้อน
                        </p>

                        <p className="text-text-sub leading-relaxed mb-6">
                            ผลงานล่าสุดคือการพัฒนาระบบ <strong>Sukreep (SaaS ERP & POS)</strong> ที่ครอบคลุมทุกวงจรธุรกิจ
                            ตั้งแต่ระบบจัดซื้อ คลังสินค้า ไปจนถึงระบบหน้าร้านและบัญชีที่แม่นยำ 
                            พร้อมทั้งมีประสบการณ์ในการออกแบบและพัฒนาระบบ Joget DX สำหรับหน่วยงานภาครัฐ 
                            เพื่อให้การทำงานในองค์กรเป็นไปได้อย่างไร้รอยต่อและมีความเสถียรภาพสูงสุด
                        </p>

                        <h2 className="text-xl font-semibold mb-3">Education</h2>
                        <p className="text-text-sub">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
                        <p className="text-text-sub">คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม</p>
                        <p className="text-text-sub">สาขาวิชา เทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ แขนงคอมพิวเตอร์</p>
                        <br />

                        <h2 className="text-xl font-semibold mb-3">Current status</h2>
                        <p className="text-text-sub">ชั้นปีที่ 5 (อยู่ระหว่างทำโปรเจคจบ)</p>
                        <p className="text-text-sub">ปีที่คาดว่าจะจบการศึกษา: พ.ศ. 2569 (ค.ศ. 2026)</p>
                        <p className="text-text-sub">เกรดเฉลี่ย (GPA): 2.55 </p>
                        <br />

                        <h2 className="text-xl font-semibold mb-4">Experience / Internship</h2>

                        <div className="mb-8">
                            <h3 className="text-lg  text-text-sub text-gray mb-2">
                                [ กรกฎาคม 2567 – ธันวาคม 2567 ]
                            </h3>

                            <ul className="text-text-sub space-y-2">
                                <li>บริษัท Cyber Kings Consulting</li>
                                <li>ตำแหน่งงาน: นักศึกษาฝึกงาน</li>
                                <li>ระดับตำแหน่ง: เจ้าหน้าที่</li>
                                <li>รายละเอียดงาน: เรียนรู้การใช้ Joget ในการพัฒนา</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg text-text-sub text-gray mb-2">
                                [ ธันวาคม 2567 – พฤษภาคม 2568 ]
                            </h3>

                            <ul className="text-text-sub space-y-2">
                                <li>บริษัท Cyber Kings Consulting</li>
                                <li>ตำแหน่งงาน: Joget Developer</li>
                                <li>ระดับตำแหน่ง: เจ้าหน้าที่</li>
                                <li>รายละเอียดงาน: ออกแบบและพัฒนาระบบ Joget DX
                                    สำหรับหน่วยงานภาครัฐ (เช่น GISTDA)</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg text-text-sub text-gray mb-2">
                                [ 26 มกราคม 2569 – ปัจจุบัน ]
                            </h3>

                            <ul className="text-text-sub space-y-2">
                                <li>บริษัท SIAM INNOVATOR CO., LTD.</li>
                                <li>ตำแหน่งงาน: Jr.web developer</li>
                                <li>ระดับตำแหน่ง: เจ้าหน้าที่</li>
                                <li className="leading-relaxed">
                                    รายละเอียดงาน: พัฒนา Sukreep: ระบบ SaaS ERP & POS เต็มรูปแบบ (Go-Fiber & Next.js) 
                                    สำหรับบริหารธุรกิจค้าปลีกและร้านอาหารแบบหลายสาขา (Multi-tenancy) ครอบคลุมวงจรธุรกิจตั้งแต่ระบบจัดซื้อ 
                                    (Procurement Workflow) และการควบคุมคลังสินค้าแบบ Real-time ไปจนถึงระบบขายหน้าร้าน (Hybrid POS) 
                                    ที่ผสานการสั่งอาหารผ่าน QR Menu ของลูกค้าอย่างไร้รอยต่อ พร้อมระบบบัญชีที่รองรับการคำนวณภาษี (VAT, WHT) 
                                    และการวิเคราะห์รายได้-รายจ่ายที่แม่นยำ บนโครงสร้างระบบที่เน้น Performance สูงและการขยายตัวระดับ Enterprise
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}
