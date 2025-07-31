'use client';

import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.9);
  transform: scale(1.02);
`;

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6.25rem;
  position: relative;
  overflow-x: hidden;
  background: var(--gradient-bg);
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 1rem 4rem;
  position: relative;
  z-index: 1;
  gap: 3rem;
  width: 100%;
  overflow-x: hidden;
`;

export const HeroImageSection = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  margin-left: calc(-50vw + 50%);
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Degradado inferior mejorado que se integra mejor con la página según el modo */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(var(--background-color-rgb), 0.2) 20%,
      rgba(var(--background-color-rgb), 0.5) 40%,
      rgba(var(--background-color-rgb), 0.8) 70%,
      rgba(var(--background-color-rgb), 0.95) 90%,
      var(--background-color) 100%
    );
    z-index: 3;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    height: 70vh;
    margin-left: calc(-50vw + 50%);
    
    &::before {
      height: 100px;
    }
    
    &::after {
      height: 120px;
    }
  }
`;

export const HeroBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(0.5px) brightness(0.8);
  transform: scale(1.05);
`;

export const HeroImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(62, 207, 142, 0.15) 0%,
    rgba(139, 195, 74, 0.1) 30%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0.35) 100%
  );
  z-index: 2;
`;

export const HeroImageContent = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  text-align: center;
  padding: 2rem;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #7DD3AE 0%, #A8E6CF 50%, #C8F7C5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    -webkit-text-stroke: 0.5px #000000;
    line-height: 1.2;
  }
  
  p {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
    
    h1 {
      margin-bottom: 1rem;
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: clamp(3.5rem, 8vw, 6rem);
    font-weight: 600;
    background: linear-gradient(92deg, var(--primary-color) 0%, var(--primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    line-height: 1.1;
  }

  p {
    max-width: 41.75rem;
    color: var(--text-secondary);
    font-size: clamp(1.25rem, 4vw, 1.5rem);
    font-weight: 400;
    margin: 0 auto;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.05) 0%, rgba(25, 25, 25, 0) 70%);
  z-index: 0;
`;

export const FloatingOrb = styled.div<{ top?: string; left?: string; right?: string; bottom?: string; size?: string; delay?: string; }>`
  position: absolute;
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  border-radius: 50%;
  background: radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0) 70%);
  filter: blur(50px);
  opacity: 0.6;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  animation: float 15s infinite ease-in-out;
  animation-delay: ${props => props.delay || '0s'};

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.05);
    }
  }
`;

export const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  margin-top: 2rem;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;
