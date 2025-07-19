'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

interface AnimatedLinkProps {
  title: string;
  onClick?: () => void;
  isActive?: boolean;
  isHeaderScrolled?: boolean;
}

const LinkWrapper = styled.a<{ $isActive: boolean; $isHeaderScrolled: boolean }>`
  position: relative;
  display: inline-block;
  color: ${props => {
    if (props.$isHeaderScrolled) {
      return props.$isActive ? '#ffffff !important' : 'rgba(255, 255, 255, 0.9) !important';
    }
    return props.$isActive ? 'var(--primary-color)' : 'var(--text-color)';
  }};
  font-size: 1rem;
  font-weight: ${props => props.$isActive ? '500' : '400'};
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  z-index: 1;

  &:hover {
    color: ${props => props.$isHeaderScrolled ? '#ffffff !important' : 'var(--primary-color)'};
  }
`;

const LinkIndicator = styled(motion.div)<{ $isHeaderScrolled: boolean }>`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background-color: ${props => props.$isHeaderScrolled ? 'rgba(255, 255, 255, 0.8)' : 'var(--primary-color)'};
`;

const ActiveBackground = styled(motion.div)<{ $isHeaderScrolled: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => {
    if (props.$isHeaderScrolled) {
      return `linear-gradient(
        to bottom,
        transparent 0%,
        rgba(255, 255, 255, 0.05) 20%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.15) 80%,
        rgba(255, 255, 255, 0.2) 100%
      )`;
    }
    return `linear-gradient(
      to bottom,
      transparent 0%,
      rgba(62, 207, 142, 0.05) 20%,
      rgba(62, 207, 142, 0.15) 50%,
      rgba(62, 207, 142, 0.25) 80%,
      rgba(62, 207, 142, 0.35) 100%
    )`;
  }};
  border-radius: 8px;
  border: 1px solid ${props => props.$isHeaderScrolled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(62, 207, 142, 0.4)'};
  box-shadow: ${props => {
    if (props.$isHeaderScrolled) {
      return `
        0 2px 10px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1)
      `;
    }
    return `
      0 2px 10px rgba(62, 207, 142, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `;
  }};
  z-index: -1;
  
  /* Efecto de pulso sutil */
  animation: ${props => props.$isHeaderScrolled ? 'activeGlowWhite' : 'activeGlow'} 2s ease-in-out infinite alternate;
  
  @keyframes activeGlow {
    0% {
      box-shadow: 
        0 2px 10px rgba(62, 207, 142, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    100% {
      box-shadow: 
        0 2px 15px rgba(62, 207, 142, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
  }
  
  @keyframes activeGlowWhite {
    0% {
      box-shadow: 
        0 2px 10px rgba(255, 255, 255, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    100% {
      box-shadow: 
        0 2px 15px rgba(255, 255, 255, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
  }
`;

export const AnimatedLink = ({ title, onClick, isActive = false, isHeaderScrolled = false }: AnimatedLinkProps) => {
  return (
    <LinkWrapper $isActive={isActive} $isHeaderScrolled={isHeaderScrolled} onClick={onClick}>
      {title}
      
      {/* Fondo activo con degradado */}
      {isActive && (
        <ActiveBackground
          $isHeaderScrolled={isHeaderScrolled}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}
      
      {/* Indicador de hover */}
      {!isActive && (
        <LinkIndicator
          $isHeaderScrolled={isHeaderScrolled}
          initial={{ scaleX: 0, originX: 0.5 }}
          whileHover={{ scaleX: 1, originX: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </LinkWrapper>
  );
};

export default AnimatedLink;
