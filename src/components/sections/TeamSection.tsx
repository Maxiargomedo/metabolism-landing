'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const TeamContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: var(--section-bg-gray);
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
            Somos un centro especializado en nutrición que ofrece servicios destinados a mejorar la salud y el bienestar a través de cambios sostenibles en los hábitos de vida. Nuestro objetivo es acompañar a cada persona en su proceso, brindando atención personalizada, orientación clara y un acompañamiento constante, según sus propias metas y necesidades: ya sea adelgazar, reducir triglicéridos, eliminar el hígado graso, revertir o poner en remisión enfermedades, o simplemente incorporar hábitos más saludables.

            Nuestro equipo está conformado por un grupo de profesionales de la salud comprometidos con una visión integradora de la nutrición. Creemos que los alimentos y los habitos correctos pueden ser una poderosa forma de medicina, y que una transformación en el estilo de vida puede marcar la diferencia entre depender de medicamentos o prevenir su uso. Por eso, entregamos recursos, educación y asesoría tanto a personas con enfermedades crónicas como a quienes desean cuidar su salud y mantenerla en el tiempo.
          </TeamDescription>
        </TeamHeader>
      </TeamInner>
    </TeamContainer>
  );
}
