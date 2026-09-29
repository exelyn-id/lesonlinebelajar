import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LOBE - Les Online Belajar",
    short_name: "LOBE",
    description:
      "Layanan Les Online Interaktif TK, SD, SMP, SMA - Pilihan Kelas Privat 1-on-1, Semi Privat (3-5 orang), dan Berkelompok (min. 10 orang).",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#649568",
    lang: "id",
    icons: [
      {
        src: "/images/lobe-logo.jpg",
        sizes: "192x192 512x512",
        type: "image/jpeg",
      },
    ],
  };
}
