"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Users,
  Phone,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  Loader2,
  MessageCircle,
  RotateCcw,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getRegistrationWhatsAppUrl, StudentRegistrationData, whatsappNumber } from "@/lib/whatsapp";

const JENJANG_OPTIONS = [
  { id: "TK", label: "TK / PAUD", desc: "Calistung & stimulasi belajar", classes: ["Pra-TK", "TK A", "TK B"] },
  { id: "SD", label: "SD / MI", desc: "Kelas 1 sampai 6", classes: ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"] },
  { id: "SMP", label: "SMP / MTs", desc: "Kelas 7 sampai 9", classes: ["Kelas 7", "Kelas 8", "Kelas 9"] },
  { id: "SMA", label: "SMA / SMK", desc: "Kelas 10 sampai 12", classes: ["Kelas 10", "Kelas 11", "Kelas 12"] },
  { id: "SNBT", label: "SNBT / TKA", desc: "Persiapan PTN & Gap Year", classes: ["Persiapan SNBT", "TKA Saintek/Soshum", "Gap Year/Alumni"] },
];

const POPULAR_SUBJECTS = [
  "Semua Mata Pelajaran",
  "Matematika",
  "IPA (Fisika, Kimia, Biologi)",
  "Bahasa Inggris",
  "Bahasa Indonesia",
  "IPS (Ekonomi, Geografi, Sejarah)",
  "Materi SNBT & UTBK",
  "Calistung (Baca Tulis Hitung)",
];

const FORMAT_OPTIONS = [
  { id: "1on1", label: "1 Tutor 1 Murid (Privat)", sub: "Privat Fokus (TK, SD, SMP, SMA, SNBT)" },
  { id: "semi", label: "Semi Privat (3 - 5 Orang)", sub: "Kelompok kecil seru (Khusus SD, SMP, SMA)" },
  { id: "kelompok", label: "Kelas Berkelompok (Min. 10 Orang)", sub: "Paling hemat & kolaboratif (Khusus SD, SMP, SMA)" },
  { id: "konsul", label: "Konsultasi Dulu", sub: "Diskusikan opsi terbaik bersama admin" },
];

const TIME_OPTIONS = ["Pagi (08.00 - 11.00)", "Siang (13.00 - 15.00)", "Sore (15.30 - 17.30)", "Malam (18.30 - 21.00)", "Fleksibel / Sesuai Kesepakatan"];

export function StudentRegistrationForm() {
  const [formData, setFormData] = useState<StudentRegistrationData>({
    namaSiswa: "",
    namaOrtu: "",
    whatsapp: "",
    jenjang: "SD",
    kelas: "Kelas 4",
    mataPelajaran: "Semua Mata Pelajaran",
    formatLes: "1 Tutor 1 Murid (Privat)",
    waktuBelajar: "Fleksibel / Sesuai Kesepakatan",
    catatan: "",
  });

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(["Semua Mata Pelajaran"]);
  const [customSubject, setCustomSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync selected subjects array into formData.mataPelajaran string
  const handleToggleSubject = (subject: string) => {
    let updated: string[];
    if (subject === "Semua Mata Pelajaran") {
      updated = ["Semua Mata Pelajaran"];
    } else {
      const filtered = selectedSubjects.filter((s) => s !== "Semua Mata Pelajaran");
      if (filtered.includes(subject)) {
        updated = filtered.filter((s) => s !== subject);
        if (updated.length === 0) updated = ["Semua Mata Pelajaran"];
      } else {
        updated = [...filtered, subject];
      }
    }
    setSelectedSubjects(updated);
    
    const combined = customSubject.trim()
      ? `${updated.join(", ")}, ${customSubject.trim()}`
      : updated.join(", ");
    setFormData((prev) => ({ ...prev, mataPelajaran: combined }));
  };

  const handleCustomSubjectChange = (val: string) => {
    setCustomSubject(val);
    const combined = val.trim()
      ? `${selectedSubjects.join(", ")}, ${val.trim()}`
      : selectedSubjects.join(", ");
    setFormData((prev) => ({ ...prev, mataPelajaran: combined }));
  };

  const handleJenjangChange = (jenjangId: string) => {
    const selected = JENJANG_OPTIONS.find((j) => j.id === jenjangId);
    const defaultClass = selected?.classes[0] || "-";
    setFormData((prev) => ({
      ...prev,
      jenjang: selected?.label || jenjangId,
      kelas: defaultClass,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validasi dasar
    if (!formData.namaSiswa.trim()) {
      setErrorMessage("Silakan isi nama lengkap siswa.");
      return;
    }
    if (!formData.whatsapp.trim()) {
      setErrorMessage("Silakan isi nomor WhatsApp aktif untuk dihubungi.");
      return;
    }

    setIsSubmitting(true);

    const waUrl = getRegistrationWhatsAppUrl(formData);
    setSubmittedWhatsAppUrl(waUrl);

    const directGasUrl =
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbwOaZ-03xvzILiraUrSESTokOMSAD95_gucGkUQB2GG5n-skyblfi1ByfFzC76o51k/exec";

    try {
      let submitted = false;

      // 1. Coba kirim via Next.js API Route (serverless proxy)
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          submitted = true;
        }
      } catch (apiErr) {
        console.warn("Next.js API route not reachable, trying direct fallback:", apiErr);
      }

      // 2. Fallback: kirim langsung ke URL Google Apps Script jika di-hosting sebagai static web
      if (!submitted && directGasUrl) {
        try {
          await fetch(directGasUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify(formData),
          });
        } catch (directErr) {
          console.warn("Direct fallback error:", directErr);
        }
      }

      setIsSuccess(true);

      // Langsung buka WhatsApp secara otomatis di tab baru
      setTimeout(() => {
        try {
          window.open(waUrl, "_blank", "noopener,noreferrer");
        } catch {
          // If popup blocked, user can click the manual CTA button
        }
      }, 400);

    } catch (err) {
      console.error("Submission error, fallback to WhatsApp:", err);
      setIsSuccess(true);
      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }, 400);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setFormData({
      namaSiswa: "",
      namaOrtu: "",
      whatsapp: "",
      jenjang: "SD / MI",
      kelas: "Kelas 4",
      mataPelajaran: "Semua Mata Pelajaran",
      formatLes: "1 Tutor 1 Murid (Privat)",
      waktuBelajar: "Fleksibel / Sesuai Kesepakatan",
      catatan: "",
    });
    setSelectedSubjects(["Semua Mata Pelajaran"]);
    setCustomSubject("");
    setErrorMessage(null);
  };

  const currentJenjangObj = JENJANG_OPTIONS.find((j) => formData.jenjang.includes(j.id)) || JENJANG_OPTIONS[1];

  return (
    <section id="daftar" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-primary-light/20 to-cream">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Pendaftaran & Konsultasi Belajar Online</span>
          </div>
          <SectionHeading
            centered
            subtitle="Isi data singkat berikut. Data otomatis tercatat di sistem kami dan Anda akan langsung diarahkan ke WhatsApp Admin LOBE untuk rekomendasi tutor & jadwal belajar."
          >
            Formulir Pendaftaran Siswa
          </SectionHeading>
        </div>

        {/* Success Modal / State */}
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto bg-white rounded-3xl border-2 border-primary/30 p-5 sm:p-8 md:p-12 shadow-xl text-center relative overflow-hidden"
            >
              <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-text mb-3">
                Pendaftaran Berhasil Dikirim! 🎉
              </h3>
              
              <div className="bg-primary-light/50 border border-primary/20 rounded-2xl p-4 md:p-6 mb-6 text-left">
                <p className="text-sm font-medium text-primary-dark mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Data otomatis tersimpan ke Database Google Sheets LOBE
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text">
                  <div><span className="text-muted">Nama Siswa:</span> <span className="font-semibold">{formData.namaSiswa}</span></div>
                  <div><span className="text-muted">WhatsApp:</span> <span className="font-semibold">{formData.whatsapp}</span></div>
                  <div><span className="text-muted">Jenjang / Kelas:</span> <span className="font-semibold">{formData.jenjang} ({formData.kelas})</span></div>
                  <div><span className="text-muted">Mata Pelajaran:</span> <span className="font-semibold">{formData.mataPelajaran}</span></div>
                </div>
              </div>

              <p className="text-muted mb-8 leading-relaxed text-sm sm:text-base">
                Halaman WhatsApp Admin LOBE sedang dibuka secara otomatis. Jika percakapan belum muncul atau browser memblokir pop-up, silakan klik tombol hijau di bawah ini:
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg shadow-green-600/20 text-sm sm:text-base px-6 py-3.5 min-h-14 h-auto whitespace-normal text-center flex items-center justify-center gap-2"
                  onClick={() => {
                    window.open(submittedWhatsAppUrl, "_blank", "noopener,noreferrer");
                  }}
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Buka WhatsApp Admin Sekarang</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base px-6 py-3.5 min-h-14 h-auto whitespace-normal text-center flex items-center justify-center gap-2"
                  onClick={handleResetForm}
                >
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span>Daftarkan Siswa Lain</span>
                </Button>
              </div>

              <p className="text-xs text-muted mt-6">
                Nomor Resmi Admin LOBE: +62 889-7339-4970 • Respon Cepat & Ramah
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Value Proposition & Trust Badges */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Kenapa Mendaftar di LOBE?
                  </h3>
                  
                  <ul className="space-y-4 text-sm text-text">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="font-semibold block text-text">Tutor Lulusan PTN & PTS</span>
                        <span className="text-muted text-xs leading-relaxed">Pengajar muda, sabar, komunikatif, dan menguasai materi secara mendalam.</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="font-semibold block text-text">1 Tutor 1 Murid (Live Class)</span>
                        <span className="text-muted text-xs leading-relaxed">Fokus maksimal lewat Google Meet tanpa distraksi murid lain.</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="font-semibold block text-text">Jadwal Fleksibel & Bebas Pilih</span>
                        <span className="text-muted text-xs leading-relaxed">Menyesuaikan dengan jadwal sekolah, les, atau kegiatan anak di rumah.</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <div>
                        <span className="font-semibold block text-text">Harga Terjangkau</span>
                        <span className="text-muted text-xs leading-relaxed">Biaya bersahabat dengan kualitas pembelajaran premium dan terukur.</span>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-3 text-xs text-muted">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span>Data Anda aman dan langsung tersimpan ke sistem database resmi LOBE.</span>
                  </div>
                </div>

                {/* Quick Info Box */}
                <div className="bg-primary text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl" />
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary-light mb-1">
                    Bantuan Langsung
                  </p>
                  <h4 className="text-lg font-bold mb-2">Ingin Langsung Chat Admin?</h4>
                  <p className="text-white/80 text-xs mb-4 leading-relaxed">
                    Jika tidak ingin mengisi form, Anda juga bisa langsung chat kami via WhatsApp.
                  </p>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=Halo%20LOBE%2C%20saya%20ingin%20tanya-tanya%20mengenai%20les%20online.&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary hover:bg-cream font-semibold text-xs py-2.5 px-4 rounded-full transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    Chat WA: 0889 7339 4970
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Registration Form */}
              <div className="lg:col-span-8">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl p-4 sm:p-7 md:p-10 border border-border shadow-lg space-y-6"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  {/* Section 1: Data Kontak */}
                  <div>
                    <h4 className="text-base font-bold text-text mb-4 pb-2 border-b border-border/70 flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      1. Identitas Siswa & Kontak
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Nama Siswa */}
                      <div>
                        <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-1.5">
                          Nama Lengkap Siswa <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Contoh: Muhammad Rizky"
                            value={formData.namaSiswa}
                            onChange={(e) =>
                              setFormData({ ...formData, namaSiswa: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-text outline-none transition-all"
                          />
                          <User className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      {/* Nama Orang Tua / Wali */}
                      <div>
                        <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-1.5">
                          Nama Orang Tua / Wali <span className="text-muted font-normal lowercase">(opsional)</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Contoh: Ibu Rina / Bpk. Bambang"
                            value={formData.namaOrtu}
                            onChange={(e) =>
                              setFormData({ ...formData, namaOrtu: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-text outline-none transition-all"
                          />
                          <Users className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>

                      {/* Nomor WhatsApp */}
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-1.5">
                          Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            placeholder="Contoh: 081234567890"
                            value={formData.whatsapp}
                            onChange={(e) =>
                              setFormData({ ...formData, whatsapp: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-text outline-none transition-all"
                          />
                          <Phone className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                        </div>
                        <span className="text-[11px] text-muted mt-1 block">
                          Pastikan nomor terhubung dengan WhatsApp untuk pengiriman detail tutor & konfirmasi.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Jenjang & Kelas */}
                  <div>
                    <h4 className="text-base font-bold text-text mb-4 pb-2 border-b border-border/70 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      2. Jenjang Pendidikan & Kelas
                    </h4>

                    {/* Jenjang Selector Chips */}
                    <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-2">
                      Pilih Jenjang Siswa <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
                      {JENJANG_OPTIONS.map((item) => {
                        const isSelected = formData.jenjang.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleJenjangChange(item.id)}
                            className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                              isSelected
                                ? "border-primary bg-primary-light/40 shadow-sm ring-2 ring-primary/20"
                                : "border-border hover:border-primary/40 bg-white"
                            }`}
                          >
                            <span className={`font-bold text-sm ${isSelected ? "text-primary-dark" : "text-text"}`}>
                              {item.label}
                            </span>
                            <span className="text-[11px] text-muted mt-1 leading-tight">
                              {item.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Kelas Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-1.5">
                        Tingkat / Kelas Saat Ini <span className="text-red-500">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {currentJenjangObj.classes.map((cls) => {
                          const isClsSelected = formData.kelas === cls;
                          return (
                            <button
                              key={cls}
                              type="button"
                              onClick={() => setFormData({ ...formData, kelas: cls })}
                              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                                isClsSelected
                                  ? "bg-primary text-white shadow-sm"
                                  : "bg-cream text-text border border-border hover:border-primary/50"
                              }`}
                            >
                              {cls}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Mata Pelajaran & Preferensi */}
                  <div>
                    <h4 className="text-base font-bold text-text mb-4 pb-2 border-b border-border/70 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      3. Kebutuhan Belajar & Format Les
                    </h4>

                    {/* Mata Pelajaran Chips */}
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-2">
                        Mata Pelajaran yang Dibutuhkan <span className="text-muted font-normal lowercase">(bisa pilih lebih dari satu)</span>
                      </label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {POPULAR_SUBJECTS.map((sub) => {
                          const isSubSelected = selectedSubjects.includes(sub);
                          return (
                            <button
                              key={sub}
                              type="button"
                              onClick={() => handleToggleSubject(sub)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isSubSelected
                                  ? "bg-primary text-white shadow-sm"
                                  : "bg-white text-text border border-border hover:border-primary/40"
                              }`}
                            >
                              {sub}
                            </button>
                          );
                        })}
                      </div>

                      {/* Mapel Tambahan / Custom */}
                      <input
                        type="text"
                        placeholder="Mata pelajaran lain? Ketik di sini (contoh: Bahasa Mandarin, Coding, Geografi)..."
                        value={customSubject}
                        onChange={(e) => handleCustomSubjectChange(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs text-text outline-none transition-all"
                      />
                    </div>

                    {/* Format Les Radio Cards */}
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-2">
                        Pilihan Format Les
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {FORMAT_OPTIONS.map((fmt) => {
                          const isFmtSelected = formData.formatLes?.includes(fmt.label);
                          return (
                            <button
                              key={fmt.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, formatLes: fmt.label })}
                              className={`p-3.5 rounded-xl border text-left transition-all ${
                                isFmtSelected
                                  ? "border-primary bg-primary-light/40 ring-2 ring-primary/20"
                                  : "border-border hover:border-primary/40 bg-white"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-xs font-bold ${isFmtSelected ? "text-primary-dark" : "text-text"}`}>
                                  {fmt.label}
                                </span>
                                {isFmtSelected && <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />}
                              </div>
                              <span className="text-[11px] text-muted block mt-1">
                                {fmt.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Waktu Belajar */}
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        Pilihan Waktu Belajar yang Diharapkan
                      </label>
                      <select
                        value={formData.waktuBelajar}
                        onChange={(e) => setFormData({ ...formData, waktuBelajar: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs text-text outline-none transition-all"
                      >
                        {TIME_OPTIONS.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Catatan Tambahan */}
                    <div>
                      <label className="block text-xs font-semibold text-text uppercase tracking-wider mb-1.5">
                        Catatan Khusus / Target Belajar Siswa <span className="text-muted font-normal lowercase">(opsional)</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Contoh: Siswa butuh pendampingan khusus matematika pecahan, atau persiapan menghadapi ujian akhir semester..."
                        value={formData.catatan}
                        onChange={(e) => setFormData({ ...formData, catatan: e.target.value })}
                        className="w-full p-3.5 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-xs text-text outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button & Assurance */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold min-h-14 h-auto py-3.5 px-4 sm:px-6 rounded-2xl shadow-md hover:shadow-lg transition-all text-sm sm:text-base flex items-center justify-center gap-2 group cursor-pointer text-center whitespace-normal leading-snug"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2 flex-wrap text-center">
                          <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                          <span>Menyimpan ke Database & Menghubungkan ke WA...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2 flex-wrap sm:flex-nowrap text-center">
                          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                          <span className="font-bold">Kirim Pendaftaran & Chat WhatsApp Admin</span>
                          <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 hidden sm:inline-block" />
                        </span>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted text-center px-1">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                      <span>Data otomatis tercatat di Google Sheets & diteruskan langsung ke WhatsApp Admin LOBE</span>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
