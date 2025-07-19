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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
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
    color: var(--text-secondary);
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
        color: var(--text-color);
        font-size: 1rem;
        font-weight: 500;
      }
      
      .value {
        color: var(--text-secondary);
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
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  
  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    color: var(--text-color);
    margin-bottom: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    color: var(--text-color);
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  input, textarea, select {
    padding: 1rem;
    border-radius: 0.75rem;
    background: var(--card-background);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: rgba(76, 175, 80, 0.6);
      background: var(--glass-background);
      box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
    }
    
    &::placeholder {
      color: var(--text-muted);
    }
  }
  
  select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    
    option {
      background: var(--background-color);
      color: var(--text-color);
      padding: 0.5rem;
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

// Componentes para el mensaje de éxito
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1.5rem;
  background: rgba(76, 175, 80, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(76, 175, 80, 0.3);
`;

export const SuccessTitle = styled.h3`
  color: #4CAF50;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

export const SuccessMessage = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
`;

export const WhatsAppOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(33, 150, 243, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(33, 150, 243, 0.3);
`;

export const WhatsAppTitle = styled.h4`
  color: #2196F3;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const WhatsAppDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const WhatsAppButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border: none;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  }
`;

export const EmailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--card-background);
    transform: translateY(-2px);
  }
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(33, 150, 243, 0.2);
`;

export const SocialTitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
  text-align: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1.2rem;
  
  &.instagram {
    background: linear-gradient(135deg, #E4405F 0%, #833AB4 50%, #F77737 100%);
    color: white;
    
    &:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 25px rgba(228, 64, 95, 0.4);
    }
  }
  
  &.twitter {
    background: linear-gradient(135deg, #1DA1F2 0%, #0D8BD9 100%);
    color: white;
    
    &:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 25px rgba(29, 161, 242, 0.4);
    }
  }
  
  &.facebook {
    background: linear-gradient(135deg, #1877F2 0%, #165ED0 100%);
    color: white;
    
    &:hover {
      transform: translateY(-3px) scale(1.1);
      box-shadow: 0 8px 25px rgba(24, 119, 242, 0.4);
    }
  }
`;
