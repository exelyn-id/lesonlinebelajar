/**
 * =========================================================================
 * GOOGLE APPS SCRIPT (GAS) - DATABASE PENDAFTARAN SISWA LOBE (LES ONLINE BELAJAR)
 * File: Code.gs
 * =========================================================================
 * 
 * PANDUAN CEPAT PEMASANGAN:
 * 1. Buka Google Sheets baru di https://sheets.new
 * 2. Klik menu: "Ekstensi" (Extensions) > "Apps Script"
 * 3. Hapus kode default, lalu tempel (PASTE) seluruh kode ini
 * 4. Klik tombol "Simpan" (Ctrl + S)
 * 5. Klik "Terapkan" (Deploy) > "Penerapan baru" (New deployment)
 * 6. Pilih tipe: "Aplikasi Web" (Web app)
 *    - Jalankan sebagai: "Saya" (Me)
 *    - Akses: "Siapa saja" (Anyone) -> [PENTING!]
 * 7. Klik "Terapkan", izinkan otorisasi akun Google Anda
 * 8. Salin URL Web App yang didapat (berakhiran /exec)
 * 9. Masukkan ke file .env.local:
 *    NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
 */

var SHEET_NAME = "Pendaftaran Siswa";

function doPost(e) {
  try {
    var data = {};
    
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

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      initSheetHeader(sheet);
    } else if (sheet.getLastRow() === 0) {
      initSheetHeader(sheet);
    }

    var timestamp = Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");

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

    sheet.appendRow(rowData);

    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 4).setNumberFormat("@");

    var response = {
      status: "success",
      message: "Data pendaftaran siswa berhasil disimpan ke Google Sheets LOBE!",
      timestamp: timestamp,
      row: lastRow
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    var errorResponse = {
      status: "error",
      message: error.toString()
    };

    return ContentService.createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  var response = {
    status: "online",
    message: "Google Apps Script Backend LOBE Pendaftaran Siswa berjalan dengan baik!",
    time: new Date().toISOString()
  };

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

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

  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setBackground("#649568");
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 35);
  
  for (var col = 1; col <= headers.length; col++) {
    sheet.autoResizeColumn(col);
  }
}
