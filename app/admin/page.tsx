'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AdminContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: white;
  margin-bottom: 15px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FormSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  color: #2d3748;
  margin-bottom: 30px;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  color: #4a5568;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ColorPicker = styled.input`
  width: 60px;
  height: 40px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 6px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
    }
  ` : `
    background: #f7fafc;
    color: #4a5568;
    border: 2px solid #e2e8f0;
    
    &:hover {
      background: #edf2f7;
      border-color: #cbd5e0;
    }
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const PreviewSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const PreviewTitle = styled.h2`
  font-size: 1.8rem;
  color: #2d3748;
  margin-bottom: 30px;
  font-weight: 600;
`;

const ArticlePreview = styled.div<{ $bgColor: string }>`
  background: ${props => props.$bgColor};
  border-radius: 15px;
  padding: 30px;
  color: white;
  margin-bottom: 20px;
`;

const PreviewHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const PreviewTitleText = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.2;
`;

const PreviewSubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

const PreviewContent = styled.div`
  background: white;
  color: #4a5568;
  padding: 25px;
  border-radius: 10px;
  margin-top: 20px;
`;

const PreviewText = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ArticlesList = styled.div`
  margin-top: 40px;
`;

const ArticlesListTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ArticleCard = styled.div`
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const ArticleCardTitle = styled.h4`
  color: #2d3748;
  margin-bottom: 8px;
  font-weight: 600;
`;

const ArticleCardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #718096;
`;

const DeleteButton = styled.button`
  background: #e53e3e;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #c53030;
  }
`;

interface Article {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  icon: string;
  tag: string;
  bgColor: string;
  content: string;
  author: string;
  readTime: string;
  createdAt: string;
}

export default function AdminPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    excerpt: '',
    icon: '📝',
    tag: '',
    bgColor: '#667eea',
    content: '',
    author: 'Equipo MetaboLife',
    readTime: '5'
  });

  useEffect(() => {
    const savedArticles = localStorage.getItem('metabolife-articles');
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  const saveArticles = (newArticles: Article[]) => {
    setArticles(newArticles);
    localStorage.setItem('metabolife-articles', JSON.stringify(newArticles));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      alert('Por favor completa al menos el título y el contenido');
      return;
    }

    const newArticle: Article = {
      id: `article-${Date.now()}`,
      ...formData,
      createdAt: new Date().toLocaleDateString('es-ES')
    };

    const updatedArticles = [newArticle, ...articles];
    saveArticles(updatedArticles);

    // Reset form
    setFormData({
      title: '',
      subtitle: '',
      excerpt: '',
      icon: '📝',
      tag: '',
      bgColor: '#667eea',
      content: '',
      author: 'Equipo MetaboLife',
      readTime: '5'
    });

    alert('¡Artículo creado exitosamente! Ve al blog para verlo publicado.');
    
    // Trigger a custom event to notify other components
    window.dispatchEvent(new CustomEvent('articleCreated'));
  };

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      const updatedArticles = articles.filter(article => article.id !== id);
      saveArticles(updatedArticles);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <AdminContainer>
      <Container>
        <Header>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BackButton href="/blog">← Volver al Blog</BackButton>
            <Title>✍️ Creador de Artículos</Title>
            <Subtitle>Panel de administración para crear nuevos artículos del blog</Subtitle>
          </motion.div>
        </Header>

        <ContentWrapper>
          {/* FORMULARIO */}
          <FormSection>
            <FormTitle>Crear Nuevo Artículo</FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Título del Artículo</Label>
                <Input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Ej: Cómo Acelerar tu Metabolismo"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Subtítulo</Label>
                <Input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => handleInputChange('subtitle', e.target.value)}
                  placeholder="Descripción breve del artículo"
                />
              </FormGroup>

              <FormGroup>
                <Label>Extracto/Preview</Label>
                <TextArea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  placeholder="Breve descripción que aparecerá en la vista previa del artículo"
                />
              </FormGroup>

              <FormGroup>
                <Label>Icono/Emoji</Label>
                <Input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => handleInputChange('icon', e.target.value)}
                  placeholder="📝"
                  maxLength={2}
                />
              </FormGroup>

              <FormGroup>
                <Label>Categoría/Tag</Label>
                <Select
                  value={formData.tag}
                  onChange={(e) => handleInputChange('tag', e.target.value)}
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Metabolismo">Metabolismo</option>
                  <option value="Nutrición">Nutrición</option>
                  <option value="Salud">Salud</option>
                  <option value="Psicología">Psicología</option>
                  <option value="Ejercicio">Ejercicio</option>
                  <option value="Lifestyle">Lifestyle</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Color de Fondo</Label>
                <ColorPicker
                  type="color"
                  value={formData.bgColor}
                  onChange={(e) => handleInputChange('bgColor', e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <Label>Contenido del Artículo</Label>
                <TextArea
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  placeholder="Escribe el contenido completo del artículo aquí..."
                  style={{ minHeight: '200px' }}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Autor</Label>
                <Input
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  placeholder="Nombre del autor"
                />
              </FormGroup>

              <FormGroup>
                <Label>Tiempo de Lectura (minutos)</Label>
                <Input
                  type="number"
                  value={formData.readTime}
                  onChange={(e) => handleInputChange('readTime', e.target.value)}
                  min="1"
                  max="60"
                />
              </FormGroup>

              <ButtonGroup>
                <Button type="submit" variant="primary">
                  Crear Artículo
                </Button>
                <Button 
                  type="button" 
                  variant="secondary"
                  onClick={() => setFormData({
                    title: '',
                    subtitle: '',
                    excerpt: '',
                    icon: '📝',
                    tag: '',
                    bgColor: '#667eea',
                    content: '',
                    author: 'Equipo MetaboLife',
                    readTime: '5'
                  })}
                >
                  Limpiar
                </Button>
                <Button 
                  type="button" 
                  variant="secondary"
                  onClick={() => setFormData({
                    title: 'Los Beneficios del Ayuno Intermitente',
                    subtitle: 'Una guía completa para principiantes',
                    excerpt: 'Descubre cómo el ayuno intermitente puede transformar tu metabolismo y mejorar tu salud de manera sostenible.',
                    icon: '⏰',
                    tag: 'Nutrición',
                    bgColor: '#38a169',
                    content: `El ayuno intermitente se ha convertido en una de las estrategias nutricionales más populares y efectivas para mejorar la salud metabólica.

