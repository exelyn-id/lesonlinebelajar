# PRD --- Landing Page LOBE (Les Online Belajar)

**Dokumen:** Product Requirements Document\
**Produk:** Landing Page LOBE\
**Brand:** LOBE --- Les Online Belajar\
**Platform:** Web, single-page landing page\
**Target utama:** Orang tua/wali siswa di Indonesia\
**Primary CTA:** WhatsApp\
**Status:** Ready for implementation by AI coding agent

------------------------------------------------------------------------

## 1. Ringkasan Produk

LOBE adalah layanan les online untuk siswa **TK, SD, SMP, dan SMA** di
Indonesia. Layanan mencakup **semua mata pelajaran** serta **les materi
TKA dan SNBT**.

Landing page harus berfungsi terutama sebagai **conversion landing
page**: menjelaskan layanan secara cepat, membangun kepercayaan,
menunjukkan pengalaman belajar melalui testimonial, menjelaskan cara
kerja layanan, kemudian mengarahkan calon pelanggan ke WhatsApp.

Website harus terasa:

-   modern;
-   friendly;
-   educational;
-   cocok untuk anak dan remaja;
-   tetap profesional bagi orang tua sebagai pengambil keputusan;
-   tidak terlihat seperti website korporat yang kaku;
-   menggunakan identitas visual yang selaras dengan logo LOBE;
-   memiliki motion/animation yang terasa hidup;
-   tetapi **tidak menggunakan 3D element atau 3D rendering**.

Semua elemen dekoratif dan animasi tambahan harus dapat dibuat langsung
melalui code menggunakan HTML/CSS/SVG/React animation. Jangan
membutuhkan aset 3D eksternal.

------------------------------------------------------------------------

# 2. Tujuan Bisnis

## 2.1 Tujuan utama

Tujuan utama landing page adalah meningkatkan jumlah calon siswa/orang
tua yang:

1.  memahami layanan LOBE;
2.  tertarik dengan model les yang fleksibel;
3.  melihat bukti sosial melalui testimonial;
4.  kemudian menghubungi LOBE melalui WhatsApp.

## 2.2 Conversion utama

**Primary conversion:**

> Klik tombol WhatsApp → membuka WhatsApp dengan pesan awal yang sudah
> disiapkan.

Nomor WhatsApp utama:

**0889 3739 4970**

Nomor ini harus digunakan sebagai nomor CTA utama di seluruh website.

## 2.3 Informasi harga

Website **tidak menampilkan nominal harga**.

Harga diberikan setelah calon pelanggan menghubungi admin melalui
WhatsApp.

Jangan membuat:

-   tabel harga;
-   harga per jam;
-   harga paket;
-   diskon;
-   harga coret;
-   klaim harga tertentu.

Copy "murah dan terjangkau" boleh digunakan karena berasal dari
informasi bisnis yang diberikan, tetapi jangan mengubahnya menjadi angka
atau klaim kuantitatif.

------------------------------------------------------------------------

# 3. Target Pengguna

## 3.1 Primary audience

Orang tua/wali siswa di Indonesia yang sedang mencari les online untuk
anak.

Mereka dapat memiliki anak pada jenjang:

-   TK;
-   SD;
-   SMP;
-   SMA.

## 3.2 Secondary audience

Siswa yang mencari sendiri layanan les, terutama:

-   siswa SMP;
-   siswa SMA;
-   siswa yang sedang membutuhkan bantuan memahami materi;
-   siswa yang sedang mempersiapkan TKA;
-   siswa yang sedang mempersiapkan SNBT.

## 3.3 Kebutuhan pengguna

Landing page harus menjawab pertanyaan pengguna secara cepat:

-   LOBE itu apa?
-   Untuk jenjang apa?
-   Apakah semua mata pelajaran tersedia?
-   Apakah ada TKA/SNBT?
-   Bagaimana sistem lesnya?
-   Apakah les dilakukan online?
-   Apakah jadwal fleksibel?
-   Apakah saya bisa memilih tutor?
-   Bagaimana cara daftar?
-   Berapa harganya?
-   Apakah ada bukti/testimoni pengguna lain?

------------------------------------------------------------------------

# 4. Brand & Visual Direction

## 4.1 Logo

Logo yang diberikan memiliki:

-   wordmark utama: `lobe`;
-   subtext: `les_onlinebelajar`;
-   background hijau;
-   logo berwarna putih/cream.

Website harus mengambil inspirasi langsung dari identitas visual
tersebut.

## 4.2 Palet warna

Gunakan palet berbasis warna logo.

Warna referensi utama dari logo:

-   Primary Green: sekitar `#649568`
-   Secondary Green: sekitar `#64986A`
-   Dark Green: gunakan turunan lebih gelap dari primary green untuk
    teks/kontras
-   Cream/Off-white: sekitar `#FEFEF2`
-   White: `#FFFFFF`

**Catatan:** nilai warna di atas merupakan titik awal berdasarkan visual
logo. Implementasi harus tetap menjaga agar keseluruhan UI terlihat
harmonis dengan logo.

Buat color tokens sehingga warna mudah diubah tanpa mencari nilai warna
satu per satu.

Contoh:

``` css
--color-primary: #649568;
--color-primary-dark: #426B49;
--color-primary-light: #EAF3E9;
--color-cream: #FEFEF2;
--color-white: #FFFFFF;
--color-text: #19301F;
--color-muted: #607066;
--color-border: #DCE8DD;
```

Jika perlu menambahkan accent, gunakan turunan hijau/cream terlebih
dahulu. Jangan membuat website menjadi warna-warni secara berlebihan.

## 4.3 Karakter visual

Arah desain:

**Modern + Playful + Friendly + Professional**

Bukan:

-   childish berlebihan;
-   corporate;
-   fintech;
-   gaming;
-   neon;
-   terlalu minimal sampai terasa kosong.

## 4.4 Bentuk UI

Gunakan:

-   rounded corners;
-   soft cards;
-   pill badges;
-   organic blobs;
-   curved separators;
-   subtle borders;
-   soft shadows;
-   whitespace yang cukup.

Namun hindari penggunaan border-radius ekstrem pada setiap elemen sampai
semua komponen terlihat seperti bubble.

------------------------------------------------------------------------

# 5. Prinsip UX

## 5.1 Mobile-first

Mayoritas calon pelanggan kemungkinan akan datang dari social
media/mobile.

Website harus dirancang mobile-first.

Prioritas:

1.  Mobile 360px--430px;
2.  Tablet;
3.  Desktop 1280px+.

