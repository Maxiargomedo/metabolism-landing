// Tipos principales para la aplicación

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface NatureImage {
  id: number;
  url: string;
  alt: string;
  title: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface AnalyticsEvent {
  event: string;
  data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface ScrollPosition {
  y: number;
  progress: number;
}
