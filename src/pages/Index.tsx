import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import AIChat from "@/components/AIChat";
import Coaching from "@/components/Coaching";
import RecoveryPackage from "@/components/RecoveryPackage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <AIChat />
      <Coaching />
      <RecoveryPackage />
      <Footer />
    </div>
  );
};

export default Index;
