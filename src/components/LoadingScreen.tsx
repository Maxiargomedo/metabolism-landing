'use client';

import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  minimumLoadingTime?: number; // Tiempo mínimo para mostrar la pantalla de carga (en ms)
}

const LoadingWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111827;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Logo = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #E0E0E0;
    text-align: center;
  }
`;

const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  
  div {
    height: 100%;
    background: linear-gradient(92deg, #4CAF50 0%, #8BC34A 100%);
  }
`;

export default function LoadingScreen({ minimumLoadingTime = 1500 }: LoadingScreenProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
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
      
      // Añadimos un tiempo mínimo para mostrar la pantalla de carga
      setTimeout(() => {
        setLoading(false);
      }, minimumLoadingTime);
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
  }, [minimumLoadingTime]);
  
  return (
    <AnimatePresence>
      {loading && (
        <LoadingWrapper
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>
            <h1>MetaboLife</h1>
            <p>NUTRITION & WELLNESS</p>
          </Logo>
          <ProgressBar>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </ProgressBar>
        </LoadingWrapper>
      )}
    </AnimatePresence>
  );
}
