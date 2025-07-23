'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const TeamContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: var(--background-color);
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 2rem;
  }
`;

const TeamInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const TeamTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const TeamDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const TeamImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const TeamImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    border-radius: 12px;
    max-width: 95%;
  }
`;

export default function TeamSection() {
  return (
    <TeamContainer id="team">
      <TeamInner>
        <TeamHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <TeamTitle>
            Quiénes Somos
          </TeamTitle>
          <TeamDescription>
            Somos un grupo de profesionales de la salud, que ofrecemos recursos y orientación sobre nutrición para personas con enfermedades cronicas y personas saludables que desean mantenerse de esa forma por largo tiempo. Trabajamos con la premisa que los alimentos pueden ser una medicina. Que un cambio en su estilo de vida y habitos puede evitar que usted tenga que tomar medicación.
          </TeamDescription>
          
          <TeamImageContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TeamImage
              src="/img/quienesSomos.png"
              alt="Quiénes Somos - Equipo de profesionales de la salud"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            />
          </TeamImageContainer>
        </TeamHeader>
      </TeamInner>
    </TeamContainer>
  );
}
