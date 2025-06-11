import { NextRequest, NextResponse } from 'next/server';
import {
  getTokensFromRequest,
  createSuccessResponse,
  createErrorResponse,
} from '@/lib/api-auth';
import {
  setClientAccessibleTokenCookies,
  clearTokenCookies,
} from '@/lib/cookies';
import { AuthService } from '@/lib/auth';

// Helper to add security headers
const addSecurityHeaders = (response: NextResponse) => {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  return response;
};

export async function POST(request: NextRequest) {
  const isDev = process.env.NODE_ENV === 'development';

  try {
    const { refreshToken } = getTokensFromRequest(request);

    if (!refreshToken) {
      const response = createErrorResponse(
        'Refresh token not found',
        [{ field: 'auth', message: 'Refresh token required' }],
        401
      );
      return addSecurityHeaders(response);
    }

    // Refresh tokens using AuthService
    const authResult = await AuthService.refreshTokens(refreshToken);

    // Create success response
    const response = createSuccessResponse(
      {
        user: authResult.user,
      },
      'Tokens refreshed successfully'
    );

    // Set new client-accessible token cookies
    setClientAccessibleTokenCookies(
      response,
      authResult.accessToken,
      authResult.refreshToken
    );

    if (isDev) {
      console.log(
        '🔄 Tokens refreshed successfully for user:',
        authResult.user.id
      );
    }
    return addSecurityHeaders(response);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ Token refresh error:', errorMessage);

    // Handle specific errors
    if (
      error instanceof Error &&
      (error.message === 'Invalid or expired refresh token' ||
        error.message === 'User not found')
    ) {
      const response = createErrorResponse(
        'Invalid or expired refresh token',
        [{ field: 'auth', message: 'Please login again' }],
        401
      );

      // Clear invalid cookies
      clearTokenCookies(response);
      return addSecurityHeaders(response);
    }

    // Handle database connection errors
    if (
      error instanceof Error &&
      (error.message.includes('MONGODB_URI') ||
        error.message.includes('database') ||
        error.message.includes('connection'))
    ) {
      console.error(
        'Database connection error during token refresh:',
        errorMessage
      );
      const response = createErrorResponse(
        'Service temporarily unavailable',
        [{ field: 'auth', message: 'Database connection failed' }],
        503
      );
      return addSecurityHeaders(response);
    }

    // Handle JWT configuration errors
    if (
      error instanceof Error &&
      (error.message.includes('JWT') ||
        error.message.includes('secret') ||
        error.message.includes('token generation'))
    ) {
      console.error('JWT configuration error during refresh:', errorMessage);
      const response = createErrorResponse(
        'Authentication service error',
        [{ field: 'auth', message: 'Token service misconfigured' }],
        500
      );
      return addSecurityHeaders(response);
    }

    // Generic error response
    const response = createErrorResponse('Token refresh failed', [
      { field: 'auth', message: 'Please try again' },
    ]);
    return addSecurityHeaders(response);
  }
}
