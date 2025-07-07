'use client';

import { useState } from 'react';

interface HealthyTip {
  id: number;
  title: string;
  icon: string;
  description: string;
  details: string;
  benefits: string[];
}

export default function HealthyEatingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTip, setSelectedTip] = useState<HealthyTip | null>(null);

  const healthyTips = [
    {
      id: 1,
      title: "Hidratación Consciente",
      icon: "💧",
      description: "Mantén tu cuerpo hidratado para optimizar todos los procesos metabólicos.",
      details: "El agua es fundamental para el transporte de nutrientes, la eliminación de toxinas y el mantenimiento de la temperatura corporal. Bebe al menos 8 vasos de agua al día, preferiblemente entre comidas para no diluir los jugos digestivos.",
      benefits: ["Mejora la digestión", "Aumenta la energía", "Favorece la eliminación de toxinas", "Mantiene la piel saludable"]
    },
    {
      id: 2,
      title: "Alimentación Mindful",
      icon: "🧘‍♀️",
      description: "Come conscientemente, prestando atención a los sabores y texturas.",
      details: "La alimentación consciente implica estar presente durante las comidas, masticar lentamente y disfrutar cada bocado. Esta práctica mejora la digestión y ayuda a reconocer las señales de saciedad.",
      benefits: ["Mejor digestión", "Control natural del peso", "Mayor disfrute de los alimentos", "Reducción del estrés"]
    },
    {
      id: 3,
      title: "Colores Naturales",
      icon: "🌈",
      description: "Incluye una variedad de colores naturales en cada comida.",
      details: "Los diferentes colores en frutas y verduras representan distintos fitoquímicos y antioxidantes. Una dieta colorida asegura una amplia gama de nutrientes esenciales para la salud metabólica.",
      benefits: ["Mayor variedad de nutrientes", "Antioxidantes naturales", "Fortalece el sistema inmune", "Previene enfermedades"]
    },
    {
      id: 4,
      title: "Ritmo Natural",
      icon: "⏰",
      description: "Respeta los ritmos naturales de tu cuerpo para comer.",
      details: "Nuestro metabolismo tiene ritmos circadianos. Desayunar bien, almorzar moderadamente y cenar ligero temprano optimiza la quema de grasas y mejora la calidad del sueño.",
      benefits: ["Mejor calidad del sueño", "Optimiza la quema de grasas", "Mejora la energía", "Regula las hormonas"]
    }
  ];

  const openModal = (tip: HealthyTip) => {
    setSelectedTip(tip);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTip(null);
  };

  return (
    <section id="healthy-eating" className="py-20 bg-gradient-to-b from-emerald-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Alimentación <span className="text-green-600">Saludable</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los secretos de una alimentación que nutre tu cuerpo y acelera tu metabolismo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {healthyTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-green-100"
              onClick={() => openModal(tip)}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
                <button className="mt-4 text-green-600 font-medium hover:text-green-700 transition-colors">
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para transformar tu alimentación?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Comienza hoy mismo con pequeños cambios que generarán grandes resultados
            </p>
            <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-full hover:bg-green-50 transition-colors text-lg">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedTip && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{selectedTip.icon}</span>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {selectedTip.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {selectedTip.details}
              </p>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Beneficios:
                </h4>
                <ul className="space-y-2">
                  {selectedTip.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={closeModal}
                className="mt-8 w-full bg-green-600 text-white font-semibold py-3 rounded-full hover:bg-green-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
