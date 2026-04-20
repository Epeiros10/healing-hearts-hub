import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Calendar } from "lucide-react";
import brunaImg from "@/assets/bruna-coach.jpg";
import pascalImg from "@/assets/pascal-coach.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14">

          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Meet Your Coaches
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            We've been where you are.
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Two coaches who understand heartbreak firsthand — here to walk beside you on your healing journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Bruna */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
            style={{ boxShadow: "var(--shadow-soft)" }}>

            <div className="relative mb-6">
              <img

                alt="Bruna - Relationship & Attachment Coach"
                className="rounded-2xl w-full max-w-xs mx-auto object-cover aspect-square"
                style={{ boxShadow: "var(--shadow-warm)" }} src="/lovable-uploads/fcd8f7c5-6bdb-4624-9f54-70365fb58964.png" />

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-xl px-4 py-2 font-body text-sm font-medium whitespace-nowrap">
                Relationship Coach 💛
              </div>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-3 text-center">Hi, I'm Bruna.</h3>
            <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                I know how it feels. The sleepless nights, the constant replaying
                of memories. I've been there — and I found my way through.
              </p>
              <p>
                As a relationship and attachment coach, I specialize in helping
                people navigate heartbreak, understand their attachment patterns,
                and emerge stronger than they ever imagined.
              </p>
              <p className="text-foreground font-medium italic font-display text-base">
                "You're not broken. You're healing."
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
                href="https://calendly.com/brunacoach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity">
                
                <Calendar className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </motion.div>

          {/* Pascal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-2xl p-8 border border-border"
            style={{ boxShadow: "var(--shadow-soft)" }}>

            <div className="relative mb-6">
              <img

                alt="Pascal - Recovery Coach"
                className="rounded-2xl w-full max-w-xs mx-auto object-cover aspect-square"
                style={{ boxShadow: "var(--shadow-warm)" }} src="/lovable-uploads/4fbc4fcb-b5cf-4789-87e6-02b5b67ee9ab.png" />

              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground rounded-xl px-4 py-2 font-body text-sm font-medium whitespace-nowrap">
                Recovery Coach 🤍
              </div>
            </div>
            <h3 className="text-2xl font-display font-semibold mb-3 text-center">Hi, I'm Pascal.</h3>
            <div className="space-y-3 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                Breakups can shake everything you thought you knew about yourself.
                I've been through that darkness — and I know the way out.
              </p>
              <p>
                I help people rebuild their sense of self, master the no-contact
                journey, and turn heartbreak into the beginning of their
                strongest chapter.
              </p>
              <p className="text-foreground font-medium italic font-display text-base">
                "Your pain is proof you loved deeply. Now love yourself."
              </p>
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              {[
              { icon: Shield, label: "Safe Space" },
              { icon: Sparkles, label: "Action-Oriented" }].
              map(({ icon: Icon, label }) =>
              <div key={label} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <Icon className="w-4 h-4 text-secondary" />
                  {label}
                </div>
              )}
            </div>
            <div className="mt-6 text-center space-y-3">
              <p className="text-sm font-body font-semibold text-foreground">
                €79 <span className="text-muted-foreground font-normal">/ 45-min emergency talk session</span>
              </p>
              <a
                href="https://cal.com/pascal-niggli-uenxj0/45-min-coaching-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity">
                
                <Calendar className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default About;