import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import BookingDialog from "./BookingDialog";

type Track =
  | "couples"
  | "trust"
  | "attachment"
  | "dating"
  | "breakup";

type Option = { label: string; track: Track };
type Question = { q: string; options: Option[] };

const questions: Question[] = [
  {
    q: "Which best describes your situation right now?",
    options: [
      { label: "My partner and I keep having the same fights", track: "couples" },
      { label: "We feel more like roommates than partners", track: "couples" },
      { label: "Trust was broken and we're trying to rebuild", track: "trust" },
      { label: "I keep repeating the same patterns in relationships", track: "attachment" },
      { label: "I'm single and want to date more consciously", track: "dating" },
      { label: "I'm going through or recovering from a breakup", track: "breakup" },
    ],
  },
  {
    q: "When something difficult comes up in your relationship (or last one), you tend to:",
    options: [
      { label: "Push for connection and reassurance", track: "attachment" },
      { label: "Shut down or need space", track: "attachment" },
      { label: "Try to talk it out calmly but it escalates", track: "couples" },
      { label: "Feel suspicious or on edge", track: "trust" },
      { label: "Avoid dating altogether", track: "dating" },
      { label: "Spiral thinking about my ex", track: "breakup" },
    ],
  },
  {
    q: "What feels most out of reach right now?",
    options: [
      { label: "Feeling heard by my partner", track: "couples" },
      { label: "Trusting my partner (or myself) again", track: "trust" },
      { label: "Feeling secure without needing constant reassurance", track: "attachment" },
      { label: "Meeting people I actually connect with", track: "dating" },
      { label: "Imagining a future without my ex", track: "breakup" },
    ],
  },
  {
    q: "How does your body feel most days?",
    options: [
      { label: "Tense, especially around my partner", track: "couples" },
      { label: "Guarded, like I'm bracing for something", track: "trust" },
      { label: "Anxious or hyper-aware in relationships", track: "attachment" },
      { label: "Flat, disconnected, unmotivated to date", track: "dating" },
      { label: "Heavy, tired, or numb since the breakup", track: "breakup" },
    ],
  },
  {
    q: "How often do you and the important people in your life truly connect?",
    options: [
      { label: "Rarely, we're on autopilot", track: "couples" },
      { label: "It's there but shaky, I'm still wary", track: "trust" },
      { label: "It depends on my mood or theirs", track: "attachment" },
      { label: "I don't have that connection right now", track: "dating" },
      { label: "I lost the one person I had it with", track: "breakup" },
    ],
  },
  {
    q: "When you picture six months from now, what do you most want?",
    options: [
      { label: "A partnership that actually feels like teamwork", track: "couples" },
      { label: "To feel safe and trusting with my person again", track: "trust" },
      { label: "To feel calm and secure in myself", track: "attachment" },
      { label: "To be dating from a healed, clear place", track: "dating" },
      { label: "To feel like myself again after this breakup", track: "breakup" },
    ],
  },
  {
    q: "What kind of support feels most useful right now?",
    options: [
      { label: "Sessions with my partner and a coach", track: "couples" },
      { label: "A structured plan to rebuild trust", track: "trust" },
      { label: "Understanding my attachment patterns", track: "attachment" },
      { label: "Coaching on dating and choosing well", track: "dating" },
      { label: "Someone to help me through heartbreak", track: "breakup" },
    ],
  },
];

type Result = {
  track: Track;
  title: string;
  subtitle: string;
  description: string;
  helps: string[];
  recommendation: string;
};

const results: Record<Track, Result> = {
  couples: {
    track: "couples",
    title: "Your focus: Couples Communication",
    subtitle: "You still care, you're just stuck in the same loop.",
    description:
      "Most couples don't have a love problem, they have a communication problem. When the same arguments repeat, it's usually because unmet needs and old patterns are running the conversation. With the right tools, you can go from cycling through the same fight to actually being heard.",
    helps: [
      "Learning to name what you actually need",
      "Interrupting the fight cycle before it escalates",
      "Rebuilding warmth and everyday connection",
    ],
    recommendation: "Couples session with Bruna",
  },
  trust: {
    track: "trust",
    title: "Your focus: Rebuilding Trust",
    subtitle: "Trust doesn't rebuild by accident, it rebuilds by design.",
    description:
      "Whether trust was broken by a betrayal, a long stretch of disconnection, or a pattern you're both trying to change, this phase needs structure. Rebuilding trust is a series of repeatable, honest choices, not a single conversation. Coaching gives you a clear path.",
    helps: [
      "A shared framework for honesty and repair",
      "Boundaries that create safety, not walls",
      "Small daily practices that rebuild reliability",
    ],
    recommendation: "Couples session with Bruna",
  },
  attachment: {
    track: "attachment",
    title: "Your focus: Attachment Patterns",
    subtitle: "The pattern isn't you, it's what you learned about closeness.",
    description:
      "If you keep ending up in the same dynamic, anxious, avoidant, or on edge, it's usually attachment doing the driving. The good news: attachment patterns are learned, and they can be updated. This is one of the fastest, most life-changing areas of relationship coaching.",
    helps: [
      "Identifying your attachment pattern clearly",
      "Regulating your nervous system in relationships",
      "Choosing partners and responses from a secure place",
    ],
    recommendation: "1:1 session with Bruna",
  },
  dating: {
    track: "dating",
    title: "Your focus: Conscious Dating",
    subtitle: "Dating from clarity feels completely different than dating from lack.",
    description:
      "You don't need better apps, you need a clearer signal. Conscious dating is about knowing what you actually want, spotting green and red flags early, and staying grounded in yourself while getting to know someone. It turns dating from draining into curious.",
    helps: [
      "Getting clear on your non-negotiables",
      "Recognising patterns early, not months in",
      "Staying yourself while getting closer to someone",
    ],
    recommendation: "1:1 session with Bruna",
  },
  breakup: {
    track: "breakup",
    title: "Your focus: Post-Breakup Clarity",
    subtitle: "Heartbreak is real. It's also workable, especially with support.",
    description:
      "Breakup recovery is one of Bruna's coaching specialties. Whether you're in the early shock, deep grief, or slowly rebuilding, you don't have to figure it out alone. Structured, compassionate support can compress months of confusion into real clarity.",
    helps: [
      "Understanding the phase you're actually in",
      "Ending the loop of reaching out and regretting it",
      "Rebuilding identity and confidence from the inside",
    ],
    recommendation: "1:1 session with Bruna",
  },
};

