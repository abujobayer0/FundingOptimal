import { NextRequest, NextResponse } from 'next/server';
import { getTokensFromCookies } from '@/lib/cookies';
import { verifyAccessToken } from '@/lib/jwt';

// Routes that require authentication
const protectedRoutes = ['/profile', '/dashboard', '/api/auth/me'];

// Routes that should redirect to dashboard if user is already authenticated
const authRoutes = ['/auth/login', '/auth/register'];

// Helper function to get tokens from request (works with both HTTP-only and client-accessible cookies)
const getAuthTokens = (request: NextRequest) => {
  // Try to get tokens using the server-side method
  const tokens = getTokensFromCookies(request);

  // If not found, try to get from cookies directly (fallback)
  if (!tokens.accessToken) {
    const accessToken = request.cookies.get('accessToken')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;
    return { accessToken, refreshToken };
  }

  return tokens;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { accessToken, refreshToken } = getAuthTokens(request);

  // Debug logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🔐 Middleware:', {
      path: pathname,
      hasAccessToken: !!accessToken,
      hasRefreshToken: !!refreshToken,
      accessTokenLength: accessToken?.length || 0,
    });
  }

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
      console.log('🚫 No access token, redirecting to login');
      const url = new URL('/auth/login', request.url);
      url.searchParams.set('redirect', pathname);
      return NextResponse.redirect(url);
    }

    try {
      // Verify access token
      const payload = verifyAccessToken(accessToken);
      console.log('✅ Valid access token for user:', payload.userId);
      return NextResponse.next();
    } catch (error) {
      console.error(
        '❌ Invalid access token:',
        error instanceof Error ? error.message : 'Unknown error'
      );

      // Access token invalid, check if we have refresh token
      if (refreshToken) {
        // Let the client handle token refresh
        console.log(
          '🔄 Invalid access token but refresh token exists, allowing request'
        );
        return NextResponse.next();
      } else {
        // No refresh token, redirect to login
        console.log('🚫 No refresh token, redirecting to login');
        const url = new URL('/auth/login', request.url);
        url.searchParams.set('redirect', pathname);
        return NextResponse.redirect(url);
      }
    }
  }

  // Handle auth routes (redirect if already authenticated)
  if (isAuthRoute && accessToken) {
    try {
      // User is authenticated, redirect to profile
      console.log('✅ User already authenticated, redirecting to profile');
      return NextResponse.redirect(new URL('/profile', request.url));
    } catch (error) {
      console.error(
        '❌ Invalid token on auth route, allowing access:',
        error instanceof Error ? error.message : 'Unknown error'
      );
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
