'use client';

import { motion } from 'framer-motion';
import MetaboLifeLogo from '../../MetaboLifeLogo';
import { 
  Wrapper, 
  Inner, 
  TopSection,
  CompanyInfo,
  FooterColumn,
  BottomSection,
  BackgroundGradient
} from './styles';

const socialLinks = [
  { icon: 'facebook', url: '#' },
  { icon: 'twitter', url: '#' },
  { icon: 'instagram', url: '#' },
  { icon: 'linkedin', url: '#' }
];

const companyLinks = [
  { name: 'Sobre nosotros', url: '#' },
  { name: 'Nuestro equipo', url: '#' },
  { name: 'Blog', url: '#' },
  { name: 'Testimonios', url: '#' }
];

const serviceLinks = [
  { name: 'Plan Básico', url: '#' },
  { name: 'Plan Premium', url: '#' },
  { name: 'Plan Familiar', url: '#' },
  { name: 'Consulta Online', url: '#' }
];

const legalLinks = [
  { name: 'Términos de servicio', url: '#' },
  { name: 'Política de privacidad', url: '#' },
  { name: 'Cookies', url: '#' }
];

const Footer = () => {
  return (
    <Wrapper>
      <BackgroundGradient />
      
      <Inner>
        <TopSection>
          <CompanyInfo>
            <div className="logo">
              <MetaboLifeLogo 
                size="medium" 
                variant="white" 
                showTagline={true} 
              />
            </div>
            
            <p>
              Expertos en nutrición personalizada para optimizar tu metabolismo. 
              Transformamos vidas a través de planes nutricionales basados en ciencia.
            </p>
            
            <div className="social">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.icon === 'facebook' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  
                  {link.icon === 'twitter' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  
                  {link.icon === 'instagram' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  
                  {link.icon === 'linkedin' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </CompanyInfo>
          
          <FooterColumn>
            <h3>Compañía</h3>
            <ul>
              {companyLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                >
                  <a href={link.url}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Servicios</h3>
            <ul>
              {serviceLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                >
                  <a href={link.url}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Legal</h3>
            <ul>
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                >
                  <a href={link.url}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </FooterColumn>
        </TopSection>
        
        <BottomSection>
          <p>© {new Date().getFullYear()} MetaboLife. Todos los derechos reservados.</p>
          <p>Diseñado con ❤️ para tu bienestar</p>
        </BottomSection>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
