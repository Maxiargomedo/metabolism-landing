'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Wrapper, 
  Inner, 
  SectionTitle,
  SectionSubtitle,
  ContentGrid, 
  TextContainer,
  ContactInfo,
  FormContainer,
  FormGroup,
  FormRow,
  SubmitButton,
  BackgroundGradient,
  SuccessContainer,
  SuccessTitle,
  SuccessMessage,
  WhatsAppOptionContainer,
  WhatsAppTitle,
  WhatsAppDescription,
  ButtonGroup,
  WhatsAppButton,
  EmailButton,
  SocialSection,
  SocialTitle,
  SocialIcons,
  SocialIcon
} from './styles';
import { Pill } from '../../Common/Pill';
import { MaskText } from '../../Common/MaskText';

const contactTitle = [
  "Comienza", "tu", "viaje", "hacia", "un", "metabolismo", "óptimo"
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
}

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showWhatsAppOption, setShowWhatsAppOption] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no es válido';
    }
    
    if (!formData.service) {
      newErrors.service = 'Por favor selecciona un servicio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const result = await response.json();
        
        if (response.ok) {
          setIsSubmitted(true);
          setShowWhatsAppOption(true);
          setSubmitMessage('¡Gracias por contactarnos! Te hemos enviado un email de confirmación.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
          
          // Ocultar el mensaje después de 30 segundos
          setTimeout(() => {
            setIsSubmitted(false);
            setShowWhatsAppOption(false);
          }, 30000);
        } else {
          setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const handleWhatsAppChoice = async () => {
    try {
      // Notificar que el usuario prefiere WhatsApp
      await fetch('/api/whatsapp-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name || 'Usuario',
          email: formData.email || '',
          phone: formData.phone || ''
        }),
      });
      
      // Redirigir a WhatsApp
      const whatsappMessage = encodeURIComponent(`Hola MetaboLife, soy ${formData.name || 'un cliente'} y prefiero comunicarme por WhatsApp. Me interesa conocer más sobre sus servicios de nutrición.`);
      const whatsappUrl = `https://wa.me/34123456789?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');
      
      setShowWhatsAppOption(false);
      setIsSubmitted(false);
    } catch (error) {
      console.error('Error sending WhatsApp notification:', error);
    }
  };
  
  return (
    <Wrapper id="contact" ref={ref}>
      <BackgroundGradient />
      
      <Inner>
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Contacto</SectionTitle>
          <SectionSubtitle>
            Estamos aquí para ayudarte a transformar tu salud. Contáctanos para 
            comenzar tu viaje hacia un metabolismo óptimo y una vida más saludable.
          </SectionSubtitle>
        </motion.div>
        
        <ContentGrid>
          <TextContainer>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.6' }}
            >
              Estamos aquí para ayudarte a transformar tu salud a través de la nutrición personalizada. Contáctanos para comenzar tu viaje hacia un metabolismo óptimo y una vida más saludable.
            </motion.p>
            
            <ContactInfo>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="info-item"
              >
                <div className="icon">📍</div>
                <div className="details">
                  <span className="label">Dirección</span>
                  <span className="value">Padre Hurtado 187, Estación Central, Santiago</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="info-item"
              >
                <div className="icon">�</div>
                <div className="details">
                  <span className="label">Teléfono</span>
                  <span className="value">+34 123 456 789</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="info-item"
              >
                <div className="icon">�</div>
                <div className="details">
                  <span className="label">Email</span>
                  <span className="value">saminon.maxi20@gmail.com</span>
                </div>
              </motion.div>
            </ContactInfo>
          </TextContainer>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FormContainer>
              <h3>Envíanos un mensaje</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <SuccessContainer>
                    <SuccessTitle>¡Gracias por contactarnos!</SuccessTitle>
                    <SuccessMessage>Te hemos enviado un email de confirmación.</SuccessMessage>
                  </SuccessContainer>
                  
                  {showWhatsAppOption && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      style={{ marginTop: '1rem' }}
                    >
                      <WhatsAppOptionContainer>
                        <WhatsAppTitle>
                          💬 ¿Prefieres una respuesta más rápida?
                        </WhatsAppTitle>
                        <WhatsAppDescription>
                          Puedes contactarnos directamente por WhatsApp para una atención inmediata. 
                          Si eliges esta opción, toda la comunicación será por WhatsApp.
                        </WhatsAppDescription>
                        <ButtonGroup>
                          <WhatsAppButton onClick={handleWhatsAppChoice}>
                            📱 Continuar por WhatsApp
                          </WhatsAppButton>
                          <EmailButton onClick={() => setShowWhatsAppOption(false)}>
                            📧 Mantener comunicación por Email
                          </EmailButton>
                        </ButtonGroup>
                        
                        <SocialSection>
                          <SocialTitle>📱 También puedes seguirnos en:</SocialTitle>
                          <SocialIcons>
                            <SocialIcon 
                              href="https://instagram.com/metabolife" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="instagram"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            </SocialIcon>
                            <SocialIcon 
                              href="https://twitter.com/metabolife" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="twitter"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                              </svg>
                            </SocialIcon>
                            <SocialIcon 
                              href="https://facebook.com/metabolife" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="facebook"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                            </SocialIcon>
                          </SocialIcons>
                        </SocialSection>
                      </WhatsAppOptionContainer>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FormRow>
                    <FormGroup>
                      <label htmlFor="name">Nombre</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                      />
                      {errors.name && <div className="error">{errors.name}</div>}
                    </FormGroup>
                    
                    <FormGroup>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                      />
                      {errors.email && <div className="error">{errors.email}</div>}
                    </FormGroup>
                  </FormRow>
                  
                  <FormRow>
                    <FormGroup>
                      <label htmlFor="phone">Teléfono (opcional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+34 123 456 789"
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <label htmlFor="service">Servicio</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="glucometro">🩺 Información sobre Glucómetro</option>
                        <option value="planes-nutricionales">Planes Nutricionales Personalizados</option>
                        <option value="coaching-nutricional">Coaching Nutricional Continuo</option>
                        <option value="analisis-corporal">Análisis de Composición Corporal</option>
                        <option value="condiciones-especificas">Nutrición para Condiciones Específicas</option>
                        <option value="consulta-general">Consulta General</option>
                        <option value="otro">Otro</option>
                      </select>
                      {errors.service && <div className="error">{errors.service}</div>}
                    </FormGroup>
                  </FormRow>
                  
                  <FormGroup>
                    <label htmlFor="message">Mensaje (opcional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tus objetivos o necesidades específicas..."
                    />
                  </FormGroup>
                  
                  <SubmitButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </SubmitButton>
                </form>
              )}
            </FormContainer>
          </motion.div>
        </ContentGrid>
      </Inner>
    </Wrapper>
  );
};

export default Contact;
