'use client';

import { useAuth } from '@/contexts/AuthContext';
import {
  getAccessToken,
  getRefreshToken,
  clearAuthTokens,
  isAuthenticated as checkTokens,
  getAuthTokens,
  setAuthTokens,
} from '@/lib/client-cookies';

/**
 * Enhanced authentication hook that combines AuthContext with client-cookies utilities
 * Provides both server-state (user data) and client-state (tokens) management
 */
export const useClientAuth = () => {
  const authContext = useAuth();

  return {
    // From AuthContext (server state)
    ...authContext,

    // From client-cookies (client state)
    tokens: {
      get: getAuthTokens,
      set: setAuthTokens,
      clear: clearAuthTokens,
      access: getAccessToken,
      refresh: getRefreshToken,
      isValid: checkTokens,
    },

    // Utility methods
    hasTokens: checkTokens,
    getTokens: getAuthTokens,
    clearTokens: clearAuthTokens,

    // Quick access methods
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),

    // Enhanced logout that ensures both server and client cleanup
    enhancedLogout: async () => {
      await authContext.logout(); // This already calls clearAuthTokens
    },

    // Check if user is fully authenticated (both tokens and user data)
    isFullyAuthenticated: () => checkTokens() && authContext.isAuthenticated,
  };
};

// Export individual utilities for direct use
export {
  getAccessToken,
  getRefreshToken,
  clearAuthTokens,
  isAuthenticated,
  getAuthTokens,
  setAuthTokens,
} from '@/lib/client-cookies';
