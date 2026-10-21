import Image from 'next/image';
import type { Project } from '@/data/projects';
import { PROJECT_COVER_TRANSITION_NAME } from '@/lib/view-transition';

/** Cover image at the top of a case-study page; the home card's cover morphs into it */
export default function ProjectHero({ project }: { project: Project }) {
    return (
        <div
            data-project-hero
            className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10 bg-bg-color"
            style={{ viewTransitionName: PROJECT_COVER_TRANSITION_NAME }}
        >
            <Image
                src={project.cover}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1064px) 936px, 100vw"
                className="object-cover"
            />
        </div>
    );
}
