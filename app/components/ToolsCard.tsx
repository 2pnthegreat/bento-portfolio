import React from 'react';
import {
    FaReact, FaNodeJs, FaGitAlt
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiMysql,
    SiPostgresql,
    SiDbeaver,
    SiPrisma,
    SiSupabase,
    SiVercel,
    SiGo,
} from 'react-icons/si';


export default function ToolsCard() {
    return (
        <div className="bg-card-bg rounded-[var(--radius-card)] p-6 flex flex-col shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 md:col-span-1 h-full min-h-[180px]">
            <h2 className="text-lg font-semibold mb-4 text-text-main">Tools</h2>

            <div className="grid grid-cols-4 gap-4 mb-auto justify-items-center text-center">
                <FaReact className="text-3xl text-[#61DAFB]" title="React" />
                <SiNextdotjs className="text-3xl text-text-main" title="Next.js" />
                <FaNodeJs className="text-3xl text-[#339933]" title="Node.js" />
                <SiGo className="text-3xl text-[#00ADD8]" title="Go" />
                <FaGitAlt className="text-3xl text-[#F05032]" title="Git" />
                <SiMysql className="text-3xl text-[#4479A1]" title="MySQL" />
                <SiPostgresql className="text-3xl text-[#336791]" title="PostgreSQL" />
                <SiDbeaver className="text-3xl text-[#382923] dark:text-[#94a3b8]" title="DBeaver" />
                <SiPrisma className="text-3xl text-[#2D3748] dark:text-[#94a3b8]" title="Prisma" />
                <SiSupabase className="text-3xl text-[#3ECF8E]" title="Supabase" />
                <SiVercel className="text-3xl text-text-main" title="Vercel" />
            </div>
            <p className="text-text-sub text-xs mt-4 text-center">My tech stack</p>
        </div>
    );
}
