import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookingDialog from "./BookingDialog";
import logo from "@/assets/logo-monogram.png";

const navLinks = [
{ label: "About", href: "/#about" },
{ label: "Coaching", href: "/#coaching" },
{ label: "Quiz", href: "/quiz", route: true },
{ label: "Text My Ex?", href: "/should-i-text-my-ex", route: true },
{ label: "Blog", href: "/blog", route: true },
{ label: "Contact", href: "/#contact" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-background/90 backdrop-blur-md border-b border-border" :
      "bg-transparent"}`
      }>

      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3 leading-none group">
          <img
            src={logo}
            alt="Couples Coaching With Bruna monogram"
            width={72}
            height={72}
            className="w-14 h-14 md:w-16 md:h-16 shrink-0 drop-shadow-sm transition-transform group-hover:scale-105"
          />
          <span className="inline-flex flex-col leading-none items-stretch">
            <span className="font-display text-primary text-2xl md:text-3xl font-semibold tracking-tight">
              Couples Coaching
            </span>
            <span className="font-body text-[0.65rem] md:text-[0.7rem] uppercase text-accent flex justify-between w-full mt-[2px]">
              {"With Bruna".split("").map((c, i) => (
                <span key={i}>{c === " " ? "\u00A0" : c}</span>
              ))}
            </span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          link.route ?
          <Link
            key={link.label}
            to={link.href}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">

              {link.label}
            </Link> :
          <a
            key={link.label}
            href={link.href}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">

              {link.label}
            </a>
          )}
          <button
            onClick={() => setBookingOpen(true)}
            className="inline-flex items-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity">
            Get Support
          </button>
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
            link.route ?
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-sm text-muted-foreground hover:text-foreground py-2">

                  {link.label}
                </Link> :
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-sm text-muted-foreground hover:text-foreground py-2">

                  {link.label}
                </a>
            )}
              <button
              onClick={() => { setMenuOpen(false); setBookingOpen(true); }}
              className="block w-full text-center py-3 rounded-xl bg-primary text-primary-foreground font-body text-sm font-medium">
                Get Support
              </button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>
    <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </>);

};

export default Navbar;