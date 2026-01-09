import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import AboutPreview from "@/components/AboutPreview";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import ProgramsPreview from "@/components/ProgramsPreview";
import StatsSection from "@/components/StatsSection";
import FloatingWidget from "@/components/ui/FloatingWidget";
import ScrollProgress from "@/components/ui/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <FloatingWidget />
      <main>
        <Hero />
        <Newsletter />
        <AboutPreview />
        <StatsSection />
        <Philosophy />
        <ProgramsPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
