'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Wrapper, 
  Inner, 
  SectionTitle,
  SectionSubtitle,
  TabsContainer,
  TabButton,
  TabContent,
  ContentCard,
  ContentTitle,
  ContentText,
  InfoList,
  InfoItem,
  StatisticsGrid,
  StatCard,
  BackgroundGradient
} from './styles';

const HealthEducation = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState('glucometer');

  const tabs = [
    { id: 'glucometer', label: 'Glucómetro', icon: '🩺' },
    { id: 'pressure', label: 'Presión Arterial', icon: '❤️' },
    { id: 'magnesium', label: 'Magnesio', icon: '⚡' }
  ];

  const glucometerContent = {
    title: "Glucómetro - Tu Herramienta de Control",
    description: "También conocido como medidor de glucosa en sangre, es un dispositivo médico que se utiliza para medir la cantidad de glucosa (azúcar) en la sangre. Es una herramienta esencial para personas con diabetes, ya que les permite monitorear sus niveles de glucosa y ajustar su tratamiento según sea necesario. Hay glucómetros que no requieren pinchazo que utilizan tecnología avanzada, como la espectroscopia. La glucosa se mide en mg/dL (miligramos por decilitro).",
    
    whyUse: [
      "La mejor forma de monitorear tu salud es medir la glucosa",
      "Te evitarás muchos problemas de salud y malestares extraños",
      "Puede ayudarte a no convertirte algún día en diabético",
      "Si quieres evitar la obesidad y el sobrepeso, tienes que saber qué está pasando con tu glucosa",
      "Saber qué está ocasionando la subida de presión",
      "Tomar el control de tu salud",
      "Dejas de comer a ciegas",
      "Te ayuda a detectar los alimentos agresores",
      "Puedes entender qué está pasando con la glucosa en tu cuerpo",
      "Tendrás menos riesgo de destrucción celular y daño en hígado, riñones, páncreas, tiroides",
      "Si haces ejercicio y te cuidas en lo que comes y tu cuerpo sigue sin poder acabar con la grasa, seguramente tu glucosa está muy alta",
      "Glucosa + Insulina = Grasa"
    ],

    ranges: [
      { condition: "Diabetes", range: "125 mg/dL o más", color: "#f44336" },
      { condition: "Pre-diabetes", range: "100-124 mg/dL", color: "#ff9800" },
      { condition: "Pre-obesidad", range: "86-99 mg/dL", color: "#ffc107" },
      { condition: "Óptima", range: "85 mg/dL o menos", color: "#4caf50" }
    ],

    statistics: [
      { country: "Chile", diabetes: "14%", obesity: "74%" },
      { country: "Canadá", diabetes: "9.4%", obesity: "27.2%" },
      { country: "USA", diabetes: "11.6%", obesity: "40%" },
      { country: "México", diabetes: "18.3%", obesity: "75.1%" }
    ]
  };

  const pressureContent = {
    title: "Presión Arterial - El Motor de tu Circulación",
    description: "La presión arterial es la fuerza que la sangre ejerce contra las paredes de las arterias a medida que el corazón bombea sangre por todo el cuerpo. Sirve para asegurar que la sangre, con su valioso contenido de oxígeno y nutrientes, llegue a todos los rincones del organismo.",
    
    explanation: "En términos de presión arterial, sistólica y diastólica se refieren a las dos mediciones que indican la fuerza de la sangre contra las paredes de las arterias. La presión arterial se expresa con dos números, separados por una barra, por ejemplo, 120/80 mmHg. El primer número (120 en el ejemplo) representa la presión sistólica, que es la presión en las arterias cuando el corazón se contrae. El segundo número (80 en el ejemplo) representa la presión diastólica, que es la presión en las arterias cuando el corazón se relaja entre latidos.",

    keyFacts: [
      "Lo que eleva la presión arterial no es la sal, sino los carbohidratos refinados",
      "Harinas, pan, pastas, arroz y refrescos disparan la presión al convertirse en azúcares simples",
      "Estos alimentos provocan aumento de insulina, que eleva la retención de sodio y agua",
      "Una alimentación desbalanceada sumada a la falta de magnesio y potasio son la combinación perfecta para la hipertensión",
      "Más del 70% de personas con diabetes tiene problemas de hipertensión",
      "El cuerpo utiliza la sangre como vehículo para llevar oxígeno y nutrientes a 37 billones de células",
      "Una presión normal debe estar en rangos de 110/70, 120/80, 130/90 mmHg"
    ],

    solutions: {
      low: "Presión Baja: Comer sal, magnesio y potasio, así la presión sube y se estabiliza",
      high: "Presión Alta: Bajar carbohidratos, comer magnesio y potasio, comer menos sal hasta que la presión se regule"
    }
  };

  const magnesiumContent = {
    title: "Magnesio - El Mineral de la Energía y Relajación",
    description: "El magnesio es un mineral esencial para la salud humana, involucrado en más de 300 funciones bioquímicas en el cuerpo. Es fundamental para el funcionamiento de músculos y nervios, la regulación de la presión arterial, el mantenimiento de huesos fuertes, la producción de energía y proteínas, y el apoyo a un sistema inmunológico saludable.",

    functions: [
      "Músculos y nervios: Ayuda a la función muscular normal y transmisión de señales nerviosas",
      "Salud ósea: Contribuye a la formación y mantenimiento de huesos fuertes",
      "Equilibrio electrolítico y energético: Participa en la producción de energía",
      "Función cardíaca: Ayuda a mantener un ritmo cardíaco regular",
      "Sistema inmunológico: Apoya la función inmunológica"
    ],

    deficiencySymptoms: [
      "Depresión - muchas veces no necesitas un psiquiatra, necesitas magnesio",
      "Fatiga física o mental - la energía se produce por ATP (Magnesium ATP)",
      "Tensión en la espalda alta",
      "Dolores de cabeza, especialmente en mujeres",
      "Dolores pre-menstruales",
      "Nerviosismo y ansiedad",
      "Irritabilidad y déficit de atención",
      "Insomnio",
      "Arritmia del corazón",
      "Pérdida de huesos (osteoporosis)"
    ],

    sources: [
      "Vegetales de hoja verde oscura: espinacas y col rizada (kale)",
      "Frutas: plátanos, aguacates y frutas secas",
      "Nueces y semillas: almendras, anacardos y semillas de calabaza",
      "Legumbres: frijoles y lentejas",
      "Granos integrales: arroz integral y avena",
      "Productos de soya: tofu, leche de soya"
    ],

    recommendations: [
      { group: "Hombres adultos", amount: "400-420 mg/día" },
      { group: "Mujeres adultas", amount: "310-320 mg/día" },
      { group: "Embarazadas", amount: "350-360 mg/día" },
      { group: "Mujeres lactantes", amount: "310-360 mg/día" }
    ]
  };

  const renderGlucometerContent = () => (
    <ContentCard>
      <ContentTitle>{glucometerContent.title}</ContentTitle>
      <ContentText>{glucometerContent.description}</ContentText>
      
      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        ¿Por qué usar un glucómetro aunque no seas diabético o hipertenso?
      </ContentText>
      <InfoList>
        {glucometerContent.whyUse.map((item, index) => (
          <InfoItem key={index}>• {item}</InfoItem>
        ))}
      </InfoList>

      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        Rangos de Glucosa en Ayuno
      </ContentText>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        {glucometerContent.ranges.map((range, index) => (
          <div key={index} style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: `2px solid ${range.color}`,
            background: `${range.color}10`
          }}>
            <strong style={{ color: range.color }}>{range.condition}:</strong> {range.range}
          </div>
        ))}
      </div>

      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        Estadísticas Mundiales 2025 (Fuente: OMS)
      </ContentText>
      <StatisticsGrid>
        {glucometerContent.statistics.map((stat, index) => (
          <StatCard key={index}>
            <h4>{stat.country}</h4>
            <p>Diabetes: <strong>{stat.diabetes}</strong></p>
            <p>Obesidad: <strong>{stat.obesity}</strong></p>
          </StatCard>
        ))}
      </StatisticsGrid>
    </ContentCard>
  );

  const renderPressureContent = () => (
    <ContentCard>
      <ContentTitle>{pressureContent.title}</ContentTitle>
      <ContentText>{pressureContent.description}</ContentText>
      <ContentText style={{ marginTop: '1rem' }}>{pressureContent.explanation}</ContentText>
      
      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        Datos Clave sobre la Presión Arterial
      </ContentText>
      <InfoList>
        {pressureContent.keyFacts.map((fact, index) => (
          <InfoItem key={index}>• {fact}</InfoItem>
        ))}
      </InfoList>

      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        Soluciones Naturales
      </ContentText>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        <div style={{
          padding: '1rem',
          borderRadius: '0.5rem',
          border: '2px solid #2196f3',
          background: '#2196f310'
        }}>
          <strong style={{ color: '#2196f3' }}>📉 {pressureContent.solutions.low}</strong>
        </div>
        <div style={{
          padding: '1rem',
          borderRadius: '0.5rem',
          border: '2px solid #f44336',
          background: '#f4433610'
        }}>
          <strong style={{ color: '#f44336' }}>📈 {pressureContent.solutions.high}</strong>
        </div>
      </div>
    </ContentCard>
  );

  const renderMagnesiumContent = () => (
    <ContentCard>
      <ContentTitle>{magnesiumContent.title}</ContentTitle>
      <ContentText>{magnesiumContent.description}</ContentText>
      
      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        Funciones Clave del Magnesio
      </ContentText>
      <InfoList>
        {magnesiumContent.functions.map((func, index) => (
          <InfoItem key={index}>• {func}</InfoItem>
        ))}
      </InfoList>

      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        15 Problemas que Resuelve el Magnesio
      </ContentText>
      <InfoList>
        {magnesiumContent.deficiencySymptoms.map((symptom, index) => (
          <InfoItem key={index}>• {symptom}</InfoItem>
        ))}
      </InfoList>

      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        Fuentes Naturales de Magnesio
      </ContentText>
      <InfoList>
        {magnesiumContent.sources.map((source, index) => (
          <InfoItem key={index}>• {source}</InfoItem>
        ))}
      </InfoList>

      <ContentText style={{ fontWeight: '600', marginTop: '2rem', fontSize: '1.1rem' }}>
        Recomendaciones Diarias
      </ContentText>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        {magnesiumContent.recommendations.map((rec, index) => (
          <div key={index} style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '2px solid #4caf50',
            background: '#4caf5010'
          }}>
            <strong style={{ color: '#4caf50' }}>{rec.group}:</strong> {rec.amount}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        borderRadius: '0.75rem',
        background: 'linear-gradient(135deg, #4caf50, #8bc34a)',
        color: 'white'
      }}>
        <h4 style={{ margin: '0 0 1rem 0' }}>💡 Consejo Profesional</h4>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          La forma más fácil de suplementar magnesio es con jugos verdes de vegetales. 
          Un jugo de 250ml tiene mínimo 160mg de magnesio biodisponible. 
          Se recomienda el citrato de magnesio en polvo para ajustar la dosis gradualmente.
        </p>
      </div>
    </ContentCard>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'glucometer':
        return renderGlucometerContent();
      case 'pressure':
        return renderPressureContent();
      case 'magnesium':
        return renderMagnesiumContent();
      default:
        return renderGlucometerContent();
    }
  };

  return (
    <Wrapper id="health-education" ref={ref}>
      <BackgroundGradient />
      
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Educación Nutricional</SectionTitle>
          <SectionSubtitle>
            Conocimiento esencial para tomar control de tu salud. Aprende sobre las herramientas 
            y minerales que pueden transformar tu bienestar.
          </SectionSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <TabsContainer>
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="icon">{tab.icon}</span>
                <span className="label">{tab.label}</span>
              </TabButton>
            ))}
          </TabsContainer>

          <TabContent
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderContent()}
          </TabContent>
        </motion.div>
      </Inner>
    </Wrapper>
  );
};

export default HealthEducation;
