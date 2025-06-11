import { Types } from 'mongoose';
import connectDB from './mongodb';
import User, { IUser } from '@/models/User';
import RefreshToken from '@/models/RefreshToken';
import {
  generateAccessToken,
  generateRefreshToken,
  getTokenExpirationDate,
} from './jwt';
import { checkDatabaseConnection, checkJWTSecrets } from './env-check';

export interface RegisterUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
}

export class AuthService {
  static async registerUser(userData: RegisterUserData): Promise<AuthTokens> {
    // Check environment configuration
    checkDatabaseConnection();
    checkJWTSecrets();

    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({
      email: userData.email.toLowerCase(),
    });
    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    // Create new user
    const user = new User({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email.toLowerCase(),
      password: userData.password,
      phone: userData.phone,
    });

    await user.save();

    // Generate tokens
    return this.generateTokensForUser(user);
  }

  static async loginUser(loginData: LoginUserData): Promise<AuthTokens> {
    await connectDB();

    // Find user with password
    const user = await User.findOne({
      email: loginData.email.toLowerCase(),
    }).select('+password');

    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Check password
    const isPasswordValid = await user.comparePassword(loginData.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    // Generate tokens
    return this.generateTokensForUser(user);
  }

  static async refreshTokens(refreshTokenString: string): Promise<AuthTokens> {
    await connectDB();

    // Find the refresh token
    const refreshTokenDoc = await RefreshToken.findOne({
      token: refreshTokenString,
      isRevoked: false,
      expiresAt: { $gt: new Date() },
    }).populate('userId');

    if (!refreshTokenDoc) {
      throw new Error('Invalid or expired refresh token');
    }

    const user = refreshTokenDoc.userId as IUser;
    if (!user) {
      throw new Error('User not found');
    }

    // Revoke the old refresh token
    refreshTokenDoc.isRevoked = true;
    await refreshTokenDoc.save();

    // Generate new tokens
    return this.generateTokensForUser(user);
  }

  static async revokeRefreshToken(refreshTokenString: string): Promise<void> {
    await connectDB();

    await RefreshToken.findOneAndUpdate(
      { token: refreshTokenString },
      { isRevoked: true }
    );
  }

  static async revokeAllUserTokens(userId: string): Promise<void> {
    await connectDB();

    await RefreshToken.updateMany(
      { userId: new Types.ObjectId(userId) },
      { isRevoked: true }
    );
  }

  static async getUserById(userId: string): Promise<IUser | null> {
    await connectDB();

    return User.findById(userId);
  }

  static async getUserByEmail(email: string): Promise<IUser | null> {
    await connectDB();

    return User.findOne({ email: email.toLowerCase() });
  }

  static async updateUser(
    userId: string,
    updateData: Partial<RegisterUserData>
  ): Promise<IUser | null> {
    await connectDB();

    const { password, ...safeUpdateData } = updateData;

    return User.findByIdAndUpdate(userId, safeUpdateData, {
      new: true,
      runValidators: true,
    });
  }

  private static async generateTokensForUser(user: IUser): Promise<AuthTokens> {
    // Create refresh token document
    const refreshTokenDoc = new RefreshToken({
      userId: user._id,
      token: '', // Will be set after generating
      expiresAt: getTokenExpirationDate(
        process.env.JWT_REFRESH_EXPIRES_IN || '7d'
      ),
    });

    // Generate tokens
    const accessToken = generateAccessToken(user._id, user.email);
    const refreshToken = generateRefreshToken(
      user._id,
      refreshTokenDoc._id.toString()
    );

    // Update refresh token document with actual token
    refreshTokenDoc.token = refreshToken;
    await refreshTokenDoc.save();

    return {
      accessToken,
      refreshToken,
      user: {
        id: user._id.toString(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    };
  }
}
