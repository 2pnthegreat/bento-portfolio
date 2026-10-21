import BentoGrid from "./components/BentoGrid";
import ProfileCard from "./components/ProfileCard";
import LocationCard from "./components/LocationCard";
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
        {/* Row 1: Profile (2), Location (1), Resume (1) */}
        <ProfileCard />
        <LocationCard />
        <DocumentCard
          title="Resume"
          description="ดาวน์โหลด PDF"
          href={site.resumeUrl}
        />

        {/* Row 2: Tech stack (2), Stats (2) */}
        <ToolsCard className="col-span-1 md:col-span-2" />
        <StatsCard className="col-span-1 md:col-span-2" />

        {/* Row 3: Sukreep POS (2), E-Procurement (2) */}
        <ProjectCard
          project={getProject("sukreep")}
          htmlId="work"
          className="col-span-1 md:col-span-2"
        />
        <ProjectCard
          project={getProject("e-procurement")}
          className="col-span-1 md:col-span-2"
        />

        {/* Row 4: Fixed Asset (2), Contact (2) */}
        <ProjectCard
          project={getProject("fix-asset")}
          className="col-span-1 md:col-span-2"
        />
        <ContactCard htmlId="contact" className="col-span-1 md:col-span-2" />
      </BentoGrid>
    </main>
  );
}
