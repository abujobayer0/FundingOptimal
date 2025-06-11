'use client';

import Cookies from 'js-cookie';

// Client-side cookie utilities using js-cookie
// These work with non-HTTP-only cookies set by the server

// Cookie configuration based on environment
const getCookieConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isSecure = isProduction || process.env.FORCE_SECURE_COOKIES === 'true';

  return {
    secure: isSecure,
    sameSite: 'lax' as const,
    // Don't set domain on client-side, let server handle it
    path: '/',
  };
};

// Enhanced token management with error handling
export const getAccessToken = (): string | null => {
  try {
    return Cookies.get('accessToken') || null;
  } catch (error) {
    console.error('Failed to get access token:', error);
    return null;
  }
};

export const getRefreshToken = (): string | null => {
  try {
    return Cookies.get('refreshToken') || null;
  } catch (error) {
    console.error('Failed to get refresh token:', error);
    return null;
  }
};

export const setAuthTokens = (
  accessToken: string,
  refreshToken: string
): void => {
  try {
    const config = getCookieConfig();

    // Set access token (15 minutes)
    Cookies.set('accessToken', accessToken, {
      ...config,
      expires: 1 / 96, // 15 minutes in days
    });

    // Note: Refresh token is typically HTTP-only and set by server
    // Only set client-side if specifically needed
    if (refreshToken) {
      Cookies.set('refreshToken', refreshToken, {
        ...config,
        expires: 7, // 7 days
      });
    }
  } catch (error) {
    console.error('Failed to set auth tokens:', error);
  }
};

export const clearAuthTokens = (): void => {
  try {
    const config = getCookieConfig();

    // Clear both tokens with various configurations to ensure cleanup
    Cookies.remove('accessToken', { path: '/' });
    Cookies.remove('refreshToken', { path: '/' });

    // Also try with domain configurations
    if (config.secure) {
      Cookies.remove('accessToken', { path: '/', secure: true });
      Cookies.remove('refreshToken', { path: '/', secure: true });
    }

    // Try with different sameSite values for thorough cleanup
    ['lax', 'strict', 'none'].forEach((sameSite) => {
      Cookies.remove('accessToken', {
        path: '/',
        sameSite: sameSite as 'lax' | 'strict' | 'none',
      });
      Cookies.remove('refreshToken', {
        path: '/',
        sameSite: sameSite as 'lax' | 'strict' | 'none',
      });
    });
  } catch (error) {
    console.error('Failed to clear auth tokens:', error);
  }
};

export const isAuthenticated = (): boolean => {
  try {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    // Consider authenticated if we have at least one token
    return !!(accessToken || refreshToken);
  } catch (error) {
    console.error('Failed to check authentication status:', error);
    return false;
  }
};

export const getAuthTokens = (): {
  accessToken: string | null;
  refreshToken: string | null;
} => {
  try {
    return {
      accessToken: getAccessToken(),
      refreshToken: getRefreshToken(),
    };
  } catch (error) {
    console.error('Failed to get auth tokens:', error);
    return {
      accessToken: null,
      refreshToken: null,
    };
  }
};

// Enhanced token validation with better error handling
export const isTokenExpired = (token: string): boolean => {
  try {
    if (!token) return true;

    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    return payload.exp < currentTime;
  } catch (error) {
    console.error('Failed to check token expiration:', error);
    return true; // Assume expired if we can't parse
  }
};

// Check if access token needs refresh
export const needsRefresh = (): boolean => {
  try {
    const accessToken = getAccessToken();
    if (!accessToken) return true;

    return isTokenExpired(accessToken);
  } catch (error) {
    console.error('Failed to check if token needs refresh:', error);
    return true;
  }
};

// Utility to check if we're in a browser environment
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

// Safe localStorage operations with fallback
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      if (!isBrowser()) return null;
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Failed to get localStorage item:', error);
      return null;
    }
  },

  setItem: (key: string, value: string): void => {
    try {
      if (!isBrowser()) return;
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Failed to set localStorage item:', error);
    }
  },

  removeItem: (key: string): void => {
    try {
      if (!isBrowser()) return;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove localStorage item:', error);
    }
  },
};

// Example usage:
// import { getAccessToken, setAccessToken, clearAuthTokens, isAuthenticated } from '@/lib/client-cookies';
//
// // Check if user is authenticated
// if (isAuthenticated()) {
//   console.log('User is logged in');
// }
//
// // Get tokens
// const { accessToken, refreshToken } = getAuthTokens();
//
// // Set tokens manually
// setAuthTokens('access-token', 'refresh-token');
//
// // Clear all auth tokens
// clearAuthTokens();
