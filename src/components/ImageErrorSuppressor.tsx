'use client';

import { useEffect } from 'react';
import { suppressImageErrors } from '../utils/imageOptimization';

interface ImageErrorSuppressorProps {
  children: React.ReactNode;
}

const ImageErrorSuppressor: React.FC<ImageErrorSuppressorProps> = ({ children }) => {
  useEffect(() => {
    // Activar la supresión de errores de imagen en el lado del cliente
    suppressImageErrors();
  }, []);

  return <>{children}</>;
};

export default ImageErrorSuppressor;
