import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsAppCTA } from "@/components/layout/StickyWhatsAppCTA";
import { Hero } from "@/components/sections/Hero";
import { ServiceHighlights } from "@/components/sections/ServiceHighlights";
import { Programs } from "@/components/sections/Programs";
import { Benefits } from "@/components/sections/Benefits";
import { LearningExperience } from "@/components/sections/LearningExperience";
import { FlexibleLearning } from "@/components/sections/FlexibleLearning";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { StudentRegistrationForm } from "@/components/sections/StudentRegistrationForm";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <ServiceHighlights />
        <Programs />
        <Benefits />
        <LearningExperience />
        <FlexibleLearning />
        <Testimonials />
        <FAQ />
        <StudentRegistrationForm />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsAppCTA />
    </>
  );
}
