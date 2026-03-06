import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50"
        >
          <div className="bg-card border border-border rounded-2xl p-5 shadow-lg">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We use cookies to improve your experience.{" "}
              <Link to="/privacy" className="text-primary underline underline-offset-2">
                Privacy Policy
              </Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={decline}
                className="flex-1 text-sm py-2 rounded-xl border border-border text-muted-foreground hover:text-foreground transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 text-sm py-2 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
