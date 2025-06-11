import { NextRequest, NextResponse } from 'next/server';
import { getTokensFromCookies } from '@/lib/cookies';
import { verifyAccessToken } from '@/lib/jwt';
import { AuthService } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const { accessToken } = getTokensFromCookies(request);

    if (!accessToken) {
      return NextResponse.json(
        {
          success: false,
          message: 'Access token not found',
        },
        { status: 401 }
      );
    }

    // Verify and decode token
    const payload = verifyAccessToken(accessToken);

    // Get user from database
    const user = await AuthService.getUserById(payload.userId);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found',
        },
        { status: 404 }
      );
    }

    // Return user data
    return NextResponse.json(
      {
        success: true,
        user: {
          id: user._id?.toString(),
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          createdAt: user.createdAt,
        },
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Get user error:', error);

    if (error instanceof Error && error.message === 'Invalid access token') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid or expired access token',
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to get user information',
      },
      { status: 500 }
    );
  }
}
