import Link from "next/link";
import Image from "next/image";
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
            className={`bg-card-bg rounded-[var(--radius-card)] overflow-hidden relative group shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md ${className}`}
        >
            <div className="absolute inset-0">
                <Image
                    src={cover}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            </div>

            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <p className="text-sm font-medium text-gray-200 mb-1">{category}</p>
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
            </div>
        </Link>
    );
}
