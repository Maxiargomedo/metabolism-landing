import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../src/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "MetabolLife | Activa tu metabolismo",
  description: "Activa tu metabolismo. Expertos en nutrición personalizada y metabolismo saludable.",
  keywords: "metabolismo, nutrición, alimentación consciente, salud natural, bienestar",
  authors: [{ name: "MetabolLife Team" }],
  metadataBase: new URL('https://metabolife.com'),
  openGraph: {
    title: "MetabolLife | Activa tu metabolismo",
    description: "Activa tu metabolismo",
    type: "website",
    locale: "es_ES",
    url: "https://metabolife.com",
    siteName: "MetabolLife",
    images: [{
      url: '/img/doctora-nutricionista-da-notas_701961-575.png',
      width: 1200,
      height: 630,
      alt: 'MetabolLife - Consulta Nutricional',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MetabolLife | Activa tu metabolismo",
    description: "Activa tu metabolismo",
    images: ['/img/doctora-nutricionista-da-notas_701961-575.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-inter antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}