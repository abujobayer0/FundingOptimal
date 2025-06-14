'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import axios from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  clearAuthTokens,
  isAuthenticated as checkIsAuthenticated,
} from '@/lib/client-cookies';
import { UserRole } from '@/models/User';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  phone?: string;
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    message?: string;
    errors?: { field: string; message: string }[];
  }>;
  register: (data: RegisterData) => Promise<{
    success: boolean;
    message?: string;
    errors?: { field: string; message: string }[];
  }>;
  updateUser: (data: UpdateUserData) => Promise<{
    success: boolean;
    message?: string;
    errors?: { field: string; message: string }[];
  }>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  terms: boolean;
}

interface UpdateUserData {
  firstName: string;
  lastName: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use client-cookies for authentication status
  const isAuthenticated = checkIsAuthenticated() && user !== null;
  const isAdmin = user?.role === 'admin';

  // Configure Axios to include credentials (cookies) with requests
  const axiosInstance = axios.create({
    baseURL: '/api/auth',
    withCredentials: true, // Include cookies for authentication
  });

  // Add request interceptor to include access token in headers (optional, since cookies are already included)
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add response interceptor to handle token refresh
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = getRefreshToken();
        if (refreshToken) {
          const refreshSuccess = await refreshTokens();
          if (refreshSuccess) {
            // Retry original request with new token
            const newAccessToken = getAccessToken();
            if (newAccessToken) {
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return axiosInstance(originalRequest);
            }
          }
        }
      }

      return Promise.reject(error);
    }
  );

  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Also check when tokens change
  useEffect(() => {
    const interval = setInterval(() => {
      const hasTokens = checkIsAuthenticated();
      if (!hasTokens && user) {
        // Tokens were cleared, log out user
        setUser(null);
      } else if (hasTokens && !user) {
        // Tokens exist but no user, check auth status
        checkAuthStatus();
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [user]);

  const checkAuthStatus = async () => {
    try {
      // Check if we have tokens first
      if (!checkIsAuthenticated()) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      const response = await axiosInstance.get('/me');
      const data = response.data;

      if (data.success && data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error: unknown) {
      console.error('Auth check failed:', error);

      if (
        error instanceof Error &&
        (error as unknown as { response: { status: number } }).response
          ?.status === 401
      ) {
        // Try to refresh token
        const refreshSuccess = await refreshTokens();
        if (!refreshSuccess) {
          setUser(null);
          clearAuthTokens();
        }
      } else {
        setUser(null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const refreshTokens = async () => {
    try {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        return false;
      }

      const response = await axiosInstance.post('/refresh');
      const data = response.data;

      if (data.success && data.user) {
        setUser(data.user);
        return true;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      clearAuthTokens();
    }
    return false;
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      const data = response.data;

      if (data.success) {
        setUser(data.user);
        // Tokens are automatically set by the server via cookies
        return { success: true, message: data.message };
      } else {
        return {
          success: false,
          message: data.message || 'Login failed',
          errors: data.errors,
        };
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      return {
        success: false,
        message:
          (error as unknown as { response: { data: { message: string } } })
            .response?.data?.message || 'Network error. Please try again.',
        errors: (
          error as unknown as {
            response: {
              data: { errors: { field: string; message: string }[] };
            };
          }
        ).response?.data?.errors || [
          { field: 'general', message: 'Network error' },
        ],
      };
    }
  };

  const register = async (data: RegisterData) => {
    try {
      const response = await axiosInstance.post('/register', data);
      const result = response.data;

      if (result.success) {
        setUser(result.user);
        // Tokens are automatically set by the server via cookies
        return { success: true, message: result.message };
      } else {
        return {
          success: false,
          message: result.message || 'Registration failed',
          errors: result.errors,
        };
      }
    } catch (error: unknown) {
      console.error('Registration error:', error);
      return {
        success: false,
        message:
          (error as unknown as { response: { data: { message: string } } })
            .response?.data?.message || 'Network error. Please try again.',
        errors: (
          error as unknown as {
            response: {
              data: { errors: { field: string; message: string }[] };
            };
          }
        ).response?.data?.errors || [
          { field: 'general', message: 'Network error' },
        ],
      };
    }
  };

  const logout = async () => {
    try {
      await axiosInstance.post('/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear client-side tokens
      clearAuthTokens();
      setUser(null);
    }
  };

  const updateUser = async (data: UpdateUserData) => {
    try {
      const response = await axiosInstance.put('/update-profile', data);
      const result = response.data;

      if (result.success) {
        setUser(result.user);
        return { success: true, message: result.message };
      } else {
        return {
          success: false,
          message: result.message || 'Profile update failed',
          errors: result.errors,
        };
      }
    } catch (error: unknown) {
      console.error('Profile update error:', error);
      return {
        success: false,
        message:
          (error as unknown as { response: { data: { message: string } } })
            .response?.data?.message || 'Network error. Please try again.',
        errors: (
          error as unknown as {
            response: {
              data: { errors: { field: string; message: string }[] };
            };
          }
        ).response?.data?.errors || [
          { field: 'general', message: 'Network error' },
        ],
      };
    }
  };

  const refreshUser = async () => {
    await checkAuthStatus();
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    isAdmin,
    login,
    register,
    updateUser,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
