import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import AIChat from "@/components/AIChat";
import Coaching from "@/components/Coaching";
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
      <Footer />
    </div>
  );
};

export default Index;
