const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center gap-1 mb-4">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <path d="M16 28C16 28 4 19 4 12a6 6 0 0 1 12-1" className="stroke-primary" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M16 28C16 28 28 19 28 12a6 6 0 0 0-12-1" className="stroke-primary" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M16 7 L15 12 L17 16 L15 20 L16 28" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="text-[0.6rem] font-body font-medium uppercase tracking-[0.2em] text-foreground/70">Break Up Recovery</span>
        </div>
        <p className="font-body text-sm text-muted-foreground max-w-md mx-auto mb-6">
          Remember: healing isn't linear, and it's okay to not be okay.
          You're already brave for being here. 💛
        </p>
        <div className="mb-6">
          <h3 className="font-body text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 mb-2">Contact Us</h3>
          <a href="mailto:bfriggi93@gmail.com" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            bfriggi93@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 font-body text-xs text-muted-foreground/60">
          <span>© {new Date().getFullYear()} Break Up Recovery</span>
          <span>·</span>
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
