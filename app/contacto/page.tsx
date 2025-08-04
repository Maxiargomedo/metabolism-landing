import type { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Contacto | MetabolLife - Consulta Nutricional Gratuita | Chile",
  description: "📞 Agenda tu consulta nutricional gratuita con Manuel López, nutricionista certificado en Canadá. Especialista en metabolismo lento, adelgazar naturalmente y programas nutricionales personalizados en Chile.",
  keywords: "consulta nutricional gratuita, nutricionista chile, contacto metabolife, Manuel López nutricionista, consulta metabolismo, cita nutricionista, asesoría nutricional chile",
};

export default function ContactoPage() {
  redirect('/#contacto');
}
