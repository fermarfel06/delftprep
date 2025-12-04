import { mockUser, User } from '@/data/mockUser';

// TODO: Replace these mock functions with actual API calls

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token?: string;
}

/**
 * Mock login function
 * TODO: Replace with actual API call to POST /api/auth/login
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Mock validation
  if (!credentials.email || !credentials.password) {
    throw new Error('Email and password are required');
  }

  // Mock success response
  return {
    user: { ...mockUser, email: credentials.email },
    token: 'mock-jwt-token-123456',
  };
}

/**
 * Mock register function
 * TODO: Replace with actual API call to POST /api/auth/register
 */
export async function register(credentials: RegisterCredentials): Promise<AuthResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Mock validation
  if (!credentials.email || !credentials.password || !credentials.name) {
    throw new Error('Name, email, and password are required');
  }

  // Mock success response
  return {
    user: {
      ...mockUser,
      email: credentials.email,
      name: credentials.name,
    },
    token: 'mock-jwt-token-123456',
  };
}

/**
 * Mock logout function
 * TODO: Replace with actual API call to POST /api/auth/logout
 */
export async function logout(): Promise<void> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 200));

  // In a real implementation, this would clear server-side session
  // and possibly invalidate JWT tokens
}

/**
 * Mock forgot password function
 * TODO: Replace with actual API call to POST /api/auth/forgot-password
 */
export async function forgotPassword(email: string): Promise<{ message: string }> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (!email) {
    throw new Error('Email is required');
  }

  return {
    message: 'Password reset link sent to your email',
  };
}

/**
 * Mock get current user function
 * TODO: Replace with actual API call to GET /api/auth/me
 */
export async function getCurrentUser(): Promise<User> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  return mockUser;
}
