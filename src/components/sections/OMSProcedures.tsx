export default function OMSProcedures() {
  const whoGuidelines = [
    {
      category: "Actividad Física",
      icon: "🏃‍♀️",
      recommendations: [
        "150-300 minutos de actividad aeróbica moderada por semana",
        "75-150 minutos de actividad aeróbica vigorosa por semana",
        "Actividades de fortalecimiento muscular 2+ días por semana",
        "Limitar el tiempo sedentario y reemplazarlo con actividad física"
      ],
      current_compliance: "28%",
      gap: "La mayoría de adultos no cumple con las recomendaciones mínimas"
    },
    {
      category: "Alimentación Saludable",
      icon: "🥗",
      recommendations: [
        "Al menos 400g de frutas y verduras al día (5 porciones)",
        "Menos del 10% de calorías de azúcares libres",
        "Menos del 30% de calorías de grasas",
        "Menos de 5g de sal por día"
      ],
      current_compliance: "12%",
      gap: "Consumo excesivo de alimentos ultraprocesados y bajo consumo de vegetales"
    },
    {
      category: "Control de Peso",
      icon: "⚖️",
      recommendations: [
        "IMC entre 18.5-24.9 kg/m²",
        "Circunferencia de cintura <94cm (hombres), <80cm (mujeres)",
        "Prevención del aumento de peso excesivo",
        "Pérdida gradual de peso cuando sea necesario (0.5-1kg/semana)"
      ],
      current_compliance: "35%",
      gap: "Aumento global de sobrepeso y obesidad en todas las edades"
    },
    {
      category: "Prevención de ENT",
      icon: "💊",
      recommendations: [
        "Control regular de presión arterial",
        "Monitoreo de glucosa en sangre",
        "Evaluación periódica del colesterol",
        "Detección temprana de factores de riesgo"
      ],
      current_compliance: "45%",
      gap: "Falta de acceso a servicios preventivos y detección tardía"
    }
  ];

  const globalStats = [
    {
      stat: "1.4 mil millones",
      description: "Adultos con sobrepeso a nivel mundial",
      trend: "↗️ Aumentando"
    },
    {
      stat: "422 millones",
      description: "Personas con diabetes tipo 2",
      trend: "↗️ Aumentando"
    },
    {
      stat: "1.13 mil millones",
      description: "Personas con hipertensión",
      trend: "↗️ Aumentando"
    },
    {
      stat: "17.9 millones",
      description: "Muertes anuales por enfermedades cardiovasculares",
      trend: "➡️ Estable"
    }
  ];

  const implementationChallenges = [
    {
      challenge: "Acceso a Alimentos Saludables",
      description: "Disponibilidad limitada y altos costos",
      solutions: [
        "Políticas de subsidios para alimentos saludables",
        "Programas de educación nutricional",
        "Desarrollo de mercados locales",
        "Regulación de marketing de alimentos ultraprocesados"
      ]
    },
    {
      challenge: "Entornos Urbanos",
      description: "Espacios limitados para actividad física",
      solutions: [
        "Creación de espacios verdes urbanos",
        "Infraestructura para ciclismo",
        "Programas comunitarios de ejercicio",
        "Diseño urbano que promueva la actividad física"
      ]
    },
    {
      challenge: "Sistemas de Salud",
      description: "Enfoque curativo vs. preventivo",
      solutions: [
        "Integración de servicios preventivos",
        "Capacitación de personal sanitario",
        "Tecnologías de telemedicina",
        "Sistemas de información integrados"
      ]
    },
    {
      challenge: "Educación y Conciencia",
      description: "Falta de conocimiento sobre estilos de vida saludables",
      solutions: [
        "Campañas de salud pública",
        "Integración en curricula educativos",
        "Uso de medios digitales",
        "Programas comunitarios de promoción"
      ]
    }
  ];

  return (
    <section id="oms-procedures" className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="heading-lg mb-6 text-balance"
              data-animate="fade-up"
            >
              Procedimientos de la{' '}
              <span className="gradient-text">OMS</span>{' '}
              No Cumplidos
            </h2>
            <p 
              className="body-lg max-w-3xl mx-auto text-balance"
              data-animate="fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Análisis de las recomendaciones de la Organización Mundial de la Salud 
              y la brecha entre las directrices y la realidad global.
            </p>
          </div>

          {/* Global Statistics */}
          <div 
            className="mb-16"
            data-animate="fade-up"
          >
            <div className="card p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-center mb-8">Estadísticas Globales de Salud</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {globalStats.map((item, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{item.stat}</div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <div className="text-xs font-medium text-gray-500">{item.trend}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WHO Guidelines */}
          <div className="mb-16">
            <div 
              className="text-center mb-12"
              data-animate="fade-up"
            >
              <h3 className="heading-md mb-4">Recomendaciones OMS vs. Realidad</h3>
              <p className="body-md text-gray-600">
                Comparación entre las directrices oficiales y el cumplimiento actual
              </p>
            </div>

            <div className="space-y-8">
              {whoGuidelines.map((guideline, index) => (
                <div 
                  key={index}
                  className="card p-8"
                  data-animate="slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Guideline Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-6">
                        <div className="text-4xl mr-4">{guideline.icon}</div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800">{guideline.category}</h4>
                          <p className="text-sm text-gray-600">Recomendaciones Oficiales OMS</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {guideline.recommendations.map((rec, recIndex) => (
                          <li key={recIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compliance Status */}
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-red-600 mb-2">
                          {guideline.current_compliance}
                        </div>
                        <p className="text-sm font-medium text-red-700">Cumplimiento Global</p>
                      </div>
                      
                      <div className="w-full bg-red-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-red-600 h-2 rounded-full" 
                          style={{ width: guideline.current_compliance }}
                        ></div>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4">
                        <h5 className="font-medium text-red-800 mb-2">Brecha Identificada:</h5>
                        <p className="text-sm text-red-700">{guideline.gap}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Challenges */}
          <div 
            className="mb-16"
            data-animate="fade-up"
          >
            <div className="text-center mb-12">
              <h3 className="heading-md mb-4">Desafíos de Implementación</h3>
              <p className="body-md text-gray-600">
                Obstáculos principales y soluciones propuestas para mejorar el cumplimiento
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {implementationChallenges.map((item, index) => (
                <div 
                  key={index}
                  className="card p-8"
                  data-animate="scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">{item.challenge}</h4>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-3">Soluciones Propuestas:</h5>
                    <ul className="space-y-2">
                      {item.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Call */}
          <div 
            className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white text-center"
            data-animate="fade-up"
          >
            <h3 className="text-3xl font-bold mb-6">Sé Parte del Cambio</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              No esperes que cambien las políticas globales. Comienza tu transformación 
              personal siguiendo las recomendaciones de la OMS desde hoy.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold mb-2">Evalúa tu Estado</h4>
                <p className="text-sm opacity-80">Conoce dónde estás respecto a las recomendaciones</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl mb-2">📋</div>
                <h4 className="font-semibold mb-2">Crea tu Plan</h4>
                <p className="text-sm opacity-80">Desarrolla un programa personalizado y realista</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold mb-2">Actúa Consistentemente</h4>
                <p className="text-sm opacity-80">Implementa cambios sostenibles paso a paso</p>
              </div>
            </div>

            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              Comenzar Mi Evaluación
            </button>
          </div>

          {/* Reference Note */}
          <div 
            className="mt-16 text-center"
            data-animate="fade-up"
          >
            <div className="bg-gray-50 rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-sm text-gray-600">
                <strong>Fuentes:</strong> Organización Mundial de la Salud (OMS), Plan de Acción Mundial para la Prevención y Control de ENT 2013-2030, 
                Informe sobre la Situación Mundial de las ENT 2023, Recomendaciones sobre Actividad Física y Comportamiento Sedentario 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
