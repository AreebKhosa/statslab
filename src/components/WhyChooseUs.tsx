import { motion } from "framer-motion";
import { ShieldCheck, Clock, Lock, Users, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Experienced Researchers",
    description: "Our team consists of PhD holders and senior academics with deep domain expertise across disciplines."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Plagiarism-Free Work",
    description: "Every piece is written from scratch with full originality reports provided. Zero tolerance for academic dishonesty."
  },
  {
    icon: <Lock className="w-6 h-6 text-primary" />,
    title: "Confidentiality Guaranteed",
    description: "Your identity and research details remain strictly private. We never share or resell client work."
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "On-Time Delivery",
    description: "Deadlines are sacred to us. We build in review cycles while ensuring delivery ahead of your submission date."
  },
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: "Affordable Pricing",
    description: "Transparent, fair pricing for students and researchers. No hidden fees, with flexible payment plans available."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" }
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Why ScholarPro</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Built on trust, delivered with excellence</h3>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We understand the pressures of academic research. Every aspect of our service is designed around what serious scholars actually need.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h4>
              <p className="text-muted-foreground font-light leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
