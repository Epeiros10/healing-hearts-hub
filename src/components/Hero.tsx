import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";
import heroBgMobile from "@/assets/hero-bg-mobile.webp";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!open || initializedRef.current) return;

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
    Cal("init", "15min", { origin: "https://app.cal.com" });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;

    // Defer until dialog content is mounted
    setTimeout(() => {
      Cal.ns["15min"]("inline", {
        elementOrSelector: "#my-cal-inline-15min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" },
        calLink: "breakup-recovery/15min",
      });
      Cal.ns["15min"]("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      initializedRef.current = true;
    }, 50);
  }, [open]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Warm sunrise symbolizing hope and healing"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={900}
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight mb-10">
            Struggling after a breakup?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto mb-10 leading-relaxed">
            Talk to someone who gets it. Book a free 15-min call with a certified breakup coach.
          </p>

          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-body font-medium text-base hover:opacity-90 transition-opacity w-full sm:w-auto"
              style={{ boxShadow: "var(--shadow-warm)" }}>
              Book Your Free 15-Min Call
            </button>
            <a
              href="https://wa.me/351960155044?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-background text-primary font-body font-semibold text-base border-2 border-primary hover:bg-primary/5 hover:scale-[1.02] transition-all w-full sm:w-auto"
              style={{ boxShadow: "var(--shadow-soft)" }}>
              <MessageCircle className="w-5 h-5" />
              Message Us on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">

          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="font-display text-2xl">
              Book Your Free 15-Min Call
            </DialogTitle>
          </DialogHeader>
          <div
            id="my-cal-inline-15min"
            style={{ width: "100%", height: "75vh", overflow: "scroll" }}
          />
        </DialogContent>
      </Dialog>
    </section>);

};

export default Hero;
