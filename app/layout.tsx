import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../src/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "MetaboLife | Metabolismo y Nutrición Consciente",
  description: "Transforma tu vida con alimentación consciente y natural. Descubre el poder de una nutrición que respeta tu cuerpo y el planeta.",
  keywords: "metabolismo, nutrición, alimentación consciente, salud natural, bienestar",
  authors: [{ name: "MetaboLife Team" }],
  openGraph: {
    title: "MetaboLife | Metabolismo y Nutrición Consciente",
    description: "Transforma tu vida con alimentación consciente y natural",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "MetaboLife | Metabolismo y Nutrición Consciente",
    description: "Transforma tu vida con alimentación consciente y natural",
  },
  robots: {
    index: true,
    follow: true,
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