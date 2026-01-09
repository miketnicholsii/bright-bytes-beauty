import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import AboutPreview from "@/components/AboutPreview";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import ProgramsPreview from "@/components/ProgramsPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Newsletter />
        <AboutPreview />
        <Philosophy />
        <ProgramsPreview />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
