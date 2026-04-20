import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/14AfZieaCexddfkaHXe7m00";

const benefits = [
  "10 personalized 45-minute coaching sessions",
  "Consistent support through every stage of healing",
  "A structured recovery plan tailored to you",
  "Priority scheduling with your chosen coach",
  "Save €91 vs. booking sessions individually",
];

const coaches = [
  {
    name: "Bruna",
    role: "Relationship & Attachment Coach",
    image: "/lovable-uploads/fcd8f7c5-6bdb-4624-9f54-70365fb58964.png",
  },
  {
    name: "Pascal",
    role: "Recovery Coach",
    image: "/lovable-uploads/4fbc4fcb-b5cf-4789-87e6-02b5b67ee9ab.png",
  },
];

const RecoveryPackage = () => {
  return (
    <section id="recovery-package" className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Deeper Healing
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            The 10-Session Recovery Package
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            For those ready to go beyond a single conversation — a complete journey
            of healing with the same coach by your side, every step of the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border overflow-hidden"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="grid md:grid-cols-5">
            {/* Left: Package details */}
            <div className="md:col-span-3 p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="font-body text-sm font-medium text-muted-foreground">
                  Complete Recovery Journey
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl md:text-5xl font-display font-semibold text-foreground">
                  €699
                </span>
                <span className="text-muted-foreground font-body text-sm line-through">
                  €790
                </span>
              </div>

              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </div>
                    <span className="font-body text-sm text-foreground/90">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Coach selection */}
            <div className="md:col-span-2 p-8 md:p-10 bg-muted/30">
              <h3 className="font-display font-semibold text-lg mb-1 text-center">
                Choose Your Coach
              </h3>
              <p className="font-body text-xs text-muted-foreground text-center mb-6">
                Begin your 10-session journey
              </p>

              <div className="space-y-3">
                {coaches.map((coach) => (
                  <a
                    key={coach.name}
                    href={STRIPE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
                  >
                    <img
                      src={coach.image}
                      alt={`${coach.name} — ${coach.role}`}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-sm text-foreground">
                        With {coach.name}
                      </p>
                      <p className="font-body text-[11px] text-muted-foreground truncate">
                        {coach.role}
                      </p>
                    </div>
                    <span className="font-body text-xs font-medium text-primary group-hover:translate-x-0.5 transition-transform">
                      Book →
                    </span>
                  </a>
                ))}
              </div>

              <p className="font-body text-[11px] text-muted-foreground text-center mt-5">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecoveryPackage;
