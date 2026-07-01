import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecoveryQuiz from "@/components/RecoveryQuiz";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://couplescoachingwithbruna.lovable.app";

const Quiz = () => {
  const title = "Breakup Recovery Quiz: Where Are You in Your Healing Journey?";
  const description =
    "Take our free 2-minute breakup recovery quiz. Discover which healing phase you are in, shock, grief, anger, bargaining, or rebuilding, and get personalized next steps to move forward.";
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
          name: "What are the stages of breakup recovery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Breakup recovery typically moves through five phases: Shock (numbness, disbelief), Grief (deep sadness, longing), Anger (frustration, resentment), Bargaining (what-ifs, idealising the past), and Rebuilding (rediscovering yourself and moving forward). Everyone moves at their own pace and may revisit phases."
          }
        },
        {
          "@type": "Question",
          name: "How long does it take to heal from a breakup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no fixed timeline. Studies suggest it can take anywhere from a few months to over a year depending on the relationship length, attachment style, and support system. The key is not speed, it is understanding where you are and giving yourself what that phase needs."
          }
        },
        {
          "@type": "Question",
          name: "Should I take a breakup recovery quiz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A breakup recovery quiz can give you language for what you are feeling and point you toward the right tools. It is not a clinical diagnosis, but a gentle mirror to help you understand your current phase and what actually helps right now."
          }
        },
        {
          "@type": "Question",
          name: "What helps during the shock phase of a breakup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In the shock phase, your nervous system needs safety and simplicity. Focus on basic self-care: sleep, nourishment, gentle movement, and limiting contact with your ex. A coach or supportive friend can help anchor you when everything feels unstable."
          }
        },
        {
          "@type": "Question",
          name: "What helps during the grief phase after a breakup?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Grief needs witness, not fixing. Journaling, talking to someone who listens without advice, and creating small rituals of release can help. Coaching during grief often focuses on processing the loss and rebuilding a sense of self independent of the relationship."
          }
        }
      ]
    }
  };

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
            A Relationship Coaching Specialty · With Bruna
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Breakup Recovery Quiz
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-lg mb-3">
            Where are you in your healing journey? Seven gentle questions, one personalized answer.
          </p>
          <p className="text-muted-foreground/80 font-body max-w-xl mx-auto text-sm">
            Breakup recovery is one of Bruna's core relationship coaching specialties, alongside couples work, attachment, and rebuilding trust. This quiz helps identify where you are so your next step fits the phase you're actually in.
          </p>
        </div>
        <RecoveryQuiz variant="page" />

        {/* Indexable content for search engines */}
        <section className="max-w-3xl mx-auto px-4 pb-20 pt-8">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 text-center">
            Understanding the 5 Phases of Breakup Recovery
          </h2>
          <p className="text-muted-foreground font-body text-center max-w-xl mx-auto mb-12">
            Healing after heartbreak is not a straight line. Our quiz helps you identify which phase you are in right now, so you can focus on what actually helps.
          </p>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-border sm:-translate-x-1/2" aria-hidden="true" />

            <ol className="space-y-10">
              {[
                {
                  n: "01",
                  title: "Shock Phase",
                  desc: "Numbness, disbelief, and autopilot. You may feel frozen, detached, or unable to fully register what happened. The priority here is safety, sleep, and basic self-care while your nervous system catches up with reality.",
                },
                {
                  n: "02",
                  title: "Grief Phase",
                  desc: "Deep sadness, longing, and emptiness. This is where you feel the loss most acutely. Tears, waves of memory, and low energy are all normal. Witness and expression, not distraction, are what help most.",
                },
                {
                  n: "03",
                  title: "Anger Phase",
                  desc: "Frustration, resentment, or righteous indignation. Anger is information: it often signals a boundary that was crossed or a need that went unmet. Channelled well, it becomes fuel for change.",
                },
                {
                  n: "04",
                  title: "Bargaining Phase",
                  desc: "What-ifs, idealising the past, and searching for ways to undo the breakup. This phase needs clarity and gentle reality-checking. It is where most people feel the urge to reach out to their ex.",
                },
                {
                  n: "05",
                  title: "Rebuilding Phase",
                  desc: "Rediscovering who you are outside the relationship. New routines, deeper self-trust, confidence, and hope begin to emerge. You start looking forward more than backward.",
                },
              ].map((phase, idx) => {
                const leftSide = idx % 2 === 0;
                return (
                  <li key={phase.n} className="relative sm:grid sm:grid-cols-2 sm:gap-12 sm:items-start">
                    {/* Dot on the line */}
                    <span
                      className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background"
                      aria-hidden="true"
                    />

                    <div className={`pl-12 sm:pl-0 ${leftSide ? "sm:text-right sm:pr-12 sm:col-start-1" : "sm:pl-12 sm:col-start-2"}`}>
                      <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">Phase {phase.n}</span>
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
                How the Breakup Recovery Quiz Works
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-3">
                Our free breakup recovery quiz takes about two minutes. Seven short questions explore how you are sleeping, how often you think about your ex, how you feel about the future, and how you are coping day to day. Based on your answers, we identify which of the five phases of breakup recovery, shock, grief, anger, bargaining, or rebuilding, best describes where you are right now.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                The result is not a diagnosis. It is a mirror. Knowing your phase helps you stop fighting your feelings and start working with them. Each phase needs a different kind of support, and the quiz points you to concrete, gentle next steps tailored to yours.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Why Knowing Your Breakup Phase Matters
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-3">
                Heartbreak is disorienting because it does not move in a straight line. One day you feel free, the next you cannot get out of bed. Without a map, it is easy to assume you are broken, regressing, or failing at healing. You are not. You are moving through phases that millions of people have moved through before you.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                When you know your phase, you can stop applying advice meant for someone three months ahead of you. You can give yourself the right thing at the right time: rest in shock, expression in grief, boundaries in anger, clarity in bargaining, and action in rebuilding.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                How Long Does Breakup Recovery Take?
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-3">
                There is no fixed timeline. Research suggests most people feel meaningfully better within three to six months, with deeper integration continuing over a year or more. The length of the relationship, your attachment style, whether the breakup was sudden, and the support you have all influence the pace.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                What matters more than speed is direction. People who move through the phases consciously, with support, tend to come out stronger, clearer about what they want, and more grounded in themselves. People who try to skip phases often loop back to them later.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                Is It Normal to Move Back and Forth Between Phases?
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Yes. The five phases of breakup recovery are not a staircase, they are more like tides. You might feel rebuilding energy on Monday and slip into grief on Friday when a song plays. A birthday, a shared place, or seeing your ex online can pull you back temporarily. This is not regression. It is integration. Each return is usually gentler and shorter than the last.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                When to Consider Breakup Recovery Coaching
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Coaching is not therapy. It is structured, compassionate support for people who want to move through heartbreak with intention. If you feel stuck in one phase, keep breaking no-contact, struggle to see a future, or simply want someone in your corner who has helped hundreds of people through this, a 1:1 session can compress months of confusion into clarity.
              </p>
            </article>
          </div>

          <div className="mt-14 p-6 sm:p-8 bg-card border border-border rounded-2xl text-center">
            <h2 className="font-display text-xl text-foreground mb-2">
              Want personalised support for your phase?
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-5 max-w-md mx-auto">
              Book a 45-minute 1:1 session with Bruna. Compassionate, judgment-free, and tailored to exactly where you are right now.
            </p>
            <a
              href="/#coaching"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a 1:1 session
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;
