"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, PenTool, MonitorPlay } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: "TK – SMA",
    desc: "Pendampingan belajar untuk berbagai jenjang."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: "Semua Mata Pelajaran",
    desc: "Belajar sesuai kebutuhan dan materi yang sedang dipelajari."
  },
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "TKA & SNBT",
    desc: "Les materi untuk membantu persiapan belajar."
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-primary" />,
    title: "3 Pilihan Format",
    desc: "Privat 1-on-1, Semi Privat (3–5 siswa), dan Berkelompok (min. 10 siswa)."
  }
];

export function ServiceHighlights() {
  return (
    <section className="py-12 bg-primary-light/30 relative">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-border flex items-start gap-4 hover:-translate-y-1 transition-transform"
            >
              <div className="bg-primary-light p-3 rounded-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-text text-lg mb-1">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
