'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  background: rgba(18, 18, 18, 0.3);
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

export const HeaderContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 4rem;
  
  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 600;
    background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: #bdbdbd;
    font-size: 1.125rem;
    line-height: 1.6;
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
      color: #fff;
      background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    p {
      font-size: 1.125rem;
      line-height: 1.6;
      color: #e0e0e0;
      margin-bottom: 2rem;
    }
    
    .service-button {
      align-self: flex-start;
      padding: 0.75rem 2rem;
      background: linear-gradient(92deg, rgba(76, 175, 80, 0.8) 0%, rgba(139, 195, 74, 0.8) 100%);
      border-radius: 2rem;
      color: #fff;
      font-weight: 500;
      transition: all 0.3s;
      border: none;
      cursor: pointer;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(76, 175, 80, 0.2);
        background: linear-gradient(92deg, rgba(76, 175, 80, 1) 0%, rgba(139, 195, 74, 1) 100%);
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
  z-index: 10;
`;

export const CarouselButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(31, 41, 55, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(76, 175, 80, 0.3);
    transform: scale(1.1);
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
`;

export const CarouselProgress = styled.div`
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
      background: #4CAF50;
      transform: scale(1.5);
    }
    
    &:hover span {
      background: rgba(76, 175, 80, 0.7);
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
    background: rgba(76, 175, 80, 0.1);
    color: #4CAF50;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: 600;
    color: #4CAF50;
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
      color: #bdbdbd;
      
      svg {
        color: #4CAF50;
        flex-shrink: 0;
      }
    }
  }
`;
