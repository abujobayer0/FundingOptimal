import { NextRequest } from 'next/server';
import {
  withAuth,
  createSuccessResponse,
  createErrorResponse,
} from '@/lib/api-auth';
import { AuthService } from '@/lib/auth';

export async function GET(request: NextRequest) {
  return withAuth(request, async (request, payload) => {
    try {
      // Get user from database using the verified payload
      const user = await AuthService.getUserById(payload.userId);

      if (!user) {
        return createErrorResponse('User not found', [], 404);
      }

      // Return user data
      return createSuccessResponse(
        {
          user: {
            id: user._id?.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            createdAt: user.createdAt,
          },
        },
        'User data retrieved successfully'
      );
    } catch (error: unknown) {
      console.error('Get user error:', error);
      return createErrorResponse('Failed to get user information');
    }
  });
}
