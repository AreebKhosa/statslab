import { BookOpen, Mail, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Services", id: "services" },
  { label: "Why Us", id: "why-us" },
  { label: "Process", id: "process" },
  { label: "Testimonials", id: "testimonials" }
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-foreground text-white/80">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-white focus:outline-none w-fit"
            >
              <BookOpen className="h-6 w-6" strokeWidth={2.5} />
              <span className="text-xl font-semibold tracking-tight">ScholarPro</span>
            </button>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs">
              Premium academic support for MPhil and PhD researchers. Expert help, delivered with integrity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/50 hover:text-white text-sm transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:support@scholarpro.com"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                support@scholarpro.com
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                +1 (555) 123-4567 (WhatsApp)
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} ScholarPro. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Professional Academic Support Services
          </p>
        </div>
      </div>
    </footer>
  );
}
