import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "LOBE - Les Online Belajar TK, SD, SMP & SMA | lesonlinebelajar.my.id";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const imagePath = join(process.cwd(), "public", "images", "lobe-logo.jpg");
  const imageData = readFileSync(imagePath).toString("base64");
  const logoSrc = `data:image/jpeg;base64,${imageData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FEFEF2 0%, #EAF3E9 50%, #FFFFFF 100%)",
          padding: "48px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Decorative Circle */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            background: "rgba(100, 149, 104, 0.15)",
          }}
        />

        {/* Logo Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <img
            src={logoSrc}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid #649568",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: "44px", fontWeight: "bold", color: "#19301F" }}>
              LOBE
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#649568",
                fontWeight: 600,
                letterSpacing: "1px",
              }}
            >
              LES ONLINE BELAJAR
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#19301F",
            textAlign: "center",
            margin: "0 0 16px 0",
            lineHeight: 1.2,
            maxWidth: "920px",
          }}
        >
          Bantu Anak Belajar Lebih Nyaman, Fokus & Terarah
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "#607066",
            textAlign: "center",
            margin: "0 0 32px 0",
            maxWidth: "850px",
          }}
        >
          Les Online Interaktif TK, SD, SMP & SMA • Semua Mata Pelajaran & SNBT
        </p>

        {/* Formats Pills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#649568",
              color: "white",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Privat 1-on-1
          </div>
          <div
            style={{
              background: "#EAF3E9",
              color: "#426B49",
              border: "2px solid #649568",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Semi Privat (3-5 Siswa)
          </div>
          <div
            style={{
              background: "#EAF3E9",
              color: "#426B49",
              border: "2px solid #649568",
              padding: "10px 24px",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Berkelompok (10+ Siswa)
          </div>
        </div>

        {/* Domain Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            fontSize: "16px",
            color: "#649568",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          🌐 lesonlinebelajar.my.id
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
