'use client';

import { motion } from 'framer-motion';
import { 
  Wrapper, 
  Inner, 
  SectionTitle,
  SectionSubtitle,
  ContentGrid, 
  TextContainer, 
  FeatureGrid,
  FeatureCard,
  ResponsiveCardsGrid,
  BackgroundGradient
} from './styles';
import { Pill } from '../../Common/Pill';
import { MaskText } from '../../Common/MaskText';
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

const additionalFeatures = [
  {
    icon: '🎯',
    title: 'Programas de Transformación',
    description: 'Programa especializados diseñados para cada persona, entendiendo que todos somos metabólicamente diferentes.'
  },
  {
    icon: '🩸',
    title: 'Control de Glucosa',
    description: 'Monitoreo y optimización de niveles de glucosa mediante alimentación estratégica y análisis metabólico.'
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
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Metabolismo y nutrición</SectionTitle>
          <SectionSubtitle>
            Transformamos tu salud a través de un enfoque científico integral que combina 
            nutrición personalizada, análisis metabólico y hábitos de vida saludables.
          </SectionSubtitle>
        </motion.div>

        {/* Texto sobre estadísticas de diabetes - ahora arriba de todas las cartas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ 
            marginTop: '1rem',
            marginBottom: '2rem',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '1rem auto 2rem auto',
            padding: '0 1rem' // Añadir padding para móviles
          }}
        >
          <MaskText phrases={aboutTitle} tag="h2" />
          <div style={{ marginTop: '1rem' }}>
            <p style={{ 
              marginBottom: '1rem', 
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', // Responsivo
              lineHeight: '1.6' 
            }}>
              En tan solo una década se ha duplicado la cantidad de personas que tienen Diabetes. Según el Centro para el control de Enfermedades CDC de Estados Unidos, para el año 2050: 1 de cada 3 personas serán diabéticas, aumentando los gastos hospitalarios, los sufrimientos para la familia tanto emocionales como económicos, simplemente no va a alcanzar para sostenerlas.
            </p>
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', // Responsivo
              lineHeight: '1.6' 
            }}>
              Actualmente en Estados Unidos de Norteamérica 1 de cada 3 personas tiene prediabetes y 1 de cada 10 personas no sabe que tiene diabetes. Es muy importante tomar las acciones correctas para no estar entre estas estadísticas.
            </p>
          </div>
        </motion.div>

        {/* Todas las cartas alineadas responsivamente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <ResponsiveCardsGrid>
            {[...features, ...additionalFeatures].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
              >
                <FeatureCard>
                  <div className="icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </FeatureCard>
              </motion.div>
            ))}
          </ResponsiveCardsGrid>
        </motion.div>
      </Inner>
    </Wrapper>
  );
};

export default About;