interface RecoveryQuizProps {
  variant?: "section" | "page";
}

const RecoveryQuiz = ({ variant = "section" }: RecoveryQuizProps) => {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Track[]>([]);
  const [bookingOpen, setBookingOpen] = useState(false);

  const isDone = answers.length === questions.length;

  const computeResult = (): Result => {
    const counts: Record<Track, number> = {
      couples: 0,
      trust: 0,
      attachment: 0,
      dating: 0,
      breakup: 0,
    };
    answers.forEach((t) => counts[t]++);
    // First question is weighted a bit more by iterating naturally,
    // ties broken by the earliest answer's track.
    const sorted = (Object.entries(counts) as [Track, number][]).sort(
      (a, b) => b[1] - a[1]
    );
    const topCount = sorted[0][1];
    const tied = sorted.filter(([, c]) => c === topCount).map(([t]) => t);
    const winner = answers.find((a) => tied.includes(a)) ?? sorted[0][0];
    return results[winner];
  };

  const handleAnswer = (track: Track) => {
    const next = [...answers, track];
    setAnswers(next);
    if (step < questions.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 0) return;
    setAnswers(answers.slice(0, -1));
    setStep(step - 1);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
    setStarted(false);
  };

  const progress = isDone ? 100 : (step / questions.length) * 100;

  const wrapper =
    variant === "page"
      ? "py-16 px-4 bg-background"
      : "py-24 px-4 bg-secondary/30";

  return (
    <section id="quiz" className={wrapper}>
      <div className="max-w-2xl mx-auto">
        {variant === "section" && !started && !isDone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
              Free Quiz · 2 minutes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              Which Relationship Coaching Path Fits You?
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Seven honest questions to help you understand where you are, and which kind of coaching support will actually move the needle.
            </p>
          </motion.div>
        )}

        <div className="bg-card border border-border rounded-3xl p-6 sm:p-10" style={{ boxShadow: "var(--shadow-soft)" }}>
          <AnimatePresence mode="wait">
            {!started && !isDone && (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <span className="inline-block text-primary font-body text-[10px] font-medium tracking-[0.2em] uppercase mb-3 px-2.5 py-1 rounded-full bg-primary/10">
                  Coaching with Bruna
                </span>
                <h3 className="text-2xl font-display font-semibold mb-3">
                  Relationship Coaching Quiz
                </h3>
                <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
                  Couples, communication, trust, attachment, dating, or breakup recovery. Find the one thing worth focusing on first.
                </p>
                <button
                  onClick={() => setStarted(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Start the quiz
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground mt-4">No email required · Private · 7 questions</p>
              </motion.div>
            )}

            {started && !isDone && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">
                      Question {step + 1} of {questions.length}
                    </span>
                    <span className="text-xs font-body text-muted-foreground">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-6">
                  {questions[step].q}
                </h3>

                <div className="space-y-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.track)}
                      className="w-full text-left p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all font-body text-sm group"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="text-foreground/90">{opt.label}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </span>
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                )}
              </motion.div>
            )}

            {isDone && (() => {
              const result = computeResult();
              return (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-center mb-6">
                    <span className="inline-block text-primary font-body text-xs font-medium tracking-wide uppercase mb-3 px-3 py-1 rounded-full bg-primary/10">
                      Your Result
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold mb-3">
                      {result.title}
                    </h3>
                    <p className="text-muted-foreground font-body italic">
                      {result.subtitle}
                    </p>
                  </div>

                  <p className="font-body text-foreground/90 leading-relaxed mb-6">
                    {result.description}
                  </p>

                  <div className="bg-secondary/40 rounded-2xl p-5 mb-6">
                    <p className="font-body text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      What helps right now
                    </p>
                    <ul className="space-y-2.5">
                      {result.helps.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 font-body text-sm text-foreground/90">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="text-center mb-4">
                      <span className="inline-block text-primary font-body text-[10px] font-medium tracking-[0.2em] uppercase mb-2 px-2.5 py-1 rounded-full bg-primary/10">
                        Coaching with Bruna
                      </span>
                      <p className="font-body text-sm text-muted-foreground">
                        Based on your answers, the best next step is a{" "}
                        <span className="font-medium text-foreground">{result.recommendation}</span>.
                      </p>
                    </div>
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Book a session with Bruna
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleRestart}
                      className="mt-4 w-full inline-flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Retake the quiz
                    </button>

                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="font-body text-[11px] font-medium text-muted-foreground uppercase tracking-[0.2em] text-center mb-4">
                        Bruna's coaching specialties
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {[
                          "Couples communication",
                          "Rebuilding trust",
                          "Attachment patterns",
                          "Conscious dating",
                          "Breakup recovery",
                        ].map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-xs font-body text-foreground/80"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </div>

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </section>
  );
};

export default RecoveryQuiz;
