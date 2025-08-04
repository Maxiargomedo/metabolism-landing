import type { Metadata } from "next";
import ImageErrorSuppressor from "../src/components/ImageErrorSuppressor";
import { organizationSchema, serviceSchema, personSchema } from "../src/utils/schemas";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetabolLife | Centro Especializado en Nutrición y Metabolismo | Chile",
  description: "⚡ Especialistas en reactivación metabólica. Programa nutricional personalizado para adelgazar, reducir triglicéridos y mejorar tu salud naturalmente. Manuel López, Nutricionista certificado en Canadá. Consulta gratuita.",
  keywords: "metabolismo lento, nutricionista chile, adelgazar naturalmente, triglicéridos altos, hígado graso, nutrición personalizada, metabolismo rapido, dieta metabolismo, consulta nutricional, Manuel López nutricionista, programa nutricional chile, acelerar metabolismo, perder peso naturalmente",
  authors: [{ name: "Manuel López - Nutricionista Certificado" }],
  metadataBase: new URL('https://metabolife.com'),
  openGraph: {
    title: "MetabolLife | Centro Especializado en Nutrición y Metabolismo | Chile",
    description: "⚡ Especialistas en reactivación metabólica. Programa nutricional personalizado para adelgazar, reducir triglicéridos y mejorar tu salud naturalmente. Consulta gratuita con Manuel López, Nutricionista certificado en Canadá.",
    type: "website",
    locale: "es_CL",
    url: "https://metabolife.com",
    siteName: "MetabolLife Chile",
    images: [{
      url: '/img/doctora-nutricionista-da-notas_701961-575.png',
      width: 1200,
      height: 630,
      alt: 'MetabolLife - Consulta Nutricional',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MetabolLife | Centro Especializado en Nutrición y Metabolismo",
    description: "⚡ Especialistas en reactivación metabólica. Programa nutricional personalizado. Consulta gratuita con Manuel López, Nutricionista certificado.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema)
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <ImageErrorSuppressor>
          {children}
        </ImageErrorSuppressor>
      </body>
    </html>
  );
}