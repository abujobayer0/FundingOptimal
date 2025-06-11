import { NextRequest, NextResponse } from 'next/server';
import { getTokensFromCookies, clearTokenCookies } from '@/lib/cookies';
import { AuthService } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = getTokensFromCookies(request);

    // Revoke refresh token if it exists
    if (refreshToken) {
      try {
        await AuthService.revokeRefreshToken(refreshToken);
      } catch (error) {
        // Log but don't fail the logout process
        console.error('Error revoking refresh token:', error);
      }
    }

    // Create response and clear cookies
    const response = NextResponse.json(
      {
        success: true,
        message: 'Logged out successfully',
      },
      { status: 200 }
    );

    clearTokenCookies(response);

    return response;
  } catch (error: any) {
    console.error('Logout error:', error);

    // Even if there's an error, we should clear the cookies
    const response = NextResponse.json(
      {
        success: true,
        message: 'Logged out successfully',
      },
      { status: 200 }
    );

    clearTokenCookies(response);

    return response;
  }
}
