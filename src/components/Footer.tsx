const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center gap-1 mb-4">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <path d="M16 28C16 28 4 19 4 12a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 7-12 16-12 16Z" className="stroke-primary" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="8" y1="17" x2="24" y2="17" className="stroke-primary/50" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="16" cy="17" r="2.2" className="fill-primary/25" />
            <circle cx="16" cy="17" r="1.2" className="fill-primary" />
          </svg>
          <span className="text-[0.6rem] font-body font-medium uppercase tracking-[0.2em] text-foreground/70">Break Up Recovery</span>
        </div>
        <p className="font-body text-sm text-muted-foreground max-w-md mx-auto mb-6">
          Remember: healing isn't linear, and it's okay to not be okay.
          You're already brave for being here. 💛
        </p>
        <p className="font-body text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Break Up Recovery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
