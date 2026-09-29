import React from "react";

export const programs = [
  {
    title: "TK",
    description: "Pendampingan belajar online untuk anak usia taman kanak-kanak (calistung & stimulasi).",
    badge: "Kelas Privat 1-on-1",
  },
  {
    title: "SD",
    description: "Membantu siswa memahami materi pelajaran sekolah dengan nyaman, fokus, dan terarah.",
    badge: "Privat • Semi Privat • Kelompok",
  },
  {
    title: "SMP",
    description: "Pendampingan belajar untuk memahami konsep materi, PR, dan menghadapi ujian akademik.",
    badge: "Privat • Semi Privat • Kelompok",
  },
  {
    title: "SMA",
    description: "Les online untuk berbagai mata pelajaran IPA/IPS serta persiapan ujian dan masa depan.",
    badge: "Privat • Semi Privat • Kelompok",
  },
];

export const classFormats = [
  {
    id: "privat",
    title: "Kelas Privat 1-on-1",
    subtitle: "1 Tutor 1 Murid",
    badge: "Favorit • 100% Personal",
    popular: true,
    levels: "TK, SD, SMP, SMA & SNBT",
    capacity: "1 Siswa per Kelas",
    description: "Pembelajaran intensif di mana seluruh fokus tutor tertuju pada satu siswa untuk hasil optimal.",
    features: [
      "Fokus belajar 100% personal dan privat",
      "Materi & kecepatan belajar disesuaikan kemampuan anak",
      "Bebas bertanya kapan saja tanpa rasa canggung",
      "Jadwal paling fleksibel sesuai kesepakatan orang tua"
    ],
    ctaText: "Daftar Kelas Privat",
  },
  {
    id: "semi-privat",
    title: "Kelas Semi Privat",
    subtitle: "3 – 5 Orang Siswa",
    badge: "Terbaru • Interaktif & Seru",
    popular: false,
    levels: "Khusus Jenjang SD, SMP, SMA",
    capacity: "Kelompok Kecil (3 – 5 Siswa)",
    description: "Belajar interaktif dalam grup kecil bersama teman sebaya. Diskusi tetap hidup dan interaksi tutor tetap dekat.",
    features: [
      "Kelompok kecil yang kondusif (hanya 3 sampai 5 siswa)",
      "Interaksi dua arah aktif bersama tutor dan teman",
      "Biaya lebih hemat dibandingkan kelas privat 1-on-1",
      "Bisa mendaftar bersama teman satu sekolah / geng belajar"
    ],
    ctaText: "Daftar Semi Privat",
  },
  {
    id: "kelompok",
    title: "Kelas Berkelompok",
    subtitle: "Minimal 10 Orang Siswa",
    badge: "Terbaru • Paling Hemat",
    popular: false,
    levels: "Khusus Jenjang SD, SMP, SMA",
    capacity: "Rombongan Belajar (Min. 10 Siswa)",
    description: "Format belajar rombongan yang sangat hemat dan kolaboratif. Cocok untuk kelas sekolah, komunitas, atau paguyuban.",
    features: [
      "Biaya per siswa paling ekonomis dan terjangkau",
      "Minimal 10 orang siswa per kelas belajar",
      "Suasana belajar seru, dinamis, dan saling memotivasi",
      "Simulasi latihan soal, bedah konsep, dan review materi"
    ],
    ctaText: "Daftar Berkelompok",
  },
];

export const benefits = [
  {
    title: "Tutor dari Lulusan Perguruan Tinggi",
    description: "Tutor berasal dari lulusan S1 perguruan tinggi negeri dan swasta yang kompeten dan ramah.",
  },
  {
    title: "Live Class Interaktif",
    description: "Proses belajar dilakukan secara online melalui live class Google Meet dua arah, bukan video rekaman.",
  },
  {
    title: "3 Pilihan Format Belajar",
    description: "Tersedia pilihan Privat (1-on-1), Semi Privat (3–5 siswa), hingga Berkelompok (min. 10 siswa) untuk SD, SMP, SMA.",
  },
  {
    title: "Media Belajar Nyaman & Praktis",
    description: "Menggunakan Google Meet yang mudah diakses dari laptop, tablet, maupun smartphone di rumah.",
  },
  {
    title: "Materi Sesuai Kurikulum Nasional",
    description: "Materi belajar disesuaikan dengan kurikulum sekolah yang berlaku (Merdeka / K13) dan kebutuhan siswa.",
  },
  {
    title: "Harga Murah & Terjangkau",
    description: "LOBE berkomitmen menyediakan layanan les online berkualitas dengan biaya yang sangat bersahabat.",
  },
];

