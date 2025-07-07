import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  eslint: {
    // Ignorar advertencias de ESLint durante la compilación para producción
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorar errores de TypeScript durante la compilación para producción
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
