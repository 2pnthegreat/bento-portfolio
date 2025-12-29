import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col items-center py-10 px-5">
            <div className="max-w-[800px] w-full bg-card-bg rounded-[var(--radius-card)] p-8 shadow-sm">
                <Link href="/" className="inline-block mb-6 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                    ← Back to Home
                </Link>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-32 h-32 rounded-full bg-gray-200 bg-cover bg-center flex-shrink-0" style={{ backgroundImage: "url('/about.jpg')" }}></div>

                    <div>
                        <h1 className="text-3xl font-bold mb-4">About Me</h1>
                        <p className="text-text-sub leading-relaxed mb-6">
                            สวัสดีครับ ผมเป็นนักพัฒนาระบบฝั่ง Backend ที่มีประสบการณ์ในการพัฒนาและนำระบบไปใช้งานจริง
                            โดยให้ความสำคัญกับการออกแบบโครงสร้างระบบ การจัดการข้อมูล และการทำงานของ workflow
                            เพื่อให้ระบบสามารถใช้งานได้อย่างมีเสถียรภาพและรองรับการเปลี่ยนแปลงในอนาคต
                        </p>

                        <p className="text-text-sub leading-relaxed mb-6">
                            ผมมีประสบการณ์ในการพัฒนา Low-code platform อย่าง Joget DX7 แบบครบกระบวนการ
                            ตั้งแต่การออกแบบ workflow, การสร้าง form, การจัดการสิทธิ์ผู้ใช้งาน
                            ไปจนถึงการเชื่อมต่อกับระบบภายนอกและนำระบบไปใช้งานจริงในสภาพแวดล้อมการทำงาน
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
                    </div>
                </div>
            </div>
        </main >
    );
}
