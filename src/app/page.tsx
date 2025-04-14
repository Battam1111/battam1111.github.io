import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import Footer from "@/components/Footer";
import ResearchSection from "@/components/ResearchSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
    <main className="bg-white text-black px-4 md:px-12 lg:px-24 py-12 space-y-32 max-w-5xl mx-auto">
      <HeroSection />
      <AboutMeSection />
      <ResearchSection />
      <BlogSection />
      <ContactSection />
    </main>
    <Footer />
    </>
  );
}
