import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface WhatsAppNotificationData {
  name: string;
  email: string;
  phone?: string;
}

// Configuración del transportador de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saminon.maxi20@gmail.com',
    pass: 'aodf rbsj mhig kdul'
  }
});

export async function POST(request: NextRequest) {
  try {
    const data: WhatsAppNotificationData = await request.json();
    
    // Email de notificación para nosotros sobre WhatsApp
    const adminNotificationOptions = {
      from: 'saminon.maxi20@gmail.com',
      to: 'saminon.maxi20@gmail.com',
      subject: `🟢 ${data.name} prefiere chatear por WhatsApp - MetaboLife`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #25D366; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0;">💬 WhatsApp</h1>
            <h2 style="margin: 10px 0 0 0;">Cliente prefiere WhatsApp</h2>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="color: #25D366; margin-bottom: 20px;">🚀 Cliente quiere comunicación directa:</h3>
            
            <div style="margin-bottom: 15px;">
              <strong>👤 Nombre:</strong> ${data.name}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong>📧 Email:</strong> ${data.email}
            </div>
            
            ${data.phone ? `
            <div style="margin-bottom: 15px;">
              <strong>📞 Teléfono:</strong> ${data.phone}
            </div>
            ` : ''}
            
            <div style="background-color: #e8f8e8; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <strong>📋 Acción recomendada:</strong> Este cliente ha elegido WhatsApp para una comunicación más rápida. No envíes más emails de seguimiento por ahora.
            </div>
            
            <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin-top: 15px; border-left: 4px solid #ffc107;">
              <strong>⏰ Fecha y Hora:</strong> ${new Date().toLocaleString('es-ES')}
            </div>
          </div>
        </div>
      `
    };

    // Email de confirmación para el usuario sobre el cambio a WhatsApp
    const userConfirmationOptions = {
      from: 'saminon.maxi20@gmail.com',
      to: data.email,
      subject: '💬 Confirmación: Comunicación por WhatsApp - MetaboLife',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #25D366; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0;">💬 WhatsApp</h1>
            <h2 style="margin: 10px 0 0 0;">¡Perfecto!</h2>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="color: #25D366;">Hola ${data.name},</h3>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              ¡Excelente elección! Has optado por comunicarte con nosotros a través de WhatsApp para una atención más rápida y directa.
            </p>
            
            <div style="background-color: #e8f8e8; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h4 style="color: #25D366; margin-top: 0;">📋 ¿Qué sucede ahora?</h4>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Ya no recibirás más emails de seguimiento</li>
                <li>Toda la comunicación será por WhatsApp</li>
                <li>Respuesta más rápida y directa</li>
                <li>Atención personalizada en tiempo real</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://wa.me/56945435007?text=Hola%20MetaboLife,%20soy%20${encodeURIComponent(data.name)}%20y%20prefiero%20comunicarme%20por%20WhatsApp." 
                 style="background-color: #25D366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block; font-size: 16px;">
                💬 Continuar en WhatsApp
              </a>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
              <p>MetaboLife - Nutrición científica basada en evidencias</p>
              <p>📍 Padre Hurtado 187, Estación Central, Santiago</p>
            </div>
          </div>
        </div>
      `
    };

    // Enviar emails
    await transporter.sendMail(adminNotificationOptions);
    await transporter.sendMail(userConfirmationOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Notificación de WhatsApp enviada correctamente' 
    });

  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    return NextResponse.json(
      { error: 'Error al enviar la notificación' },
      { status: 500 }
    );
  }
}
