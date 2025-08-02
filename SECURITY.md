# 🔒 Guía de Seguridad - MetabolLife

## Implementaciones de Seguridad

### 🛡️ Headers de Seguridad
- **CSP (Content Security Policy)**: Previene XSS
- **HSTS**: Fuerza HTTPS
- **X-Frame-Options**: Previene clickjacking
- **X-Content-Type-Options**: Previene MIME sniffing

### 🚦 Rate Limiting
- **5 requests por IP cada 15 minutos** para APIs
- Headers informativos sobre límites
- Bloqueo temporal automático

### 🔐 Validación de Datos
- **Sanitización de inputs**: Previene inyección de código
- **Validación de email**: Regex estricto
- **Límites de longitud**: Previene ataques de buffer
- **Content-Type validation**: Solo JSON permitido

### 🌐 Protección CORS
- **Orígenes permitidos**: Solo dominios autorizados
- **Verificación de origen**: En requests POST

### 📧 Configuración de Email Segura
- **Variables de entorno**: Credenciales protegidas
- **TLS/SSL**: Conexiones encriptadas
- **Datos sanitizados**: En templates de email

## ⚙️ Configuración de Producción

### Variables de Entorno Requeridas
```bash
# Email
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_app_password

# Rate Limiting
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW=900000

# Seguridad
ALLOWED_ORIGINS=https://metabolife.com
```

### Checklist de Despliegue
- [ ] Variables de entorno configuradas
- [ ] HTTPS habilitado
- [ ] CSP configurado correctamente
- [ ] Rate limiting funcional
- [ ] Logs de seguridad activos

## 🚨 Monitoreo de Seguridad

### Logs a Revisar
- Intentos de rate limiting
- Requests con orígenes no permitidos
- Errores de validación de datos
- Accesos a rutas no autorizadas

### Métricas Importantes
- Tasa de requests bloqueados
- Tiempo de respuesta de APIs
- Errores de autenticación

## 🔄 Mantenimiento

### Actualizaciones Regulares
- Dependencias de npm
- Headers de seguridad
- Políticas CSP
- Certificados SSL

### Revisión Mensual
- Logs de seguridad
- Políticas de rate limiting
- Variables de entorno
- Configuración de CORS
