'use client';

import { motion } from 'framer-motion';
import { 
  Wrapper, 
  Inner, 
  ContentGrid, 
  TextContainer, 
  FeatureGrid,
  FeatureCard,
  BackgroundGradient
} from './styles';
import { Pill, MaskText } from '@/src/components';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🔬',
    title: 'Análisis metabólico',
    description: 'Evaluación completa de tu metabolismo basado en evidencia científica.'
  },
  {
    icon: '🍽️',
    title: 'Nutrición personalizada',
    description: 'Planes de alimentación adaptados a tus necesidades metabólicas únicas.'
  },
  {
    icon: '📊',
    title: 'Seguimiento continuo',
    description: 'Monitoreo constante de tu progreso con ajustes según resultados.'
  },
  {
    icon: '🧠',
    title: 'Educación nutricional',
    description: 'Aprende a tomar decisiones informadas sobre tu alimentación.'
  }
];

const aboutTitle = [
  "La", "ciencia", "detrás", "de", "un", "metabolismo", "saludable"
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <Wrapper id="about" ref={ref}>
      <BackgroundGradient />
      
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Pill>
            <span>Metabolismo y nutrición</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="#E0E0E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Pill>
        </motion.div>
        
        <ContentGrid>
          <TextContainer>
            <MaskText phrases={aboutTitle} tag="h2" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              En MetaboLife, combinamos la ciencia nutricional avanzada con un enfoque personalizado para optimizar tu metabolismo y mejorar tu salud general. Entendemos que cada cuerpo es único, y tu plan nutricional debe serlo también.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Nuestro equipo de nutricionistas especializados utiliza las últimas investigaciones para crear estrategias que aceleran tu metabolismo, aumentan tus niveles de energía y promueven un bienestar duradero.
            </motion.p>
          </TextContainer>
          
          <FeatureGrid>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <FeatureCard>
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </FeatureCard>
              </motion.div>
            ))}
          </FeatureGrid>
        </ContentGrid>
      </Inner>
    </Wrapper>
  );
};

export default About;
