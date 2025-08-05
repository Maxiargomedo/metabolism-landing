import { createCanvas } from 'canvas';
import fs from 'fs';

// Crear canvas de 32x32 para favicon
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Crear gradiente radial verde
const centerX = 16;
const centerY = 16;
const radius = 15;

const gradient = ctx.createRadialGradient(
  centerX, centerY * 0.7, 0,
  centerX, centerY, radius
);
gradient.addColorStop(0, '#A8E6A3');
gradient.addColorStop(0.3, '#81C784');
gradient.addColorStop(0.7, '#4CAF50');
gradient.addColorStop(1, '#2E7D32');

// Dibujar círculo
ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.fill();

// Agregar letra M en blanco
ctx.fillStyle = 'white';
ctx.font = 'bold 20px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.shadowColor = 'rgba(0,0,0,0.3)';
ctx.shadowBlur = 2;
ctx.fillText('M', centerX, centerY);

// Guardar como PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/favicon-32x32.png', buffer);

console.log('✅ Favicon generado: public/favicon-32x32.png');
