import { NextRequest, NextResponse } from 'next/server';

// Rate limiting simple en memoria (para producción usar Redis)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function getRateLimitInfo(ip: string) {
  const now = Date.now();
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW || '900000'); // 15 minutos
  const limit = parseInt(process.env.RATE_LIMIT_MAX || '5');
  
  const current = rateLimitMap.get(ip) || { count: 0, lastReset: now };
  
  if (now - current.lastReset > windowMs) {
    current.count = 0;
    current.lastReset = now;
  }
  
  rateLimitMap.set(ip, current);
  
  return {
    count: current.count,
    limit,
    remaining: Math.max(0, limit - current.count),
    resetTime: current.lastReset + windowMs,
  };
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Rate limiting para rutas API
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const rateLimitInfo = getRateLimitInfo(ip);
    
    if (rateLimitInfo.count >= rateLimitInfo.limit) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Demasiadas solicitudes. Intenta de nuevo en unos minutos.',
          retryAfter: Math.ceil((rateLimitInfo.resetTime - Date.now()) / 1000)
        }),
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': Math.ceil((rateLimitInfo.resetTime - Date.now()) / 1000).toString(),
          }
        }
      );
    }
    
    // Incrementar contador
    rateLimitInfo.count++;
    
    // Agregar headers de rate limiting
    response.headers.set('X-RateLimit-Limit', rateLimitInfo.limit.toString());
    response.headers.set('X-RateLimit-Remaining', rateLimitInfo.remaining.toString());
    response.headers.set('X-RateLimit-Reset', Math.ceil(rateLimitInfo.resetTime / 1000).toString());
  }
  
  // Validar origen para requests sensibles (más permisivo en desarrollo)
  if (request.method === 'POST' && request.nextUrl.pathname.startsWith('/api/')) {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
    
    // En desarrollo, permitir localhost en cualquier puerto
    const isLocalhost = origin?.includes('localhost') || origin?.includes('127.0.0.1');
    const isDevelopment = process.env.NODE_ENV === 'development';
    
    // Permitir requests desde dominios de Dokploy y otros proveedores comunes
    const isDokploy = origin?.includes('.dokploy.') || origin?.includes('dokploy');
    const isVercel = origin?.includes('.vercel.app');
    const isNetlify = origin?.includes('.netlify.app');
    const isCommonHost = isDokploy || isVercel || isNetlify;
    
    console.log('🔍 Middleware - Validando origen:', {
      origin,
      referer,
      allowedOrigins,
      isLocalhost,
      isDevelopment,
      isCommonHost,
      pathname: request.nextUrl.pathname
    });
    
    if (origin && !allowedOrigins.includes(origin) && !(isDevelopment && isLocalhost) && !isCommonHost) {
      console.log('❌ Origen rechazado:', origin, 'Permitidos:', allowedOrigins);
      return new NextResponse(
        JSON.stringify({ 
          error: 'Origen no permitido',
          debug: {
            origin,
            allowedOrigins,
            isDevelopment,
            isLocalhost,
            isCommonHost
          }
        }),
        { 
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    console.log('✅ Origen permitido:', origin);
  }
  
  return response;
}

export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
