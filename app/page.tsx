import BentoGrid from "./components/BentoGrid";
import ProfileCard from "./components/ProfileCard";
import LocationCard from "./components/LocationCard";
import SocialCard from "./components/SocialCard";
import ProjectCard from "./components/ProjectCard";
import ToolsCard from "./components/ToolsCard";
import QuoteCard from "./components/QuoteCard";
import ContactCard from "./components/ContactCard";
import DocumentCard from "./components/DocumentCard";


export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center py-10 px-4 md:px-0">
      <BentoGrid>
        {/* Row 1: Profile (2), Location (1), Tools (1) */}
        <ProfileCard />
        <LocationCard />
        <ToolsCard />

        {/* Row 2: LinkedIn (1), GitHub (1), Project 1 (2) */}
        <SocialCard platform="linkedin" href="https://www.linkedin.com/in/kampanart-poonpanao-656772368" />
        <SocialCard platform="github" href="https://github.com/2pnthegreat" />
        <ProjectCard
          id="1"
          htmlId="work"
          title="E-Procurement"
          category="Web Application"
          image="/e-procurement-cover.jpeg"
          className="col-span-1 md:col-span-2"
        />

        {/* Row 3: Resume (1), CV (1), Project 2 (2) */}
        <DocumentCard title="Resume" href="Resume.pdf" color="bg-gray-700" />
        <DocumentCard title="CV" href="/CV_PDF.pdf" color="bg-gray-600" targetBlank={false} />
        <ProjectCard
          id="2"
          title="Fixed Asset"
          category="Management System"
          image="/fix-asset-cover.jpg"
          className="col-span-1 md:col-span-2"
        />

        {/* Row 4: Quote (2), Sukreep POS (2) */}
        <QuoteCard className="col-span-1 md:col-span-2" />
        <ProjectCard
          id="sukreep"
          title="Sukreep POS"
          category="SaaS ERP & POS"
          image="/sukreep-cover.png"
          href="https://sukreep.com"
          className="col-span-1 md:col-span-2"
        />

        {/* Row 5: Contact (4) */}
        <ContactCard htmlId="contact" className="col-span-1 md:col-span-4" />
      </BentoGrid>
    </main>
  );
}
