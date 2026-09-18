"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BenefitCard } from "@/components/ui/BenefitCard";
import { benefits } from "@/lib/constants";
import { motion } from "framer-motion";
import { Award, Video, Users, Monitor, BookOpenCheck, Wallet } from "lucide-react";

export function Benefits() {
  const getIcon = (index: number) => {
    const icons = [
      <Award key={0} className="w-8 h-8" />,
      <Video key={1} className="w-8 h-8" />,
      <Users key={2} className="w-8 h-8" />,
      <Monitor key={3} className="w-8 h-8" />,
      <BookOpenCheck key={4} className="w-8 h-8" />,
      <Wallet key={5} className="w-8 h-8" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Belajar dibuat lebih nyaman, fokus, dan sesuai kebutuhan siswa.">
          Kenapa Pilih LOBE?
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                icon={getIcon(i)}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
