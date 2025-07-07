'use client';

// import { useLenis } from '@/src/hooks/useLenis';

export default function Footer() {
  // const { scrollTo } = useLenis();

  const handleScrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Metabolismo Pro
            </span>
          </h3>
          <p className="text-gray-400 mb-8">
            Transformamos vidas a través de la ciencia de la nutrición y el metabolismo.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Volver al inicio
          </button>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2025 Metabolismo Pro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}