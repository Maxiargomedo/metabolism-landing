'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Wrapper, 
  Inner, 
  ContentGrid, 
  TextContainer,
  ContactInfo,
  FormContainer,
  FormGroup,
  FormRow,
  SubmitButton,
  BackgroundGradient
} from './styles';
import { Pill, MaskText } from '@/src/components';

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
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulación de envío de formulario
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <Wrapper id="contact" ref={ref}>
      <BackgroundGradient />
      
      <Inner>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Pill>
            <span>Contacto</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="#E0E0E0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Pill>
        </motion.div>
        
        <ContentGrid>
          <TextContainer>
            <MaskText phrases={contactTitle} tag="h2" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
                <div className="icon">📞</div>
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
                <div className="icon">📧</div>
                <div className="details">
                  <span className="label">Email</span>
                  <span className="value">info@metabolife.com</span>
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-500/10 p-4 rounded-lg border border-green-500/30 text-green-400"
                >
                  ¡Gracias por contactarnos! Te responderemos pronto.
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
                        <option value="basic">Plan Básico</option>
                        <option value="premium">Plan Premium</option>
                        <option value="family">Plan Familiar</option>
                        <option value="other">Otro</option>
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
