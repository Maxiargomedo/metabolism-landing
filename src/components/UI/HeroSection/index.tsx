'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Wrapper, 
  Inner, 
  HeroTextContainer, 
  HeroImageSection,
  HeroBackgroundImage,
  HeroImageOverlay,
  HeroImageContent,
  BackgroundGradient, 
  FloatingOrb,
  CtaContainer,
  StatsContainer,
  StatBox
} from './styles';
import { Pill, MaskText, GetStartedButton, Button } from '@/src/components';
import ImageCollage from './ImageCollage';

// Frases para el hero con contenido de nutrición y metabolismo
const heroTitle = [
  "Optimiza", "tu", "metabolismo", "para", "una", "vida", "saludable"
];

const heroParagraph = [
  "Descubre", "cómo", "la", "nutrición", "personalizada", "puede", "transformar", 
  "tu", "salud", "y", "bienestar", "con", "MetaboLife."
];

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => {
    setIsMounted(true);
    
    // Reset animation key when component mounts
    setAnimationKey(prevKey => prevKey + 1);
    
    // Clean up function
    return () => {
      setIsMounted(false);
    };
  }, []);
  
  // Configuración de animaciones optimizada
  const animationConfig = shouldReduceMotion 
    ? { duration: 0 }
    : { duration: 0.5, ease: "easeOut" };
  
  return (
    <Wrapper id="hero">
      <BackgroundGradient />
      <FloatingOrb top="15%" left="10%" size="250px" delay="0s" />
      <FloatingOrb top="60%" right="15%" size="300px" delay="2s" />
      <FloatingOrb bottom="10%" left="20%" size="200px" delay="4s" />
      
      <Inner>
        {/* Sección con collage dinámico de imágenes */}
        <HeroImageSection>
          <ImageCollage isActive={true} />
          <HeroImageOverlay />
          <HeroImageContent>
            <motion.h1
              key={`hero-title-${animationKey}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Nutricion y habitos Sanos
              Basado en Evidencia Científica
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transforma tu vida con una alimentación
              y habidos adecuados para recuperar tu saluda
            </motion.p>
          </HeroImageContent>
        </HeroImageSection>
        
        <HeroTextContainer>
          <CtaContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-row gap-6 justify-center items-center"
            >
              <GetStartedButton 
                label="Comenzar ahora" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              />
              <Button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
              >
                Saber más
              </Button>
            </motion.div>
          </CtaContainer>
        </HeroTextContainer>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
