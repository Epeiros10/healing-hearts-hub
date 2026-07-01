import { useState } from "react";
import { motion } from "framer-motion";
import { Video, Heart, Compass, Sparkles, Check, CalendarCheck, MessageCircle, CalendarX } from "lucide-react";
import BookingDialog from "./BookingDialog";

const highlights = [
  {
    icon: Heart,
    title: "A space to be honest",
    description: "Whether you come alone or with your partner, this is a place to speak plainly. No performing, no judgment, no taking sides.",
  },
  {
    icon: Compass,
    title: "Clarity on your next step",
    description: "Leave each session with a clear focus and small, practical tools you can actually use in your relationship this week.",
  },
  {
    icon: Sparkles,
    title: "A plan tailored to you",
    description: "Couples work, attachment patterns, conscious dating, or breakup recovery, we shape a path that fits where you actually are.",
  },
];

const includes = [
  "45-minute private video session with Bruna",
  "Individual or couples",
  "Same-week booking possible",
  "100% confidential & judgment-free",
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
            1:1 Coaching with Bruna
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Personalized Support, Just for You
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Every relationship, and every heart, is different. Work face-to-face with Bruna
            in a private video session and let's move through this together.
          </p>

        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-background rounded-2xl p-7 border border-border hover:border-primary/30 transition-colors"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature offer card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-3xl border border-border overflow-hidden"
          style={{ boxShadow: "var(--shadow-warm)" }}
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Left: details */}
            <div className="md:col-span-3 p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-body font-medium tracking-wide uppercase mb-5">
                <Video className="w-3.5 h-3.5" />
                Private Video Session
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3">
                A 45-minute session, just for you or you both
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                Face-to-face, from wherever you are. Bruna listens deeply, helps you make sense
                of what's happening in your relationship, and builds a personalized plan with you.
              </p>

              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-foreground">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body font-medium text-sm hover:opacity-90 transition-opacity"
                style={{ boxShadow: "var(--shadow-warm)" }}
              >
                Book Your Session, €79
              </button>
            </div>

            {/* Right: price panel */}
            <div className="md:col-span-2 bg-primary/5 border-t md:border-t-0 md:border-l border-border p-8 md:p-10 flex flex-col justify-center">
              <p className="font-body text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Single session
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-display font-semibold text-foreground">€79</span>
                <span className="font-body text-sm text-muted-foreground">/ 45 min</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Individual or couples, same-week availability.
              </p>
              <div className="h-px bg-border mb-6" />
              <p className="font-body text-sm text-foreground leading-relaxed italic">
                "You don't have to walk through this alone."
              </p>
              <p className="font-body text-xs text-muted-foreground mt-2">
               , Bruna
              </p>

            </div>
          </div>
        </motion.div>

        {/* How it works: scheduling, first session, cancellation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
              How it works
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3">
              What to Expect, Step by Step
            </h3>
            <p className="text-muted-foreground font-body max-w-xl mx-auto text-sm">
              Simple to book, easy to prepare for, and flexible if life gets in the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* How to schedule */}
            <div
              className="bg-background rounded-2xl p-7 border border-border"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <CalendarCheck className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">
                How to schedule
              </h4>
              <ol className="space-y-2.5 font-body text-sm text-foreground/90 list-decimal list-inside">
                <li>Click any "Book it now" button on the page.</li>
                <li>Pick a time that works for you in Bruna's calendar.</li>
                <li>Enter your name, email, and a short note about your situation.</li>
                <li>You'll get an instant confirmation with the video call link.</li>
              </ol>
              <p className="font-body text-xs text-muted-foreground mt-4">
                Same-week availability. Sessions are held on Google Meet or Zoom.
              </p>
            </div>

            {/* First session */}
            <div
              className="bg-background rounded-2xl p-7 border border-border"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">
                Your first session
              </h4>
              <ul className="space-y-2.5 font-body text-sm text-foreground/90">
                <li className="flex gap-2"><span className="text-primary">·</span> A warm welcome, no pressure to have it all figured out.</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Bruna listens to what's happening and what you want to change.</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Together you name one clear focus for the session.</li>
                <li className="flex gap-2"><span className="text-primary">·</span> You leave with 1-2 practical tools to use this week.</li>
              </ul>
              <p className="font-body text-xs text-muted-foreground mt-4">
                Come as you are, tissues, notebook, or partner welcome.
              </p>
            </div>

            {/* Cancellation */}
            <div
              className="bg-background rounded-2xl p-7 border border-border"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <CalendarX className="w-5 h-5 text-primary" />
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">
                Rescheduling & cancellation
              </h4>
              <ul className="space-y-2.5 font-body text-sm text-foreground/90">
                <li className="flex gap-2"><span className="text-primary">·</span> Reschedule or cancel free up to 24 hours before your session.</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Use the link in your confirmation email, no back-and-forth needed.</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Under 24 hours: the session is counted as held, but one courtesy reschedule per client is offered when life happens.</li>
                <li className="flex gap-2"><span className="text-primary">·</span> Packs (3 and 10 sessions) are valid for 6 months from purchase.</li>
              </ul>
              <p className="font-body text-xs text-muted-foreground mt-4">
                Questions? Email hello@couplescoachingwithbruna.com.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Coaching;
