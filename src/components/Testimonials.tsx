import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ScholarPro's data analysis support was exceptional. They understood my quantitative research design immediately and delivered SPSS output that my supervisor praised without reservation.",
    name: "Amara Nwosu",
    degree: "PhD Scholar, Economics — University of Exeter",
    initials: "AN"
  },
  {
    quote: "I was struggling with my thesis proposal for months. Within two weeks of engaging ScholarPro, I had a structured, compelling proposal that was accepted on first submission.",
    name: "Tariq Al-Rashid",
    degree: "MPhil Candidate, Education — University of Edinburgh",
    initials: "TA"
  },
  {
    quote: "The quality of my research paper exceeded what I expected. It was published in a peer-reviewed journal, which I attribute largely to the rigorous literature review they helped me structure.",
    name: "Sofia Mendez",
    degree: "PhD Researcher, Public Health — Kings College London",
    initials: "SM"
  },
  {
    quote: "Confidentiality was my biggest concern. ScholarPro handled my sensitive dissertation topic with complete discretion. The final document was thorough, well-cited, and delivered early.",
    name: "James Okafor",
    degree: "PhD Scholar, Law — University of Birmingham",
    initials: "JO"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/4 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Trusted by researchers worldwide</h3>
          <p className="text-lg text-muted-foreground font-light">
            Our work speaks through the success of the scholars we support. Here is what some of them say.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-6"
            >
              <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
              <p className="text-foreground/80 leading-relaxed font-light flex-1 text-base italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{t.degree}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
