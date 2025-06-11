import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { AuthService } from '@/lib/auth';
import { setTokenCookies } from '@/lib/cookies';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
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

    // Set token cookies
    setTokenCookies(response, authResult.accessToken, authResult.refreshToken);

    return response;
  } catch (error: any) {
    console.error('Login error:', error);

    // Handle specific errors
    if (error.message === 'Invalid email or password') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email or password',
          errors: [{ field: 'general', message: 'Invalid email or password' }],
        },
        { status: 401 }
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        message: 'Login failed. Please try again.',
        errors: [{ field: 'general', message: 'An unexpected error occurred' }],
      },
      { status: 500 }
    );
  }
}
