import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield, Clock, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BookingDialog from "@/components/BookingDialog";

const coaches = [
  {
    name: "Bruna",
    role: "Relationship & Attachment Coach",
    image: "/lovable-uploads/fcd8f7c5-6bdb-4624-9f54-70365fb58964.png",
    calendly: "#contact",
    style: "Warm, intuitive, specializing in attachment patterns and emotional processing.",
  },
  {
    name: "Pascal",
    role: "Recovery Coach",
    image: "/lovable-uploads/4fbc4fcb-b5cf-4789-87e6-02b5b67ee9ab.png",
    calendly: "#contact",
    style: "Grounded, practical, focused on rebuilding confidence and moving forward.",
  },
];

const TalkToSomeone = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal top bar */}
      <div className="w-full px-4 py-4 flex items-center justify-between max-w-3xl mx-auto">
        <Link to="/" className="flex flex-col items-center gap-0.5 leading-none">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <path d="M16 28C16 28 4 19 4 12a6 6 0 0 1 12-1" className="stroke-primary" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M16 28C16 28 28 19 28 12a6 6 0 0 0-12-1" className="stroke-primary" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M16 7 L15 12 L17 16 L15 20 L16 28" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="uppercase tracking-[0.2em] text-foreground font-normal text-[10px] font-sans">
            Break Up Recovery
          </span>
        </Link>
        <Link to="/" className="text-xs text-muted-foreground hover:text-foreground font-body transition-colors">
          ← Back to site
        </Link>
      </div>

      {/* Hero */}
      <section className="px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-body font-medium mb-6">
              <Clock className="w-3.5 h-3.5" />
              Available within 24 hours
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-semibold leading-tight mb-5">
              You don't have to go
              <br />
              through this alone
            </h1>

            <p className="text-muted-foreground font-body text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
              Talk to someone who truly understands heartbreak. 
              No judgment, no rushed advice — just real support 
              when you need it most.
            </p>

            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground font-body mb-2">
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-primary" /> 45-minute session
              </span>
              <span className="text-border">|</span>
              <span className="font-medium text-foreground">€79</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coach cards */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-sm text-muted-foreground font-body mb-8">
            Choose your coach
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {coaches.map((coach, i) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors group"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={`${coach.name} — ${coach.role}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-display font-semibold mb-1">{coach.name}</h2>
                  <p className="text-primary text-xs font-body font-medium uppercase tracking-wide mb-3">
                    {coach.role}
                  </p>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                    {coach.style}
                  </p>
                  <a
                    href={coach.calendly}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Book a Session with {coach.name}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { icon: Shield, label: "100% Confidential" },
              { icon: Heart, label: "Empathy First" },
              { icon: Clock, label: "Book Within 24h" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 py-4">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-xs font-body text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI chat fallback */}
      <section className="px-4 pb-20">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-card border border-border rounded-2xl p-6">
            <MessageCircle className="w-6 h-6 text-primary mx-auto mb-3" />
            <p className="font-display text-base font-semibold mb-2">
              Not ready to book?
            </p>
            <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
              Talk to our AI companion first — it's free, anonymous, and available 24/7.
            </p>
            <Link
              to="/#ai-chat"
              className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium hover:underline"
            >
              Start chatting now →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 pb-8">
        <div className="max-w-2xl mx-auto text-center">
          <Link
            to="/privacy"
            className="text-xs text-muted-foreground hover:text-foreground font-body transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default TalkToSomeone;
