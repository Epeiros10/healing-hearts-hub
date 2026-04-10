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

        <div className="inline-flex flex-col items-center gap-3 p-8 rounded-2xl border border-border bg-card">
          <Mail className="w-6 h-6 text-primary" />
          <span className="text-sm text-muted-foreground">Email us at</span>
          <a
            href="mailto:bfriggi93@gmail.com"
            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            bfriggi93@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
