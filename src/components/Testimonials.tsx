import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "After my 5-year relationship ended, I felt completely lost. Bruna helped me understand my attachment patterns and gave me the tools to heal. I'm stronger now than I ever was.",
    coach: "Worked with Bruna",
    stars: 5,
  },
  {
    name: "James T.",
    text: "Pascal's no-contact framework saved me. I was constantly checking my ex's social media, spiraling. He gave me structure, accountability, and real talk when I needed it most.",
    coach: "Worked with Pascal",
    stars: 5,
  },
  {
    name: "Elena R.",
    text: "I never thought I'd say this, but my breakup was the best thing that happened to me. The coaching helped me rediscover who I am outside of a relationship.",
    coach: "Worked with Bruna",
    stars: 5,
  },
  {
    name: "David K.",
    text: "The AI chat got me through the hardest nights when I couldn't sleep. And then the 1:1 sessions with Pascal took my recovery to another level. Truly life-changing.",
    coach: "Worked with Pascal",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Real Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            They healed. So can you.
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Hear from people who turned their heartbreak into their breakthrough.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 border border-border relative"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-5 right-5" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold text-sm">{t.name}</span>
                <span className="text-xs font-body text-muted-foreground">{t.coach}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
