'use client';

import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useEffect } from 'react';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
    align-items: flex-start;
  }
`;

const ModalContainer = styled(motion.div)`
  background: var(--card-background);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  margin: 2rem auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    margin: 1rem auto;
    max-height: 95vh;
    border-radius: 0.75rem;
  }
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(76, 175, 80, 0.3);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(76, 175, 80, 0.5);
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  background: var(--card-background);
  backdrop-filter: blur(20px);
  padding: 1.5rem 2rem 1rem;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem 0.75rem;
  }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  color: #4CAF50;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(76, 175, 80, 0.2);
    border-color: rgba(76, 175, 80, 0.5);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const Content = styled.div`
  padding: 1.5rem 2rem 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #4CAF50;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--text-color);
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
  }
  
  p, li {
    line-height: 1.6;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  ul {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #4CAF50;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
`;

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <ModalContainer
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
          >
            <Header>
              <Title>{title}</Title>
              <CloseButton onClick={onClose} aria-label="Cerrar">
                ×
              </CloseButton>
            </Header>
            
            <Content>
              {children}
              <LastUpdated>
                Última actualización: Agosto 2025
              </LastUpdated>
            </Content>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;
export { Section };
