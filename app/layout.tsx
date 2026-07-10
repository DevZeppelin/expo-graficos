import type { Metadata } from "next";
import { Archivo_Black, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expo Gráficos & Afines 2027 | 1ª Exposición del sector gráfico",
  description:
    "1ª Exposición de Gráficos & Afines. 21, 22 y 23 de octubre de 2027, de 13 a 20 hs, en Predio BA Ferial (ex Centro Costa Salguero), Pabellón 5, CABA. Reservá tu stand o acreditate como visitante.",
  openGraph: {
    title: "Expo Gráficos & Afines 2027",
    description:
      "El primer gran encuentro del mundo gráfico y afines. 21 al 23 de octubre de 2027 · BA Ferial, Pabellón 5 · CABA.",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