export const testimonials = [
  { src: "/images/testimonials/testimonial-01.webp", alt: "Testimonial pelanggan LOBE melalui percakapan WhatsApp 1" },
  { src: "/images/testimonials/testimonial-02.webp", alt: "Testimonial pelanggan LOBE melalui percakapan WhatsApp 2" },
  { src: "/images/testimonials/testimonial-03.webp", alt: "Testimonial pelanggan LOBE melalui percakapan WhatsApp 3" },
  { src: "/images/testimonials/testimonial-04.webp", alt: "Testimonial pelanggan LOBE melalui percakapan WhatsApp 4" },
  { src: "/images/testimonials/testimonial-05.webp", alt: "Testimonial pelanggan LOBE melalui percakapan WhatsApp 5" },
  { src: "/images/testimonials/testimonial-06.webp", alt: "Testimonial pelanggan LOBE melalui percakapan WhatsApp 6" },
];

export const faqs = [
  {
    question: "LOBE menyediakan les untuk jenjang apa saja?",
    answer: "LOBE menyediakan les online untuk jenjang TK/PAUD, SD, SMP, dan SMA. Tersedia juga les persiapan materi TKA dan SNBT.",
  },
  {
    question: "Apa saja pilihan format kelas yang tersedia?",
    answer: "Kini LOBE menyediakan 3 pilihan format kelas: 1) Kelas Privat (1 Tutor 1 Murid) untuk TK, SD, SMP, SMA, 2) Kelas Semi Privat (3 - 5 Orang) khusus jenjang SD, SMP, SMA, dan 3) Kelas Berkelompok (minimal 10 Orang) khusus jenjang SD, SMP, SMA.",
  },
  {
    question: "Apakah bisa mendaftar kelas Semi Privat bersama teman sendiri?",
    answer: "Tentu saja! Anda bisa mendaftar bersama teman satu sekolah atau teman bermain sebanyak 3 sampai 5 orang untuk kelas Semi Privat, atau minimal 10 orang untuk Kelas Berkelompok.",
  },
  {
    question: "Apakah semua mata pelajaran tersedia?",
    answer: "Ya. LOBE menyediakan les untuk semua mata pelajaran sekolah (Matematika, IPA, Fisika, Kimia, Biologi, Bahasa Inggris, Bahasa Indonesia, IPS, dll.) sesuai kebutuhan siswa.",
  },
  {
    question: "Apakah tersedia persiapan materi TKA dan SNBT?",
    answer: "Ya. LOBE menyediakan les pendampingan materi intensif untuk persiapan TKA dan SNBT bagi siswa kelas 12 maupun alumni/gap year.",
  },
  {
    question: "Bagaimana sistem dan media belajarnya?",
    answer: "Pembelajaran dilakukan secara live online melalui Google Meet sehingga siswa dan tutor dapat bertatap muka, berdiskusi dua arah, dan membedah latihan soal secara interaktif.",
  },
  {
    question: "Apakah jadwal les fleksibel?",
    answer: "Ya, jadwal belajar dapat disesuaikan berdasarkan kesepakatan antara orang tua/siswa dengan tutor.",
  },
  {
    question: "Berapa biaya les di LOBE?",
    answer: "Biaya les di LOBE sangat murah dan terjangkau. Rincian biaya diberikan setelah berkonsultasi dengan admin melalui WhatsApp sesuai format kelas dan jenjang yang dipilih.",
  },
  {
    question: "Bagaimana cara mendaftarnya?",
    answer: "Anda dapat mengisi Formulir Pendaftaran di bagian bawah website ini (tersimpan otomatis di Google Sheets dan diarahkan ke WhatsApp Admin LOBE) atau langsung chat WhatsApp Admin di nomor 0889 3739 4970.",
  },
];
