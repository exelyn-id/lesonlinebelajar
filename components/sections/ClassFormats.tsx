"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Users, GraduationCap, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { classFormats } from "@/lib/constants";
import Link from "next/link";

export function ClassFormats() {
  const getIcon = (id: string) => {
    switch (id) {
      case "privat":
        return <User className="w-7 h-7 text-primary" />;
      case "semi-privat":
        return <Users className="w-7 h-7 text-primary" />;
      case "kelompok":
        return <GraduationCap className="w-7 h-7 text-primary" />;
      default:
        return <Users className="w-7 h-7 text-primary" />;
    }
  };

  return (
    <section id="format-belajar" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-cream/70 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Pilihan Format Belajar Terbaru</span>
          </div>
          <SectionHeading
            centered
            subtitle="Pilih suasana belajar yang paling cocok untuk putra-putri Anda: privat fokus satu-satu, interaksi grup kecil semi privat, atau belajar hemat berkelompok."
          >
            3 Format Kelas Belajar di LOBE
          </SectionHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {classFormats.map((format, idx) => (
            <motion.div
              key={format.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                format.popular
                  ? "bg-gradient-to-b from-primary-light/40 via-white to-white border-primary shadow-xl ring-2 ring-primary/20 hover:-translate-y-1.5"
                  : "bg-white border-border shadow-md hover:shadow-lg hover:border-primary/50 hover:-translate-y-1"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-full ${
                    format.popular
                      ? "bg-primary text-white shadow-sm"
                      : "bg-primary-light text-primary-dark"
                  }`}
                >
                  {format.badge}
                </span>

                <div className="w-12 h-12 rounded-2xl bg-cream border border-border flex items-center justify-center shrink-0">
                  {getIcon(format.id)}
                </div>
              </div>

              {/* Title & Level */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text mb-1">{format.title}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{format.subtitle}</p>
                <div className="inline-block bg-primary/10 text-primary-dark font-medium text-xs px-3 py-1 rounded-md mb-4">
                  {format.levels}
                </div>
                <p className="text-muted text-sm leading-relaxed">{format.description}</p>
              </div>

              {/* Features List */}
              <div className="mb-8 pt-6 border-t border-border/70 flex-grow">
                <p className="text-xs font-bold uppercase tracking-wider text-text mb-4">
                  Keunggulan Format:
                </p>
                <ul className="space-y-3">
                  {format.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-text">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <Button
                  as={Link}
                  href="#daftar"
                  variant={format.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full flex items-center justify-center gap-2 group text-sm sm:text-base h-12 rounded-2xl"
                >
                  <span>{format.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note banner under formats */}
        <div className="mt-12 p-6 rounded-2xl bg-primary-light/50 border border-primary/20 text-center max-w-4xl mx-auto">
          <p className="text-sm text-text font-medium leading-relaxed">
            💡 <strong className="text-primary-dark">Bingung memilih format yang tepat?</strong> Anda bisa berkonsultasi gratis terlebih dahulu dengan Admin LOBE via WhatsApp untuk mendapatkan saran terbaik sesuai kepribadian & target belajar anak.
          </p>
        </div>
      </div>
    </section>
  );
}
