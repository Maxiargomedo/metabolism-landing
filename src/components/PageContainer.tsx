'use client';

import { styled } from 'styled-components';
import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  isMenuOpen: boolean;
}

const Container = styled.div<{ $isMenuOpen: boolean }>`
  width: 100%;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    transform: ${props => props.$isMenuOpen ? 'translateX(-20%)' : 'translateX(0)'};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: ${props => props.$isMenuOpen ? 'hidden' : 'visible'};
  }
`;

export const PageContainer = ({ children, isMenuOpen }: PageContainerProps) => {
  return (
    <Container $isMenuOpen={isMenuOpen}>
      {children}
    </Container>
  );
};

export default PageContainer;
