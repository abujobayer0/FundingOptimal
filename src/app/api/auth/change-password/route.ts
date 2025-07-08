import { NextRequest } from 'next/server';
import { z } from 'zod';
import {
  withAuth,
  createSuccessResponse,
  createErrorResponse,
} from '@/lib/api-auth';
import User from '@/models/User';
import connectDB from '@/lib/mongodb';

// Validation schema for password change
const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password cannot exceed 100 characters'),
});

export async function PUT(request: NextRequest) {
  return withAuth(request, async (request, payload) => {
    try {
      await connectDB();

      // Parse request body
      const body = await request.json();

      // Validate request body
      const validationResult = changePasswordSchema.safeParse(body);
      if (!validationResult.success) {
        const errors = validationResult.error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        }));
        return createErrorResponse('Validation failed', errors, 400);
      }

      const { currentPassword, newPassword } = validationResult.data;

      // Get user with password field
      const user = await User.findById(payload.userId).select('+password');

      if (!user) {
        return createErrorResponse(
          'User not found',
          [{ field: 'user', message: 'User not found' }],
          404
        );
      }

      // Verify current password
      const isPasswordValid = await user.comparePassword(currentPassword);
      if (!isPasswordValid) {
        return createErrorResponse(
          'Current password is incorrect',
          [
            {
              field: 'currentPassword',
              message: 'Current password is incorrect',
            },
          ],
          400
        );
      }

      // Update password
      user.password = newPassword;
      await user.save();

      return createSuccessResponse({}, 'Password changed successfully');
    } catch (error: unknown) {
      console.error('Change password error:', error);
      return createErrorResponse(
        'Failed to change password. Please try again.'
      );
    }
  });
}