## 5.2 CTA selalu mudah ditemukan

WhatsApp adalah conversion utama.

CTA harus muncul pada beberapa titik strategis:

-   navbar;
-   hero;
-   setelah penjelasan layanan;
-   setelah testimonial;
-   final CTA;
-   mobile sticky CTA.

## 5.3 Jangan membuat user mencari informasi

Informasi penting harus terlihat jelas:

-   jenjang;
-   mata pelajaran;
-   TKA/SNBT;
-   online;
-   1 tutor 1 murid;
-   fleksibel;
-   tutor dapat dipilih;
-   testimonial;
-   cara menghubungi.

------------------------------------------------------------------------

# 6. Struktur Halaman

Landing page menggunakan satu halaman dengan struktur:

1.  Announcement/Top Bar opsional
2.  Navbar
3.  Hero
4.  Trust/Service Highlights
5.  Program & Jenjang
6.  Keunggulan LOBE
7.  Visual "Cara Belajar"
8.  Fleksibilitas Tutor & Jadwal
9.  Testimonial Slideshow
10. FAQ
11. Final CTA
12. Footer
13. Mobile Sticky WhatsApp CTA

------------------------------------------------------------------------

# 7. Navbar

## 7.1 Layout

Desktop:

-   logo LOBE di kiri;
-   navigation links di tengah/kanan;
-   CTA WhatsApp di kanan.

Contoh navigation:

-   Beranda
-   Program
-   Keunggulan
-   Testimoni
-   FAQ

CTA:

> Konsultasi via WhatsApp

Mobile:

-   logo di kiri;
-   hamburger menu di kanan.

Mobile menu menggunakan animated drawer/dropdown.

## 7.2 Behavior

Navbar:

-   sticky saat scrolling;
-   background awal dapat semi-transparent;
-   setelah scroll, berubah menjadi background cream/white dengan subtle
    shadow;
-   transisi smooth;
-   tidak terlalu tinggi.

## 7.3 Logo

Gunakan logo yang disediakan sebagai image asset.

Jangan recreate wordmark menggunakan font jika file logo tersedia.

AI agent harus menyiapkan placeholder asset path, misalnya:

``` text
/public/images/lobe-logo.png
```

Jika logo belum tersedia sebagai file terpisah, gunakan gambar logo yang
diberikan user sebagai source asset dan jangan membuat ulang bentuk
logonya secara manual.

------------------------------------------------------------------------

# 8. Hero Section

## 8.1 Tujuan

Hero harus menjelaskan dalam beberapa detik:

-   LOBE;
-   les online;
-   target jenjang;
-   cakupan pelajaran;
-   keunggulan inti;
-   CTA.

## 8.2 Recommended copy

Eyebrow:

> 🎓 LES ONLINE BELAJAR

Headline:

> Bantu Anak Belajar Lebih Nyaman, Fokus, dan Terarah.

Subheadline:

> Les online untuk TK, SD, SMP, hingga SMA. Semua mata pelajaran,
> termasuk les materi TKA dan SNBT, dengan tutor berpengalaman dan
> jadwal yang fleksibel.

CTA utama:

> Mulai Konsultasi via WhatsApp

CTA secondary:

> Lihat Program

Tambahkan microcopy:

> Jadwal fleksibel • 1 Tutor 1 Murid • Online via Google Meet

Jangan membuat klaim yang tidak diberikan seperti:

-   "jaminan nilai naik";
-   "100% lulus";
-   "pasti masuk PTN";
-   "tutor terbaik di Indonesia";
-   jumlah siswa;
-   jumlah tutor;
-   persentase keberhasilan.

## 8.3 Hero visual

Tidak menggunakan video footage dan tidak menggunakan 3D.

Buat visual hero menggunakan **code-generated illustration**.

Contoh konsep:

-   abstract green educational environment;
-   floating 2D SVG cards;
-   ikon buku;
-   ikon pensil;
-   simbol matematika;
-   checklist;
-   graduation cap;
-   small learning cards;
-   garis orbit;
-   dot particles.

Semua visual harus dibuat melalui:

-   SVG;
-   CSS;
-   HTML;
-   React components.

Tidak perlu mencari atau membuat aset 3D.

## 8.4 Hero animation

Gunakan animation yang halus:

-   floating cards naik-turun dengan offset berbeda;
-   simbol matematika bergerak perlahan;
-   orbit line;
-   small particles;
-   underline headline animated;
-   entrance animation ketika halaman pertama kali muncul.

Gunakan `Motion`/Framer Motion untuk choreography.

Animation tidak boleh menyebabkan layout shift.

------------------------------------------------------------------------

# 9. Service Highlights

Buat section singkat setelah hero.

Tujuan: memperkuat positioning.

Empat highlight:

### 1. TK --- SMA

> Pendampingan belajar untuk berbagai jenjang.

### 2. Semua Mata Pelajaran

> Belajar sesuai kebutuhan dan materi yang sedang dipelajari.

### 3. TKA & SNBT

> Les materi untuk membantu persiapan belajar.

### 4. Online & Fleksibel

> Belajar online dengan jadwal yang disepakati.

Gunakan card yang berbeda secara visual tetapi tetap satu design system.

------------------------------------------------------------------------

# 10. Program & Jenjang

## 10.1 Heading

> Pilih Program Belajar Sesuai Kebutuhan

Subheadline:

> LOBE menyediakan les online untuk berbagai jenjang dan kebutuhan
> belajar.

## 10.2 Program cards

Buat empat card utama:

### TK

Copy:

> Pendampingan belajar online untuk anak usia taman kanak-kanak.

Jangan menambahkan detail kurikulum spesifik yang belum diberikan.

### SD

Copy:

> Membantu siswa memahami materi pelajaran sekolah dengan lebih nyaman
> dan fokus.

### SMP

Copy:

> Pendampingan belajar untuk membantu memahami materi dan menghadapi
> kebutuhan akademik.

### SMA

Copy:

> Les online untuk berbagai mata pelajaran serta kebutuhan belajar
> tingkat SMA.

Tambahkan badge:

> Semua Mata Pelajaran

pada card yang relevan.

## 10.3 TKA & SNBT

Buat featured card terpisah:

Heading:

> Persiapan TKA & SNBT

Copy:

> Tersedia les materi untuk membantu siswa belajar dan mempersiapkan
> kebutuhan akademiknya.

CTA:

> Konsultasikan Kebutuhan

------------------------------------------------------------------------

# 11. Section "Kenapa LOBE?"

