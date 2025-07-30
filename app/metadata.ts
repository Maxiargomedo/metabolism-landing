import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MetabolLife - Activa tu metabolismo',
  description: 'Activa tu metabolismo. Consultas nutricionales, análisis corporal y programas especializados para una vida saludable.',
  keywords: ['nutrición', 'metabolismo', 'salud', 'dieta personalizada', 'consulta nutricional'],
  authors: [{ name: 'MetabolLife' }],
  creator: 'MetabolLife',
  publisher: 'MetabolLife',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://metabolife.com',
    title: 'MetabolLife - Activa tu metabolismo',
    description: 'Activa tu metabolismo. Consultas nutricionales, análisis corporal y programas especializados.',
    siteName: 'MetabolLife',
    images: [{
      url: '/img/doctora-nutricionista-da-notas_701961-575.png',
      width: 1200,
      height: 630,
      alt: 'MetaboLife - Consulta Nutricional',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetabolLife - Activa tu metabolismo',
    description: 'Activa tu metabolismo.',
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
  verification: {
    google: 'google-site-verification-code',
  },
};
