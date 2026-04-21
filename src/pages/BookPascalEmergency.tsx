import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BookPascalEmergency = () => {
  useEffect(() => {
    document.title = "Book Emergency Call with Pascal | 45-min Coaching";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Book a 45-minute emergency coaching call with Pascal. Same-week availability for immediate breakup recovery support."
      );
    }

    // Load Cal.com embed
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "45-min-coaching-call", { origin: "https://app.cal.com" });
    Cal.ns["45-min-coaching-call"]("inline", {
      elementOrSelector: "#my-cal-inline-45-min-coaching-call",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "auto",
      },
      calLink: "pascal-niggli-uenxj0/45-min-coaching-call",
    });
    Cal.ns["45-min-coaching-call"]("ui", {
      cssVarsPerTheme: { light: { "cal-brand": "#D97757" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <main className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <header className="text-center mb-8">
          <span className="text-primary font-body text-sm font-medium tracking-wide uppercase mb-3 block">
            Emergency Call · 45 min · €79
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-3">
            Book an Emergency Call with Pascal
          </h1>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Pick a time that works for you. Same-week availability for when you need to talk to someone fast.
          </p>
        </header>

        <div
          id="my-cal-inline-45-min-coaching-call"
          style={{ width: "100%", height: "750px", overflow: "scroll" }}
          className="rounded-2xl border border-border bg-card"
        />
      </div>
    </main>
  );
};

export default BookPascalEmergency;
