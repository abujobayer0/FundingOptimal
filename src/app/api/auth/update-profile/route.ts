import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getTokensFromCookies } from '@/lib/cookies';
import { verifyAccessToken } from '@/lib/jwt';
import { AuthService } from '@/lib/auth';

// Validation schema for profile update
const updateProfileSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name cannot exceed 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name cannot exceed 50 characters'),
  phone: z
    .string()
    .regex(/^[+]?[\d\s\-()]*$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
});

export async function PUT(request: NextRequest) {
  try {
    // Get and verify access token
    const { accessToken } = getTokensFromCookies(request);

    if (!accessToken) {
      return NextResponse.json(
        {
          success: false,
          message: 'Access token not found',
          errors: [{ field: 'auth', message: 'Authentication required' }],
        },
        { status: 401 }
      );
    }

    // Verify and decode token
    const payload = verifyAccessToken(accessToken);

    // Parse request body
    const body = await request.json();

    // Validate request body
    const validationResult = updateProfileSchema.safeParse(body);
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

    const updateData = validationResult.data;

    // Clean phone number (remove if empty string)
    if (updateData.phone === '') {
      updateData.phone = undefined;
    }

    // Update user profile
    const updatedUser = await AuthService.updateUser(
      payload.userId,
      updateData
    );

    if (!updatedUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found',
          errors: [{ field: 'user', message: 'User not found' }],
        },
        { status: 404 }
      );
    }

    // Return updated user data
    return NextResponse.json(
      {
        success: true,
        message: 'Profile updated successfully',
        user: {
          id: updatedUser._id.toString(),
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          email: updatedUser.email,
          phone: updatedUser.phone,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Update profile error:', error);

    // Handle specific errors
    if (error.message === 'Invalid access token') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid or expired access token',
          errors: [{ field: 'auth', message: 'Session expired' }],
        },
        { status: 401 }
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

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update profile. Please try again.',
        errors: [{ field: 'general', message: 'An unexpected error occurred' }],
      },
      { status: 500 }
    );
  }
}
