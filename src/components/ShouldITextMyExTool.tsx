import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCcw, Share2 } from "lucide-react";
import BookingDialog from "./BookingDialog";

type NodeId =
  | "start"
  | "howLong"
  | "veryRecent"
  | "whyReachOut"
  | "loneliness"
  | "closure"
  | "logistics"
  | "apology"
  | "checkIn"
  | "theyContacted"
  | "noContactAgreement"
  | "drinking"
  | "result_dont"
  | "result_wait"
  | "result_logistics_ok"
  | "result_journal_first"
  | "result_closure_no"
  | "result_safe_check"
  | "result_respond_carefully";

type Option = { label: string; next: NodeId };

type QuestionNode = {
  type: "question";
  title: string;
  subtitle?: string;
  options: Option[];
};

type ResultNode = {
  type: "result";
  verdict: "no" | "wait" | "maybe" | "yes-carefully";
  headline: string;
  body: string;
  bullets: string[];
  ctaLabel?: string;
};

type Node = QuestionNode | ResultNode;

const tree: Record<NodeId, Node> = {
  start: {
    type: "question",
    title: "Did your ex contact you first, or are you thinking of reaching out?",
    options: [
      { label: "I'm thinking of reaching out", next: "howLong" },
      { label: "They contacted me", next: "theyContacted" },
    ],
  },
  howLong: {
    type: "question",
    title: "How long since the breakup?",
    options: [
      { label: "Less than 2 weeks", next: "veryRecent" },
      { label: "2 weeks to 3 months", next: "whyReachOut" },
      { label: "3 to 12 months", next: "whyReachOut" },
      { label: "Over a year", next: "whyReachOut" },
    ],
  },
  veryRecent: {
    type: "question",
    title: "It's still very fresh. Are you in an emotionally calm state right now?",
    subtitle: "Be honest. Crying, panicking, or anxious all count as not calm.",
    options: [
      { label: "Honestly, no. I'm a mess", next: "result_dont" },
      { label: "I'm okay-ish, but missing them a lot", next: "result_wait" },
      { label: "Yes, I feel grounded", next: "whyReachOut" },
    ],
  },
  whyReachOut: {
    type: "question",
    title: "What's the real reason you want to text them?",
    subtitle: "Pick the one that's most true, even if it's uncomfortable.",
    options: [
      { label: "I'm lonely and miss them", next: "loneliness" },
      { label: "I need closure or answers", next: "closure" },
      { label: "Something practical (belongings, shared bills, pet)", next: "logistics" },
      { label: "I want to apologise", next: "apology" },
      { label: "Just to check in / be friendly", next: "checkIn" },
    ],
  },
  loneliness: {
    type: "question",
    title: "If they replied warmly tonight, would tomorrow feel better or worse?",
    options: [
      { label: "Better, at least short term", next: "result_journal_first" },
      { label: "Honestly, probably worse", next: "result_dont" },
      { label: "I genuinely don't know", next: "result_journal_first" },
    ],
  },
  closure: {
    type: "question",
    title: "Have they already told you why it ended?",
    options: [
      { label: "Yes, but I don't accept it", next: "result_closure_no" },
      { label: "No, it ended abruptly", next: "result_closure_no" },
      { label: "Yes, and I just want to hear it again", next: "result_dont" },
    ],
  },
  logistics: {
    type: "question",
    title: "Can a friend or family member help instead?",
    subtitle: "For belongings, payments, or anything that doesn't require you two directly.",
    options: [
      { label: "Yes, someone could help", next: "result_dont" },
      { label: "No, I genuinely need to contact them", next: "result_logistics_ok" },
    ],
  },
  apology: {
    type: "question",
    title: "Is the apology for them, or for you?",
    subtitle: "An apology that's really about easing your own guilt can reopen wounds for them.",
    options: [
      { label: "Truly for them, no expectation back", next: "noContactAgreement" },
      { label: "Honestly, I want them to forgive me", next: "result_journal_first" },
    ],
  },
  checkIn: {
    type: "question",
    title: "Would you feel okay if they didn't reply at all?",
    options: [
      { label: "Yes, totally fine", next: "noContactAgreement" },
      { label: "No, it would hurt a lot", next: "result_dont" },
    ],
  },
  noContactAgreement: {
    type: "question",
    title: "Did either of you ask for no contact or space?",
    options: [
      { label: "Yes, they asked for space", next: "result_dont" },
      { label: "No, we left it open", next: "drinking" },
      { label: "I asked for space initially", next: "drinking" },
    ],
  },
  drinking: {
    type: "question",
    title: "Last question: have you been drinking or are you sleep-deprived right now?",
    options: [
      { label: "Yes", next: "result_wait" },
      { label: "No, I'm clear-headed", next: "result_respond_carefully" },
    ],
  },
  theyContacted: {
    type: "question",
    title: "What did they reach out about?",
    options: [
      { label: "An emergency or safety concern", next: "result_safe_check" },
      { label: "Logistics (stuff, bills, pet)", next: "result_logistics_ok" },
      { label: "Just to talk or 'check in'", next: "result_respond_carefully" },
      { label: "They want to get back together", next: "result_respond_carefully" },
    ],
  },

  // RESULTS
  result_dont: {
    type: "result",
    verdict: "no",
    headline: "Don't text them. Not tonight.",
    body: "What you're feeling is real, but reaching out right now is more likely to deepen the wound than heal it. The urge will pass. The regret often doesn't.",
    bullets: [
      "Write the message in your notes app instead. Don't send it.",
      "Tell one trusted person what you're feeling.",
      "Put your phone in another room for the next 2 hours.",
      "Revisit this tool in 48 hours if the urge is still there.",
    ],
    ctaLabel: "Talk to a coach instead",
  },
  result_wait: {
    type: "result",
    verdict: "wait",
    headline: "Wait at least 48 hours.",
    body: "You're not in a clear enough state to send something you won't regret. This isn't a no forever, just a no for tonight.",
    bullets: [
      "Sleep on it. Literally.",
      "Eat, hydrate, get sunlight tomorrow.",
      "If the urge is still there in 2 days, revisit this tool.",
      "Decisions made at 11pm rarely survive 9am.",
    ],
    ctaLabel: "Get support through the wait",
  },
  result_logistics_ok: {
    type: "result",
    verdict: "yes-carefully",
    headline: "Yes, but keep it strictly logistical.",
    body: "There's a real practical reason here. That's a legitimate contact. Just don't let the message drift into anything emotional.",
    bullets: [
      "One short message. No 'how are you?'",
      "Stick to the specific topic. Bullet points if needed.",
      "Don't reply to anything off-topic they say back.",
      "Set a clear ask or end-point in the message itself.",
    ],
  },
  result_journal_first: {
    type: "result",
    verdict: "wait",
    headline: "Journal first, then decide.",
    body: "There's a feeling underneath this urge that wants to be heard. Texting them is often a shortcut that doesn't actually deliver what you need.",
    bullets: [
      "Write for 10 minutes: 'What do I really want them to say back?'",
      "Notice if what you want is something only you can give yourself.",
      "If you still want to send something after that, draft it and wait 24 hours.",
      "A coach can help untangle the feeling faster than going alone.",
    ],
    ctaLabel: "Unpack this with a coach",
  },
  result_closure_no: {
    type: "result",
    verdict: "no",
    headline: "Closure rarely comes from them.",
    body: "The honest truth: most people don't get a clean answer from their ex, and even when they do, it doesn't land the way they hoped. Closure is something you build, not something you receive.",
    bullets: [
      "The answer you want probably won't make the pain smaller.",
      "Closure usually comes from accepting the unanswered, not getting the answer.",
      "Reaching out for closure often restarts the grief clock.",
      "A coach can help you build closure without their participation.",
    ],
    ctaLabel: "Build real closure with a coach",
  },
  result_safe_check: {
    type: "result",
    verdict: "yes-carefully",
    headline: "Yes, respond — safety comes first.",
    body: "If this is a genuine emergency or safety concern, respond. Keep it brief, calm, and focused on the situation.",
    bullets: [
      "Address the immediate concern only.",
      "Don't extend the conversation past what's needed.",
      "Loop in a third party if it feels overwhelming.",
      "Once it's resolved, you can go back to silence.",
    ],
  },
  result_respond_carefully: {
    type: "result",
    verdict: "maybe",
    headline: "You can respond, but slowly and on your terms.",
    body: "You're clear-headed enough to handle this. Just remember: you don't owe an immediate reply, and you don't owe a long one.",
    bullets: [
      "Wait a few hours before responding. You're allowed to.",
      "Keep your reply roughly as long as theirs, no longer.",
      "Don't ask follow-up questions you don't actually want answers to.",
      "Decide ahead of time what you want from this exchange.",
    ],
    ctaLabel: "Get a coach in your corner",
  },
};

