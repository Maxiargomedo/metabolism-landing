'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  background: rgba(18, 18, 18, 0.9);
  padding: 5rem 0 2rem;
  position: relative;
  overflow: hidden;
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

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  .logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    h2 {
      font-size: 1.75rem;
      font-weight: 600;
      background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    p {
      color: #bdbdbd;
      font-size: 0.95rem;
      letter-spacing: 0.1em;
    }
  }
  
  p {
    color: #bdbdbd;
    font-size: 0.875rem;
    line-height: 1.6;
  }
  
  .social {
    display: flex;
    gap: 1rem;
    
    a {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      color: #e0e0e0;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(76, 175, 80, 0.2);
        color: #4CAF50;
        transform: translateY(-3px);
      }
    }
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  
  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #e0e0e0;
    margin-bottom: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    li a {
      color: #bdbdbd;
      font-size: 0.875rem;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        color: #4CAF50;
      }
    }
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: #757575;
    font-size: 0.75rem;
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 50% 0%, rgba(76, 175, 80, 0.03) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: 0;
`;
