import { useEffect, useState } from "react";
import { z } from "zod";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = "leadMagnetSeen";
const PDF_URL = "/breakup-recovery-guide.pdf";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Please enter a valid email address" })
  .max(255, { message: "Email is too long" });

const LeadMagnetPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = window.setTimeout(() => setOpen(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  const markSeen = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore storage errors
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) markSeen();
  };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "Breakup-Recovery-Guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from("lead_emails")
        .insert({ email: parsed.data.toLowerCase(), source: "homepage_popup" });

      // Ignore duplicate-key conflicts so repeat users still get the PDF
      if (error && error.code !== "23505") {
        throw error;
      }

      triggerDownload();
      toast.success("Your guide is downloading now. Take care of yourself. 💛");
      markSeen();
      setOpen(false);
    } catch (err) {
      console.error("Lead capture failed", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md w-[95vw] p-0 overflow-hidden rounded-2xl border-0" style={{ boxShadow: "var(--shadow-warm)" }}>
        <div className="px-6 pt-8 pb-6 bg-background">
          <DialogHeader className="text-center space-y-3">
            <DialogTitle className="font-display text-2xl md:text-3xl leading-tight">
              A free guide for the hardest days
            </DialogTitle>
            <DialogDescription className="font-body text-base text-muted-foreground leading-relaxed">
              Gentle, practical steps to help you breathe through heartbreak. Enter your email and we'll send your free Breakup Recovery Guide straight to your device.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <input
              type="email"
              required
              autoComplete="email"
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-base focus:outline-none focus:ring-2 focus:ring-primary/40"
              disabled={submitting}
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body font-medium text-base hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ boxShadow: "var(--shadow-warm)" }}
            >
              <Download className="w-4 h-4" />
              {submitting ? "Preparing your guide..." : "Send me the free guide"}
            </button>
            <p className="text-xs text-center text-muted-foreground font-body">
              No spam. Instant download. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetPopup;
