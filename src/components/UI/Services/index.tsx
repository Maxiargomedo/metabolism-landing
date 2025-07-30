'use client';

import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { 
  Wrapper, 
  Inner, 
  BackgroundGradient,
  SectionTitle,
  SectionSubtitle,
  CarouselContainer,
  CarouselCard,
  CarouselControls,
  CarouselButton,
  CarouselProgress,
  PopupModal,
  PopupContent,
  PopupCarouselContainer,
  PopupCarouselControls,
  PopupCarouselSlide,
  PopupCloseButton
} from './styles';
import { useInView } from 'framer-motion';

// Define interface for popup content
interface PopupSlide {
  title: string;
  content: string;
}

// Define interface for service data
interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string;
  hasPopup?: boolean;
  popupContent?: PopupSlide[];
}

const servicesData: ServiceData[] = [
  {
    id: 1,
    title: '🩺 GLUCÓMETRO: Tu Aliado Para Una Vida Saludable',
    description: 'Descubre cómo este dispositivo puede transformar tu salud y prevenir enfermedades, incluso si no eres diabético.',
    image: '/img/medicion-medica-glucosa.avif',
    hasPopup: true,
    popupContent: [
      {
        title: '¿Qué es un Glucómetro?',
        content: 'El glucómetro, también conocido como medidor de glucosa en sangre, es un dispositivo médico esencial que mide la cantidad de glucosa (azúcar) en tu sangre. Aunque tradicionalmente se asocia con el tratamiento de la diabetes, este dispositivo revolucionario puede ser tu mejor herramienta para prevenir problemas de salud y tomar control total de tu bienestar.'
      },
      {
        title: '🚀 ¿Por Qué TODOS Deberían Tener Un Glucómetro En Casa?',
        content: 'Incluso si NO eres diabético o hipertenso, la glucosa es el indicador más importante de tu salud general. Aquí te explicamos por qué:'
      },
      {
        title: '✅ Beneficios Inmediatos:',
        content: '• Monitoreo preventivo: La mejor forma de saber si eres diabetico o prediabetico o estás en vías de serlo.\n• Prevención de enfermedades: Evita problemas futuros antes de que aparezcan\n• Control de peso: Si luchas contra la obesidad o sobre peso, necesitas saber qué pasa con tu glucosa\n• Detección temprana: Identifica problemas antes de convertirte en diabético'
      },
      {
        title: '✅ Beneficios a Mediano y Largo Plazo:',
        content: '• Protección celular: Menor riesgo de daño en hígado, riñones, páncreas y tiroides\n• Control de presión arterial: Identifica qué causa tus subidas de presión\n• Alimentación inteligente: Deja de comer a ciegas y toma decisiones informadas\n• Detección de alimentos agresores: Descubre qué alimentos te suben la glucosa y la presión'
      },
      {
        title: '🔑 Ecuación Fundamental:',
        content: 'GLUCOSA + INSULINA = GRASA\nSi haces ejercicio, cuidas tu alimentación y no pierdes grasa, probablemente tu glucosa está muy alta.'
      },
      {
        title: '📊 Rangos de Glucosa en Ayuno: Conoce tu Estado',
        content: 'Clasificación Médica:\n🚨 Diabetes: 125 mg/dL o más\n⚠️ Pre-diabetes: 100-124 mg/dL (casi la mitad de la población está aquí)\n📈 Pre-obesidad: 86-99 mg/dL\n✅ Óptima: 85 mg/dL o menos'
      },
      {
        title: 'Datos Importantes:',
        content: '• Rango normal diario: 80-100 mg/dL según médicos\n• Peligro: Menos de 70 mg/dL puede causar hipoglucemia\n• Límite crítico: Más de 130 mg/dL comienza a causar daño corporal\n• Control ideal: Mantener entre 80-120 mg/dL'
      },
      {
        title: '📈 Estadísticas Alarmantes 2025',
        content: 'Cifras Mundiales:\n• Diabéticos: 830 millones de personas (11.1% de la población)\n• Obesidad: 2.7 mil millones de personas'
      },
      {
        title: '🔬 La Ciencia Detrás del Control',
        content: 'Conexión Diabetes-Obesidad:\n• 85% de los diabéticos tipo 2 están en sobrepeso u obesos\n• Hecho científico: Si controlas la obesidad, controlas la diabetes\n• Causa raíz: El descontrol hormonal lleva a la obesidad, y la obesidad lleva a la diabetes'
      },
      {
        title: 'Factores que Disparan la Glucosa:',
        content: '• Carbohidratos refinados: Pan, harina, arroz, papas, dulces\n• Estrés emocional: Causa respuesta hormonal que libera glucosa\n• Estrés nutricional: Alimentos agresores específicos para cada persona\n• Respuesta del cuerpo: Dispara hormonas de estrés que elevan la glucosa'
      },
      {
        title: '🎯 Tu Plan de Acción',
        content: 'Paso 1: Adquiere un Glucómetro\nInvierte en tu salud con esta herramienta esencial de monitoreo.\nPaso 2: Establece tu Línea Base\nMide tu glucosa en ayuno para conocer tu estado actual.\nPaso 3: Identifica tus Alimentos Agresores\nUsa los métodos del glucómetro y del pulso para crear tu lista personalizada.\nPaso 4: Mantén el Control\nObjetivo: Mantener glucosa entre 80-120 mg/dL durante el día.\nPaso 5: Transforma tu Salud\nExperimenta más energía, mejor peso y salud óptima.'
      },
      {
        title: '🌟 Transforma tu Vida',
        content: 'No esperes a tener síntomas o problemas de salud. El glucómetro te da el poder de la prevención y el control total sobre tu bienestar. Cada medición es una oportunidad para tomar mejores decisiones y construir una vida más saludable.\nTu salud es tu mayor inversión. Comienza hoy.'
      }
    ]
  },
  {
    id: 2,
    title: '🥗 Planes Nutricionales Personalizados',
    description: 'Creamos planes de alimentación a medida que se adaptan a tu metabolismo, preferencias y objetivos de salud.',
    image: '/img/plan-nutricional-personalizado.jpg'
  },
  {
    id: 3,
    title: '👨‍⚕️ Coaching Nutricional Continuo',
    description: 'Acompañamiento profesional para ayudarte a implementar cambios sostenibles en tu alimentación y estilo de vida.',
    image: '/img/coaching-nutricional.jpg'
  },
  {
    id: 4,
    title: '📊 Análisis de Composición Corporal',
    description: 'Evaluación detallada de tu composición corporal para establecer objetivos realistas y monitorear tu progreso.',
    image: '/img/analisis-corporal.jpg'
  },
  {
    id: 5,
    title: '🩺 Nutrición para Condiciones Específicas',
    description: 'Planes especializados para condiciones como diabetes, hipotiroidismo, SOPQ, y otras condiciones metabólicas.',
    image: '/img/nutricion-especializada.jpg'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [popupSlide, setPopupSlide] = useState(0);
  
  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    console.log('nextSlide clicked, current slide:', currentSlide);
    setCurrentSlide((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };
  
  // Función para retroceder al slide anterior
  const prevSlide = () => {
    console.log('prevSlide clicked, current slide:', currentSlide);
    setCurrentSlide((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };
  
  // Funciones para el popup carrusel
  const nextPopupSlide = () => {
    if (activeService !== null && servicesData[activeService].popupContent) {
      setPopupSlide((prev) => 
        prev === (servicesData[activeService].popupContent?.length || 1) - 1 ? 0 : prev + 1
      );
    }
  };
  
  const prevPopupSlide = () => {
    if (activeService !== null && servicesData[activeService].popupContent) {
      setPopupSlide((prev) => 
        prev === 0 ? (servicesData[activeService].popupContent?.length || 1) - 1 : prev - 1
      );
    }
  };
  
  // Abrir popup con el servicio seleccionado
  const openPopup = (serviceIndex: number) => {
    setActiveService(serviceIndex);
    setPopupSlide(0);
    setShowPopup(true);
    setAutoplay(false); // Pausa el carrusel principal
    document.body.style.overflow = 'hidden'; // Previene scroll en el fondo
  };
  
  // Cerrar popup
  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = 'auto'; // Restaura scroll
    setTimeout(() => setAutoplay(true), 1000); // Reinicia autoplay después de un segundo
  };
  
  // Manejar tecla ESC para cerrar popup
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);
  
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
    console.log('handleInteraction called');
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Programas</SectionTitle>
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          marginTop: '2rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SectionSubtitle>
              <strong>Consulta</strong><br />
              • Evaluación personalizada<br />
              • Orientación e introducción al programa de nutrición y hábitos sanos<br />
              • Entrega de material<br /><br />
              
              <strong>Valor:</strong><br />
              $25.000 (presencial o vía zoom)<br />
              $35.000 (en terreno dentro de región Metropolitana)<br /><br />
              
              <strong>Primer Programa Nutricional Personalizado de Hábitos Sanos 101</strong><br />
              Duración: 8 semanas (1 hora semanal)<br />
              Incluye: glucómetro, lancetas, cintas reactivas, tiras reactivas de pH<br /><br />
              
              <strong>Valores:</strong><br />
              • 1 persona: $280.000<br />
              • 2 personas (grupo familiar): $200.000<br />
              • 3 personas (grupo familiar): $150.000<br /><br />
              
              <strong>Segundo Programa Nutricional Personalizado de Hábitos Sanos 102</strong><br />
              Duración: 16 semanas (1 hora semanal)<br />
              Incluye: glucómetro, lancetas, cintas reactivas, tiras reactivas de pH<br /><br />
              
              <strong>Valores:</strong><br />
              • 1 persona: $500.000<br />
              • 2 personas (grupo familiar): $400.000<br />
              • 3 personas (grupo familiar): $350.000<br /><br />
              
              <em>Mi propósito es educar a la gente para que puedan mejorar su metabolismo y por ende su salud.</em>
            </SectionSubtitle>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              position: 'relative'
            }}
          >
            <Image 
              src="/img/imgProgramas.png" 
              alt="Programas nutricionales personalizados"
              width={600}
              height={400}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              style={{
                width: '100%',
                height: 'auto',
                minHeight: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            />
          </motion.div>
        </div>
      </Inner>
    </Wrapper>
  );
};

export default Services;
