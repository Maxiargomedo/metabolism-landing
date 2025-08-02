import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const envVars = {
    NODE_ENV: process.env.NODE_ENV,
    EMAIL_USER: process.env.EMAIL_USER ? '✅ Configurado' : '❌ No configurado',
    EMAIL_PASS: process.env.EMAIL_PASS ? '✅ Configurado' : '❌ No configurado',
    EMAIL_FROM: process.env.EMAIL_FROM ? '✅ Configurado' : '❌ No configurado',
    EMAIL_TO: process.env.EMAIL_TO ? '✅ Configurado' : '❌ No configurado',
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS ? '✅ Configurado' : '❌ No configurado',
    // Mostrar todas las variables que contienen EMAIL
    allEmailVars: Object.keys(process.env).filter(key => 
      key.includes('EMAIL') || key.includes('MAIL')
    )
  };

  console.log('🔍 Diagnóstico de variables de entorno:', envVars);

  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: envVars,
    message: 'Endpoint de diagnóstico - Verificar logs del servidor para detalles completos'
  });
}
