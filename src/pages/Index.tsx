import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Coaching from "@/components/Coaching";
import RecoveryPackage from "@/components/RecoveryPackage";
import RecoveryQuiz from "@/components/RecoveryQuiz";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Coaching isn't a substitute for therapy or clinical mental health care. We walk beside you through heartbreak with compassion, practical tools, and accountability. If you're navigating trauma or a mental health condition, we'll always encourage you to also work with a licensed therapist.",
      },
    },
    {
      "@type": "Question",
      name: "How is coaching different from talking to a friend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Friends are often too close to be objective. As certified coaches who've been through heartbreak ourselves, we hold a focused, judgment-free space, ask the questions no one else will, and help you move forward instead of looping in the same pain.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not ready to talk to someone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's completely okay. There's no pressure and no timeline, healing happens at your pace. When you're ready, even reaching out with a short message is a meaningful first step.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a coaching session cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 45-minute 1:1 coaching call with Bruna is €79.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I book a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually within the same day. Bruna keeps regular availability, and you can see real-time open slots when you book through her calendar.",
      },
    },
    {
      "@type": "Question",
      name: "Who will I be working with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll work directly with Bruna, a certified relationship coach who specializes in heartbreak recovery and attachment patterns.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the first call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll leave with more clarity, breathing room, and a few practical next steps. There's no obligation to continue, but many people book follow-up sessions to keep the momentum going.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Beyond one-off sessions, many clients work with us across a series of calls to go deeper, through no-contact, rebuilding self-worth, or preparing for what's next. Mention it on your first call and your coach will tailor a plan with you.",
      },
    },
  ],
};

const SITE_URL = "https://breakup-recovery.org";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={`${SITE_URL}/`} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Coaching />
      <RecoveryQuiz />
      <RecoveryPackage />
      <ContactSection />
      <FAQ />
      <Footer />
      <LeadMagnetPopup />
    </div>
  );
};

export default Index;
