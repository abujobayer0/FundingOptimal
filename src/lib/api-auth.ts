import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessToken, type JWTPayload } from '@/lib/jwt';

/**
 * Unified API authentication utility for client-accessible cookies
 * Works with the client-cookies.ts system
 */

// Extract tokens from request cookies (client-accessible cookies)
export const getTokensFromRequest = (request: NextRequest) => {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  return {
    accessToken: accessToken || undefined,
    refreshToken: refreshToken || undefined,
  };
};

// Verify and extract user data from access token
export const verifyRequestAuth = (request: NextRequest): JWTPayload => {
  const { accessToken } = getTokensFromRequest(request);

  if (!accessToken) {
    throw new Error('Access token not found');
  }

  try {
    return verifyAccessToken(accessToken);
  } catch (error) {
    throw new Error('Invalid or expired access token');
  }
};

// Create authenticated error response
export const createAuthErrorResponse = (
  message: string,
  status: number = 401
) => {
  return NextResponse.json(
    {
      success: false,
      message,
      errors: [{ field: 'auth', message }],
    },
    { status }
  );
};

// Create success response
export const createSuccessResponse = (
  data: any,
  message: string = 'Success',
  status: number = 200
) => {
  return NextResponse.json(
    {
      success: true,
      message,
      ...data,
    },
    { status }
  );
};

// Create error response
export const createErrorResponse = (
  message: string,
  errors: any[] = [],
  status: number = 500
) => {
  return NextResponse.json(
    {
      success: false,
      message,
      errors: errors.length > 0 ? errors : [{ field: 'general', message }],
    },
    { status }
  );
};

// Middleware-like function for API routes that require authentication
export const withAuth = async (
  request: NextRequest,
  handler: (request: NextRequest, payload: JWTPayload) => Promise<NextResponse>
): Promise<NextResponse> => {
  try {
    const payload = verifyRequestAuth(request);
    return await handler(request, payload);
  } catch (error) {
    console.error('API Auth error:', error);

    if (error instanceof Error) {
      if (error.message === 'Access token not found') {
        return createAuthErrorResponse('Authentication required', 401);
      }
      if (error.message === 'Invalid or expired access token') {
        return createAuthErrorResponse('Invalid or expired access token', 401);
      }
    }

    return createErrorResponse('Authentication failed');
  }
};

// Check if user has valid tokens (for optional auth)
export const hasValidAuth = (request: NextRequest): boolean => {
  try {
    verifyRequestAuth(request);
    return true;
  } catch {
    return false;
  }
};

// Get user ID from request (throws if not authenticated)
export const getUserIdFromRequest = (request: NextRequest): string => {
  const payload = verifyRequestAuth(request);
  return payload.userId;
};

// Optional auth - returns payload if valid, null if not
export const getOptionalAuth = (request: NextRequest): JWTPayload | null => {
  try {
    return verifyRequestAuth(request);
  } catch {
    return null;
  }
};
