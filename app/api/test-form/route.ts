import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('📥 Datos recibidos en test:', body);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test exitoso',
      receivedData: body,
      envVars: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS ? 'CONFIGURADA' : 'NO CONFIGURADA',
        EMAIL_FROM: process.env.EMAIL_FROM,
        EMAIL_TO: process.env.EMAIL_TO
      }
    });
  } catch (error) {
    console.error('❌ Error en test:', error);
    return NextResponse.json(
      { error: 'Error en test', details: error instanceof Error ? error.message : 'Error desconocido' },
      { status: 500 }
    );
  }
}
