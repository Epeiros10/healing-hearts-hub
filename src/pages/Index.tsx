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


const SITE_URL = "https://couplescoachingwithbruna.lovable.app";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of coaching does Bruna offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bruna is a certified relationship and attachment coach. She works with couples on communication, conflict, and rebuilding trust and closeness, and with individuals on attachment patterns, dating, and breakup recovery. Each session is shaped around your situation, not a one-size-fits-all program.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with couples, individuals, or both?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Couples come for help with recurring arguments, disconnection, trust after a rupture, or navigating a major life change together. Individuals come to understand their patterns, work through a breakup, or prepare for a healthier next relationship.",
      },
    },
    {
      "@type": "Question",
      name: "Is this therapy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Coaching isn't a substitute for therapy or clinical mental health care. Bruna walks beside you with compassion, practical tools, and accountability. If you're navigating trauma or a mental health condition, she'll always encourage you to also work with a licensed therapist.",
      },
    },
    {
      "@type": "Question",
      name: "How is coaching different from talking to a friend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Friends are often too close to be objective. As a certified coach, Bruna holds a focused, judgment-free space, asks the questions no one else will, and helps you move forward instead of looping in the same pain.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a coaching session cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 45-minute 1:1 coaching call with Bruna is €79, whether you come solo or as a couple.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can we book a session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually within the same day. Bruna keeps regular availability, and you can see real-time open slots when you book through her calendar.",
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
      name: "Do you offer ongoing coaching packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Beyond one-off sessions, many clients work with Bruna across a series of calls to go deeper, on communication, attachment, rebuilding trust, no-contact, or preparing for what's next.",
      },
    },
  ],
};

const professionalServiceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Coaching with Bruna",
  description:
    "Relationship and attachment coaching with Bruna for couples and individuals, including communication, conflict, trust, dating, and breakup recovery.",
  url: `${SITE_URL}/`,
  priceRange: "€79",
  areaServed: "Worldwide",
  serviceType: [
    "Couples Coaching",
    "Relationship Coaching",
    "Attachment Coaching",
    "Breakup Recovery Coaching",
    "Dating Coaching",
  ],
  provider: {
    "@type": "Person",
    name: "Bruna Friggi",
    jobTitle: "Certified Relationship & Attachment Coach",
    url: `${SITE_URL}/`,
  },
  offers: {
    "@type": "Offer",
    name: "45-minute 1:1 Coaching Call",
    price: "79",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#coaching`,
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={`${SITE_URL}/`} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(professionalServiceLd)}</script>
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
      
    </div>
  );
};

export default Index;
