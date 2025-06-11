import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifyAccessToken } from '@/lib/jwt';

// Verify access token and return payload or null
const validateAccessToken = (accessToken: string) => {
  try {
    return verifyAccessToken(accessToken);
  } catch (error) {
    const isDev = process.env.NODE_ENV === 'development';
    if (isDev) {
      console.error(
        '❌ Token validation failed:',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
    return null;
  }
};

// Helper to check if path requires authentication
const isAuthRoute = (path: string) => path.startsWith('/auth');
const isProtectedRoute = (path: string) => path.startsWith('/profile');
const isApiRoute = (path: string) => path.startsWith('/api');

// Helper to create redirect response with proper logging
const createRedirect = (url: string, request: NextRequest, reason: string) => {
  const isDev = process.env.NODE_ENV === 'development';
  if (isDev) {
    console.log(`🔄 Redirecting to ${url}: ${reason}`);
  }
  return NextResponse.redirect(new URL(url, request.url));
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isDev = process.env.NODE_ENV === 'development';

  // Skip middleware for API routes (they handle their own auth)
  if (isApiRoute(path)) {
    return NextResponse.next();
  }

  // Define route types
  const isPublicPath = isAuthRoute(path);
  const isProtectedPath = isProtectedRoute(path);

  // Get tokens from cookies
  const token = request.cookies.get('accessToken')?.value || null;
  const refreshToken = request.cookies.get('refreshToken')?.value || null;

  // Debug logging in development only
  if (isDev) {
    console.log('🔐 Middleware:', {
      path,
      hasToken: !!token,
      hasRefreshToken: !!refreshToken,
      isPublic: isPublicPath,
      isProtected: isProtectedPath,
      userAgent: request.headers.get('user-agent')?.substring(0, 50) + '...',
    });
  }

  // Validate access token if present
  let tokenPayload = null;
  let hasValidToken = false;

  if (token) {
    tokenPayload = validateAccessToken(token);
    hasValidToken = !!tokenPayload;

    if (isDev && tokenPayload) {
      console.log('✅ Valid token for user:', tokenPayload.userId);
    }
  }

  // Handle authenticated users accessing auth routes
  if (isPublicPath && hasValidToken) {
    if (isDev) {
      console.log('✅ Authenticated user redirected from auth route');
    }
    return createRedirect(
      '/profile',
      request,
      'authenticated user on auth route'
    );
  }

  // Handle unauthenticated users accessing protected routes
  if (isProtectedPath) {
    // No token at all - redirect to login
    if (!token) {
      return createRedirect('/auth/login', request, 'no access token');
    }

    // Invalid token but no refresh token - redirect to login
    if (!hasValidToken && !refreshToken) {
      if (isDev) {
        console.log('🚫 Invalid token with no refresh option');
      }
      return createRedirect(
        '/auth/login',
        request,
        'invalid token, no refresh available'
      );
    }

    // Invalid token but has refresh token - allow through for client-side refresh
    if (!hasValidToken && refreshToken) {
      if (isDev) {
        console.log(
          '🔄 Invalid access token, but refresh token available - allowing for client refresh'
        );
      }
      // Let the client handle the refresh
      return NextResponse.next();
    }
  }

  // Log successful access for debugging
  if (isDev && tokenPayload && (isProtectedPath || isPublicPath)) {
    console.log('✅ Access granted:', {
      userId: tokenPayload.userId,
      path: path,
      email: tokenPayload.email,
    });
  }

  // Allow request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
