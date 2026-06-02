import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecoveryQuiz from "@/components/RecoveryQuiz";
import { useEffect } from "react";

const Quiz = () => {
  useEffect(() => {
    document.title = "Breakup Recovery Quiz: Where Are You in Your Healing?";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Take our free 2-minute breakup recovery quiz to find out which phase of healing you're in and what helps most right now.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-2xl mx-auto px-4 text-center mb-4">
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Free Quiz · 2 minutes
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Breakup Recovery Quiz
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-lg">
            Where are you in your healing journey? Seven gentle questions, one personalized answer.
          </p>
        </div>
        <RecoveryQuiz variant="page" />
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
