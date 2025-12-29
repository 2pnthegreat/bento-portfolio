const Loading = () => {
    return (
        // 1. พื้นหลังสีเทาอ่อน (เหมือนหน้าเว็บหลัก)
        <div className="min-h-screen w-full bg-[#F3F4F6] flex items-center justify-center z-50">

            {/* 2. สร้างการ์ด Bento สีขาวตรงกลาง */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-4">

                {/* 3. Spinner สีเขียว Emerald (สีประจำตัว) */}
                <div className="relative">
                    {/* วงกลมพื้นหลัง (Track) */}
                    <div className="w-12 h-12 rounded-full border-4 border-gray-100"></div>
                    {/* ส่วนที่หมุน (Indicator) */}
                    <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin"></div>
                </div>

                {/* 4. ข้อความ Loading แบบนุ่มๆ */}
                <p className="text-sm font-medium text-gray-400 animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loading;