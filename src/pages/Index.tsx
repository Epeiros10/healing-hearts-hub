import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Coaching from "@/components/Coaching";
import RecoveryPackage from "@/components/RecoveryPackage";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Coaching />
      <RecoveryPackage />
      <ContactSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
