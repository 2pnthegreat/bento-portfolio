// Content for the profile card, stats card and About page.

export const profile = {
    summary: [
        'พัฒนาระบบองค์กรทั้งแบบ High-code (Go-Fiber, Next.js) และ Low-code (Joget DX)',
        'ปัจจุบันพัฒนา Sukreep ระบบ SaaS ERP & POS และเคยพัฒนาระบบ e-Procurement และ Fixed Asset ให้ GISTDA',
    ],
    about: [
        'ผมเป็นนักพัฒนาระบบฝั่ง Backend ที่มีประสบการณ์ในการพัฒนาและออกแบบโครงสร้างระบบ ทั้งในรูปแบบ High-code (Go-Fiber, Next.js) และ Low-code platform (Joget DX7) โดยมุ่งเน้นการสร้างระบบที่มีประสิทธิภาพสูง รองรับผู้ใช้งานจำนวนมาก (Multi-tenancy) และมี Workflow ที่ซับซ้อน',
        'ผลงานล่าสุดคือการพัฒนาระบบ Sukreep (SaaS ERP & POS) ที่ครอบคลุมทุกวงจรธุรกิจ ตั้งแต่ระบบจัดซื้อ คลังสินค้า ไปจนถึงระบบหน้าร้านและบัญชี พร้อมทั้งมีประสบการณ์ในการออกแบบและพัฒนาระบบ Joget DX สำหรับหน่วยงานภาครัฐ',
    ],
};

// Numbers kept separate from labels so they can be animated (count-up) later
export const stats = [
    { value: 2, suffix: '+', label: 'ปีประสบการณ์' },
    { value: 3, suffix: '', label: 'ระบบองค์กรที่พัฒนา' },
    { value: 1, suffix: '', label: 'หน่วยงานรัฐ (GISTDA)' },
];

export const education = {
    university: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ',
    faculty: 'คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม',
    major: 'สาขาวิชา เทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ แขนงคอมพิวเตอร์',
    status: 'ชั้นปีที่ 5 (อยู่ระหว่างทำโปรเจคจบ)',
    expectedGraduation: 'พ.ศ. 2570 (ค.ศ. 2027)',
};

export interface Experience {
    period: string;
    title: string;
    company: string;
    highlights: string[];
}

// Newest first
export const experience: Experience[] = [
    {
        period: '26 ม.ค. 2569 – ปัจจุบัน',
        title: 'Junior Web Developer',
        company: 'SIAM INNOVATOR CO., LTD.',
        highlights: [
            'พัฒนา Sukreep ระบบ SaaS ERP & POS เต็มรูปแบบ (Go-Fiber & Next.js) สำหรับธุรกิจค้าปลีกและร้านอาหารแบบหลายสาขา (Multi-tenancy)',
            'ระบบจัดซื้อ (Procurement Workflow) และการควบคุมคลังสินค้าแบบ Real-time',
            'ระบบขายหน้าร้าน (Hybrid POS) ที่ผสานการสั่งอาหารผ่าน QR Menu ของลูกค้า',
            'ระบบบัญชีที่รองรับการคำนวณภาษี (VAT, WHT) และการวิเคราะห์รายได้-รายจ่าย',
        ],
    },
    {
        period: 'ธ.ค. 2567 – พ.ค. 2568',
        title: 'Joget Developer',
        company: 'Cyber Kings Consulting',
        highlights: [
            'ออกแบบและพัฒนาระบบ Joget DX สำหรับหน่วยงานภาครัฐ (GISTDA)',
            'พัฒนาระบบ e-Procurement และ Fixed Asset Management (Workflow, Form, Permission, Report)',
        ],
    },
    {
        period: 'ก.ค. 2567 – ธ.ค. 2567',
        title: 'นักศึกษาฝึกงาน',
        company: 'Cyber Kings Consulting',
        highlights: ['เรียนรู้และฝึกพัฒนาแอปพลิเคชันบน Joget DX'],
    },
];
