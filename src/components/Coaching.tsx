import { useState } from "react";
import { motion } from "framer-motion";
import { Video, Calendar, Heart, Compass, Sparkles, Check } from "lucide-react";
import BookingDialog from "./BookingDialog";

const highlights = [
  {
    icon: Heart,
    title: "A safe space to feel",
    description: "Be heard without judgment. We hold space for whatever you're carrying, grief, anger, confusion, or hope.",
  },
  {
    icon: Compass,
    title: "Clarity on your next step",
    description: "Walk away from each session with a clear direction and gentle, practical tools you can actually use.",
  },
  {
    icon: Sparkles,
    title: "A personalized recovery plan",
    description: "Tailored to your story. Together we shape a path that honors your pace and your healing.",
  },
];

const includes = [
  "45-minute private video session with Bruna",
  "Same-day booking possible",
  "100% confidential & judgment-free",
];

const Coaching = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section id="coaching" className="py-24 px-4 bg-card">
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            1:1 Coaching with Bruna
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Personalized Support, Just for You
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Everyone's healing journey is unique. Work face-to-face with Bruna
            in a private video session, and let's start moving through this together.
          </p>

        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-background rounded-2xl p-7 border border-border hover:border-primary/30 transition-colors"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature offer card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-3xl border border-border overflow-hidden"
          style={{ boxShadow: "var(--shadow-warm)" }}
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left: details */}
            <div className="md:col-span-3 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium tracking-wide uppercase mb-5">
                <Video className="w-3.5 h-3.5" />
                Private Video Session
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3">
                A 45-minute session, just for you
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                Face-to-face, from wherever you are. We'll listen deeply, help you make sense
                of what you're feeling, and build a personalized recovery plan together.
              </p>

              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
                style={{ boxShadow: "var(--shadow-warm)" }}
              >
                Book Your Session, €79
              </button>
            </div>

            {/* Right: price panel */}
            <div className="md:col-span-2 bg-primary/5 border-t md:border-t-0 md:border-l border-border p-8 md:p-10 flex flex-col justify-center">
              <p className="font-body text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Single session
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-display font-semibold text-foreground">€79</span>
                <span className="font-body text-sm text-muted-foreground">/ 45 min</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Emergency calls available today.
              </p>
              <div className="h-px bg-border mb-6" />
              <p className="font-body text-sm text-foreground leading-relaxed italic">
                "You don't have to walk through this alone."
              </p>
              <p className="font-body text-xs text-muted-foreground mt-2">
               , Bruna
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Coaching;