Gunakan informasi bisnis yang diberikan.

Heading:

> Kenapa Pilih LOBE?

Subheadline:

> Belajar dibuat lebih nyaman, fokus, dan sesuai kebutuhan siswa.

## Benefit 1 --- Tutor dari Lulusan Perguruan Tinggi

Copy:

> Tutor berasal dari lulusan S1 perguruan tinggi negeri dan swasta.

Jangan mengarang nama universitas atau jumlah tutor.

## Benefit 2 --- Live Class

Copy:

> Proses belajar dilakukan secara online melalui live class sehingga
> siswa dapat berinteraksi langsung dengan tutor.

## Benefit 3 --- 1 Tutor 1 Murid

Copy:

> Satu tutor dan satu murid agar proses belajar dapat berlangsung lebih
> fokus dan interaktif.

## Benefit 4 --- Media Pembelajaran Online

Copy:

> Pembelajaran online menggunakan Google Meet sebagai media belajar.

## Benefit 5 --- Materi Sesuai Kurikulum

Copy:

> Materi belajar disesuaikan dengan kurikulum yang berlaku.

## Benefit 6 --- Harga Terjangkau

Copy:

> LOBE menyediakan layanan les dengan harga yang murah dan terjangkau.

Jangan menampilkan angka harga.

------------------------------------------------------------------------

# 12. Animated Learning Experience Section

Section ini menjadi salah satu visual highlight website.

## 12.1 Tujuan

Menggambarkan pengalaman belajar LOBE tanpa menggunakan footage.

## 12.2 Konsep

Buat ilustrasi berupa "learning dashboard" fiktif/dekoratif menggunakan
HTML/CSS/SVG.

Contoh visual:

-   window Google Meet style;
-   avatar placeholder berbentuk abstract illustration;
-   subject card;
-   progress bar;
-   checklist;
-   floating notes;
-   schedule card;
-   book icon;
-   mathematical symbols.

**Penting:** jangan membuat UI seolah-olah itu screenshot produk LOBE.
Visual ini hanya ilustrasi konsep.

## 12.3 Animation

Ketika section masuk viewport:

1.  container muncul;
2.  subject card masuk dari kiri;
3.  schedule card muncul dari kanan;
4.  checklist items muncul berurutan;
5.  floating icons bergerak perlahan;
6.  progress indicator mengisi secara halus.

Gunakan scroll-triggered animation.

Animation harus:

-   subtle;
-   performant;
-   tidak mengganggu pembacaan;
-   dapat dinonaktifkan jika user mengaktifkan `prefers-reduced-motion`.

------------------------------------------------------------------------

# 13. Tutor & Scheduling

Berdasarkan informasi yang tersedia:

-   jadwal fleksibel sesuai kesepakatan;
-   orang tua dapat memilih tutor sendiri.

Buat section:

## Heading

> Belajar dengan Jadwal yang Lebih Fleksibel

Copy:

> Kebutuhan setiap siswa berbeda. Jadwal belajar dapat disesuaikan
> berdasarkan kesepakatan sehingga proses les lebih mudah menyesuaikan
> aktivitas siswa.

Tambahkan:

> Pilih tutor sesuai kebutuhan

Copy:

> Orang tua dapat memilih tutor sendiri sesuai kebutuhan belajar anak.

Jangan mengklaim adanya sistem pemilihan tutor berbasis aplikasi jika
sistem sebenarnya belum diketahui. Landing page hanya perlu menyampaikan
bahwa orang tua dapat memilih tutor sendiri.

------------------------------------------------------------------------

# 14. Testimonial Section

## 14.1 Mandatory

Harus tersedia **slideshow/carousel untuk 6 gambar testimonial** berupa
screenshot percakapan WhatsApp.

User akan memasukkan 6 gambar tersebut langsung ke AI coding agent.

Jangan membuat testimonial fiktif.

## 14.2 Asset placeholder

Siapkan struktur:

``` text
/public/images/testimonials/
  testimonial-01.webp
  testimonial-02.webp
  testimonial-03.webp
  testimonial-04.webp
  testimonial-05.webp
  testimonial-06.webp
```

Jika AI agent menerima file dengan nama berbeda, gunakan nama file
aktual.

## 14.3 Carousel behavior

Desktop:

-   satu testimonial utama;
-   optional peek testimonial berikutnya;
-   navigation arrows;
-   pagination dots.

Mobile:

-   satu image per slide;
-   swipe horizontal;
-   dots;
-   optional arrows.

Features:

-   autoplay;
-   pause ketika hover;
-   pause ketika user melakukan interaction;
-   keyboard navigation;
-   accessible labels;
-   loop;
-   lazy loading untuk slide nonaktif.

## 14.4 Image handling

Screenshot WhatsApp mungkin memiliki aspect ratio berbeda.

Jangan crop informasi penting.

Gunakan:

``` css
object-fit: contain;
```

atau layout container yang mempertahankan keseluruhan screenshot.

Jika background container diperlukan, gunakan cream/very light green.

## 14.5 Lightbox

Saat screenshot testimonial diklik:

-   buka modal/lightbox;
-   tampilkan gambar lebih besar;
-   tombol close;
-   keyboard Escape;
-   click outside untuk close;
-   jangan membuat image terpotong.

## 14.6 Headline

> Kata Mereka Tentang LOBE

Subheadline:

> Lihat pengalaman belajar yang dibagikan melalui testimonial berikut.

Jangan menambahkan rating bintang atau angka kepuasan yang tidak
tersedia.

------------------------------------------------------------------------

# 15. CTA Intermediary

Setelah testimonial, tampilkan CTA.

Heading:

> Siap Mulai Belajar Bersama LOBE?

Copy:

> Konsultasikan kebutuhan belajar anak dan cari tahu program serta
> informasi harga yang sesuai.

Button:

> Konsultasi via WhatsApp

------------------------------------------------------------------------

# 16. FAQ

FAQ harus menjawab pertanyaan umum tanpa mengarang informasi.

Pertanyaan minimum:

### 1. LOBE menyediakan les untuk jenjang apa?

Jawaban:

> LOBE menyediakan les online untuk jenjang TK, SD, SMP, dan SMA.

### 2. Apakah semua mata pelajaran tersedia?

Jawaban:

> Ya. LOBE menyediakan les untuk semua mata pelajaran sesuai kebutuhan
> belajar siswa.

### 3. Apakah tersedia TKA dan SNBT?

Jawaban:

> Ya. LOBE menyediakan les materi untuk TKA dan SNBT.

