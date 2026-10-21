export interface Project {
    slug: string;
    title: string;
    /** Longer name used in menus */
    menuLabel: string;
    category: string;
    cover: string;
    /** Internal case-study page or external site */
    href: string;
    external?: boolean;
}

// Order here is the order shown in the navbar "Work" menu
export const projects: Project[] = [
    {
        slug: 'sukreep',
        title: 'Sukreep POS',
        menuLabel: 'Sukreep POS (SaaS)',
        category: 'SaaS ERP & POS',
        cover: '/sukreep-cover.png',
        href: 'https://sukreep.com',
        external: true,
    },
    {
        slug: 'e-procurement',
        title: 'E-Procurement',
        menuLabel: 'E-Procurement',
        category: 'Web Application',
        cover: '/e-procurement-cover.jpeg',
        href: '/projects/e-procurement',
    },
    {
        slug: 'fix-asset',
        title: 'Fixed Asset',
        menuLabel: 'Fixed Asset Management',
        category: 'Management System',
        cover: '/fix-asset-cover.jpg',
        href: '/projects/fix-asset',
    },
];

export function getProject(slug: string): Project {
    const project = projects.find((p) => p.slug === slug);
    if (!project) throw new Error(`Unknown project: ${slug}`);
    return project;
}
