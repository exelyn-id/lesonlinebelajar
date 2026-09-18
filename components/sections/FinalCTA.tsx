"use client";

import React from "react";
import { motion } from "framer-motion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-primary z-0" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-dark/50 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 md:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-tight">
            Siap Membantu Anak Anda Belajar Lebih Baik?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Hubungi kami sekarang untuk berkonsultasi mengenai program belajar yang paling tepat untuk kebutuhan anak Anda.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <WhatsAppButton 
              size="lg" 
              variant="light" 
              label="Konsultasi Gratis via WhatsApp" 
              className="text-lg px-8 h-14"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
