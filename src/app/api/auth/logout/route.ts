import { NextRequest, NextResponse } from 'next/server';
import { getTokensFromRequest, createSuccessResponse } from '@/lib/api-auth';
import { clearTokenCookies } from '@/lib/cookies';
import { AuthService } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { refreshToken } = getTokensFromRequest(request);

    // Revoke refresh token if it exists
    if (refreshToken) {
      try {
        await AuthService.revokeRefreshToken(refreshToken);
        console.log('✅ Refresh token revoked successfully');
      } catch (error) {
        // Log but don't fail the logout process
        console.error('⚠️ Error revoking refresh token:', error);
      }
    }

    // Create response and clear cookies
    const response = createSuccessResponse({}, 'Logged out successfully');

    // Clear authentication cookies
    clearTokenCookies(response);

    console.log('🚪 User logged out successfully');
    return response;
  } catch (error: unknown) {
    console.error('❌ Logout error:', error);

    // Even if there's an error, we should clear the cookies
    const response = createSuccessResponse({}, 'Logged out successfully');
    clearTokenCookies(response);

    return response;
  }
}
