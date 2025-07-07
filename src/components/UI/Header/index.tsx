'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu
} from './styles';
import { AnimatedLink, GetStartedButton } from '@/src/components';

const links = [
  { linkTo: 'Inicio', target: 'hero' },
  { linkTo: 'Acerca', target: 'about' },
  { linkTo: 'Servicios', target: 'services' },
  { linkTo: 'Contacto', target: 'contact' }
];

const menu = {
  open: { rotate: 45, y: 0 },
  closed: { rotate: 0, y: 0 }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Detectar sección activa
      const sections = ['hero', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Wrapper 
      style={{
        backgroundColor: scrollPosition > 50 ? 'rgba(25, 25, 25, 0.8)' : 'transparent',
        boxShadow: scrollPosition > 50 ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: scrollPosition > 50 ? '1px solid rgba(76, 175, 80, 0.1)' : 'none'
      }}
    >
      <Inner>
        <LogoContainer onClick={() => scrollToSection('hero')}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-3xl">🌱</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-lime-300 text-transparent bg-clip-text">
              MetaboLife
            </h1>
            <p className="text-xs text-gray-300 tracking-widest">NUTRITION & WELLNESS</p>
          </motion.div>
        </LogoContainer>
        
        <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            variants={menu}
            animate={isOpen ? 'open' : 'closed'}
            initial="closed"
          ></motion.div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </BurgerMenu>
        
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedLink 
                title={link.linkTo} 
                onClick={() => scrollToSection(link.target)} 
              />
            </motion.div>
          ))}
        </Nav>
        
        <CallToActions className={isOpen ? 'active' : ''}>
          {/* El botón de "Comenzar ahora" se movió a la sección hero */}
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
