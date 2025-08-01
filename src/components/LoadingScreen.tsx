'use client';

import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLoadingLogo from './AnimatedLoadingLogo';

interface LoadingScreenProps {
  minimumLoadingTime?: number; // Tiempo mínimo para mostrar la pantalla de carga (en ms)
}

const LoadingWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background-color, #ffffff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999999;
`;

const PageRevealMask = styled(motion.div)<{ maskRadius?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background-color);
  z-index: 999998;
  mask: ${props => props.maskRadius || 'radial-gradient(circle at center, transparent 75px, black 76px)'};
  -webkit-mask: ${props => props.maskRadius || 'radial-gradient(circle at center, transparent 75px, black 76px)'};
  pointer-events: none;
`;

const LogoContainer = styled(motion.div)`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background: var(--border-color);
  border-radius: 2px;
  overflow: hidden;
  
  div {
    height: 100%;
    background: linear-gradient(92deg, var(--primary-color) 0%, var(--primary-light) 100%);
  }
`;

export default function LoadingScreen({ minimumLoadingTime = 1500 }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);
  const [shouldExpandLogo, setShouldExpandLogo] = useState(false);
  const [showPageThrough, setShowPageThrough] = useState(false);
  const [maskRadius, setMaskRadius] = useState('75px');
  
  useEffect(() => {
    // Simulamos el progreso de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        // Incrementos progresivamente más pequeños a medida que se acerca al 100%
        const remaining = 100 - prev;
        const increment = Math.max(1, Math.floor(remaining / 10));
        const newProgress = Math.min(99, prev + increment); // Nunca llegamos a 100 hasta que todo esté listo
        return newProgress;
      });
    }, 100);
    
    // Detectamos cuando la página está completamente cargada
    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      
      // Esperamos a que termine la animación del logo antes de iniciar la expansión
      if (logoAnimationComplete) {
        setTimeout(() => {
          setShowPageThrough(true);
          // Después de un momento, quitamos todo
          setTimeout(() => {
            setShouldExpandLogo(true);
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }, 1000);
        }, 300);
      }
    };
    
    // Si la página ya está cargada cuando el componente se monta
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoad);
    };
  }, [minimumLoadingTime, logoAnimationComplete]);
  
  // Cuando la animación del logo termina, verificamos si podemos iniciar la expansión
  useEffect(() => {
    if (logoAnimationComplete && progress === 100) {
      setTimeout(() => {
        setShowPageThrough(true);
        // Después de un momento, quitamos todo
        setTimeout(() => {
          setShouldExpandLogo(true);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        }, 1000);
      }, 300);
    }
  }, [logoAnimationComplete, progress]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingWrapper
            initial={{ opacity: 1 }}
            animate={shouldExpandLogo ? { 
              opacity: [1, 0.8, 0.5, 0.2, 0],
              background: [
                "rgba(var(--background-color-rgb), 1)",
                "rgba(var(--background-color-rgb), 0.8)",
                "rgba(var(--background-color-rgb), 0.5)",
                "rgba(var(--background-color-rgb), 0.2)",
                "rgba(var(--background-color-rgb), 0)"
              ]
            } : { opacity: 1 }}
            transition={shouldExpandLogo ? {
              duration: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
              times: [0, 0.2, 0.5, 0.8, 1]
            } : {
              duration: 0.5
            }}
          >
            <LogoContainer
              initial={{ scale: 0.8, opacity: 0 }}
              animate={showPageThrough ? { 
                scale: 1, 
                opacity: 0 
              } : { 
                scale: 1, 
                opacity: 1 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <AnimatedLoadingLogo 
                onAnimationComplete={() => setLogoAnimationComplete(true)}
                shouldExpand={shouldExpandLogo}
              />
            </LogoContainer>
            <ProgressBar
              initial={{ opacity: 1 }}
              animate={showPageThrough ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </ProgressBar>
          </LoadingWrapper>
        )}
      </AnimatePresence>
      
      {/* Máscara circular que revela la página */}
      <AnimatePresence>
        {showPageThrough && !shouldExpandLogo && (
          <PageRevealMask
            maskRadius={`radial-gradient(circle at center, transparent ${maskRadius}, black ${maskRadius === '75px' ? '76px' : '151vh'})`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
