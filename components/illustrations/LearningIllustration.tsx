"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, Mic, MicOff, VideoOff, MessageSquare, CheckSquare, Smile } from "lucide-react";

export function LearningIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto h-[320px] sm:h-[400px] md:h-auto md:aspect-video bg-cream rounded-2xl shadow-xl overflow-hidden border border-border">
      {/* Fake Browser/App Header */}
      <div className="h-10 bg-white border-b border-border flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="mx-auto h-5 w-48 bg-cream rounded text-[10px] text-center leading-5 text-muted font-medium flex items-center justify-center gap-2">
          <Video className="w-3 h-3" /> meet.google.com/lobe-class
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 h-[calc(100%-2.5rem)] flex flex-col md:flex-row gap-4">
        {/* Main Video Area (Tutor) */}
        <div className="flex-1 bg-white rounded-xl overflow-hidden relative border border-border flex items-center justify-center">
          <div className="absolute inset-0 bg-primary-light/30" />
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-sm z-10"
          >
            T
          </motion.div>
          <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-10">
            Tutor LOBE
          </div>
          <div className="absolute top-3 right-3 flex gap-1 z-10">
            <div className="bg-black/50 p-1.5 rounded-md backdrop-blur-sm">
              <Mic className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Side Panel (Student & Chat/Notes) */}
        <div className="w-full md:w-32 flex flex-row md:flex-col gap-4">
          {/* Student Video */}
          <div className="w-24 md:w-full aspect-video bg-white rounded-xl overflow-hidden relative border border-border flex items-center justify-center">
            <div className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-primary-dark font-bold text-sm shadow-sm z-10">
              S
            </div>
            <div className="absolute bottom-1.5 left-1.5 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm z-10">
              Siswa
            </div>
          </div>
          
          {/* Fake Progress/Checklist */}
          <div className="flex-1 bg-white rounded-xl border border-border p-3 flex flex-col gap-3">
            <div className="text-xs font-semibold text-text border-b border-border pb-1">Materi Hari Ini</div>
            <div className="flex flex-col gap-2">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <CheckSquare className="w-3 h-3 text-green-500" />
                <div className="h-2 w-16 bg-cream rounded" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 border border-muted rounded-sm" />
                <div className="h-2 w-12 bg-cream rounded" />
              </motion.div>
            </div>
            <div className="mt-auto flex items-center gap-2 bg-cream p-1.5 rounded-lg">
              <MessageSquare className="w-3 h-3 text-primary" />
              <div className="h-1.5 w-10 bg-white rounded" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements Outside */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -right-6 -bottom-6 w-16 h-16 bg-white rounded-2xl shadow-lg border border-border flex items-center justify-center rotate-12"
      >
        <Smile className="w-8 h-8 text-amber-400" />
      </motion.div>
    </div>
  );
}
