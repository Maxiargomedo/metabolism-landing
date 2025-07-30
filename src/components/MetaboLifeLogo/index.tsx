'use client';

import { styled } from 'styled-components';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  showTagline?: boolean;
  variant?: 'default' | 'white' | 'dark';
}

const LogoContainer = styled.div<{ $size: string }>`
  display: flex;
  align-items: center;
  gap: ${props => {
    switch (props.$size) {
      case 'small': return '0.75rem';
      case 'medium': return '1rem';
      case 'large': return '1.25rem';
      case 'xl': return '1.5rem';
      default: return '1rem';
    }
  }};
  
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
  
  /* En pantallas pequeñas, cambiar a vertical */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${props => {
      switch (props.$size) {
        case 'small': return '0.5rem';
        case 'medium': return '0.75rem';
        case 'large': return '1rem';
        case 'xl': return '1.25rem';
        default: return '0.75rem';
      }
    }};
  }
`;

const TextContainer = styled.div<{ $size: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  /* En pantallas pequeñas, centrar el texto */
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CircleContainer = styled.div<{ $size: string }>`
  width: ${props => {
    switch (props.$size) {
      case 'small': return '40px';
      case 'medium': return '60px';
      case 'large': return '100px';
      case 'xl': return '150px';
      default: return '60px';
    }
  }};
  height: ${props => {
    switch (props.$size) {
      case 'small': return '40px';
      case 'medium': return '60px';
      case 'large': return '100px';
      case 'xl': return '150px';
      default: return '60px';
    }
  }};
  position: relative;
`;

const MainText = styled.h1<{ $size: string; $variant: string }>`
  font-family: 'Arial', sans-serif;
  font-weight: 300;
  margin: 0;
  letter-spacing: -0.02em;
  color: ${props => {
    switch (props.$variant) {
      case 'white': return '#ffffff';
      case 'dark': return '#111827';
      default: return 'var(--text-color)'; /* Usar variable CSS para adaptar al tema */
    }
  }};
  
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '1.2rem';
      case 'medium': return '1.8rem';
      case 'large': return '3rem';
      case 'xl': return '4.5rem';
      default: return '1.8rem';
    }
  }};
  
  .life {
    color: ${props => {
      switch (props.$variant) {
        case 'white': return '#ffffff';
        case 'dark': return '#111827';
        default: return 'var(--text-color)'; /* Usar variable CSS para adaptar al tema */
      }
    }};
    font-weight: 400;
  }
  
  sup {
    font-size: 0.6em;
    font-weight: 400;
    top: -0.5em;
    color: ${props => {
      switch (props.$variant) {
        case 'white': return '#ffffff';
        case 'dark': return '#111827';
        default: return 'var(--text-color)'; /* Usar variable CSS para adaptar al tema */
      }
    }};
  }
`;

const Tagline = styled.p<{ $size: string; $variant: string }>`
  font-family: 'Arial', sans-serif;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${props => {
    switch (props.$variant) {
      case 'white': return 'rgba(255, 255, 255, 0.8)';
      case 'dark': return '#666666';
      default: return '#4CAF50';
    }
  }};
  
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '0.5rem';
      case 'medium': return '0.7rem';
      case 'large': return '1rem';
      case 'xl': return '1.3rem';
      default: return '0.7rem';
    }
  }};
  
  /* Ocultar en pantallas pequeñas */
  @media (max-width: 768px) {
    display: none;
  }
`;

const MetaboLifeLogo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  showTagline = true, 
  variant = 'default' 
}) => {
  const circleSize = {
    small: 40,
    medium: 60,
    large: 100,
    xl: 150
  }[size];

  return (
    <LogoContainer $size={size}>
      <CircleContainer $size={size}>
        <svg
          width={circleSize}
          height={circleSize}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id={`metabolife-gradient-${size}`}
              cx="50%"
              cy="30%"
              r="70%"
            >
              <stop offset="0%" stopColor="#A8E6A3" />
              <stop offset="30%" stopColor="#81C784" />
              <stop offset="70%" stopColor="#4CAF50" />
              <stop offset="100%" stopColor="#2E7D32" />
            </radialGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="98"
            fill={`url(#metabolife-gradient-${size})`}
            stroke="none"
          />
        </svg>
      </CircleContainer>
      
      <TextContainer $size={size}>
        <MainText $size={size} $variant={variant}>
          metabo<span className="life">life</span><sup>®</sup>
        </MainText>
        
        {showTagline && (
          <Tagline $size={size} $variant={variant}>
            Activa tu metabolismo.
          </Tagline>
        )}
      </TextContainer>
    </LogoContainer>
  );
};

export default MetaboLifeLogo;
