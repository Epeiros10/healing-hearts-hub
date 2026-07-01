import { motion } from "framer-motion";
import { Heart, Sparkles, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14">

          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Meet Your Coach
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Relationships are hard. You're not alone.
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A certified relationship and attachment coach walking beside couples through conflict, disconnection, and heartbreak.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 border border-border max-w-xl mx-auto"
          style={{ boxShadow: "var(--shadow-soft)" }}>

          <div className="relative mb-6">
            <img
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
              alt="Bruna - Certified Relationship Coach"
              className="rounded-2xl w-full max-w-xs mx-auto object-cover aspect-square"
              style={{ boxShadow: "var(--shadow-warm)" }} src="/lovable-uploads/fcd8f7c5-6bdb-4624-9f54-70365fb58964.webp" />

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-xl px-4 py-2 font-body text-sm font-medium whitespace-nowrap">
              Certified Relationship Coach 💛
            </div>
          </div>
          <h3 className="text-2xl font-display font-semibold mb-3 text-center">Hi, I'm Bruna.</h3>
          <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
            <p>
              I work with couples and individuals navigating the messy, tender parts
              of love, communication breakdowns, disconnection, attachment wounds, and heartbreak.
            </p>
            <p>
              As a certified relationship and attachment coach, I help people understand
              their patterns, rebuild trust, and create the kind of connection that actually feels safe.
            </p>
            <p className="text-foreground font-medium italic font-display text-base">
              "Love isn't always easy. But it can get lighter."
            </p>
          </div>
          <div className="flex gap-4 mt-6 justify-center">
            {[
            { icon: Heart, label: "Compassionate" },
            { icon: Sparkles, label: "Transformative" }].
            map(({ icon: Icon, label }) =>
            <div key={label} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </div>
            )}
          </div>
          <div className="mt-6 text-center space-y-3">
            <p className="text-sm font-body font-semibold text-foreground">
              €79 <span className="text-muted-foreground font-normal">/ 45-min emergency talk session</span>
            </p>
            <a
              href="https://cal.com/bruna-friggi-zjnhgp/45-min-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity">

              <Calendar className="w-4 h-4" />
              Book Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default About;
