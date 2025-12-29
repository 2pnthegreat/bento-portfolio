import React from 'react';
import {
    FaReact, FaNodeJs, FaGitAlt, FaDatabase
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiMysql,
    SiPostgresql,
    SiDbeaver,
    SiPrisma
} from 'react-icons/si';


export default function ToolsCard() {
    return (
        <div className="bg-card-bg rounded-[var(--radius-card)] p-6 flex flex-col shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md col-span-1 md:col-span-1 h-full min-h-[180px]">
            <h2 className="text-lg font-semibold mb-4">Tools</h2>

            <div className="grid grid-cols-4 gap-4 mb-auto justify-items-center">
                <FaReact className="text-3xl text-[#61DAFB]" title="React" />
                <SiNextdotjs className="text-3xl text-black" title="Next.js" />
                <FaNodeJs className="text-3xl text-[#339933]" title="Node.js" />
                <FaGitAlt className="text-3xl text-[#F05032]" title="Git" />
                <SiMysql className="text-3xl text-[#4479A1]" title="MySQL" />
                <SiPostgresql className="text-3xl text-[#336791]" title="PostgreSQL" />

                {/* DBeaver - Using SiDbeaver if available, otherwise fallback */}
                <SiDbeaver className="text-3xl text-[#382923]" title="DBeaver" />

                <SiPrisma className="text-3xl text-[#2D3748]" title="Prisma" />
            </div>
            <p className="text-text-sub text-xs mt-4 text-center">My tech stack</p>
        </div>
    );
}
