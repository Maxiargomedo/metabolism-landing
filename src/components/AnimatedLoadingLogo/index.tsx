'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedLogoProps {
  onAnimationComplete?: () => void;
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const CircleContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const MainText = styled(motion.h1)`
  font-family: 'Arial', sans-serif;
  font-weight: 300;
  margin: 0;
  letter-spacing: -0.02em;
  color: var(--text-color);
  font-size: 4.5rem;
  
  .life {
    color: var(--text-color);
    font-weight: 400;
  }
  
  sup {
    font-size: 0.6em;
    font-weight: 400;
    top: -0.5em;
    color: var(--text-color);
  }
`;

const Tagline = styled(motion.p)`
  font-family: 'Arial', sans-serif;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.15em;
  color: var(--primary-color);
  font-size: 1.6rem;
`;

const HealthParticle = styled(motion.div)`
  position: absolute;
  font-size: 24px;
  user-select: none;
`;

const AnimatedLoadingLogo: React.FC<AnimatedLogoProps> = ({ onAnimationComplete }) => {
  // Partículas relacionadas con salud y nutrición
  const healthIcons = ['🌱', '💚', '🥗', '💪', '✨', '🔬', '🍃', '⚡'];

  useEffect(() => {
    // Completar animación después de 2 segundos
    const timer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <LogoContainer>
      <CircleContainer>
        {/* Partículas de salud girando alrededor */}
        {healthIcons.map((icon, index) => (
          <HealthParticle
            key={index}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              x: Math.cos((index * Math.PI * 2) / healthIcons.length) * 120,
              y: Math.sin((index * Math.PI * 2) / healthIcons.length) * 120,
              rotate: 360
            }}
            transition={{ 
              duration: 2,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          >
            {icon}
          </HealthParticle>
        ))}

        {/* SVG del círculo principal */}
        <motion.svg
          width="150"
          height="150"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <defs>
            <radialGradient
              id="loading-gradient"
              cx="50%"
              cy="30%"
              r="70%"
            >
              <stop offset="0%" stopColor="#A8E6A3" />
              <stop offset="30%" stopColor="#81C784" />
              <stop offset="70%" stopColor="#4CAF50" />
              <stop offset="100%" stopColor="#2E7D32" />
            </radialGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Círculo principal que aparece rápidamente */}
          <motion.circle
            cx="100"
            cy="100"
            r="98"
            fill="url(#loading-gradient)"
            stroke="none"
            filter="url(#glow)"
            initial={{ 
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              scale: [0, 1.1, 1],
              opacity: 1
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut",
              times: [0, 0.8, 1]
            }}
          />
          
          {/* Onda de energía que se expande */}
          <motion.circle
            cx="100"
            cy="100"
            r="98"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="2"
            initial={{ 
              scale: 0,
              opacity: 1
            }}
            animate={{ 
              scale: [0, 2],
              opacity: [1, 0]
            }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              ease: "easeOut"
            }}
          />
          
          {/* Segunda onda de energía */}
          <motion.circle
            cx="100"
            cy="100"
            r="98"
            fill="none"
            stroke="rgba(76, 175, 80, 0.3)"
            strokeWidth="3"
            initial={{ 
              scale: 0,
              opacity: 1
            }}
            animate={{ 
              scale: [0, 1.8],
              opacity: [1, 0]
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut"
            }}
          />
        </motion.svg>
      </CircleContainer>

      {/* Texto del logo que aparece rápidamente */}
      <TextContainer>
        <MainText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          metabo<span className="life">life</span><sup>®</sup>
        </MainText>
        
        <Tagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          Activa tu Metabolismo.
        </Tagline>
      </TextContainer>
    </LogoContainer>
  );
};

export default AnimatedLoadingLogo;
