'use client';

import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  background: #f8fafc; /* Color sólido en lugar de variable */
  z-index: 10;
  isolation: isolate;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
    min-height: auto;
    overflow: visible;
    background: #ffffff; /* Fondo blanco sólido para móviles */
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
    position: relative;
    z-index: 10;
    background: #ffffff !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(76, 175, 80, 0.1) 0%,
    rgba(76, 175, 80, 0.05) 40%,
    transparent 70%
  );
  z-index: -1; /* Asegurar que esté detrás del contenido */
  pointer-events: none; /* No interferir con interacciones */
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 20; /* Asegurar visibilidad por encima del background */
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    z-index: 20;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.75rem;
    position: relative;
    z-index: 20;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c; /* Color sólido en lugar de variable */
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 30;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    display: block;
    visibility: visible;
    opacity: 1;
    color: #4CAF50 !important; /* Color sólido para móviles */
    background: none !important;
    -webkit-text-fill-color: #4CAF50 !important;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    color: #4CAF50 !important;
    -webkit-text-fill-color: #4CAF50 !important;
    text-shadow: none;
    position: relative;
    z-index: 30;
    background: none !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568; /* Color sólido en lugar de variable */
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  position: relative;
  z-index: 30;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    display: block;
    visibility: visible;
    opacity: 1;
    color: #2d3748 !important;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    color: #2d3748 !important;
    position: relative;
    z-index: 30;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 30;
  
  @media (max-width: 968px) {
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto 2rem auto;
    gap: 0.75rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 350px;
    margin: 0 auto 2rem auto;
    display: flex;
    visibility: visible;
    opacity: 1;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    gap: 0.5rem;
    position: relative;
    z-index: 30;
  }
`;

export const TabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 2px solid ${props => props.active ? '#4CAF50' : '#e2e8f0'};
  background: ${props => props.active ? 'rgba(76, 175, 80, 0.1)' : '#ffffff'};
  color: ${props => props.active ? '#4CAF50' : '#2d3748'};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 30;
  
  .icon {
    font-size: 1.5rem;
  }
  
  .label {
    font-weight: 600;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.2);
    border-color: #4CAF50;
  }
  
  @media (max-width: 968px) {
    justify-content: center;
    padding: 1.25rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1.25rem;
    display: flex;
    visibility: visible;
    opacity: 1;
    background: #ffffff !important;
    color: ${props => props.active ? '#4CAF50' : '#2d3748'} !important;
    border: 2px solid ${props => props.active ? '#4CAF50' : '#cbd5e0'} !important;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.9rem;
    position: relative;
    z-index: 30;
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    background: #ffffff !important;
    
    .icon {
      font-size: 1.25rem;
    }
  }
`;

export const TabContent = styled(motion.div)`
  width: 100%;
  position: relative;
  z-index: 30;
  
  @media (max-width: 768px) {
    display: block;
    visibility: visible;
    opacity: 1;
  }
  
  @media (max-width: 480px) {
    position: relative;
    z-index: 30;
  }
`;

export const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border: 1px solid #e2e8f0;
  border-radius: 1.5rem;
  padding: 2.5rem;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 30;
  
  @media (max-width: 968px) {
    padding: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0;
    border-radius: 1rem;
    display: block;
    visibility: visible;
    opacity: 1;
    background: #ffffff !important;
    border: 1px solid #cbd5e0 !important;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 0.75rem;
    position: relative;
    z-index: 30;
    background: #ffffff !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    border: 1px solid #cbd5e0 !important;
  }
`;

export const ContentTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 30;
  
  @media (max-width: 968px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
    display: block;
    visibility: visible;
    opacity: 1;
    color: #4CAF50 !important;
    background: none !important;
    -webkit-text-fill-color: #4CAF50 !important;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #4CAF50 !important;
    -webkit-text-fill-color: #4CAF50 !important;
    position: relative;
    z-index: 30;
    background: none !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
`;

export const ContentText = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1rem;
  position: relative;
  z-index: 30;
  
  @media (max-width: 768px) {
    display: block;
    visibility: visible;
    opacity: 1;
    color: #2d3748 !important;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #2d3748 !important;
    position: relative;
    z-index: 30;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  position: relative;
  z-index: 30;
  
  @media (max-width: 768px) {
    display: block;
    visibility: visible;
    opacity: 1;
  }
  
  @media (max-width: 480px) {
    position: relative;
    z-index: 30;
  }
`;

export const InfoItem = styled.li`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 0.75rem;
  padding-left: 0.5rem;
  position: relative;
  z-index: 30;
  
  @media (max-width: 768px) {
    display: list-item;
    visibility: visible;
    opacity: 1;
    color: #2d3748 !important;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 0.6rem;
    color: #2d3748 !important;
    position: relative;
    z-index: 30;
    display: list-item !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  &::before {
    content: '✓';
    color: #4CAF50;
    font-weight: bold;
    margin-right: 0.75rem;
  }
`;

export const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

export const StatCard = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.1));
  border: 1px solid rgba(76, 175, 80, 0.2);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
  
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.75rem;
    
    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #2d3748 !important;
    }
  }
  
  p {
    font-size: 0.9rem;
    color: #4a5568;
    margin: 0.25rem 0;
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
      color: #4a5568 !important;
    }
    
    strong {
      color: #4CAF50;
      font-weight: 600;
    }
  }
`;
