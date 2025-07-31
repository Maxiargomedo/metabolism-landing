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
  background: var(--section-bg-white);
  transition: background-color 0.3s ease;
  
  @media (max-width: 1024px) {
    padding: 4rem 0;
    min-height: auto;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
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
  width: 100%;
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0 1.25rem;
  }
  
  @media (min-width: 1441px) {
    max-width: 1440px;
    padding: 0 2rem;
  }
  }
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
  
  @media (max-width: 1024px) {
    font-size: 2.75rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
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
  
  @media (max-width: 1024px) {
    font-size: 1.15rem;
    margin-bottom: 2.5rem;
    max-width: 550px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 100%;
    padding: 0 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
    padding: 0 0.5rem;
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
  
  @media (max-width: 1024px) {
    margin: 1.5rem 0;
    border-radius: 1rem;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0 0 0; /* Sin margen inferior porque los controles van debajo */
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 480px) {
    margin: 1rem 0 0 0; /* Sin margen inferior porque los controles van debajo */
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
  
  @media (max-width: 1024px) {
    height: 450px;
    
    .content {
      padding: 2.5rem;
      
      h3 {
        font-size: 1.75rem;
        margin-bottom: 1.25rem;
      }
      
      p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }
      
      .service-button {
        padding: 0.625rem 1.5rem;
        font-size: 0.9rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 400px;
    
    .image-container {
      height: 200px;
      flex: none;
      
      .image-overlay {
        background: linear-gradient(to top, rgba(31, 41, 55, 0.8), transparent);
      }
    }
    
    .content {
      padding: 1.5rem;
      flex: 1;
      
      h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-align: center;
      }
      
      p {
        font-size: 0.95rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        text-align: center;
      }
      
      .service-button {
        align-self: center;
        padding: 0.625rem 1.5rem;
        font-size: 0.9rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    .image-container {
      height: 180px;
    }
    
    .content {
      padding: 1.25rem;
      
      h3 {
        font-size: 1.25rem;
      }
      
      p {
        font-size: 0.9rem;
      }
      
      .service-button {
        padding: 0.5rem 1.25rem;
        font-size: 0.85rem;
      }
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
  
  @media (max-width: 1024px) {
    bottom: 1.25rem;
    padding: 0 1.5rem;
  }
  
  /* Ventana pequeña del navegador - controles debajo del carrusel */
  @media (max-width: 768px) and (min-width: 481px) {
    position: static;
    bottom: auto;
    left: auto;
    right: auto;
    padding: 1.5rem 1rem 0 1rem;
    margin-top: 1rem;
    justify-content: center;
    gap: 2rem;
    background: transparent;
    
    /* Los botones se mantienen visibles y se posicionan al lado de los puntos */
    .carousel-buttons {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
  
  /* Teléfonos - solo puntos debajo del carrusel */
  @media (max-width: 480px) {
    position: static;
    bottom: auto;
    left: auto;
    right: auto;
    padding: 1rem 0.75rem 0 0.75rem;
    margin-top: 0.75rem;
    justify-content: center;
    background: transparent;
    
    /* Ocultar los botones de flecha en dispositivos táctiles */
    .carousel-buttons {
      display: none;
    }
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
  
  @media (max-width: 1024px) {
    width: 44px;
    height: 44px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  /* Ventana pequeña del navegador - botones más pequeños pero visibles */
  @media (max-width: 768px) and (min-width: 481px) {
    width: 36px;
    height: 36px;
    position: static;
    
    svg {
      width: 16px;
      height: 16px;
    }
    
    &.prev, &.next {
      left: auto;
      right: auto;
    }
  }
  
  /* Teléfonos - los botones están ocultos por el contenedor padre */
  @media (max-width: 480px) {
    display: none;
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
  
  @media (max-width: 1024px) {
    gap: 0.375rem;
    
    .progress-dot {
      width: 10px;
      height: 10px;
    }
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;
    
    .progress-dot {
      width: 12px;
      height: 12px;
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.375rem;
    
    .progress-dot {
      width: 10px;
      height: 10px;
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
  
  @media (max-width: 1024px) {
    padding: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    align-items: flex-start;
    padding-top: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem;
    padding-top: 1.5rem;
  }
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
  
  @media (max-width: 1024px) {
    max-width: 800px;
    border-radius: 1.25rem;
    
    .popup-header-image {
      height: 180px;
      
      .overlay h2 {
        font-size: 2.25rem;
        padding: 0 1.5rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 95vh;
    border-radius: 1rem;
    
    .popup-header-image {
      height: 150px;
      
      .overlay h2 {
        font-size: 1.75rem;
        padding: 0 1rem;
      }
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 0.75rem;
    
    .popup-header-image {
      height: 120px;
      
      .overlay h2 {
        font-size: 1.5rem;
        padding: 0 0.75rem;
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
  
  @media (max-width: 1024px) {
    width: 44px;
    height: 44px;
    top: 0.75rem;
    right: 0.75rem;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: 0.5rem;
    right: 0.5rem;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    
    svg {
      width: 16px;
      height: 16px;
    }
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
  
  @media (max-width: 1024px) {
    height: calc(90vh - 180px);
    max-height: 500px;
  }
  
  @media (max-width: 768px) {
    height: calc(95vh - 150px);
    max-height: 400px;
    
    .popup-progress {
      gap: 0.375rem;
      justify-content: center;
      
      .progress-dot {
        width: 10px;
        height: 10px;
        
        span {
          width: 6px;
          height: 6px;
        }
      }
    }
  }
  
  @media (max-width: 480px) {
    height: calc(95vh - 120px);
    max-height: 350px;
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
  
  @media (max-width: 1024px) {
    padding: 2rem 2.5rem;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
    
    .content-container p {
      font-size: 1rem;
      line-height: 1.7;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    
    h3 {
      font-size: 1.35rem;
      margin-bottom: 1rem;
    }
    
    .content-container p {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.75rem;
    }
    
    .content-container p {
      font-size: 0.9rem;
      line-height: 1.5;
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
  
  @media (max-width: 1024px) {
    bottom: 1.25rem;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 768px) {
    bottom: 1rem;
    padding: 0 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    bottom: 0.75rem;
    padding: 0 0.75rem;
    gap: 0.75rem;
  }
`;

// Nuevos componentes para las cartas de programas
export const ProgramCard = styled(motion.div)`
  background: var(--card-background);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  padding: var(--card-padding-mobile);
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 32px var(--shadow-color);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px var(--shadow-color);
  }
  
  @media (min-width: 481px) {
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    padding: var(--card-padding);
  }
  
  @media (min-width: 1024px) {
    padding: 2.25rem;
  }
  
  @media (min-width: 1441px) {
    padding: 2.5rem;
    border-radius: 1.25rem;
  }
`;

export const ProgramTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.4;
  
  @media (min-width: 481px) {
    font-size: 1.15rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  @media (min-width: 1441px) {
    font-size: 1.4rem;
    gap: 10px;
  }
`;

export const ProgramDescription = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--text-color);
  
  @media (min-width: 481px) {
    font-size: 0.95rem;
    margin-bottom: 1.1rem;
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  @media (min-width: 1441px) {
    font-size: 1.1rem;
  }
`;

export const ProgramPrice = styled.div`
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: white;
  padding: 0.6rem 0.8rem;
  border-radius: var(--border-radius-small);
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (min-width: 481px) {
    padding: 0.7rem 1rem;
    font-size: 1.05rem;
  }
  
  @media (min-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.1rem;
    border-radius: 10px;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.15rem;
    padding: 0.9rem 1.3rem;
  }
  
  @media (min-width: 1441px) {
    font-size: 1.2rem;
    padding: 1rem 1.4rem;
  }
`;

export const ProgramFeature = styled.div`
  padding: 0.8rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
  font-size: 0.9rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;

export const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    gap: 2.5rem;
  }
  
  @media (min-width: 1441px) {
    gap: 3rem;
  }
`;

export const GiftText = styled.span`
  color: #e91e63;
  font-weight: 600;
`;

export const ProgramButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 0.95rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: #fff;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(76, 175, 80, 0.3);
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
  }
  
  @media (min-width: 481px) {
    padding: 0.9rem 1.75rem;
    font-size: 1rem;
  }
  
  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.05rem;
    border-radius: 12px;
  }
  
  @media (min-width: 1024px) {
    padding: 1.1rem 2.25rem;
    font-size: 1.1rem;
  }
  
  @media (min-width: 1441px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.15rem;
    gap: 10px;
  }
`;
