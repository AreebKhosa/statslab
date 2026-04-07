import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full bg-background font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
