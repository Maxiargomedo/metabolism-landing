import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 6rem 0 2rem 0;
  background: var(--section-bg-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 350px;

  @media (max-width: 768px) {
    padding: 4rem 0 1rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #4CAF50;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.5rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  margin: 0 auto;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(76,175,80,0.12);
  background: #000;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #4CAF50;
  font-size: 1.1rem;
`;

// Lazy loading del iframe de YouTube
const LazyVideoFrame = ({ src, title }: { src: string; title: string }) => (
  <iframe
    src={src}
    title={title}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    loading="lazy"
  />
);

const VideoSection = () => (
  <Wrapper id="video-section">
    <SectionTitle>Invitación</SectionTitle>
    <SectionSubtitle>
      Programa Nutricional Integral Personalizado de Hábitos Sanos
    </SectionSubtitle>
    <VideoContainer>
      <Suspense fallback={<LoadingSpinner>Cargando video...</LoadingSpinner>}>
        <LazyVideoFrame 
          src="https://www.youtube.com/embed/J2eD33TdF8s?rel=0&loading=lazy"
          title="YouTube video player"
        />
      </Suspense>
    </VideoContainer>
  </Wrapper>
);

export default VideoSection;
