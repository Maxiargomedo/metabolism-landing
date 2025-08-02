import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    console.log('🔍 Body completo recibido:', body);
    console.log('🔍 Datos extraídos:', { name, email, phone, service, message });
    console.log('🔍 Variables de entorno:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? '[CONFIGURADA]' : '[NO CONFIGURADA]',
      EMAIL_FROM: process.env.EMAIL_FROM,
      EMAIL_TO: process.env.EMAIL_TO,
      NODE_ENV: process.env.NODE_ENV
    });

    // Validar campos requeridos
    if (!name || !email || !phone) {
      console.log('❌ Faltan campos requeridos');
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Verificar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Variables de entorno EMAIL_USER o EMAIL_PASS no configuradas');
      return NextResponse.json(
        { error: 'Configuración de email incompleta' },
        { status: 500 }
      );
    }

    console.log('📧 Creando transporter...');

    // Configurar transporter con configuración más básica
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('🔍 Verificando conexión SMTP...');

    // Verificar conexión
    try {
      await transporter.verify();
      console.log('✅ Conexión SMTP verificada correctamente');
    } catch (verifyError) {
      console.error('❌ Error de verificación SMTP:', verifyError);
      return NextResponse.json(
        { 
          error: 'Error de configuración de email',
          details: verifyError instanceof Error ? verifyError.message : 'Error desconocido'
        },
        { status: 500 }
      );
    }

    // Email para MetaboLife (notificación interna) - Como en la primera imagen
    const internalEmailOptions = {
      from: `"MetaboLife" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `🩺 Nueva Consulta Recibida - ${service || 'Consulta General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <!-- Header Verde -->
          <div style="background: #28a745; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <div style="color: white; font-size: 20px; margin-bottom: 5px;">🩺 MetaboLife</div>
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: normal;">Nueva Consulta Recibida</h1>
          </div>
          
          <!-- Contenido -->
          <div style="padding: 30px; background: white;">
            <h3 style="color: #28a745; margin-bottom: 20px; font-size: 18px;">Información del Cliente:</h3>
            
            <div style="margin-bottom: 15px;">
              <span style="color: #0066cc;">👤</span> <strong>Nombre:</strong> ${name}
            </div>
            
            <div style="margin-bottom: 15px;">
              <span style="color: #0066cc;">📧</span> <strong>Email:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
            </div>
            
            <div style="margin-bottom: 15px;">
              <span style="color: #0066cc;">📞</span> <strong>Teléfono:</strong> ${phone}
            </div>
            
            <div style="margin-bottom: 15px;">
              <span style="color: #dc3545;">🎯</span> <strong>Servicio de Interés:</strong> ${service || 'consulta-inicial'}
            </div>
            
            ${message ? `
            <div style="margin-bottom: 20px;">
              <span style="color: #0066cc;">💬</span> <strong>Mensaje:</strong>
              <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 5px; font-style: italic;">
                ${message}
              </div>
            </div>
            ` : ''}
            
            <!-- Fecha y Hora -->
            <div style="background: #e8f5e8; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <span style="color: #dc3545;">📅</span> <strong>Fecha y Hora:</strong> ${new Date().toLocaleString('es-CL', { 
                timeZone: 'America/Santiago',
                day: '2-digit',
                month: '2-digit', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
        </div>
      `,
    };

    // Email de confirmación para el cliente - Como en la segunda imagen
    const clientEmailOptions = {
      from: `"MetaboLife" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: '✅ ¡Gracias por contactarnos! - MetaboLife',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Header Verde -->
          <div style="background: #28a745; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <div style="color: white; font-size: 20px; margin-bottom: 5px;">🩺 MetaboLife</div>
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: normal;">¡Gracias por contactarnos!</h1>
          </div>
          
          <!-- Contenido -->
          <div style="padding: 30px; background: white;">
            <h3 style="color: #28a745; margin-bottom: 15px;">Hola ${name},</h3>
            
            <p style="line-height: 1.6; color: #333; margin-bottom: 20px;">
              Hemos recibido tu consulta correctamente y nos pondremos en contacto contigo muy pronto por este mismo medio.
            </p>
            
            <!-- Sección de respuesta rápida -->
            <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #28a745; margin-bottom: 10px;">🚀 ¿Quieres una respuesta más rápida?</h4>
              <p style="margin-bottom: 15px; color: #333;">Puedes contactarnos directamente por WhatsApp para una atención inmediata:</p>
              <div style="text-align: center;">
                <a href="https://wa.me/56912345678?text=Hola,%20quiero%20más%20información%20sobre%20${encodeURIComponent(service || 'sus programas')}" 
                   style="background: #25d366; color: white; padding: 12px 25px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                  💬 Chatear por WhatsApp
                </a>
              </div>
            </div>
            
            <!-- Redes sociales -->
            <div style="margin-top: 30px; text-align: center;">
              <h4 style="color: #28a745; margin-bottom: 15px;">🌐 Síguenos en nuestras redes sociales:</h4>
              
              <!-- Tabla para centrar los iconos -->
              <table align="center" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <!-- Instagram -->
                  <td style="padding: 0 10px;">
                    <a href="https://www.instagram.com/metabolife.activa.metabolismo/" target="_blank" style="text-decoration: none;">
                      <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); border-radius: 50%; margin: 0 auto; position: relative; overflow: hidden;">
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 28px; font-weight: bold; line-height: 1;">📷</div>
                      </div>
                    </a>
                  </td>
                  
                  <!-- Facebook -->
                  <td style="padding: 0 10px;">
                    <a href="https://www.facebook.com/profile.php?id=61578690164559" target="_blank" style="text-decoration: none;">
                      <div style="width: 50px; height: 50px; background: #1877f2; border-radius: 50%; margin: 0 auto; position: relative;">
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 32px; font-weight: bold; font-family: Arial, sans-serif; line-height: 1;">f</div>
                      </div>
                    </a>
                  </td>
                  
                  <!-- WhatsApp -->
                  <td style="padding: 0 10px;">
                    <a href="https://wa.me/56912345678?text=Hola,%20quiero%20más%20información%20sobre%20MetaboLife" target="_blank" style="text-decoration: none;">
                      <div style="width: 50px; height: 50px; background: #25d366; border-radius: 50%; margin: 0 auto; position: relative;">
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 26px; font-weight: bold; line-height: 1;">💬</div>
                      </div>
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Links de texto adicionales -->
              <div style="margin-top: 15px; font-size: 14px; text-align: center;">
                <a href="https://www.instagram.com/metabolife.activa.metabolismo/" target="_blank" style="color: #28a745; text-decoration: none;">@metabolife.activa.metabolismo</a>
                <span style="color: #ccc; margin: 0 8px;">|</span>
                <a href="https://www.facebook.com/profile.php?id=61578690164559" target="_blank" style="color: #28a745; text-decoration: none;">MetaboLife Facebook</a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="margin-top: 40px; text-align: center; color: #666; font-size: 14px;">
              <p style="margin-bottom: 5px;"><strong>MetaboLife - Nutrición científica basada en evidencias</strong></p>
              <p style="margin: 0;">📍 Padre Hurtado 187, Estación Central, Santiago</p>
            </div>
          </div>
        </div>
      `,
    };

    console.log('📤 Enviando email interno...');
    await transporter.sendMail(internalEmailOptions);
    console.log('✅ Email interno enviado');
    
    console.log('📤 Enviando email de confirmación al cliente...');
    await transporter.sendMail(clientEmailOptions);
    console.log('✅ Email de confirmación enviado');

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado correctamente' 
    });

  } catch (error) {
    console.error('❌ Error completo:', error);
    
    let errorMessage = 'Error interno del servidor';
    let statusCode = 500;
    
    if (error instanceof Error) {
      console.error('❌ Mensaje de error:', error.message);
      console.error('❌ Stack trace:', error.stack);
      
      if (error.message.includes('Invalid login') || error.message.includes('Username and Password not accepted')) {
        errorMessage = 'Credenciales de email inválidas';
        statusCode = 401;
      } else if (error.message.includes('connection') || error.message.includes('timeout')) {
        errorMessage = 'Error de conexión SMTP';
        statusCode = 503;
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: statusCode }
    );
  }
}
