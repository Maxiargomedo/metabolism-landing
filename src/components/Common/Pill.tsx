'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

interface PillProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const StyledPill = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid rgba(152, 152, 152, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: #e0e0e0;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const Pill = ({ children, icon }: PillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledPill>
        <span>{children}</span>
        {icon}
      </StyledPill>
    </motion.div>
  );
};

export default Pill;
