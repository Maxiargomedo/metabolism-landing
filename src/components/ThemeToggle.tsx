'use client';

import { styled } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggleContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 80px;
  height: 40px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 70px;
    height: 35px;
  }
`;

const ToggleBackground = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SkyGradient = styled(motion.div)<{ isDark: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.isDark 
    ? `linear-gradient(135deg, #1e293b 0%, #334155 100%)`
    : `linear-gradient(135deg, #87ceeb 0%, #ffd700 100%)`
  };
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
`;

const SunMoon = styled(motion.div)<{ isDark: boolean }>`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${props => props.isDark 
    ? `#f1f5f9`
    : `#fbbf24`
  };
  top: 50%;
  transform: translateY(-50%);
  box-shadow: ${props => props.isDark 
    ? `0 0 8px rgba(241, 245, 249, 0.4)`
    : `0 0 12px rgba(251, 191, 36, 0.6)`
  };
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
    
    /* Ajustar posiciones para móvil */
    &[data-position="light"] {
      left: 6px !important;
    }
    
    &[data-position="dark"] {
      left: 50px !important;
    }
  }
`;

const Stars = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Star = styled(motion.div)<{ size: number; top: number; left: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #f1f5f9;
  border-radius: 50%;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  box-shadow: 0 0 4px rgba(241, 245, 249, 0.6);
`;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const stars = [
    { size: 1.5, top: 25, left: 20 },
    { size: 1, top: 45, left: 75 },
    { size: 1.5, top: 35, left: 50 },
  ];

  return (
    <ThemeToggleContainer>
      <ToggleBackground
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Fondo del cielo con gradiente */}
        <SkyGradient isDark={isDark} />

        {/* Estrellas (solo en modo oscuro) */}
        <AnimatePresence>
          {isDark && (
            <Stars
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {stars.map((star, index) => (
                <Star
                  key={index}
                  size={star.size}
                  top={star.top}
                  left={star.left}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: [0.4, 1, 0.4],
                    transition: {
                      scale: { duration: 0.3, delay: 0.4 + index * 0.1 },
                      opacity: { duration: 2, repeat: Infinity, delay: index * 0.2 }
                    }
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                />
              ))}
            </Stars>
          )}
        </AnimatePresence>

        {/* Sol/Luna */}
        <SunMoon
          isDark={isDark}
          data-position={isDark ? 'dark' : 'light'}
          animate={{
            left: isDark ? '56px' : '8px', // Invertimos: claro a la izquierda, oscuro a la derecha
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.8
            }
          }}
        />
      </ToggleBackground>
    </ThemeToggleContainer>
  );
}
