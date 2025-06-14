import { NextRequest } from 'next/server';
import {
  withAuth,
  createSuccessResponse,
  createErrorResponse,
} from '@/lib/api-auth';
import { AuthService } from '@/lib/auth';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  return withAuth(request, async (request, payload) => {
    try {
      // Get the current user to check if they are an admin
      const currentUser = await AuthService.getUserById(payload.userId);
      if (!currentUser) {
        return createErrorResponse('User not found', [], 404);
      }

      // For now, let's assume all users can see the list
      // In a real app, you'd want to add an isAdmin field and check for it

      // Get all users
      const users = await User.find({}, '-password');

      // Return users data
      return createSuccessResponse(
        {
          users: users.map((user) => ({
            id: user._id?.toString(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            createdAt: user.createdAt,
          })),
        },
        'Users retrieved successfully'
      );
    } catch (error: unknown) {
      console.error('Get users error:', error);
      return createErrorResponse('Failed to get users information');
    }
  });
}
