import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { verifyAccessToken } from '@/lib/jwt';

// Verify access token and return payload or null
const validateAccessToken = (accessToken: string) => {
  try {
    return verifyAccessToken(accessToken);
  } catch (error) {
    console.error(
      '❌ Token validation failed:',
      error instanceof Error ? error.message : 'Unknown error'
    );
    return null;
  }
};

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public and protected paths
  const isPublicPath = path.startsWith('/auth');
  const isProtectedPath = path.startsWith('/profile');

  // Get token from cookies
  const token = request.cookies.get('accessToken')?.value || null;
  const refreshToken = request.cookies.get('refreshToken')?.value || null;

  // Debug logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🔐 Middleware:', {
      path,
      hasToken: !!token,
      hasRefreshToken: !!refreshToken,
      isPublic: isPublicPath,
      isProtected: isProtectedPath,
      tokenLength: token?.length || 0,
    });
  }

  // Validate token if present
  let tokenPayload = null;
  if (token) {
    tokenPayload = validateAccessToken(token);
    if (!tokenPayload && refreshToken) {
      // Invalid access token but refresh token exists, let client handle refresh
      console.log(
        '🔄 Invalid access token but refresh token exists, allowing for client-side refresh'
      );
    } else if (!tokenPayload) {
      // Invalid token and no refresh token, treat as unauthenticated
      console.log('❌ Invalid token with no refresh token available');
    }
  }

  // Redirect authenticated users from public (auth) routes to profile
  if (isPublicPath && token && tokenPayload) {
    console.log(
      '✅ Authenticated user accessing auth route, redirecting to profile'
    );
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  // Redirect unauthenticated users from protected routes to login
  if (isProtectedPath && !token) {
    console.log(
      '🚫 Unauthenticated user accessing protected route, redirecting to login'
    );
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // If token exists but is invalid and no refresh token, redirect to login
  if (isProtectedPath && token && !tokenPayload && !refreshToken) {
    console.log(
      '🚫 Invalid token with no refresh option, redirecting to login'
    );
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Log successful access
  if (tokenPayload) {
    console.log(
      '✅ Valid access for user:',
      tokenPayload.userId,
      'to path:',
      path
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
