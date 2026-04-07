import { motion } from "framer-motion";
import dataImg from "@/assets/data-analysis.png";
import paperImg from "@/assets/research-paper.png";
import thesisImg from "@/assets/thesis.png";
import { BarChart3, FileText, BookMarked, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Data Analysis",
    description: "Expert statistical analysis using SPSS, R, Python, and STATA. We translate complex data into clear, compelling narratives for your research.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    image: dataImg,
    tags: ["Quantitative", "Qualitative", "SPSS", "R", "Python"]
  },
  {
    title: "Research Paper Writing",
    description: "Rigorous, publication-ready research papers tailored to top-tier journal standards. Original, perfectly structured, and meticulously cited.",
    icon: <FileText className="w-6 h-6 text-primary" />,
    image: paperImg,
    tags: ["Literature Review", "Methodology", "Formatting"]
  },
  {
    title: "Thesis & Dissertation",
    description: "Comprehensive support for MPhil and PhD candidates. From proposal to final defense, we guide your magnum opus to completion.",
    icon: <BookMarked className="w-6 h-6 text-primary" />,
    image: thesisImg,
    tags: ["PhD", "MPhil", "Proposals", "Editing"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Rigorous academic support</h3>
          <p className="text-lg text-muted-foreground font-light">
            We provide specialized, high-end services to streamline your research journey. Every project is handled with precision and deep academic understanding.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-muted-foreground mb-6 flex-1 font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="w-fit p-0 h-auto hover:bg-transparent hover:text-primary font-semibold group/btn">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
