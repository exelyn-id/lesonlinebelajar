import React from "react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Program", href: "#program" },
  { name: "Keunggulan", href: "#keunggulan" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-cream py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl flex flex-col items-center text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">LOBE</h2>
          <p className="text-lg font-medium opacity-90">Les Online Belajar</p>
        </div>
        
        <p className="max-w-md mx-auto mb-10 opacity-80 leading-relaxed">
          Les online untuk TK, SD, SMP, dan SMA. Semua mata pelajaran serta les materi TKA dan SNBT.
        </p>
        
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href}
                className="text-cream opacity-80 hover:opacity-100 transition-opacity text-sm md:text-base font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mb-12">
          <WhatsAppButton variant="light" label="Hubungi via WhatsApp" />
        </div>
        
        <div className="border-t border-cream/20 pt-8 w-full">
          <p className="text-sm opacity-60">
            © {currentYear} LOBE — Les Online Belajar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