### 4. Bagaimana sistem belajarnya?

Jawaban:

> Pembelajaran dilakukan secara online melalui live class. Salah satu
> format yang ditawarkan adalah 1 tutor dan 1 murid agar pembelajaran
> lebih fokus dan interaktif.

### 5. Apakah jadwal les fleksibel?

Jawaban:

> Ya. Jadwal dapat disesuaikan berdasarkan kesepakatan.

### 6. Apakah orang tua bisa memilih tutor?

Jawaban:

> Ya. Orang tua dapat memilih tutor sendiri sesuai kebutuhan.

### 7. Berapa harga les di LOBE?

Jawaban:

> Informasi harga diberikan setelah calon pelanggan menghubungi admin
> melalui WhatsApp. Silakan konsultasikan kebutuhan belajar terlebih
> dahulu.

### 8. Bagaimana cara mendaftar?

Jawaban:

> Hubungi LOBE melalui WhatsApp. Sampaikan jenjang siswa, kebutuhan
> belajar, dan informasi yang ingin ditanyakan kepada admin.

Jangan mengarang:

-   biaya pendaftaran;
-   refund policy;
-   jumlah sesi;
-   durasi sesi;
-   metode pembayaran;
-   jadwal operasional admin;
-   garansi;
-   paket.

Jika informasi tersebut belum tersedia, jangan tampilkan.

------------------------------------------------------------------------

# 17. Final CTA

Section terakhir harus menjadi conversion block yang kuat.

Visual:

-   background primary green;
-   text cream/white;
-   decorative SVG educational elements;
-   subtle animated particles;
-   large WhatsApp CTA.

Heading:

> Siap Bantu Anakmu Juara?

Subheadline:

> Yuk, mulai konsultasikan kebutuhan belajar anak bersama LOBE.

Button:

> Hubungi LOBE via WhatsApp

Tambahkan microcopy:

> TK • SD • SMP • SMA • Semua Mata Pelajaran • TKA & SNBT

------------------------------------------------------------------------

# 18. WhatsApp Integration

## 18.1 Primary number

Gunakan:

`0889 3739 4970`

Format WhatsApp URL harus menggunakan nomor internasional:

`6288937394970`

## 18.2 CTA message

Gunakan prefilled message:

> Halo LOBE, saya ingin konsultasi mengenai les online. Saya ingin
> mengetahui program yang sesuai untuk anak saya.

Encoded URL:

``` text
https://api.whatsapp.com/send/?phone=6288937394970&text=Halo%20LOBE%2C%20saya%20ingin%20konsultasi%20mengenai%20les%20online.%20Saya%20ingin%20mengetahui%20program%20yang%20sesuai%20untuk%20anak%20saya.&type=phone_number&app_absent=0
```

Namun implementasi sebaiknya membuat URL menggunakan
`encodeURIComponent()` daripada hardcode encoded string.

Contoh helper:

``` ts
const whatsappNumber = "6288937394970";

const whatsappMessage =
  "Halo LOBE, saya ingin konsultasi mengenai les online. Saya ingin mengetahui program yang sesuai untuk anak saya.";

const whatsappUrl =
  `https://api.whatsapp.com/send/?phone=${whatsappNumber}` +
  `&text=${encodeURIComponent(whatsappMessage)}` +
  `&type=phone_number&app_absent=0`;
