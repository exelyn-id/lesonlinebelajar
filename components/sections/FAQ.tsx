"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <SectionHeading subtitle="Pertanyaan yang sering diajukan seputar program les online LOBE.">
          FAQ (Tanya Jawab)
        </SectionHeading>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  isOpen ? "border-primary bg-primary-light/10 shadow-sm" : "border-border bg-white hover:border-primary/50"
                )}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-lg text-text pr-4">{faq.question}</span>
                  <div className={cn(
                    "shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
                    isOpen ? "bg-primary text-white" : "bg-cream text-primary-dark"
                  )}>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 md:p-6 pt-0 text-muted leading-relaxed border-t border-primary/10 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
