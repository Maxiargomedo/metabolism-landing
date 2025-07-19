'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const TeamContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: var(--background-color);
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 6rem 1rem 2rem;
  }
`;

const TeamInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const TeamTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const TeamDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const TeamGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    gap: 3rem;
    margin-top: 3rem;
  }
`;

const TeamMember = styled(motion.div)<{ $isReversed: boolean }>`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-direction: ${props => props.$isReversed ? 'row-reverse' : 'row'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const MemberImageContainer = styled(motion.div)`
  flex-shrink: 0;
  position: relative;
`;

const MemberImage = styled.div<{ $imageUrl: string }>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  border: 4px solid var(--primary-color);
  box-shadow: 0 10px 30px rgba(62, 207, 142, 0.3);
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
    z-index: -1;
    opacity: 0.7;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 0.9; }
  }
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const MemberInfo = styled(motion.div)<{ $isReversed: boolean }>`
  flex: 1;
  text-align: ${props => props.$isReversed ? 'right' : 'left'};
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MemberName = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MemberRole = styled.p`
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MemberDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 500px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

interface TeamMemberData {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMemberData[] = [
  {
    id: 1,
    name: "Dr. Carolina Mendez",
    role: "Nutricionista Clínica y Fundadora",
    description: "Especialista en nutrición metabólica con más de 15 años de experiencia. Graduada de la Universidad de Chile con especialización en Harvard. Pionera en tratamientos nutricionales para reversión de diabetes tipo 2.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Dr. James Richardson",
    role: "Médico Endocrinólogo",
    description: "Médico canadiense especializado en endocrinología y metabolismo. Graduado de la Universidad de Toronto con fellowship en Mayo Clinic. Experto en medicina funcional y reversión de enfermedades crónicas.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Lic. María Fernanda Torres",
    role: "Especialista en Ejercicio Terapéutico",
    description: "Kinesióloga y especialista en ejercicio metabólico. Certificada en programas de ejercicio para pacientes con enfermedades crónicas. Desarrolla protocolos de actividad física personalizados para cada paciente.",
    imageUrl: "https://images.unsplash.com/photo-1594824204-0021c79c1645?w=400&h=400&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Dr. Roberto Silva",
    role: "Psicólogo de la Salud",
    description: "Psicólogo especializado en cambios de hábitos y comportamiento alimentario. Magíster en Psicología de la Salud. Desarrolla estrategias para mantener cambios de estilo de vida a largo plazo.",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face"
  }
];

export default function TeamSection() {
  return (
    <TeamContainer id="team">
      <TeamInner>
        <TeamHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <TeamTitle>
            Quiénes Somos
          </TeamTitle>
          <TeamDescription>
            Somos un grupo Chileno/Canadiense. Nuestro método basado en evidencia e investigación científica, 
            utiliza la nutrición, el ejercicio físico, calidad del sueño, hidratación y hábitos saludables de vida, 
            para revertir o poner en remisión enfermedades crónicas como hipertensión, diabetes, adelgazar y 
            tomar menos medicación o quitarla definitivamente.
          </TeamDescription>
        </TeamHeader>

        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.id}
              $isReversed={index % 2 === 1}
              initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <MemberImageContainer
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <MemberImage $imageUrl={member.imageUrl} />
              </MemberImageContainer>

              <MemberInfo $isReversed={index % 2 === 1}>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberDescription>{member.description}</MemberDescription>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamInner>
    </TeamContainer>
  );
}
