'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
  BurgerLine,
  PageOverlay,
  MobileMenuLogo
} from './styles';
import { AnimatedLink } from '../../Common/AnimatedLink';
import { GetStartedButton } from '../../Common/GetStartedButton';
import MetaboLifeLogo from '../../MetaboLifeLogo';
import { useMobileMenu } from '../../../contexts/MobileMenuContext';

const links = [
  { linkTo: 'Inicio', target: 'hero' },
  { linkTo: 'Quiénes Somos', target: 'team' },
  { linkTo: 'Acerca', target: 'about' },
  { linkTo: 'Educación Nutricional', target: 'health-education' },
  { linkTo: 'Qué hacemos', target: 'services' },
  { linkTo: 'Contacto', target: 'contact' }
];

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const { isMenuOpen, setIsMenuOpen } = useMobileMenu();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          
          // Detectar sección activa basado en posición de scroll
          const sections = ['hero', 'team', 'about', 'health-education', 'services', 'contact'];
          let currentSection = 'hero';
          
          // Si estamos en la parte superior de la página, siempre mostrar hero
          if (window.scrollY < 100) {
            currentSection = 'hero';
          } else {
            // Obtener posiciones de todas las secciones
            const sectionPositions = sections.map(section => {
              const element = document.getElementById(section);
              if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = window.scrollY + rect.top;
                const elementBottom = elementTop + element.offsetHeight;
                return {
                  id: section,
                  top: elementTop,
                  bottom: elementBottom,
                  height: element.offsetHeight
                };
              }
              return null;
            }).filter(Boolean);
            
            // Determinar qué sección está más visible
            const viewportTop = window.scrollY;
            const viewportBottom = viewportTop + window.innerHeight;
            const viewportCenter = viewportTop + (window.innerHeight / 2);
            
            let maxVisibility = 0;
            let mostVisibleSection = 'hero';
            
            sectionPositions.forEach(section => {
              if (section) {
                // Calcular qué porcentaje de la sección está visible
                const visibleTop = Math.max(viewportTop, section.top);
                const visibleBottom = Math.min(viewportBottom, section.bottom);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                const visibility = visibleHeight / section.height;
                
                // Si esta sección tiene más visibilidad, o si el centro del viewport está dentro de ella
                if (visibility > maxVisibility || 
                    (viewportCenter >= section.top && viewportCenter <= section.bottom)) {
                  maxVisibility = visibility;
                  mostVisibleSection = section.id;
                }
              }
            });
            
            currentSection = mostVisibleSection;
          }
          
          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Ejecutar la detección inicial inmediatamente
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Cerrar el menú al seleccionar una opción
    }
  };

  // Efecto para manejar el overflow del body en móvil
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
      
      // Cleanup
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isMenuOpen]);

  return (
    <Wrapper 
      style={{
        backgroundColor: scrollPosition > 50 ? 'rgba(25, 25, 25, 0.8)' : 'transparent',
        boxShadow: scrollPosition > 50 ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: scrollPosition > 50 ? '1px solid rgba(76, 175, 80, 0.1)' : 'none'
      }}
    >
      <Inner>
        <LogoContainer onClick={() => scrollToSection('hero')} $isHidden={isMenuOpen}>
          <MetaboLifeLogo 
            size="medium" 
            variant={scrollPosition > 50 ? "white" : "default"} 
            showTagline={true} 
          />
        </LogoContainer>
        
        <BurgerMenu $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <BurgerLine $isOpen={isMenuOpen} $isScrolled={scrollPosition > 50} />
          <BurgerLine $isOpen={isMenuOpen} $isScrolled={scrollPosition > 50} />
          <BurgerLine $isOpen={isMenuOpen} $isScrolled={scrollPosition > 50} />
        </BurgerMenu>
        
        {/* Navegación de Desktop */}
        <Nav $isOpen={false}>
          {links.map((link, i) => (
            <AnimatedLink 
              key={i}
              title={link.linkTo} 
              onClick={() => scrollToSection(link.target)}
              isActive={activeSection === link.target}
              isHeaderScrolled={scrollPosition > 50}
            />
          ))}
        </Nav>
        
        {/* Navegación Móvil */}
        <Nav $isOpen={isMenuOpen} style={{ display: 'none' }} className="mobile-nav">
          {/* Logo en la esquina superior izquierda del menú móvil */}
          {isMenuOpen && (
            <MobileMenuLogo>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <MetaboLifeLogo 
                  size="medium" 
                  variant="default" 
                  showTagline={false} 
                />
              </motion.div>
            </MobileMenuLogo>
          )}
          
          {links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isMenuOpen ? { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.4, 
                  delay: i * 0.1 + 0.3,
                  ease: "easeOut"
                }
              } : { 
                opacity: 0, 
                y: 30,
                transition: { 
                  duration: 0.2
                }
              }}
            >
              <AnimatedLink 
                title={link.linkTo} 
                onClick={() => scrollToSection(link.target)}
                isActive={activeSection === link.target}
                isHeaderScrolled={false} // En el menú móvil siempre usamos el estilo normal
              />
            </motion.div>
          ))}
        </Nav>
        
        <CallToActions className={isMenuOpen ? 'active' : ''}>
          {/* El botón de "Comenzar ahora" se movió a la sección hero */}
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
