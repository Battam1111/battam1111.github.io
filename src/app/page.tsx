import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import Footer from "@/components/Footer";
import ResearchSection from "@/components/ResearchSection";
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
        <ResearchSection scholar={scholarSnapshot} />
        <BlogSection />
        <ContactSection scholarProfileUrl={scholarSnapshot.profileUrl} />
      </main>
      <Footer />
    </div>
  );
}
