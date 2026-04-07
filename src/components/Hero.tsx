import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-20 overflow-hidden bg-muted/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/80 md:bg-white/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 md:block hidden" />
        <img 
          src={heroBg} 
          alt="Serene modern library" 
          className="w-full h-full object-cover object-right-bottom mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Premium Academic Support
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Expert Academic Support for Your <span className="text-primary italic font-serif pr-2">Research Success</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Professional, rigorous assistance with data analysis, research papers, and thesis writing for serious MPhil and PhD scholars. Your research deserves the highest standard of excellence.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all group" onClick={scrollToContact}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/50 backdrop-blur hover:bg-white transition-all" onClick={scrollToContact}>
              Contact Us
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex items-center gap-6 text-sm font-medium text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-xs font-bold text-secondary-foreground shadow-sm">
                  {['JD', 'AS', 'MR', 'KL'][i-1]}
                </div>
              ))}
            </div>
            <p>Trusted by 500+ researchers globally</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
