import Cookies from 'js-cookie';

// Client-side cookie utilities using js-cookie
// These work with non-HTTP-only cookies set by the server

export const getAccessToken = (): string | undefined => {
  return Cookies.get('accessToken');
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get('refreshToken');
};

export const setAccessToken = (token: string): void => {
  Cookies.set('accessToken', token, {
    expires: 1 / 96, // 15 minutes (1/96 of a day)
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    path: '/',
  });
};

export const setRefreshToken = (token: string): void => {
  Cookies.set('refreshToken', token, {
    expires: 7, // 7 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    path: '/',
  });
};

export const clearAuthTokens = (): void => {
  Cookies.remove('accessToken', { path: '/' });
  Cookies.remove('refreshToken', { path: '/' });
};

export const hasValidTokens = (): boolean => {
  const accessToken = getAccessToken();
  return !!accessToken;
};

export const isAuthenticated = (): boolean => {
  return hasValidTokens();
};

// Advanced: Set both tokens at once
export const setAuthTokens = (
  accessToken: string,
  refreshToken: string
): void => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};

// Get all auth-related cookies
export const getAuthTokens = () => {
  return {
    accessToken: getAccessToken(),
    refreshToken: getRefreshToken(),
  };
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
