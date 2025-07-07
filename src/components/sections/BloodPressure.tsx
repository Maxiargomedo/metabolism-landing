export default function BloodPressure() {
  const pressureFactors = [
    {
      category: "Factores Alimentarios",
      icon: "🧂",
      color: "red",
      items: [
        { factor: "Exceso de sodio", impact: "Aumenta retención de líquidos", solution: "Reducir sal procesada" },
        { factor: "Falta de potasio", impact: "Desequilibrio electrolítico", solution: "Consumir frutas y verduras" },
        { factor: "Alcohol excesivo", impact: "Eleva presión sistólica", solution: "Moderación o abstinencia" },
        { factor: "Cafeína en exceso", impact: "Efecto vasoconstrictor", solution: "Limitar a 2-3 tazas/día" }
      ]
    },
    {
      category: "Factores de Estilo de Vida",
      icon: "🏃‍♂️",
      color: "blue",
      items: [
        { factor: "Sedentarismo", impact: "Debilita sistema cardiovascular", solution: "30 min actividad diaria" },
        { factor: "Estrés crónico", impact: "Libera cortisol", solution: "Técnicas de relajación" },
        { factor: "Falta de sueño", impact: "Altera hormonas reguladoras", solution: "7-9 horas de sueño" },
        { factor: "Tabaquismo", impact: "Daña vasos sanguíneos", solution: "Cesación tabáquica" }
      ]
    },
    {
      category: "Factores Metabólicos",
      icon: "⚡",
      color: "emerald",
      items: [
        { factor: "Resistencia a insulina", impact: "Afecta vasos sanguíneos", solution: "Dieta baja en azúcares" },
        { factor: "Obesidad abdominal", impact: "Inflamación sistémica", solution: "Pérdida de peso gradual" },
        { factor: "Deshidratación", impact: "Aumenta viscosidad sanguínea", solution: "Hidratación adecuada" },
        { factor: "Deficiencia de magnesio", impact: "Contracción vascular", solution: "Suplementación controlada" }
      ]
    }
  ];

  const bloodPressureRanges = [
    { category: "Óptima", systolic: "< 120", diastolic: "< 80", color: "green", description: "Riesgo cardiovascular mínimo" },
    { category: "Normal", systolic: "120-129", diastolic: "80-84", color: "blue", description: "Rango saludable normal" },
    { category: "Normal Alta", systolic: "130-139", diastolic: "85-89", color: "yellow", description: "Vigilancia y cambios de estilo de vida" },
    { category: "Hipertensión Grado 1", systolic: "140-159", diastolic: "90-99", color: "orange", description: "Requiere intervención médica" },
    { category: "Hipertensión Grado 2", systolic: "160-179", diastolic: "100-109", color: "red", description: "Tratamiento médico urgente" },
    { category: "Hipertensión Grado 3", systolic: "≥ 180", diastolic: "≥ 110", color: "red", description: "Crisis hipertensiva - atención inmediata" }
  ];

  const preventionTips = [
    {
      title: "Dieta DASH",
      description: "Enfoque dietético para detener la hipertensión",
      points: ["Rica en frutas y verduras", "Granos integrales", "Proteínas magras", "Baja en sodio"]
    },
    {
      title: "Ejercicio Regular",
      description: "Actividad física para fortalecer el corazón",
      points: ["150 min/semana cardio", "2 días fuerza", "Caminar diariamente", "Yoga o meditación"]
    },
    {
      title: "Gestión del Estrés",
      description: "Técnicas para reducir la tensión",
      points: ["Respiración profunda", "Meditación diaria", "Tiempo en naturaleza", "Hobbies relajantes"]
    },
    {
      title: "Monitoreo Regular",
      description: "Seguimiento y control",
      points: ["Medición domiciliaria", "Registros diarios", "Consultas médicas", "Ajustes de tratamiento"]
    }
  ];

  return (
    <section id="blood-pressure" className="section-padding bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="heading-lg mb-6 text-balance"
              data-animate="fade-up"
            >
              ¿Por qué Sube la{' '}
              <span className="gradient-text">Presión Arterial</span>?
            </h2>
            <p 
              className="body-lg max-w-3xl mx-auto text-balance"
              data-animate="fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Comprende los factores que influyen en tu presión arterial y cómo 
              el metabolismo y la alimentación juegan un papel crucial en su regulación.
            </p>
          </div>

          {/* Blood Pressure Ranges */}
          <div 
            className="mb-16"
            data-animate="fade-up"
          >
            <div className="card p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-center mb-8">Rangos de Presión Arterial</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">Categoría</th>
                      <th className="text-center py-3 px-4">Sistólica (mmHg)</th>
                      <th className="text-center py-3 px-4">Diastólica (mmHg)</th>
                      <th className="text-left py-3 px-4">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bloodPressureRanges.map((range, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${
                              range.color === 'green' ? 'bg-green-500' :
                              range.color === 'blue' ? 'bg-blue-500' :
                              range.color === 'yellow' ? 'bg-yellow-500' :
                              range.color === 'orange' ? 'bg-orange-500' :
                              'bg-red-500'
                            }`}></div>
                            <span className="font-medium">{range.category}</span>
                          </div>
                        </td>
                        <td className="text-center py-4 px-4 font-mono">{range.systolic}</td>
                        <td className="text-center py-4 px-4 font-mono">{range.diastolic}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{range.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Factors Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {pressureFactors.map((category, index) => (
              <div 
                key={index}
                className="space-y-6"
                data-animate="slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`card p-6 border-l-4 ${
                      category.color === 'red' ? 'border-red-500' :
                      category.color === 'blue' ? 'border-blue-500' :
                      'border-emerald-500'
                    }`}>
                      <h4 className="font-semibold text-gray-800 mb-2">{item.factor}</h4>
                      <p className="text-sm text-gray-600 mb-3">{item.impact}</p>
                      <div className={`text-xs font-medium px-3 py-1 rounded-full inline-block ${
                        category.color === 'red' ? 'bg-red-100 text-red-800' :
                        category.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {item.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prevention Strategies */}
          <div 
            className="mb-16"
            data-animate="fade-up"
          >
            <div className="text-center mb-12">
              <h3 className="heading-md mb-4">Estrategias de Prevención</h3>
              <p className="body-md text-gray-600">
                Enfoques naturales y científicamente probados para mantener una presión arterial saludable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {preventionTips.map((tip, index) => (
                <div 
                  key={index}
                  className="card p-6 text-center group hover:shadow-lg transition-all duration-300"
                  data-animate="scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {tip.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">{tip.description}</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {tip.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Warning */}
          <div 
            className="bg-red-50 border border-red-200 rounded-2xl p-8 lg:p-12"
            data-animate="fade-up"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-4">Señales de Alerta</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Síntomas de Crisis Hipertensiva:</h4>
                    <ul className="text-sm text-red-600 space-y-1">
                      <li>• Dolor de cabeza severo</li>
                      <li>• Visión borrosa</li>
                      <li>• Dificultad para respirar</li>
                      <li>• Dolor en el pecho</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Cuándo Buscar Ayuda:</h4>
                    <ul className="text-sm text-red-600 space-y-1">
                      <li>• Presión &gt; 180/110 mmHg</li>
                      <li>• Síntomas neurológicos</li>
                      <li>• Dolor torácico</li>
                      <li>• Cualquier síntoma preocupante</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-100 rounded-xl">
                  <p className="text-sm text-red-800 font-medium">
                    ⚠️ Si experimentas cualquiera de estos síntomas, busca atención médica inmediata.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div 
            className="text-center mt-16"
            data-animate="fade-up"
          >
            <div className="card p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Preocupado por tu presión arterial?
              </h3>
              <p className="body-md mb-6 text-gray-600">
                Nuestros especialistas pueden ayudarte a desarrollar un plan personalizado 
                para mantener tu presión arterial en rangos saludables.
              </p>
              <button className="btn-primary">
                Consultar Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
