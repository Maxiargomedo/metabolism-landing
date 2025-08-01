'use client';

import { styled } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  padding?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const StyledButton = styled.button<{ $padding: string; $variant: string }>`
  display: flex;
  padding: ${(props) => props.$padding};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 3.125rem;
  background: ${(props) => 
    props.$variant === 'primary' 
      ? 'linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%)' 
      : props.$variant === 'secondary'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'transparent'
  };
  border: ${(props) => props.$variant === 'outline' ? '1px solid #4CAF50' : 'none'};
  color: ${(props) => props.$variant === 'outline' ? '#4CAF50' : '#fff'};
  font-size: 1rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.2);
    background: ${(props) => 
      props.$variant === 'primary' 
        ? 'linear-gradient(92deg, #43A047 0%, #7CB342 100%)' 
        : props.$variant === 'secondary'
        ? 'rgba(255, 255, 255, 0.15)'
        : 'transparent'
    };
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const Button = ({ 
  children, 
  padding = '1rem 2rem', 
  onClick,
  variant = 'primary'
}: ButtonProps) => {
  return (
    <StyledButton $padding={padding} onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
