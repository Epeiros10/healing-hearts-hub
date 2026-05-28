import { useState } from "react";
import { motion } from "framer-motion";
import BookingDialog from "./BookingDialog";
import { ArrowDown, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Warm sunrise symbolizing hope and healing"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          


          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight mb-10">
            Heartbreak is
            <span className="italic text-primary"> temporary.</span>
            <br />
            Your strength is{" "}
            <span className="italic text-secondary">forever.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto mb-10 leading-relaxed">
            Private 1:1 coaching sessions with Bruna & Pascal. Emergency calls available today — €79.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-body font-medium text-base hover:opacity-90 transition-opacity"
              style={{ boxShadow: "var(--shadow-warm)" }}>
              Book Emergency Call — €79
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">

          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>);

};

export default Hero;