```

## 18.3 Semua CTA

Semua CTA yang bermaksud menghubungi admin harus menuju WhatsApp.

Jangan membuat contact form yang membutuhkan backend.

------------------------------------------------------------------------

# 19. Mobile Sticky CTA

Pada mobile, tampilkan sticky bottom CTA:

``` text
💬 Konsultasi via WhatsApp
```

Behavior:

-   fixed di bottom;
-   safe-area aware;
-   tidak menutupi konten;
-   memiliki `padding-bottom: env(safe-area-inset-bottom)`;
-   subtle entrance animation;
-   dapat menghilang ketika user berada di final CTA jika diperlukan
    agar tidak redundant.

Pastikan konten halaman memiliki bottom padding yang cukup.

------------------------------------------------------------------------

# 20. Animation System

## 20.1 Requirement

Website harus memiliki motion yang terasa premium dan hidup, tetapi
semua animation harus dibuat melalui code.

**Dilarang:**

-   3D models;
-   Three.js;
-   WebGL 3D scenes;
-   external stock footage;
-   video footage sebagai hero utama;
-   aset animasi berat yang tidak diperlukan.

## 20.2 Teknologi animation

Gunakan:

-   Motion for React / Framer Motion untuk component animation;
-   CSS keyframes untuk infinite micro-animation;
-   inline SVG untuk animated illustration.

Jangan menambahkan GSAP kecuali benar-benar dibutuhkan. Untuk landing
page ini, Motion + CSS + SVG sudah menjadi default.

## 20.3 Animation categories

### Entrance animation

Untuk section:

-   fade + translateY;
-   stagger children;
-   scale kecil untuk card.

### Floating

Untuk dekorasi:

-   translateY;
-   rotate sangat kecil;
-   durasi 4--7 detik;
-   infinite;
-   easing ease-in-out.

### Scroll reveal

Gunakan Intersection Observer atau Motion viewport detection.

### Hover

Card:

-   translateY(-3px);
-   subtle shadow;
-   icon movement.

CTA:

-   slight scale;
-   icon arrow movement.

Jangan membuat hover terlalu agresif.

### SVG animation

Boleh digunakan untuk:

-   garis menggambar;
-   orbit;
-   checkmark;
-   sparkle;
-   floating education symbols;
-   progress indicator.

## 20.4 Reduced motion

Jika:

``` css
@media (prefers-reduced-motion: reduce)
```

maka:

-   matikan looping animation;
-   kurangi transition;
-   hilangkan parallax;
-   scroll reveal menjadi instant;
-   carousel tetap dapat digunakan secara manual.

------------------------------------------------------------------------

# 21. Code-Generated Visual System

Karena tidak menggunakan 3D atau footage, AI agent harus membuat
decorative visual system sendiri.

## 21.1 SVG illustrations

Buat reusable React components:

``` text
EducationIllustration
FloatingBook
FloatingPencil
MathSymbol
Sparkle
OrbitLine
LearningCard
ScheduleCard
ChecklistCard
```

Semua dapat menggunakan SVG.

## 21.2 Jangan membuat terlalu banyak detail

Illustration harus:

-   clean;
-   modern;
-   recognizable;
-   tidak seperti clipart lama;
-   selaras dengan brand.

Gunakan warna dari design token.

## 21.3 Decorative background

Gunakan:

-   gradient halus;
-   blob SVG;
-   dot grid;
-   curved line;
-   small circles.

Hindari:

-   noisy background;
-   neon glow;
-   overly complex particle system;
-   animation yang membebani CPU.

------------------------------------------------------------------------

# 22. Typography

Gunakan font modern dan friendly.

Recommended:

-   `Plus Jakarta Sans` atau `Nunito Sans` untuk body;
-   `Plus Jakarta Sans` dapat digunakan untuk seluruh website jika ingin
    konsisten.

Hierarchy:

-   Hero H1: sangat besar dan bold;
-   section heading: bold;
-   card heading: semibold;
-   body: regular;
-   metadata: medium.

Responsive sizing:

Desktop H1 kira-kira 56--72px.

Tablet H1 kira-kira 48--56px.

Mobile H1 kira-kira 38--46px.

Nilai akhir dapat disesuaikan berdasarkan visual.

Jangan menggunakan font yang terlalu playful sampai mengurangi kesan
profesional.

------------------------------------------------------------------------

# 23. Recommended Tech Stack

## 23.1 Framework

**Next.js + TypeScript**

Alasan:

-   cocok untuk landing page;
-   SEO-friendly;
-   component-based;
-   mudah dikembangkan;
-   mudah digunakan AI coding agent;
-   dapat menghasilkan halaman statis dengan baik.

Gunakan App Router.

## 23.2 Styling

**Tailwind CSS**

Gunakan design tokens melalui konfigurasi/CSS variables.

## 23.3 Animation

**Motion for React**

Gunakan untuk:

-   scroll reveal;
-   stagger;
-   page entrance;
-   carousel transitions;
-   mobile menu;
-   CTA interaction.

CSS keyframes untuk animation sederhana.

## 23.4 Icons

Gunakan **Lucide React**.

Jangan menggunakan emoji sebagai pengganti seluruh icon system. Emoji
boleh digunakan pada copy jika relevan dengan gaya brand, tetapi UI icon
harus konsisten.

## 23.5 Images

Gunakan native Next.js Image component untuk image assets.

Testimonial screenshot harus dioptimalkan.

Prefer:

-   WebP;
-   AVIF jika pipeline mendukung;
-   lazy loading;
-   responsive sizing.

## 23.6 No backend

Landing page bersifat frontend/static.

Tidak membutuhkan:

-   database;
-   authentication;
-   CMS;
-   dashboard;
-   API backend;
-   contact form backend.

------------------------------------------------------------------------

# 24. Project Structure

Recommended:

``` text
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServiceHighlights.tsx
│   │   ├── Programs.tsx
│   │   ├── Benefits.tsx
│   │   ├── LearningExperience.tsx
│   │   ├── FlexibleLearning.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── BenefitCard.tsx
│   │   ├── ProgramCard.tsx
│   │   └── WhatsAppButton.tsx
│   │
│   └── illustrations/
│       ├── HeroIllustration.tsx
│       ├── LearningIllustration.tsx
│       ├── FloatingBook.tsx
│       ├── FloatingPencil.tsx
│       └── DecorativeSymbols.tsx
│
├── lib/
│   ├── whatsapp.ts
│   └── constants.ts
│
├── public/
│   ├── images/
│   │   ├── lobe-logo.png
│   │   └── testimonials/
│   │       ├── testimonial-01.webp
│   │       ├── testimonial-02.webp
│   │       ├── testimonial-03.webp
│   │       ├── testimonial-04.webp
│   │       ├── testimonial-05.webp
│   │       └── testimonial-06.webp
│   │
│   └── ...
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

AI agent boleh mengubah struktur jika ada alasan teknis yang jelas,
tetapi jangan membuat arsitektur yang jauh lebih kompleks dari kebutuhan
landing page.

------------------------------------------------------------------------

# 25. Component Architecture

## Navbar

Props:

``` ts
type NavbarProps = {
  whatsappUrl: string;
};
```

Responsibilities:

-   logo;
-   navigation;
-   mobile menu;
-   CTA.

## WhatsAppButton

Reusable component:

``` ts
type WhatsAppButtonProps = {
  label?: string;
  className?: string;
  message?: string;
};
```

Default message menggunakan pesan konsultasi LOBE.

## ProgramCard

``` ts
type ProgramCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
};
```

## BenefitCard

``` ts
type BenefitCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
```

## TestimonialCarousel

``` ts
type Testimonial = {
  src: string;
  alt: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};
```

Hardcode six image paths dalam data file/config.

------------------------------------------------------------------------

# 26. Data-Driven Content

Content yang repetitif harus didefinisikan sebagai arrays, bukan
copy-paste JSX.

Contoh:

``` ts
const programs = [
  {
    title: "TK",
    description: "...",
  },
  {
    title: "SD",
    description: "...",
  },
  {
    title: "SMP",
    description: "...",
  },
  {
    title: "SMA",
    description: "...",
  },
];
```

Benefits juga harus menggunakan data array.

FAQ juga menggunakan data array sehingga mudah diperbarui.

------------------------------------------------------------------------

# 27. Responsive Requirements

## Mobile 360--767px

-   single-column;
-   hero stack;
-   CTA full-width jika diperlukan;
-   cards satu kolom;
-   testimonial satu slide;
-   mobile navbar;
-   sticky WhatsApp CTA;
-   font diperkecil;
-   decorative elements dikurangi.

## Tablet 768--1023px

-   2-column cards;
-   hero dapat 2-column jika space cukup;
-   navbar dapat mulai menggunakan desktop navigation.

## Desktop 1024px+

-   max content width sekitar 1180--1280px;
-   hero dua kolom;
-   program grid;
-   benefit grid;
-   testimonial carousel lebih lebar;
-   decorative illustration lebih lengkap.

## Large desktop

Jangan membiarkan konten menjadi terlalu lebar.

Gunakan container:

``` css
max-width: 1280px;
margin-inline: auto;
padding-inline: 24px;
```

------------------------------------------------------------------------

# 28. Accessibility

Minimum requirements:

-   semantic HTML;
-   satu H1 utama;
-   heading hierarchy benar;
-   alt text untuk semua image;
-   buttons memiliki accessible name;
-   carousel memiliki aria-label;
-   modal memiliki focus management;
-   keyboard navigation;
-   Escape untuk close modal;
-   visible focus state;
-   color contrast memadai;
-   jangan menggunakan warna sebagai satu-satunya indikator;
-   support `prefers-reduced-motion`.

