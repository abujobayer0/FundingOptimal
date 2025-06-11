import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { AuthService } from '@/lib/auth';
import { setClientAccessibleTokenCookies } from '@/lib/cookies';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

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
    const body = await request.json();

    // Validate request body
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      const response = NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationResult.error.errors.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
      return addSecurityHeaders(response);
    }

    const loginData = validationResult.data;

    // Login user
    const authResult = await AuthService.loginUser(loginData);

    // Create response
    const response = NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        user: authResult.user,
      },
      { status: 200 }
    );

    // Set client-accessible token cookies (for js-cookie usage)
    setClientAccessibleTokenCookies(
      response,
      authResult.accessToken,
      authResult.refreshToken
    );

    if (isDev) {
      console.log('✅ Login successful for user:', authResult.user.email);
    }

    return addSecurityHeaders(response);
  } catch (error: unknown) {
    console.error(
      'Login error:',
      error instanceof Error ? error.message : 'Unknown error'
    );

    // Handle specific errors
    if (
      error instanceof Error &&
      error.message === 'Invalid email or password'
    ) {
      const response = NextResponse.json(
        {
          success: false,
          message: 'Invalid email or password',
          errors: [{ field: 'general', message: 'Invalid email or password' }],
        },
        { status: 401 }
      );
      return addSecurityHeaders(response);
    }

    // Handle database connection errors
    if (
      error instanceof Error &&
      (error.message.includes('MONGODB_URI') ||
        error.message.includes('database') ||
        error.message.includes('connection'))
    ) {
      console.error('Database connection error during login:', error.message);
      const response = NextResponse.json(
        {
          success: false,
          message: 'Service temporarily unavailable. Please try again.',
          errors: [{ field: 'general', message: 'Database connection failed' }],
        },
        { status: 503 }
      );
      return addSecurityHeaders(response);
    }

    // Handle JWT errors
    if (
      error instanceof Error &&
      (error.message.includes('JWT') || error.message.includes('token'))
    ) {
      console.error('JWT configuration error during login:', error.message);
      const response = NextResponse.json(
        {
          success: false,
          message: 'Authentication service error. Please try again.',
          errors: [{ field: 'general', message: 'Token generation failed' }],
        },
        { status: 500 }
      );
      return addSecurityHeaders(response);
    }

    // Generic error response
    const response = NextResponse.json(
      {
        success: false,
        message: 'Login failed. Please try again.',
        errors: [{ field: 'general', message: 'An unexpected error occurred' }],
      },
      { status: 500 }
    );
    return addSecurityHeaders(response);
  }
}
