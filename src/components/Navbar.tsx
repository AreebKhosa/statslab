import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Why Us", id: "why-us" },
    { name: "Process", id: "process" },
    { name: "Testimonials", id: "testimonials" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-border" 
          : "bg-white py-5 border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-primary focus:outline-none"
        >
          <BookOpen className="h-6 w-6" strokeWidth={2.5} />
          <span className="text-xl font-semibold tracking-tight">ScholarPro</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none"
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus:outline-none"
            >
              Contact Us
            </button>
            <Button onClick={() => scrollTo('contact')} className="rounded-full px-6 font-medium shadow-sm hover:shadow transition-all">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-lg font-medium text-foreground/80 hover:text-primary py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-border my-2" />
              <button
                onClick={() => scrollTo('contact')}
                className="text-left text-lg font-medium text-foreground/80 hover:text-primary py-2"
              >
                Contact Us
              </button>
              <Button onClick={() => scrollTo('contact')} className="w-full mt-2 rounded-full py-6 text-lg">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
