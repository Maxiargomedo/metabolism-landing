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

const images = [
  {
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop&crop=center',
    alt: 'Alimentos saludables',
    size: { width: 250, height: 190 }
  },
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop&crop=center',
    alt: 'Vegetales frescos',
    size: { width: 220, height: 150 }
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=250&h=250&fit=crop&crop=center',
    alt: 'Frutas nutritivas',
    size: { width: 200, height: 200 }
  },
  {
    src: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=350&h=200&fit=crop&crop=center',
    alt: 'Análisis nutricional',
    size: { width: 280, height: 170 }
  },
  {
    src: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=200&h=300&fit=crop&crop=center',
    alt: 'Estilo de vida saludable',
    size: { width: 170, height: 250 }
  },
  {
    src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop&crop=center',
    alt: 'Alimentación consciente',
    size: { width: 300, height: 200 }
  },
  {
    src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop&crop=center',
    alt: 'Nutrientes esenciales',
    size: { width: 220, height: 220 }
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=350&h=200&fit=crop&crop=center',
    alt: 'Comida mediterránea',
    size: { width: 270, height: 180 }
  },
  {
    src: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=300&h=250&fit=crop&crop=center',
    alt: 'Superalimentos',
    size: { width: 240, height: 200 }
  },
  {
    src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&crop=center',
    alt: 'Planificación nutricional',
    size: { width: 290, height: 220 }
  },
  {
    src: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=250&h=200&fit=crop&crop=center',
    alt: 'Granos y cereales',
    size: { width: 210, height: 170 }
  },
  {
    src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=400&fit=crop&crop=center',
    alt: 'Frutas y verduras',
    size: { width: 200, height: 280 }
  },
  {
    src: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?w=350&h=250&fit=crop&crop=center',
    alt: 'Investigación científica',
    size: { width: 260, height: 190 }
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center',
    alt: 'Análisis de laboratorio',
    size: { width: 230, height: 230 }
  },
  {
    src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=250&h=350&fit=crop&crop=center',
    alt: 'Batidos saludables',
    size: { width: 180, height: 250 }
  },
  {
    src: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&h=200&fit=crop&crop=center',
    alt: 'Ingredientes naturales',
    size: { width: 310, height: 160 }
  },
  {
    src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=250&fit=crop&crop=center',
    alt: 'Cocina saludable',
    size: { width: 240, height: 200 }
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=350&h=300&fit=crop&crop=center',
    alt: 'Ensaladas frescas',
    size: { width: 270, height: 220 }
  },
  {
    src: 'https://images.unsplash.com/photo-1599459183200-59c7687a0275?w=200&h=300&fit=crop&crop=center',
    alt: 'Proteínas saludables',
    size: { width: 160, height: 240 }
  },
  {
    src: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=300&h=200&fit=crop&crop=center',
    alt: 'Dieta equilibrada',
    size: { width: 230, height: 150 }
  },
  {
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=350&h=250&fit=crop&crop=center',
    alt: 'Omega 3 y pescado',
    size: { width: 260, height: 190 }
  },
  {
    src: 'https://images.unsplash.com/photo-1587562835371-e3ec9d3befea?w=300&h=300&fit=crop&crop=center',
    alt: 'Frutos secos',
    size: { width: 220, height: 220 }
  },
  {
    src: 'https://images.unsplash.com/photo-1609501676725-7186f08af4c7?w=250&h=400&fit=crop&crop=center',
    alt: 'Verduras orgánicas',
    size: { width: 180, height: 270 }
  },
  {
    src: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=300&fit=crop&crop=center',
    alt: 'Smoothie bowls',
    size: { width: 300, height: 220 }
  },
  {
    src: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91d?w=300&h=250&fit=crop&crop=center',
    alt: 'Meal prep saludable',
    size: { width: 240, height: 190 }
  },
  {
    src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=350&h=200&fit=crop&crop=center',
    alt: 'Hierbas y especias',
    size: { width: 280, height: 160 }
  },
  {
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=250&h=350&fit=crop&crop=center',
    alt: 'Comida vegetariana',
    size: { width: 190, height: 260 }
  },
  {
    src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=250&fit=crop&crop=center',
    alt: 'Cocina consciente',
    size: { width: 310, height: 190 }
  },
  {
    src: 'https://images.unsplash.com/photo-1515543904379-3d0e229d8ed4?w=300&h=300&fit=crop&crop=center',
    alt: 'Antioxidantes naturales',
    size: { width: 230, height: 230 }
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=350&h=300&fit=crop&crop=center',
    alt: 'Hamburguesa saludable',
    size: { width: 270, height: 230 }
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
        // Mostrar máximo 18 imágenes al mismo tiempo para llenar completamente el espacio
        if (prev.length >= 18) {
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
          // Agregar 1-2 nuevas imágenes
          const availableImages = images
            .map((_, index) => index)
            .filter(index => !prev.includes(index));
          
          if (availableImages.length > 0) {
            const randomIndex = availableImages[Math.floor(Math.random() * availableImages.length)];
            return [...prev, randomIndex];
          }
          return prev;
        }
      });
    }, 1800); // Más lento - cambiar cada 1.8 segundos para animaciones más suaves

    return () => clearInterval(interval);
  }, [isActive]);

  const getRandomPosition = (imageIndex: number) => {
    const positions = [
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
      { top: '11%', right: '15%' },
      
      // Lado izquierdo completo
      { top: '22%', left: '1%' },
      { top: '28%', left: '4%' },
      { top: '35%', left: '2%' },
      { top: '42%', left: '5%' },
      { top: '48%', left: '1%' },
      { top: '55%', left: '3%' },
      { top: '62%', left: '6%' },
      { top: '68%', left: '2%' },
      
      // Centro izquierda - más distribución
      { top: '20%', left: '15%' },
      { top: '25%', left: '20%' },
      { top: '32%', left: '18%' },
      { top: '38%', left: '22%' },
      { top: '45%', left: '16%' },
      { top: '52%', left: '24%' },
      { top: '58%', left: '19%' },
      { top: '65%', left: '21%' },
      
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
      { top: '61%', right: '25%' },
      { top: '67%', right: '19%' },
      
      // Lado derecho completo
      { top: '24%', right: '1%' },
      { top: '31%', right: '4%' },
      { top: '37%', right: '2%' },
      { top: '44%', right: '5%' },
      { top: '51%', right: '1%' },
      { top: '58%', right: '3%' },
      { top: '64%', right: '6%' },
      { top: '70%', right: '2%' },
      
      // Parte inferior izquierda
      { bottom: '18%', left: '2%' },
      { bottom: '14%', left: '6%' },
      { bottom: '10%', left: '4%' },
      { bottom: '6%', left: '8%' },
      { bottom: '2%', left: '5%' },
      { bottom: '12%', left: '12%' },
      
      // Parte inferior central - más densidad
      { bottom: '15%', left: '25%' },
      { bottom: '8%', left: '35%' },
      { bottom: '5%', left: '45%' },
      { bottom: '10%', left: '55%' },
      { bottom: '7%', left: '65%' },
      { bottom: '3%', left: '75%' },
      { bottom: '12%', left: '40%' },
      { bottom: '4%', left: '30%' },
      
      // Esquina inferior derecha
      { bottom: '1%', right: '1%' },
      { bottom: '5%', right: '4%' },
      { bottom: '9%', right: '7%' },
      { bottom: '13%', right: '5%' },
      { bottom: '17%', right: '11%' },
      { bottom: '11%', right: '14%' },
      
      // Posiciones adicionales para llenar huecos
      { top: '72%', left: '10%' },
      { top: '76%', left: '25%' },
      { top: '78%', right: '30%' },
      { top: '74%', right: '45%' },
      { top: '18%', left: '72%' },
      { top: '33%', left: '78%' },
      { bottom: '22%', left: '30%' },
      { bottom: '28%', right: '35%' },
      { bottom: '35%', left: '60%' },
      { bottom: '25%', right: '50%' }
    ];
    return positions[imageIndex % positions.length];
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
