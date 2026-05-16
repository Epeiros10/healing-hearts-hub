import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto mb-10">
            Have a question, feedback, or just need someone to point you in the right direction? We'd love to hear from you.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-border bg-card hover:border-primary/30 transition-colors">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:bfriggi93@gmail.com"
              className="text-base font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              bfriggi93@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
