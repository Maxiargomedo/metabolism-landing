'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  SuccessMessage
} from './styles';

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
    
    // Limpiar errores al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
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
      newErrors.service = 'Por favor selecciona un programa';
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
            setShowWhatsAppOption(false);
            setIsSubmitted(false);
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
      const whatsappUrl = `https://wa.me/+56941234567?text=${whatsappMessage}`;
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle>Contacto</SectionTitle>
          <SectionSubtitle>
            Estamos aquí para ayudarte a transformar tu salud a través de la nutrición personalizada. Contáctanos para comenzar tu viaje hacia un metabolismo óptimo y una vida más saludable.
          </SectionSubtitle>
        </motion.div>
        
        <ContentGrid>
          <TextContainer>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Comienza tu Transformación</h3>
              <p>
                Tu bienestar es nuestra prioridad. Ofrecemos un programa integral personalizado 
                que se adapta a tus necesidades específicas y estilo de vida.
              </p>
            </motion.div>
            
            <ContactInfo>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="info-item"
              >
                <div className="icon">📧</div>
                <div className="details">
                  <span className="label">Email</span>
                  <span className="value">informacion@metabolife.cl</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="info-item"
              >
                <div className="icon">📱</div>
                <div className="details">
                  <span className="label">WhatsApp</span>
                  <span className="value">+56 9 1234 5678</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="info-item"
              >
                <div className="icon">📍</div>
                <div className="details">
                  <span className="label">Dirección</span>
                  <span 
                    className="value" 
                    style={{ 
                      color: '#4CAF50', 
                      cursor: 'pointer',
                      textDecoration: 'underline' 
                    }}
                    onClick={() => window.open('https://maps.google.com/?q=M-816+Cauquenes+Maule+Chile', '_blank')}
                  >
                    M-816 Cauquenes, Maule
                  </span>
                </div>
              </motion.div>
            </ContactInfo>
          </TextContainer>
          
          <FormContainer>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <label>Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      style={{ borderColor: errors.name ? '#f44336' : undefined }}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                  </FormGroup>
                  <FormGroup>
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      style={{ borderColor: errors.email ? '#f44336' : undefined }}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <label>Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <label>Programas *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{ 
                        borderColor: errors.service ? '#f44336' : undefined,
                        background: 'var(--card-background)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-color)',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%234CAF50' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.75rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="">Selecciona un programa</option>
                      <option value="consulta-inicial">Consulta Inicial</option>
                      <option value="programa-101">Programa 101 (8 semanas)</option>
                      <option value="programa-102">Programa 102 (16 semanas)</option>
                      <option value="programa-103">Programa 103 (24 semanas)</option>
                    </select>
                    {errors.service && <span className="error">{errors.service}</span>}
                  </FormGroup>
                </FormRow>
                
                <FormRow style={{ gridTemplateColumns: '1fr' }}>
                  <FormGroup>
                    <label>Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos más sobre tus objetivos y necesidades..."
                      rows={4}
                    />
                  </FormGroup>
                </FormRow>
                
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </SubmitButton>
                
                {submitMessage && (
                  <div style={{ 
                    marginTop: '1rem',
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: isSubmitted ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                    color: isSubmitted ? '#4CAF50' : '#f44336',
                    textAlign: 'center'
                  }}>
                    {submitMessage}
                    {showWhatsAppOption && (
                      <div style={{ marginTop: '1rem' }}>
                        <button 
                          type="button"
                          onClick={handleWhatsAppChoice}
                          style={{
                            background: '#25D366',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}
                        >
                          Continuar en WhatsApp
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </form>
            </motion.div>
          </FormContainer>
        </ContentGrid>
      </Inner>
    </Wrapper>
  );
};

export default Contact;