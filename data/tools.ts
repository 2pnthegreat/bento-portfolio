import type { IconType } from 'react-icons';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import {
    SiNextdotjs,
    SiMysql,
    SiPostgresql,
    SiDbeaver,
    SiPrisma,
    SiSupabase,
    SiVercel,
    SiGo,
    SiPostman,
} from 'react-icons/si';

export interface Tool {
    name: string;
    /** react-icons component, or an image path in /public when no icon exists */
    icon: IconType | string;
}

export interface ToolGroup {
    label: string;
    tools: Tool[];
}

export const toolGroups: ToolGroup[] = [
    {
        label: 'Backend',
        tools: [
            { name: 'Go', icon: SiGo },
            { name: 'Node.js', icon: FaNodeJs },
            { name: 'Prisma', icon: SiPrisma },
        ],
    },
    {
        label: 'Frontend',
        tools: [
            { name: 'React', icon: FaReact },
            { name: 'Next.js', icon: SiNextdotjs },
        ],
    },
    {
        label: 'Database',
        tools: [
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'MySQL', icon: SiMysql },
            { name: 'Supabase', icon: SiSupabase },
            { name: 'DBeaver', icon: SiDbeaver },
        ],
    },
    {
        label: 'Tooling',
        tools: [
            { name: 'Git', icon: FaGitAlt },
            { name: 'Vercel', icon: SiVercel },
            { name: 'Playwright', icon: '/playwright.png' },
            { name: 'Postman', icon: SiPostman },
        ],
    },
];
