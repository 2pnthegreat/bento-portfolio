import Link from "next/link";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    className?: string;
    htmlId?: string;
}

export default function ProjectCard({
    project,
    className = "",
    htmlId,
}: ProjectCardProps) {
    const { title, category, cover, href, external } = project;

    return (
        <Link
            href={href}
            id={htmlId}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`bento-card bg-card-bg overflow-hidden relative group min-h-[220px] ${className}`}
        >
            <div className="absolute inset-0">
                <Image
                    src={cover}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 p-6 text-white w-full flex items-end justify-between gap-4">
                <div>
                    <span className="inline-block bg-accent text-on-accent text-xs font-semibold px-3 py-1 rounded-full mb-2">{category}</span>
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <span className="w-10 h-10 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-accent group-hover:text-on-accent transition-colors">
                    <RiArrowRightUpLine />
                </span>
            </div>
        </Link>
    );
}
