import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Servicios Nutricionales | MetabolLife - Programa Metabolismo | Chile",
  description: "🩺 Servicios de nutrición especializada: Reactivación metabólica, planes nutricionales personalizados, análisis corporal, coaching nutricional. Tratamos metabolismo lento, triglicéridos altos, hígado graso y más.",
  keywords: "servicios nutricionales, reactivación metabólica, plan nutricional personalizado, análisis corporal, coaching nutricional, tratamiento metabolismo lento, reducir triglicéridos, eliminar hígado graso",
};

export default function ServiciosPage() {
  redirect('/#servicios');
}
