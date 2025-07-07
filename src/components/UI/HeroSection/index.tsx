'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrapper, 
  Inner, 
  HeroTextContainer, 
  BackgroundGradient, 
  FloatingOrb,
  CtaContainer,
  StatsContainer,
  StatBox
} from './styles';
import { Pill, MaskText, GetStartedButton, Button } from '@/src/components';

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
  
  useEffect(() => {
    setIsMounted(true);
    
    // Reset animation key when component mounts
    setAnimationKey(prevKey => prevKey + 1);
    
    // Clean up function
    return () => {
      setIsMounted(false);
    };
  }, []);
  
  return (
    <Wrapper id="hero">
      <BackgroundGradient />
      <FloatingOrb top="15%" left="10%" size="250px" delay="0s" />
      <FloatingOrb top="60%" right="15%" size="300px" delay="2s" />
      <FloatingOrb bottom="10%" left="20%" size="200px" delay="4s" />
      
      <Inner>
        <HeroTextContainer>
          <motion.h1
            key={`hero-title-${animationKey}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-lime-300 text-transparent bg-clip-text mb-8"
          >
            Nutrición científica basada en evidencias
          </motion.h1>
          
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
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 relative w-full max-w-3xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <motion.img 
              src="/img/Que-es-la-nutricion-Tipos-y-tendencias-actuales1.jpg" 
              alt="Nutrición científica" 
              className="w-full h-auto object-cover"
              animate={{ 
                scale: [1, 1.05, 1],
                filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <motion.div 
              className="absolute bottom-8 left-0 right-0 text-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <p className="text-xl font-semibold text-white">Transforma tu vida con MetaboLife</p>
            </motion.div>
          </div>
        </motion.div>
        
        <StatsContainer>
          {[
            { number: "94%", label: "Mejora metabólica" },
            { number: "1,200+", label: "Pacientes felices" },
            { number: "15+", label: "Años de experiencia" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
            >
              <StatBox>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatBox>
            </motion.div>
          ))}
        </StatsContainer>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
