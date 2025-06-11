import { NextRequest } from 'next/server';
import { z } from 'zod';
import {
  withAuth,
  createSuccessResponse,
  createErrorResponse,
} from '@/lib/api-auth';
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
  return withAuth(request, async (request, payload) => {
    try {
      // Parse request body
      const body = await request.json();

      // Validate request body
      const validationResult = updateProfileSchema.safeParse(body);
      if (!validationResult.success) {
        const errors = validationResult.error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));
        return createErrorResponse('Validation failed', errors, 400);
      }

      const updateData = validationResult.data;

      // Clean phone number (remove if empty string)
      if (updateData.phone === '') {
        updateData.phone = undefined;
      }

      // Update user profile using the verified user ID from token
      const updatedUser = await AuthService.updateUser(
        payload.userId,
        updateData
      );

      if (!updatedUser) {
        return createErrorResponse(
          'User not found',
          [{ field: 'user', message: 'User not found' }],
          404
        );
      }

      // Return updated user data
      return createSuccessResponse(
        {
          user: {
            id: updatedUser._id.toString(),
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            phone: updatedUser.phone,
          },
        },
        'Profile updated successfully'
      );
    } catch (error: unknown) {
      console.error('Update profile error:', error);

      // Handle validation errors from MongoDB
      if (error instanceof Error && error.name === 'ValidationError') {
        const errors = Object.values(
          (error as unknown as { errors: { path: string; message: string }[] })
            .errors
        ).map((err) => ({
          field: err.path,
          message: err.message,
        }));

        return createErrorResponse('Validation failed', errors, 400);
      }

      // Generic error response
      return createErrorResponse('Failed to update profile. Please try again.');
    }
  });
}
