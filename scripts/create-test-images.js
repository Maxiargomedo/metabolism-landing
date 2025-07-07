import fs from 'fs';
import path from 'path';

// Asegúrate de que el directorio público/img existe
const imgDir = path.join(process.cwd(), 'public', 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Contenido de un SVG de nutrición para pruebas
const createTestImage = (filename, color, iconType) => {
  const icons = {
    food: `<path d="M12 6.253v13h-8v-13h8zm2 0v13h8v-13h-8zm-2-2h12v17h-24v-17h12z" fill="${color}"/>`,
    diet: `<path d="M14 22.5L11.2 19H6V9h14v10h-5.2L14 22.5zm-2-5.5h5v-6H7v6h5zm2 4.3L15.1 19h-6.2l1.1 2.3z" fill="${color}"/>`,
    nutrition: `<path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.42-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.65 5.66z" fill="${color}"/>`,
    wellness: `<path d="M8 15a3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0 3-3c0-1.657-1.343-3-3-3-.883 0-1.68.377-2.23.983A2.979 2.979 0 0 0 8 9c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3zm0 2c-2.21 0-4-1.79-4-4s1.79-4 4-4c.74 0 1.43.2 2.03.56A3.977 3.977 0 0 1 14 9c2.21 0 4 1.79 4 4s-1.79 4-4 4c-.74 0-1.43-.2-2.03-.56A3.977 3.977 0 0 1 8 17z" fill="${color}"/>`,
    health: `<path d="M10.5 1L9.85 2.16l-2.96 7.55-.75 1.93-.33 1.4-.01 1.88 1.51.08 5.32.4 3.47.32 1.74.11.67-7.56-.34-1.68-.3-1.87-.2-1.32-.13-1.04L16.5 2 10.5 1z" fill="${color}"/>`
  };

  const svgContent = `
  <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#1f2937"/>
    <rect x="50" y="50" width="500" height="300" rx="15" fill="#374151"/>
    <text x="300" y="150" font-family="Arial" font-size="40" fill="#e5e7eb" text-anchor="middle">Servicio de Nutrición</text>
    <g transform="translate(280, 220) scale(5)">
      ${icons[iconType]}
    </g>
    <text x="300" y="350" font-family="Arial" font-size="20" fill="#9ca3af" text-anchor="middle">Imagen de prueba</text>
  </svg>
  `;

  fs.writeFileSync(path.join(imgDir, filename), svgContent);
  console.log(`Imagen creada: ${filename}`);
};

// Crear varias imágenes de prueba para el carrusel
createTestImage('service-1.jpg', '#4CAF50', 'nutrition');
createTestImage('service-2.jpg', '#8BC34A', 'food');
createTestImage('service-3.jpg', '#66BB6A', 'diet');
createTestImage('service-4.jpg', '#81C784', 'wellness');
createTestImage('service-5.jpg', '#A5D6A7', 'health');

// Crear imagen para el hero
createTestImage('nutrition-hero.jpg', '#4CAF50', 'nutrition');

console.log('Todas las imágenes de prueba han sido creadas en /public/img/');
