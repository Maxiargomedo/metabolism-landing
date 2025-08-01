// Utilidades para optimización de imágenes y manejo de errores

export const generateBlurDataURL = (width: number = 8, height: number = 8) => {
  // Genera un blurDataURL base genérico para usar como placeholder
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="#f3f4f6"/></svg>`
  ).toString('base64')}`;
};

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  // Maneja errores de imágenes sin mostrarlos en consola
  event.preventDefault();
  const img = event.target as HTMLImageElement;
  
  // Silenciosamente reemplaza con una imagen placeholder
  img.src = generateBlurDataURL(400, 300);
  img.style.backgroundColor = '#f3f4f6';
  img.style.border = '1px solid #e5e7eb';
};

export const suppressImageErrors = () => {
  // Suprime errores de imágenes en la consola
  const originalConsoleError = console.error;
  
  console.error = (...args) => {
    // Filtra errores relacionados con imágenes
    const errorMessage = args[0]?.toString?.() || '';
    
    if (
      errorMessage.includes('404') ||
      errorMessage.includes('Failed to load resource') ||
      errorMessage.includes('img') ||
      errorMessage.includes('image') ||
      errorMessage.includes('.jpg') ||
      errorMessage.includes('.png') ||
      errorMessage.includes('.jpeg') ||
      errorMessage.includes('.webp') ||
      errorMessage.includes('.avif')
    ) {
      // No mostrar errores de imágenes en la consola
      return;
    }
    
    // Mostrar otros errores normalmente
    originalConsoleError.apply(console, args);
  };
};

export default {
  generateBlurDataURL,
  handleImageError,
  suppressImageErrors
};
