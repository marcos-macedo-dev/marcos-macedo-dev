import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";
import { Stack } from "@/components/portfolio/stack";
import { Timeline } from "@/components/portfolio/timeline";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          name={portfolioData.name}
          role={portfolioData.role}
          location={portfolioData.location}
          headline={portfolioData.headline}
          github={portfolioData.social.github}
          linkedin={portfolioData.social.linkedin}
        />
        <About copy={portfolioData.about} />
        <Stack items={portfolioData.stacks} />
        <Projects projects={portfolioData.projects} />
        <Timeline items={portfolioData.timeline} />
        <Contact email={portfolioData.email} />
      </main>
      <Footer />
    </>
  );
}
