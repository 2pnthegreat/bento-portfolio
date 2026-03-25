import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ProjectCardProps {
    id: string;
    title: string;
    category: string;
    image: string;
    className?: string;
    htmlId?: string;
    href?: string;
}

export default function ProjectCard({
    id,
    title,
    category,
    image,
    className = "",
    htmlId,
    href,
}: ProjectCardProps) {
    const defaultHref = id === "1" ? "/projects/e-procurement" : id === "2" ? "/projects/fix-asset" : `/projects/${id}`;
    const finalHref = href || defaultHref;

    return (
        <Link
            href={finalHref}
            id={htmlId}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            className={`bg-card-bg rounded-[var(--radius-card)] overflow-hidden relative group shadow-sm transition-all duration-300 hover:scale-[var(--hover-scale)] hover:shadow-md ${className}`}
        >
            <div className="absolute inset-0">
                <Image
                    src={image}
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
