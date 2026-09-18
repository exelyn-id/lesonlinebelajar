"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export function DecorativeSymbols() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Abstract Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary-light/40 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[30rem] h-[30rem] bg-cream/60 rounded-full blur-3xl"
      />

      {/* Floating Sparkles */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-primary/30"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 text-primary-dark/20"
      >
        <Star className="w-6 h-6" />
      </motion.div>
    </div>
  );
}
