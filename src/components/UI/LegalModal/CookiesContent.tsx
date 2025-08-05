import styled from 'styled-components';
import { Section } from '../LegalModal';

const CookieTable = styled.div`
  background: var(--card-background);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin: 1rem 0;
  border: 1px solid var(--border-color);
  
  .cookie-row {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
    
    &:last-child {
      border-bottom: none;
    }
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }
  
  .cookie-header {
    font-weight: 600;
    color: #4CAF50;
    background: rgba(76, 175, 80, 0.1);
    padding: 0.75rem;
    border-radius: 0.5rem;
  }
  
  .cookie-name {
    font-weight: 500;
    color: var(--text-color);
  }
  
  .cookie-purpose {
    color: var(--text-color);
    font-size: 0.9rem;
  }
  
  .cookie-duration {
    color: var(--text-muted);
    font-size: 0.875rem;
  }
`;

const CookiesContent = () => {
  return (
    <>
      <Section>
        <p>
          Esta política explica cómo MetaboLife utiliza cookies y tecnologías similares 
          en nuestro sitio web para mejorar tu experiencia de navegación y proporcionarte 
          servicios más personalizados.
        </p>
      </Section>

      <Section>
        <h2>1. ¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
          cuando visitas un sitio web. Nos permiten recordar tus preferencias y mejorar 
          tu experiencia de navegación en futuras visitas.
        </p>
      </Section>

      <Section>
        <h2>2. Tipos de Cookies que Utilizamos</h2>
        
        <h3>Cookies Esenciales</h3>
        <p>
          Estas cookies son necesarias para el funcionamiento básico del sitio web y 
          no se pueden desactivar. Incluyen:
        </p>
        <ul>
          <li>Cookies de sesión para mantener tu navegación</li>
          <li>Cookies de preferencias de tema (modo claro/oscuro)</li>
          <li>Cookies de seguridad para proteger el formulario de contacto</li>
        </ul>

        <h3>Cookies de Rendimiento</h3>
        <p>
          Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web:
        </p>
        <ul>
          <li>Páginas más visitadas</li>
          <li>Tiempo de permanencia en el sitio</li>
          <li>Rutas de navegación más comunes</li>
          <li>Detección de errores técnicos</li>
        </ul>

        <h3>Cookies de Redes Sociales</h3>
        <p>
          Permiten la integración con nuestras redes sociales:
        </p>
        <ul>
          <li>Botones de compartir en Facebook e Instagram</li>
          <li>Widgets de redes sociales embebidos</li>
          <li>Tracking de interacciones sociales (según tus configuraciones)</li>
        </ul>
      </Section>

      <Section>
        <h2>3. Detalle de Cookies Específicas</h2>
        
        <CookieTable>
          <div className="cookie-row">
            <div className="cookie-header">Nombre</div>
            <div className="cookie-header">Propósito</div>
            <div className="cookie-header">Duración</div>
          </div>
          
          <div className="cookie-row">
            <div className="cookie-name">theme-preference</div>
            <div className="cookie-purpose">Recordar tu preferencia de tema (claro/oscuro)</div>
            <div className="cookie-duration">1 año</div>
          </div>
          
          <div className="cookie-row">
            <div className="cookie-name">session-id</div>
            <div className="cookie-purpose">Mantener tu sesión activa durante la navegación</div>
            <div className="cookie-duration">Sesión</div>
          </div>
          
          <div className="cookie-row">
            <div className="cookie-name">form-protection</div>
            <div className="cookie-purpose">Proteger el formulario de contacto contra spam</div>
            <div className="cookie-duration">24 horas</div>
          </div>
          
          <div className="cookie-row">
            <div className="cookie-name">_ga</div>
            <div className="cookie-purpose">Google Analytics - Distinguir usuarios únicos</div>
            <div className="cookie-duration">2 años</div>
          </div>
          
          <div className="cookie-row">
            <div className="cookie-name">_gid</div>
            <div className="cookie-purpose">Google Analytics - Distinguir usuarios únicos</div>
            <div className="cookie-duration">24 horas</div>
          </div>
          
          <div className="cookie-row">
            <div className="cookie-name">fbp</div>
            <div className="cookie-purpose">Facebook Pixel - Seguimiento de conversiones</div>
            <div className="cookie-duration">3 meses</div>
          </div>
        </CookieTable>
      </Section>

      <Section>
        <h2>4. Cookies de Terceros</h2>
        
        <h3>Google Analytics</h3>
        <p>
          Utilizamos Google Analytics para analizar el tráfico del sitio web de manera anónima. 
          Esta información nos ayuda a mejorar la experiencia del usuario.
        </p>
        
        <h3>Facebook/Meta</h3>
        <p>
          Integramos funcionalidades de Facebook para:
        </p>
        <ul>
          <li>Botones de compartir y seguir</li>
          <li>Tracking de conversiones (solo si interactúas con nuestros anuncios)</li>
          <li>Análisis de audiencia para mejorar nuestro contenido</li>
        </ul>
        
        <h3>WhatsApp Business</h3>
        <p>
          Para la funcionalidad de contacto directo por WhatsApp, se pueden establecer 
          cookies relacionadas con la plataforma WhatsApp Business.
        </p>
      </Section>

      <Section>
        <h2>5. Control de Cookies</h2>
        
        <h3>Configuración del Navegador</h3>
        <p>Puedes controlar las cookies a través de la configuración de tu navegador:</p>
        <ul>
          <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
          <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad</li>
          <li><strong>Safari:</strong> Preferencias → Privacidad</li>
          <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
        </ul>
        
        <h3>Desactivación Selectiva</h3>
        <p>Puedes desactivar cookies específicas:</p>
        <ul>
          <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Complemento de inhabilitación</a></li>
          <li><strong>Facebook:</strong> Configuración de anuncios en tu cuenta de Facebook</li>
          <li><strong>Todas las cookies:</strong> Configuración de tu navegador</li>
        </ul>
      </Section>

      <Section>
        <h2>6. Impacto de Desactivar Cookies</h2>
        <p>Si desactivas las cookies, algunas funcionalidades pueden verse afectadas:</p>
        <ul>
          <li>Pérdida de preferencias personalizadas (tema, idioma)</li>
          <li>Necesidad de volver a completar formularios</li>
          <li>Funcionalidades de redes sociales limitadas</li>
          <li>Experiencia de navegación menos personalizada</li>
        </ul>
        <p>
          <strong>Nota importante:</strong> Las cookies esenciales para el funcionamiento 
          del sitio no se pueden desactivar completamente.
        </p>
      </Section>

      <Section>
        <h2>7. Cookies en Dispositivos Móviles</h2>
        <p>
          En dispositivos móviles, también puedes controlar las cookies similares 
          (identificadores de dispositivo) a través de:
        </p>
        <ul>
          <li><strong>iOS:</strong> Configuración → Privacidad → Seguimiento</li>
          <li><strong>Android:</strong> Configuración → Google → Anuncios</li>
        </ul>
      </Section>

      <Section>
        <h2>8. Actualizaciones de esta Política</h2>
        <p>
          Esta política puede actualizarse para reflejar cambios en nuestro uso de cookies 
          o cambios en la legislación. Te notificaremos sobre actualizaciones significativas 
          a través de nuestro sitio web.
        </p>
      </Section>

      <Section>
        <h2>9. Contacto</h2>
        <p>
          Si tienes preguntas sobre nuestra política de cookies, contáctanos:
        </p>
        <ul>
          <li><strong>Email:</strong> privacidad@metabolife.cl</li>
          <li><strong>Dirección:</strong> M-816 Cauquenes, Maule, Chile</li>
          <li><strong>WhatsApp:</strong> Disponible en nuestro sitio web</li>
        </ul>
      </Section>

      <Section>
        <h2>10. Consentimiento</h2>
        <p>
          Al continuar navegando en nuestro sitio web después de haber sido informado 
          sobre el uso de cookies, das tu consentimiento para su uso según se describe 
          en esta política.
        </p>
        <p>
          Puedes retirar tu consentimiento en cualquier momento modificando la 
          configuración de tu navegador o contactándonos directamente.
        </p>
      </Section>
    </>
  );
};

export default CookiesContent;