Untuk testimonial screenshot, alt text jangan mengarang isi percakapan.

Contoh:

``` text
Testimonial pelanggan LOBE melalui percakapan WhatsApp
```

------------------------------------------------------------------------

# 29. SEO

## Title

Recommended:

> LOBE --- Les Online Belajar TK, SD, SMP & SMA

## Meta description

Recommended:

> LOBE menyediakan les online untuk TK, SD, SMP, dan SMA, semua mata
> pelajaran serta les materi TKA dan SNBT dengan jadwal fleksibel.

Jangan memasukkan klaim yang tidak tersedia.

## Open Graph

Siapkan:

-   OG title;
-   OG description;
-   OG image menggunakan branding LOBE;
-   Twitter/X card jika relevan.

## Structured data

Jika implementasi menggunakan JSON-LD, gunakan hanya data yang
benar-benar tersedia.

Jangan mengarang:

-   rating;
-   review count;
-   address;
-   opening hours;
-   price range.

Landing page tidak boleh mengklaim lokasi fisik jika belum ada informasi
tersebut.

------------------------------------------------------------------------

# 30. Performance

Target:

-   cepat pada koneksi mobile;
-   tidak ada hero video berat;
-   tidak ada 3D engine;
-   tidak ada particle engine berat;
-   image lazy loading;
-   testimonial non-active lazy-loaded jika memungkinkan;
-   SVG decorative assets inline/optimized;
-   minimize client-side JavaScript;
-   gunakan Server Components secara default;
-   hanya component yang membutuhkan interactivity yang menjadi Client
    Component.

## Client components yang kemungkinan dibutuhkan

-   Navbar/mobile menu;
-   testimonial carousel;
-   testimonial lightbox;
-   FAQ accordion jika interactive;
-   animated components yang membutuhkan browser state.

Jangan menjadikan seluruh `page.tsx` sebagai `"use client"` hanya karena
beberapa child component interaktif.

------------------------------------------------------------------------

# 31. Interaction Details

## Buttons

Primary:

-   green/primary background pada light section;
-   cream/white text;
-   rounded;
-   subtle shadow.

Pada green CTA section:

-   cream/white background;
-   dark green text.

Hover:

-   translateY(-1 atau -2px);
-   subtle shadow;
-   icon shift.

Active:

-   scale sekitar 0.98.

## Cards

Hover desktop:

-   slight translateY;
-   shadow increase;
-   icon animation.

Mobile:

-   jangan bergantung pada hover.

## FAQ

Accordion:

-   click/tap;
-   animated height;
-   plus icon rotate menjadi X;
-   hanya satu item terbuka jika itu memberikan UX lebih bersih, atau
    multiple jika implementasi lebih sederhana.

------------------------------------------------------------------------

# 32. Navigation Anchors

Gunakan anchor IDs:

``` text
#beranda
#program
#keunggulan
#cara-belajar
#testimoni
#faq
```

Navbar links harus smooth scroll.

Jika smooth scrolling digunakan, tetap pastikan target section tidak
tertutup sticky navbar.

Gunakan `scroll-margin-top`.

------------------------------------------------------------------------

# 33. Footer

Footer sederhana.

Isi:

**LOBE**\
**Les Online Belajar**

Copy:

> Les online untuk TK, SD, SMP, dan SMA. Semua mata pelajaran serta les
> materi TKA dan SNBT.

Navigation:

-   Beranda
-   Program
-   Keunggulan
-   Testimoni
-   FAQ

CTA:

> Hubungi via WhatsApp

Copyright:

> © \[current year\] LOBE --- Les Online Belajar. All rights reserved.

Jangan menambahkan:

-   alamat;
-   email;
-   Instagram;
-   Facebook;
-   TikTok;
-   nomor lain;

jika datanya belum diberikan.

------------------------------------------------------------------------

# 34. Content Restrictions

AI agent **WAJIB** mengikuti aturan ini.

## Jangan mengarang:

-   jumlah siswa;
-   jumlah tutor;
-   tahun berdiri;
-   jumlah tahun pengalaman;
-   universitas tertentu;
-   nama tutor;
-   rating;
-   jumlah review;
-   tingkat keberhasilan;
-   nilai siswa;
-   jumlah cabang;
-   alamat;
-   jam operasional;
-   harga;
-   diskon;
-   promo;
-   garansi;
-   sertifikasi;
-   partner;
-   kurikulum spesifik yang tidak disebutkan;
-   platform selain yang diketahui;
-   fitur aplikasi yang belum tersedia.

## Jangan membuat testimonial

Enam testimonial harus berasal dari enam screenshot yang diberikan user.

Jangan menulis ulang testimonial menjadi quote jika isi screenshot belum
diproses/diizinkan. Cukup tampilkan screenshot.

------------------------------------------------------------------------

# 35. Copywriting Direction

Copywriting harus:

-   Bahasa Indonesia;
-   natural;
-   friendly;
-   parent-friendly;
-   tidak terlalu formal;
-   tidak terlalu banyak jargon;
-   fokus pada manfaat;
-   CTA jelas.

Gunakan istilah:

-   "anak";
-   "siswa";
-   "orang tua";
-   "tutor";
-   "belajar";
-   "kebutuhan belajar";
-   "jadwal fleksibel".

Hindari copy yang terlalu hard-selling.

## Tone

Contoh tone:

> Belajar nggak harus terasa ribet. Dengan LOBE, anak bisa belajar
> secara online bersama tutor dengan jadwal yang fleksibel dan materi
> yang sesuai kebutuhan.

Jangan menggunakan klaim absolut seperti:

> "Pasti juara!"

Headline "Siap bantu anakmu juara!" boleh dipertahankan sebagai brand
marketing line karena berasal dari materi bisnis, tetapi jangan
mengubahnya menjadi jaminan hasil.

------------------------------------------------------------------------

# 36. Suggested Page Flow

Urutan visual harus membentuk alur:

``` text
ATTENTION
   ↓
Hero
   ↓
Apa yang LOBE tawarkan?
   ↓
Program / Jenjang
   ↓
Kenapa LOBE?
   ↓
Bagaimana pengalaman belajarnya?
   ↓
Fleksibilitas + pilihan tutor
   ↓
Social Proof
   ↓
FAQ
   ↓
CTA
```

Tujuannya adalah membawa visitor dari:

**"Apa ini?"**

menjadi:

**"Ini cocok untuk kebutuhan anak saya."**