interface Props {
  variant?: "page" | "embed";
}

const verdictStyles: Record<ResultNode["verdict"], { bg: string; label: string; emoji: string }> = {
  no: { bg: "bg-[#c44a3a]/10 border-[#c44a3a]/30", label: "Don't send it", emoji: "🛑" },
  wait: { bg: "bg-[#d4a843]/10 border-[#d4a843]/40", label: "Wait", emoji: "⏳" },
  maybe: { bg: "bg-primary/10 border-primary/30", label: "Proceed with care", emoji: "💭" },
  "yes-carefully": { bg: "bg-[#7d9b76]/15 border-[#7d9b76]/40", label: "Yes, carefully", emoji: "✅" },
};

const ShouldITextMyExTool = ({ variant = "page" }: Props) => {
  const [path, setPath] = useState<NodeId[]>(["start"]);
  const [bookingOpen, setBookingOpen] = useState(false);

  const currentId = path[path.length - 1];
  const current = tree[currentId];

  const reset = () => setPath(["start"]);
  const back = () => setPath((p) => (p.length > 1 ? p.slice(0, -1) : p));

  const share = async () => {
    const url = "https://breakup-recovery.org/should-i-text-my-ex";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Should I Text My Ex?",
          text: "A free decision tool to help you figure out if reaching out is a good idea.",
          url,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  const containerClass = variant === "page"
    ? "max-w-2xl mx-auto px-4 py-10"
    : "max-w-2xl mx-auto px-4 py-12";

  return (
    <>
      <div className={containerClass}>
        <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Progress / back */}
          <div className="flex items-center justify-between mb-6 min-h-[28px]">
            {path.length > 1 ? (
              <button
                onClick={back}
                className="inline-flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">
                Free decision tool
              </span>
            )}
            {current.type === "result" && (
              <button
                onClick={reset}
                className="inline-flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Start over
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentId}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {current.type === "question" ? (
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-foreground leading-snug mb-3">
                    {current.title}
                  </h2>
                  {current.subtitle && (
                    <p className="font-body text-sm text-muted-foreground mb-6">
                      {current.subtitle}
                    </p>
                  )}
                  <div className="space-y-3 mt-6">
                    {current.options.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => setPath((p) => [...p, opt.next])}
                        className="w-full text-left px-5 py-4 rounded-xl border border-border bg-background hover:bg-primary/5 hover:border-primary/40 transition-all font-body text-sm sm:text-base text-foreground"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${verdictStyles[current.verdict].bg} mb-4`}
                  >
                    <span>{verdictStyles[current.verdict].emoji}</span>
                    <span className="font-body text-xs font-medium uppercase tracking-wide text-foreground">
                      {verdictStyles[current.verdict].label}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-4 leading-snug">
                    {current.headline}
                  </h2>
                  <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                    {current.body}
                  </p>
                  <div className="bg-background/60 border border-border rounded-2xl p-5 mb-6">
                    <h3 className="font-display text-sm uppercase tracking-wide text-foreground mb-3">
                      What to do right now
                    </h3>
                    <ul className="space-y-2.5">
                      {current.bullets.map((b) => (
                        <li key={b} className="flex gap-3 font-body text-sm text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {current.ctaLabel && (
                      <button
                        onClick={() => setBookingOpen(true)}
                        className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
                      >
                        {current.ctaLabel}
                      </button>
                    )}
                    <button
                      onClick={share}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm font-medium hover:bg-primary/5 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      Share this tool
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default ShouldITextMyExTool;
