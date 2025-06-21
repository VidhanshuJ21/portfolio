import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ProjectsSection } from "../components/ProjectsSection";
import { AboutMe } from "../components/AboutMe";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;