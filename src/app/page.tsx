import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import Footer from "@/components/Footer";
import NewsSection from "@/components/NewsSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeachingSection from "@/components/TeachingSection";
import ServiceSection from "@/components/ServiceSection";
import HonorsSection from "@/components/HonorsSection";
import CVSection from "@/components/CVSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import { scholarSnapshot } from "@/lib/scholar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <Header />
        <HeroSection scholar={scholarSnapshot} />
        <AboutMeSection />
        <NewsSection scholar={scholarSnapshot} />
        <ResearchSection scholar={scholarSnapshot} />
        <ProjectsSection />
        <TeachingSection />
        <ServiceSection />
        <HonorsSection />
        <CVSection />
        <BlogSection />
        <ContactSection scholarProfileUrl={scholarSnapshot.profileUrl} />
      </main>
      <Footer />
    </div>
  );
}
