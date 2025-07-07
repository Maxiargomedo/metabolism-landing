export default function HabitChange() {
  const habitSteps = [
    {
      step: 1,
      title: "Evaluación Inicial",
      description: "Identifica tus hábitos actuales y áreas de mejora",
      icon: "📊",
      tasks: [
        "Registro alimentario por 7 días",
        "Evaluación de rutinas actuales",
        "Identificación de patrones negativos",
        "Establecimiento de objetivos SMART"
      ]
    },
    {
      step: 2,
      title: "Planificación",
      description: "Diseña un plan realista y sostenible",
      icon: "📋",
      tasks: [
        "Selección de 1-2 hábitos prioritarios",
        "Creación de rutinas específicas",
        "Preparación del entorno",
        "Establecimiento de recordatorios"
      ]
    },
    {
      step: 3,
      title: "Implementación",
      description: "Comienza con cambios pequeños y consistentes",
      icon: "🚀",
      tasks: [
        "Inicio con micro-hábitos",
        "Práctica diaria por 21 días",
        "Monitoreo y ajustes",
        "Celebración de pequeños logros"
      ]
    },
    {
      step: 4,
      title: "Consolidación",
      description: "Refuerza y expande tus nuevos hábitos",
      icon: "💪",
      tasks: [
        "Automatización de rutinas",
        "Expansión gradual",
        "Creación de sistemas de apoyo",
        "Planificación a largo plazo"
      ]
    }
  ];

  const commonChallenges = [
    {
      challenge: "Falta de tiempo",
      solution: "Meal prep y planificación semanal",
      tips: ["Dedica 2 horas el domingo", "Prepara porciones individuales", "Usa electrodomésticos eficientes"]
    },
    {
      challenge: "Falta de motivación",
      solution: "Sistema de recompensas y seguimiento",
      tips: ["Establece metas pequeñas", "Celebra cada logro", "Encuentra un compañero de accountability"]
    },
    {
      challenge: "Tentaciones alimentarias",
      solution: "Modificación del entorno",
      tips: ["Elimina alimentos procesados de casa", "Ten snacks saludables a mano", "Identifica triggers emocionales"]
    },
    {
      challenge: "Rutinas establecidas",
      solution: "Sustitución gradual",
      tips: ["Cambia un hábito a la vez", "Usa recordatorios visuales", "Vincula nuevos hábitos con existentes"]
    }
  ];

  const metabolismTips = [
    {
      category: "Horarios de Comida",
      icon: "⏰",
      benefits: ["Regulación del ritmo circadiano", "Optimización de la digestión", "Control del apetito"],
      implementation: "Establece horarios fijos para las 3 comidas principales, con un margen de ±1 hora."
    },
    {
      category: "Actividad Física",
      icon: "🏃‍♀️",
      benefits: ["Aumento del gasto energético", "Mejora de la sensibilidad a la insulina", "Fortalecimiento muscular"],
      implementation: "Combina 150 min de cardio semanal con 2 sesiones de fuerza."
    },
    {
      category: "Hidratación",
      icon: "💧",
      benefits: ["Optimización del metabolismo", "Mejora de la termogénesis", "Apoyo a la digestión"],
      implementation: "Bebe un vaso de agua al despertar y antes de cada comida."
    },
    {
      category: "Descanso",
      icon: "😴",
      benefits: ["Regulación hormonal", "Recuperación muscular", "Control del cortisol"],
      implementation: "Mantén 7-9 horas de sueño con horarios consistentes."
    }
  ];

  const behaviorTechniques = [
    {
      technique: "Stacking de Hábitos",
      description: "Vincula un nuevo hábito con uno existente",
      example: "Después de lavarme los dientes, tomaré mi suplemento de vitamina D"
    },
    {
      technique: "Regla de los 2 Minutos",
      description: "Haz que el nuevo hábito tome menos de 2 minutos",
      example: "En lugar de 'comer saludable', empieza con 'comer una manzana después del almuerzo'"
    },
    {
      technique: "Diseño del Entorno",
      description: "Modifica tu entorno para facilitar buenos hábitos",
      example: "Deja frutas visibles en la cocina y esconde los snacks procesados"
    },
    {
      technique: "Seguimiento Visual",
      description: "Usa un sistema visual para monitorear el progreso",
      example: "Marca con X cada día que completes tu objetivo en un calendario"
    }
  ];

  return (
    <section id="habit-change" className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className="heading-lg mb-6 text-balance"
              data-animate="fade-up"
            >
              Cambio de{' '}
              <span className="gradient-text">Hábitos</span>{' '}
              y Alimentación
            </h2>
            <p 
              className="body-lg max-w-3xl mx-auto text-balance"
              data-animate="fade-up"
              style={{ animationDelay: '200ms' }}
            >
              Transforma tu relación con la comida y desarrolla hábitos que optimicen 
              tu metabolismo de manera sostenible a largo plazo.
            </p>
          </div>

          {/* Habit Formation Steps */}
          <div className="mb-16">
            <div 
              className="text-center mb-12"
              data-animate="fade-up"
            >
              <h3 className="heading-md mb-4">Proceso de Formación de Hábitos</h3>
              <p className="body-md text-gray-600">
                Una metodología científica para crear cambios duraderos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {habitSteps.map((step, index) => (
                <div 
                  key={index}
                  className="relative"
                  data-animate="scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="card p-6 text-center h-full">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <div className="text-4xl mb-4 mt-4">{step.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-3">{step.title}</h4>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {step.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < habitSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Common Challenges */}
          <div className="mb-16">
            <div 
              className="text-center mb-12"
              data-animate="fade-up"
            >
              <h3 className="heading-md mb-4">Desafíos Comunes y Soluciones</h3>
              <p className="body-md text-gray-600">
                Estrategias probadas para superar los obstáculos más frecuentes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commonChallenges.map((item, index) => (
                <div 
                  key={index}
                  className="card p-6"
                  data-animate="slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{item.challenge}</h4>
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-600 font-medium">{item.solution}</p>
                      </div>
                      <ul className="ml-7 space-y-1">
                        {item.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-xs text-gray-500 flex items-start">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-2"></div>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metabolism Optimization */}
          <div className="mb-16">
            <div 
              className="text-center mb-12"
              data-animate="fade-up"
            >
              <h3 className="heading-md mb-4">Optimización del Metabolismo</h3>
              <p className="body-md text-gray-600">
                Hábitos específicos que potencian tu función metabólica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metabolismTips.map((tip, index) => (
                <div 
                  key={index}
                  className="card p-6 text-center group hover:shadow-lg transition-all duration-300"
                  data-animate="scale-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tip.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-3">{tip.category}</h4>
                  <div className="space-y-3 mb-4">
                    <div>
                      <h5 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Beneficios:</h5>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {tip.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-700">{tip.implementation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Behavior Change Techniques */}
          <div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
            data-animate="fade-up"
          >
            <div className="text-center mb-8">
              <h3 className="heading-md mb-4">Técnicas de Cambio Comportamental</h3>
              <p className="body-md text-gray-600">
                Estrategias basadas en neurociencia para formar hábitos duraderos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {behaviorTechniques.map((technique, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="font-semibold text-gray-800 mb-3">{technique.technique}</h4>
                  <p className="text-sm text-gray-600 mb-4">{technique.description}</p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-sm text-blue-800">
                      <span className="font-medium">Ejemplo: </span>
                      {technique.example}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Tracking */}
          <div 
            className="mt-16"
            data-animate="fade-up"
          >
            <div className="card p-8 lg:p-12 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">
                ¿Listo para Transformar tus Hábitos?
              </h3>
              <p className="body-md mb-6 text-gray-600">
                Nuestro programa personalizado te acompañará en cada paso del proceso 
                de cambio, con seguimiento científico y apoyo profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Comenzar Evaluación
                </button>
                <button className="btn-secondary">
                  Descargar Guía Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
