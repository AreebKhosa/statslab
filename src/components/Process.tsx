import { motion } from "framer-motion";
import { ClipboardList, MessageSquare, Layers, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList className="w-6 h-6 text-primary" />,
    title: "Submit Requirements",
    description: "Share your research topic, requirements, deadline, and any specific guidelines. The more detail, the better we can serve you."
  },
  {
    number: "02",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Get a Quote",
    description: "Receive a transparent, itemized quote within 24 hours. No surprises — we discuss scope and pricing before any work begins."
  },
  {
    number: "03",
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: "Work in Progress",
    description: "Our expert researchers get to work. You receive regular updates and can review drafts at every milestone."
  },
  {
    number: "04",
    icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
    title: "Delivery",
    description: "Receive your completed, polished work ahead of schedule. Includes plagiarism report and unlimited revisions within scope."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">From brief to brilliant in four steps</h3>
          <p className="text-lg text-muted-foreground font-light">
            A streamlined process designed to minimize friction and maximize the quality of your final work.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" style={{ top: "4rem" }} />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 relative bg-white shadow-sm">
                  {step.icon}
                  <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{step.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
