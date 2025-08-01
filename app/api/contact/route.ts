import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
  preferredContact?: 'email' | 'whatsapp';
}

// Configuración del transportador de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'metabolife.informa@gmail.com',
    pass: 'asiw ghco llza vpiw'
  }
});

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.service) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Email de notificación para nosotros
    const adminEmailOptions = {
      from: 'informacion@metabolife.cl',
      to: 'metabolife.informa@gmail.com',
      subject: `Nueva consulta de ${formData.name} - MetaboLife`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0;">🩺 MetaboLife</h1>
            <h2 style="margin: 10px 0 0 0;">Nueva Consulta Recibida</h2>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="color: #4CAF50; margin-bottom: 20px;">Información del Cliente:</h3>
            
            <div style="margin-bottom: 15px;">
              <strong>👤 Nombre:</strong> ${formData.name}
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong>📧 Email:</strong> ${formData.email}
            </div>
            
            ${formData.phone ? `
            <div style="margin-bottom: 15px;">
              <strong>📞 Teléfono:</strong> ${formData.phone}
            </div>
            ` : ''}
            
            <div style="margin-bottom: 15px;">
              <strong>🎯 Servicio de Interés:</strong> ${formData.service}
            </div>
            
            ${formData.message ? `
            <div style="margin-bottom: 20px;">
              <strong>💬 Mensaje:</strong>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 5px;">
                ${formData.message}
              </div>
            </div>
            ` : ''}
            
            <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <strong>⏰ Fecha y Hora:</strong> ${new Date().toLocaleString('es-ES')}
            </div>
          </div>
        </div>
      `
    };

    // Email de confirmación para el usuario
    const userEmailOptions = {
      from: 'informacion@metabolife.cl',
      to: formData.email,
      subject: '✅ Confirmación de Consulta - MetaboLife',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0;">🩺 MetaboLife</h1>
            <h2 style="margin: 10px 0 0 0;">¡Gracias por contactarnos!</h2>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="color: #4CAF50;">Hola ${formData.name},</h3>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Hemos recibido tu consulta correctamente y nos pondremos en contacto contigo muy pronto por este mismo medio.
            </p>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h4 style="color: #4CAF50; margin-top: 0;">🚀 ¿Quieres una respuesta más rápida?</h4>
              <p style="margin-bottom: 15px;">Puedes contactarnos directamente por WhatsApp para una atención inmediata:</p>
              
              <div style="text-align: center; margin: 20px 0;">
                <a href="https://wa.me/56945435007?text=Hola%20MetaboLife,%20vengo%20del%20formulario%20de%20contacto%20y%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios." 
                   style="background-color: #25D366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                  💬 Chatear por WhatsApp
                </a>
              </div>
            </div>
            
            <div style="border-top: 2px solid #f0f0f0; padding-top: 20px; margin-top: 20px;">
              <h4 style="color: #4CAF50;">🌐 Síguenos en nuestras redes sociales:</h4>
              <div style="text-align: center; margin: 15px 0;">
                <a href="https://instagram.com/metabolife" style="display: inline-block; margin: 0 10px; padding: 8px; background: linear-gradient(135deg, #E4405F 0%, #833AB4 50%, #F77737 100%); color: white; text-decoration: none; border-radius: 50%; width: 40px; height: 40px; text-align: center; line-height: 24px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/metabolife" style="display: inline-block; margin: 0 10px; padding: 8px; background: linear-gradient(135deg, #1DA1F2 0%, #0D8BD9 100%); color: white; text-decoration: none; border-radius: 50%; width: 40px; height: 40px; text-align: center; line-height: 24px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/metabolife" style="display: inline-block; margin: 0 10px; padding: 8px; background: linear-gradient(135deg, #1877F2 0%, #165ED0 100%); color: white; text-decoration: none; border-radius: 50%; width: 40px; height: 40px; text-align: center; line-height: 24px;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
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
    await transporter.sendMail(adminEmailOptions);
    await transporter.sendMail(userEmailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Consulta enviada correctamente' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar la consulta' },
      { status: 500 }
    );
  }
}
