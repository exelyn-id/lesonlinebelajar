import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { faqs } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://lesonlinebelajar.my.id";

export const viewport: Viewport = {
  themeColor: "#649568",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LOBE - Les Online Belajar TK, SD, SMP & SMA | Privat, Semi Privat & Kelompok",
    template: "%s | LOBE - Les Online Belajar",
  },
  description:
    "LOBE (Les Online Belajar) adalah bimbingan les online interaktif terpercaya untuk TK, SD, SMP, dan SMA. Tersedia kelas Privat 1-on-1, Semi Privat (3-5 orang), dan Berkelompok (min. 10 orang) semua mata pelajaran serta materi TKA & SNBT.",
  keywords: [
    "les online belajar",
    "lesonlinebelajar.my.id",
    "lobe les online",
    "les privat online",
    "les semi privat online",
    "les kelompok online",
    "les online tk sd smp sma",
    "les privat sd smp sma",
    "bimbel online tka snbt",
    "les matematika online",
    "tutor les online terpercaya",
    "les online 1 tutor 1 murid",
    "les online murah berkualitas",
  ],
  authors: [{ name: "LOBE - Les Online Belajar", url: siteUrl }],
  creator: "LOBE",
  publisher: "LOBE - Les Online Belajar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "LOBE - Les Online Belajar TK, SD, SMP & SMA | lesonlinebelajar.my.id",
    description:
      "Layanan les online interaktif TK, SD, SMP, SMA. Pilihan format Privat 1-on-1, Semi Privat (3-5 orang), dan Berkelompok (min. 10 orang) dengan jadwal fleksibel.",
    url: siteUrl,
    siteName: "LOBE - Les Online Belajar",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/lobe-logo.jpg",
        width: 800,
        height: 800,
        alt: "Logo LOBE - Les Online Belajar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOBE - Les Online Belajar TK, SD, SMP & SMA",
    description:
      "Bantu anak belajar lebih nyaman, fokus, dan terarah. Tersedia kelas Privat, Semi Privat, dan Berkelompok di lesonlinebelajar.my.id",
    images: ["/images/lobe-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "LOBE - Les Online Belajar",
    alternateName: "LOBE",
    url: siteUrl,
    logo: `${siteUrl}/images/lobe-logo.jpg`,
    description:
      "Layanan les online interaktif untuk jenjang TK, SD, SMP, dan SMA. Tersedia format Privat 1-on-1, Semi Privat (3-5 orang), dan Berkelompok (min. 10 orang) semua mata pelajaran dan materi TKA/SNBT.",
    telephone: "+6288973394970",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6288973394970",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Program Les Online LOBE",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Kelas Privat 1 Tutor 1 Murid",
            description: "Les online privat 1-on-1 untuk TK, SD, SMP, SMA & SNBT",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Kelas Semi Privat (3 - 5 Orang)",
            description: "Les online kelompok kecil interaktif untuk SD, SMP, SMA",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Kelas Berkelompok (Minimal 10 Orang)",
            description: "Les online rombongan belajar hemat untuk SD, SMP, SMA",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-text selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
