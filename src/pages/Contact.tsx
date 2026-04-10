import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-20">
      <div className="max-w-3xl mx-auto font-body text-center">
        <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">← Back to home</a>
        
        <h1 className="text-3xl font-serif font-semibold text-foreground mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          Have a question, feedback, or just need someone to point you in the right direction? We'd love to hear from you.
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-border bg-card hover:border-primary/30 transition-colors">
          <Mail className="w-5 h-5 text-primary" />
          <a
            href="mailto:bfriggi93@gmail.com"
            className="text-base font-medium text-foreground hover:text-primary transition-colors"
          >
            bfriggi93@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
