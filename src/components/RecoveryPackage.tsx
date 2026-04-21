import { motion } from "framer-motion";
import { Check, Zap, Sprout, Sparkles } from "lucide-react";

const STRIPE_LINK_10 = "https://buy.stripe.com/14AfZieaCexddfkaHXe7m00";
const STRIPE_LINK_STARTER = "https://buy.stripe.com/eVqbJ2feGcp5cbg8zPe7m01";

const coaches = [
  {
    name: "Bruna",
    role: "Relationship & Attachment Coach",
    image: "/lovable-uploads/fcd8f7c5-6bdb-4624-9f54-70365fb58964.png",
    calLink: "https://cal.com/bruna-friggi-zjnhgp/45-min-call",
  },
  {
    name: "Pascal",
    role: "Recovery Coach",
    image: "/lovable-uploads/4fbc4fcb-b5cf-4789-87e6-02b5b67ee9ab.png",
    calLink: "https://cal.com/pascal-niggli-uenxj0/45-min-coaching-call",
    emergencyLink: "/book/pascal-emergency",
  },
];

type Offering = {
  icon: typeof Zap;
  tag: string;
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  originalPrice?: string;
  benefits: string[];
  ctaLabel: string;
  getHref: (coachIndex: number) => string;
  highlight?: boolean;
};

const offerings: Offering[] = [
  {
    icon: Zap,
    tag: "Crisis Mode",
    title: "Emergency Call",
    description: "For when you need to talk to someone — fast. A single 45-minute call to help you through the hardest moments.",
    price: "€79",
    priceNote: "/ 45 min",
    benefits: [
      "Same-week availability",
      "One focused 45-minute call",
      "Immediate emotional support",
      "No commitment required",
    ],
    ctaLabel: "Book with",
    getHref: (i) => coaches[i].emergencyLink ?? coaches[i].calLink,
  },
  {
    icon: Sprout,
    tag: "Low Commitment",
    title: "Starter Pack",
    description: "Three sessions to begin building momentum. A gentle entry point to explore what deeper work could look like.",
    price: "€210",
    priceNote: "€70 / session",
    benefits: [
      "3 personalized 45-min sessions",
      "Save €27 vs. individual bookings",
      "Build early momentum",
      "Perfect first step into coaching",
    ],
    ctaLabel: "Start with",
    getHref: () => STRIPE_LINK_STARTER,
  },
  {
    icon: Sparkles,
    tag: "Deeper Healing",
    title: "10-Session Recovery Package",
    description: "A complete journey of healing with the same coach by your side, every step of the way.",
    price: "€699",
    priceNote: "€69.90 / session",
    originalPrice: "€790",
    benefits: [
      "10 personalized 45-min sessions",
      "Structured recovery plan tailored to you",
      "Priority scheduling with your coach",
      "Save €91 vs. individual sessions",
    ],
    ctaLabel: "Begin with",
    getHref: () => STRIPE_LINK_10,
    highlight: true,
  },
];

const RecoveryPackage = () => {
  return (
    <section id="recovery-package" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Choose Your Path
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Find the Support That Fits Where You Are
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Whether you need immediate support or a structured journey, we have a path for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((offering, idx) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col rounded-3xl border overflow-hidden ${
                  offering.highlight
                    ? "border-primary/40 bg-card"
                    : "border-border bg-card"
                }`}
                style={{ boxShadow: offering.highlight ? "var(--shadow-soft)" : undefined }}
              >
                {offering.highlight && (
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary text-[11px] font-body font-medium px-2.5 py-1 rounded-full">
                    Most complete
                  </div>
                )}

                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <span className="font-body text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {offering.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
                    {offering.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-5">
                    {offering.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="text-3xl font-display font-semibold text-foreground">
                      {offering.price}
                    </span>
                    {offering.originalPrice && (
                      <span className="text-muted-foreground font-body text-sm line-through">
                        {offering.originalPrice}
                      </span>
                    )}
                    {offering.priceNote && (
                      <span className="text-muted-foreground font-body text-xs">
                        {offering.priceNote}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {offering.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                        </div>
                        <span className="font-body text-sm text-foreground/90">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 pt-2 border-t border-border">
                    <p className="font-body text-xs text-muted-foreground mb-2">
                      Choose your coach:
                    </p>
                    {coaches.map((coach, i) => (
                      <a
                        key={coach.name}
                        href={offering.getHref(i)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-background border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
                      >
                        <img
                          src={coach.image}
                          alt={`${coach.name} — ${coach.role}`}
                          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-display font-semibold text-sm text-foreground truncate">
                            {offering.ctaLabel} {coach.name}
                          </p>
                        </div>
                        <span className="font-body text-xs font-medium text-primary group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="font-body text-xs text-muted-foreground text-center mt-8">
          Secure checkout powered by Stripe · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default RecoveryPackage;
