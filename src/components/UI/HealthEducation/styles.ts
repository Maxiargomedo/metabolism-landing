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
  background: var(--background-color);
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
  z-index: 0;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto 2rem auto;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 2px solid ${props => props.active ? '#4CAF50' : 'var(--border-color)'};
  background: ${props => props.active ? 'rgba(76, 175, 80, 0.1)' : 'var(--card-background)'};
  color: ${props => props.active ? '#4CAF50' : 'var(--text-color)'};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
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
  
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1.25rem;
  }
`;

export const TabContent = styled(motion.div)`
  width: 100%;
`;

export const ContentCard = styled.div`
  background: var(--glass-background);
  backdrop-filter: blur(15px);
  border: 1px solid var(--border-color);
  border-radius: 1.5rem;
  padding: 2.5rem;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 0;
  }
`;

export const ContentTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #4CAF50, #8BC34A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const ContentText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

export const InfoItem = styled.li`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 0.75rem;
  padding-left: 0.5rem;
  
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
`;

export const StatCard = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.1));
  border: 1px solid rgba(76, 175, 80, 0.2);
  text-align: center;
  
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.75rem;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0.25rem 0;
    
    strong {
      color: #4CAF50;
      font-weight: 600;
    }
  }
`;
