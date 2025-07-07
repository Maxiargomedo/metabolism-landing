'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Wrapper, 
  Inner, 
  HeaderContainer,
  BackgroundGradient,
  CarouselContainer,
  CarouselCard,
  CarouselControls,
  CarouselButton,
  CarouselProgress
} from './styles';
import { Pill, MaskText } from '@/src/components';
import { useInView } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: 'Evaluación Metabólica Integral',
    description: 'Análisis completo de tu metabolismo basal, utilizando tecnología avanzada para determinar tus necesidades nutricionales específicas.',
    image: '/img/service-1.jpg'
  },
  {
    id: 2,
    title: 'Planes Nutricionales Personalizados',
    description: 'Creamos planes de alimentación a medida que se adaptan a tu metabolismo, preferencias y objetivos de salud.',
    image: '/img/service-2.jpg'
  },
  {
    id: 3,
    title: 'Coaching Nutricional Continuo',
    description: 'Acompañamiento profesional para ayudarte a implementar cambios sostenibles en tu alimentación y estilo de vida.',
    image: '/img/service-3.jpg'
  },
  {
    id: 4,
    title: 'Análisis de Composición Corporal',
    description: 'Evaluación detallada de tu composición corporal para establecer objetivos realistas y monitorear tu progreso.',
    image: '/img/service-4.jpg'
  },
  {
    id: 5,
    title: 'Nutrición para Condiciones Específicas',
    description: 'Planes especializados para condiciones como diabetes, hipotiroidismo, SOPQ, y otras condiciones metabólicas.',
    image: '/img/service-5.jpg'
  }
];

const servicesTitle = [
  "Nuestros", "servicios", "nutricionales"
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  
  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };
  
  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };
  
  // Iniciar/detener autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayTimer.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [autoplay, currentSlide]);
  
  // Pausar autoplay al interactuar con el carrusel
  const handleInteraction = () => {
    setAutoplay(false);
    // Reiniciar autoplay después de 10 segundos de inactividad
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
    setTimeout(() => setAutoplay(true), 10000);
  };
  
  return (
    <Wrapper id="services" ref={ref}>
      <BackgroundGradient />
      
      <Inner>
        <HeaderContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Pill>
              <span>Servicios premium</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="#E0E0E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Pill>
          </motion.div>
          
          <MaskText phrases={servicesTitle} tag="h2" />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Descubre nuestro catálogo de servicios diseñados para transformar tu metabolismo y mejorar tu calidad de vida a través de la nutrición científica.
          </motion.p>
        </HeaderContainer>
        
        {/* Carrusel de Servicios */}
        <CarouselContainer>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {servicesData.map((service, index) => (
              <CarouselCard key={service.id} className={currentSlide === index ? 'active' : ''}>
                <div className="image-container">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    animate={currentSlide === index ? { 
                      scale: [1, 1.05, 1],
                      filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"]
                    } : {}}
                    transition={{ duration: 5, repeat: currentSlide === index ? Infinity : 0, repeatType: "reverse" }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="content">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="service-button"
                  >
                    Saber más
                  </motion.button>
                </div>
              </CarouselCard>
            ))}
          </motion.div>
          
          <CarouselControls>
            <CarouselButton onClick={() => { prevSlide(); handleInteraction(); }} className="prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CarouselButton>
            
            <CarouselProgress>
              {servicesData.map((_, index) => (
                <button
                  key={index}
                  className={`progress-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => { setCurrentSlide(index); handleInteraction(); }}
                >
                  <span></span>
                </button>
              ))}
            </CarouselProgress>
            
            <CarouselButton onClick={() => { nextSlide(); handleInteraction(); }} className="next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </CarouselButton>
          </CarouselControls>
        </CarouselContainer>
      </Inner>
    </Wrapper>
  );
};

export default Services;
