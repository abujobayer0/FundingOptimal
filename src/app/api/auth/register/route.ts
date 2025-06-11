import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { AuthService } from '@/lib/auth';
import { setTokenCookies } from '@/lib/cookies';

// Validation schema
const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name cannot exceed 50 characters'),
    lastName: z
      .string()
      .min(1, 'Last name is required')
      .max(50, 'Last name cannot exceed 50 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string(),
    phone: z.string().optional(),
    referralCode: z.string().optional(),
    terms: z
      .boolean()
      .refine(
        (val) => val === true,
        'You must accept the terms and conditions'
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = registerSchema.safeParse(body);
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

    const { confirmPassword, terms, ...userData } = validationResult.data;

    // Register user
    const authResult = await AuthService.registerUser(userData);

    // Create response
    const response = NextResponse.json(
      {
        success: true,
        message: 'User registered successfully',
        user: authResult.user,
      },
      { status: 201 }
    );

    // Set token cookies
    setTokenCookies(response, authResult.accessToken, authResult.refreshToken);

    return response;
  } catch (error: any) {
    // Enhanced error logging
    console.error('Registration error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      code: error.code,
    });

    // Handle specific errors
    if (error.message === 'User already exists with this email') {
      return NextResponse.json(
        {
          success: false,
          message: 'An account with this email already exists',
          errors: [{ field: 'email', message: 'Email is already registered' }],
        },
        { status: 409 }
      );
    }

    // Handle MongoDB duplicate key error (E11000)
    if (error.code === 11000 || error.message.includes('E11000')) {
      return NextResponse.json(
        {
          success: false,
          message: 'An account with this email already exists',
          errors: [{ field: 'email', message: 'Email is already registered' }],
        },
        { status: 409 }
      );
    }

    // Handle validation errors from MongoDB
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => ({
        field: err.path,
        message: err.message,
      }));

      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors,
        },
        { status: 400 }
      );
    }

    // Handle MongoDB connection errors
    if (
      error.message.includes('connect') ||
      error.name === 'MongoNetworkError'
    ) {
      console.error('Database connection error during registration');
      return NextResponse.json(
        {
          success: false,
          message: 'Database connection error. Please try again later.',
          errors: [{ field: 'general', message: 'Database connection failed' }],
        },
        { status: 503 }
      );
    }

    // Handle JWT signing errors
    if (error.message.includes('jwt') || error.message.includes('token')) {
      console.error('JWT token generation error during registration');
      return NextResponse.json(
        {
          success: false,
          message: 'Authentication token generation failed',
          errors: [{ field: 'general', message: 'Token generation failed' }],
        },
        { status: 500 }
      );
    }

    // Handle bcrypt/password hashing errors
    if (error.message.includes('hash') || error.message.includes('bcrypt')) {
      console.error('Password hashing error during registration');
      return NextResponse.json(
        {
          success: false,
          message: 'Password processing failed',
          errors: [{ field: 'password', message: 'Password processing error' }],
        },
        { status: 500 }
      );
    }

    // Generic error response with more details in development
    const isDevelopment = process.env.NODE_ENV === 'development';
    return NextResponse.json(
      {
        success: false,
        message: 'Registration failed. Please try again.',
        errors: [
          {
            field: 'general',
            message: isDevelopment
              ? `Error: ${error.message}`
              : 'An unexpected error occurred',
          },
        ],
      },
      { status: 500 }
    );
  }
}
