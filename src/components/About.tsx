import { motion } from "framer-motion";
import { Heart, Sparkles, Shield } from "lucide-react";
import brunaImg from "@/assets/bruna-coach.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={brunaImg}
                alt="Bruna - Relationship & Attachment Coach"
                className="rounded-2xl w-full max-w-sm mx-auto object-cover aspect-square"
                style={{ boxShadow: "var(--shadow-warm)" }}
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-4 py-2 font-body text-sm font-medium">
                Relationship Coach 💛
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
              Meet Your Coach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-5">
              Hi, I'm Bruna.
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                I know how it feels. The sleepless nights, the constant replaying
                of memories, the ache that seems like it will never end. I've
                been there — and I found my way through.
              </p>
              <p>
                As a relationship and attachment coach, I specialize in helping
                people navigate the painful journey of heartbreak. I'll help you
                understand your attachment patterns, build healthier
                relationships with yourself, and emerge from this stronger than
                you ever imagined.
              </p>
              <p className="text-foreground font-medium italic font-display text-lg">
                "You're not broken. You're healing. And healing is brave."
              </p>
            </div>

            <div className="flex gap-6 mt-8">
              {[
                { icon: Heart, label: "Compassionate" },
                { icon: Sparkles, label: "Transformative" },
                { icon: Shield, label: "Safe Space" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
