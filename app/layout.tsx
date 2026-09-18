import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOBE - Les Online Belajar TK, SD, SMP & SMA",
  description: "LOBE menyediakan les online untuk TK, SD, SMP, dan SMA, semua mata pelajaran serta les materi TKA dan SNBT dengan jadwal fleksibel.",
  openGraph: {
    title: "LOBE - Les Online Belajar TK, SD, SMP & SMA",
    description: "LOBE menyediakan les online untuk TK, SD, SMP, dan SMA, semua mata pelajaran serta les materi TKA dan SNBT dengan jadwal fleksibel.",
    type: "website",
    locale: "id_ID",
    siteName: "LOBE - Les Online Belajar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-text selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