¿Qué es el ayuno intermitente?

El ayuno intermitente es un patrón de alimentación que alterna entre períodos de comida y ayuno. No se trata de QUÉ comer, sino de CUÁNDO comer.

Beneficios comprobados:

• Mejora la sensibilidad a la insulina
• Acelera el metabolismo
• Promueve la pérdida de grasa corporal
• Mejora la claridad mental
• Reduce la inflamación

Métodos más populares:

16:8 - Ayuna 16 horas, come en 8 horas
14:10 - Ayuna 14 horas, come en 10 horas  
5:2 - Come normal 5 días, restringe calorías 2 días

Recuerda: El ayuno intermitente debe adaptarse a tu estilo de vida y necesidades individuales. Siempre consulta con un profesional antes de comenzar.`,
                    author: 'Dr. Nutricionista MetaboLife',
                    readTime: '6'
                  })}
                >
                  Ejemplo
                </Button>
              </ButtonGroup>
            </form>
          </FormSection>

          {/* PREVIEW Y LISTA */}
          <PreviewSection>
            <PreviewTitle>Vista Previa</PreviewTitle>
            
            {formData.title && (
              <ArticlePreview $bgColor={formData.bgColor}>
                <PreviewHeader>
                  <PreviewTitleText>
                    {formData.icon} {formData.title}
                  </PreviewTitleText>
                  {formData.subtitle && (
                    <PreviewSubtitle>{formData.subtitle}</PreviewSubtitle>
                  )}
                </PreviewHeader>
                <PreviewContent>
                  <PreviewText>
                    <strong>Extracto:</strong> {formData.excerpt || 'Sin extracto'}
                  </PreviewText>
                  <PreviewText>
                    <strong>Categoría:</strong> {formData.tag || 'Sin categoría'} | 
                    <strong> Tiempo:</strong> {formData.readTime} min | 
                    <strong> Autor:</strong> {formData.author}
                  </PreviewText>
                  {formData.content && (
                    <PreviewText>
                      <strong>Contenido:</strong> {formData.content.substring(0, 200)}
                      {formData.content.length > 200 && '...'}
                    </PreviewText>
                  )}
                </PreviewContent>
              </ArticlePreview>
            )}

            {/* LISTA DE ARTÍCULOS CREADOS */}
            <ArticlesList>
              <ArticlesListTitle>Artículos Creados ({articles.length})</ArticlesListTitle>
              {articles.length === 0 ? (
                <PreviewText>No hay artículos creados aún</PreviewText>
              ) : (
                articles.map((article) => (
                  <ArticleCard key={article.id}>
                    <ArticleCardTitle>
                      {article.icon} {article.title}
                    </ArticleCardTitle>
                    <ArticleCardMeta>
                      <span>{article.tag} • {article.readTime} min • {article.createdAt}</span>
                      <DeleteButton onClick={() => handleDelete(article.id)}>
                        Eliminar
                      </DeleteButton>
                    </ArticleCardMeta>
                  </ArticleCard>
                ))
              )}
            </ArticlesList>
          </PreviewSection>
        </ContentWrapper>
      </Container>
    </AdminContainer>
  );
}
