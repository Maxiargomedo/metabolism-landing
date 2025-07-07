'use client';

import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6.25rem;
  position: relative;
  overflow: hidden;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 1rem;
  position: relative;
  z-index: 1;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: clamp(3.5rem, 8vw, 6rem);
    font-weight: 600;
    background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    line-height: 1.1;
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
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
    color: #bdbdbd;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;
