'use client';

import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import dynamic from 'next/dynamic';
import HeroSection from '../src/components/UI/HeroSection';
import LoadingScreen from '../src/components/LoadingScreen';
import LazySection from '../src/components/LazySection';
import ClientOnly from '../src/components/ClientOnly';
import { MobileMenuProvider, useMobileMenu } from '../src/contexts/MobileMenuContext';
import { ThemeProvider } from '../src/contexts/ThemeContext';

// Importaciones dinámicas simplificadas para evitar hidratación
const Header = dynamic(() => import('../src/components/UI/Header'), { ssr: false });
const ThemeToggle = dynamic(() => import('../src/components/ThemeToggle'), { ssr: false });
const VideoSection = dynamic(() => import('../src/components/UI/VideoSection'));
const About = dynamic(() => import('../src/components/UI/About'));
const TeamSection = dynamic(() => import('../src/components/sections/TeamSection'));
const HealthEducation = dynamic(() => import('../src/components/sections/HealthEducation'));
const Services = dynamic(() => import('../src/components/UI/Services'));
const Contact = dynamic(() => import('../src/components/UI/Contact'));
const Footer = dynamic(() => import('../src/components/UI/Footer'));
const ScrollToTop = dynamic(() => import('../src/components/ScrollToTop'), { ssr: false });

// Define global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3ECF8E;
    --primary-light: #6EDEA8;
    --primary-dark: #2AAB72;
  }

  /* Modo Claro (por defecto) */
  :root,
  .light {
    --secondary-color: #F9FAFB;
    --text-color: #111827;
    --text-secondary: #374151;
    --text-muted: #6B7280;
    --background-color: #FFFFFF;
    --background-color-rgb: 255, 255, 255;
    --card-background: rgba(249, 250, 251, 0.9);
    --glass-background: rgba(255, 255, 255, 0.7);
    --border-color: rgba(31, 41, 55, 0.1);
    --shadow-color: rgba(0, 0, 0, 0.1);
    --gradient-bg: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    --hero-bg: linear-gradient(135deg, rgba(62, 207, 142, 0.1) 0%, rgba(139, 195, 74, 0.1) 100%);
    
    /* Alternating section backgrounds */
    --section-bg-white: #FFFFFF;
    --section-bg-gray: #F1F5F9;
  }

  /* Modo Oscuro */
  .dark {
    --secondary-color: #1F2937;
    --text-color: #F9FAFB;
    --text-secondary: #9CA3AF;
    --text-muted: #6B7280;
    --background-color: #111827;
    --background-color-rgb: 17, 24, 39;
    --card-background: rgba(31, 41, 55, 0.8);
    --glass-background: rgba(255, 255, 255, 0.1);
    --border-color: rgba(255, 255, 255, 0.1);
    --shadow-color: rgba(0, 0, 0, 0.2);
    --gradient-bg: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    --hero-bg: linear-gradient(135deg, rgba(62, 207, 142, 0.1) 0%, rgba(139, 195, 74, 0.1) 100%);
    
    /* Alternating section backgrounds for dark mode */
    --section-bg-white: #111827;
    --section-bg-gray: #1F2937;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--gradient-bg);
    color: var(--text-color);
    overflow-x: hidden;
    line-height: 1.6;
    transition: all 0.3s ease;
  }
  
  /* Estilo para el contenedor principal cuando el menú móvil está abierto */
  .app-container {
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  /* DEBUG: Forzar visibilidad de app-container en móvil aunque el menú esté abierto */
  @media (max-width: 768px) {
    .app-container.menu-open {
      display: block !important;
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
      position: relative !important;
      z-index: 100 !important;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
`;

const AppContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [key, setKey] = useState(0);
  const { isMenuOpen } = useMobileMenu();
  
  const SSRValue = 0; 

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Only set isLoaded to true on the client side
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
      
      // Reset key on page reload to reset all animations
      const handleBeforeUnload = () => {
        setKey(prevKey => prevKey + 1);
      };
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

  return (
    <>
      <LoadingScreen minimumLoadingTime={2000} />
      <div className={`app-container ${isLoaded ? 'loaded' : ''} ${isMenuOpen ? 'menu-open' : ''}`} key={key}>
        <ClientOnly>
          <ThemeToggle />
          <ScrollToTop />
        </ClientOnly>
        <Header />
        <HeroSection />
        
        <ClientOnly>
          <VideoSection />
        </ClientOnly>
        
        <ClientOnly>
          <TeamSection />
        </ClientOnly>
        
        <ClientOnly>
          <About />
        </ClientOnly>
        
        <ClientOnly>
          <HealthEducation />
        </ClientOnly>
        
        <ClientOnly>
          <Services />
        </ClientOnly>
        
        <ClientOnly>
          <Contact />
        </ClientOnly>
        
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <MobileMenuProvider>
          <AppContent />
        </MobileMenuProvider>
      </ThemeProvider>
    </>
  );
}


