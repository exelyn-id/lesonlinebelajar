"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/constants";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    setLightboxOpen(true);
    // Prevent scrolling when lightbox is open
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeading subtitle="Cerita sukses dan pengalaman belajar dari siswa dan orang tua bersama LOBE.">
          Kata Mereka Tentang LOBE
        </SectionHeading>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-12 z-10">
            <button
              onClick={handlePrev}
              className="bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-primary-light transition-colors border border-border"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary-dark" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-12 z-10">
            <button
              onClick={handleNext}
              className="bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-primary-light transition-colors border border-border"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary-dark" />
            </button>
          </div>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-xl bg-white border border-border">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testi, idx) => (
                <div key={idx} className="w-full shrink-0 flex flex-col items-center">
                  <div 
                    className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-gray-100 cursor-pointer group overflow-hidden"
                    onClick={() => openLightbox(testi.src)}
                  >
                    <Image
                      src={testi.src}
                      alt={testi.alt}
                      fill
                      className="object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                        <ZoomIn className="w-6 h-6 text-primary-dark" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 w-full text-center bg-white">
                    <p className="font-semibold text-lg md:text-xl text-text">
                      {testi.alt}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted mb-4">Ingin melihat lebih banyak testimoni dan kegiatan belajar kami?</p>
          <a 
            href="https://www.instagram.com/les_onlinebelajar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-md hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Kunjungi Instagram LOBE
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Testimonial full view"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
