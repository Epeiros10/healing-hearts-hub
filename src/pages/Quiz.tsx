import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecoveryQuiz from "@/components/RecoveryQuiz";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://breakup-recovery.org";

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
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Free Quiz · 2 minutes
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Breakup Recovery Quiz
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-lg">
            Where are you in your healing journey? Seven gentle questions, one personalized answer.
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display text-lg text-foreground mb-2">Shock Phase</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Numbness, disbelief, and autopilot. You may feel frozen or detached. The priority here is safety and basic self-care.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display text-lg text-foreground mb-2">Grief Phase</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Deep sadness, longing, and emptiness. This is where you feel the loss most acutely. Witness and expression help most.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display text-lg text-foreground mb-2">Anger Phase</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Frustration, resentment, or righteous indignation. Anger is information, it often signals a boundary was crossed.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display text-lg text-foreground mb-2">Bargaining Phase</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                What-ifs, idealising the past, and searching for ways to undo the breakup. This phase needs clarity and reality-checking.
              </p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-5 sm:col-span-2 lg:col-span-1">
              <h3 className="font-display text-lg text-foreground mb-2">Rebuilding Phase</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Rediscovering who you are outside the relationship. New routines, confidence, and hope begin to emerge.
              </p>
            </div>
          </div>

          <div className="mt-14 p-6 sm:p-8 bg-card border border-border rounded-2xl text-center">
            <h2 className="font-display text-xl text-foreground mb-2">
              Want personalised support for your phase?
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-5 max-w-md mx-auto">
              Book a 45-minute 1:1 session with Bruna or Pascal. Compassionate, judgment-free, and tailored to exactly where you are right now.
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
