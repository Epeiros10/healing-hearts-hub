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
    a: "That's completely okay. There's no pressure and no timeline — healing happens at your pace. When you're ready, even just reaching out with a short message is a meaningful first step. We'll meet you wherever you are.",
  },
  {
    q: "How much does a session cost?",
    a: "A 45-minute 1:1 coaching call with Bruna or Pascal is €79. One session is often enough to feel lighter, clearer, and more grounded — and many people return when they need extra support along the way.",
  },
  {
    q: "How quickly can I book a session?",
    a: "Usually within the same day. Bruna and Pascal both keep regular availability, and you can see real-time open slots when you book through their calendars. If you're in an urgent moment, grab the soonest spot — we'll make it work.",
  },
  {
    q: "Can I choose my coach?",
    a: "Absolutely. When you click to book, you'll be able to pick between Bruna and Pascal. Read a little about each of them and go with whoever resonates most — there's no wrong choice, and you can always switch later.",
  },
  {
    q: "What happens after the first call?",
    a: "You'll leave with more clarity, a little more breathing room, and a few practical next steps to focus on. There's no obligation to continue, but many people book follow-up sessions to keep the momentum going as they rebuild.",
  },
  {
    q: "Do you offer ongoing support programs?",
    a: "Yes. Beyond one-off sessions, many clients work with us across a series of calls to go deeper — through no-contact, rebuilding self-worth, or preparing for what's next. Just mention it on your first call and your coach will tailor a plan with you.",
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
