'use client';

import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../src/components/UI/Header';
import HeroSection from '../src/components/UI/HeroSection';
import About from '../src/components/UI/About';
import Services from '../src/components/UI/Services';
import Contact from '../src/components/UI/Contact';
import Footer from '../src/components/UI/Footer';

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

  // Use a static value for SSR that doesn't change on the client
  const SSRValue = 0; 

  useEffect(() => {
    // Only set isLoaded to true on the client side
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
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
