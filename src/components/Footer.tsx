const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center gap-1 mb-4">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <path d="M4 11.5C4 17.5 16 27 16 27C16 27 28 17.5 28 11.5C28 7.36 24.64 4 20.5 4C18.27 4 16.27 5.08 16 6.6C15.73 5.08 13.73 4 11.5 4C7.36 4 4 7.36 4 11.5Z" className="fill-primary/10 stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 6.6V14" className="stroke-primary/40" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="16" cy="18" r="3.5" className="fill-primary/30"/>
            <circle cx="16" cy="18" r="2" className="fill-primary"/>
            <path d="M16 13.5V12.5M20.2 15.3L20.9 14.6M21.5 18H22.5M20.2 20.7L20.9 21.4M16 22.5V23.5M11.8 20.7L11.1 21.4M10.5 18H9.5M11.8 15.3L11.1 14.6" className="stroke-primary" strokeWidth="1" strokeLinecap="round"/>
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
