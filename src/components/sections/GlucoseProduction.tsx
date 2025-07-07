export default function GlucoseProduction() {
  const glucoseProcesses = [
    {
      process: "Glucogenólisis",
      description: "Descomposición del glucógeno almacenado",
      location: "Hígado y músculos",
      trigger: "Ayuno corto (4-12 horas)",
      icon: "🏪",
      details: [
        "Libera glucosa de las reservas de glucógeno",
        "Proceso rápido (minutos)",
        "Puede sostener glucemia por 12-18 horas",
        "Regulado por glucagón e insulina"
      ]
    },
    {
      process: "Gluconeogénesis",
      description: "Creación de glucosa a partir de otros compuestos",
      location: "Hígado, riñones, intestino",
      trigger: "Ayuno prolongado (&gt;12 horas)",
      icon: "🏭",
      details: [
        "Utiliza aminoácidos, lactato, glicerol",
        "Proceso más lento (horas)",
        "Fundamental durante el ayuno prolongado",
        "Regulado por cortisol y glucagón"
      ]
    },
    {
      process: "Absorción Intestinal",
      description: "Absorción directa de carbohidratos",
      location: "Intestino delgado",
      trigger: "Ingesta de alimentos",
      icon: "🍽️",
      details: [
        "Fuente principal durante la alimentación",
        "Absorción rápida (30-60 minutos)",
        "Estimula liberación de insulina",
        "Prioridad sobre la producción endógena"
      ]
    }
  ];

  const regulationFactors = [
    {
      factor: "Insulina",
      role: "Hormona anabólica",
      effect: "Inhibe producción de glucosa",
      mechanism: "Bloquea glucogenólisis y gluconeogénesis",
      conditions: "Alta después de comer"
    },
    {
      factor: "Glucagón",
      role: "Hormona catabólica",
      effect: "Estimula producción de glucosa",
      mechanism: "Activa glucogenólisis y gluconeogénesis",
      conditions: "Alta durante el ayuno"
    },
    {
      factor: "Cortisol",
      role: "Hormona del estrés",
      effect: "Aumenta producción de glucosa",
      mechanism: "Promueve gluconeogénesis",
      conditions: "Elevado en estrés y ayuno prolongado"
    },
    {
      factor: "Adrenalina",
      role: "Hormona de emergencia",
      effect: "Libera glucosa rápidamente",
      mechanism: "Estimula glucogenólisis muscular",
      conditions: "Situaciones de estrés agudo"
    }
  ];

  const metabolicStates = [
    {
      state: "Estado Postprandial",
      duration: "0-4 horas después de comer",
      primary_source: "Absorción intestinal",
      glucose_level: "100-140 mg/dL",
      hormones: "Insulina alta, glucagón bajo",
      processes: ["Síntesis de glucógeno", "Lipogénesis", "Síntesis proteica"]
    },
    {
      state: "Estado Postabsortivo",
      duration: "4-12 horas",
      primary_source: "Glucogenólisis hepática",
      glucose_level: "80-100 mg/dL",
      hormones: "Insulina baja, glucagón aumenta",
      processes: ["Descomposición glucógeno", "Inicio gluconeogénesis", "Lipólisis"]
    },
    {
      state: "Ayuno Prolongado",
      duration: "&gt;12 horas",
      primary_source: "Gluconeogénesis",
      glucose_level: "70-80 mg/dL",
      hormones: "Glucagón alto, cortisol elevado",
      processes: ["Gluconeogénesis intensa", "Cetogénesis", "Proteólisis"]
    }
  ];

  const clinicalImplications = [
    {
      condition: "Diabetes Tipo 1",
      issue: "Deficiencia absoluta de insulina",
      impact: "Producción excesiva de glucosa",
      management: "Insulina exógena para controlar producción"
    },
    {
      condition: "Diabetes Tipo 2",
      issue: "Resistencia a la insulina",
      impact: "Producción hepática no suprimida",
      management: "Metformina para reducir gluconeogénesis"
    },
    {
      condition: "Síndrome Metabólico",
      issue: "Resistencia a la insulina e inflamación",
      impact: "Hiperglucemia en ayunas",
      management: "Pérdida de peso y ejercicio regular"
    },
    {
      condition: "Estrés Crónico",
      issue: "Cortisol elevado persistente",
      impact: "Gluconeogénesis excesiva",
      management: "Manejo del estrés y técnicas de relajación"
    }
  ];

  const optimizationTips = [
    {
      category: "Timing de Comidas",
      icon: "⏰",
      strategies: [
        "Ayuno intermitente controlado",
        "Espaciado regular entre comidas",
        "Evitar comidas tardías",
        "Sincronización con ritmo circadiano"
      ]
    },
    {
      category: "Tipo de Ejercicio",
      icon: "🏋️‍♀️",
      strategies: [
        "Ejercicio en ayunas para deplección glucógeno",
        "Entrenamiento de resistencia",
        "HIIT para mejorar sensibilidad insulínica",
        "Caminatas después de comidas"
      ]
    },
    {
      category: "Composición Dietética",
      icon: "🥑",
      strategies: [
        "Reducir carbohidratos refinados",
        "Aumentar fibra soluble",
        "Incluir grasas saludables",
        "Proteínas de alta calidad"
      ]
    },
    {
      category: "Factores de Estilo de Vida",
      icon: "😴",
      strategies: [
        "Sueño reparador 7-9 horas",
        "Manejo del estrés",
        "Hidratación adecuada",
        "Exposición solar matutina"
      ]
    }
  ];

  return (
    <section id="glucose-production" className="section-padding bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="heading-lg mb-6 text-balance"
              data-animate="fade-up"
            >
              El Cuerpo Produce{' '}
              <span className="gradient-text">Glucosa</span>
            </h2>
            <p 
              className="body-lg max-w-3xl mx-auto text-balance"
              data-animate="fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Comprende cómo tu cuerpo genera y regula la glucosa de manera natural, 
              y cómo optimizar estos procesos para un metabolismo saludable.
            </p>
          </div>

          {/* Glucose Production Processes */}
          <div className="mb-16">
            <div 
              className="text-center mb-12"
              data-animate="fade-up"
            >
              <h3 className="heading-md mb-4">Procesos de Producción de Glucosa</h3>
              <p className="body-md text-gray-600">
                Los tres mecanismos principales que tu cuerpo utiliza para mantener niveles adecuados de glucosa
              </p>
            </div>

            <div className="space-y-8">
              {glucoseProcesses.map((process, index) => (
                <div 
                  key={index}
                  className="card p-8"
                  data-animate="slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-6">
                        <div className="text-4xl mr-4">{process.icon}</div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800">{process.process}</h4>
                          <p className="text-gray-600">{process.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Ubicación:</h5>
                          <p className="text-sm text-gray-600">{process.location}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-700 mb-2">Se Activa Cuando:</h5>
                          <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: process.trigger }}></p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {process.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">{process.icon}</span>
                        </div>
                        <h5 className="font-semibold text-gray-800 mb-2">{process.process}</h5>
                        <div className="text-sm text-gray-600">
                          <div className="mb-3">
                            <div className="font-medium">Tiempo de Activación</div>
                            <div dangerouslySetInnerHTML={{ __html: process.trigger }}></div>
                          </div>
                          <div className="bg-white/50 rounded-lg p-3">
                            <div className="font-medium mb-1">Función Principal</div>
                            <div>{process.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metabolic States */}
          <div className="mb-16">
            <div 
              className="text-center mb-12"
              data-animate="fade-up"
            >
              <h3 className="heading-md mb-4">Estados Metabólicos</h3>
              <p className="body-md text-gray-600">
                Cómo cambia la producción de glucosa según el tiempo desde la última comida
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {metabolicStates.map((state, index) => (
                <div 
                  key={index}
                  className="card p-6"
                  data-animate="scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold text-gray-800 mb-4">{state.state}</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase mb-1">Duración</div>
                      <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: state.duration }}></div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase mb-1">Fuente Principal</div>
                      <div className="text-sm text-gray-700">{state.primary_source}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase mb-1">Nivel de Glucosa</div>
                      <div className="text-sm font-medium text-blue-600">{state.glucose_level}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase mb-1">Estado Hormonal</div>
                      <div className="text-sm text-gray-700">{state.hormones}</div>
                    </div>
                    
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase mb-1">Procesos Activos</div>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {state.processes.map((process, processIndex) => (
                          <li key={processIndex} className="flex items-start">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            {process}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regulation Factors */}
          <div className="mb-16">
            <div 
              className="text-center mb-12"
              data-animate="fade-up"
            >
              <h3 className="heading-md mb-4">Factores de Regulación</h3>
              <p className="body-md text-gray-600">
                Las hormonas clave que controlan la producción y utilización de glucosa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {regulationFactors.map((factor, index) => (
                <div 
                  key={index}
                  className="card p-6"
                  data-animate="slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-800">{factor.factor}</h4>
                    <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {factor.role}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Efecto en Glucosa:</div>
                      <div className="text-sm text-gray-600">{factor.effect}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Mecanismo:</div>
                      <div className="text-sm text-gray-600">{factor.mechanism}</div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-700 mb-1">Condiciones de Elevación:</div>
                      <div className="text-sm text-gray-600">{factor.conditions}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Strategies */}
          <div 
            className="mb-16"
            data-animate="fade-up"
          >
            <div className="text-center mb-12">
              <h3 className="heading-md mb-4">Optimización del Metabolismo de Glucosa</h3>
              <p className="body-md text-gray-600">
                Estrategias para mejorar la regulación natural de glucosa en tu cuerpo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {optimizationTips.map((tip, index) => (
                <div 
                  key={index}
                  className="card p-6 text-center group hover:shadow-lg transition-all duration-300"
                  data-animate="scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tip.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-4">{tip.category}</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tip.strategies.map((strategy, strategyIndex) => (
                      <li key={strategyIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {strategy}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Implications */}
          <div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
            data-animate="fade-up"
          >
            <div className="text-center mb-8">
              <h3 className="heading-md mb-4">Implicaciones Clínicas</h3>
              <p className="body-md text-gray-600">
                Condiciones relacionadas con la desregulación de la producción de glucosa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {clinicalImplications.map((implication, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-xl p-6"
                >
                  <h4 className="font-semibold text-gray-800 mb-3">{implication.condition}</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-red-600 mb-1">Problema:</div>
                      <div className="text-sm text-gray-600">{implication.issue}</div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-orange-600 mb-1">Impacto:</div>
                      <div className="text-sm text-gray-600">{implication.impact}</div>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                      <div className="text-sm font-medium text-green-700 mb-1">Manejo:</div>
                      <div className="text-sm text-green-600">{implication.management}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div 
            className="text-center mt-16"
            data-animate="fade-up"
          >
            <div className="card p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Quieres optimizar tu metabolismo de glucosa?
              </h3>
              <p className="body-md mb-6 text-gray-600">
                Aprende a trabajar con los procesos naturales de tu cuerpo para mantener 
                niveles estables de glucosa y mejorar tu salud metabólica.
              </p>
              <button className="btn-primary">
                Obtener Plan Personalizado
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
