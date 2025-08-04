'use client';

import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const TeamContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background: var(--section-bg-gray);
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
            Somos un centro especializado en nutrición cuyo propósito es educar a las personas para que puedan mejorar su metabolismo y por ende su salud, a través de un Programa Nutricional Integral Personalizado de Hábitos Sanos. Nuestro objetivo es acompañar a cada persona en su proceso, brindando atención personalizada, orientación clara y un acompañamiento constante, según sus propias metas y necesidades, entre otras: adelgazar, reducir triglicéridos, eliminar el hígado graso, revertir o poner en remisión enfermedades crónicas, o simplemente incorporar hábitos saludables a su vida. Creemos que los alimentos y los hábitos correctos pueden ser una poderosa forma de medicina, y que una transformación en el estilo de vida puede marcar la diferencia entre depender de medicamentos a vida o evitar su uso.<br/><br/>
            Nuestra función es educar para que cada persona tome conciencia, asuma su responsabilidad y pueda mejorar su salud. No vendemos pastillas milagrosas, creemos que si entregamos la información correcta y la persona se compromete a adquirir una disciplina de vida, lo único que puede esperar como resultado es la sanidad, como en mi caso. No ofrecemos sanar a nadie, lo que hacemos es regresarle el conocimiento correcto al dueño del cuerpo, así el cuerpo solo comenzará a repararse, ya que este no tiene ningún defecto, excepto tener un dueño ignorante o irresponsable.<br/><br/>
            El creador del programa Manuel López, chileno-canadiense, certificado en Canadá como Nutricionista con especialidad en Metabolismo, ofrece a través de este programa una alternativa real de recobrar la salud y dejar la medicación química o rebajarla.<br/><br/>
            Su frase favorita es que Dios no creó nada en cajitas de colores, ni con etiquetas nutricionales; todo lo que el hombre necesita para vivir plenamente lo encuentra en forma integral en la naturaleza.
          </TeamDescription>
        </TeamHeader>
      </TeamInner>
    </TeamContainer>
  );
}
