import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marta & Luis",
    location: "Lisbon",
    when: "2 months ago",
    text: "We were stuck in the same argument for over a year. After a few sessions with Bruna, we finally understood what was underneath it. We're talking again like teammates, not opponents.",
    coach: "Couples coaching with Bruna",
    stars: 5,
  },
  {
    name: "Sarah M.",
    location: "London",
    when: "4 months ago",
    text: "Bruna helped me see my anxious attachment for the first time without shame. She gave me practical tools I actually use in my relationship, not just theory. I feel calmer and more secure.",
    coach: "1:1 coaching with Bruna",
    stars: 5,
  },
  {
    name: "Ana & Tomás",
    location: "Porto",
    when: "6 weeks ago",
    text: "After a breach of trust, we didn't know if we could come back from it. Bruna held space for both of us without taking sides and gave us a real roadmap to rebuild. We're closer now than before.",
    coach: "Couples coaching with Bruna",
    stars: 5,
  },
  {
    name: "David K.",
    location: "Berlin",
    when: "3 weeks ago",
    text: "I booked a session with Bruna on one of the worst days I'd had in months. One call genuinely shifted things, I left with a plan, and for the first time in weeks I could actually breathe.",
    coach: "1:1 coaching with Bruna",
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
              <div className="flex items-end justify-between gap-3">
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-sm">{t.name}</span>
                  <span className="text-xs font-body text-muted-foreground">
                    {t.location} · {t.when}
                  </span>
                </div>
                <span className="text-xs font-body text-muted-foreground text-right">{t.coach}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
