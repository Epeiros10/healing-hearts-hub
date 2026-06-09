import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

const coaches = [
  {
    name: "Bruna",
    role: "Certified Relationship Coach",
    image: "/lovable-uploads/fcd8f7c5-6bdb-4624-9f54-70365fb58964.png",
    calendly: "https://cal.com/bruna-friggi-zjnhgp/45-min-call",
    style: "Warm, intuitive, specializing in attachment patterns and emotional processing.",
  },
  {
    name: "Pascal",
    role: "Certified Relationship Coach",
    image: "/lovable-uploads/4fbc4fcb-b5cf-4789-87e6-02b5b67ee9ab.png",
    calendly: "https://cal.com/pascal-niggli-uenxj0/45-min-coaching-call?overlayCalendar=true",
    style: "Grounded, practical, focused on rebuilding confidence and moving forward.",
  },
];

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 rounded-2xl max-h-[90vh] overflow-y-auto max-w-[calc(100%-2rem)]">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl sm:text-2xl font-display font-semibold text-center">
            Book Your First Session
          </DialogTitle>
          <p className="text-sm text-muted-foreground font-body text-center mt-1">
            Choose your coach
          </p>
        </DialogHeader>

        <div className="grid sm:grid-cols-2 gap-4 px-4 sm:px-6 pb-6">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="bg-muted/50 rounded-xl border border-border overflow-hidden flex flex-col"
            >
              <div className="aspect-[3/4] bg-muted">
                <img
                  src={coach.image}
                  alt={`${coach.name}, ${coach.role}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-display font-semibold">{coach.name}</h3>
                <p className="text-primary text-[11px] font-body font-medium uppercase tracking-wide mb-2">
                  {coach.role}
                </p>
                <p className="text-muted-foreground font-body text-xs leading-relaxed mb-4 flex-1">
                  {coach.style}
                </p>
                <a
                  href={coach.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Book Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
