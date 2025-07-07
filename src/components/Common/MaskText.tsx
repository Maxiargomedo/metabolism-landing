'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface MaskTextProps {
  phrases: string[];
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
}

const StyledText = styled.div`
  overflow: hidden;
  position: relative;
`;

export const MaskText = ({ 
  phrases, 
  tag = 'h1',
  className = ''
}: MaskTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.5 });
  const [isMounted, setIsMounted] = useState(false);
  
  // Proteger contra errores de hidratación
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const Tag = tag;
  
  if (!isMounted) {
    return (
      <Tag className={className}>
        {phrases.join(' ')}
      </Tag>
    );
  }

  return (
    <StyledText ref={textRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {phrases.map((phrase, index) => (
          <motion.div 
            key={index} 
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1 
            }}
            style={{ display: 'inline-block', marginRight: '8px' }}
          >
            <Tag className={className} style={{ display: 'inline-block', margin: 0 }}>
              {phrase}
            </Tag>
          </motion.div>
        ))}
      </motion.div>
    </StyledText>
  );
};

export default MaskText;