kemudian:

**"Saya ingin konsultasi."**

------------------------------------------------------------------------

# 37. Visual Rhythm

Jangan membuat semua section memiliki background yang sama.

Recommended alternation:

1.  Hero --- cream/white + green visual
2.  Highlights --- light green
3.  Programs --- cream
4.  Benefits --- white
5.  Learning Experience --- light green
6.  Flexible Learning --- cream
7.  Testimonials --- white/cream
8.  FAQ --- light green
9.  Final CTA --- primary green
10. Footer --- dark green

Gunakan transisi antar-section yang halus.

------------------------------------------------------------------------

# 38. Decorative Design Details

Tambahkan detail visual yang dibuat via code:

-   small star/sparkle SVG;
-   dotted patterns;
-   curved lines;
-   organic blobs;
-   small educational symbols;
-   animated underline;
-   floating cards;
-   subtle grid.

Namun decorative elements tidak boleh:

-   menutupi teks;
-   mengganggu accessibility;
-   menyebabkan horizontal scrolling;
-   membuat halaman terasa ramai.

Semua decorative elements sebaiknya memiliki:

``` css
pointer-events: none;
```

jika memang tidak interaktif.

------------------------------------------------------------------------

# 39. Horizontal Overflow Prevention

Pastikan animated decorative elements tidak menyebabkan:

``` text
horizontal scrollbar
```

Gunakan:

``` css
overflow-x: clip;
```

pada root section/page jika sesuai.

Tetapi jangan memotong content yang harus dapat diakses.

------------------------------------------------------------------------

# 40. Image Asset Strategy

## Logo

File:

``` text
/public/images/lobe-logo.png
```

## Testimonials

User akan memasukkan enam gambar ke AI agent.

Expected:

``` text
testimonial-01
testimonial-02
testimonial-03
testimonial-04
testimonial-05
testimonial-06
```

AI agent harus menyesuaikan path dengan file aktual.

Jangan membuat dummy testimonial screenshot jika asset belum tersedia.

Untuk development, boleh menggunakan neutral placeholder hanya jika
diperlukan, tetapi production implementation harus siap menerima enam
gambar asli.

------------------------------------------------------------------------

# 41. Carousel Implementation

AI agent boleh menggunakan library carousel ringan seperti Embla
Carousel jika dibutuhkan.

Jika dependency tambahan tidak diperlukan, implementasi manual dengan
React state juga diperbolehkan.

Requirements:

-   next;
-   previous;
-   dots;
-   autoplay;
-   pause on hover;
-   pause on focus;
-   swipe;
-   keyboard;
-   loop;
-   reduced-motion compatible.

Autoplay default:

``` text
5000–6000ms
```

Jangan terlalu cepat.

Saat user sedang membaca/memperbesar testimonial, autoplay harus
berhenti.

------------------------------------------------------------------------

# 42. FAQ Implementation

Gunakan semantic button untuk trigger.

Contoh:

``` html
<button
  aria-expanded="false"
  aria-controls="faq-answer-1"
>
```

Content harus tetap accessible.

Animation accordion menggunakan Motion atau CSS.

------------------------------------------------------------------------

# 43. Analytics Readiness

Tidak perlu backend analytics pada versi pertama.

Namun struktur code harus mudah menambahkan analytics kemudian.

CTA event yang perlu mudah ditrack:

``` text
whatsapp_click
program_click
testimonial_open
faq_open
```

Jangan memasang analytics pihak ketiga jika user belum meminta.

------------------------------------------------------------------------

# 44. Error & Fallback States

## Testimonial image gagal

Jika image error:

-   tampilkan fallback card;
-   jangan merusak layout;
-   jangan tampilkan broken image icon besar.

## Logo gagal

Gunakan text fallback:

``` text
LOBE
Les Online Belajar
```

Namun logo asli tetap harus menjadi prioritas.

## WhatsApp

Jika browser tidak dapat membuka app:

-   URL harus tetap mengarah ke WhatsApp web/API link;
-   jangan membutuhkan JavaScript khusus untuk membuka WhatsApp.

------------------------------------------------------------------------

# 45. Security / Privacy

Karena website tidak memiliki backend dan tidak meminta data sensitif:

-   jangan membuat form pengumpulan data;
-   jangan meminta nama/NIK/alamat/email melalui website;
-   jangan menyimpan informasi visitor;
-   jangan memasukkan credential/API key.

WhatsApp link tidak membutuhkan secret.

------------------------------------------------------------------------

# 46. Deployment

Target deployment dapat menggunakan platform yang kompatibel dengan
Next.js, misalnya:

-   Vercel;
-   atau hosting lain yang mendukung Next.js.

Untuk versi static landing page, gunakan deployment strategy paling
sederhana yang sesuai dengan hosting.

Environment variables seharusnya tidak diperlukan.

------------------------------------------------------------------------

# 47. Browser Support

Target:

-   Chrome;
-   Edge;
-   Safari;
-   Firefox;
-   mobile Chrome;
-   mobile Safari.

Jika browser tidak mendukung animation tertentu, content tetap harus
dapat digunakan.

------------------------------------------------------------------------

# 48. Definition of Done

Landing page dianggap selesai apabila:

### Brand

-   [ ] Logo LOBE tampil benar.
-   [ ] Warna website harmonis dengan logo.
-   [ ] Typography konsisten.
-   [ ] Visual modern + playful.

### Content

-   [ ] TK ditampilkan.
-   [ ] SD ditampilkan.
-   [ ] SMP ditampilkan.
-   [ ] SMA ditampilkan.
-   [ ] Semua mata pelajaran disebut.
-   [ ] TKA disebut.
-   [ ] SNBT disebut.
-   [ ] Live class disebut.
-   [ ] 1 tutor 1 murid disebut.
-   [ ] Google Meet disebut.
-   [ ] Jadwal fleksibel disebut.
-   [ ] Orang tua dapat memilih tutor disebut.
-   [ ] Harga tidak ditampilkan.
-   [ ] Tidak ada klaim yang dibuat-buat.

### CTA

-   [ ] Semua CTA utama menuju nomor WhatsApp `6288937394970`.
-   [ ] Prefilled WhatsApp message berfungsi.
-   [ ] Navbar CTA berfungsi.
-   [ ] Hero CTA berfungsi.
-   [ ] Final CTA berfungsi.
-   [ ] Mobile sticky CTA berfungsi.

### Testimonial

