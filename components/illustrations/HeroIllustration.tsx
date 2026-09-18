"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Pencil, CheckCircle, GraduationCap, Calculator } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-primary-light/50 rounded-full blur-3xl"
      />

      {/* Orbit Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 border-[1.5px] border-dashed border-primary/20 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem] border-[1.5px] border-dashed border-primary/10 rounded-full" />

      {/* Central Abstract Element */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative z-10 bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-border"
      >
        <div className="w-20 h-20 md:w-32 md:h-32 bg-primary-light rounded-2xl flex items-center justify-center">
          <GraduationCap className="w-10 h-10 md:w-16 md:h-16 text-primary" />
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-6 md:top-20 md:right-20 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-border z-20"
      >
        <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-primary" />
      </motion.div>

      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 right-2 md:bottom-24 md:right-12 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-md border border-border flex items-center gap-2 z-20"
      >
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span className="text-xs md:text-sm font-semibold text-text">TKA & SNBT</span>
      </motion.div>

      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-32 left-4 md:top-40 md:left-8 bg-white p-2 md:p-3 rounded-xl shadow-md border border-border z-20"
      >
        <Calculator className="w-5 h-5 md:w-6 md:h-6 text-primary-dark" />
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 left-4 md:bottom-40 md:left-20 bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-lg rotate-[-5deg] z-20"
      >
        <span className="text-xs md:text-sm font-bold">1 Tutor 1 Murid</span>
      </motion.div>
      
      <motion.div
        animate={{ rotate: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 bg-cream p-2 rounded-full"
      >
        <Pencil className="w-4 h-4 text-muted" />
      </motion.div>
    </div>
  );
}
