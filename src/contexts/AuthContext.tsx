'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import axios from 'axios';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string; errors?: any[] }>;
  register: (
    data: RegisterData
  ) => Promise<{ success: boolean; message?: string; errors?: any[] }>;
  updateUser: (
    data: UpdateUserData
  ) => Promise<{ success: boolean; message?: string; errors?: any[] }>;
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

  const isAuthenticated = user !== null;

  // Configure Axios to include credentials (cookies) with requests
  const axiosInstance = axios.create({
    baseURL: '/api/auth',
    withCredentials: true, // Include cookies for authentication
  });

  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await axiosInstance.get('/me');
      const data = response.data;

      if (data.success && data.user) {
        setUser(data.user);
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        // Try to refresh token
        await refreshTokens();
      } else {
        console.error('Auth check failed:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const refreshTokens = async () => {
    try {
      const response = await axiosInstance.post('/refresh');
      const data = response.data;

      if (data.success && data.user) {
        setUser(data.user);
        return true;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
    return false;
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      const data = response.data;

      if (data.success) {
        setUser(data.user);
        return { success: true, message: data.message };
      } else {
        return {
          success: false,
          message: data.message || 'Login failed',
          errors: data.errors,
        };
      }
    } catch (error: any) {
      console.error('Login error:', error);
      return {
        success: false,
        message:
          error.response?.data?.message || 'Network error. Please try again.',
        errors: error.response?.data?.errors || [
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
        return { success: true, message: result.message };
      } else {
        return {
          success: false,
          message: result.message || 'Registration failed',
          errors: result.errors,
        };
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      return {
        success: false,
        message:
          error.response?.data?.message || 'Network error. Please try again.',
        errors: error.response?.data?.errors || [
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
    } catch (error: any) {
      console.error('Profile update error:', error);
      return {
        success: false,
        message:
          error.response?.data?.message || 'Network error. Please try again.',
        errors: error.response?.data?.errors || [
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
    login,
    register,
    updateUser,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
