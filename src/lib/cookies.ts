import { NextRequest, NextResponse } from 'next/server';

interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  maxAge?: number;
  path?: string;
  domain?: string;
}

// Helper to get the correct domain for cookies
const getCookieDomain = () => {
  const cookieDomain = process.env.COOKIE_DOMAIN;
  const isProduction = process.env.NODE_ENV === 'production';

  // In production, only set domain if explicitly configured
  // This allows cookies to work on subdomains when needed
  if (isProduction && cookieDomain && cookieDomain !== 'localhost') {
    return cookieDomain;
  }

  // Don't set domain for localhost or development
  return undefined;
};

// Helper to determine if we should use secure cookies
const shouldUseSecure = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const forceSecure = process.env.FORCE_SECURE_COOKIES === 'true';

  // Always use secure in production or when explicitly forced
  return isProduction || forceSecure;
};

// Helper to get the correct SameSite setting
const getSameSite = (): 'strict' | 'lax' | 'none' => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isSecure = shouldUseSecure();

  // Use 'lax' for better compatibility across domains in production
  // Use 'strict' only in development or when explicitly configured
  if (isProduction) {
    return isSecure ? 'lax' : 'lax';
  }

  return 'lax';
};

export const setTokenCookies = (
  response: NextResponse,
  accessToken: string,
  refreshToken: string
) => {
  const isSecure = shouldUseSecure();
  const sameSite = getSameSite();
  const domain = getCookieDomain();

  const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: isSecure,
    sameSite,
    path: '/',
    domain,
  };

  console.log('🍪 Setting cookies with options:', {
    secure: isSecure,
    sameSite,
    domain: domain || 'not set',
    httpOnly: true,
  });

  // Set access token cookie (15 minutes)
  response.cookies.set('accessToken', accessToken, {
    ...cookieOptions,
    maxAge: 15 * 60, // 15 minutes in seconds
  });

  // Set refresh token cookie (7 days)
  response.cookies.set('refreshToken', refreshToken, {
    ...cookieOptions,
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
  });
};

// Client-accessible version with access token readable by JS
export const setClientAccessibleTokenCookies = (
  response: NextResponse,
  accessToken: string,
  refreshToken: string
) => {
  const isSecure = shouldUseSecure();
  const sameSite = getSameSite();
  const domain = getCookieDomain();

  console.log('🍪 Setting client-accessible cookies with options:', {
    secure: isSecure,
    sameSite,
    domain: domain || 'not set',
  });

  // Set access token cookie (readable by JS for Authorization headers)
  response.cookies.set('accessToken', accessToken, {
    httpOnly: false, // Allow JavaScript access
    secure: isSecure,
    sameSite,
    path: '/',
    domain,
    maxAge: 15 * 60, // 15 minutes in seconds
  });

  // Set refresh token cookie (HTTP-only for security)
  response.cookies.set('refreshToken', refreshToken, {
    httpOnly: true, // Keep refresh token secure
    secure: isSecure,
    sameSite,
    path: '/',
    domain,
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
  });
};

export const clearTokenCookies = (response: NextResponse) => {
  const isSecure = shouldUseSecure();
  const sameSite = getSameSite();
  const domain = getCookieDomain();

  const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: isSecure,
    sameSite,
    path: '/',
    domain,
    maxAge: 0,
  };

  console.log('🗑️ Clearing cookies with options:', {
    secure: isSecure,
    sameSite,
    domain: domain || 'not set',
  });

  // Clear both with httpOnly true and false to ensure cleanup
  response.cookies.set('accessToken', '', cookieOptions);
  response.cookies.set('refreshToken', '', cookieOptions);

  // Also clear non-httpOnly version of access token
  response.cookies.set('accessToken', '', {
    ...cookieOptions,
    httpOnly: false,
  });
};

export const getTokensFromCookies = (request: NextRequest) => {
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  return {
    accessToken,
    refreshToken,
  };
};

export const getTokensFromResponse = (response: NextResponse) => {
  const accessToken = response.cookies.get('accessToken')?.value;
  const refreshToken = response.cookies.get('refreshToken')?.value;

  return {
    accessToken,
    refreshToken,
  };
};
