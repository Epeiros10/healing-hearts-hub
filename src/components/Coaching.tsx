import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Video, Calendar } from "lucide-react";
import BookingDialog from "./BookingDialog";

const services = [
  {
    icon: MessageCircle,
    title: "Chat with Me",
    description:
      "Text-based support where you can share at your own pace. Perfect for when you need someone who truly understands.",
    cta: "Start Chatting",
  },
  {
    icon: Phone,
    title: "Voice Call",
    description:
      "Sometimes you just need to hear a caring voice. Book a call and let's talk through what you're feeling.",
    cta: "Book a Call",
  },
  {
    icon: Video,
    title: "Video Session",
    description:
      "Face-to-face coaching sessions where we dive deep into your healing journey and build a personalized recovery plan.",
    cta: "Book a Session",
  },
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
            1:1 Coaching with Bruna & Pascal
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Personalized Support, Just for You
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Everyone's healing journey is unique. Work with Bruna or Pascal —
            choose the way you'd like to connect, and let's start working through this together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors group"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:underline"
              >
                {service.cta} →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-2xl px-6 py-4">
            <Calendar className="w-5 h-5 text-primary" />
            <p className="font-body text-sm text-foreground">
              <span className="font-medium">Not sure where to start?</span>{" "}
              Book a free 15-minute discovery call.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coaching;
