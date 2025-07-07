'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTop - Componente para asegurar que la página se desplace al inicio
 * cuando se navega o recarga la página
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll al inicio cuando cambia la ruta o se recarga la página
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
