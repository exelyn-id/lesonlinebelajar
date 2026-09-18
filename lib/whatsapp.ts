export const whatsappNumber = "6288937394970";

export const defaultWhatsAppMessage =
  "Halo LOBE, saya ingin konsultasi mengenai les online. Saya ingin mengetahui program yang sesuai untuk anak saya.";

export function getWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}
