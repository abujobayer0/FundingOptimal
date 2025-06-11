import { NextRequest, NextResponse } from 'next/server';
import { getTokensFromCookies } from '@/lib/cookies';
import { verifyAccessToken } from '@/lib/jwt';

// Routes that require authentication
const protectedRoutes = ['/profile', '/dashboard', '/api/auth/me'];

// Routes that should redirect to dashboard if user is already authenticated
const authRoutes = ['/auth/login', '/auth/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { accessToken, refreshToken } = getTokensFromCookies(request);

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Check if route is auth route
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Handle protected routes
  if (isProtectedRoute) {
    if (!accessToken) {
      // No access token, redirect to login
      const url = new URL('/auth/login', request.url);
      url.searchParams.set('redirect', pathname);
      return NextResponse.redirect(url);
    }

    try {
      // Verify access token
      verifyAccessToken(accessToken);
      return NextResponse.next();
    } catch (error) {
      // Access token invalid, try refresh token
      if (refreshToken) {
        // Let the client handle token refresh
        return NextResponse.next();
      } else {
        // No refresh token, redirect to login
        const url = new URL('/auth/login', request.url);
        url.searchParams.set('redirect', pathname);
        return NextResponse.redirect(url);
      }
    }
  }

  // Handle auth routes (redirect if already authenticated)
  if (isAuthRoute && accessToken) {
    try {
      verifyAccessToken(accessToken);
      // User is authenticated, redirect to dashboard or profile
      return NextResponse.redirect(new URL('/profile', request.url));
    } catch (error) {
      // Invalid token, allow access to auth routes
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
