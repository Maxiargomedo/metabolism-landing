'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 40;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div<{ $isHidden?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 50;
  
  @media (max-width: 768px) {
    opacity: ${props => props.$isHidden ? '0' : '1'};
    visibility: ${props => props.$isHidden ? 'hidden' : 'visible'};
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  /* Estilos para desktop */
  @media (min-width: 769px) {
    opacity: 1;
    visibility: visible;
    position: relative;
    z-index: 10;
    
    &.mobile-nav {
      display: none !important;
    }
  }
  
  @media (max-width: 768px) {
    display: none;
    
    &.mobile-nav {
      display: flex !important;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--background-color);
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 2.2rem;
      padding: 10rem 1rem 2rem 1rem;
      transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 45;
      
      /* Mejora visual para el contenido */
      a {
        font-size: 1.35rem;
        font-weight: 500;
        padding: 0.8rem 1.2rem;
        width: 100%;
        text-align: center;
        border-radius: 12px;
        transition: all 0.3s ease;
        white-space: nowrap;
        margin: 0 auto;
        display: block;
        
        &:hover {
          background: var(--glass-background);
          transform: translateY(-2px);
        }
      }
    }
  }
`;

export const MobileMenuLogo = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    top: 2rem;
    left: 2rem;
    z-index: 50;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  /* Asegurar visibilidad en desktop */
  @media (min-width: 769px) {
    opacity: 1;
    visibility: visible;
    position: relative;
    z-index: 10;
  }
  
  @media (max-width: 768px) {
    display: none;
    
    &.active {
      display: flex;
      position: fixed;
      bottom: 5rem;
      left: 0;
      width: 100%;
      justify-content: center;
    }
  }
`;

export const BurgerMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: relative;
  cursor: pointer;
  z-index: 50;
  width: 30px;
  height: 30px;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BurgerLine = styled.div<{ $isOpen: boolean; $isScrolled?: boolean }>`
  width: 25px;
  height: 6px;
  background-color: ${props => props.$isOpen ? '#111 !important' : 'var(--text-color)'};

  
  border: ${props => props.$isOpen ? '1.5px solid #000' : 'none'};
  
  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.$isOpen ? '#fff !important' : 'var(--text-color)'};
    border: ${props => props.$isOpen ? '1.5px solid #000' : 'none'};
  }
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  
  &:nth-child(1) {
    transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'translateY(-8px)'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.$isOpen ? '0' : '1'};
    transform: translateY(0);
  }
  
  &:nth-child(3) {
    transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'translateY(8px)'};
  }
`;

export const PageOverlay = styled.div<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  background-color: ${props => {
    if (props.$isOpen) {
      return 'var(--burger-x-color)';
    }
    return props.$isScrolled ? '#ffffff' : 'var(--text-color)';
  }};
    pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
  }
`;
