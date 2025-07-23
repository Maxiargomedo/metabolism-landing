'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const CollageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgba(248, 250, 252, 0.95) 0%,
    rgba(226, 232, 240, 0.9) 30%,
    rgba(203, 213, 225, 0.85) 70%,
    rgba(148, 163, 184, 0.8) 100%
  );
`;

const FloatingImage = styled(motion.img)`
  position: absolute;
  border-radius: 16px;
  object-fit: cover;
  filter: blur(0.3px) opacity(0.9);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.8);
`;

// IMÁGENES LOCALES para NUTRICIÓN CIENTÍFICA BASADA EN EVIDENCIAS
// Todas las imágenes están almacenadas localmente en /public/img/
const images = [
  {
    src: '/img/IMG1.jpg',
    alt: 'Alimentos saludables variados',
    size: { width: 250, height: 190 }
  },
  {
    src: '/img/IMG2.webp',
    alt: 'Vegetales frescos orgánicos',
    size: { width: 220, height: 150 }
  },
  {
    src: '/img/ALIMENTO1.jpg',
    alt: 'Frutas frescas nutritivas',
    size: { width: 200, height: 200 }
  },
  {
    src: '/img/ALIMENTO2.webp',
    alt: 'Superalimentos antioxidantes',
    size: { width: 240, height: 200 }
  },
  {
    src: '/img/ALIMENTO3.jpeg',
    alt: 'Frutos secos y semillas',
    size: { width: 220, height: 220 }
  },
  {
    src: '/img/ALIMENTO4.jpg',
    alt: 'Bowl de frutas saludable',
    size: { width: 300, height: 220 }
  },
  {
    src: '/img/ALIMENTO5.jpeg',
    alt: 'Granos integrales saludables',
    size: { width: 210, height: 170 }
  },
  {
    src: '/img/ALIMENTO6.avif',
    alt: 'Hierbas medicinales naturales',
    size: { width: 280, height: 160 }
  },
  {
    src: '/img/ALIMENTOSMART.jpg',
    alt: 'Alimentación científica inteligente',
    size: { width: 260, height: 190 }
  },
  // Repetimos las imágenes para tener más variedad en la rotación
  {
    src: '/img/IMG1.jpg',
    alt: 'Variedad de alimentos nutritivos',
    size: { width: 230, height: 180 }
  },
  {
    src: '/img/IMG2.webp',
    alt: 'Verduras de hoja verde',
    size: { width: 200, height: 280 }
  },
  {
    src: '/img/ALIMENTO1.jpg',
    alt: 'Nutrientes esenciales naturales',
    size: { width: 270, height: 220 }
  },
  {
    src: '/img/ALIMENTO2.webp',
    alt: 'Ensaladas nutritivas',
    size: { width: 180, height: 250 }
  },
  {
    src: '/img/ALIMENTO3.jpeg',
    alt: 'Aguacates ricos en omega',
    size: { width: 310, height: 160 }
  },
  {
    src: '/img/ALIMENTO4.jpg',
    alt: 'Platos vegetales nutritivos',
    size: { width: 190, height: 260 }
  },
  {
    src: '/img/ALIMENTO5.jpeg',
    alt: 'Salmón rico en omega-3',
    size: { width: 310, height: 190 }
  },
  {
    src: '/img/ALIMENTO6.avif',
    alt: 'Bayas antioxidantes naturales',
    size: { width: 230, height: 230 }
  },
  {
    src: '/img/ALIMENTOSMART.jpg',
    alt: 'Mesa de alimentos saludables',
    size: { width: 300, height: 200 }
  },
  // Tercera rotación con tamaños diferentes
  {
    src: '/img/IMG1.jpg',
    alt: 'Quinoa y granos nutritivos',
    size: { width: 180, height: 270 }
  },
  {
    src: '/img/IMG2.webp',
    alt: 'Tomates frescos ricos en licopeno',
    size: { width: 240, height: 190 }
  },
  {
    src: '/img/ALIMENTO1.jpg',
    alt: 'Brócoli rico en vitaminas',
    size: { width: 280, height: 160 }
  },
  {
    src: '/img/ALIMENTO2.webp',
    alt: 'Batido verde detox',
    size: { width: 170, height: 250 }
  },
  {
    src: '/img/ALIMENTO3.jpeg',
    alt: 'Meal prep saludable',
    size: { width: 310, height: 190 }
  },
  {
    src: '/img/ALIMENTO4.jpg',
    alt: 'Especias medicinales',
    size: { width: 230, height: 230 }
  },
  {
    src: '/img/ALIMENTO5.jpeg',
    alt: 'Estilo de vida saludable',
    size: { width: 270, height: 230 }
  },
  {
    src: '/img/ALIMENTO6.avif',
    alt: 'Lentejas ricas en proteína',
    size: { width: 200, height: 200 }
  },
  {
    src: '/img/ALIMENTOSMART.jpg',
    alt: 'Arándanos antioxidantes',
    size: { width: 250, height: 190 }
  },
  // Cuarta rotación para máxima variedad
  {
    src: '/img/IMG1.jpg',
    alt: 'Kale superfood nutritivo',
    size: { width: 220, height: 150 }
  },
  {
    src: '/img/IMG2.webp',
    alt: 'Smoothies verdes saludables',
    size: { width: 300, height: 220 }
  },
  {
    src: '/img/ALIMENTO1.jpg',
    alt: 'Investigación científica nutricional',
    size: { width: 260, height: 190 }
  }
];

interface ImageCollageProps {
  isActive: boolean;
}

export const ImageCollage: React.FC<ImageCollageProps> = ({ isActive }) => {
  const [activeImages, setActiveImages] = useState<number[]>([]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setActiveImages(prev => {
        // Mostrar máximo 20 imágenes al mismo tiempo para llenar completamente el espacio
        if (prev.length >= 20) {
          // Quitar 2 imágenes más antiguas y agregar 2 nuevas
          const newPrev = prev.slice(2);
          const availableImages = images
            .map((_, index) => index)
            .filter(index => !newPrev.includes(index));
          
          if (availableImages.length > 1) {
            const randomIndex1 = availableImages[Math.floor(Math.random() * availableImages.length)];
            const filteredAvailable = availableImages.filter(i => i !== randomIndex1);
            const randomIndex2 = filteredAvailable.length > 0 
              ? filteredAvailable[Math.floor(Math.random() * filteredAvailable.length)]
              : randomIndex1;
            return [...newPrev, randomIndex1, randomIndex2];
          }
          return newPrev;
        } else {
          // Agregar 2 nuevas imágenes para llenar más rápido
          const availableImages = images
            .map((_, index) => index)
            .filter(index => !prev.includes(index));
          
          if (availableImages.length > 1) {
            const randomIndex1 = availableImages[Math.floor(Math.random() * availableImages.length)];
            const filteredAvailable = availableImages.filter(i => i !== randomIndex1);
            const randomIndex2 = filteredAvailable.length > 0 
              ? filteredAvailable[Math.floor(Math.random() * filteredAvailable.length)]
              : randomIndex1;
            return [...prev, randomIndex1, randomIndex2];
          } else if (availableImages.length > 0) {
            const randomIndex = availableImages[Math.floor(Math.random() * availableImages.length)];
            return [...prev, randomIndex];
          }
          return prev;
        }
      });
    }, 1500); // Más rápido - cambiar cada 1.5 segundos para mayor densidad

    return () => clearInterval(interval);
  }, [isActive]);

  const getRandomPosition = (imageIndex: number) => {
    // Dividimos las posiciones en zonas para asegurar distribución equilibrada
    const topPositions = [
      // Esquina superior izquierda - más posiciones
      { top: '1%', left: '1%' },
      { top: '5%', left: '3%' },
      { top: '8%', left: '8%' },
      { top: '12%', left: '6%' },
      { top: '15%', left: '2%' },
      
      // Parte superior central - más densidad
      { top: '1%', left: '20%' },
      { top: '3%', left: '30%' },
      { top: '2%', left: '45%' },
      { top: '6%', left: '55%' },
      { top: '4%', left: '65%' },
      { top: '8%', left: '40%' },
      { top: '10%', left: '75%' },
      
      // Esquina superior derecha - más cobertura
      { top: '1%', right: '1%' },
      { top: '5%', right: '4%' },
      { top: '9%', right: '8%' },
      { top: '13%', right: '6%' },
      { top: '17%', right: '12%' },
      { top: '11%', right: '15%' }
    ];

    const middlePositions = [
      // Lado izquierdo medio
      { top: '22%', left: '1%' },
      { top: '28%', left: '4%' },
      { top: '35%', left: '2%' },
      { top: '42%', left: '5%' },
      { top: '48%', left: '1%' },
      { top: '55%', left: '3%' },
      
      // Centro izquierda - más distribución
      { top: '20%', left: '15%' },
      { top: '25%', left: '20%' },
      { top: '32%', left: '18%' },
      { top: '38%', left: '22%' },
      { top: '45%', left: '16%' },
      { top: '52%', left: '24%' },
      
      // Centro - zona media
      { top: '23%', left: '38%' },
      { top: '29%', left: '45%' },
      { top: '36%', left: '42%' },
      { top: '43%', left: '48%' },
      { top: '50%', left: '40%' },
      { top: '57%', left: '46%' },
      
      // Centro derecha - más distribución  
      { top: '21%', right: '18%' },
      { top: '27%', right: '22%' },
      { top: '34%', right: '16%' },
      { top: '41%', right: '24%' },
      { top: '47%', right: '20%' },
      { top: '54%', right: '18%' },
      
      // Lado derecho medio
      { top: '24%', right: '1%' },
      { top: '31%', right: '4%' },
      { top: '37%', right: '2%' },
      { top: '44%', right: '5%' },
      { top: '51%', right: '1%' },
      { top: '58%', right: '3%' }
    ];

    const bottomPositions = [
      // Parte inferior izquierda - más posiciones
      { top: '62%', left: '6%' },
      { top: '68%', left: '2%' },
      { top: '72%', left: '10%' },
      { top: '76%', left: '25%' },
      { bottom: '18%', left: '2%' },
      { bottom: '14%', left: '6%' },
      { bottom: '10%', left: '4%' },
      { bottom: '6%', left: '8%' },
      { bottom: '2%', left: '5%' },
      { bottom: '12%', left: '12%' },
      
      // Parte inferior central - más densidad
      { top: '58%', left: '19%' },
      { top: '65%', left: '21%' },
      { top: '61%', right: '25%' },
      { top: '67%', right: '19%' },
      { top: '64%', right: '6%' },
      { top: '70%', right: '2%' },
      { bottom: '15%', left: '25%' },
      { bottom: '8%', left: '35%' },
      { bottom: '5%', left: '45%' },
      { bottom: '10%', left: '55%' },
      { bottom: '7%', left: '65%' },
      { bottom: '3%', left: '75%' },
      { bottom: '12%', left: '40%' },
      { bottom: '4%', left: '30%' },
      { bottom: '22%', left: '30%' },
      { bottom: '28%', right: '35%' },
      { bottom: '35%', left: '60%' },
      { bottom: '25%', right: '50%' },
      
      // Esquina inferior derecha - más posiciones
      { top: '78%', right: '30%' },
      { top: '74%', right: '45%' },
      { bottom: '1%', right: '1%' },
      { bottom: '5%', right: '4%' },
      { bottom: '9%', right: '7%' },
      { bottom: '13%', right: '5%' },
      { bottom: '17%', right: '11%' },
      { bottom: '11%', right: '14%' }
    ];

    // Forzamos una distribución más equilibrada: 25% top, 40% middle, 35% bottom
    const zone = imageIndex % 20; // Ciclo de 20 imágenes para distribución
    
    if (zone < 5) {
      // 25% en la zona superior
      return topPositions[imageIndex % topPositions.length];
    } else if (zone < 13) {
      // 40% en la zona media 
      return middlePositions[imageIndex % middlePositions.length];
    } else {
      // 35% en la zona inferior
      return bottomPositions[imageIndex % bottomPositions.length];
    }
  };

  const getRandomAnimation = () => {
    const animations = [
      {
        initial: { opacity: 0, scale: 0.6, rotate: -8 },
        animate: { opacity: 0.85, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 0.9, rotate: 8, y: -30 }
      },
      {
        initial: { opacity: 0, x: -60, rotate: 5 },
        animate: { opacity: 0.85, x: 0, rotate: 0 },
        exit: { opacity: 0, x: 60, scale: 0.95 }
      },
      {
        initial: { opacity: 0, y: 60, scale: 0.7 },
        animate: { opacity: 0.85, y: 0, scale: 1 },
        exit: { opacity: 0, y: -60, rotate: -5 }
      },
      {
        initial: { opacity: 0, scale: 0.5, rotate: 20 },
        animate: { opacity: 0.85, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 1.1, rotate: -20 }
      },
      {
        initial: { opacity: 0, x: 50, y: -50, scale: 0.6 },
        animate: { opacity: 0.85, x: 0, y: 0, scale: 1 },
        exit: { opacity: 0, x: -50, y: 50, scale: 0.8 }
      },
      {
        initial: { opacity: 0, scale: 0.4, rotate: -30 },
        animate: { opacity: 0.85, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 0.6, rotate: 30, y: 40 }
      }
    ];
    return animations[Math.floor(Math.random() * animations.length)];
  };

  return (
    <CollageContainer>
      <AnimatePresence>
        {activeImages.map((imageIndex, i) => {
          const image = images[imageIndex];
          const position = getRandomPosition(imageIndex);
          const animation = getRandomAnimation();
          
          return (
            <FloatingImage
              key={`${imageIndex}-${i}`}
              src={image.src}
              alt={image.alt}
              width={image.size.width}
              height={image.size.height}
              style={position}
              initial={animation.initial}
              animate={animation.animate}
              exit={animation.exit}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94] // ease-out más suave
              }}
            />
          );
        })}
      </AnimatePresence>
    </CollageContainer>
  );
};

export default ImageCollage;
