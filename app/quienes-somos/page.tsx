import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Quiénes Somos | MetabolLife - Manuel López Nutricionista | Chile",
  description: "👨‍⚕️ Conoce a Manuel López, nutricionista chileno-canadiense certificado en Canadá con especialidad en Metabolismo. Centro especializado en nutrición que educa para mejorar tu metabolismo y salud naturalmente.",
  keywords: "Manuel López nutricionista, quienes somos metabolife, nutricionista chileno canadá, especialista metabolismo, centro nutrición chile, filosofía nutricional, educación nutricional",
};

export default function QuienesSomosPage() {
  redirect('/#quienes-somos');
}
