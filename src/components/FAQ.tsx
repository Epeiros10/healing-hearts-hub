import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is this therapy?",
    a: "No — and that's an important distinction. Coaching isn't a substitute for therapy or clinical mental health care. We're here to walk beside you through heartbreak with compassion, practical tools, and accountability. If you're navigating trauma or a mental health condition, we'll always encourage you to also work with a licensed therapist.",
  },
  {
    q: "How is coaching different from talking to a friend?",
    a: "Friends are wonderful, but they're often too close to be objective — and they get tired of hearing the same story. As certified coaches who've been through heartbreak ourselves, we hold a focused, judgment-free space, ask the questions no one else will, and help you move forward instead of looping in the same pain.",
  },
  {
    q: "What if I'm not ready to talk to someone?",
    a: "That's completely okay. You can start by chatting with our AI companion — it's free, private, and available any time of day or night. When (and if) you're ready for a 1:1 session, we'll be here. No pressure, no timeline. Healing happens at your pace.",
  },
  {
    q: "How much does a session cost?",
    a: "A 45-minute 1:1 coaching call with Bruna or Pascal is €79. One session is often enough to feel lighter, clearer, and more grounded — and many people return when they need extra support along the way.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            You're not the only one wondering.
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            A few honest answers to the questions we hear most often.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-4 md:p-8 border border-border"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
