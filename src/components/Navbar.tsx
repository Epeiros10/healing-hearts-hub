import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
{ label: "About", href: "#about" },
{ label: "AI Support", href: "#ai-chat" },
{ label: "Coaching", href: "#coaching" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-background/90 backdrop-blur-md border-b border-border" :
      "bg-transparent"}`
      }>

      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex flex-col items-center gap-0.5 leading-none">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" className="shrink-0">
            <path d="M16 28C16 28 4 19 4 12a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 7-12 16-12 16Z" className="stroke-primary" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="8" y1="17" x2="24" y2="17" className="stroke-primary/50" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="16" cy="17" r="2.2" className="fill-primary/25" />
            <circle cx="16" cy="17" r="1.2" className="fill-primary" />
          </svg>
          <span className="uppercase tracking-[0.2em] text-black font-normal text-left text-xs font-sans">BREAK UP RECOVERY      </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.label}
            href={link.href}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">

              {link.label}
            </a>
          )}
          <a
            href="#coaching"
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity">

            Get Support
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground">

          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border overflow-hidden">

            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) =>
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-sm text-muted-foreground hover:text-foreground py-2">

                  {link.label}
                </a>
            )}
              <a
              href="#coaching"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium">

                Get Support
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

export default Navbar;