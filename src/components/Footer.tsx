const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="font-display text-lg font-semibold tracking-tight">
            <span className="text-primary">b</span>
            <span className="text-foreground/80">r</span>
            <span className="text-muted-foreground text-[0.6em] mx-[2px] align-middle">•</span>
          </span>
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
