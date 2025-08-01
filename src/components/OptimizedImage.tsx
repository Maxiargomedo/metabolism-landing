'use client';

import Image from 'next/image';
import { useState } from 'react';
import { generateBlurDataURL } from '../utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 400,
  height = 300,
  priority = false,
  className = '',
  style = {},
  placeholder = 'blur',
  blurDataURL,
  fill = false,
  sizes,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    // Maneja el error silenciosamente sin mostrar en consola
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Si hay error, mostra un placeholder
  if (imageError) {
    return (
      <div
        className={className}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          backgroundColor: '#f3f4f6',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af',
          fontSize: '14px',
          ...style
        }}
      >
        📷
      </div>
    );
  }

  const imageProps: any = {
    src,
    alt,
    priority,
    className,
    style,
    onError: handleError,
    onLoad: handleLoad,
    ...props
  };

  // Si no es fill, agregar width y height
  if (!fill) {
    imageProps.width = width;
    imageProps.height = height;
  } else {
    imageProps.fill = true;
    if (sizes) {
      imageProps.sizes = sizes;
    }
  }

  // Agregar blur placeholder
  if (placeholder === 'blur') {
    imageProps.placeholder = 'blur';
    imageProps.blurDataURL = blurDataURL || generateBlurDataURL(width, height);
  }

  return <Image {...imageProps} />;
};

export default OptimizedImage;
