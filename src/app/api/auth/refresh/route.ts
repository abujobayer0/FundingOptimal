import { NextRequest, NextResponse } from 'next/server';
import { getTokensFromCookies, clearTokenCookies } from '@/lib/cookies';
import { setClientAccessibleTokenCookies } from '@/lib/cookies';
import { AuthService } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = getTokensFromCookies(request);

    if (!refreshToken) {
      return NextResponse.json(
        {
          success: false,
          message: 'Refresh token not found',
        },
        { status: 401 }
      );
    }

    // Refresh tokens
    const authResult = await AuthService.refreshTokens(refreshToken);

    // Create response
    const response = NextResponse.json(
      {
        success: true,
        message: 'Tokens refreshed successfully',
        user: authResult.user,
      },
      { status: 200 }
    );

    // Set new client-accessible token cookies
    setClientAccessibleTokenCookies(
      response,
      authResult.accessToken,
      authResult.refreshToken
    );

    return response;
  } catch (error: unknown) {
    console.error('Token refresh error:', error);

    // Handle specific errors
    if (
      error instanceof Error &&
      (error.message === 'Invalid or expired refresh token' ||
        error.message === 'User not found')
    ) {
      const response = NextResponse.json(
        {
          success: false,
          message: 'Invalid or expired refresh token',
        },
        { status: 401 }
      );

      // Clear invalid cookies
      clearTokenCookies(response);

      return response;
    }

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        message: 'Token refresh failed',
      },
      { status: 500 }
    );
  }
}
