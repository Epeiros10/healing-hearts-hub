import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Coaching from "@/components/Coaching";
import RecoveryPackage from "@/components/RecoveryPackage";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

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
      <Footer />
    </div>
  );
};

export default Index;
