import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    emailUser: process.env.EMAIL_USER ? 'Configurado' : 'No configurado',
    emailPass: process.env.EMAIL_PASS ? 'Configurado' : 'No configurado',
    emailFrom: process.env.EMAIL_FROM || 'No configurado',
    emailTo: process.env.EMAIL_TO || 'No configurado',
    nodeEnv: process.env.NODE_ENV || 'No configurado'
  });
}
