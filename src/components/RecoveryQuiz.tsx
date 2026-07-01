import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import BookingDialog from "./BookingDialog";

type Phase = "shock" | "grief" | "anger" | "bargaining" | "rebuilding";

type Option = { label: string; phase: Phase };
type Question = { q: string; options: Option[] };

const questions: Question[] = [
  {
    q: "How long has it been since the breakup?",
    options: [
      { label: "It just happened (days ago)", phase: "shock" },
      { label: "A few weeks", phase: "grief" },
      { label: "One to three months", phase: "anger" },
      { label: "Several months or more", phase: "rebuilding" },
    ],
  },
  {
    q: "Which feeling shows up the most right now?",
    options: [
      { label: "Numbness, like I can't believe it", phase: "shock" },
      { label: "Deep sadness and crying", phase: "grief" },
      { label: "Anger or resentment", phase: "anger" },
      { label: "Replaying what I could've done differently", phase: "bargaining" },
      { label: "Cautious hope, mixed with sadness", phase: "rebuilding" },
    ],
  },
  {
    q: "How are you sleeping?",
    options: [
      { label: "Barely. I wake up and remember all over again", phase: "shock" },
      { label: "I cry myself to sleep or wake up sad", phase: "grief" },
      { label: "My mind races with frustration", phase: "anger" },
      { label: "Mostly okay, with rough nights", phase: "rebuilding" },
    ],
  },
  {
    q: "What's your relationship with their social media?",
    options: [
      { label: "I check it constantly", phase: "shock" },
      { label: "I look when I miss them", phase: "grief" },
      { label: "I look and it makes me furious", phase: "anger" },
      { label: "I'm trying to win them back somehow", phase: "bargaining" },
      { label: "I've muted or unfollowed them", phase: "rebuilding" },
    ],
  },
  {
    q: "When you imagine the next few months, you feel:",
    options: [
      { label: "Terrified. I can't picture life without them", phase: "shock" },
      { label: "Heavy. Like grief I'll carry forever", phase: "grief" },
      { label: "Frustrated they get to move on", phase: "anger" },
      { label: "Like maybe we could still fix this", phase: "bargaining" },
      { label: "Quietly curious about who I'm becoming", phase: "rebuilding" },
    ],
  },
  {
    q: "How are you taking care of yourself?",
    options: [
      { label: "I'm barely functioning", phase: "shock" },
      { label: "Some days I manage, some I don't", phase: "grief" },
      { label: "I'm forcing routine to feel in control", phase: "anger" },
      { label: "I'm building small habits back", phase: "rebuilding" },
    ],
  },
  {
    q: "What would help you most right now?",
    options: [
      { label: "Someone to talk to today", phase: "shock" },
      { label: "Space to feel without judgment", phase: "grief" },
      { label: "Help making sense of what happened", phase: "bargaining" },
      { label: "A plan to rebuild my life and confidence", phase: "rebuilding" },
    ],
  },
];

type Result = {
  phase: Phase;
  title: string;
  subtitle: string;
  description: string;
  helps: string[];
  recommendation: string;
};

const results: Record<Phase, Result> = {
  shock: {
    phase: "shock",
    title: "You're in the Shock Phase",
    subtitle: "The ground just disappeared beneath you, and that makes sense.",
    description:
      "Right now your nervous system is in survival mode. You're not broken, you're processing something huge. The most important thing isn't to fix anything yet, it's to feel safe enough to breathe.",
    helps: [
      "Talking to someone the same week, not in a month",
      "Tiny anchors: water, sleep, one short walk",
      "Permission to not have answers yet",
    ],
    recommendation: "Emergency Call",
  },
  grief: {
    phase: "grief",
    title: "You're in the Grief Phase",
    subtitle: "You're mourning a future you really believed in.",
    description:
      "This isn't weakness, it's love with nowhere to go. Grief moves in waves, and trying to skip it usually makes it last longer. You deserve space to feel this without being rushed.",
    helps: [
      "Letting yourself cry without timing it",
      "A consistent person to process with",
      "Gentle structure, not pressure to be okay",
    ],
    recommendation: "Starter Pack",
  },
  anger: {
    phase: "anger",
    title: "You're in the Anger Phase",
    subtitle: "Underneath the fire is grief that needs somewhere to go.",
    description:
      "Anger after a breakup is often the part of you that's finally protecting you. It's not bad, it's information. The work is learning what it's pointing at without letting it run the show.",
    helps: [
      "Writing it out before you act on it",
      "Naming what was actually unfair, clearly",
      "Channeling the energy into your own life",
    ],
    recommendation: "Starter Pack",
  },
  bargaining: {
    phase: "bargaining",
    title: "You're in the Bargaining Phase",
    subtitle: "Your mind keeps rewriting the story, looking for a different ending.",
    description:
      "If only I had said that. If only they understood. This phase is exhausting because it keeps the door cracked open. The relief comes from understanding what really happened, not winning them back.",
    helps: [
      "An honest, kind look at the relationship",
      "Reality-checking the 'if only' stories",
      "Closure that doesn't depend on them",
    ],
    recommendation: "Starter Pack",
  },
  rebuilding: {
    phase: "rebuilding",
    title: "You're in the Rebuilding Phase",
    subtitle: "You're not over it, but you're becoming someone new.",
    description:
      "This is the quiet, beautiful part nobody warns you about. You still have hard days, and you're also starting to feel like yourself again. This is when deeper work pays off the most.",
    helps: [
      "A structured plan, not just venting",
      "Rebuilding identity and confidence",
      "Preparing for the next relationship from a healed place",
    ],
    recommendation: "10-Session Recovery Package",
  },
};

interface RecoveryQuizProps {
  variant?: "section" | "page";
}

const RecoveryQuiz = ({ variant = "section" }: RecoveryQuizProps) => {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Phase[]>([]);
  const [bookingOpen, setBookingOpen] = useState(false);

  const isDone = answers.length === questions.length;

  const computeResult = (): Result => {
    const counts: Record<Phase, number> = {
      shock: 0,
      grief: 0,
      anger: 0,
      bargaining: 0,
      rebuilding: 0,
    };
    answers.forEach((p) => counts[p]++);
    const top = (Object.entries(counts) as [Phase, number][]).sort((a, b) => b[1] - a[1])[0][0];
    return results[top];
  };

  const handleAnswer = (phase: Phase) => {
    const next = [...answers, phase];
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
              Where Are You in Your Healing Journey?
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Seven gentle questions to help you understand the phase you're in, and what actually helps right now.
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
                <h3 className="text-2xl font-display font-semibold mb-3">
                  Breakup Recovery Quiz
                </h3>
                <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
                  Healing isn't one thing. Find out which phase you're in, and what helps most right now.
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
                      onClick={() => handleAnswer(opt.phase)}
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
                        Relationship Coaching with Bruna
                      </span>
                      <p className="font-body text-sm text-muted-foreground">
                        Breakup recovery is one of Bruna's coaching specialties. Based on where you are, we recommend starting with the{" "}
                        <span className="font-medium text-foreground">{result.recommendation}</span>.
                      </p>
                    </div>
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Book a 1:1 session with Bruna
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleRestart}
                      className="mt-4 w-full inline-flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Retake the quiz
                    </button>
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
