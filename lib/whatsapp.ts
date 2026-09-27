export const whatsappNumber = "6288937394970";

export const defaultWhatsAppMessage =
  "Halo LOBE, saya ingin konsultasi mengenai les online. Saya ingin mengetahui program yang sesuai untuk anak saya.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

export interface StudentRegistrationData {
  namaSiswa: string;
  namaOrtu?: string;
  whatsapp: string;
  jenjang: string;
  kelas: string;
  mataPelajaran: string;
  formatLes?: string;
  waktuBelajar?: string;
  catatan?: string;
}

export function formatRegistrationWhatsAppMessage(data: StudentRegistrationData): string {
  const lines = [
    "Halo Admin LOBE, saya telah mengisi formulir pendaftaran di website:",
    "",
    "📋 *DATA PENDAFTARAN SISWA LOBE*",
    `👤 *Nama Siswa:* ${data.namaSiswa.trim()}`,
    `👨‍👩‍👦 *Orang Tua/Wali:* ${data.namaOrtu?.trim() || "-"}`,
    `📱 *No. WhatsApp:* ${data.whatsapp.trim()}`,
    `🏫 *Jenjang & Kelas:* ${data.jenjang.trim()} - ${data.kelas.trim()}`,
    `📚 *Mata Pelajaran:* ${data.mataPelajaran.trim()}`,
    `🎯 *Format Les:* ${data.formatLes?.trim() || "1 Tutor 1 Murid (Privat)"}`,
    `⏰ *Waktu Belajar:* ${data.waktuBelajar?.trim() || "Fleksibel"}`,
    `📝 *Catatan/Target Belajar:* ${data.catatan?.trim() || "-"}`,
    "",
    "Mohon informasi ketersediaan jadwal tutor dan konsultasi lebih lanjut. Terima kasih!"
  ];

  return lines.join("\n");
}

export function getRegistrationWhatsAppUrl(data: StudentRegistrationData): string {
  const message = formatRegistrationWhatsAppMessage(data);
  return getWhatsAppUrl(message);
}
