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
  countryCode: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  countryCode?: string;
  phone?: string;
  service?: string;
}

const Contact = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    countryCode: '+56',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showWhatsAppOption, setShowWhatsAppOption] = useState(false);
  
  // Estados para el dropdown de países
  const [searchCountry, setSearchCountry] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  
  // Lista completa de códigos de país
  const countryCodes = [
    { code: '+1', country: 'Estados Unidos' },
    { code: '+1', country: 'Canadá' },
    { code: '+7', country: 'Rusia' },
    { code: '+20', country: 'Egipto' },
    { code: '+27', country: 'Sudáfrica' },
    { code: '+30', country: 'Grecia' },
    { code: '+31', country: 'Países Bajos' },
    { code: '+32', country: 'Bélgica' },
    { code: '+33', country: 'Francia' },
    { code: '+34', country: 'España' },
    { code: '+36', country: 'Hungría' },
    { code: '+39', country: 'Italia' },
    { code: '+40', country: 'Rumania' },
    { code: '+41', country: 'Suiza' },
    { code: '+43', country: 'Austria' },
    { code: '+44', country: 'Reino Unido' },
    { code: '+45', country: 'Dinamarca' },
    { code: '+46', country: 'Suecia' },
    { code: '+47', country: 'Noruega' },
    { code: '+48', country: 'Polonia' },
    { code: '+49', country: 'Alemania' },
    { code: '+51', country: 'Perú' },
    { code: '+52', country: 'México' },
    { code: '+53', country: 'Cuba' },
    { code: '+54', country: 'Argentina' },
    { code: '+55', country: 'Brasil' },
    { code: '+56', country: 'Chile' },
    { code: '+57', country: 'Colombia' },
    { code: '+58', country: 'Venezuela' },
    { code: '+60', country: 'Malasia' },
    { code: '+61', country: 'Australia' },
    { code: '+62', country: 'Indonesia' },
    { code: '+63', country: 'Filipinas' },
    { code: '+64', country: 'Nueva Zelanda' },
    { code: '+65', country: 'Singapur' },
    { code: '+66', country: 'Tailandia' },
    { code: '+81', country: 'Japón' },
    { code: '+82', country: 'Corea del Sur' },
    { code: '+84', country: 'Vietnam' },
    { code: '+86', country: 'China' },
    { code: '+90', country: 'Turquía' },
    { code: '+91', country: 'India' },
    { code: '+92', country: 'Pakistán' },
    { code: '+93', country: 'Afganistán' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+95', country: 'Myanmar' },
    { code: '+98', country: 'Irán' },
    { code: '+212', country: 'Marruecos' },
    { code: '+213', country: 'Argelia' },
    { code: '+216', country: 'Túnez' },
    { code: '+218', country: 'Libia' },
    { code: '+220', country: 'Gambia' },
    { code: '+221', country: 'Senegal' },
    { code: '+222', country: 'Mauritania' },
    { code: '+223', country: 'Malí' },
    { code: '+224', country: 'Guinea' },
    { code: '+225', country: 'Costa de Marfil' },
    { code: '+226', country: 'Burkina Faso' },
    { code: '+227', country: 'Níger' },
    { code: '+228', country: 'Togo' },
    { code: '+229', country: 'Benín' },
    { code: '+230', country: 'Mauricio' },
    { code: '+231', country: 'Liberia' },
    { code: '+232', country: 'Sierra Leona' },
    { code: '+233', country: 'Ghana' },
    { code: '+234', country: 'Nigeria' },
    { code: '+235', country: 'Chad' },
    { code: '+236', country: 'República Centroafricana' },
    { code: '+237', country: 'Camerún' },
    { code: '+238', country: 'Cabo Verde' },
    { code: '+239', country: 'Santo Tomé y Príncipe' },
    { code: '+240', country: 'Guinea Ecuatorial' },
    { code: '+241', country: 'Gabón' },
    { code: '+242', country: 'República del Congo' },
    { code: '+243', country: 'República Democrática del Congo' },
    { code: '+244', country: 'Angola' },
    { code: '+245', country: 'Guinea-Bissau' },
    { code: '+246', country: 'Territorio Británico del Océano Índico' },
    { code: '+248', country: 'Seychelles' },
    { code: '+249', country: 'Sudán' },
    { code: '+250', country: 'Ruanda' },
    { code: '+251', country: 'Etiopía' },
    { code: '+252', country: 'Somalia' },
    { code: '+253', country: 'Yibuti' },
    { code: '+254', country: 'Kenia' },
    { code: '+255', country: 'Tanzania' },
    { code: '+256', country: 'Uganda' },
    { code: '+257', country: 'Burundi' },
    { code: '+258', country: 'Mozambique' },
    { code: '+260', country: 'Zambia' },
    { code: '+261', country: 'Madagascar' },
    { code: '+262', country: 'Reunión' },
    { code: '+263', country: 'Zimbabue' },
    { code: '+264', country: 'Namibia' },
    { code: '+265', country: 'Malaui' },
    { code: '+266', country: 'Lesoto' },
    { code: '+267', country: 'Botsuana' },
    { code: '+268', country: 'Esuatini' },
    { code: '+269', country: 'Comoras' },
    { code: '+290', country: 'Santa Elena' },
    { code: '+291', country: 'Eritrea' },
    { code: '+297', country: 'Aruba' },
    { code: '+298', country: 'Islas Feroe' },
    { code: '+299', country: 'Groenlandia' },
    { code: '+350', country: 'Gibraltar' },
    { code: '+351', country: 'Portugal' },
    { code: '+352', country: 'Luxemburgo' },
    { code: '+353', country: 'Irlanda' },
    { code: '+354', country: 'Islandia' },
    { code: '+355', country: 'Albania' },
    { code: '+356', country: 'Malta' },
    { code: '+357', country: 'Chipre' },
    { code: '+358', country: 'Finlandia' },
    { code: '+359', country: 'Bulgaria' },
    { code: '+370', country: 'Lituania' },
    { code: '+371', country: 'Letonia' },
    { code: '+372', country: 'Estonia' },
    { code: '+373', country: 'Moldavia' },
    { code: '+374', country: 'Armenia' },
    { code: '+375', country: 'Bielorrusia' },
    { code: '+376', country: 'Andorra' },
    { code: '+377', country: 'Mónaco' },
    { code: '+378', country: 'San Marino' },
    { code: '+380', country: 'Ucrania' },
    { code: '+381', country: 'Serbia' },
    { code: '+382', country: 'Montenegro' },
    { code: '+383', country: 'Kosovo' },
    { code: '+385', country: 'Croacia' },
    { code: '+386', country: 'Eslovenia' },
    { code: '+387', country: 'Bosnia y Herzegovina' },
    { code: '+389', country: 'Macedonia del Norte' },
    { code: '+420', country: 'República Checa' },
    { code: '+421', country: 'Eslovaquia' },
    { code: '+423', country: 'Liechtenstein' },
    { code: '+500', country: 'Islas Malvinas' },
    { code: '+501', country: 'Belice' },
    { code: '+502', country: 'Guatemala' },
    { code: '+503', country: 'El Salvador' },
    { code: '+504', country: 'Honduras' },
    { code: '+505', country: 'Nicaragua' },
    { code: '+506', country: 'Costa Rica' },
    { code: '+507', country: 'Panamá' },
    { code: '+508', country: 'San Pedro y Miquelón' },
    { code: '+509', country: 'Haití' },
    { code: '+590', country: 'Guadalupe' },
    { code: '+591', country: 'Bolivia' },
    { code: '+592', country: 'Guyana' },
    { code: '+593', country: 'Ecuador' },
    { code: '+594', country: 'Guayana Francesa' },
    { code: '+595', country: 'Paraguay' },
    { code: '+596', country: 'Martinica' },
    { code: '+597', country: 'Surinam' },
    { code: '+598', country: 'Uruguay' },
    { code: '+599', country: 'Antillas Neerlandesas' },
    { code: '+670', country: 'Timor Oriental' },
    { code: '+672', country: 'Territorio Antártico Australiano' },
    { code: '+673', country: 'Brunéi' },
    { code: '+674', country: 'Nauru' },
    { code: '+675', country: 'Papúa Nueva Guinea' },
    { code: '+676', country: 'Tonga' },
    { code: '+677', country: 'Islas Salomón' },
    { code: '+678', country: 'Vanuatu' },
    { code: '+679', country: 'Fiyi' },
    { code: '+680', country: 'Palaos' },
    { code: '+681', country: 'Wallis y Futuna' },
    { code: '+682', country: 'Islas Cook' },
    { code: '+683', country: 'Niue' },
    { code: '+684', country: 'Samoa Americana' },
    { code: '+685', country: 'Samoa' },
    { code: '+686', country: 'Kiribati' },
    { code: '+687', country: 'Nueva Caledonia' },
    { code: '+688', country: 'Tuvalu' },
    { code: '+689', country: 'Polinesia Francesa' },
    { code: '+690', country: 'Tokelau' },
    { code: '+691', country: 'Estados Federados de Micronesia' },
    { code: '+692', country: 'Islas Marshall' },
    { code: '+850', country: 'Corea del Norte' },
    { code: '+852', country: 'Hong Kong' },
    { code: '+853', country: 'Macao' },
    { code: '+855', country: 'Camboya' },
    { code: '+856', country: 'Laos' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+886', country: 'Taiwán' },
    { code: '+960', country: 'Maldivas' },
    { code: '+961', country: 'Líbano' },
    { code: '+962', country: 'Jordania' },
    { code: '+963', country: 'Siria' },
    { code: '+964', country: 'Irak' },
    { code: '+965', country: 'Kuwait' },
    { code: '+966', country: 'Arabia Saudí' },
    { code: '+967', country: 'Yemen' },
    { code: '+968', country: 'Omán' },
    { code: '+970', country: 'Palestina' },
    { code: '+971', country: 'Emiratos Árabes Unidos' },
    { code: '+972', country: 'Israel' },
    { code: '+973', country: 'Baréin' },
    { code: '+974', country: 'Catar' },
    { code: '+975', country: 'Bután' },
    { code: '+976', country: 'Mongolia' },
    { code: '+977', country: 'Nepal' },
    { code: '+992', country: 'Tayikistán' },
    { code: '+993', country: 'Turkmenistán' },
    { code: '+994', country: 'Azerbaiyán' },
    { code: '+995', country: 'Georgia' },
    { code: '+996', country: 'Kirguistán' },
    { code: '+998', country: 'Uzbekistán' }
  ];
  
  // Filtrar países basado en la búsqueda
  const filteredCountries = countryCodes.filter(country =>
    country.country.toLowerCase().includes(searchCountry.toLowerCase()) ||
    country.code.includes(searchCountry)
  );
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let processedValue = value;
    
    // Validaciones específicas por campo
    if (name === 'name') {
      // Solo letras, espacios y acentos
      processedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    } else if (name === 'countryCode') {
      // Siempre mantener el + al inicio y solo números después
      if (!value.startsWith('+')) {
        processedValue = '+' + value.replace(/[^0-9]/g, '');
      } else {
        processedValue = '+' + value.slice(1).replace(/[^0-9]/g, '');
      }
    } else if (name === 'phone') {
      // Solo números para el teléfono
      processedValue = value.replace(/[^0-9]/g, '');
    } else if (name === 'email') {
      // Mantener el valor original para email, validaremos después
      processedValue = value.toLowerCase().trim();
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
    
    // Limpiar errores al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // Funciones para manejar el dropdown de países
  const handleCountrySelect = (countryCode: string) => {
    setFormData(prev => ({ ...prev, countryCode }));
    setIsCountryDropdownOpen(false);
    setSearchCountry('');
  };
  
  // Handler especial para el código de país
  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let processedValue = value;
    
    // Asegurar que siempre empiece con +
    if (!value.startsWith('+')) {
      processedValue = '+' + value.replace(/[^0-9]/g, '');
    } else {
      processedValue = '+' + value.slice(1).replace(/[^0-9]/g, '');
    }
    
    // Limitar a máximo 5 caracteres (+xxxx)
    if (processedValue.length > 5) {
      processedValue = processedValue.slice(0, 5);
    }
    
    setFormData(prev => ({
      ...prev,
      countryCode: processedValue
    }));
    
    // Limpiar errores al escribir
    if (errors.countryCode) {
      setErrors(prev => ({
        ...prev,
        countryCode: undefined
      }));
    }
  };
  
  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
    setSearchCountry('');
  };
  
  const handleCountrySearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCountry(e.target.value);
  };
  
  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Validación del nombre: solo letras y espacios
    if (!formData.name.trim()) {
      newErrors.name = 'Nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'El nombre solo puede contener letras y espacios';
    }
    
    // Validación del email
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Por favor ingresa un email válido';
      }
    }
    
    // Validación del código de país
    if (!formData.countryCode.trim()) {
      newErrors.countryCode = 'Código de país es requerido';
    } else if (!formData.countryCode.startsWith('+')) {
      newErrors.countryCode = 'El código debe empezar con +';
    } else if (!/^\+[0-9]{1,4}$/.test(formData.countryCode)) {
      newErrors.countryCode = 'Código de país inválido (ej: +56)';
    }
    
    // Validación del teléfono
    if (!formData.phone.trim()) {
      newErrors.phone = 'Teléfono es requerido';
    } else if (!/^[0-9]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono debe tener entre 8 y 15 dígitos';
    }
    
    // Validación del servicio
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
        // Combinar código de país con número local
        const fullPhoneNumber = `${formData.countryCode} ${formData.phone}`;
        
        // Preparar datos para envío
        const emailData = {
          name: formData.name,
          email: formData.email,
          phone: fullPhoneNumber,
          service: formData.service,
          message: formData.message || 'Sin mensaje adicional'
        };

        console.log('📧 Enviando email con datos:', emailData);

        // Enviar email usando nuestra API
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          console.error('❌ Error del servidor:', errorData);
          throw new Error(`Error: ${response.status} - ${errorData.error || 'Error desconocido'}`);
        }

        const result = await response.json();
        console.log('✅ Email enviado exitosamente:', result);
        
        setIsSubmitted(true);
        setShowWhatsAppOption(true);
        setSubmitMessage(`¡Gracias por contactarnos, ${formData.name}! Hemos enviado tu consulta sobre ${formData.service} y una confirmación a tu email. Te contactaremos pronto al ${fullPhoneNumber}`);
        
        setFormData({
          name: '',
          email: '',
          countryCode: '+56',
          phone: '',
          service: '',
          message: ''
        });
        
        // Ocultar el mensaje después de 30 segundos
        setTimeout(() => {
          setShowWhatsAppOption(false);
          setIsSubmitted(false);
        }, 30000);
        
      } catch (error) {
        console.error('❌ Error al enviar formulario:', error);
        setSubmitMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.');
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
      const whatsappUrl = `https://wa.me/56945435007?text=${whatsappMessage}`;
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
                  <span className="value">+56945435007</span>
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
                    <label>Teléfono *</label>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      {/* Dropdown de código de país */}
                      <div style={{ position: 'relative', width: '80px', flexShrink: 0 }}>
                        <div style={{ position: 'relative' }}>
                          <input
                            type="text"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleCountryCodeChange}
                            placeholder="+56"
                            style={{
                              width: '100%',
                              padding: '12px 25px 12px 8px',
                              border: `1px solid ${errors.countryCode ? '#f44336' : '#e0e0e0'}`,
                              borderRadius: '8px',
                              background: 'white',
                              fontSize: '14px',
                              textAlign: 'center',
                              transition: 'all 0.2s ease'
                            }}
                          />
                          <div
                            onClick={toggleCountryDropdown}
                            style={{
                              position: 'absolute',
                              right: '5px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              cursor: 'pointer',
                              fontSize: '12px',
                              color: '#666'
                            }}
                          >
                            ▼
                          </div>
                        </div>
                        
                        {isCountryDropdownOpen && (
                          <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            right: '0',
                            background: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            maxHeight: '200px',
                            overflowY: 'auto',
                            zIndex: 1000,
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                          }}>
                            <input
                              type="text"
                              placeholder="Buscar país..."
                              value={searchCountry}
                              onChange={handleCountrySearch}
                              style={{
                                width: '100%',
                                padding: '8px',
                                border: 'none',
                                borderBottom: '1px solid #e0e0e0',
                                outline: 'none',
                                fontSize: '12px'
                              }}
                            />
                            {filteredCountries.slice(0, 10).map((country, index) => (
                              <div
                                key={index}
                                onClick={() => handleCountrySelect(country.code)}
                                style={{
                                  padding: '8px',
                                  cursor: 'pointer',
                                  fontSize: '12px',
                                  borderBottom: index < Math.min(filteredCountries.length, 10) - 1 ? '1px solid #f0f0f0' : 'none'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = '#f5f5f5'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'white'}
                              >
                                <div style={{ fontWeight: 'bold' }}>{country.code}</div>
                                <div style={{ color: '#666', fontSize: '10px' }}>{country.country}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Campo de número de teléfono */}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9 1234 5678"
                        style={{ 
                          flex: 1,
                          padding: '12px',
                          border: `1px solid ${errors.phone ? '#f44336' : '#e0e0e0'}`,
                          borderRadius: '8px',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    {/* Mensajes de error */}
                    {errors.countryCode && <span className="error">{errors.countryCode}</span>}
                    {errors.phone && <span className="error">{errors.phone}</span>}
                  </FormGroup>
                  
                  <FormGroup>
                    <label>Programas *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{ 
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: errors.service ? '#f44336' : 'var(--border-color)',
                        background: 'var(--card-background)',
                        backdropFilter: 'blur(10px)',
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
                      {/* <option value="programa-103">Programa 103 (24 semanas)</option> */}
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