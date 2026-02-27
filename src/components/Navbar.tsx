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
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="shrink-0 rounded-md shadow-inner border-destructive border-0">
            {/* Heart outline */}
            <path d="M4 11.5C4 17.5 16 27 16 27C16 27 28 17.5 28 11.5C28 7.36 24.64 4 20.5 4C18.27 4 16.27 5.08 16 6.6C15.73 5.08 13.73 4 11.5 4C7.36 4 4 7.36 4 11.5Z" className="fill-primary/10 stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Crack/gap */}
            <path d="M16 6.6V14" className="stroke-primary/40" strokeWidth="1.2" strokeLinecap="round" />
            {/* Sunrise rays */}
            <circle cx="16" cy="18" r="3.5" className="fill-primary/30" />
            <circle cx="16" cy="18" r="2" className="fill-primary" />
            <path d="M16 13.5V12.5M20.2 15.3L20.9 14.6M21.5 18H22.5M20.2 20.7L20.9 21.4M16 22.5V23.5M11.8 20.7L11.1 21.4M10.5 18H9.5M11.8 15.3L11.1 14.6" className="stroke-primary" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="uppercase tracking-[0.2em] font-mono text-black font-normal text-sm text-left">BREAK UP RECOVERY</span>
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