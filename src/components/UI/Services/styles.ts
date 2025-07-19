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
  background: var(--secondary-color);
  transition: background-color 0.3s ease;
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

export const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 20%, rgba(76, 175, 80, 0.1) 0%, transparent 30%),
              radial-gradient(circle at 80% 80%, rgba(139, 195, 74, 0.1) 0%, transparent 30%);
  opacity: 0.6;
  z-index: 0;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

// Nuevos componentes para el carrusel
export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  margin: 2rem 0;
  
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
`;

export const CarouselCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 100%;
  height: 500px;
  background: rgba(31, 41, 55, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(76, 175, 80, 0.1);
  overflow: hidden;
  
  .image-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
    
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, transparent, rgba(31, 41, 55, 0.7));
    }
  }
  
  .content {
    flex: 1;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--text-color);
      background: linear-gradient(92deg, var(--primary-color) 0%, var(--primary-light) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    p {
      font-size: 1.125rem;
      line-height: 1.6;
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }
    
    .service-button {
      align-self: flex-start;
      padding: 0.75rem 2rem;
      background: linear-gradient(92deg, rgba(var(--primary-color-rgb, 76, 175, 80), 0.8) 0%, rgba(var(--primary-light-rgb, 139, 195, 74), 0.8) 100%);
      border-radius: 2rem;
      color: #fff;
      font-weight: 500;
      transition: all 0.3s;
      border: none;
      cursor: pointer;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(var(--primary-color-rgb, 76, 175, 80), 0.2);
        background: linear-gradient(92deg, var(--primary-color) 0%, var(--primary-light) 100%);
      }
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    
    .image-container {
      height: 250px;
      
      .image-overlay {
        background: linear-gradient(to top, rgba(31, 41, 55, 0.7), transparent);
      }
    }
    
    .content {
      padding: 2rem;
    }
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  padding: 0 2rem;
  z-index: 100;
  pointer-events: none;
  
  * {
    pointer-events: auto;
  }
`;

export const CarouselButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--card-background);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 101;
  pointer-events: auto;
  
  &:hover {
    background: rgba(var(--primary-color-rgb, 76, 175, 80), 0.4);
    transform: scale(1.1);
    border-color: rgba(var(--primary-color-rgb, 76, 175, 80), 0.5);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
  
  svg {
    pointer-events: none;
  }
`;

export const CarouselProgress = styled.div`
  display: flex;
  gap: 0.5rem;
  z-index: 101;
  pointer-events: auto;
  
  .progress-dot {
    width: 12px;
    height: 12px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
    z-index: 102;
    pointer-events: auto;
    
    span {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transition: all 0.3s;
      pointer-events: none;
    }
    
    &:hover span {
      background: rgba(var(--primary-color-rgb, 76, 175, 80), 0.6);
      transform: scale(1.2);
    }
    
    &.active span {
      background: var(--primary-color);
      transform: scale(1.3);
    }
  }
`;

// This component is for pricing card features that might be used elsewhere
export const FeatureCard = styled.div`
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(var(--primary-color-rgb, 76, 175, 80), 0.1);
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-top: auto;
  }
  
  .features {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
    
    .feature {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-muted);
      
      svg {
        color: var(--primary-color);
        flex-shrink: 0;
      }
    }
  }
`;

// Nuevos componentes para el popup modal
export const PopupModal = styled(motion.div)`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 999999 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
  isolation: isolate;
  transform: translateZ(0);
`;

export const PopupContent = styled(motion.div)`
  background: rgba(31, 41, 55, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(76, 175, 80, 0.2);
  border-radius: 1.5rem;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  z-index: 999999;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  
  .popup-header-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.7);
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(31, 41, 55, 0.4), rgba(31, 41, 55, 0.95));
      display: flex;
      align-items: center;
      justify-content: center;
      
      h2 {
        color: white;
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        padding: 0 2rem;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        background: linear-gradient(92deg, var(--primary-color) 0%, var(--primary-light) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }
`;

export const PopupCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--card-background);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 9999999;
  
  &:hover {
    background: rgba(var(--primary-color-rgb, 76, 175, 80), 0.3);
    transform: scale(1.1);
  }
`;

export const PopupCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(90vh - 200px); /* Adjusted for header image */
  max-height: 600px;
  
  .popup-carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
  }
  
  .popup-progress {
    display: flex;
    gap: 0.5rem;
    
    .progress-dot {
      width: 12px;
      height: 12px;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      position: relative;
      
      span {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transition: all 0.3s;
      }
      
      &.active span {
        background: var(--primary-color);
        transform: scale(1.5);
      }
      
      &:hover span {
        background: rgba(var(--primary-color-rgb, 76, 175, 80), 0.7);
      }
    }
  }
`;

export const PopupCarouselSlide = styled.div`
  min-width: 100%;
  height: 100%;
  padding: 2.5rem 3rem;
  overflow-y: auto;
  
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    background: linear-gradient(92deg, var(--primary-color) 0%, var(--primary-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
  }
  
  .content-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    p {
      font-size: 1.125rem;
      line-height: 1.8;
      color: var(--text-secondary);
    }
  }
  
  &.active {
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0.5; }
    to { opacity: 1; }
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    h3 {
      font-size: 1.35rem;
    }
  }
`;

export const PopupCarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  padding: 0 2rem;
  z-index: 10;
`;
