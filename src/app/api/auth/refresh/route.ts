import { NextRequest } from 'next/server';
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

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = getTokensFromRequest(request);

    if (!refreshToken) {
      return createErrorResponse(
        'Refresh token not found',
        [{ field: 'auth', message: 'Refresh token required' }],
        401
      );
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

    console.log(
      '🔄 Tokens refreshed successfully for user:',
      authResult.user.id
    );
    return response;
  } catch (error: unknown) {
    console.error('❌ Token refresh error:', error);

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
      return response;
    }

    // Generic error response
    return createErrorResponse('Token refresh failed', [
      { field: 'auth', message: 'Please try again' },
    ]);
  }
}