-   [ ] Tersedia carousel.
-   [ ] Disiapkan untuk 6 screenshot.
-   [ ] Mobile swipe berfungsi.
-   [ ] Prev/next berfungsi.
-   [ ] Dots berfungsi.
-   [ ] Autoplay berfungsi.
-   [ ] Autoplay pause ketika user interaction.
-   [ ] Lightbox tersedia.
-   [ ] Tidak ada testimonial fiktif.

### Animation

-   [ ] Hero memiliki code-generated animation.
-   [ ] Ada scroll reveal.
-   [ ] Ada micro-animation.
-   [ ] Ada decorative SVG motion.
-   [ ] Tidak ada 3D.
-   [ ] Tidak ada footage.
-   [ ] Tidak ada WebGL/Three.js.
-   [ ] `prefers-reduced-motion` didukung.
-   [ ] Tidak ada animation yang menyebabkan horizontal overflow.

### Responsive

-   [ ] 360px mobile.
-   [ ] 390px mobile.
-   [ ] 430px mobile.
-   [ ] tablet.
-   [ ] desktop.
-   [ ] large desktop.

### Accessibility

-   [ ] Semantic HTML.
-   [ ] Heading hierarchy benar.
-   [ ] Alt text.
-   [ ] Keyboard navigation.
-   [ ] Focus state.
-   [ ] Carousel accessibility.
-   [ ] Modal accessibility.
-   [ ] Reduced motion.

### Performance

-   [ ] Tidak ada video hero.
-   [ ] Tidak ada 3D engine.
-   [ ] Image optimization.
-   [ ] Lazy loading.
-   [ ] Minimal client-side JavaScript.
-   [ ] Tidak ada dependency yang tidak diperlukan.

------------------------------------------------------------------------

# 49. QA Checklist

Sebelum dianggap selesai, AI agent harus melakukan pemeriksaan berikut.

## Visual QA

-   [ ] Tidak ada teks overflow.
-   [ ] Tidak ada image pecah.
-   [ ] Tidak ada horizontal scrollbar.
-   [ ] Tidak ada button keluar viewport.
-   [ ] Warna sesuai design system.
-   [ ] Spacing konsisten.
-   [ ] Mobile navbar tidak overlap.
-   [ ] Sticky CTA tidak menutupi content.
-   [ ] Testimonial tidak terpotong.

## Functional QA

-   [ ] Semua anchor bekerja.
-   [ ] WhatsApp link bekerja.
-   [ ] Prefilled message benar.
-   [ ] Mobile menu bekerja.
-   [ ] FAQ bekerja.
-   [ ] Carousel bekerja.
-   [ ] Lightbox bekerja.
-   [ ] Keyboard navigation bekerja.

## Content QA

Pastikan tidak ada placeholder seperti:

``` text
Lorem ipsum
Your Company
Example Tutor
John Doe
Rp XX
+62 xxx
[Insert text]
```

kecuali placeholder asset yang memang sengaja menunggu file
testimonial/logo.

------------------------------------------------------------------------

# 50. Final UX Requirement

Landing page harus terasa seperti website layanan pendidikan yang:

> **ramah untuk anak, meyakinkan bagi orang tua, sederhana untuk
> dipahami, dan sangat mudah menghubungi admin.**

Jangan membuat halaman terasa seperti dashboard SaaS.

Jangan membuat terlalu banyak section hanya demi terlihat panjang.

Setiap section harus memiliki fungsi:

-   menjelaskan;
-   membangun trust;
-   menjawab objection;
-   atau mendorong conversion.

Primary conversion tetap:

# WhatsApp

Jangan membuat CTA lain bersaing dengan WhatsApp.

------------------------------------------------------------------------

# 51. Implementation Priority

Jika AI agent harus menentukan prioritas pengerjaan:

## P0 --- wajib

1.  Responsive layout
2.  Navbar
3.  Hero
4.  Program
5.  Benefits
6.  WhatsApp CTA
7.  Testimonial carousel untuk 6 gambar
8.  FAQ
9.  Final CTA
10. Footer
11. Mobile sticky CTA

## P1 --- sangat diutamakan

1.  Code-generated hero illustration
2.  Scroll reveal
3.  Animated learning illustration
4.  Mobile menu animation
5.  Testimonial lightbox
6.  Micro-interactions
7.  Reduced motion

## P2 --- polish

1.  Advanced SVG animation
2.  Decorative background motion
3.  Fine-grained hover choreography
4.  Performance polish
5.  SEO/Open Graph refinement

Jika waktu/kompleksitas terbatas, jangan mengorbankan conversion flow,
responsive behavior, accessibility, dan WhatsApp functionality hanya
demi animation.

------------------------------------------------------------------------

# 52. Instruksi Akhir untuk AI Coding Agent

Bangun landing page LOBE berdasarkan PRD ini.

Prioritas implementasi:

1.  **Jangan mengarang informasi bisnis.**
2.  Gunakan **Bahasa Indonesia**.
3.  Gunakan **LOBE --- Les Online Belajar** sebagai brand.
4.  Gunakan palette yang berasal dari logo.
5.  Target utama adalah orang tua/wali siswa Indonesia.
6.  Primary CTA selalu WhatsApp `6288937394970`.
7.  Jangan menampilkan harga.
8.  Siapkan testimonial slideshow untuk tepat **6 screenshot WhatsApp**
    yang akan diberikan user.
9.  Jangan membuat testimonial fiktif.
10. Jangan menggunakan 3D.
11. Jangan menggunakan footage.
12. Semua visual tambahan harus dapat dibuat melalui code.
13. Gunakan SVG/CSS/React animation untuk visual.
14. Gunakan Motion for React untuk animation orchestration.
15. Gunakan Next.js + TypeScript + Tailwind CSS.
16. Gunakan component architecture yang reusable.
17. Gunakan Server Components secara default.
18. Gunakan Client Components hanya ketika diperlukan.
19. Pastikan mobile experience menjadi prioritas.
20. Pastikan website tetap cepat.
21. Pastikan accessibility.
22. Pastikan `prefers-reduced-motion`.
23. Pastikan tidak ada horizontal overflow.
24. Pastikan semua CTA WhatsApp berfungsi.
25. Jangan menambahkan fitur backend yang tidak diperlukan.

**Output akhir harus berupa landing page production-quality, bukan
sekadar prototype.**

Fokus utama desain:

> **Modern + Playful + Friendly + Professional + Conversion-focused**

Fokus utama bisnis:

> **Membantu calon siswa/orang tua memahami layanan LOBE dan menghubungi
> LOBE melalui WhatsApp.**
