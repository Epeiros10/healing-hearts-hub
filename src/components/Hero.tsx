import { motion } from "framer-motion";
import { Heart, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Warm sunrise symbolizing hope and healing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-primary font-body text-sm font-medium tracking-wide uppercase mb-6">
            <Heart className="w-4 h-4" fill="currentColor" /> You will heal
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight mb-6">
            Heartbreak is
            <span className="italic text-primary"> temporary.</span>
            <br />
            Your strength is{" "}
            <span className="italic text-secondary">forever.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto mb-10 leading-relaxed">
            You're going through one of the hardest things a person can face.
            But you don't have to do it alone. Let's walk this path together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ai-chat"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-body font-medium text-base hover:opacity-90 transition-opacity"
              style={{ boxShadow: "var(--shadow-warm)" }}
            >
              Talk to AI Companion
            </a>
            <a
              href="#coaching"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-primary/20 text-foreground font-body font-medium text-base hover:bg-primary/5 transition-colors"
            >
              Book 1:1 Coaching
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
