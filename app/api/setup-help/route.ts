import { NextResponse } from 'next/server';

export async function GET() {
  const setupInstructions = {
    status: "Variables de entorno no configuradas",
    problema: "El sistema de emails necesita variables de entorno que no están configuradas en Dokploy",
    
    pasos_dokploy: {
      "1": "Ve a tu panel de Dokploy",
      "2": "Busca tu aplicación 'MetaboLife' o 'metabolism-landing'",
      "3": "Haz clic en tu aplicación",
      "4": "Busca una pestaña/sección llamada 'Environment Variables' o 'Variables de Entorno'",
      "5": "Agrega las siguientes variables una por una:",
      
      variables_requeridas: {
        "EMAIL_USER": "metabolife.informa@gmail.com",
        "EMAIL_PASS": "asiwghcollzavpiw",
        "EMAIL_FROM": "informacion@metabolife.cl", 
        "EMAIL_TO": "metabolife.informa@gmail.com",
        "ALLOWED_ORIGINS": "https://metabolife.cl,https://www.metabolife.cl",
        "NODE_ENV": "production"
      },
      
      "6": "Guarda las variables",
      "7": "Reinicia/Redeploy la aplicación",
      "8": "Visita https://metabolife.cl/api/diagnose para verificar"
    },
    
    ubicaciones_comunes_dokploy: [
      "Settings → Environment Variables",
      "Configuration → Environment", 
      "Deploy → Environment Variables",
      "Application → Settings → Environment",
      "Services → [Tu App] → Environment"
    ],
    
    verificacion: "Después de configurar, todas las variables deberían mostrar '✅ Configurado' en /api/diagnose",
    
    nota_importante: "Sin estas variables, el sistema de emails NO funcionará. Es obligatorio configurarlas."
  };

  return NextResponse.json(setupInstructions, { 
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
