import jwt, { SignOptions } from 'jsonwebtoken';
import { Types } from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';
const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || 'fallback-refresh-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

export interface JWTPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

export interface RefreshTokenPayload {
  userId: string;
  tokenId: string;
  iat?: number;
  exp?: number;
}

export const generateAccessToken = (
  userId: string | Types.ObjectId,
  email: string
): string => {
  const payload = {
    userId: userId.toString(),
    email,
  };
  const options = {
    expiresIn: JWT_EXPIRES_IN as string,
    issuer: 'fundingoptimal',
    audience: 'fundingoptimal-users',
  };
  // eslint-disable-next-line
  // @typescript-eslint/no-explicit-any
  return jwt.sign(payload, JWT_SECRET, options as SignOptions);
};

export const generateRefreshToken = (
  userId: string | Types.ObjectId,
  tokenId: string
): string => {
  const payload = {
    userId: userId.toString(),
    tokenId,
  };
  const options = {
    expiresIn: JWT_REFRESH_EXPIRES_IN,
    issuer: 'fundingoptimal',
    audience: 'fundingoptimal-users',
  };
  // eslint-disable-next-line
  // @typescript-eslint/no-explicit-any
  return jwt.sign(payload, JWT_REFRESH_SECRET, options as SignOptions);
};

export const verifyAccessToken = (token: string): JWTPayload => {
  try {
    return jwt.verify(token, JWT_SECRET, {
      issuer: 'fundingoptimal',
      audience: 'fundingoptimal-users',
    }) as JWTPayload;
  } catch (error) {
    console.error('Invalid access token', error);
    throw new Error('Invalid access token');
  }
};

export const verifyRefreshToken = (token: string): RefreshTokenPayload => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET, {
      issuer: 'fundingoptimal',
      audience: 'fundingoptimal-users',
    }) as RefreshTokenPayload;
  } catch (error) {
    console.error('Invalid refresh token', error);
    throw new Error('Invalid refresh token');
  }
};

export const getTokenExpirationDate = (expiresIn: string): Date => {
  const now = new Date();

  if (expiresIn.endsWith('m')) {
    const minutes = parseInt(expiresIn.slice(0, -1));
    return new Date(now.getTime() + minutes * 60 * 1000);
  } else if (expiresIn.endsWith('h')) {
    const hours = parseInt(expiresIn.slice(0, -1));
    return new Date(now.getTime() + hours * 60 * 60 * 1000);
  } else if (expiresIn.endsWith('d')) {
    const days = parseInt(expiresIn.slice(0, -1));
    return new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
  }

  // Default to 15 minutes
  return new Date(now.getTime() + 15 * 60 * 1000);
};
