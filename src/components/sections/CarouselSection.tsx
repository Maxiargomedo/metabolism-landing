'use client';

import { useState, useEffect } from 'react';

export default function NatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Frutas del Bosque",
      description: "Antioxidantes naturales que aceleran el metabolismo",
      image: "🫐",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Verduras de Hoja Verde",
      description: "Ricas en nutrientes esenciales para la energía celular",
      image: "🥬",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Frutos Secos",
      description: "Grasas saludables que nutren tu metabolismo",
      image: "🌰",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Hierbas Aromáticas",
      description: "Propiedades medicinales que optimizan la digestión",
      image: "🌿",
      color: "from-green-300 to-teal-400"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="nature-carousel" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tesoros de la <span className="text-green-600">Naturaleza</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los superalimentos que la naturaleza nos ofrece para potenciar nuestro metabolismo
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color} p-12 text-white min-h-[400px] flex items-center`}>
                    <div className="max-w-4xl mx-auto text-center">
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-5xl font-bold mb-6">{slide.title}</h3>
                      <p className="text-2xl opacity-90 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 rounded-full p-3 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 rounded-full p-3 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
