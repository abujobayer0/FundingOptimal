import { NextRequest, NextResponse } from 'next/server';

const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';

interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  maxAge?: number;
  path?: string;
  domain?: string;
}

export const setTokenCookies = (
  response: NextResponse,
  accessToken: string,
  refreshToken: string
) => {
  const isProduction = NODE_ENV === 'production';

  const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
    path: '/',
    domain: isProduction ? COOKIE_DOMAIN : undefined,
  };

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

export const clearTokenCookies = (response: NextResponse) => {
  const isProduction = NODE_ENV === 'production';

  const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'strict' : 'lax',
    path: '/',
    domain: isProduction ? COOKIE_DOMAIN : undefined,
    maxAge: 0,
  };

  response.cookies.set('accessToken', '', cookieOptions);
  response.cookies.set('refreshToken', '', cookieOptions);
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
