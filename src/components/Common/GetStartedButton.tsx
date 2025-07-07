'use client';

import { styled } from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  display: flex;
  padding: 0.75rem 1.5rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  border: 1px solid rgba(76, 175, 80, 0.3);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(76, 175, 80, 0.6);
    background: rgba(255, 255, 255, 0.1);
  }
`;

interface GetStartedButtonProps {
  padding?: string;
  label?: string;
  onClick?: () => void;
}

export const GetStartedButton = ({ 
  padding = '1rem 2rem',
  label = 'Comenzar ahora',
  onClick
}: GetStartedButtonProps) => {
  return (
    <Button padding={padding} onClick={onClick}>
      {label}
    </Button>
  );
};

export default GetStartedButton;
