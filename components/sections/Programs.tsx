"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { programs } from "@/lib/constants";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Book, Compass, PenTool } from "lucide-react";

export function Programs() {
  const getIcon = (title: string) => {
    switch(title) {
      case "TK": return <Compass className="w-7 h-7" />;
      case "SD": return <Book className="w-7 h-7" />;
      case "SMP": return <Briefcase className="w-7 h-7" />;
      case "SMA": return <GraduationCap className="w-7 h-7" />;
      default: return <Book className="w-7 h-7" />;
    }
  };

  return (
    <section id="program" className="py-20 md:py-28 bg-cream relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="LOBE menyediakan les online untuk berbagai jenjang dan kebutuhan belajar.">
          Pilih Program Belajar Sesuai Kebutuhan
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProgramCard
                title={prog.title}
                description={prog.description}
                badge={prog.badge}
                icon={getIcon(prog.title)}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Featured Card for TKA & SNBT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-border flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary-light/50 rounded-tl-full -z-10 translate-x-1/4 translate-y-1/4" />
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="bg-primary/10 p-2.5 rounded-xl">
                <PenTool className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text">Persiapan TKA & SNBT</h3>
            </div>
            <p className="text-muted text-lg max-w-xl">
              Tersedia les materi untuk membantu siswa belajar dan mempersiapkan kebutuhan akademiknya.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <WhatsAppButton label="Konsultasikan Kebutuhan" size="lg" className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
