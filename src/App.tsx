import { HeroSection } from "./components/sections/hero";
import { AboutSection } from "./components/sections/about";
import { ExperienceSection } from "./components/sections/experience";
import { ProjectsSection } from "./components/sections/projects";
import { SkillsSection } from "./components/sections/skills";
import { ContactSection } from "./components/sections/contact";
import { SiteHeader } from "./components/site-header";

function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Jordan Doe. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind CSS, and shadcn/ui.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
