# MetabolLife - Landing Page

Activa tu metabolismo. Una landing page moderna sobre metabolismo y nutrición construida con Next.js, React, GSAP y Lenis.

## 🚀 Características

- **Diseño Moderno**: Interfaz minimalista y profesional
- **Animaciones Fluidas**: GSAP + Lenis para experiencias suaves a 60fps
- **Responsive**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags y estructura semántica
- **Sistema de Contacto**: EmailJS integrado
- **Performance**: Optimización automática de Next.js

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14+ con App Router
- **Frontend**: React 18+ con TypeScript
- **Estilos**: Tailwind CSS + CSS personalizado
- **Animaciones**: GSAP + Lenis smooth scrolling
- **Formularios**: React Hook Form + EmailJS
- **Deployment**: Optimizado para Netlify

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd metabolism-landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/                 # Pages (App Router)
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales
├── components/         # Componentes React
│   ├── sections/       # Secciones de la landing
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Reading.tsx
│   │   ├── HealthyEating.tsx
│   │   └── ...
│   ├── ui/            # Componentes UI reutilizables
│   └── SmoothScrolling.tsx
├── hooks/             # Custom hooks
│   ├── useLenis.ts    # Hook para smooth scrolling
│   └── useGSAP.ts     # Hook para animaciones
├── utils/             # Utilidades
└── types/             # Tipos TypeScript
```

## 🎨 Secciones de la Landing

1. **Hero** - Introducción principal con CTA
2. **Reading** - Importancia de la lectura en el metabolismo
3. **Healthy Eating** - Formas correctas de alimentación
4. **Nutrition Info** - Información nutricional de productos
5. **Blood Pressure** - Explicación sobre presión arterial
6. **Habit Change** - Cambio de hábitos alimentarios
7. **OMS Procedures** - Procedimientos de la OMS
8. **Glucose Production** - Producción de glucosa corporal
9. **Contact** - Formulario de contacto con EmailJS
10. **Footer** - Información adicional y enlaces

## ⚡ Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint

# Export estático (para Netlify)
npm run export
```

## 🚀 Deployment en Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Auto-deploy**: Conectar con Git para deployment automático

### Configuración para Static Export (Opcional)

Si prefieres export estático, agrega en `next.config.ts`:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

## 📧 Configuración EmailJS

Para el sistema de contacto, necesitarás configurar EmailJS:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar servicio de email
3. Crear template de email
4. Obtener credenciales (User ID, Service ID, Template ID)
5. Agregar las variables de entorno

## 🎨 Personalización

### Colores
Los colores principales están definidos en `globals.css`:
- Azul primario: `#2563eb`
- Verde esmeralda: `#10b981`
- Grises: Escala de Tailwind

### Animaciones
Las animaciones se configuran con atributos `data-animate`:
- `fade-up`: Aparición desde abajo
- `fade-in`: Aparición simple
- `slide-left/right`: Deslizamiento lateral
- `scale-up`: Escala desde el centro

### Tipografía
Fuente principal: Inter (Google Fonts)
Clases disponibles:
- `heading-xl`, `heading-lg`, `heading-md`
- `body-lg`, `body-md`

## 🔧 Configuración Adicional

### VS Code
El proyecto incluye configuración para VS Code en `.github/copilot-instructions.md` con instrucciones específicas para Copilot.

### Performance
- Imágenes optimizadas con Next.js Image
- Lazy loading automático
- Bundle splitting
- CSS crítico inline

## 📱 Responsive Design

Breakpoints de Tailwind:
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🆘 Soporte

Para soporte o preguntas, contacta a través del formulario de la landing page o abre un issue en el repositorio.
