import { NextResponse } from "next/server";
import { getRegistrationWhatsAppUrl, StudentRegistrationData } from "@/lib/whatsapp";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      namaSiswa,
      namaOrtu,
      whatsapp,
      jenjang,
      kelas,
      mataPelajaran,
      formatLes,
      waktuBelajar,
      catatan,
    } = body;

    // Validasi field wajib
    if (!namaSiswa || !whatsapp || !jenjang) {
      return NextResponse.json(
        {
          success: false,
          error: "Nama siswa, nomor WhatsApp, dan jenjang wajib diisi.",
        },
        { status: 400 }
      );
    }

    const registrationData: StudentRegistrationData = {
      namaSiswa: String(namaSiswa).trim(),
      namaOrtu: namaOrtu ? String(namaOrtu).trim() : "-",
      whatsapp: String(whatsapp).trim(),
      jenjang: String(jenjang).trim(),
      kelas: kelas ? String(kelas).trim() : "-",
      mataPelajaran: mataPelajaran ? String(mataPelajaran).trim() : "Semua Mata Pelajaran",
      formatLes: formatLes ? String(formatLes).trim() : "1 Tutor 1 Murid (Privat)",
      waktuBelajar: waktuBelajar ? String(waktuBelajar).trim() : "Fleksibel",
      catatan: catatan ? String(catatan).trim() : "-",
    };

    const waUrl = getRegistrationWhatsAppUrl(registrationData);

    // URL Google Apps Script Web App resmi LOBE (berfungsi di lokal maupun web asli/production)
    const DEFAULT_GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwOaZ-03xvzILiraUrSESTokOMSAD95_gucGkUQB2GG5n-skyblfi1ByfFzC76o51k/exec";

    const scriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      DEFAULT_GOOGLE_SCRIPT_URL;

    let savedToSheets = false;
    let sheetResponseInfo = null;

    if (scriptUrl && scriptUrl.trim() !== "") {
      try {
        const gasResponse = await fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
          redirect: "follow",
        });

        if (gasResponse.ok) {
          try {
            sheetResponseInfo = await gasResponse.json();
            savedToSheets = true;
          } catch {
            savedToSheets = true; // Response status 200 OK
          }
        } else {
          console.warn("GAS responded with non-200 status:", gasResponse.status);
        }
      } catch (gasError) {
        console.error("Error sending data to Google Apps Script:", gasError);
        // Fallback: don't block user from WhatsApp even if GAS has network glitch
      }
    } else {
      console.info(
        "NEXT_PUBLIC_GOOGLE_SCRIPT_URL belum dikonfigurasi di .env.local. Data diarahkan langsung ke WhatsApp."
      );
    }

    return NextResponse.json({
      success: true,
      savedToSheets,
      message: savedToSheets
        ? "Data berhasil tersimpan ke Google Sheets LOBE!"
        : "Data siap dikirimkan ke WhatsApp Admin LOBE.",
      waUrl,
      data: registrationData,
      sheetResponseInfo,
    });
  } catch (error) {
    console.error("Registration API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Terjadi kendala saat memproses formulir. Silakan coba lagi atau hubungi via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
