const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0">
            <path d="M3 8.5C3 13.5 12 21 12 21C12 21 21 13.5 21 8.5C21 5.42 18.58 3 15.5 3C13.76 3 12.09 3.81 12 5C11.91 3.81 10.24 3 8.5 3C5.42 3 3 5.42 3 8.5Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
          </svg>
          <span className="font-display text-lg font-semibold tracking-tight">Break Up Recovery</span>
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
