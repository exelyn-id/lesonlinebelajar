# 🎓 LOBE — Les Online Belajar

Website resmi landing page **LOBE (Les Online Belajar)** — Bimbingan belajar online interaktif untuk jenjang **TK, SD, SMP, dan SMA** serta persiapan **TKA & SNBT**.

🌐 **Domain:** [https://lesonlinebelajar.my.id](https://lesonlinebelajar.my.id)  
📱 **WhatsApp Admin:** [+62 889-7339-4970](https://api.whatsapp.com/send/?phone=6288973394970)

---

## 🌟 Fitur Utama Website

1. **Desain Modern & Responsif:**
   - Dibangun dengan **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS**.
   - Animasi halus dan interaktif menggunakan **Framer Motion**.
   - 100% responsif dan nyaman diakses dari smartphone, tablet, maupun desktop.

2. **3 Pilihan Format Kelas Belajar:**
   - **Kelas Privat 1-on-1:** Fokus maksimal satu siswa dengan satu tutor (TK, SD, SMP, SMA, SNBT).
   - **Kelas Semi Privat:** Kelompok kecil 3 hingga 5 siswa (Khusus SD, SMP, SMA).
   - **Kelas Berkelompok:** Rombongan hemat minimal 10 siswa (Khusus SD, SMP, SMA).

3. **Formulir Pendaftaran & Database Google Sheets:**
   - Siswa dapat mendaftar langsung di halaman web (`#daftar`).
   - Data otomatis tersimpan ke **Google Sheets** menggunakan Google Apps Script (`google-apps-script/Code.gs`).
   - Pengalihan langsung ke **WhatsApp Admin LOBE** dengan pesan otomatis berisi rincian data siswa.

4. **Optimalisasi SEO Lengkap (Search Engine Optimization):**
   - **Canonical URL:** `https://lesonlinebelajar.my.id`
   - **Dynamic OpenGraph Image:** Preview link WhatsApp/Facebook otomatis beresolusi tinggi (`/opengraph-image`).
   - **Structured Data (JSON-LD):** Schema `EducationalOrganization`, `Course`, `WebSite`, dan `FAQPage`.
   - **Dynamic Sitemap:** `https://lesonlinebelajar.my.id/sitemap.xml`
   - **Dynamic Robots:** `https://lesonlinebelajar.my.id/robots.txt`
   - **Web App Manifest:** `/manifest.webmanifest` (dukungan PWA mobile).

---

## 🚀 Panduan Memulai (Development)

### 1. Prasyarat
- Node.js versi 18 ke atas
- npm, pnpm, atau yarn

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variable
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Isi URL Web App Google Apps Script Anda:
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

### 4. Menjalankan di Mode Development
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### 5. Build untuk Production
```bash
npm run build
npm run start
```

---

## 📊 Integrasi Google Sheets

Kode Google Apps Script dan panduan lengkap pemasangan database telah tersedia di:
- 📄 Panduan Lengkap: [`PANDUAN_SETUP_GOOGLE_SHEETS.md`](PANDUAN_SETUP_GOOGLE_SHEETS.md)
- 📜 Script Backend: [`google-apps-script/Code.gs`](google-apps-script/Code.gs)

---

## 📁 Struktur Direktori

```text
lobe/
├── app/                        # Next.js App Router
│   ├── api/register/           # API route pendaftaran (proxy ke GAS)
│   ├── layout.tsx              # Root layout & SEO Schema JSON-LD
│   ├── page.tsx                # Halaman utama landing page
│   ├── icon.tsx                # Dynamic Favicon LOBE
│   ├── opengraph-image.tsx     # Dynamic Social Preview Card
│   ├── sitemap.ts              # Dynamic sitemap.xml generator
│   ├── robots.ts               # Dynamic robots.txt generator
│   └── manifest.ts             # PWA Web App Manifest
├── components/
│   ├── layout/                 # Navbar, Footer, Sticky WhatsApp CTA
│   ├── sections/               # Hero, Program, Format Kelas, Testimoni, Form
│   ├── ui/                     # Button, Card, Section Heading
│   └── illustrations/          # Ilustrasi SVG & motion visual
├── google-apps-script/
│   └── Code.gs                 # Kode Google Apps Script untuk Google Sheets
├── lib/
│   ├── constants.ts            # Data program, format kelas, FAQ, benefit
│   ├── utils.ts                # Tailwind class merge helper
│   └── whatsapp.ts             # Logika pesan & URL WhatsApp Admin
└── public/
    └── images/                 # Logo LOBE & gambar testimoni asli
```

---

## 📄 Lisensi
Hak Cipta © 2026 **LOBE (Les Online Belajar)**. Dilindungi oleh undang-undang.
