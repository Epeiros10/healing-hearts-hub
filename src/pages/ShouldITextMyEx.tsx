import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShouldITextMyExTool from "@/components/ShouldITextMyExTool";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://couplescoachingwithbruna.lovable.app";

const ShouldITextMyEx = () => {
  const title = "Should I Text My Ex? Free Decision Tool (2026)";
  const description =
    "Should I text my ex? Take this free 60-second decision tool to find out if reaching out is a good idea right now, or if you'll regret it tomorrow.";
  const url = `${SITE_URL}/should-i-text-my-ex`;
  const ogImage = `${SITE_URL}/og-image.jpg?v=2`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I text my ex?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on why, how recent the breakup is, and your emotional state right now. As a general rule: if it's less than 30 days, you're not calm, you're hoping for a specific response, or you've been drinking, don't send it. If it's logistical or a safety issue, a short focused message is fine. Use our free decision tool to walk through it step by step.",
        },
      },
      {
        "@type": "Question",
        name: "How long should I wait before texting my ex?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most coaches recommend at least 30 to 60 days of no contact after a breakup. This gives your nervous system time to recalibrate, prevents impulsive messages you'll regret, and gives you space to figure out what you actually want, not what you want in the middle of a craving.",
        },
      },
      {
        "@type": "Question",
        name: "Is it bad to text my ex when I'm drunk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Alcohol lowers impulse control and amplifies longing. Drunk-texting your ex almost always feels worse the next morning and often resets the healing clock. If you've been drinking, the answer is wait until tomorrow.",
        },
      },
      {
        "@type": "Question",
        name: "What if my ex texts me first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You don't owe an immediate reply, and you don't owe a long one. Wait a few hours, decide what you want from the exchange, and keep your response roughly as long as theirs. If it's an emergency or genuine logistics, address it directly. If it's emotional or vague, slow down.",
        },
      },
      {
        "@type": "Question",
        name: "Will texting my ex help me get them back?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually the opposite. Reaching out too soon, too often, or too emotionally tends to push exes further away. If reconciliation is the real goal, time, self-work, and clarity matter more than the perfect message.",
        },
      },
    ],
  };

  const webAppLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Should I Text My Ex Decision Tool",
    url,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Any",
    description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />
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
        <script type="application/ld+json">{JSON.stringify(webAppLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <Navbar />
      <main className="pt-24">
        <header className="max-w-2xl mx-auto px-4 text-center">
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Free Tool · 60 seconds
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 leading-tight">
            Should I Text My Ex?
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-lg">
            Let this tool make the decision for you. Answer a few honest questions and find out if reaching out is a good idea right now, or something you'll regret tomorrow.
          </p>
        </header>

        <ShouldITextMyExTool variant="page" />

        {/* SEO content */}
        <section className="max-w-3xl mx-auto px-4 pb-20 pt-4">
          <div className="prose prose-stone max-w-none font-body text-foreground">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-4">
              Should you text your ex? The honest answer.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Almost everyone who's been through a breakup has stared at their phone at 11pm wondering the same thing: should I text my ex? You're not weak for wanting to. The urge is normal, biological even, your brain is processing a real loss and trying to soothe itself the fastest way it knows how.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              But the honest answer is: most of the time, the message you want to send tonight is not the message that will help you tomorrow. This tool exists to help you slow down for 60 seconds, get clear on why you want to reach out, and decide with your prefrontal cortex instead of your panic.
            </p>

            <h2 className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-4">
              When you probably shouldn't text your ex
            </h2>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• It's been less than 30 days and you haven't agreed on contact</li>
              <li>• You've been drinking or you're sleep-deprived</li>
              <li>• You're hoping for one specific response and will spiral if you don't get it</li>
              <li>• They asked for space or no contact</li>
              <li>• You're chasing closure they can't actually give you</li>
              <li>• You're trying to "casually check in" but really want to test the waters</li>
            </ul>

            <h2 className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-4">
              When it's probably okay to text your ex
            </h2>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li>• Real logistics: shared belongings, bills, a pet, a lease</li>
              <li>• A safety concern or emergency</li>
              <li>• You've done meaningful inner work and you're not seeking a reaction</li>
              <li>• They reached out first about something practical</li>
            </ul>

            <h2 className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-4">
              The 24-hour rule
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If the urge to text feels overwhelming, write the message in your notes app instead of in the chat. Save it. Wait 24 hours. Read it again in daylight. Most of the time, the version of you that wakes up tomorrow will thank you for not sending it.
            </p>

            <h2 className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-4">
              If you still need to talk
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sometimes the real need underneath "I want to text my ex" is "I need to be heard right now." A 45-minute coaching session with Bruna can give you that, without the regret hangover.
            </p>
          </div>

          <div className="mt-8 p-6 sm:p-8 bg-card border border-border rounded-2xl text-center">
            <h2 className="font-display text-xl text-foreground mb-2">
              Talk it through with someone who gets it
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-5 max-w-md mx-auto">
              Book a judgment-free 45-minute 1:1 session with Bruna, far cheaper than the emotional cost of sending the wrong message.
            </p>
            <a
              href="/#coaching"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
            >
              See coaching options
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShouldITextMyEx;
