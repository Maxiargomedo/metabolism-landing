export default function NutritionInfo() {
  const nutritionFacts = [
    {
      category: "Macronutrientes",
      icon: "🏗️",
      items: [
        { name: "Proteínas", value: "0.8-1.2g/kg", description: "Construcción y reparación muscular" },
        { name: "Carbohidratos", value: "45-65%", description: "Principal fuente de energía" },
        { name: "Grasas", value: "20-35%", description: "Hormonas y absorción vitaminas" }
      ]
    },
    {
      category: "Micronutrientes",
      icon: "💎",
      items: [
        { name: "Vitamina D", value: "600-800 UI", description: "Salud ósea y inmunidad" },
        { name: "Omega-3", value: "1-2g", description: "Salud cardiovascular y cerebral" },
        { name: "Fibra", value: "25-35g", description: "Salud digestiva y saciedad" }
      ]
    },
    {
      category: "Hidratación",
      icon: "💧",
      items: [
        { name: "Agua", value: "35ml/kg", description: "Función metabólica óptima" },
        { name: "Electrolitos", value: "Balance", description: "Función celular adecuada" },
        { name: "pH corporal", value: "7.35-7.45", description: "Equilibrio ácido-base" }
      ]
    }
  ];

  const labelReading = [
    {
      section: "Información por porción",
      tips: [
        "Verifica el tamaño de la porción",
        "Calcula las porciones que consumes",
        "Compara con tus necesidades diarias"
      ]
    },
    {
      section: "Ingredientes",
      tips: [
        "Los primeros ingredientes son los más abundantes",
        "Evita largas listas de aditivos",
        "Busca ingredientes que reconozcas"
      ]
    },
    {
      section: "Valores nutricionales",
      tips: [
        "Revisa el % valor diario",
        "Prioriza alimentos ricos en nutrientes",
        "Limita azúcares añadidos y sodio"
      ]
    }
  ];

  const commonAdditives = [
    { name: "MSG (E621)", effect: "Puede causar dolor de cabeza", level: "Moderado" },
    { name: "Jarabe de maíz alto en fructosa", effect: "Eleva glucosa rápidamente", level: "Alto" },
    { name: "Grasas trans", effect: "Aumenta riesgo cardiovascular", level: "Alto" },
    { name: "Sulfitos", effect: "Reacciones alérgicas", level: "Bajo" },
    { name: "Colorantes artificiales", effect: "Posible hiperactividad", level: "Bajo" },
    { name: "BHA/BHT", effect: "Posible carcinógeno", level: "Moderado" }
  ];

  return (
    <section id="nutrition-info" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="heading-lg mb-6 text-balance"
              data-animate="fade-up"
            >
              Información{' '}
              <span className="gradient-text">Nutricional</span>{' '}
              de los Productos
            </h2>
            <p 
              className="body-lg max-w-3xl mx-auto text-balance"
              data-animate="fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Aprende a leer e interpretar las etiquetas nutricionales para tomar 
              decisiones informadas sobre tu alimentación.
            </p>
          </div>

          {/* Nutrition Facts Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {nutritionFacts.map((category, index) => (
              <div 
                key={index}
                className="card p-8 text-center"
                data-animate="scale-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-800">{item.name}</span>
                        <span className="text-blue-600 font-semibold text-sm">{item.value}</span>
                      </div>
                      <p className="text-xs text-gray-600 text-left">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Label Reading Guide */}
          <div className="mb-16">
            <div 
              className="text-center mb-12"
              data-animate="fade-up"
            >
              <h3 className="heading-md mb-4">Cómo Leer las Etiquetas</h3>
              <p className="body-md text-gray-600">
                Guía práctica para interpretar la información nutricional
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {labelReading.map((section, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8"
                  data-animate="slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold text-gray-800 mb-4">{section.section}</h4>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Common Additives */}
          <div 
            className="bg-gray-50 rounded-3xl p-8 lg:p-12"
            data-animate="fade-up"
          >
            <div className="text-center mb-8">
              <h3 className="heading-md mb-4">Aditivos Alimentarios Comunes</h3>
              <p className="body-md text-gray-600">
                Conoce los aditivos más frecuentes y sus efectos en la salud
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commonAdditives.map((additive, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100"
                >
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{additive.name}</div>
                    <div className="text-sm text-gray-600">{additive.effect}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    additive.level === 'Alto' 
                      ? 'bg-red-100 text-red-800' 
                      : additive.level === 'Moderado'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {additive.level}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Recomendación</h4>
                  <p className="text-sm text-blue-700">
                    Prioriza alimentos con ingredientes simples y naturales. Si no puedes 
                    pronunciar un ingrediente, considera buscar alternativas más naturales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tool CTA */}
          <div 
            className="text-center mt-16"
            data-animate="fade-up"
          >
            <div className="card p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Necesitas ayuda interpretando etiquetas?
              </h3>
              <p className="body-md mb-6 text-gray-600">
                Nuestros especialistas pueden ayudarte a entender mejor la información 
                nutricional de tus productos favoritos.
              </p>
              <button className="btn-primary">
                Consultar con Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
