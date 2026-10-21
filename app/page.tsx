import BentoGrid from "./components/BentoGrid";
import ProfileCard from "./components/ProfileCard";
import LocationCard from "./components/LocationCard";
import SocialCard from "./components/SocialCard";
import ProjectCard from "./components/ProjectCard";
import ToolsCard from "./components/ToolsCard";
import StatsCard from "./components/StatsCard";
import ContactCard from "./components/ContactCard";
import DocumentCard from "./components/DocumentCard";
import { site } from "@/data/site";
import { getProject } from "@/data/projects";


export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center py-10 px-4 md:px-0">
      <BentoGrid>
        {/* Row 1: Profile (2), Location (1), Tools (1) */}
        <ProfileCard />
        <LocationCard />
        <ToolsCard />

        {/* Row 2: LinkedIn (1), GitHub (1), Project 1 (2) */}
        <SocialCard platform="linkedin" href={site.socials.linkedin} />
        <SocialCard platform="github" href={site.socials.github} />
        <ProjectCard
          project={getProject("e-procurement")}
          htmlId="work"
          className="col-span-1 md:col-span-2"
        />

        {/* Row 3: Resume (2), Project 2 (2) */}
        <DocumentCard
          title="Resume"
          description="ดาวน์โหลดประวัติการทำงาน (PDF)"
          href={site.resumeUrl}
          color="bg-gray-700"
          className="col-span-1 md:col-span-2"
        />
        <ProjectCard
          project={getProject("fix-asset")}
          className="col-span-1 md:col-span-2"
        />

        {/* Row 4: Stats (2), Sukreep POS (2) */}
        <StatsCard className="col-span-1 md:col-span-2" />
        <ProjectCard
          project={getProject("sukreep")}
          className="col-span-1 md:col-span-2"
        />

        {/* Row 5: Contact (4) */}
        <ContactCard htmlId="contact" className="col-span-1 md:col-span-4" />
      </BentoGrid>
    </main>
  );
}
