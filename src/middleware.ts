import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

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

  // For auth routes, check if user has valid tokens and redirect if they do
  if (isPublicPath && (token || refreshToken)) {
    return createRedirect('/profile', request, 'user already authenticated');
  }

  // Handle unauthenticated users accessing protected routes
  if (isProtectedPath) {
    // No token at all - redirect to login
    if (!token && !refreshToken) {
      return createRedirect('/auth/login', request, 'no tokens available');
    }
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
