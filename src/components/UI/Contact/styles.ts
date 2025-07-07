'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
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

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  
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
    color: #bdbdbd;
    font-size: 1.125rem;
    line-height: 1.6;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  
  .info-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      background: rgba(76, 175, 80, 0.1);
      color: #4CAF50;
      font-size: 1.5rem;
    }
    
    .details {
      display: flex;
      flex-direction: column;
      
      .label {
        color: #e0e0e0;
        font-size: 1rem;
        font-weight: 500;
      }
      
      .value {
        color: #bdbdbd;
        font-size: 1rem;
      }
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    color: #e0e0e0;
    margin-bottom: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    color: #e0e0e0;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  input, textarea, select {
    padding: 1rem;
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #e0e0e0;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: rgba(76, 175, 80, 0.6);
    }
    
    &::placeholder {
      color: #757575;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
  
  .error {
    color: #f44336;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.05) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: 0;
`;
