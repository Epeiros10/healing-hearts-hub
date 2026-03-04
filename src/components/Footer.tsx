const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center gap-1 mb-4">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <path d="M6 22 C6 22 16 4 26 22" className="stroke-primary" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="16" cy="14" r="2" className="fill-primary" />
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
