import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecoveryQuiz from "@/components/RecoveryQuiz";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://couplescoachingwithbruna.lovable.app";

const Quiz = () => {
  const title = "Relationship Coaching Quiz: Which Path Fits You? | Coaching with Bruna";
  const description =
    "Take the free 2-minute relationship coaching quiz. Discover whether your focus should be couples communication, rebuilding trust, attachment patterns, conscious dating, or breakup recovery, and get a clear next step with Bruna.";
  const url = `${SITE_URL}/quiz`;
  const ogImage = `${SITE_URL}/og-image.jpg?v=2`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    image: ogImage,
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does the relationship coaching quiz measure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The quiz identifies which of five relationship coaching areas is most relevant for you right now: couples communication, rebuilding trust, attachment patterns, conscious dating, or breakup recovery. It uses seven honest questions about your current situation, patterns, and goals."
          }
        },
        {
          "@type": "Question",
          name: "Is this quiz for couples or individuals?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both. Some paths, like couples communication and rebuilding trust, are usually done together. Others, like attachment work, conscious dating, and breakup recovery, are typically done individually. The quiz will point you to the right starting point either way."
          }
        },
        {
          "@type": "Question",
          name: "How does relationship coaching differ from therapy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Coaching is forward-focused, structured, and practical. It's about building the skills, patterns, and clarity you need to have the relationships you want. Therapy often focuses on healing the past. Many people use both. Bruna's coaching is designed to move you toward measurable change quickly."
          }
        },
        {
          "@type": "Question",
          name: "What if my main issue is a recent breakup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Breakup recovery is one of Bruna's core coaching specialties. If that's where you are, the quiz will point you to the post-breakup clarity path and recommend a 1:1 session to work through the phase you're actually in."
          }
        },
        {
          "@type": "Question",
          name: "How long does relationship coaching usually take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most people notice a shift within the first two or three sessions and complete a focused arc in six to ten sessions. Longer-term work is common for couples rebuilding trust or individuals doing deeper attachment work."
          }
        }
      ]
    }
  };

  const paths = [
    {
      n: "01",
      title: "Couples Communication",
      desc: "For partners stuck in the same loop of fights, silence, or feeling like roommates. You'll learn to name needs clearly, interrupt the fight cycle, and rebuild warmth and everyday connection.",
    },
    {
      n: "02",
      title: "Rebuilding Trust",
      desc: "For couples navigating betrayal, long disconnection, or repeated broken promises. This path is a structured rebuild, honesty, repair, and small daily practices that make reliability visible again.",
    },
    {
      n: "03",
      title: "Attachment Patterns",
      desc: "For anyone stuck in the same relationship dynamic, anxious, avoidant, or on edge. Attachment patterns are learned, and they can be updated. Often the fastest area of change in coaching.",
    },
    {
      n: "04",
      title: "Conscious Dating",
      desc: "For singles who want to date from clarity, not lack. Get clear on your non-negotiables, spot green and red flags early, and stay grounded in yourself while getting to know someone.",
    },
    {
      n: "05",
      title: "Breakup Recovery",
      desc: "For anyone going through or recovering from a breakup. Understand the phase you're in, stop the loop of reaching out, and rebuild identity and confidence from the inside out.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-24">
        <div className="max-w-2xl mx-auto px-4 text-center mb-4">
          <span className="inline-block text-primary font-body text-xs font-medium tracking-[0.2em] uppercase mb-4 px-3 py-1 rounded-full bg-primary/10">
            Coaching with Bruna
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Relationship Coaching Quiz
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-lg mb-3">
            Which coaching path fits where you are right now? Seven honest questions, one clear next step.
          </p>
          <p className="text-muted-foreground/80 font-body max-w-xl mx-auto text-sm">
            Bruna's coaching covers five focus areas: couples communication, rebuilding trust, attachment patterns, conscious dating, and breakup recovery. This quiz helps you pick the one worth starting with.
          </p>
        </div>
        <RecoveryQuiz variant="page" />

        {/* Indexable content for search engines */}
        <section className="max-w-3xl mx-auto px-4 pb-20 pt-8">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 text-center">
            The 5 Relationship Coaching Paths
          </h2>
          <p className="text-muted-foreground font-body text-center max-w-xl mx-auto mb-12">
            Most relationship struggles fit into one of five patterns. The quiz points you to the one that will make the biggest difference first.
          </p>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-border sm:-translate-x-1/2" aria-hidden="true" />

            <ol className="space-y-10">
              {paths.map((phase, idx) => {
                const leftSide = idx % 2 === 0;
                return (
                  <li key={phase.n} className="relative sm:grid sm:grid-cols-2 sm:gap-12 sm:items-start">
                    <span
                      className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background"
                      aria-hidden="true"
                    />

                    <div className={`pl-12 sm:pl-0 ${leftSide ? "sm:text-right sm:pr-12 sm:col-start-1" : "sm:pl-12 sm:col-start-2"}`}>
                      <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">Path {phase.n}</span>
                      <h3 className="font-display text-xl md:text-2xl text-foreground mt-1 mb-2">{phase.title}</h3>
                      <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Extended SEO content */}
          <div className="mt-20 space-y-12">
            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                How the Relationship Coaching Quiz Works
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-3">
                The free relationship coaching quiz takes about two minutes. Seven short questions explore your current situation, how you tend to respond when things get hard, what feels out of reach, and what you want six months from now. Based on your answers, we match you to one of five focus areas: couples communication, rebuilding trust, attachment patterns, conscious dating, or breakup recovery.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                The result is not a diagnosis. It's a starting point. Knowing which path fits helps you stop trying every piece of advice at once and start with the one thing that will actually shift how your relationships feel.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Why Picking the Right Focus Matters
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-3">
                Relationships rarely break in one place. Communication struggles blur into attachment patterns, which blur into dating history, which blur into unresolved breakups. Trying to work on all of it at once is exhausting and usually stalls.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Coaching works when you name the one leverage point that changes the rest. That's what the quiz is designed to reveal, whether the fastest path forward is a shared conversation with your partner, understanding your own attachment style, or getting real support through a breakup.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Is Relationship Coaching for Couples or Individuals?
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-3">
                Both. Couples communication and rebuilding trust are usually done together, with both partners in the session. Attachment work, conscious dating, and breakup recovery are typically done individually. Many people also do a mix, starting solo to get clarity, then bringing their partner in.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                The quiz doesn't assume which format you need. It surfaces the theme, and Bruna helps you pick the right format from there.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                How Coaching Differs from Therapy
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Coaching is forward-focused, structured, and practical. Each session moves toward specific outcomes, better conversations, clearer boundaries, healthier patterns, real closure. Therapy often focuses on healing the past. Many people benefit from both. If you want measurable change in how your relationships feel, coaching is usually the faster path.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                When to Consider Booking a Session
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                If you feel stuck in the same pattern, keep having the same conversation without resolution, don't recognise yourself in your relationships, or simply want someone in your corner who has helped hundreds of people move through this, a 1:1 or couples session can compress months of confusion into clarity. The quiz will point you to the right starting place.
              </p>
            </article>
          </div>

          <div className="mt-14 p-6 sm:p-8 bg-card border border-border rounded-2xl text-center">
            <span className="inline-block text-primary font-body text-xs font-medium tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full bg-primary/10">
              Coaching with Bruna
            </span>
            <h2 className="font-display text-xl text-foreground mb-2">
              Ready to work on your focus area?
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-5 max-w-md mx-auto">
              Book a 45-minute session with Bruna, tailored to the path the quiz surfaced. Compassionate, structured, and designed to create real change.
            </p>
            <a
              href="/#coaching"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a session
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
