export default function HealthyEating() {
  const eatingTips = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horarios Regulares",
      description: "Mantén horarios fijos de comida para regular tu metabolismo y mejorar la digestión.",
      details: ["Desayuno: 7-9 AM", "Almuerzo: 12-2 PM", "Cena: 6-8 PM"],
      color: "green"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Porciones Equilibradas",
      description: "Combina macronutrientes en cada comida para una energía sostenida.",
      details: ["50% vegetales", "25% proteína magra", "25% carbohidratos complejos"],
      color: "emerald"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Hidratación Adecuada",
      description: "El agua es fundamental para todos los procesos metabólicos del cuerpo.",
      details: ["2-3 litros diarios", "Agua antes de comidas", "Reducir bebidas azucaradas"],
      color: "lime"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Masticación Consciente",
      description: "Comer despacio mejora la digestión y la sensación de saciedad.",
      details: ["20-30 masticadas", "Sin distracciones", "Pausas entre bocados"],
      color: "forest"
    }
  ];

  const avoidFoods = [
    { 
      name: "Azúcares refinados", 
      reason: "Causan picos de insulina",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      )
    },
    { 
      name: "Comida ultraprocesada", 
      reason: "Rica en aditivos y conservantes",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      )
    },
    { 
      name: "Grasas trans", 
      reason: "Aumentan inflamación",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Exceso de sodio", 
      reason: "Retención de líquidos",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    }
  ];

  const recommendedFoods = [
    { 
      name: "Vegetales de hoja verde", 
      benefit: "Ricos en micronutrientes",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: "Proteínas magras", 
      benefit: "Mantienen la masa muscular",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: "Granos integrales", 
      benefit: "Liberación lenta de energía",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      name: "Frutas de temporada", 
      benefit: "Antioxidantes naturales",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="healthy-eating" className="section-padding bg-gradient-to-br from-green-50/60 via-white to-emerald-50/40 relative overflow-hidden">
      {/* Background decorative elements - Estilo Sonos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradientes sutiles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-green-300/8 to-emerald-400/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-emerald-300/6 to-green-400/8 rounded-full blur-3xl"></div>
        
        {/* Líneas geométricas sutiles */}
        <div className="absolute inset-0 sonos-lines opacity-20"></div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-green-200/15 rounded-full"></div>
        <div className="absolute bottom-1/3 right-16 w-24 h-24 border border-emerald-200/20 rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6" data-animate="fade-up">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              🌱 Guía Nutricional
            </div>
            <h2 
              className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-balance"
              data-animate="fade-up"
            >
              Formas de Comer de{' '}
              <span className="gradient-text">Manera Correcta</span>
            </h2>
            <p 
              className="body-lg max-w-3xl mx-auto text-balance"
              data-animate="fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Descubre los principios fundamentales de una alimentación que optimiza 
              tu metabolismo y promueve una salud integral.
            </p>
          </div>

          {/* Main Tips Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {eatingTips.map((tip, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl p-8 bg-white/90 backdrop-blur-sm border border-green-100/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  tip.color === 'green' ? 'hover:shadow-green-200/50' :
                  tip.color === 'emerald' ? 'hover:shadow-emerald-200/50' :
                  tip.color === 'lime' ? 'hover:shadow-lime-200/50' :
                  tip.color === 'forest' ? 'hover:shadow-green-300/50' :
                  'hover:shadow-green-200/50'
                }`}
                data-animate="scale-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  tip.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  tip.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-green-600' :
                  tip.color === 'lime' ? 'bg-gradient-to-br from-lime-500 to-green-600' :
                  tip.color === 'forest' ? 'bg-gradient-to-br from-green-700 to-green-800' :
                  'bg-gradient-to-br from-green-500 to-green-600'
                }`}></div>

                {/* Icon container */}
                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  tip.color === 'green' ? 'bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white' :
                  tip.color === 'emerald' ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white' :
                  tip.color === 'lime' ? 'bg-lime-100 text-lime-700 group-hover:bg-lime-500 group-hover:text-white' :
                  tip.color === 'forest' ? 'bg-green-200 text-green-800 group-hover:bg-green-700 group-hover:text-white' :
                  'bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white'
                } transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                  {tip.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-slate-800 transition-colors">{tip.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{tip.description}</p>
                
                <div className="space-y-3">
                  {tip.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-slate-500">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        tip.color === 'blue' ? 'bg-blue-500' :
                        tip.color === 'emerald' ? 'bg-emerald-500' :
                        tip.color === 'purple' ? 'bg-purple-500' :
                        'bg-blue-500'
                      }`}></div>
                      <span className="group-hover:text-slate-600 transition-colors">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Foods Comparison */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Foods to Avoid */}
            <div data-animate="slide-right">
              <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-rose-100 rounded-3xl p-8 border border-red-200/50 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-red-800">Alimentos a Evitar</h3>
                </div>
                <div className="space-y-4">
                  {avoidFoods.map((food, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-red-200/30 hover:bg-white/80 transition-all duration-300">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        {food.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-red-900 mb-1">{food.name}</div>
                        <div className="text-sm text-red-700">{food.reason}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Foods to Include */}
            <div data-animate="slide-left">
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8 border border-emerald-200/50 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-800">Alimentos Recomendados</h3>
                </div>
                <div className="space-y-4">
                  {recommendedFoods.map((food, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-200/30 hover:bg-white/80 transition-all duration-300">
                      <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                        {food.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-emerald-900 mb-1">{food.name}</div>
                        <div className="text-sm text-emerald-700">{food.benefit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Meal Planning Section */}
          <div 
            className="relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-200/50 shadow-xl"
            data-animate="fade-up"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Planificación Diaria
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Estructura de Comidas Ideal</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Una distribución diaria que optimiza tu metabolismo y energía
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Desayuno</h4>
                <p className="text-slate-600 leading-relaxed">
                  Activa tu Metabolismo con proteínas de calidad y carbohidratos complejos para energía sostenida
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Almuerzo</h4>
                <p className="text-slate-600 leading-relaxed">
                  Mantén la energía con una comida equilibrada, rica en nutrientes y perfectamente balanceada
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">Cena</h4>
                <p className="text-slate-600 leading-relaxed">
                  Comida ligera que favorece la digestión nocturna y la recuperación del organismo
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Obtener Plan Personalizado
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
