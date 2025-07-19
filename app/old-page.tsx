'use client';

import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../src/components/UI/Header';
import HeroSection from '../src/components/UI/HeroSection';
import About from '../src/components/UI/About';
import Services from '../src/components/UI/Services';
import Contact from '../src/components/UI/Contact';
import Footer from '../src/components/UI/Footer';

// Define global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3ECF8E;
    --primary-light: #6EDEA8;
    --primary-dark: #2AAB72;
    --secondary-color: #1F2937;
    --text-color: #F9FAFB;
    --background-color: #111827;
    --card-background: rgba(31, 41, 55, 0.8);
    --glass-background: rgba(255, 255, 255, 0.1);
    --border-color: rgba(255, 255, 255, 0.1);
    --shadow-color: rgba(0, 0, 0, 0.2);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    overflow-x: hidden;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
`;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Use a static value for SSR that doesn't change on the client
  const SSRValue = 0; 

  useEffect(() => {
    // Only set isLoaded to true on the client side
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

  return (
    <>
      {/* Cursor premium magnético */}
      <div 
        ref={cursorRef}
        className="cursor-trail fixed pointer-events-none z-50 mix-blend-screen"
        style={{ 
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />

      <main className={`relative cursor-magnetic transition-all duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Navigation Ultra Premium */}
        <nav className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          scrollY > 50 
            ? 'glass-nature-premium border-b border-spring-green/20 shadow-2xl shadow-forest-green/20' 
            : 'glass-premium border-b border-spring-green/10'
        }`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo artístico premium */}
              <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('hero')}>
                <div className="relative">
                  <div className="absolute inset-0 bg-spring-green/20 blur-xl rounded-full animate-organic-pulse"></div>
                  <div className="relative glass-nature-premium p-4 rounded-3xl transform group-hover:rotate-12 transition-all duration-700 hover-magnetic">
                    <div className="text-3xl animate-liquid-flow">🌱</div>
                  </div>
                </div>
                <div className="ml-5">
                  <h1 className="text-3xl font-display font-bold text-gradient-premium">
                    MetaboLife
                  </h1>
                  <div className="text-xs text-shimmer font-inter font-light tracking-[0.2em] uppercase">
                    Nutrition & Wellness
                  </div>
                </div>
                
                {/* Reloj artístico premium */}
                <div className="ml-10 hidden lg:block">
                  <div className="glass-premium px-6 py-3 rounded-2xl neomorphic-inset">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-spring-green rounded-full animate-organic-pulse"></div>
                      <span className="text-sm text-gradient-premium font-mono-premium tracking-wider">
                        {currentTime.toLocaleTimeString('es-ES', { 
                          hour: '2-digit', 
                          minute: '2-digit',
                          second: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu profesional premium */}
              <div className="hidden md:flex items-center space-x-2">
                {[
                  { name: 'Inicio', target: 'hero', icon: '🏠', gradient: 'from-spring-green to-mint-green' },
                  { name: 'Acerca', target: 'about', icon: '📖', gradient: 'from-mint-green to-lime-green' },
                  { name: 'Servicios', target: 'services', icon: '🌟', gradient: 'from-lime-green to-emerald-green' },
                  { name: 'Contacto', target: 'contact', icon: '📞', gradient: 'from-emerald-green to-spring-green' }
                ].map((item, index) => (
                  <button 
                    key={item.name}
                    onClick={() => scrollToSection(item.target)} 
                    className={`group relative px-8 py-4 text-sm font-inter font-medium transition-all duration-500 hover-elevate-premium rounded-2xl ${
                      activeSection === item.target 
                        ? 'glass-nature-premium text-spring-green scale-105' 
                        : 'text-sage-green hover:text-spring-green'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <span className="flex items-center space-x-3 relative z-10">
                      <span className={`text-lg transition-all duration-300 ${
                        activeSection === item.target ? 'scale-110' : 'opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100'
                      }`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </span>
                    
                    {/* Efecto de activación holográfico */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500 animate-crystalline-shimmer`}></div>
                    
                    {/* Borde inferior dinámico */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${item.gradient} transition-all duration-500 rounded-full ${
                      activeSection === item.target ? 'w-full opacity-100' : 'w-0 group-hover:w-3/4 opacity-70'
                    }`}></div>
                  </button>
                ))}
                
                {/* CTA Button ultra premium */}
                <div className="ml-8">
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="group relative overflow-hidden gradient-animated-premium text-forest-green px-8 py-4 rounded-2xl font-inter font-semibold transition-all duration-700 hover-elevate-premium shadow-2xl hover:shadow-spring-green/50 neomorphic-outset"
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      <span className="animate-magnetic-pull">✨</span>
                      <span>Comenzar</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    
                    {/* Efecto holográfico premium */}
                    <div className="absolute inset-0 gradient-holographic opacity-0 group-hover:opacity-100 transition-all duration-700 animate-crystalline-shimmer"></div>
                  </button>
                </div>
              </div>

              {/* Menu móvil premium */}
              <div className="md:hidden">
                <button className="relative w-12 h-12 rounded-2xl glass-nature-premium hover-magnetic flex items-center justify-center group">
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="h-0.5 bg-gradient-to-r from-spring-green to-mint-green rounded-full transform transition-all duration-300 group-hover:scale-110"
                        style={{ animationDelay: `${i * 100}ms` }}
                      ></div>
                    ))}
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Línea de progreso premium */}
          <div className="absolute bottom-0 left-0 scroll-progress-premium" 
               style={{ width: `${scrollProgress}%` }}>
          </div>
        </nav>

        {/* Hero Section Ultra Premium con efectos avanzados */}
        <section 
          id="hero" 
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 particle-system"
          data-parallax="0.5"
        >
          {/* Fondo dinámico premium que responde al mouse */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 gradient-holographic opacity-80"></div>
            
            {/* Orbes dinámicos premium - Valores estáticos para evitar hydration mismatch */}
            <div 
              className="absolute w-[500px] h-[500px] rounded-full animate-liquid-flow opacity-30 dynamic-orb-1"
              style={{
                background: `radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(52, 211, 153, 0.2) 50%, transparent 100%)`,
                left: '50px',
                top: '50px',
                transform: 'translate(-50%, -50%) scale(1)',
                filter: 'blur(20px)',
              }}
            ></div>
            
            <div 
              className="absolute w-[400px] h-[400px] rounded-full animate-floating-gradient opacity-25 dynamic-orb-2"
              style={{
                background: `conic-gradient(from 0deg, rgba(132, 204, 22, 0.3), rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.3))`,
                right: '100px',
                bottom: '100px',
                transform: 'translate(50%, 50%) scale(0.8)',
              }}
            ></div>

            {/* Sistema de partículas premium - Determinístico para evitar hydration mismatch */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(30)].map((_, i) => {
                // Use deterministic values based on index
                const width = 4 + (i % 8);
                const height = 4 + (i % 9);
                const opacity = 0.2 + (i % 7) / 10;
                const left = (i * 3) % 100;
                const top = (i * 7) % 100;
                const delay = (i * 0.3) % 10;
                const duration = 5 + (i % 8);
                const blur = (i % 2);
                
                return (
                  <div
                    key={i}
                    className="absolute rounded-full animate-floating-gradient"
                    style={{
                      width: `${width}px`,
                      height: `${height}px`,
                      background: `radial-gradient(circle, rgba(16, 185, 129, ${opacity}), transparent)`,
                      left: `${left}%`,
                      top: `${top}%`,
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`,
                      filter: `blur(${blur}px)`,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="text-left mb-8">
                {/* Título principal ultra premium */}
                <h1 
                  className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight transform transition-all duration-1000 hover-magnetic"
                  style={{
                    transform: `translateY(${scrollY * 0.3}px)`,
                    textShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(16, 185, 129, 0.3)',
                    filter: 'brightness(1.05)',
                  }}
                >
                  Metabolismo y{' '}
                  <span className="text-gradient-premium animate-crystalline-shimmer block mt-4">
                    Nutrición
                  </span>
                </h1>
                {/* Subtítulo premium */}
                <p 
                  className="text-2xl md:text-3xl font-inter text-mint-green/90 mb-12 leading-relaxed transition-all duration-1000"
                  style={{ transform: `translateY(${scrollY * 0.2}px)` }}
                >
                  Transforma tu vida con alimentación consciente y natural. Descubre el poder de una nutrición que respeta tu cuerpo y el planeta.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Cards de estadísticas */}
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg text-center">
                  <p className="text-4xl font-bold text-spring-green">1000+</p>
                  <p className="mt-2 font-medium">Personas Transformadas</p>
                  <p className="mt-1 text-2xl">📈</p>
                </div>
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg text-center">
                  <p className="text-4xl font-bold text-spring-green">95%</p>
                  <p className="mt-2 font-medium">Mejora Metabólica</p>
                  <p className="mt-1 text-2xl">🌿</p>
                </div>
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg text-center">
                  <p className="text-4xl font-bold text-spring-green">100%</p>
                  <p className="mt-2 font-medium">Natural y Seguro</p>
                </div>
                
                {/* Botones CTA */}
                <div className="mt-6 flex space-x-4 justify-end">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 bg-spring-green text-white rounded-lg transition hover:bg-mint-green"
                  >
                    Comenzar Ahora
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="px-6 py-3 bg-transparent border border-spring-green text-spring-green rounded-lg transition hover:bg-spring-green hover:text-white"
                  >
                    Aprender Más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section Ultra Premium con paralaje avanzado */}
        <section 
          id="about" 
          className="py-32 relative overflow-hidden"
          data-parallax="0.3"
          style={{
            background: `linear-gradient(135deg, 
              rgba(15, 23, 42, 0.95) 0%,
              rgba(30, 41, 59, 0.9) 25%,
              rgba(71, 85, 105, 0.85) 50%,
              rgba(16, 185, 129, 0.1) 100%)`
          }}
        >
          {/* Fondo dinámico con patrones orgánicos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div 
                className="absolute w-96 h-96 rounded-full animate-liquid-flow opacity-40"
                style={{
                  background: `conic-gradient(from 0deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.1), rgba(132, 204, 22, 0.15))`,
                  left: '20%',
                  top: '30%',
                  filter: `blur(40px)`,
                }}
              ></div>
              <div 
                className="absolute w-64 h-64 rounded-full animate-floating-gradient opacity-25"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(52, 211, 153, 0.3), transparent)`,
                  right: '15%',
                  bottom: '25%',
                }}
              ></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header premium */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center p-3 glass-nature-premium rounded-2xl mb-8 hover-magnetic">
                <span className="text-3xl animate-organic-pulse">🧬</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Lectura y{' '}
                <span className="text-gradient-premium animate-crystalline-shimmer">
                  Metabolismo
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-mint-green/80 max-w-4xl mx-auto font-inter leading-relaxed">
                Descubre cómo una{' '}
                <span className="text-spring-green font-medium">alimentación consciente</span>{' '}
                puede transformar tu metabolismo y bienestar general
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Columna izquierda: Tarjetas informativas */}
              <div className="space-y-8">
                {[
                  {
                    icon: "🌱",
                    title: "Nutrición Metabólica",
                    description: "El metabolismo es el conjunto de procesos químicos que mantienen la vida. Una nutrición adecuada optimiza estos procesos, mejorando la energía, el peso corporal y la salud general.",
                    gradient: "from-spring-green/20 to-mint-green/10",
                    borderGradient: "from-spring-green to-mint-green"
                  },
                  {
                    icon: "🍃",
                    title: "Alimentos Naturales",
                    description: "Los alimentos integrales y naturales proporcionan los nutrientes esenciales que tu cuerpo necesita para un metabolismo óptimo, sin aditivos artificiales que puedan interferir.",
                    gradient: "from-mint-green/20 to-lime-green/10",
                    borderGradient: "from-mint-green to-lime-green"
                  },
                  {
                    icon: "⚡",
                    title: "Energía Vital",
                    description: "La alimentación consciente activa tu energía natural, mejorando la concentración, el estado de ánimo y la vitalidad física de manera sostenible.",
                    gradient: "from-lime-green/20 to-emerald-green/10",
                    borderGradient: "from-lime-green to-emerald-green"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`group glass-premium rounded-3xl p-8 transition-all duration-700 hover-elevate-premium cursor-pointer border border-transparent hover:border-spring-green/30`}
                    style={{
                      background: `linear-gradient(135deg, ${item.gradient.replace('from-', '').replace(' to-', ', ')})`,
                      animationDelay: `${index * 200}ms`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 25px 50px rgba(16, 185, 129, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.1)';
                    }}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 glass-nature-premium rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <span className="text-3xl animate-magnetic-pull">{item.icon}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-spring-green transition-colors duration-500">
                          {item.title}
                        </h3>
                        <p className="text-mint-green/80 font-inter leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Borde animado */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.borderGradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-all duration-700 animate-crystalline-shimmer`}></div>
                  </div>
                ))}
              </div>

              {/* Columna derecha: Panel de beneficios premium */}
              <div className="relative">
                <div className="glass-nature-premium rounded-3xl p-10 relative overflow-hidden group hover-elevate-premium">
                  {/* Efecto de brillo dinámico premium - Estático para evitar hydration mismatch */}
                  <div 
                    className="absolute inset-0 opacity-30 transition-all duration-1000"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.3), transparent 70%)`,
                    }}
                  ></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center w-20 h-20 glass-premium rounded-3xl mb-8 mx-auto animate-organic-pulse">
                      <span className="text-4xl">💎</span>
                    </div>
                    
                    <h3 className="text-3xl font-display font-bold text-center text-gradient-premium mb-8">
                      Beneficios Transformadores
                    </h3>
                    
                    <div className="space-y-6">
                      {[
                        { text: "Mayor energía y vitalidad sostenible", progress: 95 },
                        { text: "Control natural y saludable del peso", progress: 88 },
                        { text: "Fortalecimiento del sistema inmune", progress: 92 },
                        { text: "Reducción significativa de la inflamación", progress: 85 },
                        { text: "Mejora de la claridad mental y concentración", progress: 90 }
                      ].map((benefit, index) => (
                        <div 
                          key={index}
                          className="group/benefit"
                          style={{ animationDelay: `${index * 300}ms` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-inter font-medium flex items-center">
                              <span 
                                className="w-3 h-3 bg-gradient-to-r from-spring-green to-mint-green rounded-full mr-4 animate-organic-pulse"
                                style={{ animationDelay: `${index * 500}ms` }}
                              ></span>
                              {benefit.text}
                            </span>
                            <span className="text-spring-green font-bold text-sm">
                              {benefit.progress}%
                            </span>
                          </div>
                          
                          {/* Barra de progreso premium */}
                          <div className="w-full h-2 bg-forest-green/30 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-spring-green to-mint-green rounded-full transition-all duration-1000 ease-out animate-crystalline-shimmer"
                              style={{ 
                                width: `${benefit.progress}%`,
                                transitionDelay: `${index * 200}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Elementos decorativos flotantes premium */}
                <div className="absolute -top-8 -right-8 w-32 h-32 gradient-holographic rounded-full animate-floating-gradient opacity-20 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-mint-green/30 to-lime-green/20 rounded-full animate-liquid-flow"></div>
                
                {/* Partículas orbitales */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-spring-green/60 rounded-full animate-floating-gradient"
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + (i % 40)}%`,
                        animationDelay: `${i * 800}ms`,
                        animationDuration: `${4 + i}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section Ultra Premium */}
        <section 
          id="services" 
          className="py-32 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              rgba(240, 253, 244, 0.95) 0%,
              rgba(220, 252, 231, 0.9) 25%,
              rgba(187, 247, 208, 0.85) 50%,
              rgba(134, 239, 172, 0.8) 75%,
              rgba(16, 185, 129, 0.1) 100%)`
          }}
        >
          {/* Fondo con patrones orgánicos animados */}
          <div className="absolute inset-0 overflow-hidden opacity-40">
            <div 
              className="absolute w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 70%, rgba(52, 211, 153, 0.15) 0%, transparent 50%),
                                 radial-gradient(circle at 50% 50%, rgba(132, 204, 22, 0.08) 0%, transparent 50%)`,
                animation: 'gradientFloat 20s ease-in-out infinite'
              }}
            ></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header ultra premium */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center space-x-3 glass-nature-premium px-8 py-4 rounded-2xl mb-8 hover-magnetic">
                <span className="text-2xl animate-organic-pulse">🌟</span>
                <span className="text-sage-green font-inter font-medium">Servicios Premium</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-display font-bold text-forest-green mb-8 leading-tight">
                Alimentación{' '}
                <span className="text-gradient-premium animate-crystalline-shimmer block mt-2">
                  Consciente
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-sage-green max-w-4xl mx-auto font-inter leading-relaxed">
                Descubre los secretos de una{' '}
                <span className="text-emerald-green font-semibold">alimentación transformadora</span>{' '}
                que nutre tu cuerpo y acelera tu metabolismo de forma natural
              </p>
            </div>

            {/* Grid de servicios premium */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
              {[
                {
                  icon: "💧",
                  title: "Hidratación Consciente",
                  description: "Optimiza tu hidratación para activar todos los procesos metabólicos de forma natural y equilibrada.",
                  gradient: "from-cyan-500/20 to-blue-500/10",
                  accentColor: "text-cyan-600",
                  borderGradient: "from-cyan-400 to-blue-500"
                },
                {
                  icon: "🧘‍♀️",
                  title: "Alimentación Mindful",
                  description: "Desarrolla una relación consciente con la comida, saboreando cada momento y nutriendo tu alma.",
                  gradient: "from-purple-500/20 to-pink-500/10",
                  accentColor: "text-purple-600",
                  borderGradient: "from-purple-400 to-pink-500"
                },
                {
                  icon: "🌈",
                  title: "Colores Naturales",
                  description: "Incluye toda la gama cromática de alimentos naturales para una nutrición completa y vibrante.",
                  gradient: "from-spring-green/20 to-lime-green/10",
                  accentColor: "text-spring-green",
                  borderGradient: "from-spring-green to-lime-green"
                },
                {
                  icon: "⏰",
                  title: "Ritmo Natural",
                  description: "Sincroniza tu alimentación con los ritmos circadianos para optimizar la digestión y energía.",
                  gradient: "from-amber-500/20 to-orange-500/10",
                  accentColor: "text-amber-600",
                  borderGradient: "from-amber-400 to-orange-500"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div 
                    className={`glass-premium rounded-3xl p-8 h-full transition-all duration-700 hover-elevate-premium cursor-pointer border border-transparent hover:border-spring-green/30 relative overflow-hidden`}
                    style={{
                      background: `linear-gradient(135deg, ${service.gradient.replace('from-', '').replace(' to-', ', ')})`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-16px) scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 30px 60px rgba(16, 185, 129, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.1)';
                    }}
                  >
                    {/* Icono premium */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 glass-nature-premium rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 animate-magnetic-pull">
                        <span className="text-4xl">{service.icon}</span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="text-center">
                      <h3 className={`text-2xl font-display font-bold ${service.accentColor} mb-4 group-hover:text-spring-green transition-colors duration-500`}>
                        {service.title}
                      </h3>
                      <p className="text-sage-green font-inter leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* Efecto de brillo holográfico */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 animate-crystalline-shimmer`}></div>
                    
                    {/* Partícula flotante */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-spring-green/40 rounded-full animate-organic-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section Premium con diseño revolucionario */}
            <div className="relative">
              <div className="glass-nature-premium rounded-[2rem] p-12 lg:p-16 relative overflow-hidden group">
                {/* Fondo dinámico interactivo */}
                <div 
                  className="absolute inset-0 opacity-20 transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle at ${typeof window !== 'undefined' ? (mousePosition.x / window.innerWidth) * 100 : 50}% ${typeof window !== 'undefined' ? (mousePosition.y / window.innerHeight) * 100 : 50}%, rgba(16, 185, 129, 0.4), rgba(52, 211, 153, 0.2) 50%, transparent 80%)`,
                  }}
                ></div>
                
                {/* Contenido premium */}
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center w-24 h-24 glass-premium rounded-3xl mx-auto mb-8 animate-liquid-flow">
                    <span className="text-5xl">🚀</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-forest-green mb-6 leading-tight">
                    ¿Listo para{' '}
                    <span className="text-gradient-premium">transformar</span>{' '}
                    tu alimentación?
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-sage-green mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
                    Comienza hoy mismo con pequeños{' '}
                    <span className="text-spring-green font-semibold">cambios conscientes</span>{' '}
                    que generarán grandes resultados transformadores
                  </p>
                  
                  {/* Botones CTA ultra premium */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="group relative px-12 py-6 rounded-3xl font-inter font-bold text-lg transition-all duration-700 hover-elevate-premium overflow-hidden neomorphic-outset"
                    >
                      <div className="absolute inset-0 gradient-animated-premium opacity-90"></div>
                      <span className="relative z-10 flex items-center justify-center text-forest-green">
                        <span className="text-2xl mr-3 animate-magnetic-pull">✨</span>
                        <span>Comenzar Ahora</span>
                        <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-crystalline-shimmer"></div>
                    </button>
                    
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="group px-12 py-6 glass-premium text-spring-green rounded-3xl font-inter font-bold text-lg transition-all duration-700 hover-elevate-premium border-2 border-spring-green/30 hover:border-spring-green/60"
                    >
                      <span className="flex items-center justify-center">
                        <span className="text-2xl mr-3 animate-organic-pulse">📚</span>
                        <span>Descubre Más</span>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Efectos decorativos premium */}
                <div className="absolute -top-12 -left-12 w-40 h-40 gradient-holographic rounded-full animate-floating-gradient opacity-20 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-lime-green/30 to-emerald-green/20 rounded-full animate-liquid-flow opacity-30"></div>
                
                {/* Sistema de partículas orbitales */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-spring-green/60 rounded-full animate-floating-gradient"
                      style={{
                        left: `${15 + (i * 10)}%`,
                        top: `${25 + (i % 50)}%`,
                        animationDelay: `${i * 600}ms`,
                        animationDuration: `${5 + i * 0.5}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section Ultra Premium */}
        <section 
          id="contact" 
          className="py-32 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              rgba(15, 23, 42, 0.98) 0%,
              rgba(30, 41, 59, 0.95) 25%,
              rgba(71, 85, 105, 0.9) 50%,
              rgba(16, 185, 129, 0.15) 100%)`
          }}
        >
          {/* Fondo con efectos cósmicos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {/* Constelación de partículas premium */}
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-floating-gradient"
                  style={{
                    width: `${(i % 4) + 1}px`,
                    height: `${(i % 4) + 1}px`,
                    background: `radial-gradient(circle, rgba(16, 185, 129, ${0.2 + (i % 8) / 10}), transparent)`,
                    left: `${(i * 7) % 100}%`,
                    top: `${(i * 13) % 100}%`,
                    animationDelay: `${(i % 20)}s`,
                    animationDuration: `${10 + (i % 15)}s`,
                  }}
                ></div>
              ))}
              
              {/* Orbes principales */}
              <div 
                className="absolute w-96 h-96 rounded-full animate-liquid-flow opacity-30"
                style={{
                  background: `conic-gradient(from 0rad, rgba(16, 185, 129, 0.3), rgba(52, 211, 153, 0.2), rgba(132, 204, 22, 0.25))`,
                  left: '10%',
                  top: '20%',
                  filter: `blur(60px)`,
                }}
              ></div>
              
              <div 
                className="absolute w-80 h-80 rounded-full animate-floating-gradient opacity-20"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(52, 211, 153, 0.4), rgba(16, 185, 129, 0.2), transparent)`,
                  right: '5%',
                  bottom: '15%',
                  filter: `blur(50px)`,
                }}
              ></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header ultra premium */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center space-x-3 glass-nature-premium px-8 py-4 rounded-2xl mb-8 hover-magnetic">
                <span className="text-2xl animate-organic-pulse">💫</span>
                <span className="text-mint-green font-inter font-medium">Conecta con Nosotros</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                Comienza tu{' '}
                <span className="text-gradient-premium animate-crystalline-shimmer block mt-2">
                  Transformación
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-mint-green/80 max-w-4xl mx-auto font-inter leading-relaxed mb-12">
                ¿Tienes preguntas sobre{' '}
                <span className="text-spring-green font-semibold">nutrición y metabolismo</span>?{' '}
                Estamos aquí para acompañarte en cada paso de tu journey hacia una vida más saludable.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12 mb-20">
              {/* Métodos de contacto premium */}
              {[
                {
                  icon: "📧",
                  title: "Email Premium",
                  content: "info@metabolife.com",
                  description: "Respuesta garantizada en 24h",
                  gradient: "from-blue-500/20 to-cyan-500/10",
                  accentColor: "text-cyan-400",
                  borderGradient: "from-blue-400 to-cyan-500"
                },
                {
                  icon: "📱",
                  title: "Teléfono Directo",
                  content: "+1 (555) 123-4567",
                  description: "Consultas en vivo L-V 9-18h",
                  gradient: "from-green-500/20 to-emerald-500/10",
                  accentColor: "text-emerald-400",
                  borderGradient: "from-green-400 to-emerald-500"
                },
                {
                  icon: "📍",
                  title: "Ubicación",
                  content: "Ciudad Wellness, País",
                  description: "Visitas con cita previa",
                  gradient: "from-purple-500/20 to-pink-500/10",
                  accentColor: "text-purple-400",
                  borderGradient: "from-purple-400 to-pink-500"
                }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div 
                    className={`glass-premium rounded-3xl p-8 h-full transition-all duration-700 hover-elevate-premium cursor-pointer border border-transparent hover:border-spring-green/30 relative overflow-hidden`}
                    style={{
                      background: `linear-gradient(135deg, ${contact.gradient.replace('from-', '').replace(' to-', ', ')})`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 25px 50px rgba(16, 185, 129, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.1)';
                    }}
                  >
                    {/* Icono premium */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 glass-nature-premium rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 animate-magnetic-pull">
                        <span className="text-4xl">{contact.icon}</span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="text-center">
                      <h3 className={`text-2xl font-display font-bold text-white mb-3 group-hover:${contact.accentColor} transition-colors duration-500`}>
                        {contact.title}
                      </h3>
                      <p className={`text-lg font-inter font-semibold ${contact.accentColor} mb-2`}>
                        {contact.content}
                      </p>
                      <p className="text-mint-green/60 font-inter text-sm">
                        {contact.description}
                      </p>
                    </div>

                    {/* Efecto holográfico */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${contact.borderGradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700 animate-crystalline-shimmer`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulario de contacto premium */}
            <div className="max-w-4xl mx-auto">
              <div className="glass-nature-premium rounded-[2rem] p-12 relative overflow-hidden">
                {/* Fondo interactivo */}
                <div 
                  className="absolute inset-0 opacity-10 transition-all duration-1000"
                  style={{
                    background: `radial-gradient(circle at ${typeof window !== 'undefined' ? (mousePosition.x / window.innerWidth) * 100 : 50}% ${typeof window !== 'undefined' ? (mousePosition.y / window.innerHeight) * 100 : 50}%, rgba(16, 185, 129, 0.3), transparent 60%)`,
                  }}
                ></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <div className="flex items-center justify-center w-16 h-16 glass-premium rounded-2xl mx-auto mb-6 animate-organic-pulse">
                      <span className="text-3xl">✨</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                      Agenda tu Consulta Gratuita
                    </h3>
                    <p className="text-mint-green/80 font-inter">
                      Descubre cómo podemos ayudarte a alcanzar tus objetivos de salud
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Campos del formulario */}
                    {[
                      { label: "Nombre", type: "text", placeholder: "Tu nombre completo" },
                      { label: "Email", type: "email", placeholder: "tu@email.com" },
                      { label: "Teléfono", type: "tel", placeholder: "+1 (555) 123-4567" },
                      { label: "Objetivo", type: "select", placeholder: "Selecciona tu objetivo principal" }
                    ].map((field, index) => (
                      <div key={index} className="group">
                        <label className="block text-mint-green font-inter font-medium mb-3">
                          {field.label}
                        </label>
                        {field.type === 'select' ? (
                          <select className="w-full px-6 py-4 glass-premium rounded-2xl text-white font-inter placeholder-mint-green/50 border border-spring-green/20 focus:border-spring-green/50 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-spring-green/20">
                            <option value="" className="bg-forest-green">Selecciona...</option>
                            <option value="weight" className="bg-forest-green">Control de peso</option>
                            <option value="energy" className="bg-forest-green">Más energía</option>
                            <option value="metabolism" className="bg-forest-green">Metabolismo</option>
                            <option value="wellness" className="bg-forest-green">Bienestar general</option>
                          </select>
                        ) : (
                          <input 
                            type={field.type}
                            placeholder={field.placeholder}
                            className="w-full px-6 py-4 glass-premium rounded-2xl text-white font-inter placeholder-mint-green/50 border border-spring-green/20 focus:border-spring-green/50 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-spring-green/20 hover-magnetic"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <label className="block text-mint-green font-inter font-medium mb-3">
                      Mensaje (Opcional)
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Cuéntanos más sobre tus objetivos y expectativas..."
                      className="w-full px-6 py-4 glass-premium rounded-2xl text-white font-inter placeholder-mint-green/50 border border-spring-green/20 focus:border-spring-green/50 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-spring-green/20 resize-none"
                    ></textarea>
                  </div>

                  <div className="mt-10 text-center">
                    <button className="group relative px-12 py-6 rounded-3xl font-inter font-bold text-lg transition-all duration-700 hover-elevate-premium overflow-hidden neomorphic-outset">
                      <div className="absolute inset-0 gradient-animated-premium opacity-90"></div>
                      <span className="relative z-10 flex items-center justify-center text-forest-green">
                        <span className="text-2xl mr-3 animate-magnetic-pull">🚀</span>
                        <span>Enviar Consulta</span>
                        <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 animate-crystalline-shimmer"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer premium */}
            <div className="mt-20 text-center border-t border-spring-green/10 pt-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-3 h-3 bg-spring-green rounded-full animate-organic-pulse"></div>
                <span className="text-mint-green/60 font-inter font-light tracking-wider">
                  METABOLIFE • WELLNESS PREMIUM
                </span>
                <div className="w-3 h-3 bg-spring-green rounded-full animate-organic-pulse"></div>
              </div>
              <p className="text-mint-green/40 font-inter">
                © 2025 MetaboLife. Todos los derechos reservados. Transformando vidas a través de la nutrición consciente. 🌱✨
              </p>
            </div>
          </div>
        </section>
    </main>
    </>
  );
}