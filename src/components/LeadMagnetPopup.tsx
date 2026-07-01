import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import workbookAsset from "@/assets/couples-workbook.pdf.asset.json";
import { Heart } from "lucide-react";

const emailSchema = z.string().email("Please enter a valid email address");
const STORAGE_KEY = "leadMagnetSeen_v2";

const LeadMagnetPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) localStorage.setItem(STORAGE_KEY, "true");
    setOpen(isOpen);
  };

  const triggerDownload = () => {
    const a = document.createElement("a");
    a.href = workbookAsset.url;
    a.download = "Couples-Workbook.pdf";
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email.trim());
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase
        .from("lead_emails")
        .insert({ email: parsed.data, source: "workbook_popup" });
      if (error && !error.message.toLowerCase().includes("duplicate")) {
        throw error;
      }
      toast.success("Your workbook is on its way!");
      triggerDownload();
      localStorage.setItem(STORAGE_KEY, "true");
      setOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-display font-semibold text-center">
            Free Couples Workbook
          </DialogTitle>
          <DialogDescription className="text-center font-body">
            Practical prompts and exercises to reconnect, communicate better, and rebuild trust, together.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <Input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11"
          />
          <Button type="submit" disabled={loading} className="w-full h-11 bg-primary hover:bg-primary/90">
            {loading ? "Sending..." : "Send me the workbook"}
          </Button>
          <p className="text-xs text-muted-foreground text-center font-body">
            No spam. Instant download.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetPopup;
