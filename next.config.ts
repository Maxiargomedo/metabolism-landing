import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de rendimiento
  poweredByHeader: false,
  compress: true,
  
  // Optimizaciones de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Configuración experimental para mejoras de rendimiento
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'styled-components'],
  },
  
  // Configuración del compilador
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: {
      displayName: process.env.NODE_ENV === 'development',
      ssr: true,
      fileName: false,
    },
  },
  
  // Configuración de Turbopack
  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  
  // Headers para seguridad y caché
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Seguridad básica
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Política de seguridad de contenido
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://cdn.emailjs.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https:",
              "frame-src 'self' https://www.youtube.com",
              "connect-src 'self' https://api.emailjs.com https:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
          // Política de referrer
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // HSTS para HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Política de permisos
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/img/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
        ],
      },
    ];
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
