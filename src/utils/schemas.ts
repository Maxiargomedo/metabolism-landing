export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "MetabolLife",
  "alternateName": "MetabolLife Chile",
  "description": "Centro especializado en nutrición cuyo propósito es educar a las personas para que puedan mejorar su metabolismo y salud a través de un Programa Nutricional Integral Personalizado.",
  "url": "https://metabolife.com",
  "logo": "https://metabolife.com/img/doctora-nutricionista-da-notas_701961-575.png",
  "image": "https://metabolife.com/img/doctora-nutricionista-da-notas_701961-575.png",
  "founder": {
    "@type": "Person",
    "name": "Manuel López",
    "jobTitle": "Nutricionista Certificado",
    "description": "Nutricionista chileno-canadiense, certificado en Canadá como Nutricionista con especialidad en Metabolismo"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CL",
    "addressLocality": "Chile"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  },
  "medicalSpecialty": [
    "Nutrition",
    "Metabolism",
    "Weight Management",
    "Metabolic Disorders"
  ],
  "serviceType": [
    "Consulta Nutricional",
    "Programa Nutricional Personalizado", 
    "Análisis Metabólico",
    "Coaching Nutricional"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalService",
  "name": "Programa Nutricional Integral Personalizado",
  "description": "Programa especializado en reactivación metabólica para adelgazar, reducir triglicéridos, eliminar hígado graso y mejorar la salud naturalmente",
  "provider": {
    "@type": "MedicalOrganization",
    "name": "MetabolLife"
  },
  "serviceType": "Nutrition Counseling",
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": 18
  },
  "areaServed": {
    "@type": "Country",
    "name": "Chile"
  }
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Manuel López",
  "jobTitle": "Nutricionista Certificado",
  "description": "Nutricionista chileno-canadiense, certificado en Canadá como Nutricionista con especialidad en Metabolismo",
  "nationality": "Chilean",
  "alumniOf": "Institución Canadiense de Nutrición",
  "worksFor": {
    "@type": "MedicalOrganization",
    "name": "MetabolLife"
  },
  "knowsAbout": [
    "Metabolismo",
    "Nutrición Personalizada",
    "Reactivación Metabólica",
    "Tratamiento Natural"
  ]
};
