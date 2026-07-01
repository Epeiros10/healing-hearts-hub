import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What kind of coaching does Bruna offer?",
    a: "Bruna is a certified relationship and attachment coach. She works with couples on communication, conflict, and rebuilding trust and closeness, and with individuals on attachment patterns, dating, and breakup recovery. Each session is shaped around your situation, not a one-size-fits-all program.",
  },
  {
    q: "Do you work with couples, individuals, or both?",
    a: "Both. Couples come for help with recurring arguments, disconnection, trust after a rupture, or navigating a major life change together. Individuals come to understand their patterns, work through a breakup, or prepare for a healthier next relationship.",
  },
  {
    q: "Is this therapy?",
    a: "No, and that's an important distinction. Coaching isn't a substitute for therapy or clinical mental health care. Bruna walks beside you with compassion, practical tools, and accountability. If you're navigating trauma or a mental health condition, she'll always encourage you to also work with a licensed therapist.",
  },
  {
    q: "How is coaching different from talking to a friend?",
    a: "Friends are wonderful, but they're often too close to be objective. As a certified coach, Bruna holds a focused, judgment-free space, asks the questions no one else will, and helps you and your partner move forward instead of looping in the same pain.",
  },
  {
    q: "How much does a session cost?",
    a: "A 45-minute 1:1 coaching call with Bruna is €79, whether you come solo or as a couple. One session is often enough to feel clearer and more grounded, and many people return when they want deeper support.",
  },
  {
    q: "How quickly can we book a session?",
    a: "Usually within the same day. Bruna keeps regular availability, and you can see real-time open slots when you book through her calendar. If you're in an urgent moment, grab the soonest spot.",
  },
  {
    q: "What happens after the first call?",
    a: "You'll leave with more clarity, a little more breathing room, and a few practical next steps to focus on together. There's no obligation to continue, but many couples and individuals book follow-up sessions to keep the momentum going.",
  },
  {
    q: "Do you offer ongoing coaching packages?",
    a: "Yes. Beyond one-off sessions, many clients work with Bruna across a series of calls to go deeper, on communication, attachment, rebuilding trust, no-contact, or preparing for what's next. Just mention it on your first call and she'll tailor a plan with you.",
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
          className="bg-card rounded-2xl p-6 md:p-10 border border-border"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-display text-base md:text-lg font-medium text-left">
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
