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
  const [showProgramPopup, setShowProgramPopup] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Auto-focus del modal cuando se abre para permitir scroll inmediato
  useEffect(() => {
    if (showProgramPopup) {
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
      
      // Enfocar el modal para permitir scroll inmediato
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      // Restaurar scroll del body cuando el modal se cierra
      document.body.style.overflow = 'unset';
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showProgramPopup]);
  
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
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          marginTop: '2rem'
        }}>
          {/* Grid de programas - 2x2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            width: '100%'
          }}>
            
            {/* Consulta Inicial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(76, 175, 80, 0.15)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'var(--primary-color)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>✨</span>
                Consulta Inicial
              </div>
              <div style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                • Evaluación personalizada<br />
                • Orientación e introducción al programa<br />
                • Entrega de material
              </div>
              <div style={{ 
                background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                color: 'white',
                padding: '0.7rem 1rem',
                borderRadius: '10px',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                💰 $25.000 (zoom) | $35.000 (terreno)
              </div>
            </motion.div>

            {/* Programa 101 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '2rem',
                border: '2px solid rgba(76, 175, 80, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'var(--primary-color)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🥇</span>
                Programa Nutricional Integral Personalizado de Hábitos Sanos 101
              </div>
              <div style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Duración: 8 semanas (1 hora semanal)<br />
                <span style={{ color: '#e91e63', fontWeight: '600' }}>🎁 Incluye de regalo:</span> 1 glucómetro con lancetas y cintas reactivas, tiras reactivas de pH
              </div>
              <div style={{ 
                background: 'linear-gradient(135deg, #4caf50, #66bb6a)',
                color: 'white',
                padding: '0.8rem 1.2rem',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '1.15rem',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                💎 $ 350.000
              </div>
              <div style={{ 
                padding: '0.8rem',
                background: 'rgba(76, 175, 80, 0.1)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--primary-color)',
                fontSize: '0.9rem'
              }}>
                📞 Seguimiento telefónico diario (L-V)
              </div>
            </motion.div>

            {/* Programa 102 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '2rem',
                border: '2px solid rgba(139, 195, 74, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'var(--primary-color)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🥈</span>
                Programa Nutricional Integral Personalizado de Hábitos Sanos 102
              </div>
              <div style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Duración: 16 semanas (1 hora semanal)<br />
                <span style={{ color: '#e91e63', fontWeight: '600' }}>🎁 Incluye de regalo:</span> 1 glucómetro con lancetas y cintas reactivas, tiras reactivas de pH
              </div>
              <div style={{ 
                background: 'linear-gradient(135deg, #8bc34a, #9ccc65)',
                color: 'white',
                padding: '0.8rem 1.2rem',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '1.15rem',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                💎 $ 650.000
              </div>
              <div style={{ 
                padding: '0.8rem',
                background: 'rgba(139, 195, 74, 0.1)',
                borderRadius: '8px',
                borderLeft: '4px solid #8bc34a',
                fontSize: '0.9rem'
              }}>
                📞 Seguimiento telefónico diario (L-V)
              </div>
            </motion.div>

            {/* Programa 103 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '16px',
                padding: '2rem',
                border: '2px solid rgba(255, 193, 7, 0.4)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: 'var(--primary-color)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>🥉</span>
                Programa Nutricional Integral Personalizado de Hábitos Sanos 103
              </div>
              <div style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Duración: 24 semanas (1 hora semanal)<br />
                <span style={{ color: '#e91e63', fontWeight: '600' }}>🎁 Incluye de regalo:</span> 1 glucómetro con lancetas y cintas reactivas, tiras reactivas de pH
              </div>
              <div style={{ 
                background: 'linear-gradient(135deg, #ff9800, #ffa726)',
                color: 'white',
                padding: '0.8rem 1.2rem',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '1.15rem',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                💎 $ 950.000
              </div>
              <div style={{ 
                padding: '0.8rem',
                background: 'rgba(255, 152, 0, 0.1)',
                borderRadius: '8px',
                borderLeft: '4px solid #ff9800',
                fontSize: '0.9rem'
              }}>
                📞 Seguimiento telefónico diario (L-V)
              </div>
            </motion.div>
          </div>

          {/* Botón centrado */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <button 
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(76, 175, 80, 0.3)',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onClick={() => setShowProgramPopup(true)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(76, 175, 80, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.3)';
              }}
            >
              <span>📋</span>
              Ver contenido detallado del programa
            </button>
          </div>

          {/* Imagen comentada temporalmente */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem'
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
                maxWidth: '500px',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)'
              }}
            />
          </motion.div>
          */}
        </div>
        
        {/* Pop-up para contenido adicional del programa */}
        {showProgramPopup && typeof document !== 'undefined' && createPortal(
          <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            zIndex: '999999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
            onClick={() => setShowProgramPopup(false)}
          >
            <div 
              ref={modalRef}
              tabIndex={-1}
              style={{
                background: '#fff',
                borderRadius: '16px',
                maxWidth: '600px',
                width: '90%',
                padding: '2rem',
                boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
                position: 'relative',
                overflowY: 'auto',
                maxHeight: '80vh',
                zIndex: '9999999',
                outline: 'none'
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Botón X en esquina superior derecha - siempre visible */}
              <button
                style={{
                  position: 'sticky',
                  top: '15px',
                  right: '15px',
                  float: 'right',
                  background: 'white',
                  border: '1px solid #ddd',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: '#666',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  zIndex: '10000000'
                }}
                onClick={() => setShowProgramPopup(false)}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#f0f0f0';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.style.borderColor = '#bbb';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#666';
                  e.currentTarget.style.borderColor = '#ddd';
                }}
              >
                ×
              </button>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1.2rem', color: 'var(--primary-color)', paddingRight: '50px', clear: 'both' }}>
                Contenido detallado del programa
              </h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#666' }}>
                El programa a desarrollar dependerá de la condición de salud de cada persona, el contenido de los programas es el siguiente:
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.7', paddingLeft: '1.2rem' }}>
                <li>Completar ficha clínica</li>
                <li>Análisis de composición corporal (IMC)</li>
                <li>Medición antropométrica</li>
                <li>Solicitud de exámenes de laboratorio más importantes</li>
                <li>Determinar tipo de metabolismo, Individualidad Bioquímica</li>
                <li>Diseño del plan nutricional de acuerdo al metabolismo</li>
                <li>Entrega material de apoyo en cada sesión</li>
                <li>Aprender a usar el glucometro, como una valiosa herramienta de prevención de enfermedades</li>
                <li>Detección de alimentos agresores</li>
                <li>Correcto uso medidor de presión arterial</li>
                <li>Uso de tiras reactivas de pH</li>
                <li>Sobrepeso y obesidad</li>
                <li>Cáncer</li>
                <li>Masa muscular</li>
                <li>Artritis</li>
                <li>Artrosis</li>
                <li>Triglicéridos altos</li>
                <li>Desintoxicación Hígado graso</li>
                <li>Hipertensión</li>
                <li>Pre-diabetes</li>
                <li>Diabetes</li>
                <li>Vitaminas y suplementos</li>
                <li>Hidratación</li>
                <li>Tiroide</li>
                <li>Estrés</li>
                <li>Desintoxicación electromagnética</li>
                <li>Calidad de sueño</li>
                <li>Respiración</li>
                <li>Como mejorar la calidad de sueño</li>
                <li>Mala digestión</li>
                <li>Hormona femenina y masculina</li>
                <li>Etc</li>
              </ul>
            </div>
          </div>,
          document.body
        )}
      </Inner>
    </Wrapper>
  );
};

export default Services;
