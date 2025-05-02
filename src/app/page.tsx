import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillsSections";
import ProjectsSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div>
      <HeroSection id="home" />
      <SkillsSection />
      <AboutSection id="about" />

      <ProjectsSection />
      <ContactSection id="contact" />
    </div>
  );
}
