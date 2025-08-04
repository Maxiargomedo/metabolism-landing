import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | MetabolLife - Nutrición y Metabolismo | Chile",
  description: "🤔 Resuelve tus dudas sobre nutrición, metabolismo lento, triglicéridos altos y nuestro programa nutricional personalizado. Preguntas frecuentes sobre Manuel López y MetabolLife Chile.",
  keywords: "preguntas frecuentes nutrición, faq metabolismo lento, dudas triglicéridos, consultas nutricionales, metabolife chile faq, Manuel López preguntas",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es el metabolismo lento y cómo se puede acelerar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El metabolismo lento ocurre cuando tu cuerpo quema calorías más lentamente de lo normal. Se puede acelerar através de alimentación frecuente y estratégica, proteína en cada comida, ejercicio de fuerza y mejora en la calidad del sueño."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Cuánto tiempo toma ver resultados con el programa nutricional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de nuestros pacientes reportan mejoras en energía y digestión en las primeras 2-3 semanas. Los cambios en peso y marcadores metabólicos se ven típicamente entre 4-8 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Quién es Manuel López y cuáles son sus credenciales?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manuel López es un nutricionista chileno-canadiense, certificado en Canadá como Nutricionista con especialidad en Metabolismo. Es el creador del Programa Nutricional Integral Personalizado de MetabolLife."
      }
    },
    {
      "@type": "Question",
      "name": "¿El programa funciona para personas con triglicéridos altos?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Sí, nuestro programa está específicamente diseñado para ayudar a reducir triglicéridos altos, eliminar hígado graso y mejorar marcadores metabólicos a través de alimentación natural y hábitos saludables."
      }
    },
    {
      "@type": "Question",
      "name": "¿La consulta inicial es realmente gratuita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos una consulta nutricional inicial completamente gratuita donde evaluamos tu situación actual y determinamos si nuestro programa es adecuado para ti."
      }
    }
  ]
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <div style={{ 
        minHeight: '100vh', 
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ color: '#2d3748', marginBottom: '2rem' }}>
          Preguntas Frecuentes - MetabolLife
        </h1>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#e53e3e', marginBottom: '1rem' }}>
            ¿Qué es el metabolismo lento y cómo se puede acelerar?
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
            El metabolismo lento ocurre cuando tu cuerpo quema calorías más lentamente de lo normal. 
            Se puede acelerar a través de alimentación frecuente y estratégica, proteína en cada comida, 
            ejercicio de fuerza y mejora en la calidad del sueño.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#e53e3e', marginBottom: '1rem' }}>
            ¿Cuánto tiempo toma ver resultados con el programa nutricional?
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
            La mayoría de nuestros pacientes reportan mejoras en energía y digestión en las primeras 2-3 semanas. 
            Los cambios en peso y marcadores metabólicos se ven típicamente entre 4-8 semanas.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#e53e3e', marginBottom: '1rem' }}>
            ¿Quién es Manuel López y cuáles son sus credenciales?
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
            Manuel López es un nutricionista chileno-canadiense, certificado en Canadá como Nutricionista 
            con especialidad en Metabolismo. Es el creador del Programa Nutricional Integral Personalizado de MetabolLife.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#e53e3e', marginBottom: '1rem' }}>
            ¿El programa funciona para personas con triglicéridos altos?
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
            Sí, nuestro programa está específicamente diseñado para ayudar a reducir triglicéridos altos, 
            eliminar hígado graso y mejorar marcadores metabólicos a través de alimentación natural y hábitos saludables.
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#e53e3e', marginBottom: '1rem' }}>
            ¿La consulta inicial es realmente gratuita?
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
            Sí, ofrecemos una consulta nutricional inicial completamente gratuita donde evaluamos tu situación 
            actual y determinamos si nuestro programa es adecuado para ti.
          </p>
        </div>

        <div style={{ 
          backgroundColor: '#f7fafc', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginTop: '3rem'
        }}>
          <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>
            ¿Tienes más preguntas?
          </h3>
          <p style={{ color: '#4a5568', marginBottom: '1rem' }}>
            Agenda tu consulta gratuita y resuelve todas tus dudas directamente con nuestro equipo.
          </p>
          <a 
            href="/#contacto"
            style={{
              backgroundColor: '#e53e3e',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </>
  );
}
