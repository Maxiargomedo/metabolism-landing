'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: var(--section-padding-y-mobile) 0;
  background: var(--section-bg-white);
  
  @media (min-width: 768px) {
    padding: var(--section-padding-y) 0;
  }
  
  @media (min-width: 1441px) {
    padding: 6rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  z-index: 1;
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
  
  @media (min-width: 1441px) {
    max-width: 1440px;
    padding: 0 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  padding: 0 1rem;
  
  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: clamp(0.95rem, 2.8vw, 1.2rem);
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: -1rem; /* Reducido para que aparezca más arriba */
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 600;
    background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 1.125rem;
    line-height: 1.6;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(76, 175, 80, 0.3);
  }
  
  h3 {
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    font-weight: 500;
    color: var(--text-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-secondary);
    font-size: clamp(0.9rem, 2.5vw, 1rem);
    line-height: 1.5;
  }
  
  .icon {
    width: clamp(40px, 8vw, 48px);
    height: clamp(40px, 8vw, 48px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(76, 175, 80, 0.1);
    color: #4CAF50;
    font-size: clamp(1.2rem, 3vw, 1.5rem);
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.75rem;
  }
`;

export const ResponsiveCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1.25rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: radial-gradient(circle at 70% 50%, rgba(76, 175, 80, 0.03) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: 0;
`;
