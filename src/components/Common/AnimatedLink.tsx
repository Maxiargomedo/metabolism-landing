'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

interface AnimatedLinkProps {
  title: string;
  onClick?: () => void;
}

const LinkWrapper = styled.a`
  position: relative;
  display: inline-block;
  color: #bdbdbd;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #4CAF50;
  }
`;

const LinkIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #4CAF50;
`;

export const AnimatedLink = ({ title, onClick }: AnimatedLinkProps) => {
  return (
    <LinkWrapper onClick={onClick}>
      {title}
      <LinkIndicator
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1, originX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </LinkWrapper>
  );
};

export default AnimatedLink;
