import jwt, { SignOptions } from 'jsonwebtoken';
import { Types } from 'mongoose';

// Improved secret management with validation
const getJWTSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  if (
    secret === 'fallback-secret-key' &&
    process.env.NODE_ENV === 'production'
  ) {
    throw new Error(
      'Production requires a secure JWT_SECRET, not the fallback value'
    );
  }
  return secret;
};

const getJWTRefreshSecret = () => {
  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) {
    throw new Error('JWT_REFRESH_SECRET environment variable is required');
  }
  if (
    secret === 'fallback-refresh-secret-key' &&
    process.env.NODE_ENV === 'production'
  ) {
    throw new Error(
      'Production requires a secure JWT_REFRESH_SECRET, not the fallback value'
    );
  }
  return secret;
};

// Use environment-specific defaults with validation
const JWT_SECRET = getJWTSecret();
const JWT_REFRESH_SECRET = getJWTRefreshSecret();
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

// Improved issuer/audience for better security
const JWT_ISSUER = process.env.JWT_ISSUER || 'fundingoptimal';
const JWT_AUDIENCE = process.env.JWT_AUDIENCE || 'fundingoptimal-users';

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
  try {
    const payload = {
      userId: userId.toString(),
      email,
    };

    const options: SignOptions = {
      expiresIn: JWT_EXPIRES_IN as unknown as number,
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
      algorithm: 'HS256' as const, // Explicitly set algorithm for security
    };

    return jwt.sign(payload, JWT_SECRET, options);
  } catch (error) {
    console.error('Failed to generate access token:', error);
    throw new Error('Token generation failed');
  }
};

export const generateRefreshToken = (
  userId: string | Types.ObjectId,
  tokenId: string
): string => {
  try {
    const payload = {
      userId: userId.toString(),
      tokenId,
    };

    const options: SignOptions = {
      expiresIn: JWT_REFRESH_EXPIRES_IN as unknown as number,
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
      algorithm: 'HS256', // Explicitly set algorithm for security
    };

    return jwt.sign(payload, JWT_REFRESH_SECRET, options);
  } catch (error) {
    console.error('Failed to generate refresh token:', error);
    throw new Error('Refresh token generation failed');
  }
};

export const verifyAccessToken = (token: string): JWTPayload => {
  try {
    const payload = jwt.verify(token, JWT_SECRET, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
      algorithms: ['HS256'], // Explicitly specify allowed algorithms
    }) as JWTPayload;

    // Additional validation
    if (!payload.userId || !payload.email) {
      throw new Error('Invalid token payload structure');
    }

    return payload;
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      console.error('JWT verification failed:', error.message);
      throw new Error('Invalid access token');
    } else if (error instanceof jwt.TokenExpiredError) {
      console.error('Access token expired:', error.message);
      throw new Error('Access token expired');
    } else if (error instanceof jwt.NotBeforeError) {
      console.error('Access token not active:', error.message);
      throw new Error('Access token not active');
    } else {
      console.error('Unexpected token verification error:', error);
      throw new Error('Token verification failed');
    }
  }
};

export const verifyRefreshToken = (token: string): RefreshTokenPayload => {
  try {
    const payload = jwt.verify(token, JWT_REFRESH_SECRET, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
      algorithms: ['HS256'], // Explicitly specify allowed algorithms
    }) as RefreshTokenPayload;

    // Additional validation
    if (!payload.userId || !payload.tokenId) {
      throw new Error('Invalid refresh token payload structure');
    }

    return payload;
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      console.error('Refresh JWT verification failed:', error.message);
      throw new Error('Invalid refresh token');
    } else if (error instanceof jwt.TokenExpiredError) {
      console.error('Refresh token expired:', error.message);
      throw new Error('Refresh token expired');
    } else if (error instanceof jwt.NotBeforeError) {
      console.error('Refresh token not active:', error.message);
      throw new Error('Refresh token not active');
    } else {
      console.error('Unexpected refresh token verification error:', error);
      throw new Error('Refresh token verification failed');
    }
  }
};

export const getTokenExpirationDate = (expiresIn: string): Date => {
  const now = new Date();

  try {
    if (expiresIn.endsWith('m')) {
      const minutes = parseInt(expiresIn.slice(0, -1));
      if (isNaN(minutes) || minutes <= 0)
        throw new Error('Invalid minutes value');
      return new Date(now.getTime() + minutes * 60 * 1000);
    } else if (expiresIn.endsWith('h')) {
      const hours = parseInt(expiresIn.slice(0, -1));
      if (isNaN(hours) || hours <= 0) throw new Error('Invalid hours value');
      return new Date(now.getTime() + hours * 60 * 60 * 1000);
    } else if (expiresIn.endsWith('d')) {
      const days = parseInt(expiresIn.slice(0, -1));
      if (isNaN(days) || days <= 0) throw new Error('Invalid days value');
      return new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
    } else if (expiresIn.endsWith('s')) {
      const seconds = parseInt(expiresIn.slice(0, -1));
      if (isNaN(seconds) || seconds <= 0)
        throw new Error('Invalid seconds value');
      return new Date(now.getTime() + seconds * 1000);
    }
  } catch (error) {
    console.error('Invalid expiresIn format:', expiresIn, error);
  }

  // Default to 15 minutes if format is invalid
  console.warn(
    'Using default 15-minute expiration due to invalid format:',
    expiresIn
  );
  return new Date(now.getTime() + 15 * 60 * 1000);
};
