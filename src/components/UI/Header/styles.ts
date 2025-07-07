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
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 50;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(20, 20, 20, 0.9);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    
    &.active {
      transform: translateX(0);
    }
  }
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
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

export const BurgerMenu = styled.div`
  display: none;
  position: relative;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
  }
  
  div {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    z-index: 60;
  }
`;
