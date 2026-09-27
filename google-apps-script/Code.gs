/**
 * =========================================================================
 * GOOGLE APPS SCRIPT (GAS) - DATABASE PENDAFTARAN SISWA LOBE (LES ONLINE BELAJAR)
 * File: Code.gs
 * =========================================================================
 * 
 * PANDUAN PEMASANGAN (HANYA 2 MENIT):
 * 1. Buka Google Sheets baru di https://sheets.new (atau gunakan spreadsheet yang sudah ada).
 * 2. Beri nama spreadsheet, contoh: "Database Pendaftaran LOBE".
 * 3. Di menu atas Google Sheets, klik menu: "Ekstensi" (Extensions) > "Apps Script".
 * 4. Hapus semua kode default di editor, lalu COPY & PASTE seluruh isi file Code.gs ini.
 * 5. Klik ikon Simpan (Save / Ctrl+S).
 * 6. Klik tombol biru "Terapkan" (Deploy) di pojok kanan atas > pilih "Penerapan baru" (New deployment).
 * 7. Pada ikon gear (roda gigi) "Pilih jenis", pilih "Aplikasi web" (Web app).
 * 8. Konfigurasi:
 *    - Deskripsi: "LOBE Registration API v1"
 *    - Jalankan sebagai (Execute as): "Saya" (Me / akun Google Anda)
 *    - Yang memiliki akses (Who has access): "Siapa saja" (Anyone) -> SANGAT PENTING!
 * 9. Klik "Terapkan" (Deploy).
 * 10. Jika muncul peringatan izin (Authorization), klik "Tinjau Izin" (Review Permissions) > pilih akun Anda > klik "Lanjutan" (Advanced) > klik "Buka LOBE (tidak aman)" / "Go to project" > klik "Izinkan" (Allow).
 * 11. Salin "URL Aplikasi Web" (Web App URL) yang berakhiran "/exec".
 * 12. Tempel URL tersebut ke file .env.local di website LOBE:
 *     NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
 * 
 * Selesai! Setiap ada siswa yang mengisi form di web, otomatis masuk ke Google Sheets ini
 * dan langsung diarahkan ke WhatsApp Admin LOBE.
 */

// Nama sheet tab di Google Sheets
var SHEET_NAME = "Pendaftaran Siswa";

/**
 * Handle HTTP POST Request dari Form Website
 */
function doPost(e) {
  try {
    var data = {};
    
    // Parse data dari JSON payload atau form-urlencoded
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Jika sheet belum ada, buat baru dan tambahkan header
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      initSheetHeader(sheet);
    } else if (sheet.getLastRow() === 0) {
      initSheetHeader(sheet);
    }

    // Format waktu WIB (Asia/Jakarta)
    var timestamp = Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");

    // Ambil nilai data yang dikirimkan dari form web
    var namaSiswa = data.namaSiswa || "-";
    var namaOrtu = data.namaOrtu || "-";
    var whatsapp = data.whatsapp || "-";
    var jenjang = data.jenjang || "-";
    var kelas = data.kelas || "-";
    var mataPelajaran = data.mataPelajaran || "-";
    var formatLes = data.formatLes || "1 Tutor 1 Murid (Privat)";
    var waktuBelajar = data.waktuBelajar || "Fleksibel";
    var catatan = data.catatan || "-";
    var status = "Menunggu Follow-up WA";

    // Susun baris baru
    var rowData = [
      timestamp,
      namaSiswa,
      namaOrtu,
      whatsapp,
      jenjang,
      kelas,
      mataPelajaran,
      formatLes,
      waktuBelajar,
      catatan,
      status
    ];

    // Tambahkan baris ke Google Sheets
    sheet.appendRow(rowData);

    // Format nomor WhatsApp sebagai plain text agar tidak error
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 4).setNumberFormat("@");

    // Return response JSON berhasil
    var response = {
      status: "success",
      message: "Data pendaftaran siswa berhasil disimpan ke Google Sheets LOBE!",
      timestamp: timestamp,
      row: lastRow
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return response JSON gagal
    var errorResponse = {
      status: "error",
      message: error.toString()
    };

    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle HTTP GET Request untuk testing koneksi API
 */
function doGet(e) {
  var response = {
    status: "online",
    message: "Google Apps Script Backend LOBE Pendaftaran Siswa berjalan dengan baik!",
    time: new Date().toISOString()
  };

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Fungsi helper untuk membuat dan mempercantik header tabel Google Sheets
 */
function initSheetHeader(sheet) {
  var headers = [
    "Waktu Pendaftaran (WIB)",
    "Nama Siswa",
    "Nama Orang Tua/Wali",
    "No. WhatsApp",
    "Jenjang",
    "Kelas",
    "Mata Pelajaran",
    "Format Les",
    "Waktu Belajar",
    "Catatan/Target Belajar",
    "Status Follow-Up"
  ];

  sheet.appendRow(headers);

  // Styling Header (Warna tema LOBE Hijau #649568)
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setBackground("#649568");
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  
  // Freeze baris pertama
  sheet.setFrozenRows(1);
  
  // Set tinggi baris header
  sheet.setRowHeight(1, 35);
  
  // Auto-fit lebar kolom
  for (var col = 1; col <= headers.length; col++) {
    sheet.autoResizeColumn(col);
  }
}
