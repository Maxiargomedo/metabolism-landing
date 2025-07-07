'use client';

import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../src/components/UI/Header';
import HeroSection from '../src/components/UI/HeroSection';
import About from '../src/components/UI/About';
import Services from '../src/components/UI/Services';
import Contact from '../src/components/UI/Contact';
import Footer from '../src/components/UI/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import LoadingScreen from '../src/components/LoadingScreen';
import { LocaleRouteNormalizer } from 'next/dist/server/normalizers/locale-route-normalizer';
import { lightningCssTransformStyleAttribute } from 'next/dist/build/swc/generated-native';

// Define global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3ECF8E;
    --primary-light: #6EDEA8;
    --primary-dark: #2AAB72;
    --secondary-color: #1F2937;
    --text-color: #F9FAFB;
    --background-color: #111827;
    --card-background: rgba(31, 41, 55, 0.8);
    --glass-background: rgba(255, 255, 255, 0.1);
    --border-color: rgba(255, 255, 255, 0.1);
    --shadow-color: rgba(0, 0, 0, 0.2);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    overflow-x: hidden;
    line-height: 1.6;
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

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [key, setKey] = useState(0); // Key para forzar el re-renderizado y resetear animaciones

  // Use a static value for SSR that doesn't change on the client
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
      <GlobalStyle />
      <LoadingScreen minimumLoadingTime={2000} />
      <ScrollToTop />
      <div className={`app-container ${isLoaded ? 'loaded' : ''}`} key={key}>
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}


