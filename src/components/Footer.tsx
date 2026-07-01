import logo from "@/assets/logo-monogram.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center gap-2 mb-4">
          <img src={logo} alt="Couples Coaching With Bruna monogram" width={40} height={40} className="w-10 h-10" loading="lazy" />
          <span className="text-[0.65rem] font-body font-medium uppercase tracking-[0.2em] text-foreground/70">Couples Coaching With Bruna</span>
        </div>
        <p className="font-body text-sm text-muted-foreground max-w-md mx-auto mb-6">
          Relationship coaching for couples, communication, connection, and healing.
          Wherever you are in your relationship, you don't have to figure it out alone. 💜
        </p>
        <div className="flex items-center justify-center gap-3 font-body text-xs text-muted-foreground/60">
          <span>© {new Date().getFullYear()} Couples Coaching With Bruna</span>
          <span>·</span>
          <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
          <span>·</span>
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
