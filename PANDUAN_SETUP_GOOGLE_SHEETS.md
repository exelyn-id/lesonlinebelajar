# 📋 Panduan Integrasi Formulir Pendaftaran LOBE ke Google Sheets (GAS Code.gs)

Fitur formulir pendaftaran siswa di website LOBE telah berhasil dibuat! Formulir ini berfungsi untuk:
1. **Menerima pendaftaran calon siswa/orang tua secara langsung di website.**
2. **Menyimpan data otomatis ke database Google Sheets Anda melalui Google Apps Script (`Code.gs`).**
3. **Mengarahkan calon siswa secara otomatis ke WhatsApp Admin LOBE (+62 889-3739-4970)** dengan template pesan lengkap berisi seluruh data yang telah diisi.

---

## 🚀 Langkah Pemasangan Google Apps Script (Hanya 2-3 Menit)

File kode Apps Script sudah kami sediakan di file:
- [`google-apps-script/Code.gs`](file:///c:/Users/hi/Documents/1_PROJECT%20WEB/CALON%20KLIEN/lobe/google-apps-script/Code.gs) dan [`Code.gs`](file:///c:/Users/hi/Documents/1_PROJECT%20WEB/CALON%20KLIEN/lobe/Code.gs)

Berikut langkah mudah menghubungkannya:

### Langkah 1: Buat Google Sheet Baru
1. Buka browser dan kunjungi: **[https://sheets.new](https://sheets.new)**
2. Beri judul spreadsheet Anda, misalnya: `Database Pendaftaran LOBE`

### Langkah 2: Buka Apps Script Editor
1. Di menu atas Google Sheets, klik menu **Ekstensi** (Extensions) > pilih **Apps Script**.
2. Tab baru editor Google Apps Script akan terbuka.

### Langkah 3: Tempelkan Kode `Code.gs`
1. Hapus semua kode default `myFunction() {}` yang ada di editor.
2. Buka file [`Code.gs`](file:///c:/Users/hi/Documents/1_PROJECT%20WEB/CALON%20KLIEN/lobe/Code.gs) di proyek ini, **Copy (Salin) seluruh isinya**, lalu **Paste (Tempel)** ke editor Apps Script.
3. Klik tombol **Simpan** (ikon disket atau `Ctrl + S`).

### Langkah 4: Terapkan Sebagai Aplikasi Web (Deploy as Web App)
1. Di pojok kanan atas editor Apps Script, klik tombol biru **Terapkan** (Deploy) > pilih **Penerapan baru** (New deployment).
2. Di sebelah kiri tulisan "Pilih jenis", klik ikon **Roda Gigi (Gear)** > pilih **Aplikasi web** (Web app).
3. Isi konfigurasi sebagai berikut:
   - **Deskripsi:** `LOBE Registration API`
   - **Jalankan sebagai (Execute as):** `Saya (email Anda)`
   - **Yang memiliki akses (Who has access):** `Siapa saja` *(Anyone)*  
     *(⚠️ PENTING: Wajib pilih "Siapa saja / Anyone" agar formulir dari website bisa mengirimkan data tanpa perlu login akun Google).*
4. Klik tombol **Terapkan** (Deploy).

### Langkah 5: Berikan Izin Akses (Otorisasi)
1. Jika muncul pop-up *"Otorisasi diperlukan"* (Authorization required), klik tombol **Tinjau Izin** (Review permissions).
2. Pilih akun Google Anda.
3. Jika muncul layar peringatan *"Google belum memverifikasi aplikasi ini"*, klik tombol kecil **Lanjutan** (Advanced) di bagian bawah.
4. Klik link **Buka LOBE (tidak aman)** / *Go to project*.
5. Klik **Izinkan** (Allow).

### Langkah 6: Salin URL Web App dan Simpan di `.env.local`
1. Setelah berhasil dideploy, Anda akan mendapatkan **URL Aplikasi Web** (Web app URL) yang berakhiran `/exec`, contoh:
   ```text
   https://script.google.com/macros/s/AKfycbx.../exec
   ```
2. Salin URL tersebut.
3. Buka file [`.env.local`](file:///c:/Users/hi/Documents/1_PROJECT%20WEB/CALON%20KLIEN/lobe/.env.local) di proyek website LOBE ini, lalu tempelkan URL tersebut:
   ```env
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx.../exec
   ```
4. Simpan file `.env.local`.

---

## 📊 Struktur Kolom Database Google Sheets Otomatis

Script `Code.gs` telah dilengkapi fitur **auto-header dan auto-styling**. Begitu ada pengisian form pertama kali, Google Sheets Anda otomatis diformat dengan baris judul hijau LOBE yang rapi:

| Kolom | Judul Kolom | Deskripsi |
| :--- | :--- | :--- |
| **A** | Waktu Pendaftaran (WIB) | Tanggal dan jam pendaftaran (zona WIB) |
| **B** | Nama Siswa | Nama lengkap calon siswa |
| **C** | Nama Orang Tua/Wali | Nama orang tua / wali |
| **D** | No. WhatsApp | Nomor WA aktif siswa/orang tua |
| **E** | Jenjang | TK / PAUD, SD, SMP, SMA, SNBT / TKA |
| **F** | Kelas | Kelas siswa (misal: Kelas 4, Kelas 10, dll.) |
| **G** | Mata Pelajaran | Mapel yang ingin dipelajari / butuh bantuan |
| **H** | Format Les | 1 Tutor 1 Murid / Semi-Privat / Konsultasi |
| **I** | Waktu Belajar | Pagi, Siang, Sore, Malam, atau Fleksibel |
| **J** | Catatan / Target Belajar | Kendala belajar atau catatan khusus |
| **K** | Status Follow-Up | Default: `Menunggu Follow-up WA` |

---

## 📱 Alur Otomatis Menuju WhatsApp Admin LOBE

Setelah formulir dikirim dan tersimpan di Google Sheets:
1. Browser otomatis membuka chat WhatsApp baru ke Admin LOBE: **+62 889-3739-4970**
2. Pesan sudah langsung terisi rapi (*pre-filled*) dengan rincian data siswa, memudahkan Admin langsung menyapa dan mencocokkan tutor tanpa perlu bertanya ulang.
3. Di website juga tampil kartu konfirmasi sukses dan tombol **"Buka WhatsApp Admin Sekarang"** sebagai cadangan jika pop-up browser terblokir.
