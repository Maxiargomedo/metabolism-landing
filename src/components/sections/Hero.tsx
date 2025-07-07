'use client';

// import { useAnalytics } from '@/src/hooks/useAnalytics';

export default function Hero() {
  // const { trackClick } = useAnalytics();

  const scrollTo = (target: string) => {
    // trackClick('cta_button', target);
    if (typeof window !== 'undefined') {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background moderno y sutil - Inspirado en Sonos */}
      <div className="absolute inset-0">
        {/* Gradiente base suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-white to-emerald-50/70"></div>
        
        {/* Mesh gradient muy sutil */}
        <div className="absolute inset-0 nature-gradient-mesh"></div>
        
        {/* Overlay de líneas diagonales sutiles */}
        <div className="absolute inset-0 sonos-lines opacity-30"></div>
        
        {/* Elementos gráficos minimalistas - Estilo Sonos */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-green-300/4 to-emerald-400/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-1/3 w-80 h-80 bg-gradient-to-br from-lime-300/5 to-green-400/3 rounded-full blur-3xl"></div>
        
        {/* Círculos geométricos sutiles */}
        <div className="absolute top-1/4 right-20 w-32 h-32 border border-green-200/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-16 w-24 h-24 border border-emerald-200/15 rounded-full"></div>
        
        {/* Línea vertical sutil */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-200/20 to-transparent"></div>
      </div>

      {/* Elementos minimalistas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Iconos sutiles de naturaleza */}
        <div className="absolute top-32 left-20 opacity-5 animate-float">
          <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 right-32 opacity-4 animate-float-delayed">
          <svg className="w-10 h-10 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L10.91 8.26L12 2Z"/>
          </svg>
        </div>
        
        {/* Puntos decorativos minimalistas */}
        <div className="absolute top-1/4 right-20 w-1.5 h-1.5 bg-green-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 left-16 w-2 h-2 bg-emerald-400 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-lime-400 rounded-full opacity-25"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 glass-green rounded-full text-green-800 text-sm font-semibold shadow-nature">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                🌿 Salud Natural y Metabolismo
              </div>
              
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="heading-xl gradient-text leading-tight">
                  Transforma tu Salud
                  <span className="block text-green-700">
                    con el Poder de la
                  </span>
                  <span className="block bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent">
                    Naturaleza
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                  Descubre los secretos del metabolismo saludable a través de la 
                  <span className="font-semibold text-green-700"> nutrición natural</span>, 
                  respaldados por la ciencia y la sabiduría ancestral.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollTo('#nature-carousel')}
                  className="group relative btn-primary overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    🌱 Explorar Naturaleza
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                
                <button
                  onClick={() => scrollTo('#healthy-eating')}
                  className="group btn-secondary"
                >
                  <span className="flex items-center">
                    📚 Aprende Más
                    <svg className="w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-green-200/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">1000+</div>
                  <div className="text-sm text-gray-600">Personas Transformadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">95%</div>
                  <div className="text-sm text-gray-600">Mejora Metabólica</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">100%</div>
                  <div className="text-sm text-gray-600">Natural y Seguro</div>
                </div>
              </div>
            </div>

            {/* Visual Column - Estilo Sonos Moderno */}
            <div className="relative">
              {/* Contenedor principal con efectos sutiles */}
              <div className="relative">
                {/* Fondo gráfico muy sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-300/8 to-emerald-400/6 rounded-3xl blur-xl transform rotate-1"></div>
                
                {/* Card principal modernizada */}
                <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl border border-green-100/60 shadow-nature p-6 lg:p-8 transform hover:scale-[1.01] transition-all duration-500">
                  {/* Imagen principal */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=700&fit=crop&crop=center"
                      alt="Alimentación saludable natural"
                      className="w-full h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay minimalista */}
                    <div className="absolute inset-0 sonos-overlay-light"></div>
                    
                    {/* Badge flotante optimizado */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xl p-3 rounded-xl border border-green-200/50 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-800 font-medium text-sm">Nutrición Natural</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Elementos decorativos minimalistas */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-l border-t border-green-300/60 rounded-tl-lg"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r border-b border-emerald-300/60 rounded-br-lg"></div>
                </div>
              </div>

              {/* Cards flotantes mejoradas - más sutiles */}
              <div className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-xl rounded-xl border border-green-200/40 p-3 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-green-800 text-xs">Metabolismo</div>
                    <div className="text-xs text-green-600">Optimizado</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-xl rounded-xl border border-emerald-200/40 p-3 shadow-lg animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-lime-500 to-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-green-800 text-xs">Resultados</div>
                    <div className="text-xs text-green-600">Comprobados</div>
                  </div>
                </div>
              </div>

              {/* Elementos gráficos geométricos sutiles */}
              <div className="absolute top-1/2 -right-6 w-12 h-12 border border-green-200/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-100/60 rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-8 left-8 w-16 h-0.5 bg-gradient-to-r from-green-300/60 to-emerald-300/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator moderno - Estilo Sonos */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollTo('#reading')}
          className="group flex flex-col items-center space-y-2 text-green-700/80 hover:text-green-600 transition-all duration-300"
        >
          <span className="text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">
            Explorar contenido
          </span>
          <div className="relative">
            {/* Scroll indicator minimalista */}
            <div className="w-6 h-10 border border-green-300/50 rounded-full flex justify-center bg-white/20 backdrop-blur-sm group-hover:border-green-400/70 transition-all duration-300">
              <div className="w-0.5 h-2 bg-green-500/80 rounded-full mt-2 animate-bounce group-hover:bg-green-600 transition-colors"></div>
            </div>
            
            {/* Puntos decorativos sutiles */}
            <div className="absolute -left-1 top-1/2 w-0.5 h-0.5 bg-green-400/40 rounded-full"></div>
            <div className="absolute -right-1 top-1/3 w-0.5 h-0.5 bg-emerald-400/30 rounded-full"></div>
          </div>
          
          {/* Línea sutil hacia abajo */}
          <div className="w-px h-6 bg-gradient-to-b from-green-300/40 to-transparent"></div>
        </button>
      </div>
    </section>
  );
}
