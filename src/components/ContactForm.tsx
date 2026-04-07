import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";

const services = [
  "Data Analysis (SPSS, R, Python)",
  "Research Paper Writing",
  "Thesis & Dissertation (MPhil)",
  "Thesis & Dissertation (PhD)",
  "Other"
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    deadline: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Request a Free Quote</h3>
          <p className="text-lg text-muted-foreground font-light">
            Tell us about your project and we will get back to you within 24 hours with a tailored quote.
          </p>
        </div>

        <motion.div
          className="max-w-2xl mx-auto bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {submitted ? (
            <motion.div
              className="flex flex-col items-center text-center py-8 gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-2xl font-bold text-foreground">Message Received</h4>
              <p className="text-muted-foreground font-light max-w-md">
                Thank you for reaching out. One of our academic consultants will review your requirements and respond within 24 hours.
              </p>
              <Button
                variant="outline"
                className="mt-4 rounded-full px-8"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", whatsapp: "", service: "", deadline: "", message: "" });
                }}
              >
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. Jane Smith"
                    className="h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@university.ac.uk"
                    className="h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="whatsapp" className="text-sm font-medium text-foreground">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <MessageCircle className="w-4 h-4 text-muted-foreground" />
                  </span>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="+1 555 123 4567"
                    className="h-11 w-full rounded-lg border border-input bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service Required <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="deadline" className="text-sm font-medium text-foreground">
                    Submission Deadline
                  </label>
                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={form.deadline}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Project Details <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your research topic, word count, specific requirements, formatting guidelines, or any other details that will help us understand your needs..."
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none leading-relaxed"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all group mt-2"
              >
                Send Request
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting this form you agree to our privacy policy. Your information is kept strictly confidential.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
